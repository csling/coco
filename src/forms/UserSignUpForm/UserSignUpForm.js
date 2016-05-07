import React from 'react'
import classes from './UserSignUpForm.scss'
import {reduxForm} from 'redux-form';
import validateUserSignUpForm from './validateUserSignUpForm';

export const fields = ['firstName',
  'lastName',
  'emailAddress'
]

type Props = {
  handleSubmit: Function,
  fields: Object,
  submitting: Boolean,
  success: Boolean
}

export class UserSignUpForm extends React.Component {
  props: Props;

  defaultProps = {
    fields: {firstName: '', lastName: '', emailAddress: ''},
    submitting: false,
    success: false
  }

  render() {
    const { fields, handleSubmit, submitting, success } = this.props

    return (
      <form className={classes.userSignUpFormContainer} onSubmit={handleSubmit}>
        <div className={classes.formRow}>
          <label>First Name:</label>
          <input type="text" placeholder="First Name" {...fields['firstName']}/>
          {fields['firstName'].error && fields['firstName'].touched && <div className={classes.errorMessage}>{fields['firstName'].error}</div>}
        </div>
        <div className={classes.formRow}>
          <label>Last Name:</label>
          <input type="text" placeholder="Last Name" {...fields['lastName']}/>
          {fields['lastName'].error && fields['lastName'].touched && <div className={classes.errorMessage}>{fields['lastName'].error}</div>}
        </div>
        <div className={classes.formRow}>
          <label>Email Address:</label>
          <input type="email" placeholder="Email Address" {...fields['emailAddress']}/>
          {fields['emailAddress'].error && fields['emailAddress'].touched && <div className={classes.errorMessage}>{fields['emailAddress'].error}</div>}
        </div>
        <div className={classes.formRow}>
          <input type="checkbox"/>
          <label className={classes.termsAndPolicyAgreement}>I agree to the Course Correct Terms & Privacy Policy</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

UserSignUpForm.propTypes = {
  fields: React.PropTypes.object.isRequired,
  handleSubmit: React.PropTypes.func.isRequired,
  submitting: React.PropTypes.bool.isRequired

  // The success prop has been commented out from propTypes because it raises a warning message; to be fixed later
  // success: React.PropTypes.bool.isRequired
}

UserSignUpForm = reduxForm({
  form: 'userSignUp',
  fields,
  validate: validateUserSignUpForm
})(UserSignUpForm)

export default UserSignUpForm
