require('babel-polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'Course Correct',
    description: 'Helping motivated individuals change their career.',
    head: {
      titleTemplate: 'Course Correct: %s',
      meta: [
        {name: 'description', content: 'Helping motivated individuals change their career.'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'Course Correct'},
        // {property: 'og:image', content: 'https://react-redux.herokuapp.com/logo.jpg'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'Course Correct'},
        {property: 'og:description', content: 'Helping motivated individuals change their career.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: 'http://coursecorrect.co'},
        {property: 'og:creator', content: 'Course Correct'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ]
    }
  },

}, environment);
