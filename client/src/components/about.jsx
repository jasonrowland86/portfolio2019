import React from 'react';

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      aboutSection: {
        opacity: 0,
      }
    }
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        aboutSection: {
          opacity: 1,
        }
      })
    }, 150);
  }

  render() {
    return(
      <div style={this.state.aboutSection} className="about-section">
        <div className="about-image">
          <img className="profile-img" src="profile-pic.jpg" alt="Profile"/>
        </div>
        <div className="about-text">
          <p>
            Born and raised in Houston Texas. I moved to New York City in 2009
            where I was a bike messenger and kettlebell trainer before I found
            web development. I have a proclivity for efficiency and a love for
            design that create a natural passion for front-end development and
            user experience.
          </p>
        </div>
      </div>
    )
  }
}

export default About;
