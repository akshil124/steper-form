import {retry} from "@reduxjs/toolkit/query";

export default function RenderElement(props) {
    console.log("props",props)
    switch (props?.type) {
        case "text" : return <p className={'mb-2'}>{props?.value}</p>
        case "h1" : return <h1 className={'mb-2'}>{props?.value}</h1>
        case "h2" : return <h2 className={'mb-2'}>{props?.value}</h2>
        case "h3" : return <h3 className={'mb-2'}>{props?.value}</h3>
        case "h4" : return <h4 className={'mb-2'}>{props?.value}</h4>
        case "h5" : return <h5 className={'mb-2'}>{props?.value}</h5>
        case "h6" : return <h6 className={'mb-2'}>{props?.value}</h6>
        case "list" : return <div className='mb-2'>{props.list.map((list)=>{
                                return <p className="mb-0">{list?.value}</p>
                             })}</div>
        case "file" : return <div><img src={props?.url} width={"500px"} className="mb-2" height={"300px"}/></div>
        case "table" : return   <table border={1} className="w-50 mb-2">
                                    {props?.table.map((column)=>{
                                        return <tr>{column.row.map((row)=>{
                                            if(column?.type==="th"){
                                                return <th>{row?.value}</th>
                                            }else {
                                                return  <td>{row?.value}</td>
                                            }
                                        })}</tr>
                                    })}
                                </table>
        case "quote" : return <div className="text-end"><h4 className="mb-0">"{props?.quote.quote}"</h4><p>-{props?.quote.caption}</p></div>

        default : break
    }
}