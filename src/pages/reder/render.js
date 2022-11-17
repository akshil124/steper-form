import {useState} from "react";
import {useSelector} from "react-redux";
import { Button, message, Steps } from 'antd';
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
            <div className="steps-content">{}</div>
            <div className="steps-action">
                {current > 0 && (
                    <Button
                        style={{
                            margin: '0 8px',
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                )}
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