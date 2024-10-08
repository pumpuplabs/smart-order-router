import { BigNumber } from '@ethersproject/bignumber';
import { ChainId } from '../../../..';
//l2 execution fee on optimism is roughly the same as mainnet
export const BASE_SWAP_COST = (id) => {
    switch (id) {
        case ChainId.MAINNET:
        case ChainId.ROPSTEN:
        case ChainId.RINKEBY:
        case ChainId.GÖRLI:
        case ChainId.OPTIMISM:
        case ChainId.OPTIMISTIC_KOVAN:
        case ChainId.KOVAN:
            return BigNumber.from(2000);
        case ChainId.ARBITRUM_ONE:
        case ChainId.ARBITRUM_RINKEBY:
            return BigNumber.from(5000);
        case ChainId.POLYGON:
        case ChainId.POLYGON_MUMBAI:
            return BigNumber.from(2000);
        case ChainId.BASE_SEPOLIA:
            return BigNumber.from(2000);
    }
};
export const COST_PER_INIT_TICK = (id) => {
    switch (id) {
        case ChainId.MAINNET:
        case ChainId.ROPSTEN:
        case ChainId.RINKEBY:
        case ChainId.GÖRLI:
        case ChainId.KOVAN:
            return BigNumber.from(31000);
        case ChainId.OPTIMISM:
        case ChainId.OPTIMISTIC_KOVAN:
            return BigNumber.from(31000);
        case ChainId.ARBITRUM_ONE:
        case ChainId.ARBITRUM_RINKEBY:
            return BigNumber.from(31000);
        case ChainId.POLYGON:
        case ChainId.POLYGON_MUMBAI:
            return BigNumber.from(31000);
        case ChainId.BASE_SEPOLIA:
            return BigNumber.from(31000);
    }
};
export const COST_PER_HOP = (id) => {
    switch (id) {
        case ChainId.MAINNET:
        case ChainId.ROPSTEN:
        case ChainId.RINKEBY:
        case ChainId.GÖRLI:
        case ChainId.KOVAN:
        case ChainId.OPTIMISM:
        case ChainId.OPTIMISTIC_KOVAN:
            return BigNumber.from(80000);
        case ChainId.ARBITRUM_ONE:
        case ChainId.ARBITRUM_RINKEBY:
            return BigNumber.from(80000);
        case ChainId.POLYGON:
        case ChainId.POLYGON_MUMBAI:
            return BigNumber.from(80000);
        case ChainId.BASE_SEPOLIA:
            return BigNumber.from(80000);
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FzLWNvc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL3JvdXRlcnMvYWxwaGEtcm91dGVyL2dhcy1tb2RlbHMvdjMvZ2FzLWNvc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRXRDLDZEQUE2RDtBQUM3RCxNQUFNLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxFQUFXLEVBQWEsRUFBRTtJQUN2RCxRQUFRLEVBQUUsRUFBRTtRQUNWLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNyQixLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckIsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQixLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7UUFDOUIsS0FBSyxPQUFPLENBQUMsS0FBSztZQUNoQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzFCLEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUMzQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLGNBQWM7WUFDekIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLEtBQUssT0FBTyxDQUFDLFlBQVk7WUFDdkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQy9CO0FBQ0gsQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxFQUFXLEVBQWEsRUFBRTtJQUMzRCxRQUFRLEVBQUUsRUFBRTtRQUNWLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNyQixLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckIsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQixLQUFLLE9BQU8sQ0FBQyxLQUFLO1lBQ2hCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFLLE9BQU8sQ0FBQyxRQUFRLENBQUM7UUFDdEIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQzNCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFLLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDMUIsS0FBSyxPQUFPLENBQUMsZ0JBQWdCO1lBQzNCLE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvQixLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckIsS0FBSyxPQUFPLENBQUMsY0FBYztZQUN6QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxPQUFPLENBQUMsWUFBWTtZQUN2QixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDaEM7QUFDSCxDQUFDLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxFQUFXLEVBQWEsRUFBRTtJQUNyRCxRQUFRLEVBQUUsRUFBRTtRQUNWLEtBQUssT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUNyQixLQUFLLE9BQU8sQ0FBQyxPQUFPLENBQUM7UUFDckIsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNuQixLQUFLLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDbkIsS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDO1FBQ3RCLEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUMzQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQzFCLEtBQUssT0FBTyxDQUFDLGdCQUFnQjtZQUMzQixPQUFPLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0IsS0FBSyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQ3JCLEtBQUssT0FBTyxDQUFDLGNBQWM7WUFDekIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9CLEtBQUssT0FBTyxDQUFDLFlBQVk7WUFDdkIsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ2hDO0FBQ0gsQ0FBQyxDQUFDIn0=