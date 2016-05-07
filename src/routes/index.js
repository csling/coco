// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Home from './Home'
import AboutRoute from './About'
import ForEmployersRoute from './ForEmployers'

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    AboutRoute(store),
    ForEmployersRoute(store)
  ]
})

export default createRoutes
