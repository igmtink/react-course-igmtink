import { Button, Card, Input } from '../UI/UIShared'
import { useInput } from '../../hooks/igmtink-hooks'

const SimpleInput = props => {
  const {
    value: enteredUsername,
    isValid: enteredUsernameIsValid,
    hasError: usernameInputHasError,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsername
  } = useInput(value => value.trim() !== '')

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(value => value.includes('@'))

  let formIsValid = false

  if (enteredUsernameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const submitHandler = event => {
    event.preventDefault()

    if (!enteredUsernameIsValid && !enteredEmailIsValid) {
      usernameBlurHandler()
      emailBlurHandler()
      return
    }

    console.log(enteredUsername)
    resetUsername()

    console.log(enteredEmail)
    resetEmail()
  }

  return (
    <Card className="bg-neutral-800 p-4">
      <form onSubmit={submitHandler} className="grid grid-cols-1 gap-4">
        <Input
          className={`bg-neutral-900 p-2 ${
            usernameInputHasError &&
            'bg-red-500 outline-red-900 outline-2 outline-none placeholder-black'
          }`}
          attr={{
            placeholder: 'Username',
            value: enteredUsername,
            onBlur: usernameBlurHandler,
            onChange: usernameChangeHandler
          }}
        />
        <Input
          className={`bg-neutral-900 p-2 ${
            emailInputHasError &&
            'bg-red-500 outline-red-900 outline-2 outline-none placeholder-black'
          }`}
          attr={{
            placeholder: 'Email',
            value: enteredEmail,
            onBlur: emailBlurHandler,
            onChange: emailChangeHandler
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
