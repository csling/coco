import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'career_search',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const CareerSearch = require('./containers/CareerSearch').default
      const reducer = require('./modules/CareerSearch').default

      injectReducer(store, { key: 'careerSearch', reducer })

      /*  Return getComponent   */
      cb(null, CareerSearch)

      /* Webpack named bundle   */
    }, 'careerSearch')
  }
})
