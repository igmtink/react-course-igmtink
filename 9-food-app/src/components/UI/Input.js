import React from "react";

const Input = React.forwardRef((props, ref) => {
  let classes = "rounded-md p-2 " + props.className;

  return <input ref={ref} className={classes} {...props.input} />;
});

export default Input;
