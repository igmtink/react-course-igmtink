const Button = (props) => {
  let classes =
    "rounded-md bg-amber-500 text-neutral-900 font-bold disabled:opacity-50 " +
    props.className;

  return (
    <button
      className={classes}
      onClick={props.onClick}
      type={props.type || "button"}
      disabled={props.disabled || false}
    >
      {props.children}
    </button>
  );
};

export default Button;
