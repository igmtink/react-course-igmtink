export const Section = (props) => {
  let classes = "max-w-sm mx-auto " + props.className;

  return <section className={classes}>{props.children}</section>;
};

export const Card = (props) => {
  let classes = "shadow-lg rounded-md " + props.className;
  return <div className={classes}>{props.children}</div>;
};
