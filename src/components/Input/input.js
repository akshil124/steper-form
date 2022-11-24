import React from "react";
import {Dropdown, Input, Menu, Space} from 'antd';
import {useDispatch} from "react-redux";
import {addinputes, Inputvalues} from "../../raducer/steper-count";
import {CloseOutlined, MoreOutlined} from "@ant-design/icons"
import "./input.css"

export default function Inputs(props) {
    const dispach = useDispatch()
    const changeData = (event) => {
        dispach(Inputvalues({index: props?.index, mainid: props?.index2, value: event.target.value}))
    }
    return (
        <div className="dropdown-box">
            <Dropdown menu={{
                items: [{
                    label: <span className={"btn dropdown"}
                                 onClick={() => {}}><CloseOutlined /></span>,
                    key: '0',
                },
                ]
            }} trigger={['hover']} className="on-hover">
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <MoreOutlined className='dropdown-icon'/>
                    </Space>
                </a>
            </Dropdown><Input className={props?.type} style={{marginBottom: "5px", borderRadius: "10px"}}
                                   size='large' type={props?.type} placeholder={props?.placeholder} value={props?.value}
                                   onChange={changeData}/>
        </div>
    )
}