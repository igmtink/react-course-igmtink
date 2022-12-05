import Button from "./Button";
import Card from "./Card";

const ErrorModal = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed inset-0 p-6 grid bg-black/50 place-items-center"
    >
      <Card className="grid gap-8 overflow-hidden">
        <header className="p-3 bg-amber-500">
          <h1 className="font-bold text-xl text-neutral-900">{props.title}</h1>
        </header>
        <div className="px-3">
          <p>{props.message}</p>
        </div>
        <footer className="justify-self-end p-3">
          <Button
            onClick={props.onClick}
            className="py-2 px-4 text-neutral-900 hover:bg-amber-600 transition-colors"
          >
            Okay
          </Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
