const Card = (props) => {
  // !{props.className} is a special prop built in react
  // !We can set (className) on our Component and it will pass that className on our (HTML) code
  const classes = "rounded-md " + props.className;

  // !{props.children} is a special prop built in react
  // !We can wrapp our (HTML) code inside our Component (Wrapper / Container)
  return <div className={classes}>{props.children}</div>;
};

export default Card;
