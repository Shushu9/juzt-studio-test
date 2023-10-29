export enum SortPropertyEnum {
    BRAND_DESC = 'brand',
    BRAND_ASC = '-brand',
    YEAR_DESC = 'year',
    YEAR_ASC = '-year',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
}



export type SortType = {
    name: string,
    sort: SortPropertyEnum,
}

export interface FilterSliceState {
    categoryId: number,
    currentPage: number,
    searchValue: string,
    sortType: SortType
}