import {FC} from 'react';
import styles from './style.module.css';
import {getWordForm} from "@/7-shared/utils/wordForm.ts";

interface Props{
    distance:number,
    intermediateDeliveryPointsCount:number
}

const DistanceBlock:FC<Props> = ({distance, intermediateDeliveryPointsCount}) => {
    const getDeliveryPointsWord = getWordForm(intermediateDeliveryPointsCount, ['пункт', 'пункта', 'пунктов'])

    return (
        <div className={styles.distanceBlock}>
            <div className={styles.distance}>
                Расстояние: <span style={{color: '#404140', fontWeight: 500}}>{distance} км</span>
            </div>
            {!!intermediateDeliveryPointsCount &&
                <div className={styles.intermediateDeliveryPointsCount}>
                    +{intermediateDeliveryPointsCount} {getDeliveryPointsWord}
                </div>
            }
            <div>

            </div>
        </div>
    );
};

export default DistanceBlock;