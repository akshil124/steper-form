import React, {useState} from "react";
import {useSelector} from "react-redux";
import { Button, message, Steps } from 'antd';
import RenderElement from "../../components/render-element"
import "./render.css"
export default function Render() {
    const [current,setCurrent] = useState(0)
    const steps = useSelector((state)=>state?.stepcounter)
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const items = steps.map((item) => ({
        key: item.count,
    }));
    return(
        <div className={"container"}>
            <Steps current={current} items={items} />
            <div className="steps-content">{steps[current].comman.map((data,i)=>{
                return <RenderElement type={data?.type} value={data?.value} list={data?.lists} url={data?.url} table={data?.table} key={i} />
            })}</div>
            <div className="steps-action">
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                        disabled={current > 0 ? false : true}
                    >
                        Previous
                    </Button>
                {current < steps.length - 1 && (
                    <Button type="primary" onClick={() => next()}>
                        Next
                    </Button>
                )}
                {current === steps.length - 1 && (
                    <Button type="primary" onClick={() => message.success('Processing complete!')}>
                        Done
                    </Button>
                )}
            </div>
        </div>
    )
}