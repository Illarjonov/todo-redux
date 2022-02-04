import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({//createAction+createReducer

    name: "todos",
    initialState,
    reducers: { //here will write reducer
        //adding reducer
        addTodos: (state,action) => {
            state.push(action.payload);
            return state
        },
        //remove reducer
        removeTodos: (state, action) => {
            return state.filter(item => item.id!== action.payload)
        },
        //update reducer
        updateTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload.id) {
                    return {
                        ...todo,
                        item: action.payload.item,
                    };
                }
                return todo;
            });
        },
        //completer
        completeTodos: (state, action) => {
            return state.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: true,
                    };
                }
                return todo;
            });
        },
    },
});

export const {addTodos, removeTodos, updateTodos, completeTodos} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;