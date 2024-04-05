import {FC} from "react";
import {Input, InputProps} from "antd";

interface Props extends InputProps{
    datalist?: Array<number | string>
    id:string
}

const CustomInput: FC<Props> = ({datalist, ...rest}) => {
    return (
        <>
            <Input {...rest}/>
            {!!rest.list &&
                <datalist id={rest.list}>
                    {datalist && datalist.map((item) => (
                        <option key={rest.id+rest.list+Math.random()}>{item}</option>
                    ))}
                </datalist>
            }
        </>
    );
};

export default CustomInput;