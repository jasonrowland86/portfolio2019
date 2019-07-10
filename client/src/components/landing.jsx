import React from 'react';
import Nav from './nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

library.add(fab);

class Landing extends React.Component {
  constructor() {
    super();
    this.state = {
      landingRight: {
        display: 'none'
      },
      arrow: {
        display: 'none'
      }
    }
  }

  animateLanding() {
    this.setState({
      landing: {
        height: 'auto'
      },
      landingH1: {
        fontSize: '10vw'
      },
      landingH3: {
        fontSize: '5vw'
      },
      landingRight: {
        display: 'block'
      },
      icons: {
        opacity: 0,
      },
    })
    setTimeout(() => {
      this.setState({
        icons: {
          opacity: 1,
        }
      })
    }, 1100);
  }

  render() {
    return(
      <div className="landing" style={this.state.landing}>
        <div className="landing-top">
          <div className="landing-left" onClick={(event) => { this.props.handleLanding(); this.animateLanding();}}>
            <h1 style={this.state.landingH1}>jason</h1>
            <h1 style={this.state.landingH1}>rowland/</h1>
          </div>
          <div className="landing-right" style={this.state.landingRight}>
            <div style={this.state.icons}>
              <Nav nav={this.props.globalState.nav}  handleNavClick={this.props.handleNavClick} />
              <div className="landing-icons">
                <a href="https://github.com/jasonrowland86" target="blank"><FontAwesomeIcon className="icon" size="2x" icon={['fab', 'github']} /></a>
                <a href="https://www.linkedin.com/in/jason-rowland86/" target="blank"><FontAwesomeIcon className="icon" size="2x" icon={['fab', 'linkedin']} /></a>
              </div>
            </div>
          </div>
        </div>
        <div className="landing-bottom">
          <div className="landing-bottom-left">
            <h3 style={this.props.globalState.landingH3}>{this.props.globalState.label}</h3>
          </div>
          <div className="landing-bottom-right" style={this.props.globalState.arrow}>
            <FontAwesomeIcon className="icon" size="2x" icon={faArrowAltCircleRight} onClick={this.props.handleNextClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default Landing;
