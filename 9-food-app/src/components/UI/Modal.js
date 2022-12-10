const Modal = (props) => {
  let classes = "rounded-md " + props.className;

  return (
    <section
      onClick={props.onClick}
      className="fixed inset-0 flex justify-center items-center bg-black/75"
    >
      <div className="w-[640px] max-w-full p-4 mx-auto">
        <div className={classes} {...props.attr}>
          {props.children}
        </div>
      </div>
    </section>
  );
};

export default Modal;
