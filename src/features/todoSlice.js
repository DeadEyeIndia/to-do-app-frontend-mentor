import { createSlice } from "@reduxjs/toolkit";

let todoId = 1;

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    completedTodos: [],
    activeTodos: [],
    showTodos: true,
    showActiveTodos: false,
    showCompletedTodos: false,
  },
  reducers: {
    create: (state, action) => {
      state.todos.push({
        id: todoId,
        text: action.payload,
        isComplete: false,
      });

      todoId += 1;
    },

    toggle: (state, action) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload) {
          todo.isComplete = !todo.isComplete;
        }
      });
    },

    remove: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);

      if (
        state.completedTodos.findIndex((todo) => todo.id === action.payload) !==
        1
      ) {
        state.completedTodos = state.completedTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }

      if (
        state.activeTodos.findIndex((todo) => todo.id === action.payload) !== -1
      ) {
        state.activeTodos = state.activeTodos.filter(
          (todo) => todo.id !== action.payload
        );
      }
    },

    showAllFunction: (state) => {
      state.showTodos = true;
      state.showActiveTodos = false;
      state.showCompletedTodos = false;
    },

    showActiveFunction: (state) => {
      const activeTodos = state.todos.filter((todo) => !todo.isComplete);

      state.activeTodos = activeTodos;

      state.showTodos = false;
      state.showActiveTodos = true;
      state.showCompletedTodos = false;
    },

    showCompletedFunction: (state) => {
      const completedTodos = state.todos.filter((todo) => todo.isComplete);

      state.completedTodos = completedTodos;

      state.showTodos = false;
      state.showActiveTodos = false;
      state.showCompletedTodos = true;
    },

    clearCompleted: (state) => {
      state.completedTodos = [];
      state.todos = state.todos.filter((todo) => !todo.isComplete);
    },
  },
});

export const {
  create,
  toggle,
  remove,
  showAllFunction,
  showActiveFunction,
  showCompletedFunction,
  clearCompleted,
} = todoSlice.actions;

export const selectTodos = (state) => state.todos.todos;
export const selectActiveTodos = (state) => state.todos.activeTodos;
export const selectCompletedTodos = (state) => state.todos.completedTodos;

export const selectShowTodos = (state) => state.todos.showTodos;
export const selectShowActiveTodos = (state) => state.todos.showActiveTodos;
export const selectShowCompletedTodos = (state) =>
  state.todos.showCompletedTodos;

export default todoSlice.reducer;
