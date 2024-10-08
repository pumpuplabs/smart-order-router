import { Token } from '@uniswap/sdk-core';
import { ChainId } from './chains';
export declare const V3_CORE_FACTORY_ADDRESS = "0x235a0f30B8D3338E5046b2e9cDb62E5ce498d3A1";
export declare const V3_CORE_FACTORY_ADDRESS_MAP: {
    84532: string;
    1: string;
};
export declare const QUOTER_V2_ADDRESS = "0x61fFE014bA17989E743c5F6cB21bF9697530B21e";
export declare const QUOTER_V2_ADDRESS_MAP: {
    84532: string;
    1: string;
};
export declare const OVM_GASPRICE_ADDRESS = "0x420000000000000000000000000000000000000F";
export declare const ARB_GASINFO_ADDRESS = "0x000000000000000000000000000000000000006C";
export declare const TICK_LENS_ADDRESS = "0xbfd8137f7d1516D3ea5cA83523914859ec47F573";
export declare const NONFUNGIBLE_POSITION_MANAGER_ADDRESS = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
export declare const SWAP_ROUTER_ADDRESS = "0x8CE47c11c7d9c7C985FAfFe59951feDFD7A5c8Bf";
export declare const V3_MIGRATOR_ADDRESS = "0x43ED1a904548bf2BEec0CA9e1E3ffd7d8f2e16FD";
export declare const UNISWAP_MULTICALL_ADDRESS = "0x1F98415757620B543A52E61c46B32eB19261F984";
export declare const MULTICALL2_ADDRESS = "0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696";
export declare const BASE_MULTICALL3_ADDRESS = "0xcA11bde05977b3631167028862bE2a173976CA11";
export declare const WETH9: {
    [chainId in Exclude<ChainId, ChainId.POLYGON | ChainId.POLYGON_MUMBAI>]: Token;
};
