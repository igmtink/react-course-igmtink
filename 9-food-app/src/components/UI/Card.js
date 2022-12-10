const Card = (props) => {
  let classes = "rounded-md " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
