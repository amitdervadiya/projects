import { createSlice } from "@reduxjs/toolkit";



export const expense = createSlice({
    name: 'expense',
    initialState:{
        storemoney:[]
    },
    reducers:{
    expenseadd:(state,action)=>{
        state.storemoney.push(action.payload)
        console.log(action.payload)
    }
    
    }
})
export const {expenseadd} = expense.actions;
export default expense.reducer