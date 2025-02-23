import { create } from "zustand";
import { Todo } from "./types";
import uuid from 'react-native-uuid';


interface TodoStore {
  todos: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (todo: string) => void;
}

// create the bear store, implementing the BearStore interface
const useTodoStore = create<TodoStore>((set, get) => ({
  todos: [
    { id: uuid.v4(), text: "Buy milk", status: "pending" },
    { id: uuid.v4(), text: "Buy eggs", status: "pending" },
  ],
  addTodo: (text) =>
    set({
      todos: [
        ...get().todos,
        { id: uuid.v4(), text: text, status: "pending" },
      ],
    }),
  removeTodo: (id: string) =>
    set({ todos: get().todos.filter((todo) => todo.id !== id) }),
}));

export default useTodoStore;
