import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    value: [
      {id:2633279846328, date: "12.05.2020", todo: "Learn React", status: ""},
      {id:4368745439845, date: "14.05.2020", todo: "Learn Redux", status: "in progress"},
      {id:1673467467461, date: "16.05.2020", todo: "Find a job", status: "failed"},
      {id:2631279826328, date: "17.05.2020", todo: "Learn React", status: "done"},
      {id:4363745422845, date: "18.05.2020", todo: "Learn Redux", status: "in progress"},
      {id:2133379846328, date: "20.05.2020", todo: "Learn React", status: ""},
      {id:4368745314845, date: "22.05.2020", todo: "Learn Redux", status: "in progress"},
      {id:2634279846328, date: "23.05.2020", todo: "Learn React", status: "done"},
      {id:4368245439845, date: "24.05.2020", todo: "Learn Redux", status: ""},
      {id:2635279842328, date: "25.05.2020", todo: "Learn React", status: "done"},
      {id:4368725439845, date: "26.05.2020", todo: "Learn Redux", status: ""},
    ],
  },
  reducers: {
    addTodo: (state, action) => {
        state.value.push({id:Date.now(), date: formatDate(new Date(Date.now())), todo: action.payload});
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
    },
    changeTodo: (state, action) => {
      state.value = state.value.map((item) => {
        if(item.id === action.payload.id) {
          item.todo = action.payload.name;
        }
        return item;
    });
    },
  },
});

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();

  return dd + '.' + mm + '.' + yy;
}

export const { addTodo, deleteTodo, setStatusToDone, setStatusToInProgress, setStatusToFailed, changeTodo } = todoSlice.actions;

export const selectTodo = state => state.todo.value;

export default todoSlice.reducer;
