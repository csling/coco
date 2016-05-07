import { injectReducer } from '../../store/reducers' 

export default (store) => ({
  path: 'for_employers',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const ForEmployers = require('./containers/ForEmployers').default
      const reducer = require('./modules/forEmployers').default

      injectReducer(store, { key: 'forEmployers', reducer })

      /*  Return getComponent   */
      cb(null, ForEmployers)

      /* Webpack named bundle   */
    }, 'for_employers')
  }
})
