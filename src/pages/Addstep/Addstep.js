import React from "react";
import {Dropdown, Space, Menu} from 'antd';
import {PlusOutlined, FileTextOutlined} from "@ant-design/icons"
import {useSelector, useDispatch} from 'react-redux'
import {increment, addinputes} from "../../raducer/steper-count";
import Inputs from "../../components/Input/input";
import './Addstep.css'
import {autoBatchEnhancer} from "@reduxjs/toolkit";

function Addstep() {
    const steps = useSelector((state) => state?.stepcounter)

    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type,
        };
    }

    let items = []
    //     getItem('Heading', 'sub1',null , [
    //         getItem('Item 1', null, null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    //     ])]

    const dispatch = useDispatch()
    return (
        <div className='d-flex justify-content-center align-items-end'>
            <div>
                {steps?.map((step, i) => {
                    let index = i
                    return (<div key={i} className='input-box'>
                        <Dropdown menu={{
                            items: [{
                                label: <span className={"btn dropdown"}
                                             onClick={() => dispatch(addinputes({index:i,type:"text",placeholder : "Type text"}))}><FileTextOutlined/>Text</span>,
                                key: '0',
                            },
                                {
                                    label: <Menu
                                        mode="vertical"
                                        style={{margin: 0}}
                                        items={items = [
                                            getItem('Heading', 'sub1', null, [
                                                getItem('Items', null, null, [getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h1",placeholder : "Type H1"}))}>H1</span>, '1'), getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h2",placeholder : "Type H2"}))}>H2</span>, '2'), getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h3",placeholder : "Type H3"}))}>H3</span>, '3'), getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h4",placeholder : "Type H4"}))}>H4</span>, '4'), getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h5",placeholder : "Type H5"}))}>H5</span>, '5'), getItem(<span className={"dropdown"} onClick={() => dispatch(addinputes({index:i,type:"h6",placeholder : "Type H6"}))}>H6</span>, '6'),], 'group'),
                                            ]),]}
                                    />
                                }
                            ]
                        }} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <PlusOutlined className="add-on"/>
                                </Space>
                            </a>
                        </Dropdown>
                        <div className='set-fild w-100'>
                            {step?.comman.map((z, i) => {
                                return (<Inputs type={z?.type} value={z?.value} placeholder={z?.placeholder} key={i}
                                                index2={index} index={i}/>)
                            })}
                        </div>

                    </div>)
                })}
            </div>


            <div className="plus-box">
                <PlusOutlined style={{color: "#ffffff", fontSize: "25px"}} onClick={() => dispatch(increment())}/>
            </div>

            {/*<Link className="plus-box" to={"/render"}>*/}
            {/*    reander*/}
            {/*</Link>*/}
        </div>

    )
}

export default Addstep