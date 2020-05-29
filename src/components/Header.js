import PropTypes from 'prop-types'
import React from 'react'
import '../assets/css/head.css'

const Header = props => (
  <header id="header" style={props.timeout ? { display: 'none' } : {}}>
    {/* <div className="logo">
      <span className="icon fa-diamond"></span>
    </div> */}
    <div className="content">
      <div className="inner">
        <h1>Ammon Burgi</h1>
        <p>
         Learning and Developing my skills Each And Every Day!
        </p>
      </div>
    </div>
    <nav>
      <ul>
        <li>
          <button
          className='about-button'
            onClick={() => {
              props.onOpenArticle('intro')
            }}
            // style={{display: 'flex', justifyContent: 'flex-end'}}
          >
            About
          </button>
        </li>
        <li>
          <button
          className='Experience-button'
            onClick={() => {
              props.onOpenArticle('work')
            }}
            // style={{'paddingLeft': '2.5em'}}
          >
            Experience
          </button>
        </li>
        <li>
          <button
          className='Skills-button'
            onClick={() => {
              props.onOpenArticle('about')
            }}
            style={{'width': '11em'}}
          >
            Skills
          </button>
        </li>
        <li>
          <button
          className='Contact-button'
            onClick={() => {
              props.onOpenArticle('contact')
            }}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  </header>
)

Header.propTypes = {
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
}

export default Header
