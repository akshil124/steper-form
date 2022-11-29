import React, {useEffect} from "react";
import {addtablevalue, addtablerow, addtablecolumn, upshift, deleteinput, downshift} from "../../raducer/steper-count"
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined, PlusOutlined} from "@ant-design/icons"
import {Dropdown, Input, Space, Tooltip} from 'antd';
import "./table.css"
import {useDispatch, useSelector} from "react-redux";

export default function Table(props) {
    const dispach = useDispatch()
    const state = useSelector(state => state.stepcounter[props?.mainid].comman)
    const { table }=props?.data
    const stateid = props?.mainid
    const commanid = props?.index

    const items = [{
        label: <span className={commanid ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(upshift({index: commanid, mainid: stateid,data:{type:props.type,table:table}}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispach(deleteinput({index: commanid, mainid: stateid}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={commanid!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispach(downshift({index: commanid, mainid: stateid,data:{type:props.type,table:table}}))}}><ArrowDownOutlined /></span>,
        key: '2',}
    ]

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
        <div>
            {
                table?.map((l,i)=>{
                    return  <div className={""} key={i}>
                        {l?.row.map((row,index)=>{
                            return <input key={index} className={l?.row.length === 4 ?"set-table":l?.row.length >4 ?"set-table-input":""} value={row?.value} onChange={e=>dispach(addtablevalue({stateid:stateid,commanid:commanid,tableid:i,rowid:index,value:e.target.value}))}/>
                        })}
                        {l?.row.length > 9 ? null :
                            <Tooltip title="add row" >
                                <PlusOutlined  onClick={()=>dispach(addtablerow({stateid:stateid,commanid:commanid,tableid:i}))}/>
                            </Tooltip>
                        }

                    </div>
                })
            }
            <Tooltip title="add column">
                <PlusOutlined  onClick={()=>dispach(addtablecolumn({stateid:stateid,commanid:commanid}))}/>
            </Tooltip>
        </div>
        </div>
    )
}