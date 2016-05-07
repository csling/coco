import React from 'react'
import classes from './EmployerContactForm.scss'
import {reduxForm} from 'redux-form';
import validateEmployerContact from './validateEmployerContactForm';

export const fields = ['contactName',
  'companyName',
  'contactEmailAddress',
  'contactPhoneNumber'
]

const validate = (values) => {
  const errors = {}
  return errors
}

type Props = {
  handleSubmit: Function,
  fields: Object,
}

export class EmployerContactForm extends React.Component {
  props: Props;

  defaultProps = {
    fields: {contactMessage: '', contactName: '', companyName: '', contactEmailAddress: '', contactPhoneNumber: ''},
  }

  render() {
    const { fields, handleSubmit } = this.props

    return (
      <form className={classes.employerContactFormContainer} onSubmit={handleSubmit}>
        <div className={classes.messageBlock}>
          <textarea placeholder="Feel free to leave us a message!" {...fields['contactMessage']}/>
        </div>
        <div className={classes.formRow}>
          <label>Full Name:</label>
          <input type="text" placeholder="Your Name" {...fields['contactName']}/>
          {fields['contactName'].error && fields['contactName'].touched && <div className={classes.errorMessage}>{fields['contactName'].error}</div>}
        </div>
        <div className={classes.formRow}>
        <label>Name of Company:</label>
          <input type="text" placeholder="Company Name" {...fields['companyName']}/>
          {fields['companyName'].error && fields['companyName'].touched && <div className={classes.errorMessage}>{fields['companyName'].error}</div>}
        </div>
        <div className={classes.formRow}>
        <label>Email Address:</label>
          <input type="email" placeholder="Email Address" {...fields['contactEmailAddress']}/>
          {fields['contactEmailAddress'].error && fields['contactEmailAddress'].touched && <div className={classes.errorMessage}>{fields['contactEmailAddress'].error}</div>}
        </div>
        <div className={classes.formRow}>
        <label>Phone Number:</label>
          <input type="tel" placeholder="Phone #" {...fields['contactPhoneNumber']}/>
          {fields['contactPhoneNumber'].error && fields['contactPhoneNumber'].touched && <div className={classes.errorMessage}>{fields['contactPhoneNumber'].error}</div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

EmployerContactForm = reduxForm({
  form: 'employerContact',
  fields,
  validate: validateEmployerContact
})(EmployerContactForm)

export default EmployerContactForm
