import NewTodo from "@/components/todos/NewTodo";
import Todos from "@/components/todos/Todos";
import Todo from "@/models/todo";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Todos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4 grid grid-cols-1 gap-6">
        <Todos />
      </main>
    </>
  );
}
