import React, { PropTypes, Component } from 'react'
import Careers from '../components/Careers'

export default class CareersContainer extends Component {
  constructor () {
    super ()
    this.state = {
      careers: []
    }
  }
  componentDidMount () {
      // here we should make a call to the service for the careers
      // add async/await to your call so all the calls resolve before displaying
      // need to create utils > apiHelpers for our API calls
      // example: 
        // async componentDidMount(){}
        // const careers = await getCareerInfo( ) // careers = array of resolved promises 
        // dont forget to wrap in try/catch block
      
    this.setState({
      careers: [
        {"c": "c0", "desc": "this is desc", "logoURL": "www", key_: 0}, 
        {"c": "c1", "desc": "this is desc", "logoURL": "www", key_: 1}, 
        {"c": "c2", "desc": "this is desc", "logoURL": "www", key_: 2}, 
      ]
    })
  }

  render () { 
    return (
      <Careers 
        careers={this.state.careers.map((career) => {return career})}
       />
    )
  }
}
