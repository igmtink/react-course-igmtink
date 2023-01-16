////////// !CONTAINER //////////
const Section = props => {
  let classes = 'max-w-2xl mx-auto ' + props.className
  return <section className={classes}>{props.children}</section>
}

const Card = props => {
  let classes = 'rounded-md shadow-xl ' + props.className
  return <div className={classes}>{props.children}</div>
}

////////// !FORM //////////
const Button = props => {
  let classes = 'transition-colors ' + props.className
  return (
    <button className={classes} {...props.attr}>
      {props.children}
    </button>
  )
}

const Input = props => {
  let classes = 'w-full ' + props.className
  return <input className={classes} {...props.attr} />
}

const TextArea = props => {
  let classes = 'w-full ' + props.className
  return <textarea className={classes} {...props.attr} />
}

export { Section, Card, Button, Input, TextArea }
