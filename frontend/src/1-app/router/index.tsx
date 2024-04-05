import { createHashRouter, createRoutesFromElements, Route} from "react-router-dom";
import {OrdersPage} from "@/3-pages/ordersPage";

export const router = createHashRouter(createRoutesFromElements(
    <>
        <Route path={'orders'} element={<OrdersPage/>}></Route>
    </>
))