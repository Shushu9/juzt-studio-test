import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CarItem, SearchCarParams } from './types';

export const fetchCars = createAsyncThunk<CarItem[], SearchCarParams>('pizza/fetchPizzasStatus', async (params) => {
    const {
        order,
        sortBy,
        category,
        search,
        currentPage,
    } = params
    const { data } = await axios.get<CarItem[]>(`https://651701c309e3260018ca9138.mockapi.io/elements?page=${currentPage}&limit=10&${category}&sortBy=${sortBy}&order=${order}${search}`);

    return data;
})
