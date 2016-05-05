import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <div className={classes.navbarContainer}>
    <div className={classes.routeContainer}>
      <Link to='/blog' activeClassName={classes.activeRoute}>
        Blog
      </Link>
    </div>
    <div className={classes.routeContainer}>
      <Link to='/employers' activeClassName={classes.activeRoute}>
        For Employers
      </Link>
    </div>
    <div className={classes.routeContainer}>
      <Link to='/about' activeClassName={classes.activeRoute}>
        About Us
      </Link>
    </div>
    <div className={classes.routeContainer}>
      <IndexLink to='/' activeClassName={classes.activeRoute}>
        Home
      </IndexLink>
    </div>
    <div className={classes.logoContainer}></div>
  </div>
)

export default Header
