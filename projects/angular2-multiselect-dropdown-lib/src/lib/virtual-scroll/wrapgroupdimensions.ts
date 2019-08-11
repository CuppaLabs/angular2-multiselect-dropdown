
import { WrapGroupDimension } from './wrapgroupdimension';

export interface WrapGroupDimensions {
	numberOfKnownWrapGroupChildSizes: number;
	sumOfKnownWrapGroupChildWidths: number;
	sumOfKnownWrapGroupChildHeights: number;
	maxChildSizePerWrapGroup: WrapGroupDimension[];
}