const Button = (props) => {
  let classes = "font-bold " + props.className;

  return (
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
