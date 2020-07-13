const sgMail = require('@sendgrid/mail')

//const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const msg = {
//   to: 'fasterfury1@gmail.com',
//   from: 'fasterfury1@gmail.com',
//   subject: 'Sending the first email',
//   text: 'Easy to send, hopefully you\'ll receive it ',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// };
// sgMail.send(msg);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fasterfury1@gmail.com',
        subject: 'Thanks for joining!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    });
}


const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'fasterfury1@gmail.com',
        subject: 'Are you sure?',
        text: `Goodbye, ${name}. Can you tell us why?`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}