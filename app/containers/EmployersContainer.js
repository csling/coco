var React = require('react');
var Employers = require('../components/Employers');

var EmployersContainer = React.createClass({
  getInitialState: function () {
    return {
      body: ''
    };
  },
  handleSubmit: function (e) {
    e.preventDefault();
    this.setState({
      body: e.target.body,
      name: e.target.name,
      email: e.target.email,
      phone: e.target.phone
    });
  },
  render: function () {
    return (
      <Employers
        onSubmit={this.handleSubmit} 
        body={this.state.body} 
        name={this.state.name} 
        email={this.state.email} 
        phone={this.state.phone} 
      />
    )
  }
});

module.exports = EmployersContainer;
