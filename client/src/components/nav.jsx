import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return(
      <div className="nav" style={this.props.nav}>
        <div className="work-tab" id="#FFCAB8" label="work" onClick={this.props.handleNavClick}></div>
        <div className="about-tab" id="#9EACFF" label="about" onClick={this.props.handleNavClick}></div>
        <div className="contact-tab" id="#92E39E" label="contact" onClick={this.props.handleNavClick}></div>
      </div>
    )
  }
}

export default Nav;
