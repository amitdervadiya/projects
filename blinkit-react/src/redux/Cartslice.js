import { createSlice } from "@reduxjs/toolkit";
import { expenseadd } from "./FeatureSlice";

export const money = createSlice({
    name: 'money',
    initialState: {
        priceproduct: 0, // Tracks total money
    },
    reducers: {
        addmoney: (state, action) => {
            state.priceproduct += Number(action.payload);
            console.log("Added:", action.payload);
        },
        minusmoney: (state, action) => {
            state.priceproduct -= Number(action.payload);
            console.log("Subtracted:", action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(expenseadd, (state, action) => {
                // Deduct expense from total money
                state.priceproduct -= Number(action.payload.expensedata);
                console.log("Expense Deducted:", action.payload.expensedata);
            });
    },
});

export const { addmoney, minusmoney } = money.actions;
export default money.reducer;
