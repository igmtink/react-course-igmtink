import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";

// !(React.FC) is a (Typescript) that accepting any (Types) of (props) included (props.children)
// It is like (Generics Type)

// !You can also define your own custom (props) like this (React.FC<{items: string[]}>)
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className="grid grid-cols-1 gap-2">
      {todosCtx.items.map((item) => (
        <li
          className="cursor-pointer"
          key={item.id}
          onClick={todosCtx.removeTodo.bind(null, item.id)}
        >
          <TodoItem text={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
