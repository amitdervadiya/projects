import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apifetch = createAsyncThunk('apifetch', async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data; 
});


export const apidata = createSlice({
    name: 'apidata',
    initialState: {
        data: [],    
        loading: false, 
      
    },
    reducers: {},
    extraReducers: (builder) => {
      
        builder.addCase(apifetch.pending, (state) => {
                state.loading = true;
       
            })
            builder.addCase(apifetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload; 
            })
           
    }
});

export default apidata.reducer;