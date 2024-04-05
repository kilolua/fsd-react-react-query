import {FC} from "react";
import {Card} from "antd";
import {OrderI} from "@/6-entities/Order/types";
import {RURub} from "@/7-shared/utils/vormaters.ts";
import AddressBlock from "@/6-entities/Order/ui/addressBlock/AddressBlock.tsx";
import styles from './style.module.css';
import DistanceBlock from "@/6-entities/Order/ui/distanceBlock/DistanceBlock.tsx";
import {formatDate} from "@/7-shared/utils/dateFromater.ts";

interface Props extends OrderI{

}

export const OrderCard:FC<Props> = (props) => {
    return (
        <Card className={styles.card}>
            <div className={styles.cardContent}>
                <div>
                    <div style={{display: 'flex', flexDirection: 'row', gap: '8px'}}>
                        <div style={{display: 'flex', flexDirection: 'column', gap: '8px'}}>
                            <AddressBlock city={props.addressFrom.city} district={props.addressFrom.district}/>
                            <AddressBlock city={props.addressTo.city} district={props.addressTo.district}/>
                        </div>
                        <div className={styles.orderNumber}>
                            №{props.orderNumber}
                        </div>
                    </div>
                    <div style={{marginTop: '12px'}}>
                        <DistanceBlock
                            distance={props.distance}
                            intermediateDeliveryPointsCount={props.intermediateDeliveryPointsCount}
                        />
                    </div>
                </div>
                <div className={styles.line}></div>
                <div className={styles.descriptionsBlock}>
                    <div className={styles.description1} style={{display: "flex", flexDirection: 'row'}}>
                        <div>
                            {props.description.cargoType}
                        </div>
                        <div style={{marginLeft: 'auto'}}>
                            {formatDate(props.cargoLoadingDate)}
                        </div>
                    </div>
                    <div className={styles.description2} style={{display: "flex", flexDirection: 'row'}}>
                        <div>
                            {props.description.weight} т. / {props.description.volume} м3
                        </div>
                        <div style={{marginLeft: 'auto'}}>
                            {props.cargoType}
                        </div>
                    </div>
                </div>
                <div className={styles.line}></div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '12px'}}>
                    <div className={styles.price}>
                        {RURub.format(props.price)}
                    </div>
                    <div className={styles.gsm}>
                        ГСМ: {RURub.format(props.gsm)}
                    </div>
                </div>
            </div>
        </Card>
    );
};