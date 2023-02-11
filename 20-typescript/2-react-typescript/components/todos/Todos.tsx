import TodoItem from "./TodoItem";

// !(React.FC) is a (Typescript) that accepting any (Types) of (props) included (props.children)
// It is like (Generics Type)

// !(interface) to set a (Types)
import Todo from "@/models/todo";

// !You can also define your own custom (props) like this (React.FC<{items: string[]}>)
const Todos: React.FC<{ todos: Todo[]; onRemoveTodo: (id: number) => void }> = (
  props
) => {
  return (
    <ul className="grid grid-cols-1 gap-2">
      {props.todos.map((item) => (
        <li
          className="cursor-pointer"
          key={item.id}
          onClick={props.onRemoveTodo.bind(null, item.id)}
        >
          <TodoItem text={item.text} />
        </li>
      ))}
    </ul>
  );
};

export default Todos;
