import { useRouter } from "next/router";
import { useRef, useContext } from "react";
import { TodosContext } from "../../store/todos-context";

const NewTodo: React.FC = () => {
  // !(useRef<HTMLInputElement>(null)) is a (Type) that need to specify for (Typescript)
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const todosCtx = useContext(TodosContext);

  const router = useRouter();

  // !(React.FormEvent) for (Types) of (form)
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // !Adding (!) in (current) is 100% that our (useRef) is will not be (null) or else change it to (?)
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
    router.push("/");
  };

  return (
    <form onSubmit={submitHandler} className="grid grid-cols-1 gap-4">
      <div className="grid grid-cols-1 gap-2">
        <label className="font-bold text-lg" htmlFor="text">
          Todo Text
        </label>
        <input
          className="p-2 rounded-md bg-neutral-100"
          type="text"
          id="text"
          ref={todoTextInputRef}
        />
      </div>

      <button
        className="px-4 py-2 rounded-md bg-neutral-900 text-neutral-50"
        type="submit"
      >
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
