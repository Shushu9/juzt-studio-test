import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarItem, CarSliceState, Status } from './types';
import { fetchCars } from './asyncActions';

const initialState: CarSliceState = {
    items: [],
    status: Status.LOADING,
}

export const carsSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {
        setItems: (state, action: PayloadAction<CarItem[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCars.pending, (state) => {
            state.items = [];
            state.status = Status.LOADING;
        });
        builder.addCase(fetchCars.fulfilled, (state, action) => {
            state.items = action.payload;
            state.status = Status.SUCCESS;
        });
        builder.addCase(fetchCars.rejected, (state) => {
            state.items = [];
            state.status = Status.ERROR;
        });
    }
})

export const { setItems } = carsSlice.actions

export default carsSlice.reducer;

