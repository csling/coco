import React from 'react'
import classes from './SignUp.scss'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'

import FontAwesome from 'react-fontawesome'

import { submitUserSignUp } from '../modules/signUp'

import UserSignUpForm from 'forms/UserSignUpForm/UserSignUpForm'


type Props = {

}
export class SignUp extends React.Component {
  props: Props;

  handleSubmit(data) {
    submitUserSignUp(data)
  }

  render() {
    return (
      <div className={classes.userSignUpContainer}>
        <div className={classes.header}>That's great! Now we can help you do it!</div>
        <div className={classes.banner}>
          <div className={classes.bannerImage}>
            <FontAwesome className={classes.userIcon} name='user'/>
          </div>
          <div className={classes.bannerImageLine}></div>
          <div className={classes.bannerImage}>
            <FontAwesome className={classes.circleArrowIcon} name='arrow-circle-o-up'/>
          </div>
          <div className={classes.bannerImageLine}></div>
          <div className={classes.bannerImage}>
            <FontAwesome className={classes.handRightIcon} name='hand-o-right'/>
          </div>
        </div>
        <p className={classes.content}>Get Professional Guidance and Special Access to Resources & Ex-Lawyer Mentors
        to Help You Make Your Career Change</p>
        <UserSignUpForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapActionCreators = {
  submitUserSignUp
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapActionCreators
)(SignUp)
