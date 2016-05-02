/* @flow */
import React from 'react'
import classes from './Login.scss'

// FlowType annotations
type Props = {
  username: string,
  loginUser: Function,
  updateLoginName: Function,
  updateLoginPassword: Function
}

export const Login = (props: Props) => (
  <div>
    <h2 className={classes.loginContainer}>Login Page</h2>
    <div className={classes.loginInputs}>
      <input type='text' className="form-control" placeholder='Username' onChange={props.updateLoginName}/>
      <input type='password' className="form-control" placeholder='Password' onChange={props.updateLoginPassword}/>
    </div>
    <button className={classes.loginButton} onClick={props.loginUser}>
      Login
    </button>
  </div>
)

Login.propTypes = {
  loginUser: React.PropTypes.func.isRequired,
  updateLoginName: React.PropTypes.func.isRequired,
  updateLoginPassword: React.PropTypes.func.isRequired
}

export default Login
