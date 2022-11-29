import React from 'react';
import {Collapse, Radio} from 'antd';
import Editor from "react-simple-code-editor";
import {highlight, languages} from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import {addchecklistvalue, changecodevalue} from "../raducer/steper-count";
import CodeEditor from "@uiw/react-textarea-code-editor";
import {useDispatch} from "react-redux";

const { Panel } = Collapse;

export default function RenderElement(props) {
    switch (props?.data?.type) {
        case "text" : return <p className={'mb-2'}>{props?.data?.value}</p>; break;
        case "h1" : return <h1 className={'mb-2'}>{props?.data?.value}</h1>; break;
        case "h2" : return <h2 className={'mb-2'}>{props?.data?.value}</h2>; break;
        case "h3" : return <h3 className={'mb-2'}>{props?.data?.value}</h3>; break;
        case "h4" : return <h4 className={'mb-2'}>{props?.data?.value}</h4>; break;
        case "h5" : return <h5 className={'mb-2'}>{props?.data?.value}</h5>; break;
        case "h6" : return <h6 className={'mb-2'}>{props?.data?.value}</h6>; break;
        case "list" : return <div className='mb-2'>{props.data?.lists.map((list)=>{
                                return <p className="mb-0">{list?.value}</p>
                             })}</div>; break;
        case "file" : return props?.data?.url && <div><img src={props?.data?.url} width={"500px"} className="mb-2" height={"300px"}/></div>
        case "table" : return   <table border={1} className="w-50 mb-2">
                                    {props?.data?.table.map((column)=>{
                                        return <tr>{column.row.map((row)=>{
                                            if(column?.type==="th"){
                                                return <th>{row?.value}</th>
                                            }else {
                                                return  <td>{row?.value}</td>
                                            }
                                        })}</tr>
                                    })}
                                </table>; break;
        case "quote" : return <div className="text-end"><h4 className="mb-0">"{props?.data?.data?.quote}"</h4><p>-{props?.data?.data?.caption}</p></div>
        case "accordion" :   return <Collapse>
                                    {props?.data?.accordion.map((accordion,index)=>{
                                        return <Panel header={accordion?.mainvalue} key={index}>
                                                    <p>{accordion?.value}</p>
                                                </Panel>
                                    })}
                                  </Collapse>; break;
        case "code" : return  <CodeEditor
                                    value={props?.data?.value}
                                    language="jsx"
                                    placeholder="Please enter code."
                                    padding={15}
                                    style={{
                                        width:"100%",
                                        fontSize: 12,
                                        backgroundColor: "#f5f5f5",
                                        fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                                    }}
                                    readOnly={true}
                                />; break;
        case "checklist" : return <div className='mb-2'>{props.data?.lists.map((list)=>{
                                        return <div className="d-flex align-items-center"><Radio className="me-0" checked={list?.check}/><p className="mb-0">{list?.value}</p></div>
                                    })}</div>; break;

        default : break
    }
}