import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DemoOutput RUNNING");
  return <MyParagraph>{props.show ? "This is new!" : ""}</MyParagraph>;
};

// !(React.memo) for preventing re-render (Component) if the (props) value is not changed
export default React.memo(DemoOutput);
