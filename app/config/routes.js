var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Main = require('../components/Main');
var Home = require('../components/Home');
var About = require('../components/About');
var Story = require('../components/Story');
var Faq = require('../components/Faq');
var Employers = require('../components/Employers');
var Careers = require('../components/Careers');


var routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="story" component={Story} />
      <Route path="faq" component={Faq} />
      <Route path="employers" component={Employers} />
      <Route path="careers" component={Careers} />
    </Route>
  </Router>
);

module.exports = routes;
 
