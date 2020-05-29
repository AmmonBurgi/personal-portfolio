import PropTypes from 'prop-types'
import React from 'react'
import portait from '../images/IMG_0941.jpg'
import dev from '../images/dev.png'
import flash from '../images/Screen Shot 2020-05-29 at 11.31.42 AM 2.png'
import journal from '../images/Screen Shot 2020-05-29 at 12.19.39 PM.png'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main" >
            <img src={portait} alt="Ammon Burgi" />
          </span>
          <a href='https://docs.google.com/document/d/1EMIf5zGvvjSfHViZ4DgF9rroRoXMMVAm72sB24F4tQg/edit?usp=sharing'>Download my Resume Here!</a>
          <p>
            Hey, I'm Ammon! Welcome to my Portfolio! I'm excited to show you what I have learned through my journey of Web Development. I love developing Challenging and Creative projects! I enjoy working with a team to accomplish great things! I always strive to Work Hard while keeping Positivity inside and outside of my workspace!
          </p>
          <h3 className="major">Fun Facts About Me</h3>
          <ul>
            <li>I have a passion for Basketball and Snowboarding!</li>
            <li>I have a huge Family (13 Siblings), that I love spending time with!</li>
            <li>I love reading a good Fictional/Fantasy book!</li>
            <li>I enjoy Traveling!</li>
          </ul>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Experience</h2>
          <a href='https://devmountain.com/'>
          <span className="image main">
            <img src={dev} alt="Dev Mountain" />
          </span>
          </a>
          <p>
            I started my journey as a Web Developer at DevMountain. DevMountain is a private coding bootcamp that offers a web development course. I learned everything I needed to start developing my own full-stack applications. I also learned how to work with a team remotely due to everyone in my class having to work at home because of the COVID-19 pandemic. DevMountain was a great experience and I was very pleased with the skills I was able to develop while going through their course.
          </p>
          <a href='http://157.245.234.177:4900/'>
          <h3 className="major">Flash Drills Group Project</h3>
          </a>
          <span className="image main">
            <img src={flash} alt="flash drills app" />
          </span>
          <a href='http://157.245.234.177:4900/'>
            Flash Drills Link!
          </a>
          <ul>
            <li><p>
              React App that was built to help users easily study any subject. Users can create a Deck and assign Topics to that deck. All Decks are made public so that other users have the opportunity to view and study each deck. Users can add Flash Card to their deck and can study each card. The User also has the option to rate each card on how well they know the card.  
            </p></li>
            <li><p>React || Node || PostgreSQL || Express || Redux || Bcryptjs || AmazonS3 || MaterialUI</p></li>
          </ul>
          <a href='http://157.245.234.177:4002/'>
          <h3 className="major">The Journal Of Life Personal Project</h3>
          </a>
          <span className="image main">
            <img src={journal} alt="journal app" />
          </span>
          <a href='http://157.245.234.177:4002/'>
            The Journal Of Life Link!
          </a>
          <ul>
            <li><p>React App that was built to provide an easy way for users to save and share their experiences. Users can create Entries and Goals that they can later view and edit. Users can also join a live chat room where they can share their ideas and experiences with other users.</p></li>
            <li><p>React || Node || PostgreSQL || Express || Redux || Bcryptjs || Socket.IO || Massive</p></li>
          </ul>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h3 className="major">Programming Languages</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>Git & Github</li>
            <li>ReactJS</li>
          </ul>
          <h3 className="major">Additional Skills</h3>
          <ul>
            <li>PostgreSQL</li>
            <li>Redux</li>
            <li>Nodemailer</li>
            <li>Express</li>
            <li>Express-Session</li>
            <li>BcryptJS</li>
            <li>Socker.io</li>
            <li>Styled-Components</li>
            <li>Material-UI</li>
            <li>MassiveJS</li>
            <li>QuillJS</li>
            <li>Adobe Photoshop</li>
            <li>Hosting</li>
          </ul>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <p>Check out the Links below!</p>
          <form method="post" action="https://formspree.io/ammonburgi@gmail.com">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://github.com/AmmonBurgi"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/ammon-burgi-380279199/"
                className="icon fa-linkedin"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
