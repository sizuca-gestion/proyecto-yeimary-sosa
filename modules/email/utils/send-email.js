import { createTransport } from "nodemailer";

export function createTransporter() {
  const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASS,
    },
  });

  const options = {
    from: process.env.SMTP_EMAIL,
  };

  return {
    transporter,
    options,
  };
}
