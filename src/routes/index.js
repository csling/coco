// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import ForEmployersRoute from './ForEmployers'
import SignUpRoute from './SignUp'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    AboutRoute(store),
    ForEmployersRoute(store),
    SignUpRoute(store)
  ]
})

export default createRoutes
