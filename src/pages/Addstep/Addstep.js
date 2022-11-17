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
    const items = (id) => {
        return [{
        label: <span className={"btn"} onClick={()=>{addinputes(id)}}>Text</span>,
        key: '0',
    }]
    }
        return(
        <div className='d-flex justify-content-center align-items-end'>
            <div>
                {steps?.map((step,i)=>{
                    let data = items(i)
                    return(<div key={i} className='input-box'>
                        <Dropdown
                            menu={{data}}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <PlusOutlined className="add-on" />
                                </Space>
                            </a>
                        </Dropdown>
                        {step?.comman.map((z)=>{
                            return(<Inputs type={z.type} value={z.value}  />)
                        })}
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