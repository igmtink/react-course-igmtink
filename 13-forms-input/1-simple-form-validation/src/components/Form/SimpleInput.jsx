import { Button, Card, Input } from '../UI/UIShared'
import { useState } from 'react'

const SimpleInput = props => {
  const [username, setUsername] = useState('')
  const [touch, setTouch] = useState(false)

  const enteredUsernameIsValid = username.trim() !== ''
  const formValid = !enteredUsernameIsValid && touch

  const usernameInputChangeHandler = event => {
    setUsername(event.target.value)
  }

  const usernameInputBlurHandler = event => {
    setTouch(true)
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredUsernameIsValid) {
      setTouch(true)
      return
    }

    console.log(username)
    setUsername('')
    setTouch(false)
  }

  return (
    <Card className="bg-neutral-800 p-4">
      <form onSubmit={submitHandler} className="flex justify-between gap-2">
        <Input
          className={`bg-neutral-900 p-2 ${
            formValid &&
            'bg-red-500 outline-red-900 outline-2 outline-none placeholder-black'
          }`}
          attr={{
            placeholder: 'Username',
            value: username,
            onBlur: usernameInputBlurHandler,
            onChange: usernameInputChangeHandler
          }}
        />
        <Button
          className="bg-red-900 hover:bg-red-900/75 transition-colors px-4 py-2"
          type="submit"
        >
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default SimpleInput
