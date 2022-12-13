export const Button = (props) => {
  let classes =
    "bg-neutral-900 px-6 py-4 rounded-md shadow-md hover:text-amber-500 transition-colors " +
    props.className;

  return (
    <button className={classes} {...props.attr}>
      {props.children}
    </button>
  );
};
