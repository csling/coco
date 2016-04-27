var React = require('react');
var Employers = require('../components/Employers');

var EmployersContainer = React.createClass({
  getInitialState: function () {
    return {
      name: '',
      email: '',
      phone: '', 
      body: '',
    };
  },
  handleChange: function (e) {

    // DO I NEED THESE THREE LINES OR CAN I SIMPLY DO THE COMMENTED OUT TEXT BELOW?
    // var nextState = {};
    // nextState[e.target.name] = e.target.value;
    // this.setState(nextState);
    this.setState({
      body: e.target.value,
      name: e.target.value,
      email: e.target.value,
      phone: e.target.value,
    });
  },

  handleSubmit: function (e) {
    e.preventDefault();

    var formData = {
      body: this.state.body,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
    };

    // WHY DOESNT THIS WORK -- I HAVE TO USE THIS.STATE INSTEAD????
    // var formData = {
    //   body: e.target.value,
    //   name: e.target.value,
    //   email: e.target.value,
    //   phone: e.target.value,
    // };

    // WHY DOES THIS LOG TO UNDEFINED???
    console.log(formData)
    

    this.setState({
      body: '',
      name: '',
      email: '',
      phone: '',
    });
    console.log(this.state)

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
    });
  },

  render: function () {
    return (
      <Employers
        onSubmit={this.handleSubmit} 
        onUpdate={this.handleChange} 
        name={this.state.name} 
        email={this.state.email} 
        phone={this.state.phone} 
        body={this.state.body} 
      />
    )
  }
});

module.exports = EmployersContainer;
