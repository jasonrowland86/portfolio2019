import React from 'react';
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3';

class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      contactSection: {
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
        contactSection: {
          opacity: 1,
          transition: "all .3s ease-in"
        }
      })
    }, 150);
  }

  render() {
    return(
      <div style={this.state.contactSection} className="contact-section">
        <form action="/" method="post">
          <div className="form-section">
            <div className="form-left">
              <h1>first name</h1>
            </div>
            <div className="form-right">
              <input className="input" type="text" name="firstName" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-left">
              <h1>last name</h1>
            </div>
            <div className="form-right">
              <input className="input" type="text" name="lastName" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-left">
              <h1>email</h1>
            </div>
            <div className="form-right">
              <input className="input" type="text" name="email" />
            </div>
          </div>
          <div className="form-section">
            <div className="form-left message">
              <h1>message</h1>
            </div>
            <div className="form-right">
              <textarea name="message" ows="8" cols="80"></textarea>
            </div>
          </div>
          <div className="form-section">
            <div className="form-left message">
              <h1></h1>
            </div>
            <div className="form-right">
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default Contact;
