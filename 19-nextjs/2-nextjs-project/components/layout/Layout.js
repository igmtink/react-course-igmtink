import Header from "./Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="p-4">{props.children}</main>
    </>
  );
};

export default Layout;
