import ReactDOM from "react-dom";

const Section = (props) => {
  let classes = "mx-auto max-w-6xl " + props.className;
  return <section className={classes}>{props.children}</section>;
};

const Card = (props) => {
  let classes = "rounded-md bg-neutral-900 shadow-xl " + props.className;
  return <div className={classes}>{props.children}</div>;
};

const Modal = (props) => {
  let classes = "rounded-xl " + props.className;

  return ReactDOM.createPortal(
    <section className="fixed inset-0 flex justify-center items-center bg-black/75 z-30">
      <div className="w-full max-w-2xl mx-auto z-40 p-8 relative self-stretch">
        <div className={classes} {...props.attr}>
          {props.children}
        </div>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

const Button = (props) => {
  let classes =
    "transition-colors rounded-md px-4 py-2 font-bold bg-[#FFDB58] text-black " +
    props.className;
  return (
    <button className={classes} {...props.attr}>
      {props.children}
    </button>
  );
};

const Input = (props) => {
  let classes = "w-full " + props.className;
  return <input className={classes} {...props.attr} />;
};

const TextArea = (props) => {
  let classes = "w-full " + props.className;
  return <textarea className={classes} {...props.attr} />;
};

export { Section, Card, Modal, Button, Input, TextArea };
