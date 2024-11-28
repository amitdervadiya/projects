import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: 'counter',
    initialState: {
        students: []
    },
    reducers: {
        adddata: (state, action) => {

            state.students.push(action.payload);
        },
        deletedata: (state, action) => {

            state.students = state.students.filter((item) => item.id != action.payload);

        },
        updatedata: (state, action) => {
            const { id, name, age, gender, isChecked, Priorty } = action.payload;
            const existingStudent = state.students.find((student) => student.id === id);
            if (existingStudent) {
                existingStudent.name = name;
                existingStudent.age = age;
                existingStudent.gender = gender;
                existingStudent.isChecked = isChecked;
                existingStudent.Priorty = Priorty;
            }
        }
    }
});

export const { adddata, deletedata, updatedata } = counter.actions;
export default counter.reducer;
