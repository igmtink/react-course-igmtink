import Header from '../components/Layout/Header'

const { Fragment } = require('react')
const { Outlet } = require('react-router-dom')

const Root = props => {
  return (
    <Fragment>
      <Header />
      <Outlet />
    </Fragment>
  )
}

export default Root
