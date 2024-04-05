import {createSlice} from "@reduxjs/toolkit";
import {OrderI} from "@/6-entities/Order/types";

interface InitialStateI {
    orders: OrderI[]
}

const initialState: InitialStateI = {
    orders: []
}

const orderSlice = createSlice({
    name: 'orderSlice',
    initialState,
    reducers: {
        getOrders(state, actions) {
            state.orders = actions.payload;
        }
    }
})

export const {getOrders} = orderSlice.actions;

export  default orderSlice.reducer