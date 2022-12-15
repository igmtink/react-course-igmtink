import React from "react";

const Button = React.memo((props) => {
  console.log("Button RUNNING");

  let classes =
    "bg-neutral-900 px-6 py-4 rounded-md shadow-md hover:text-amber-500 transition-colors " +
    props.className;

  return (
    <button className={classes} onClick={props.onClick} type={"button" || ""}>
      {props.children}
    </button>
  );
});

export { Button };
