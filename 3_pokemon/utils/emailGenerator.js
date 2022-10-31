import NodeMailer from "nodemailer";

const user = {
  mail: "studie.konto.420@gmail.com",
  password: "wibecilyptpfjlga",
};

const message ={
    subject:"Hello",
    text:"Hello world"
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
export async function sendMail(reciever) {
    return await transporter.sendMail({
    from: `"Study Foo 👻" <${user.mail}>`, // sender address
    to: `${reciever.mail}`, // list of receivers
    subject: message.subject, // Subject line
    text: message.text, // plain text body
    html: `<b>${message.text}</b>`, // html body
  });
}