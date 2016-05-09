import React from 'react'
import classes from './CareerProfile.scss'
import { connect } from 'react-redux'

import FontAwesome from 'react-fontawesome'

type Props = {

}

const careerProfileInformation = {
  title: 'Science Librarian',
  image: null,
  faIcon: 'book',
  description: ['Although largely employed in research libraries by universities, science librarians can also be ' +
    'found working in the government and private industry. Science librarians can be considered part teacher, part ' +
    'helpful assistant and part researcher. Science librarians teach scientists how to search for information, assist ' +
    'them in finding the information they are looking for, and at times, even assist with heavy informatics-based ' +
    'projects.',
    'Librarians study usage rates of the resources in the library and use that to shape and curate the journals, ' +
    'databases, and information available to the company/university while keeping in mind budget and resources. ' +
    'Science librarians, unlike researchers, develop a generalized expertise in researching and procuring data, ' +
    'typically across several backgrounds. In short, his/her job is to master the methods of extracting precise data, ' +
    'and teaching other scientists how to do so, thereby saving them precious time.'],
  exampleTasks: ['Teach classes or group sessions instructing researchers how to distinguish good from bad ' +
    'information sources and how to find the good ones',
    'Field individuals questions in person or via e-mail/phone appropriate methods of citing articles and ' +
    'how to format them',
    'Write a blog post mentioning new publishing initiatives the library is undergoing and announce a new ' +
    'information source now available to the university that you selected that would be useful to all'],
  jobMetrics: {
    salary: '',
    collaboration: '',
    hours: ''
  },
  transferableSkills: ['Ability to converse with other researchers at a higher level of education and background',
    'Prior use of online databases specific to research (oe. PubMed), EndNote, BibTex',
    'Ability to multitask. You will be working with several groups across a variety of projects, and you must ' +
    'be able to keep up',
    'Something else that\'s considered worthwhile'],
  skillGaps: ['Teaching - You will need to show individual and groups researchers how to perform sometimes ' +
  'complicated tasks. The ability to be a good teacher is crucial']
}

const userInformation = {
  originIndustry: 'Law',
  originJob: 'Lawyer'
}

export class CareerProfile extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  props:Props;

  render() {
    return (
      <div className={classes.careerProfileContainer}>
        <div className={classes.icon}>
          {!careerProfileInformation.image
            && careerProfileInformation.faIcon
            && <FontAwesome className={classes.faIcon} name={careerProfileInformation.faIcon}/>}
        </div>
        <div className={classes.backButton}>Back</div>
        <div className={classes.title}>{careerProfileInformation.title}</div>
        <div className={classes.descriptionLabel}>Job Description</div>
        <div className={classes.description}>
          {careerProfileInformation.description.map(function(descriptionParagraph, index) {
            return <p key={index}>{descriptionParagraph}</p>
          })}
        </div>
        <div className={classes.exampleTasksLabel}>Examples of Tasks Performed on this Job</div>
        <div className={classes.exampleTasks}>
          <ul>
            {careerProfileInformation.exampleTasks.map(function(exampleTask, index) {
              return <li key={index}>{exampleTask}</li>
            })}
          </ul>
        </div>
        <div className={classes.jobMetricsLabel}>Job Metrics (relative to other potions)</div>
        <div className={classes.jobMetrics}>
          <div className={classes.salary}></div>
          <div className={classes.collaboration}></div>
          <div className={classes.hours}></div>
        </div>
        <div className={classes.transferableSkillsLabel}>Transferable Skills from your Background in {userInformation.originIndustry}</div>
        <div className={classes.transferableSkills}>
          <ul>
            {careerProfileInformation.transferableSkills.map(function(transferableSkill, index) {
              return <li key={index}>{transferableSkill}</li>
            })}
          </ul>
        </div>
        <div className={classes.skillGapsLabel}>Skill Gaps coming from {userInformation.originIndustry}</div>
        <div className={classes.skillGaps}>
          <ul>
            {careerProfileInformation.skillGaps.map(function(skillGap, index) {
              return <li key={index}>{skillGap}</li>
            })}
          </ul>
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
)(CareerProfile)
