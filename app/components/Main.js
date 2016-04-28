import React, { PropTypes, Component } from 'react'
import { Router, Link } from 'react-router'
import Home from './Home'
import { header } from '../styles'

export default class Main extends Component {
  render () {
    return (
      <div className="header">
        <div className="col-md-offset-3">
         <Link to='/' className="col-md-2">Home</Link> 
         <Link to='/careers' className="col-md-2">Careers</Link>
         <Link to='/about' className="col-md-2">About</Link>
         <Link to='/employers' className="col-md-2">Employers</Link>
         <a href='https://wordpress.com' target="_blank" className="col-md-2">Blog</a>
        </div>
        <br />
        <div>
         {this.props.children}
        </div>
      </div>
    )
  }
}
