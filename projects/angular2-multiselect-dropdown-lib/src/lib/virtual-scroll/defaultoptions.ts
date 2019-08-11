export interface VirtualScrollerDefaultOptions {
	scrollThrottlingTime: number;
	scrollDebounceTime: number;
	scrollAnimationTime: number;
	scrollbarWidth?: number;
	scrollbarHeight?: number;
	checkResizeInterval: number
	resizeBypassRefreshThreshold: number,
	modifyOverflowStyleOfParentScroll: boolean,
	stripedTable: boolean
}
