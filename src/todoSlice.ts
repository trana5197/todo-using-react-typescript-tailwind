import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TodoModel } from "./TodoModel";

interface Edit {
  id: number;
  name: number | string;
}

interface Initial {
  todos: TodoModel[];
}

const initialState: Initial = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<TodoModel>) {
      state.todos.push(action.payload);
    },
    deleteTodo(state, action: PayloadAction<number>) {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const todo = state.todos.find((item) => item.id === action.payload);

      if (todo) todo.isCompleted = !todo.isCompleted;
    },
    editTodo: {
      prepare(id: number, name: number | string) {
        return {
          payload: {
            id,
            name: typeof name === "string" ? name.toUpperCase() : name,
          },
        };
      },

      reducer(state, action: PayloadAction<Edit>) {
        const todo = state.todos.find((item) => item.id === action.payload.id);

        if (todo) todo.name = action.payload.name;
      },
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
