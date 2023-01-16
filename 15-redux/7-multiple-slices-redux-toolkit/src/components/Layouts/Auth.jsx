import { Button, Card } from '../UI/IgmtInk'
import { useDispatch } from 'react-redux'

import { authActions } from '../../store/index'

const Auth = props => {
  const dispatch = useDispatch()

  const submitHandler = e => {
    e.preventDefault()

    dispatch(authActions.login())
  }

  return (
    <Card className="bg-neutral-800 p-4">
      <form onSubmit={submitHandler} className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="rounded-md px-4 py-2 bg-neutral-900"
            type="email"
            placeholder="your@email.com"
          />
        </div>
        <div className="grid grid-cols-1 gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className="rounded-md px-4 py-2 bg-neutral-900"
            type="password"
          />
        </div>
        <Button
          className="bg-red-500 px-4 py-2 rounded-md"
          attr={{ type: 'submit' }}
        >
          Login
        </Button>
      </form>
    </Card>
  )
}

export default Auth
