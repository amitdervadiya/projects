import { configureStore } from "@reduxjs/toolkit";
import taskIssue from './../Features/Issueslice';

const store = configureStore({
    reducer: {
       Taskkey: taskIssue, 
    },
});
export default store;
