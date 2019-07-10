import React, { Component } from 'react';
import './reset.css';
import './App.css';
import Landing from './components/landing';
import Content from './components/content';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

class App extends Component {
  constructor() {
    super();
    this.state = {
      landing: true,
      content: {
        backgroundColor: "#FFCAB8",
      },
      label: 'web developer',
      arrow: {
        display: 'none'
      }
    }
    this.handleLanding = this.handleLanding.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);
    this.handleProjectView = this.handleProjectView.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  handleLanding() {
    if (this.state.landing) {
      this.setState({
        landing: false,
        landingH3: {
          fontSize: '5vw',
          marginBottom: '.3em'
        },
      });
      setTimeout(() => {
        this.setState({
          label: "work",
          nav: {
            height: '3vh',
            display: 'flex',
            flexDirection: 'row',
            opacity: '1'
          },
          landingH3: {
            color: "#FFCAB8",
            fontSize: '5vw',
            marginBottom: '.3em'
          },
          content: {
            backgroundColor: "#FFCAB8",
            height: "auto"
          }
        })
      }, 1100);
    }
  }

  handleNavClick(e) {
   e.preventDefault();
   this.setState({
     content: {
       backgroundColor: e.target.id,
       height: "auto"
     },
     label: e.target.attributes.label.value,
     landingH3: {
       color: e.target.id,
       fontSize: '5vw',
       marginBottom: '.3em'
     },
     arrow: {
       display: 'none'
     }
   })
  }

  handleProjectView(e) {
    e.preventDefault();
    let event = e.target
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    setTimeout(() => {
      console.log(e.target);
      this.setState({
        content: {
          backgroundColor: event.id,
          height: "auto"
        },
        label: event.attributes.label.value,
        landingH3: {
          color: event.id,
          fontSize: '5vw',
          marginBottom: '.3em'
        },
        arrow: {
          display: 'flex'
        }
      })
    }, 800)
  }

  handleNextClick(e) {
    console.log('arrow clicked');
    e.preventDefault();
    this.setState({
      
    })
  }

  render() {
    return (
      <GoogleReCaptchaProvider reCaptchaKey="[Your recaptcha key]">
      <div className="App">
        <Landing globalState={this.state} handleLanding={this.handleLanding} handleNavClick={this.handleNavClick} handleNextClick={this.handleNextClick}/>
        <Content globalState={this.state} landing={this.state.landing} contentBackground={this.state.contentBackground} handleProjectView={this.handleProjectView}/>
      </div>
      </GoogleReCaptchaProvider>
    );
  }
}

export default App;
