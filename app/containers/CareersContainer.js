import React, { PropTypes, Component } from 'react'
import Careers from '../components/Careers'

export default class CareersContainer extends Component {
  constructor () {
    super ()
    this.state = {
      careers: [
        {"c": "c0", "desc0": "this is desc", "logoURL": "www", key_: 0}, 
        {"c": "c1", "desc1": "this is desc", "logoURL": "www", key_: 1}, 
        {"c": "c2", "desc2": "this is desc", "logoURL": "www", key_: 2}, 
      ]
    }
  }
  componentDidMount () {
      // here we should make a call to the service for the careers
      // add async/await to your call so all the calls resolve before displaying
      // need to create utils > apiHelpers for our API calls
      // example: 
        // async componentDidMount(){}
        // const careers = await getCareerInfo( ) // careers = array of resolved promises 
      
    this.setState({
      careers: [
        {"c": "c0", "desc": "this is desc", "logoURL": "www", key_: 0}, 
        {"c": "c1", "desc": "this is desc", "logoURL": "www", key_: 1}, 
        {"c": "c2", "desc": "this is desc", "logoURL": "www", key_: 2}, 
      ]
    })
    console.log(this.state.careers)
    console.log(JSON.stringify(this.state.careers))
  }

  render () { 
    return (
      <Careers 
        careers={this.state}
       />
    )
  }
}
