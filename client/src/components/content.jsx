import React from 'react';
import Work from './work';
import About from './about';
import Contact from './contact';
import Project from './project';

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  handleContent() {
    if (this.props.globalState.label === "work") {
      return <Work handleProjectView={this.props.handleProjectView}/>
    } else if (this.props.globalState.label === "about") {
      return <About />
    } else if (this.props.globalState.label === "contact") {
      return <Contact />
    } else if (this.props.globalState.label !== "contact" && this.props.globalState.label !== "about" && this.props.globalState.label !== "work" && this.props.globalState.label !== "web developer") {
      console.log('project!');
      return <Project project={this.props.globalState.label}/>
    }
  }

  render() {
    if(this.props.globalState.landing) {
      return(
        <div></div>
      )
    } else {
      return(
        <div className="content" style={this.props.globalState.content}>
          {this.handleContent()}
        </div>
      )
    }
  }
}

export default Content;
