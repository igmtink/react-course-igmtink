import React from 'react'

const Button = React.memo(props => {
  let classes = 'rounded-md shadow-lg ' + props.className
  return (
    <button
      className={classes}
      type={props.type || 'button'}
      onClick={props.onClick || ''}
    >
      {props.children}
    </button>
  )
})

const Card = props => {
  let classes = 'rounded-md shadow-xl ' + props.className
  return <div className={classes}>{props.children}</div>
}

export { Button, Card }
