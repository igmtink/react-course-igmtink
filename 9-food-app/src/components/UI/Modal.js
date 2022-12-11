import ReactDOM from "react-dom";

const Modal = (props) => {
  let classes = "rounded-md " + props.className;

  return ReactDOM.createPortal(
    <section className="fixed inset-0 flex justify-center items-center bg-black/75 z-10">
      <div className="w-[640px] max-w-full p-4 mx-auto z-30">
        <div className={classes} {...props.attr}>
          {props.children}
        </div>
      </div>
    </section>,
    document.getElementById("modal-root")
  );
};

export default Modal;
