import {addlistvalue, addlistinput, removelistinput, upshift, deleteinput, downshift} from "../../raducer/steper-count"
import "./list.css"
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {Dropdown, Space} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined} from "@ant-design/icons";
export default function List(props) {
    const dispach = useDispatch()
    const {count,value,}=props?.list
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
        if(event.key==="Enter"){
            dispach(addlistinput({mainid:mainid,secondid:secondid}))
        }else if(event.target.value === '') {
            dispach(removelistinput({mainid:mainid,secondid:secondid,index:index}))
        }else {
            dispach(addlistvalue({mainid:mainid,secondid:secondid,index:index,value:event.target.value}))
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
            <input className="list-input ms-3" defaultValue={value} autoFocus={true} onKeyDown={input}/>
        </div>
    )
}