import NewTodo from "@/components/todos/NewTodo";
import Head from "next/head";

const AddTodo: React.FC = () => {
  return (
    <>
      <Head>
        <title>New Todo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <NewTodo />
      </main>
    </>
  );
};

export default AddTodo;
