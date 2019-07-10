import React from 'react';

class Resume extends React.Component {
  constructor() {
    super();
    this.state = {
      resumeSection: {
        opacity: 0,
        transition: "all .3s ease-in"
      }
    }
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        resumeSection: {
          opacity: 1,
          transition: "all .3s ease-in"
        }
      })
    }, 150);
  }

  render() {
    return(
      <div style={this.state.resumeSection} className="resume">
        <embed src="jrowland-resume.pdf" width="100%" height="1000" type='application/pdf'/>
      </div>
    )
  }
}

export default Resume;
