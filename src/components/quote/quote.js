import {Dropdown, Input, Space} from 'antd';
import {changequote, deleteinput, downshift, upshift} from "../../raducer/steper-count"
import {useDispatch, useSelector} from "react-redux";
import "./quote.css"
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined} from "@ant-design/icons";
import React from "react";
const { TextArea } = Input;
export default function Quote(props) {
    const {data,placeholder} = props?.data
    const dispatch = useDispatch()
    const mainid = props?.mainid
    const commanid = props?.index
    const state = useSelector(state => state.stepcounter[props?.mainid].comman)
    const changeinput = (event,name)=>{
        dispatch(changequote({stateid:mainid,commanid:commanid,dataname:name,value:event.target.value}))
    }

    const items = [{
        label: <span className={commanid ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(upshift({index: commanid, mainid: mainid,data:props?.data}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispatch(deleteinput({index: commanid, mainid: mainid}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={commanid!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(downshift({index: commanid, mainid: mainid,data:props?.data}))}}><ArrowDownOutlined /></span>,
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
            </Dropdown>
        <div className="w-100">
            <TextArea rows={4} placeholder={placeholder.quote} value={data?.quote}  onChange={(e)=>changeinput(e,"quote")} className="quote" />
            <Input placeholder={placeholder.caption} className="quote" onChange={(e)=>changeinput(e,"caption")} value={data?.caption} size='large'/>
        </div>
        </div>
    )
}