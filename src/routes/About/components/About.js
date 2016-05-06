import React from 'react'
import classes from './About.scss'

export const About = () => (
  <div className={classes.aboutContainer}>
    <div className={classes.navSidebarContainer}>
      <a className={classes.navSidebarTab} data-link-id="0">Our Mission</a>
      <a className={classes.navSidebarTab} data-link-id="1">Our Story</a>
      <a className={classes.navSidebarTab} data-link-id="2">FAQs</a>
    </div>
    <div className={classes.aboutPane} data-pane-id="0">
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
    <div className={classes.aboutPane} data-pane-id="1">
      <div className={classes.paneTitle}>Our Story</div>
      <div className={classes.paneContent}>
        <p>There are no mistakes. You can fix anything that happens. Now we don't want him to get lonely, so we'll
          give
          him a little friend. The first step to doing anything is to believe you can do it. See it finished in your
          mind before you ever start.</p>

        <p>A thin paint will stick to a thick paint. I'm gonna start with a little Alizarin crimson and a touch of
          Prussian blue In this world, everything can be happy. And I will hypnotize that just a little bit.</p>

        <p>We start with a vision in our heart, and we put it on canvas. Let's do it again then, what the heck.
          Don't
          be afraid to make these big decisions. Once you start, they sort of just make themselves. Use your
          imagination, let it go. Just let your mind wander and enjoy. This should make you happy.</p>

        <p>Let that brush dance around there and play. See there how easy that is. We must be quiet, soft and
          gentle.
          Get tough with it, get strong. There it is.</p>
      </div>
    </div>
    <div className={classes.aboutPane} data-pane-id="2">
      <div className={classes.paneTitle}>FAQs</div>
      <div className={classes.paneContent}>
        <p>The secret to doing anything is believing that you can do it. Anything that you believe you can do strong
          enough, you can do. Anything. As long as you believe. We'll play with clouds today. Be careful. You can
          always
          add more - but you can't take it away. You don't have to spend all your time thinking about what you're
          doing,
          you just let it happen. Just go back and put one little more happy tree in there. Don't be afraid to make
          these big decisions. Once you start, they sort of just make themselves.</p>

        <p>Here's something that's fun. Just pretend you are a whisper floating across a mountain. Let's put a touch
          more of the magic here.</p>

        <p>All you need to paint is a few tools, a little instruction, and a vision in your mind. Even the worst
          thing
          we can do here is good. Now let's put some happy little clouds in here. And I will hypnotize that just a
          little bit.</p>

        <p>This is the fun part Just make little strokes like that. Let's get crazy. Nothing wrong with washing your
          brush. Pretend you're water. Just floating without any effort. Having a good day. If what you're doing
          doesn't
          make you happy - you're doing the wrong thing.</p>
      </div>
    </div>
  </div>
)

export default About
