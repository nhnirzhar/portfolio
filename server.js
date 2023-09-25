const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Replace with your email configuration
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "your_email@gmail.com",
    pass: "your_email_password",
  },
});

app.post("/contact", async (req, res) => {
  try {
    const { firstName, lastName, email, phone, message } = req.body;

    // Create email content
    const mailOptions = {
      from: "your_email@gmail.com",
      to: "nazmulhadi56@gmail.com", // Your email address
      subject: "New Contact Form Submission",
      text: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Phone: ${phone}
        
        Message:
        ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Something went wrong, please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
