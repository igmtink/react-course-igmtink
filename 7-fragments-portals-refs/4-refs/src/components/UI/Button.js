const Button = (props) => {
  let classes = "rounded-md bg-amber-500 font-bold " + props.className;

  return (
    // !(OR) Operator, if the first value is false then we applied the second value
    <button
      className={classes}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
