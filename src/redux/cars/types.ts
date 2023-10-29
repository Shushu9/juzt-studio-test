
export type PizzaItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    sizes: number[],
    types: number[],
    rating: number
};

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

export type SearchPizzaParams = {
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: string,
};

export type SearchCarParams = {
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: number,
};

export interface PizzaSliceState {
    items: PizzaItem[],
    status: Status,
}

export interface CarSliceState {
    items: CarItem[],
    status: Status,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}