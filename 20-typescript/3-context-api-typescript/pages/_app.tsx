import TodosContextProvider from "@/store/todos-context";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TodosContextProvider>
      <Component {...pageProps} />
    </TodosContextProvider>
  );
}
