import {
    ADD_TODO,
    DELETE_TODO,
    CHANGE_TODO,
    CHANGE_STATUS
} from "./actions";

const defaultState = {
    todoList: [
        { id: 2633279846328, date: "12.05.2020", todo: "Learn React", status: "" },
        { id: 4368745439845, date: "14.05.2020", todo: "Learn Redux", status: "in progress" },
        { id: 1673467467461, date: "16.05.2020", todo: "Find a job", status: "failed" },
        { id: 2631279826328, date: "17.05.2020", todo: "Tell Cassius it's over", status: "done" },
        { id: 4363745422845, date: "18.05.2020", todo: "Write a Todo App", status: "in progress" },
        { id: 2133379846328, date: "20.05.2020", todo: "Wait and Bleed", status: "" },
        { id: 4368745314845, date: "22.05.2020", todo: "Make a sandwich", status: "in progress" },
    ],
    statuses: [
        "done",
        "in progress",
        "failed",
        ""
    ]
}

export const todoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return { ...state, todoList: [...state.todoList, addTodo(action.payload)]  };

        case DELETE_TODO:
            return { ...state, todoList: deleteTodo(state, action.payload) };

        case CHANGE_TODO:
            return { ...state, todoList: changeTodoName(state, action.payload) };

        case CHANGE_STATUS:
            return { ...state, todoList: changeStatus(state, action.payload) };

        default: return state;
    }
}

const addTodo = payload => {
    return { id: Date.now(), date: formatDate(new Date(Date.now())), todo: payload, status: "" };
}

const deleteTodo = (state, payload) => {
    return state.todoList.filter((item) => {
        return item.id !== payload;
    });
}

const changeTodoName = (state, payload) => {
    return state.todoList.map((item) => {
        if(item.id === payload.id)
            item.todo = payload.name;
        return item;
    });
}

const changeStatus = (state, payload) => {
    return state.todoList.map((item) => {
        if(item.id === payload.id)
            if (item.status === state.statuses[payload.status])
                item.status = "";
            else 
                item.status = state.statuses[payload.status];
        return item;
    });
}

const formatDate = date =>  {
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yy = date.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return dd + '.' + mm + '.' + yy;
}