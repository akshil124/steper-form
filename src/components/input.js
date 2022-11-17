import { Input } from 'antd';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Inputvalues} from "../raducer/steper-count";

export default function Inputs(props) {
    const [value,setValue]= useState(props?.value)
    const dispach = useDispatch()
    const changeData = (event) =>{
        // setValue(event.target.value)
        dispach(Inputvalues({index:props?.index,mainid:props?.index2,value:event.target.value}))
    }
    return(
        <Input style={{marginBottom:"5px"}} type={props?.type} value={props?.value} onChange={changeData} />
    )
}