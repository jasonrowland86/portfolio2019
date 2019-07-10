import React from 'react';
import projects from '../projects.js';

class Project extends React.Component {
  constructor() {
    super();
    this.state = {
      projectSection: {
        opacity: 0,
        transition: 'all .3s ease-in',
      }
    }
  }

  componentDidMount() {
    this.fadeIn();
  }

  fadeIn() {
    setTimeout(() => {
      this.setState({
        projectSection: {
          opacity: 1,
          transition: 'all .3s ease-in',
        }
      })
    }, 300);
  }

  render() {
    let project = projects.filter(project => project.data.name === this.props.project);
    console.log(project[0]);
    let projectImages = project[0].data.images.map((image) => (
      <img className="project-img" src={image}></img>
    ));
    return(
      <div className="project-section" style={this.state.projectSection}>
        <div className="project">
          <div className="project-description">
            <div className="project-description"><p>{project[0].data.description}</p></div>
            <div className="project-links">
              <a href={project[0].data.appLink} target="blank">View App</a>
              <a href={project[0].data.githubLink} target="blank">View on GitHub</a>
            </div>
            <div className="project-skills"><h2>{project[0].data.technologies}</h2></div>
          </div>
          <div className="project-image project-images">
            {projectImages}
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
