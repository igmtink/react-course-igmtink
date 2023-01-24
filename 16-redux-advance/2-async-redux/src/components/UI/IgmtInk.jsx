import ReactDOM from 'react-dom'

////////// !CONTAINER //////////
const Section = props => {
  let classes = 'max-w-2xl mx-auto ' + props.className
  return <section className={classes}>{props.children}</section>
}

const Card = props => {
  let classes = 'rounded-md shadow-xl ' + props.className
  return <div className={classes}>{props.children}</div>
}

const Modal = props => {
  let classes = 'rounded-l-xl ' + props.className

  return ReactDOM.createPortal(
    <section className="fixed inset-0 bg-black/75 z-30">
      <div className="w-full max-w-2xl mx-auto z-40 flex justify-end">
        <div className={classes} {...props.attr}>
          {props.children}
        </div>
      </div>
    </section>,
    document.getElementById('modal-root')
  )
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

export { Section, Card, Modal, Button, Input, TextArea }
