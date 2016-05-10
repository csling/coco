import React from 'react'
import classes from './ForEmployers.scss'
import { connect } from 'react-redux'
import { initialize } from 'redux-form';

import { submitEmployerForm } from '../modules/forEmployers'

import ContactForm from 'forms/ContactForm/ContactForm'

type Props = {

}
export class ForEmployers extends React.Component {
  props: Props;

  handleSubmit(data) {
    submitEmployerForm(data)
  }

  render() {
    return (
      <div className={classes.forEmployersContainer}>
        <div className={classes.header}>Hire the Best Talent</div>
        <p className={classes.content}>We believe that career changers with law degrees are an untapped resource for
          companies at any stage of the growth cycle. Their time achieving their JD and in challenging environments
          has molded them into uniquely intelligent, talented, and hard-working individuals. Our goal is to connect
          you to them.</p>
        <p className={classes.content}>If you are interested in bringing this type of talent to your workplace,
        contact us below.</p>
        <ContactForm onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}

const mapActionCreators = {
  submitEmployerForm
}

const mapStateToProps = (state) => ({
  success: state.success
})

export default connect(
mapStateToProps,
mapActionCreators
)(ForEmployers)
