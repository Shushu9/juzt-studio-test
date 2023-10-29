import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarItem, CarSliceState, Status } from './types';
import { PizzaItem, PizzaSliceState } from './types';
import { fetchPizzas } from './asyncActions';

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<PizzaItem[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.items = [];
            state.status = Status.LOADING;
        });
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchPizzas.rejected, (state) => {
            state.items = [];
            state.status = Status.ERROR;
        });
    }
})

export const { setItems } = carsSlice.actions

export default carsSlice.reducer;

