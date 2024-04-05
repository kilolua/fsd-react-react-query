import {FC} from 'react';
import styles from './style.module.css';
import {OrderAddressI} from "@/6-entities/Order/types";

const AddressBlock:FC<OrderAddressI> = ({city, district}) => {
    return (
        <div className={styles.container}>
            <div className={styles.city}>
                {city}
            </div>
            <div className={styles.district}>
                {district}
            </div>
        </div>
    );
};

export default AddressBlock;