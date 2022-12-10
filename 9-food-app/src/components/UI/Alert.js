import ReactDOM from "react-dom";

const Alert = (props) => {
  let classes =
    "rounded-md absolute bottom-4 p-4 shadow-[0px_0px_15px_-3px_rgba(0,0,0,0.5)] " +
    props.className;

  return ReactDOM.createPortal(
    <section className="w-[640px] max-w-full mx-auto fixed inset-0 flex justify-center z-50 pointer-events-none">
      <div className={classes}>{props.children}</div>
    </section>,
    document.getElementById("alert-root")
  );
};

export default Alert;
