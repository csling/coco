var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var Home = require('./Home.js')

var Main = React.createClass({
  render: function () {
    return (
      <div>
        <div className="col-md-offset-3">
         <Link to={Home} className="col-md-2">Home</Link> 
         <Link to='/careers' className="col-md-2">Careers</Link>
         <Link to='/about' className="col-md-2">About</Link>
         <Link to='/employers' className="col-md-2">Employers</Link>
         <a href='https://wordpress.com' target="_blank" className="col-md-2">Blog</a>
        </div>
        <br />
        <div>
         {this.props.children}
        </div>
      </div>
    )
  }
});

module.exports = Main;
