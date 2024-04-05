import {configureStore} from "@reduxjs/toolkit";
import orderSlice from '@/6-entities/Order/model';

export const store = configureStore({
    reducer:{
        orders: orderSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch