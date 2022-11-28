import React from "react";
import {PlusOutlined} from "@ant-design/icons"
import {Input, Tooltip} from 'antd';
import {changeaccordionvalue,addsubaccodion} from "../../raducer/steper-count"
import {useDispatch} from "react-redux";
import "./accordion.css"

export default function Accordion(props) {
    console.log("props",props)
    const accordion = props.data.accordion
    const dispatch = useDispatch()
    const stateid = props?.mainid
    const commanid = props?.index

    const changeAccordion = (event,dataname,index)=>{
        dispatch(changeaccordionvalue({stateid:stateid,commanid:commanid,index:index,dataname:dataname,value:event.target.value}))
    }

    return <div>
                {accordion?.map((item,index)=>{
                    return <div className="text-end mb-2">
                                <div>
                                    <Input placeholder="Basic usage" size="large" className="me-2 accordion" value={item?.mainvalue} onChange={(e)=>changeAccordion(e,"mainvalue",index)} />
                                </div>
                                <div className="ms-4">
                                    <Input placeholder="Basic text" size="large" className="accordion" value={item?.value} onChange={(e)=>changeAccordion(e,"value",index)} />
                                </div>
                           </div>
                })}<Tooltip title="Add Accordion" onClick={()=>dispatch(addsubaccodion({stateid:stateid,commanid:commanid}))} ><PlusOutlined /></Tooltip>
           </div>
}