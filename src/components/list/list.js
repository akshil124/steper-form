import {addlistvalue,addlistinput,removelistinput} from "../../raducer/steper-count"
import "./list.css"
import {useDispatch} from "react-redux";
import {useEffect} from "react";
export default function List(props) {
    const dispach = useDispatch()
    const {count,value,}=props?.list
    const{mainid,secondid,index,}=props
    const focus = props?.list?.focus
    const input = (event) =>{
        if(event.key==="Enter"){
            dispach(addlistinput({mainid:mainid,secondid:secondid}))
        }else if(event.target.value === '') {
            dispach(removelistinput({mainid:mainid,secondid:secondid,index:index}))
        }else {
            dispach(addlistvalue({mainid:mainid,secondid:secondid,index:index,value:event.target.value}))
        }
    }
    useEffect(()=>{
        document.getElementById("focus")?.focus()
    },[focus])

    return(
        <>
            <input className="list-input ms-3" id={focus ?  "focus" : null } defaultValue={value} autoFocus={true} onKeyDown={input}/>
        </>
    )
}