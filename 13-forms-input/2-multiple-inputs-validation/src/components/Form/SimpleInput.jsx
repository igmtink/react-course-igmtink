import { Button, Card, Input } from '../UI/UIShared'
import { useState } from 'react'

const SimpleInput = props => {
  const [username, setUsername] = useState('')
  const [usernameTouch, setUsernameTouch] = useState(false)

  const enteredUsernameIsValid = username.trim() !== ''
  const usernameInputIsValid = !enteredUsernameIsValid && usernameTouch

  const [email, setEmail] = useState('')
  const [emailTouch, setEmailTouch] = useState(false)

  const enteredEmailIsValid = email.includes('@')
  const emailInputIsValid = !enteredEmailIsValid && emailTouch

  // !Validation for multiple (Inputs)
  let formIsValid = false

  if (enteredUsernameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const usernameInputChangeHandler = event => {
    setUsername(event.target.value)
  }

  const usernameInputBlurHandler = event => {
    setUsernameTouch(true)
  }

  const emailInputChangeHandler = event => {
    setEmail(event.target.value)
  }

  const emailInputBlurHandler = event => {
    setEmailTouch(true)
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredUsernameIsValid && !enteredEmailIsValid) {
      setUsernameTouch(true)
      setEmailTouch(true)
      return
    }

    console.log(username)
    console.log(email)
    setUsername('')
    setEmail('')
    setUsernameTouch(false)
    setEmailTouch(false)
  }

  return (
    <Card className="bg-neutral-800 p-4">
      <form onSubmit={submitHandler} className="grid grid-cols-1 gap-4">
        <Input
          className={`bg-neutral-900 p-2 ${
            usernameInputIsValid &&
            'bg-red-500 outline-red-900 outline-2 outline-none placeholder-black'
          }`}
          attr={{
            placeholder: 'Username',
            value: username,
            onBlur: usernameInputBlurHandler,
            onChange: usernameInputChangeHandler
          }}
        />
        <Input
          className={`bg-neutral-900 p-2 ${
            emailInputIsValid &&
            'bg-red-500 outline-red-900 outline-2 outline-none placeholder-black'
          }`}
          attr={{
            placeholder: 'Email',
            value: email,
            onBlur: emailInputBlurHandler,
            onChange: emailInputChangeHandler
          }}
        />
        <Button
          className="bg-red-900 hover:bg-red-900/75 transition-colors px-4 py-2 disabled:bg-red-900/20 disabled:cursor-not-allowed"
          type="submit"
          disabled={!formIsValid}
        >
          Submit
        </Button>
      </form>
    </Card>
  )
}

export default SimpleInput
