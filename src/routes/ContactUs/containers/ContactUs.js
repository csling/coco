import React from 'react'
import classes from './ContactUs.scss'
import { connect } from 'react-redux'
import { initialize } from 'redux-form';

import { submitContactForm } from '../modules/contactUs'

import ContactForm from 'forms/ContactForm/ContactForm'

type Props = {

}
export class ContactUs extends React.Component {
  props: Props;

  handleSubmit(data) {
    submitContactForm(data)
  }

  render() {
    return (
      <div className={classes.contactUsContainer}>
        <div className={classes.header}>Got any Questions or Suggestions? Let us know!</div>
        <ContactForm onSubmit={this.handleSubmit} visibleFields={{contactPhoneNumber: false, companyName: false}}/>
      </div>
    )
  }
}

const mapActionCreators = {
  submitContactForm
}

const mapStateToProps = (state) => ({
  success: state.success
})

export default connect(
mapStateToProps,
mapActionCreators
)(ContactUs)
