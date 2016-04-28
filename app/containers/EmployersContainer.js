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
  },

  handleSubmit: function (e) {
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
