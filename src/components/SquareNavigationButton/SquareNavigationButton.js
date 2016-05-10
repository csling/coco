import React from 'react'
import FontAwesome from 'react-fontawesome'
import classes from './SquareNavigationButton.scss'
import { Link } from 'react-router'

export const SquareNavigationButton = (props) => (
  <Link className={classes.container} to={props.path}>
    <div className={classes.icon}>
      {!props.image && props.faIcon && <FontAwesome className={classes.faIcon} name={props.faIcon}/>}
    </div>
    <div className={classes.buttonText}>
      {props.buttonText}
    </div>
  </Link>
)

export default SquareNavigationButton
