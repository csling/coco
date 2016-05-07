import React from 'react'
import {reduxForm} from 'redux-form';
import validateEmployerContact from ',/validateEmployerContact';

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
    fields: {contactName, companyName, contactEmailAddress, contactPhoneNumber},
  }

  render() {
    const { fields, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Your Name" {...contactName}/>
        </div>
        <div>
          <input type="text" placeholder="Company Name" {...companyName}/>
        </div>
        <div>
          <input type="email" placeholder="Email Address" {...contactEmailAddress}/>
        </div>
        <div>
          <input type="tel" placeholder="Phone #" {...contactEmailAddress}/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

ForEmployers = reduxForm({
  form: 'employerContact',
  fields,
  validate
})(ForEmployers)

export default EmployerContactForm
