import { Button } from '../UI/IgmtInk'

// (useSelector) to get all (Auth) states using (React Redux)
// (useDispatch) to (dispatchAction) using (React Redux)
import { useSelector, useDispatch } from 'react-redux'

// To access all (Actions) of (Reducer) using (Redux Toolkit)
import { authActions } from '../../store/auth-slice'

const Header = props => {
  // Getting all (States) of (Reducer) using (React Redux)
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  // (dispatchAction) using (React Redux)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActions.logout())
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-neutral-800 shadow-lg">
      <nav className="max-w-5xl mx-auto p-4 flex items-center justify-between">
        <h1 className="text-red-500 font-bold text-xl">Redux Auth</h1>
        {isAuth && (
          <Button
            className="bg-red-500 font-bold text-neutral-900 rounded-md px-4 py-2 hover:bg-red-500/75"
            attr={{ onClick: logoutHandler }}
          >
            Logout
          </Button>
        )}
      </nav>
    </header>
  )
}

export default Header
