import { configureStore } from '@reduxjs/toolkit'
import adddata from '../src/Budget'
import  expense  from './Expense'

export const store = configureStore({
    reducer: {
        moneymanagerkey: adddata,
        expensekey:expense,
    },

})
