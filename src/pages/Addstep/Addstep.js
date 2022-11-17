import { Dropdown, Space ,Button } from 'antd';
import {PlusOutlined} from "@ant-design/icons"
import { useSelector, useDispatch } from 'react-redux'
import {increment,addinputes} from "../../raducer/steper-count";
import Inputs from "../../components/input";
import './Addstep.css'
import * as React from "react";
function Addstep() {
    const steps = useSelector((state)=> state?.stepcounter)
    const dispatch = useDispatch()
        return(
        <div className='d-flex justify-content-center align-items-end'>
            <div>
                {steps?.map((step,i)=>{
                    let index = i
                    return(<div key={i} className='input-box'>
                        <Dropdown menu={{ items : [{
                                label: <span className={"btn"} onClick={()=>dispatch(addinputes(i))} >Text</span>,
                                key: '0',
                            }]}} trigger={['click']}>
                            <a onClick={e => e.preventDefault()}>
                                <Space>
                                    <PlusOutlined className="add-on" />
                                </Space>
                            </a>
                        </Dropdown>
                        <div className='set-fild w-100'>
                            {step?.comman.map((z,i)=>{
                                return(<Inputs type={z.type} value={z.value} key={i} index2={index} index={i}/>)
                            })}
                        </div>

                    </div>)
                })}
            </div>


            <div className="plus-box">
                <PlusOutlined style={{color:"#ffffff",fontSize:"25px"}} onClick={()=>dispatch(increment())} />
            </div>

            {/*<Link className="plus-box" to={"/render"}>*/}
            {/*    reander*/}
            {/*</Link>*/}
        </div>

    )
}
export default Addstep