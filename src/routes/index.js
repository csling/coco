// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import CareerSearchRoute from './CareerSearch'
import CareerProfileRoute from './CareerProfile'
import ForEmployersRoute from './ForEmployers'
import SignUpRoute from './SignUp'
import NotFound from './NotFound'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    AboutRoute(store),
    CareerSearchRoute(store),
    CareerProfileRoute(store),
    ForEmployersRoute(store),
    SignUpRoute(store),
    NotFound
  ]
})

export default createRoutes
