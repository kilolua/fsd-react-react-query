import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {OrdersPage} from "@/3-pages/ordersPage";

export const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path={'orders'} element={<OrdersPage/>}></Route>
    </>
))