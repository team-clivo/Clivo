import formData from "form-data";
import Mailgun from "mailgun.js";
import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html }) {
  if (process.env.MAIL_SERVICE === "mailgun") {
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: "api",
      key: process.env.MAILGUN_API_KEY,
    });

    return mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: `Clivo <no-reply@${process.env.MAILGUN_DOMAIN}>`,
      to,
      subject,
      text,
      html,
    });
  }

  // fallback: Nodemailer (modo inicial)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  return transporter.sendMail({
    from: `"Clivo" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  });
}
