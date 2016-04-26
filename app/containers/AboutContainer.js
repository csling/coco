var React = require('react');
var About = require('../components/About');

var AboutContainer = React.createClass({
  render: function () {
    return (
      <div>
        <About />      
      </div>
    )
  }
});

module.exports = AboutContainer;
