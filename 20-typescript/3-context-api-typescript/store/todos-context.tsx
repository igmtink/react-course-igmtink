import Todo from "@/models/todo";
import TodosContextObj from "@/models/todos-context-obj";
import React, { useState } from "react";

// !Initial (Context) with (Typescript)
export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: number) => {},
});

// !(Context Provider) configuration of (Context)
const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });

    console.log(todos);
  };

  const removeTodoHandler = (todoId: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextInitialValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextInitialValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
