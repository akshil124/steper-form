import React, {useEffect} from "react";
import {addtablevalue,addtablerow,addtablecolumn} from "../../raducer/steper-count"
import {PlusOutlined} from "@ant-design/icons"
import { Tooltip } from 'antd';
import "./table.css"
import {useDispatch, useSelector} from "react-redux";

export default function Table(props) {
    const dispach = useDispatch()
    const st = useSelector(state => state)
    const { table }=props?.data
    const stateid = props?.mainid
    const commanid = props?.index
    useEffect(()=>{

    console.log('st',st)
    },[st])
    return(
        <div className={"ms-3"}>
            {
                table?.map((l,i)=>{
                    return  <div className={""}>
                        {l?.row.map((row,index)=>{
                            return <input key={index} className={l?.row.length>3?"set-table":""} value={row?.value} onChange={e=>dispach(addtablevalue({stateid:stateid,commanid:commanid,tableid:i,rowid:index,value:e.target.value}))}/>
                        })}
                        <Tooltip title="add row" >
                            <PlusOutlined  onClick={()=>dispach(addtablerow({stateid:stateid,commanid:commanid,tableid:i}))}/>
                        </Tooltip>
                    </div>
                })
            }
            <Tooltip title="add column">
                <PlusOutlined  onClick={()=>dispach(addtablecolumn({stateid:stateid,commanid:commanid}))}/>
            </Tooltip>
        </div>
    )
}