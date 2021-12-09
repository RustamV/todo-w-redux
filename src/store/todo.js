import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: [
        { id: 2633279846328, date: "12.05.2020", name: "Learn React", status: "" },
        { id: 4368745439845, date: "14.05.2020", name: "Learn Redux", status: "in progress" },
        { id: 1673467467461, date: "16.05.2020", name: "Find a job", status: "failed" },
        { id: 2631279826328, date: "17.05.2020", name: "Tell Cassius it's over", status: "done" },
        { id: 4363745422845, date: "18.05.2020", name: "Write a Todo App", status: "in progress" },
        { id: 2133379846328, date: "20.05.2020", name: "Wait and Bleed", status: "" },
        { id: 4368745314845, date: "22.05.2020", name: "Make a sandwich", status: "in progress" }
    ]
};

const formatDate = (date) => {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;
    return dd + "." + mm + "." + yy;
};

export const todoSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addTodo: (state, { payload }) => {
            const newTodo = { id: Date.now(), date: formatDate(new Date(Date.now())), todo: payload, status: "" };
            state.todoList.push(newTodo);
        },
        deleteTodo: (state, { payload }) => {
            state.todoList = state.todoList.filter((item) => {
                return item.id !== payload;
            });
        },
        editTodo: (state, { payload }) => {
            state.todoList = state.todoList.map((item) => {
                if (item.id === payload.id) item.name = payload.name;
                return item;
            });
        },
        editStatus: (state, { payload }) => {
            const statuses = ["done", "in progress", "failed", ""];
            state.todoList = state.todoList.map((item) => {
                if (item.id === payload.id)
                    if (item.status === statuses[payload.status]) item.status = "";
                    else item.status = statuses[payload.status];
                return item;
            });
        }
    }
});

export const { addTodo, deleteTodo, editTodo, editStatus } = todoSlice.actions;

export default todoSlice.reducer;
