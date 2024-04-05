import {Card} from "antd";
import {useFormik} from "formik";
import {cities} from "@/7-shared/config/cities.ts";
import CustomInput from "@/7-shared/ui/input/Input.tsx";
import React from "react";
import SwitchAddressButton from "@/7-shared/ui/switchAddressButton/SwitchAddressButton.tsx";


const Filter = () => {
    const formik = useFormik({
        initialValues: {
            addressFrom: '',
            addressTo: '',
            orderNumber: '',
            cargoLoadingDate: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const switchAddress = (e: React.MouseEvent<HTMLButtonElement>)=>{
        e.stopPropagation();
        const addressFrom = formik.values.addressFrom;
        const addressTo = formik.values.addressTo;
        formik.setFieldValue('addressFrom', addressTo)
        formik.setFieldValue('addressTo', addressFrom)
    }
    return (
        <Card style={{maxWidth:'1109px'}}>
            <form onSubmit={formik.handleSubmit}>
                <div style={{display:'flex', flexDirection:'row'}}>
                    <CustomInput
                        style={{transform:'translateX(5px)'}}
                        id='addressFrom'
                        list='addressFromList'
                        placeholder="Basic usage"
                        datalist={cities}
                        value={formik.values.addressFrom}
                        onChange={formik.handleChange}
                    />
                    <SwitchAddressButton type='button' onClick={(e)=>{switchAddress(e)}}/>
                    <CustomInput
                        style={{transform:'translateX(-5px)'}}
                        id='addressTo'
                        list='addressToList'
                        placeholder="Basic usage"
                        datalist={cities}
                        value={formik.values.addressTo}
                        onChange={formik.handleChange}
                    />
                </div>
            </form>
        </Card>
    );
};

export default Filter;