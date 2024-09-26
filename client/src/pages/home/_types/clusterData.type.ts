export interface ClusterNodeType {
	styleId: string;
	cluster: number;
	imageURL: string;
	mallTypeId: string;
	x: number;
	y: number;
}

export interface ClusterDataType {
	data: ClusterNodeType[];
}

export interface ClusterDetailDataType {
	styleId: string;
	styleName: string;
	brand: string;
	fixedPrice: number;
	discountedPrice: number;
	categoryList: CategoryList[];
}

interface CategoryList {
	categoryId: number;
	orgCategoryId: string;
	name: string;
	mallType: MallType;
}

interface MallType {
	mallTypeId: string;
	mallTypeName: string;
}
