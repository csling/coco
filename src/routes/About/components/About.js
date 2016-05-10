import React from 'react'
import classes from './About.scss'

import FontAwesome from 'react-fontawesome'

type Props = {

}

export class About extends React.Component {
  props: Props

  constructor(props) {
    super(props)
    this.state = {
      selectedPane: 0
    }
  }

  handleClick(e) {
    this.setState({selectedPane: parseInt(e.target.getAttribute('data-link-id'), 0)})
  }

  render() {
    return (
      <div className={classes.aboutContainer}>
        <div className={classes.navSidebarContainer}>
          <a className={this.state.selectedPane === 0 ? classes.navSidebarTabActive : classes.navSidebarTab}
             data-link-id="0"
             onClick={(e) => this.handleClick(e)}>Our Mission</a>
          <a className={this.state.selectedPane === 1 ? classes.navSidebarTabActive : classes.navSidebarTab}
             data-link-id="1"
             onClick={(e) => this.handleClick(e)}>Our Story</a>
          <a className={this.state.selectedPane === 2 ? classes.navSidebarTabActive : classes.navSidebarTab}
             data-link-id="2"
             onClick={(e) => this.handleClick(e)}>FAQs</a>
        </div>
        <div className={this.state.selectedPane === 0 ? classes.aboutPaneActive: classes.aboutPane}>
          <div className={classes.paneTitle}>Our Mission</div>
          <div className={classes.paneContent}>
            <p>Nothing wrong with washing your brush. Now we'll take the almighty fan brush. We spend so much of our
              life
              looking - but never seeing. Let's put some happy trees and bushes back in here. See there, told you that
              would
              be easy. Let's have a little bit of fun today.</p>

            <p>We don't have to be committed. We are just playing here. These little son of a guns hide in your brush
              and
              you just have to push them out. You can do anything your heart can imagine. This is an example of what you
              can
              do with just a few things, a little imagination and a happy dream in your heart. Sometimes you learn more
              from
              your mistakes than you do from your masterpieces. Just relax and let it flow. That easy.</p>

            <p>Get away from those little Christmas tree things we used to make in school. Very easy to work these to
              death.
              We have a fantastic little sky! Anyone can paint. In life you need colors. We don't have anything but
              happy
              trees here.</p>

            <p>I guess I'm a little weird. I like to talk to trees and animals. That's okay though; I have more fun than
              most people. It just happens - whether or not you worried about it or tried to plan it. Let's do that
              again.
              Once you learn the technique, ohhh! Turn you loose on the world; you become a tiger.</p>
          </div>
        </div>
        <div className={this.state.selectedPane === 1 ? classes.aboutPaneActive: classes.aboutPane}>
          <div className={classes.paneTitle}>Our Story</div>
          <div className={classes.paneContent}>
            <div className={classes.profilePanels}>
              <div className={classes.profilePanel}>
                <div className={classes.profileAvatar}>
                  <FontAwesome className={classes.avatarImage} name="user"/>
                </div>
                <div className={classes.profileName}>Misha Vargas</div>
                <div className={classes.profileText}>
                  <ul>
                    <li>Transitioned from the bench to sales</li>
                    <li>Generally swell guy</li>
                    <li>Was viciously heckled at his own wedding</li>
                    <li>Loves the Simpsons and is fighting to keep New Haverbrook on the map</li>
                    <li>Self-proclaimed best sumo wrestler in LA</li>
                    <li>Stupidly likes all teams from Oakland even though they're awful and never win anything</li>
                  </ul>
                </div>
              </div>
              <div className={classes.profilePanel}>
                <div className={classes.profileAvatar}>
                  <FontAwesome className={classes.avatarImage} name="user"/>
                </div>
                <div className={classes.profileName}>Christian Ling</div>
                <div className={classes.profileText}>
                  <ul>
                    <li>Computer-science-grad-turned-lawyer-turned-software-developer</li>
                    <li>Recovering karaoke addict</li>
                    <li>Responsible for this website (but only the good parts; bugs and broken features are Taylor and
                      Misha's fault!)</li>
                    <li>Fairweather fan of the sports teams from whatever city he's currently in</li>
                  </ul>
                </div>
              </div>
              <div className={classes.profilePanel}>
                <div className={classes.profileAvatar}>
                  <FontAwesome className={classes.avatarImage} name="user"/>
                </div>
                <div className={classes.profileName}>Taylor Hollenbeck</div>
                <div className={classes.profileText}>
                  <ul>
                    <li>Husband of a lawyer</li>
                    <li>Made career transitions from Psychology to Marketing to Sales to Marketing</li>
                    <li>Was the one heckling Misha at his wedding</li>
                    <li>Hopes it was Flanders</li>
                    <li>Recently traveled the world, going to 12 countries</li>
                    <li>Correctly likes all the teams from San Francisco. Three World Series Championships in five
                      years</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={this.state.selectedPane === 2 ? classes.aboutPaneActive: classes.aboutPane}>
          <div className={classes.paneTitle}>FAQs</div>
          <div className={classes.paneContent}>
            <div className={classes.question}>
              <p>Q: What is a Course Correct?</p>
            </div>
            <div className={classes.answer}>
              <p>A: A course correct is characterized by a change to an existing path. In the context of your career this
              means....</p>
            </div>
            <div className={classes.question}>
              <p>Q2: Do I need to go through each step?</p>
            </div>
            <div className={classes.answer}>
              <p>A2: This would be a semi-long winded answer. This would be a semi-long winded answer. This would be a
                semi-long winded answer. This would be a semi-long winded answer. This would be a semi-long winded
                answer. This would be a semi-long winded answer. This would be a semi-long winded answer. This would
                be a semi-long winded answer.</p>
            </div>
            <div className={classes.question}>
              <p>Q3: Are you against people being lawyers or scientists? (Or why are you so anti-lawyers/scientists?</p>
            </div>
            <div className={classes.answer}>
              <p>A3: We're not! We just think people should all the requisite infomation at their disposal and - should
                they decide to leave - know they have options outside their tracks. This would be a semi-long winded
                answer. This would be a semi-long winded answer. This would be a semi-long winded answer. This would be
                a semi-long winded answer. This would be a semi-long winded answer. This would be a semi-long winded
                answer. This would be a semi-long winded answer. This would be a semi-long winded answer. This would be
                a semi-long winded answer. This would be a semi-long winded answer. This would be a semi-long winded
                answer. This would be a semi-long winded answer. This would be a semi-long winded answer. This would be
                a semi-long winded answer. This would be a semi-long winded answer. This would be a semi-long winded
                answer.</p>
            </div>
            <div className={classes.question}>
              <p>Q4: Questiony question question</p>
            </div>
            <div className={classes.answer}>
              <p>A4: We believe attitude and aptitude are much better indicators of success</p>
            </div>
            <div className={classes.question}>
              <p>Q5: Last question?</p>
            </div>
            <div className={classes.answer}>
              <p>A5: This would be a semi-long winded answer. This would be a semi-long winded answer. This would be a
                semi-long winded answer. This would be a semi-long winded answer. This would be a semi-long winded
                answer. This would be a semi-long winded answer. This would be a semi-long winded answer.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About
