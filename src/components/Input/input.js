import { Input } from 'antd';
import {useDispatch} from "react-redux";
import {Inputvalues} from "../raducer/steper-count";

export default function Inputs(props) {
    const dispach = useDispatch()
    const changeData = (event) =>{
        dispach(Inputvalues({index:props?.index,mainid:props?.index2,value:event.target.value}))
    }
    return(
        <Input style={{marginBottom:"5px",borderRadius:"10px"}} size='large'  type={props?.type} placeholder={props?.placeholder} value={props?.value} onChange={changeData} />
    )
}