import React from "react";
import {Dropdown, Space, Menu} from 'antd';
import {PlusOutlined, FileTextOutlined,OrderedListOutlined,FileImageOutlined,TableOutlined,DoubleRightOutlined,MenuUnfoldOutlined,CodepenOutlined,CheckCircleOutlined} from "@ant-design/icons"
import {useSelector, useDispatch} from 'react-redux'
import {increment, addinputes,addlist,uploadimg,addtable,addquote,addaccodion,addcode,addchecklist} from "../../raducer/steper-count";
import Inputs from "../../components/Input/input";
import List from "../../components/list/list";
import Uploads from "../../components/upload/upload";
import Table from "../../components/table/table"
import './Addstep.css'
import Quote from "../../components/quote/quote";
import Accordion from "../../components/accordion/accordion";
import Code from "../../components/code/code";

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
    const AddStep=(data,index,mainindex)=>{
        const {type,value,placeholder,lists,url} = data
        if(type === "text" || type === "text" ||type === "h1" || type === "h2" || type === "h3" || type === "h4" || type === "h5" || type === "h6"){
            return  <Inputs type={type} key={index} value={value} placeholder={placeholder}  index2={mainindex} index={index}/>
        }
        else if(type ==="list"){
            return (
                <div key={index}>
                    {lists?.map((list,i)=>{
                        return <List list={list} lists={lists} key={i} index={i} mainid={mainindex} type={type} secondid={index}/>
                    })}
                </div>
            )
        }else if(type==="file"){
            return <Uploads key={index} data={data} mainid={mainindex} index={index} type={type} url={url}/>
        }else if(type==="table"){
             return <Table key={index} mainid={mainindex} index={index} type={type} data={data} />
        }else if(type === "quote"){
            return <Quote key={index} mainid={mainindex} index={index} type={type} data={data}/>
        }else if(type==="accordion"){
            return <Accordion key={index} mainid={mainindex} index={index} type={type} data={data}/>
        }else if (type==="code"){
            return <Code  key={index} mainid={mainindex} index={index} data={data} />
        }else if(type==="checklist"){
            return (
                <div key={index}>
                    {lists?.map((list,i)=>{
                        return <List list={list} lists={lists} key={i} index={i} mainid={mainindex} type={type} secondid={index}/>
                    })}
                </div>
            )
        }
    }

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
                                                 onClick={() => dispatch(addinputes({index:i,type:"text",placeholder : "Type text"}))}><FileTextOutlined className="me-1"/>Text</span>,
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
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addlist({index:i,type:"list"}))}><OrderedListOutlined className="me-1"/>list</span>,
                                    key: '3',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(uploadimg({index:i,type:"file"}))}><FileImageOutlined className="me-1"/>Image</span>,
                                    key: '4',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addtable({index:i,type:"table"}))}><TableOutlined className="me-1"/>Table</span>,
                                    key: '5',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addquote({index:i,type:"quote"}))}><DoubleRightOutlined className="me-1"/>Quote</span>,
                                    key: '6',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addaccodion({index:i,type:"accordion"}))}><MenuUnfoldOutlined className="me-1"/>Accodion</span>,
                                    key: '7',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addcode({index:i,type:"code"}))}><CodepenOutlined className="me-1"/>Code</span>,
                                    key: '8',
                                },
                                {
                                    label: <span className={"btn dropdown"}
                                                 onClick={() => dispatch(addchecklist({index:i,type:"checklist"}))}><CheckCircleOutlined className="me-1"/>Check list</span>,
                                    key: '9',
                                },
                            ]
                        }} trigger={['hover']} overlayClassName="set-scroll">
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <PlusOutlined className="add-on"/>
                                </Space>
                            </a>
                        </Dropdown>
                        <div className='set-fild w-100'>
                            {step?.comman.map((z, i) => {
                                return  AddStep(z,i,index)
                            })}
                        </div>

                    </div>)
                })}
            </div>

            <div className="plus-box">
                <PlusOutlined style={{color: "#ffffff", fontSize: "25px"}} onClick={() => dispatch(increment())}/>
            </div>

        </div>

    )
}

export default Addstep