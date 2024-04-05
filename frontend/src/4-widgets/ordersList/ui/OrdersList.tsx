import {FC} from 'react';
import {VirtuosoGrid} from "react-virtuoso";
import {OrderCard} from "@/6-entities/Order";
import styles from './style.module.css';
import {useQuery} from "@tanstack/react-query";
import {OrderServices} from "@/5-features/orderServices";
import {OrderI} from "@/6-entities/Order/types";
import {Card, Skeleton} from "antd";

export const OrdersList: FC = () => {
    const {
        data,
        isError,
        isSuccess,
        isLoading,
        error
    } = useQuery<OrderI[]>({
        queryKey: ['orders'],
        queryFn: OrderServices.getOrdersList
    });

    if (isLoading) {
        return (
            <div className={styles.gridContainer}>
                <div className={styles.listClassName}>
                    <Card style={{width: "547px", height: '328px'}}>
                        <Skeleton/>
                    </Card>
                </div>
            </div>
        )
    }

    if (isError) {
        console.log(data);
        return <span>Error: {error.message}</span>
    }

    return (
        <>
            {isSuccess &&
                <VirtuosoGrid
                    className={styles.gridContainer}
                    data={data}
                    listClassName={styles.listClassName}
                    itemContent={(_, order) => (
                        <>
                            <OrderCard {...order}/>
                        </>
                    )}
                />
            }
        </>
    );
};