import { DAI_ARBITRUM, DAI_ARBITRUM_RINKEBY, DAI_GÖRLI, DAI_KOVAN, DAI_MAINNET, DAI_OPTIMISM, DAI_OPTIMISTIC_KOVAN, DAI_POLYGON_MUMBAI, DAI_RINKEBY_1, DAI_RINKEBY_2, DAI_ROPSTEN, USDC_ARBITRUM, USDC_BASE_SEPOLIA, USDC_GÖRLI, USDC_KOVAN, USDC_MAINNET, USDC_OPTIMISM, USDC_OPTIMISTIC_KOVAN, USDC_POLYGON, USDC_ROPSTEN, USDT_ARBITRUM, USDT_ARBITRUM_RINKEBY, USDT_GÖRLI, USDT_KOVAN, USDT_MAINNET, USDT_OPTIMISM, USDT_OPTIMISTIC_KOVAN, USDT_ROPSTEN, WBTC_GÖRLI, } from '../../../providers/token-provider';
import { ChainId } from '../../../util/chains';
export const usdGasTokensByChain = {
    [ChainId.MAINNET]: [DAI_MAINNET, USDC_MAINNET, USDT_MAINNET],
    [ChainId.RINKEBY]: [DAI_RINKEBY_1, DAI_RINKEBY_2],
    [ChainId.ARBITRUM_ONE]: [DAI_ARBITRUM, USDC_ARBITRUM, USDT_ARBITRUM],
    [ChainId.OPTIMISM]: [DAI_OPTIMISM, USDC_OPTIMISM, USDT_OPTIMISM],
    [ChainId.OPTIMISTIC_KOVAN]: [
        DAI_OPTIMISTIC_KOVAN,
        USDC_OPTIMISTIC_KOVAN,
        USDT_OPTIMISTIC_KOVAN,
    ],
    [ChainId.ARBITRUM_RINKEBY]: [DAI_ARBITRUM_RINKEBY, USDT_ARBITRUM_RINKEBY],
    [ChainId.KOVAN]: [DAI_KOVAN, USDC_KOVAN, USDT_KOVAN],
    [ChainId.GÖRLI]: [USDC_GÖRLI, USDT_GÖRLI, WBTC_GÖRLI, DAI_GÖRLI],
    [ChainId.ROPSTEN]: [DAI_ROPSTEN, USDC_ROPSTEN, USDT_ROPSTEN],
    [ChainId.POLYGON]: [USDC_POLYGON],
    [ChainId.POLYGON_MUMBAI]: [DAI_POLYGON_MUMBAI],
    [ChainId.BASE_SEPOLIA]: [USDC_BASE_SEPOLIA],
};
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IV3GasModelFactory
 */
export class IV3GasModelFactory {
}
/**
 * Factory for building gas models that can be used with any route to generate
 * gas estimates.
 *
 * Factory model is used so that any supporting data can be fetched once and
 * returned as part of the model.
 *
 * @export
 * @abstract
 * @class IV2GasModelFactory
 */
export class IV2GasModelFactory {
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FzLW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcnMvYWxwaGEtcm91dGVyL2dhcy1tb2RlbHMvZ2FzLW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxZQUFZLEVBQ1osb0JBQW9CLEVBQ3BCLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLGFBQWEsRUFDYixhQUFhLEVBQ2IsV0FBVyxFQUNYLGFBQWEsRUFDYixpQkFBaUIsRUFDakIsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osWUFBWSxFQUNaLGFBQWEsRUFDYixxQkFBcUIsRUFDckIsVUFBVSxFQUNWLFVBQVUsRUFDVixZQUFZLEVBQ1osYUFBYSxFQUNiLHFCQUFxQixFQUNyQixZQUFZLEVBQ1osVUFBVSxHQUNYLE1BQU0sbUNBQW1DLENBQUM7QUFTM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBTy9DLE1BQU0sQ0FBQyxNQUFNLG1CQUFtQixHQUF1QztJQUNyRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsWUFBWSxDQUFDO0lBQzVELENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQztJQUNqRCxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxDQUFDO0lBQ3BFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxhQUFhLENBQUM7SUFDaEUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtRQUMxQixvQkFBb0I7UUFDcEIscUJBQXFCO1FBQ3JCLHFCQUFxQjtLQUN0QjtJQUNELENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQztJQUN6RSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQ3BELENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsU0FBUyxDQUFDO0lBQ2hFLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxZQUFZLENBQUM7SUFDNUQsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUM7SUFDakMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztJQUM5QyxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO0NBQzVDLENBQUM7QUFpQ0Y7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0Isa0JBQWtCO0NBVXZDO0FBRUQ7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sT0FBZ0Isa0JBQWtCO0NBT3ZDIn0=