import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const apifetch = createAsyncThunk('apifetch', async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
});


export const adddata = createAsyncThunk('adddata', async (data) => {
    const response = await axios.post('http://localhost:5000/products', data);
    return response.data;
});


export const deletedata = createAsyncThunk('deletedata', async (id) => {
    await axios.delete(`http://localhost:5000/products/${id}`);
    return id;
});

<<<<<<< HEAD:amitdervadiya projects main json-pagination-my-project/src/Features/Slice.jsx
export const editdata = createAsyncThunk('editdata', async ({ id, title, price, category,image }) => {
=======
export const editdata = createAsyncThunk('editdata', async ({ id, title, price, category }) => {
>>>>>>> 56b5206fc6cfcfe0818a0dace6cd0a5d1faa2ea9:json-pagination/my-project/src/Features/Slice.jsx
    const response = await axios.put(`http://localhost:5000/products/${id}`, {
        title,
        price,
        category,
<<<<<<< HEAD:amitdervadiya projects main json-pagination-my-project/src/Features/Slice.jsx
        image,
=======
>>>>>>> 56b5206fc6cfcfe0818a0dace6cd0a5d1faa2ea9:json-pagination/my-project/src/Features/Slice.jsx
    });
    return response.data;
});


export const apidata = createSlice({
    name: 'apidata',
    initialState: {
        data: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(apifetch.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(apifetch.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(apifetch.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })


            .addCase(adddata.fulfilled, (state, action) => {
                state.data.push(action.payload);
            })
            .addCase(adddata.rejected, (state, action) => {
                state.error = action.error.message;
            })


            .addCase(deletedata.fulfilled, (state, action) => {
                state.data = state.data.filter((item) => item.id !== action.payload);
            })
            .addCase(deletedata.rejected, (state, action) => {
                state.error = action.error.message;
            })


            .addCase(editdata.fulfilled, (state, action) => {
                const index = state.data.findIndex((item) => item.id === action.payload.id);

            })
            .addCase(editdata.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default apidata.reducer;
