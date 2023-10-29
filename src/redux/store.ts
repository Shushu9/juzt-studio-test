import { configureStore } from '@reduxjs/toolkit'

import filter from './filter/slice'
import cars from './cars/slice'

import { useDispatch } from 'react-redux';

export const store = configureStore({
    reducer: {
        cars,
        filter,
    },
})


export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();