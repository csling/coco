import React from 'react'
import FontAwesome from 'react-fontawesome'
import classes from './CourseCorrectProgressBarDetailed.scss'

export const CourseCorrectProgressBarDetailed = (props) => (
  <div className={classes.stepsContainer}>
    <div className={classes.stepContainer}>
      <div className={classes.stepContent}>
        <div className={( (props.step > 1) && classes.completedStepImage) ||
        ((props.step === 1) && classes.currentStepImage) ||
         classes.upcomingStepImage}>
          <FontAwesome className={classes.stepOneIcon} name='search'/>
        </div>
        <div className={classes.stepTitleMinor}>Step 1</div>
        <div className={classes.stepTitleMajor}>Explore</div>
        <p className={classes.stepDescription}>{'Browse through careers that ' + props.originJobTitlePlural
        + ' commonly transition to. See info on salary, day-to-day tasks, and transferable skills.'}</p>
      </div>
    </div>
    <div className={ (props.step > 1) ? classes.stepConnectionComplete : classes.stepConnectionIncomplete}></div>
    <div className={classes.stepContainer}>
      <div className={classes.stepContent}>
        <div className={( (props.step > 2) && classes.completedStepImage) ||
        ((props.step === 2) && classes.currentStepImage) ||
         classes.upcomingStepImage}>
          <FontAwesome className={classes.stepTwoIcon} name='user'/>
        </div>
        <div className={classes.stepTitleMinor}>Step 2</div>
        <div className={classes.stepTitleMajor}>Interact</div>
        <p className={classes.stepDescription}>{'Get connected to former ' + props.originJobTitlePlural + ' who are ' +
        'now ' + props.jobTitlePlural + '.'}</p>
      </div>
    </div>
    <div className={ (props.step > 2) ? classes.stepConnectionComplete : classes.stepConnectionIncomplete}></div>
    <div className={classes.stepContainer}>
      <div className={classes.stepContent}>
        <div className={( (props.step > 3) && classes.completedStepImage) ||
        ((props.step === 3) && classes.currentStepImage) ||
         classes.upcomingStepImage}>
          <FontAwesome className={classes.stepThreeIcon} name='arrow-circle-o-up'/>
        </div>
        <div className={classes.stepTitleMinor}>Step 3</div>
        <div className={classes.stepTitleMajor}>Learn</div>
        <p className={classes.stepDescription}>{'Develop the skills and industry knowledge you need to get ' +
        'the job and be successful in your new career as a ' + props.jobTitleSingular + '.'}</p>
      </div>
    </div>
    <div className={ (props.step > 3) ? classes.stepConnectionComplete : classes.stepConnectionIncomplete}></div>
    <div className={classes.stepContainer}>
      <div className={classes.stepContent}>
        <div className={((props.step === 4) && classes.currentStepImage) ||
         classes.upcomingStepImage}>
          <FontAwesome className={classes.stepFourIcon} name='hand-o-right'/>
        </div>
        <div className={classes.stepTitleMinor}>Step 4</div>
        <div className={classes.stepTitleMajor}>Prepare</div>
        <p className={classes.stepDescription}>{'Receive resume, application and interview strategy help from a team ' +
          'of career change experts.'}</p>
      </div>
    </div>
  </div>
)

export default CourseCorrectProgressBarDetailed
