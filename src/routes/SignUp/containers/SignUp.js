import React from 'react'
import classes from './SignUp.scss'
import { connect } from 'react-redux'
import { initialize } from 'redux-form'

import FontAwesome from 'react-fontawesome'

import { submitUserSignUp } from '../modules/signUp'

import UserSignUpForm from 'forms/UserSignUpForm/UserSignUpForm'
import { Link } from 'react-router'
import Modal from 'react-modal'

const modalStyles = {
  overlay : {
    position          : 'fixed',
    backgroundColor   : 'rgba(0, 0, 0, 0.4)'
  },
  content : {
    position                   : 'absolute',
    margin                     : '0px auto',
    top                        : '100px',
    height                     : '425px',
    width                      : '500px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    borderRadius               : '20px',
    padding                    : '30px'
  }
}

type Props = {

}
export class SignUp extends React.Component {
  props: Props;

  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false
    }
  }

  handleSubmit(data) {
    submitUserSignUp(data)
    this.openModal()
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  closeModal() {
    this.setState({modalIsOpen: false})
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
        <UserSignUpForm onSubmit={this.handleSubmit.bind(this)}/>
        <Modal isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal.bind(this)}
               style={modalStyles}>
          <div className={classes.modalBanner}>
            Thank you for signing up!
          </div>
          <div className={classes.modalMessage}>
            <p>We will contact you soon to learn more about you.  From there, we'll tailor a plan that will result in you
            transitioning to a new, fulfilling career.</p>

            <p>In the meantime, if you're curious you can take a look at other potential careers.</p>
          </div>
          <div className={classes.modalRedirectButtons}>
            <Link className={classes.modalRedirectButton} to='/career_search'>Explore Careers</Link>
          </div>
          <div className={classes.modalFooter}>
            <Link className={classes.contactUsRedirectButton} to='/contact_us'>
              <FontAwesome className={classes.envelopeIcon} name='envelope-square'/>
            </Link>
            <div className={classes.modalFooterMessage}>
              Have a question or comment? Leave us a message!
            </div>
          </div>
        </Modal>
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
