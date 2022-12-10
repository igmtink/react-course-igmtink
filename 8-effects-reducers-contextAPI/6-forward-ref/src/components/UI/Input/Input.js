import classes from "./Input.module.css";
import React, { useRef, useImperativeHandle } from "react";

// !Passing the (useRef) using (React.forwardRef)
const Input = React.forwardRef((props, ref) => {
  // !Get simple data from (input) using (useRef)
  const inputRef = useRef();

  // !Declare a function to get (input:focus)
  const activate = () => {
    inputRef.current.focus();
  };

  // !Passing the (useRef) into another component using (useImperativeHandle)
  useImperativeHandle(ref, () => {
    // !Declare a return object
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
