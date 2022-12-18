import React from 'react'
import ReactDOM from 'react-dom'

const Section = props => {
  let classes = 'w-[640px] max-w-full mx-auto p-4 ' + props.className
  return <section className={classes}>{props.children}</section>
}

const Button = React.memo(props => {
  let classes = 'rounded-md shadow-lg ' + props.className
  return (
    <button
      className={classes}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  )
})

const Input = props => {
  let classes = 'p-2 rounded-md w-full ' + props.className

  return <input className={classes} {...props.attr} />
}

const TextArea = props => {
  let classes =
    'p-2 rounded-md w-full whitespace-pre break-words ' + props.className

  return <textarea className={classes} {...props.attr} />
}

const Card = props => {
  let classes = 'rounded-md shadow-xl ' + props.className
  return <div className={classes}>{props.children}</div>
}

const Modal = props => {
  let classes = 'bg-neutral-900 rounded-md ' + props.className

  return ReactDOM.createPortal(
    <section className="fixed inset-0 bg-black/75 flex justify-center items-center">
      <div className="w-[640px] max-w-full mx-auto p-2">
        <div className={classes}>{props.children}</div>
      </div>
    </section>,
    document.getElementById('modal-root')
  )
}

export { Section, Button, Card, Modal, Input, TextArea }
