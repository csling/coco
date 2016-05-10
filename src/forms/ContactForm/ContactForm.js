import React from 'react'
import classes from './ContactForm.scss'
import {reduxForm} from 'redux-form';
import validateContactForm from './validateContactForm';

export const fields = ['contactMessage',
  'contactName',
  'companyName',
  'contactEmailAddress',
  'contactPhoneNumber'
]

type Props = {
  handleSubmit: Function,
  fields: Object,
  submitting: Boolean,
  success: Boolean
}

export class ContactForm extends React.Component {
  props: Props;

  defaultProps = {
  }

  constructor(props) {
    super(props)

    let defaultPlaceholders = {
      contactMessage: 'Feel free to leave us a message!',
      contactName: 'Your Name',
      companyName: 'Company Name',
      contactEmailAddress: 'Email Address',
      contactPhoneNumber: 'Phone #'
    }

    let defaultValidateFields = {
      contactMessage: true,
      contactName: true,
      companyName: true,
      contactEmailAddress: true,
      contactPhoneNumber: true
    }

    let defaultVisibleFields = {
      contactMessage: true,
      contactName: true,
      companyName: true,
      contactEmailAddress: true,
      contactPhoneNumber: true
    }

    let defaultShowFieldLabels = true

    let customizedPlaceholders = Object.assign(defaultPlaceholders, props.placeholders)
    let customizedValidateFields = Object.assign(defaultValidateFields, props.validateFields)
    let customizedVisibleFields = Object.assign(defaultVisibleFields, props.visibleFields)
    let customizedShowFieldLabels = (typeof(props.showFieldLabels) === 'boolean') ? props.showFieldLabels : defaultShowFieldLabels

    this.state = {
      placeholders: customizedPlaceholders,
      validateFields: customizedValidateFields,
      visibleFields: customizedVisibleFields,
      showFieldLabels: customizedShowFieldLabels
    }
  }

  render() {
    const { fields, handleSubmit, submitting, success } = this.props
    const { placeholders, validateFields, visibleFields, showFieldLabels } = this.state

    return (
      <form className={classes.contactFormContainer} onSubmit={handleSubmit}>
        {visibleFields.contactMessage && <div className={classes.messageBlock}>
          <textarea placeholder={placeholders.contactMessage} {...fields['contactMessage']}/>
          {validateFields.contactMessage &&
          fields['contactMessage'].error &&
          fields['contactMessage'].touched &&
          <div className={classes.errorMessage}>{fields['contactMessage'].error}</div>}
        </div>}
        {visibleFields.contactName && <div className={classes.formRow}>
          {showFieldLabels && <label>Full Name:</label>}
          <input type="text" placeholder={placeholders.contactName} {...fields['contactName']}/>
          {validateFields.contactName &&
            fields['contactName'].error &&
            fields['contactName'].touched &&
            <div className={classes.errorMessage}>{fields['contactName'].error}</div>}
        </div>}
        {visibleFields.companyName && <div className={classes.formRow}>
          {showFieldLabels && <label>Name of Company:</label>}
          <input type="text" placeholder={placeholders.companyName} {...fields['companyName']}/>
          {validateFields.companyName &&
            fields['companyName'].error &&
            fields['companyName'].touched &&
            <div className={classes.errorMessage}>{fields['companyName'].error}</div>}
        </div>}
        {visibleFields.contactEmailAddress && <div className={classes.formRow}>
          {showFieldLabels && <label>Email Address:</label>}
          <input type="email" placeholder={placeholders.contactEmailAddress} {...fields['contactEmailAddress']}/>
          {validateFields.contactEmailAddress &&
            fields['contactEmailAddress'].error &&
            fields['contactEmailAddress'].touched &&
            <div className={classes.errorMessage}>{fields['contactEmailAddress'].error}</div>}
        </div>}
        {visibleFields.contactPhoneNumber && <div className={classes.formRow}>
          {showFieldLabels && <label>Phone Number:</label>}
          <input type="tel" placeholder={placeholders.contactPhoneNumber} {...fields['contactPhoneNumber']}/>
          {validateFields.contactPhoneNumber &&
            fields['contactPhoneNumber'].error &&
            fields['contactPhoneNumber'].touched &&
            <div className={classes.errorMessage}>{fields['contactPhoneNumber'].error}</div>}
        </div>}
        <button className={classes.submitButton} type="submit">Submit</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired,

  // The success prop has been commented out from propTypes because it raises a warning message; to be fixed later
  // success: React.PropTypes.bool.isRequired
}

ContactForm = reduxForm({
  form: 'contact',
  fields,
  validate: validateContactForm
})(ContactForm)

export default ContactForm
