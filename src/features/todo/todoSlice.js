import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [
      {id:2633279846328, todo: "Learn React", status: ""},
      {id:4368745439845, todo: "Learn Redux", status: "in progress"},
      {id:1673467467461, todo: "Find a job", status: "failed"},
      {id:2631279826328, todo: "Learn React", status: "done"},
      {id:4363745422845, todo: "Learn Redux", status: "in progress"},
      {id:2133379846328, todo: "Learn React", status: ""},
      {id:436874531845, todo: "Learn Redux", status: "in progress"},
      {id:2634279846328, todo: "Learn React", status: "done"},
      {id:4368245439845, todo: "Learn Redux", status: ""},
      {id:2635279842328, todo: "Learn React", status: "done"},
      {id:4368725439845, todo: "Learn Redux", status: ""},
    ],
  },
  reducers: {
    addTodo: (state, action) => {
        state.value.push({id:Date.now(), todo: action.payload});
    },
    deleteTodo: (state, action) => {
        console.log(action.payload);
        state.value = state.value.filter((item) => {
            return item.id !== action.payload;
        });
    },
    setStatusToDone: (state, action) => {
      state.value = state.value.map((item) => {
          if(item.id === action.payload) {
            if(item.status === "done"){
              item.status = "";
            }
            else
              item.status = "done";
          }
          return item;
      });
    },
    setStatusToInProgress: (state, action) => {
      state.value = state.value.map((item) => {
          if(item.id === action.payload) {
            if(item.status === "in progress"){
              item.status = "";
            }
            else
              item.status = "in progress";
          }
          return item;
      });
    },
    setStatusToFailed: (state, action) => {
      state.value = state.value.map((item) => {
          if(item.id === action.payload) {
            if(item.status === "failed"){
              item.status = "";
            }
            else
              item.status = "failed";
          }
          return item;
      });
    }
  },
});

export const { addTodo, deleteTodo, setStatusToDone, setStatusToInProgress, setStatusToFailed } = todoSlice.actions;

export const selectTodo = state => state.todo.value;

export default todoSlice.reducer;
