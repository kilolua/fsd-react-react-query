import {FC} from "react";
import {OrdersList} from "@/4-widgets/ordersList/ui/OrdersList.tsx";
import Filter from "@/4-widgets/filter/Filter.tsx";

export const OrdersPage: FC = () => {
    return (
        <div style={{paddingTop:'15px',display:'flex', gap:'15px', alignItems:'center', flexDirection:'column',width:'100%', height:"100vh", overflow:'hidden'}}>
            <Filter/>
            <OrdersList/>
        </div>
    );
};