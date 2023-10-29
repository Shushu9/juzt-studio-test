export type CarItem = {
    id: string,
    imageUrl: string;
    brand: string;
    model: string;
    color: string;
    price: number;
    year: number;
    engine: string;
    transmission?: string;
    range?: number;
};

export type SearchCarParams = {
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: number,
};
export interface CarSliceState {
    items: CarItem[],
    status: Status,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}