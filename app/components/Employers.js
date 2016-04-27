var React = require('react');
var PropTypes = React.PropTypes;

function Employers (props) {
  return (
    <div>
      <h1 className="text-center">Hire the Best Talent</h1>
      <p className="col-md-10 col-md-offset-1">We believe that career changers with law degrees are an untapped resource for companies at any stage of the growth cycle. Their time achieving their JD and in challenging environments has molded them into uniquely intelligent, talented, and hard-working individuals. Our goal is to connect you to them.</p>
      <p className="col-md-10 col-md-offset-1">If you are interested in bringing this type of talent to your workplace, contact us below.</p>
      <div className=" col-md-6 col-md-offset-3">
        <form onSubmit={props.onSubmit}>
          <div className="form-group">
            <label for="name" className="sr-only">Your Name</label>
            <input 
              className="form-control" 
              placeholder="Your Name" 
              name="name" 
              onChange={props.onUpdate} 
              value={props.name} 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="email" className="sr-only">Email</label>
            <input 
              className="form-control" 
              placeholder="Email Address" 
              name="email" 
              onChange={props.onUpdate} 
              value={props.email} 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="phone" className="sr-only">Phone Number</label>
            <input 
              className="form-control" 
              placeholder="Phone Number" 
              name="phone" 
              onChange={props.onUpdate} 
              value={props.phone} 
              type="text"
            />
          </div>
          <div className="form-group">
            <label for="body" className="sr-only">About Your Company</label>
            <textarea 
              className="form-control" 
              placeholder="Tell us more about your company" 
              name="body" 
              onChange={props.onUpdate} 
              value={props.body} 
              type="text"
              rows="3"
            />
          </div>
          <div className="form-group">
            <button className="btn btn-block btn-success" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
};

Employers.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired, 
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

module.exports = Employers;
