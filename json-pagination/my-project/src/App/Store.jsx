import{ configureStore }from '@reduxjs/toolkit'
import apidata from '../Features/Slice'

export const store = configureStore({
    reducer: {
        apikey: apidata
    }
})