import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; import axios from "axios";

export const apifetch = createAsyncThunk('apifetch', async () => {
    const response = await axios.get('http://localhost:5000/Tasks');
    return response.data;
});
export const adddata = createAsyncThunk('adddata', async (data) => {
    const response = await axios.post('http://localhost:5000/Tasks', data);
    return response.data;
});
export const deletedata = createAsyncThunk('deletedata', async (id) => {
    const response = await axios.delete(`http://localhost:5000/Tasks/${id}`);
    return id;
});
export const updatedata = createAsyncThunk('updatedata', async ({ id, updatedTask }) => {
    const response = await axios.put(`http://localhost:5000/Tasks/${id}`, updatedTask); // Send the task object directly
    return response.data; // Ensure the response returns the updated task object
  });
  
const taskIssue = createSlice({
    name: 'taskIssue',
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
                console.log(action.payload)
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
            .addCase(updatedata.fulfilled, (state, action) => {
                // Map through the data array and replace the updated task
                state.data = state.data.map((item) =>
                  item.id === action.payload.id ? action.payload : item
                );
              })
              
    }
});

export default taskIssue.reducer;
