import { DAI_MAINNET, USDC_MAINNET, USDT_MAINNET, WBTC_MAINNET, WMATIC_POLYGON, WMATIC_POLYGON_MUMBAI, } from '../../providers/token-provider';
import { ChainId, WRAPPED_NATIVE_CURRENCY } from '../../util/chains';
export const BASES_TO_CHECK_TRADES_AGAINST = (_tokenProvider) => {
    return {
        [ChainId.MAINNET]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.MAINNET],
            DAI_MAINNET,
            USDC_MAINNET,
            USDT_MAINNET,
            WBTC_MAINNET,
        ],
        [ChainId.ROPSTEN]: [WRAPPED_NATIVE_CURRENCY[ChainId.ROPSTEN]],
        [ChainId.RINKEBY]: [WRAPPED_NATIVE_CURRENCY[ChainId.RINKEBY]],
        [ChainId.GÖRLI]: [WRAPPED_NATIVE_CURRENCY[ChainId.GÖRLI]],
        [ChainId.KOVAN]: [WRAPPED_NATIVE_CURRENCY[ChainId.KOVAN]],
        [ChainId.OPTIMISM]: [WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISM]],
        [ChainId.OPTIMISTIC_KOVAN]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.OPTIMISTIC_KOVAN],
        ],
        [ChainId.ARBITRUM_ONE]: [WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_ONE]],
        [ChainId.ARBITRUM_RINKEBY]: [
            WRAPPED_NATIVE_CURRENCY[ChainId.ARBITRUM_RINKEBY],
        ],
        [ChainId.POLYGON]: [WMATIC_POLYGON],
        [ChainId.POLYGON_MUMBAI]: [WMATIC_POLYGON_MUMBAI],
    };
};
const getBasePairByAddress = async (tokenProvider, _chainId, fromAddress, toAddress) => {
    const accessor = await tokenProvider.getTokens([toAddress]);
    const toToken = accessor.getTokenByAddress(toAddress);
    if (!toToken)
        return {};
    return {
        [fromAddress]: [toToken],
    };
};
export const ADDITIONAL_BASES = async (tokenProvider) => {
    return {
        [ChainId.MAINNET]: {
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xA948E86885e12Fb09AfEF8C52142EBDbDf73cD18', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x561a4717537ff4AF5c687328c0f7E90a319705C0', '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x956F47F50A910163D8BF957Cf5846D573E7f87CA', '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B', '0x956F47F50A910163D8BF957Cf5846D573E7f87CA')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x853d955acef822db058eb8505911ed77f175b99e', '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0', '0x853d955acef822db058eb8505911ed77f175b99e')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d')),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xeb4c2781e4eba804ce9a9803c67d0893436bb27d', '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599')),
        },
    };
};
/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 */
export const CUSTOM_BASES = async (tokenProvider) => {
    return {
        [ChainId.MAINNET]: {
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', DAI_MAINNET.address)),
            ...(await getBasePairByAddress(tokenProvider, ChainId.MAINNET, '0xd46ba6d942050d489dbd938a2c909a5d5039a161', WRAPPED_NATIVE_CURRENCY[1].address)),
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcm91dGVycy9sZWdhY3ktcm91dGVyL2Jhc2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCxXQUFXLEVBRVgsWUFBWSxFQUNaLFlBQVksRUFDWixZQUFZLEVBQ1osY0FBYyxFQUNkLHFCQUFxQixHQUN0QixNQUFNLGdDQUFnQyxDQUFDO0FBQ3hDLE9BQU8sRUFBRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU1yRSxNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FBRyxDQUMzQyxjQUE4QixFQUNkLEVBQUU7SUFDbEIsT0FBTztRQUNMLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ2pCLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUU7WUFDekMsV0FBVztZQUNYLFlBQVk7WUFDWixZQUFZO1lBQ1osWUFBWTtTQUNiO1FBQ0QsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUM7UUFDOUQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDMUQsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDaEUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMxQix1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