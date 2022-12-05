import Button from "./Button";
import Card from "./Card";
import ReactDOM from "react-dom";

// const Backdrop = (props) => {
//   return (
//     <div
//       onClick={props.onClick}
//       className="fixed inset-0 p-6 grid bg-black/50 place-items-center"
//     />
//   );
// };

const ModalOverlay = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="fixed inset-0 p-6 grid bg-black/75 place-items-center"
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

// !Structuring our code using (React Portal)
// !We rendered our (Modal & Backdrop) component above our (Root) div from (index.html)
const ErrorModal = (props) => {
  return (
    <>
      {
        // {ReactDOM.createPortal(
        //   <Backdrop onClick={props.onClick} />,
        //   document.getElementById("backdrop-root")
        // )}
      }
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onClick={props.onClick}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default ErrorModal;
