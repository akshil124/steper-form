export default function RenderElement(props) {
    switch (props?.type) {
        case "text" : return <p className={'mb-2'}>{props?.value}</p>
        case "h1" : return <h1 className={'mb-2'}>{props?.value}</h1>
        case "h2" : return <h2 className={'mb-2'}>{props?.value}</h2>
        case "h3" : return <h3 className={'mb-2'}>{props?.value}</h3>
        case "h4" : return <h4 className={'mb-2'}>{props?.value}</h4>
        case "h5" : return <h5 className={'mb-2'}>{props?.value}</h5>
        case "h6" : return <h6 className={'mb-2'}>{props?.value}</h6>
        case "list" : return props.list.map((list)=>{
                                return <p>{list?.value}</p>
                             })
        default : break
    }
}