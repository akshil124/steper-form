import { createSlice } from '@reduxjs/toolkit'
import table from "../components/table/table";

const initialState = [{
    count:1,
    comman:[
        {
            type : "text",
            value : "",
            placeholder : "Type text"
        }
    ]
}]

 const stepcounter = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state)=>{
            state.push(
                {count:state.length+1,comman:[
                    {
                        type : "text",
                        value : "",
                        placeholder : "Type here"
                    }
                ]})
        },
        addinputes:(state,action)=>{
            const {index,type,placeholder} = action.payload
            state[index]={...state[index],comman:[...state[index]?.comman,
                    {
                        type : type,
                        value : "",
                        placeholder : placeholder
                    }
                ]}
        },
        Inputvalues :(state,action)=>{
            state[action.payload?.mainid].comman[action.payload?.index].value = action.payload?.value
        },
        deleteinput:(state,action)=>{
            state[action.payload?.mainid].comman.splice(action.payload?.index,1)
        },
        upshift:(state,action)=>{
            state[action.payload?.mainid].comman.splice(action?.payload?.index,1)
            state[action.payload?.mainid].comman.splice(action.payload.index-1,0,action?.payload?.data)
        },
        downshift:(state,action)=>{
            state[action.payload?.mainid].comman.splice(action?.payload?.index,1)
            state[action.payload?.mainid].comman.splice(action.payload.index+1,0,action?.payload?.data)
        },
        addlist:(state,action)=>{
            const {index,type}=action.payload
            state[index].comman.push({
                type:type,
                lists:[
                    {count:1,value:"1. "}
                ]
            })
        },
        addlistvalue:(state,action)=>{
            const {mainid,secondid,index,value}=action.payload
            // console.log("mainid",mainid)
            // console.log("second",secondid)
            // console.log("index",index)
            state[mainid].comman[secondid].lists[index].value = value
        },
        addlistinput:(state,action)=>{
            const {mainid,secondid}=action.payload
            state[mainid].comman[secondid].lists.push({
                count:state[mainid].comman[secondid].lists.length+1,value:state[mainid].comman[secondid].lists.length+1+". "
            })
        },
        removelistinput:(state,action)=>{
            const {mainid,secondid,index}=action.payload
            state[mainid].comman[secondid].lists.splice(index,1)
        },
        uploadimg:(state,action)=>{
            const {index,type}=action?.payload
            state[index].comman.push({
                type:type,
                url:""
            })
        },
        addimgurl:(state,action)=>{
            const {index,url,mainid}=action.payload
            state[mainid].comman[index].url=url
        },
        addtable:(state,action)=>{
            const {index,type} = action.payload
            state[index].comman.push({
                type:type,
                table:[
                    {   type:"th",
                        row:[
                            {value:""},
                            {value:""},
                        ]
                    },
                    {
                        row:[
                            {value:""},
                            {value:""},
                        ]
                    },
                ]
            })
        },
        addtablevalue:(state,action)=>{
            const { stateid,commanid,tableid,rowid,value}=action.payload
            state[stateid].comman[commanid].table[tableid].row[rowid].value = value
        },
        addtablerow:(state,action)=>{
            const { stateid,commanid,} = action.payload
            state[stateid].comman[commanid].table = state[stateid].comman[commanid].table.map(i=> {
                return {...i,row:[...i.row,{value:""}]}
            } )
        },
        addtablecolumn:(state,action)=>{
            const { stateid,commanid,} = action.payload
            state[stateid].comman[commanid].table.push({
                row: state[stateid].comman[commanid].table[0].row.map(()=>{
                    return {value:""}
                })
            })
        },
        addquote:(state,action)=>{
            const {index ,type}= action.payload
            state[index].comman.push({
                type:type,
                data:{
                    quote:"",
                    caption:"",
                },
                placeholder:{
                    quote:"Enter a Quote",
                    caption:"Enter a Caption"
                }
            })
        },
        changequote:(state,action)=>{
            const {stateid,commanid,value,dataname} = action.payload
            state[stateid].comman[commanid].data = {...state[stateid].comman[commanid].data,[dataname] : value}
        },
        addaccodion:(state,action)=>{
            const {index,type}=action.payload
            state[index].comman.push({
                type:type,
                accordion:[
                    {
                        mainvalue:"",
                        value:""
                    }
                ]
            })
        },
        changeaccordionvalue:(state,action)=>{
            const {stateid,commanid,index,dataname,value} = action.payload
            state[stateid].comman[commanid].accordion[index]={...state[stateid].comman[commanid].accordion[index],[dataname]:value}
        },
        addsubaccodion:(state,action)=>{
            const {stateid,commanid} = action.payload
            state[stateid].comman[commanid].accordion.push({
                value:"",
                mainvalue:""
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const {increment,addinputes,Inputvalues,deleteinput,upshift,downshift,addlist,addlistvalue,addlistinput,removelistinput,uploadimg,addimgurl ,addtable,addtablevalue,addtablerow,addtablecolumn,addquote,changequote,addaccodion,changeaccordionvalue,addsubaccodion} = stepcounter.actions

export default stepcounter.reducer