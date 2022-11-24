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
            state[action.payload?.index].comman.push({
                type:action?.payload?.type,
                lists:[
                    {count:1,value:""}
                ]
            })
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment ,addinputes,Inputvalues,deleteinput,upshift,downshift,addlist } = stepcounter.actions

export default stepcounter.reducer