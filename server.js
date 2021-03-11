const express = require("express");
const nodemailer = require("nodemailer");
const creds = require("./config");

const app = express();
const port = 5000;

let transport = {
  host: "smtp-mail.outlook.com",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
};

let transporter = nodemailer.createTransport(transport);
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("yaaaaaas kweeeeen");
  }
});

app.use(express.json());
app.post("/send", (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  let mail = {
    from: name,
    to: email,
    subject: "test",
    text: message,
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail",
      });
    } else {
      res.json({
        msg: "success",
      });
    }
  });
});
// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
