const Button = (props) => {
  let classes =
    "rounded-md bg-amber-500 text-neutral-900 font-bold " + props.className;

  return (
    <button
      className={classes}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
