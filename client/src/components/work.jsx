import React from 'react';
import projects from '../projects.js';

class Work extends React.Component {
  constructor() {
    super();
    this.state = {
      workSection: {
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
        workSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
        }
      })
    }, 150);
  }

  render() {
    return(
      <div style={this.state.workSection} className="work-section">
        {projects.map((project) =>(
          <div className="project-preview">
            <div className="project-preview-description">
              <div className="project-title"><h1>{project.data.name}</h1></div>
              <div className="project-description"><p>{project.data.description}</p></div>
              <div className="project-skills"><h2>{project.data.technologies}</h2></div>
              <div className="project-link" id="#FFE69E" label={project.data.name} onClick={this.props.handleProjectView}>View</div>
            </div>
            <div className="project-preview-image">
              <img src={project.data.images[0]} id="#FFE69E" label={project.data.name} onClick={this.props.handleProjectView}></img>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Work;
