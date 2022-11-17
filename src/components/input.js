import { Input } from 'antd';
import {useState} from "react";
export default function Inputs(props) {
    const [value,setValue]= useState(props?.value)
    const changeData = (event) =>{
        setValue(event.target.value)
    }
    return(
        <Input type={props?.type} value={value} onChange={changeData} />
    )
}