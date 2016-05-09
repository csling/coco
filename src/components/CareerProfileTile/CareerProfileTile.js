import React from 'react'
import FontAwesome from 'react-fontawesome'
import classes from './CareerProfileTile.scss'
import { Link } from 'react-router'

export const CareerProfileTile = (props) => (
  <Link className={classes.container} to={props.path}>
    <div className={classes.icon}></div>
      {!props.image && props.faIcon && <FontAwesome className={classes.faIcon} name={props.faIcon}/>}
    <div className={classes.title}>
      {props.title}
    </div>
    <div className={classes.description}>
      {props.description}
    </div>
  </Link>
)

export default CareerProfileTile
