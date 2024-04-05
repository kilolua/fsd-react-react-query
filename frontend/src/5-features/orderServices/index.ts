
import {OrderI} from "@/6-entities/Order/types";
import {fakerMock} from "@/7-shared/api";

export class OrderServices{
    static async getOrdersList():Promise<OrderI[]>{
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(fakerMock.getOrders());
            }, 2000)
        })
    }
}