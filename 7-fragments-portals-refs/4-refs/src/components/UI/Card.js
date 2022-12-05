const Card = (props) => {
  let classes = "rounded-md bg-neutral-800 " + props.className;

  return <div className={classes}>{props.children}</div>;
};

export default Card;
