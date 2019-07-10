let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jasonrowland86@gmail.com',
    pass: 'Ultimate8163'
  }
});

module.exports = {
  transporter: transporter
}
