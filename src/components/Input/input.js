import React from "react";
import {Dropdown, Input, Menu, Space} from 'antd';
import {useDispatch, useSelector} from "react-redux";
import {Inputvalues ,deleteinput,upshift,downshift} from "../../raducer/steper-count";
import {CloseOutlined, MoreOutlined,ArrowUpOutlined,ArrowDownOutlined} from "@ant-design/icons"
import "./input.css"

export default function Inputs(props) {
    const dispach = useDispatch()
    const state = useSelector(state => state.stepcounter[props?.index2].comman)
    const changeData = (event) => {
        dispach(Inputvalues({index: props?.index, mainid: props?.index2, value: event.target.value}))
    }
    const items = [{
        label: <span className={props?.index ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(upshift({index: props?.index, mainid: props?.index2,data:{type:props.type,value:props?.value,placeholder:props?.placeholder}}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispach(deleteinput({index: props?.index, mainid: props?.index2}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={props?.index!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(downshift({index: props?.index, mainid: props?.index2,data:{type:props.type,value:props?.value,placeholder:props?.placeholder}}))}}><ArrowDownOutlined /></span>,
        key: '2',}
    ]
    return (
        <div className="dropdown-box">
            <Dropdown menu={{
                items
            }} trigger={['click']} className="on-hover" overlayClassName={'on-hover-box'} >
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <MoreOutlined className='dropdown-icon ' />
                    </Space>
                </a>
            </Dropdown><Input className={props?.type} style={{marginBottom: "5px", borderRadius: "10px"}}
                                   size='large' type={props?.type} placeholder={props?.placeholder} value={props?.value}
                                   onChange={changeData}/>
        </div>
    )
}