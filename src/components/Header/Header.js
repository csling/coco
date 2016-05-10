import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

// Note that routes are listed below in 'reverse' order (i.e., from right to left)
export const Header = () => (
  <div className={classes.navbarContainer}>
    <div className={classes.routeContainer}>
      <Link to='/blog' activeClassName={classes.activeRoute}>
        Blog
      </Link>
    </div>
    <div className={classes.routeContainer}>
      <Link to='/for_employers' activeClassName={classes.activeRoute}>
        For Employers
      </Link>
    </div>
    <div className={classes.routeContainer}>
      <Link to='/career_search' activeClassName={classes.activeRoute}>
        Search Careers
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
