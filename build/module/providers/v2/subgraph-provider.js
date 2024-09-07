import retry from 'async-retry';
import Timeout from 'await-timeout';
import { gql, GraphQLClient } from 'graphql-request';
import _ from 'lodash';
import { ChainId } from '../../util/chains';
import { log } from '../../util/log';
const SUBGRAPH_URL_BY_CHAIN = {
    [ChainId.MAINNET]: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
    [ChainId.RINKEBY]: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap-v2-rinkeby',
};
const threshold = 0.025;
const PAGE_SIZE = 1000; // 1k is max possible query size from subgraph.
export class V2SubgraphProvider {
    constructor(chainId, retries = 2, timeout = 360000, rollback = true) {
        this.chainId = chainId;
        this.retries = retries;
        this.timeout = timeout;
        this.rollback = rollback;
        const subgraphUrl = SUBGRAPH_URL_BY_CHAIN[this.chainId];
        if (!subgraphUrl) {
            throw new Error(`No subgraph url for chain id: ${this.chainId}`);
        }
        this.client = new GraphQLClient(subgraphUrl);
    }
    async getPools(_tokenIn, _tokenOut, providerConfig) {
        let blockNumber = (providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber)
            ? await providerConfig.blockNumber
            : undefined;
        // Due to limitations with the Subgraph API this is the only way to parameterize the query.
        const query2 = gql `
      query getPools($pageSize: Int!, $id: String) {
        pairs(
          first: $pageSize
          ${blockNumber ? `block: { number: ${blockNumber} }` : ``}
          where: { id_gt: $id }
        ) {
          id
          token0 { id, symbol }
          token1 { id, symbol }
          totalSupply
          reserveETH
          trackedReserveETH
        }
      }
    `;
        let pools = [];
        log.info(`Getting V2 pools from the subgraph with page size ${PAGE_SIZE}${(providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber)
            ? ` as of block ${providerConfig === null || providerConfig === void 0 ? void 0 : providerConfig.blockNumber}`
            : ''}.`);
        await retry(async () => {
            const timeout = new Timeout();
            const getPools = async () => {
                let lastId = '';
                let pairs = [];
                let pairsPage = [];
                do {
                    await retry(async () => {
                        const poolsResult = await this.client.request(query2, {
                            pageSize: PAGE_SIZE,
                            id: lastId,
                        });
                        pairsPage = poolsResult.pairs;
                        pairs = pairs.concat(pairsPage);
                        lastId = pairs[pairs.length - 1].id;
                    }, {
                        retries: this.retries,
                        onRetry: (err, retry) => {
                            pools = [];
                            log.info({ err }, `Failed request for page of pools from subgraph. Retry attempt: ${retry}`);
                        },
                    });
                } while (pairsPage.length > 0);
                return pairs;
            };
            try {
                const getPoolsPromise = getPools();
                const timerPromise = timeout.set(this.timeout).then(() => {
                    throw new Error(`Timed out getting pools from subgraph: ${this.timeout}`);
                });
                pools = await Promise.race([getPoolsPromise, timerPromise]);
                return;
            }
            catch (err) {
                throw err;
            }
            finally {
                timeout.clear();
            }
        }, {
            retries: this.retries,
            onRetry: (err, retry) => {
                if (this.rollback &&
                    blockNumber &&
                    _.includes(err.message, 'indexed up to')) {
                    blockNumber = blockNumber - 10;
                    log.info(`Detected subgraph indexing error. Rolled back block number to: ${blockNumber}`);
                }
                pools = [];
                log.info({ err }, `Failed to get pools from subgraph. Retry attempt: ${retry}`);
            },
        });
        // Filter pools that have tracked reserve ETH less than threshold.
        // trackedReserveETH filters pools that do not involve a pool from this allowlist:
        // https://github.com/Uniswap/v2-subgraph/blob/7c82235cad7aee4cfce8ea82f0030af3d224833e/src/mappings/pricing.ts#L43
        // Which helps filter pools with manipulated prices/liquidity.
        // TODO: Remove. Temporary fix to ensure tokens without trackedReserveETH are in the list.
        const FEI = '0x956f47f50a910163d8bf957cf5846d573e7f87ca';
        const poolsSanitized = pools
            .filter((pool) => {
            return (pool.token0.id == FEI ||
                pool.token1.id == FEI ||
                parseFloat(pool.trackedReserveETH) > threshold);
        })
            .map((pool) => {
            return {
                ...pool,
                id: pool.id.toLowerCase(),
                token0: {
                    id: pool.token0.id.toLowerCase(),
                },
                token1: {
                    id: pool.token1.id.toLowerCase(),
                },
                supply: parseFloat(pool.totalSupply),
                reserve: parseFloat(pool.trackedReserveETH),
            };
        });
        log.info(`Got ${pools.length} V2 pools from the subgraph. ${poolsSanitized.length} after filtering`);
        return poolsSanitized;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViZ3JhcGgtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcHJvdmlkZXJzL3YyL3N1YmdyYXBoLXByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sS0FBSyxNQUFNLGFBQWEsQ0FBQztBQUNoQyxPQUFPLE9BQU8sTUFBTSxlQUFlLENBQUM7QUFDcEMsT0FBTyxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQThCckMsTUFBTSxxQkFBcUIsR0FBc0M7SUFDL0QsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQ2YsNkRBQTZEO0lBQy9ELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUNmLHNFQUFzRTtDQUN6RSxDQUFDO0FBRUYsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDO0FBRXhCLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLCtDQUErQztBQWdCdkUsTUFBTSxPQUFPLGtCQUFrQjtJQUc3QixZQUNVLE9BQWdCLEVBQ2hCLFVBQVUsQ0FBQyxFQUNYLFVBQVUsTUFBTSxFQUNoQixXQUFXLElBQUk7UUFIZixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFDWCxZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLGFBQVEsR0FBUixRQUFRLENBQU87UUFFdkIsTUFBTSxXQUFXLEdBQUcscUJBQXFCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQ0FBaUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxD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