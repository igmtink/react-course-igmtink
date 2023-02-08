import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    // !(Layout) is a (Root Route)
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
