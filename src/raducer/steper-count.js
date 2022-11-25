import { createSlice } from '@reduxjs/toolkit'

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
            console.log("sdfg",state[mainid].comman[secondid].lists[state[mainid].comman[secondid].lists.length])
            state[mainid].comman[secondid].lists[state[mainid].comman[secondid].lists.length-1].focus = true
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
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment ,addinputes,Inputvalues,deleteinput,upshift,downshift,addlist,addlistvalue,addlistinput,removelistinput,uploadimg,addimgurl } = stepcounter.actions

export default stepcounter.reducer