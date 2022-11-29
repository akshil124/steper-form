import React, { useState } from "react";
import CodeEditor from '@uiw/react-textarea-code-editor';
import {changecodevalue, deleteinput, downshift, upshift} from "../../raducer/steper-count"
import {useDispatch, useSelector} from "react-redux";
import {Dropdown, Space} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined} from "@ant-design/icons";

export default function Code(props) {
    const {data,mainid,index} = props
    const dispatch = useDispatch()
    const state = useSelector(state => state.stepcounter[mainid].comman)

    const items = [{
        label: <span className={index ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(upshift({index: index, mainid: mainid,data:data}))}}><ArrowUpOutlined /></span>,
        key: '0',},{
        label: <span className="btn dropdown"
                     onClick={() => {dispatch(deleteinput({index: index, mainid: mainid}))}}><CloseOutlined /></span>,
        key: '1',},{
        label: <span className={index!==state?.length-1 ?`btn dropdown`: "btn dropdown disable"}
                     onClick={() => {dispatch(downshift({index: index, mainid: mainid,data:data}))}}><ArrowDownOutlined /></span>,
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
        {/*<Editor*/}
        {/*    value={data?.value}*/}
        {/*    onValueChange={value => dispatch(changecodevalue({value:value,mainid:mainid,index:index}))}*/}
        {/*    highlight={code => highlight(code, languages.js)}*/}
        {/*    padding={15}*/}
        {/*    className="w-100"*/}
        {/*    placeholder={"WRITE YOUR CODE HERE"}*/}
        {/*    style={{*/}
        {/*        fontFamily: '"Fira code", "Fira Mono", monospace',*/}
        {/*        fontSize: 16,*/}
        {/*    }}*/}
        {/*/>*/}
        <CodeEditor
            value={data?.value}
            language="jsx"
            placeholder="Please enter code."
            onChange={(evn) => dispatch(changecodevalue({value:evn.target.value,mainid:mainid,index:index}))}
            padding={15}
            style={{
                width:"100%",
                fontSize: 12,
                backgroundColor: "#f5f5f5",
                fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
            }}
        />
    </div>
}