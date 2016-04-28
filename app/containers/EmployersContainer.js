import React, { PropTypes, Component } from 'react'
import Employers from '../components/Employers'

export default class EmployersContainer extends Component {
  constructor (props) {
    super()
    this.state = {
      name: '',
      email: '',
      phone: '', 
      body: '',
    }
  }

  handleChange (e) {

    // HOW COME THESE NEXT 3 LINES WORK BUT WHEN I REPLACE WITH THIS.SETSTATE, IT CHANGES EACH FORM FIELD ALTOGETHER
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);

    // this.setState({
    //   body: e.target.value,
    //   name: e.target.value,
    //   email: e.target.value,
    //   phone: e.target.value,
    // });
  }

  handleSubmit (e) {
    e.preventDefault();
    
    var formData = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    // WHY DOESNT THIS WORK -- I HAVE TO USE THIS.STATE INSTEAD (ABOVE) ????
    // var formData = {
    //   body: e.target.value,
    //   name: e.target.value,
    //   email: e.target.value,
    //   phone: e.target.value,
    // };

    this.setState({
      body: '',
      name: '',
      email: '',
      phone: '',
    });

    function formCallback () {
      console.log('form success!')
    }

    $.ajax({
      url: 'https://ben-testing.firebaseio.com/contact.json',
      dataType: 'json',
      type: 'POST',
      data: JSON.stringify(formData),
      success: formCallback,
      error: function (xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    })
  }

  render () {
    return (
      <Employers
        onSubmit={(e) => this.handleSubmit(e)} 
        onUpdate={(e) => this.handleChange(e)} 
        name={this.state.name} 
        email={this.state.email} 
        phone={this.state.phone} 
        body={this.state.body} 
      />
    )
  }
} 
