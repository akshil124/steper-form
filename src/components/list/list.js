import {addlistvalue, addlistinput, removelistinput, upshift, deleteinput, downshift,addchecklistinput,removechecklistinput,addchecklistvalue} from "../../raducer/steper-count"
import "./list.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Dropdown, Space,Input,Radio } from "antd";
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined} from "@ant-design/icons";
import Inputs from "../Input/input";
import {type} from "@testing-library/user-event/dist/type";
export default function List(props) {
    const dispach = useDispatch()
    const {count,value,check}=props?.list
    const{mainid,secondid,index,}=props
    const state = useSelector(state => state.stepcounter[mainid].comman)

    const items = [{
        label: <span className={secondid ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(upshift({index: secondid, mainid: mainid,data:{type:props.type,lists:props?.lists}}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispach(deleteinput({index: secondid, mainid: mainid}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={secondid!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(downshift({index: secondid, mainid: mainid,data:{type:props.type,lists:props?.lists}}))}}><ArrowDownOutlined /></span>,
        key: '2',}
    ]


    const input = (event) =>{
        if(props?.type==="checklist"){
            if(event.key==="Enter"){
                dispach(addchecklistinput({mainid:mainid,secondid:secondid}))
            }else if(event.target.value === '' && event.key==="Backspace") {
                dispach(removechecklistinput({mainid:mainid,secondid:secondid,index:index}))
            }else {
                dispach(addchecklistvalue({mainid:mainid,secondid:secondid,index:index,value:event.target.value,dataname:"value"}))
            }
        }else {
            if(event.key==="Enter"){
                dispach(addlistinput({mainid:mainid,secondid:secondid}))
            }else if(event.target.value === '' && event.key==="Backspace") {
                dispach(removelistinput({mainid:mainid,secondid:secondid,index:index}))
            }else {
                dispach(addlistvalue({mainid:mainid,secondid:secondid,index:index,value:event.target.value}))
            }
        }
    }
    return(
        <div className="dropdown-box">
            <Dropdown menu={{
                items
            }} trigger={['click']} className="on-hover" overlayClassName={'on-hover-box'} >
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <MoreOutlined className='dropdown-icon ' />
                    </Space>
                </a>
            </Dropdown>
            <div className={props?.type==="checklist"?"d-flex align-items-center":"w-100"}>{props?.type==="checklist"?<Radio className="me-0" onClick={()=>dispach(addchecklistvalue({mainid:mainid,secondid:secondid,index:index,dataname:"check",value:!check}))} size="large" checked={check} />:null}<Input className="list-input" size="large" value={value} autoFocus={true} onChange={(event)=>input(event)} onKeyDown={(event)=>input(event)}/></div>
        </div>
    )
}