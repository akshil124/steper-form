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
            state.push({count:state.length+1,comman:[
                    {
                        type : "text",
                        value : "name"
                    }
                ]})
        },
        addinputes:(state,action)=>{

        }
    },
})

// Action creators are generated for each case reducer function
export const { increment ,addinputes } = stepcounter.actions

export default stepcounter.reducer