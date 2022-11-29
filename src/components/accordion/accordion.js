import React from "react";
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined, PlusOutlined} from "@ant-design/icons"
import {Dropdown, Input, Space, Tooltip} from 'antd';
import {changeaccordionvalue, addsubaccodion, upshift, deleteinput, downshift} from "../../raducer/steper-count"
import {useDispatch, useSelector} from "react-redux";
import "./accordion.css"

export default function Accordion(props) {
    const accordion = props.data.accordion
    const dispatch = useDispatch()
    const stateid = props?.mainid
    const commanid = props?.index
    const state = useSelector(state => state.stepcounter[stateid].comman)

    const changeAccordion = (event,dataname,index)=>{
        dispatch(changeaccordionvalue({stateid:stateid,commanid:commanid,index:index,dataname:dataname,value:event.target.value}))
    }

    const items = [{
        label: <span className={commanid ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(upshift({index: commanid, mainid: stateid,data:props?.data}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispatch(deleteinput({index: commanid, mainid: stateid}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={commanid!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(downshift({index: commanid, mainid: stateid,data:props?.data}))}}><ArrowDownOutlined /></span>,
        key: '2',}
    ]

    return <div className={"dropdown-box"}>
                <Dropdown menu={{
                    items
                }} trigger={['click']} className="on-hover" overlayClassName={'on-hover-box'}>
                    <a onClick={e => e.preventDefault()}>
                        <Space>
                            <MoreOutlined className='dropdown-icon '/>
                        </Space>
                    </a>
                </Dropdown>
                <div className="w-100">{accordion?.map((item,index)=>{
                    return <div className="text-end mb-2" key={index}>
                                <div>
                                    <Input placeholder="Add Accordion Header" size="large" className="me-2 accordion" value={item?.mainvalue} onChange={(e)=>changeAccordion(e,"mainvalue",index)} />
                                </div>
                                <div className="ms-4">
                                    <Input placeholder="Add Accordion text" size="large" className="accordion" value={item?.value} onChange={(e)=>changeAccordion(e,"value",index)} />
                                </div>
                           </div>
                })}<Tooltip title="Add Accordion" onClick={()=>dispatch(addsubaccodion({stateid:stateid,commanid:commanid}))} ><PlusOutlined /></Tooltip></div>
           </div>
}