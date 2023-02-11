import Todo from "./todo";

interface TodosContextObj {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: number) => void;
}

export default TodosContextObj;
