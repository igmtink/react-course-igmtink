import Counter from './components/Counter/Counter'
import { Button, Card, Section } from './components/UI/IgmtInk'

import { Fragment } from 'react'
import Header from './components/Layouts/Header'
import Auth from './components/Layouts/Auth'

import { useSelector } from 'react-redux'
import UserProfile from './components/UserProfile'

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated)

  return (
    <Fragment>
      <Header />
      <main>
        <Section className="grid grid-cols-1 place-items-center h-screen p-4">
          {!isAuth ? <Auth /> : <UserProfile />}
        </Section>
      </main>
    </Fragment>
  )
}

export default App
