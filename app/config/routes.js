import React from 'react'
import {Router, Route, IndexRoute, hashHistory } from 'react-router'

import Main from '../components/Main'
import Home from '../components/Home'
import About from '../containers/AboutContainer'
import Story from '../components/Story'
import Faq from '../components/Faq'
import Employers from '../containers/EmployersContainer'
import Careers from '../components/Careers'

const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={Main}>
      <IndexRoute component={Home} />
      <Route path="about" component={About}>
        <Route path="story" component={Story} />
        <Route path="faq" component={Faq} />
      </Route>
      <Route path="employers" component={Employers} />
      <Route path="careers" component={Careers} />
    </Route>
  </Router>
);

export default routes
