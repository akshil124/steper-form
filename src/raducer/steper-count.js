import { createSlice } from '@reduxjs/toolkit'

const initialState = [{
    count:1,
    comman:[
        {
            type : "text",
            value : "",
            placeholder : "Type here"
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
        }
    },
})

// Action creators are generated for each case reducer function
export const { increment ,addinputes,Inputvalues } = stepcounter.actions

export default stepcounter.reducer