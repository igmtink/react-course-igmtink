import { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }
  }

  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value }
  }

  if (action.type === 'RESET') {
    return { value: '', isTouched: false }
  }

  return initialInputState
}

const useInput = validateValue => {
  const [inputState, dispatchInput] = useReducer(
    inputStateReducer,
    initialInputState
  )

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = event => {
    dispatchInput({ type: 'INPUT', value: event.target.value })
  }

  const inputBlurHandler = () => {
    dispatchInput({ type: 'BLUR' })
  }

  const reset = () => {
    dispatchInput({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export { useInput }
