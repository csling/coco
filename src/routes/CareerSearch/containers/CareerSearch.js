import React from 'react'
import classes from './CareerSearch.scss'
import { connect } from 'react-redux'

import CareerProfileTile from 'components/CareerProfileTile/CareerProfileTile'

type Props = {

}

const careerTileInformation = [
  {
    image: null,
    faIcon: 'money',
    title: 'Talent Agent',
    description: 'Represent and promote artists, performers, and athletes in dealings with current or prospective ' +
      'employers',
    path: '/careers/talent_agent'
  },
  {
    image: null,
    faIcon: 'futbol-o',
    title: 'Soccer Player',
    description: 'Be the Messi or Ronaldo at your local YMCA! Get yourself a cool nickname.',
    path: '/careers/soccer_player'
  },
  {
    image: null,
    faIcon: 'university',
    title: 'Policy Coordinator',
    description: 'Write governmental policies to help guide various fields',
    path: '/careers/policy_coordinator'
  },
  {
    image: null,
    faIcon: 'question-circle',
    title: 'Contact Us',
    description: 'Don\'t see the position you\'re looking for? Tell us and we\'ll get the information you need.',
    path: '/careers/contact_us'
  }
]

export class CareerSearch extends React.Component {

  props: Props;

  render() {
    return (
      <div className={classes.careerProfilesContainer}>
        <div className={classes.headerMajor}>
          Explore Non-Legal Careers
        </div>
        <div className={classes.headerMinor}>
          Learn everything you need to know to make your career change
        </div>
        <div className={classes.careerGallery}>
          {careerTileInformation.map(function(careerInformation) {
            return <CareerProfileTile className={classes.careerTile}
                                      description={careerInformation.description}
                                      key={careerInformation.title}
                                      faIcon={careerInformation.faIcon}
                                      image={careerInformation.image}
                                      title={careerInformation.title}
                                      path={careerInformation.path}
            />
          })}
        </div>
      </div>
    )
  }
}

const mapActionCreators = {
}

const mapStateToProps = (state) => ({
})

export default connect(
  mapStateToProps,
  mapActionCreators
)(CareerSearch)
