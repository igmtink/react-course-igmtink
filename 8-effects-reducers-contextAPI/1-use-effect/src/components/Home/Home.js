import Button from "../UI/Button";

const Home = (props) => {
  return (
    <div className="w-full grid gap-6 place-items-center">
      <h1 className="text-amber-500 font-bold text-5xl text-center">
        Welcome!
      </h1>
      <Button onClick={props.logout} className="py-2 px-4 w-fit">
        Logout
      </Button>
    </div>
  );
};

export default Home;
