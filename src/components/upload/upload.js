import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {Dropdown, Space, Spin} from 'antd';
import {addimgurl, deleteinput, downshift, upshift} from "../../raducer/steper-count"
import {ArrowDownOutlined, ArrowUpOutlined, CloseOutlined, MoreOutlined} from "@ant-design/icons";

let {Upload} = require("upload-js")
let upload = Upload({apiKey: "public_12a1xsn7FEtqcToNzCTwCp6vSp7p"})

export default function Uploads(props) {
    const dipatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const state = useSelector(state => state.stepcounter[props?.mainid].comman)
    const items = [{
        label: <span className={props?.index ? `btn dropdown` : "btn dropdown disable"}
                     onClick={() => {
                         dipatch(upshift({
                             index: props?.index,
                             mainid: props?.mainid,
                             data: {type: props.type, url: props?.url}
                         }))
                     }}><ArrowUpOutlined/></span>,
        key: '0',
    }, {
        label: <span className="btn dropdown"
                     onClick={() => {
                         dipatch(deleteinput({index: props?.index, mainid: props?.mainid}))
                     }}><CloseOutlined/></span>,
        key: '1',
    }, {
        label: <span className={props?.index !== state?.length - 1 ? `btn dropdown` : "btn dropdown disable"}
                     onClick={() => {
                         dipatch(downshift({
                             index: props?.index,
                             mainid: props?.mainid,
                             data: {type: props.type, url: props?.url}
                         }))
                     }}><ArrowDownOutlined/></span>,
        key: '2',
    }
    ]

    let uploadFile = async event => {
        setLoading(true)
        let file = event.target.files[0];
        let result = await upload.uploadFile(file)
        let {fileUrl, filePath} = result
        setLoading(false)
        dipatch(addimgurl({url: fileUrl, mainid: props?.mainid, index: props?.index}))
        alert(`File uploaded! ${fileUrl}`);
    };

    if (props?.data?.url) {
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
            <img src={props?.data?.url} width="100%" height={"300px"}
                                                 className=" mb-2"/>
        </div>
    } else {
        return <div className={"dropdown-box"}>
            <Dropdown menu={{
                items
            }} trigger={['click']} className="on-hover" overlayClassName={'on-hover-box'}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        <MoreOutlined className='dropdown-icon '/>
                    </Space>
                </a>
            </Dropdown><Spin spinning={loading}><input type="file" onChange={uploadFile}/></Spin></div>
    }
}