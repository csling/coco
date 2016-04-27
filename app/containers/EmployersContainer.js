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
    var nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
    // this.setState({
    //   body: e.target.value,
    //   name: e.target.value,
    //   email: e.target.value,
    //   phone: e.target.value,
    // });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    console.log(e)
    var formData = {
      body: e.target.body,
      name: e.target.name,
      email: e.target.email,
      phone: e.target.phone,
    };

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
      url: 'testin.com',
      dataType: 'json',
      type: 'POST',
      data: formData,
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
        onChange={this.handleChange} 
        name={this.state.name} 
        email={this.state.email} 
        phone={this.state.phone} 
        body={this.state.body} 
      />
    )
  }
});

module.exports = EmployersContainer;
