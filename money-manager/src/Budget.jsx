import { createSlice } from "@reduxjs/toolkit";
import {  expenseadd } from "../app/Expense";


export const adddata = createSlice({
    name: 'adddata',
    initialState: {
        budget: 0,

    },
    reducers: {
        adddata1: ((state, action) => {
            state.budget += Number(action.payload)
            console.log(action.payload)
        })
        
    },
    extraReducers: (builder) => {
        builder.addCase(expenseadd, (state, action) => {
            
            state.budget -= Number(action.payload.expensedata)

        })

    }

})
export const { adddata1 } = adddata.actions;
export default adddata.reducer