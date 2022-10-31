import NodeMailer from 'nodemailer'

let testAccount = await NodeMailer.createTestAccount();

const user = {
    mail: "studie.konto.420@gmail.com",
    password: "wibecilyptpfjlga"
}

const reciever ={
    mail:"mohamedibr@gmail.com"
}

let transporter = NodeMailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: user.mail, // generated ethereal user
      pass: user.password, // generated ethereal password
    },
  });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Study Foo 👻" <${user.mail}>`, // sender address
        to: `${reciever.mail}`, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });

      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", NodeMailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...