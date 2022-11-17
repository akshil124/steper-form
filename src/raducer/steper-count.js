import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    count:1,
    comman:[
        {
            type : "text",
            value : "name"
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
                        value : "name"
                    }
                ]})
        },
        addinputes:(state,action)=>{
            state[action.payload]={...state[action.payload],comman:[...state[action.payload]?.comman,
                    {
                        type : "text",
                        value : "name"
                    }
                ]}
        },
        Inputvalues :(state,action)=>{
            state[action.payload?.mainid].comman[action.payload?.index].value = action.payload?.value
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment ,addinputes,Inputvalues } = stepcounter.actions

export default stepcounter.reducer