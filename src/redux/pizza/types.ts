
export type PizzaItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    sizes: number[],
    types: number[],
    rating: number
};

export type SearchPizzaParams = {
    sortBy: string,
    order: string,
    category: string,
    search: string,
    currentPage: string,
};

export interface PizzaSliceState {
    items: PizzaItem[],
    status: Status,
}

export enum Status {
    LOADING = 'loading',
    SUCCESS = 'completed',
    ERROR = 'error',
}