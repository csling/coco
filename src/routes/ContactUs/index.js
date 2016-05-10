import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'contact_us',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const ContactUs = require('./containers/ContactUs').default
      const reducer = require('./modules/contactUs').default

      injectReducer(store, { key: 'contactUs', reducer })

      /*  Return getComponent   */
      cb(null, ContactUs)

      /* Webpack named bundle   */
    }, 'contact_us')
  }
})
