import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const { CONTACT_EMAIL, CONTACT_EMAIL_PASSWORD, CONTACT_EMAIL_RECIEVER } =
  process.env;

const mailer = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
    user: CONTACT_EMAIL,
    pass: CONTACT_EMAIL_PASSWORD,
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const { name, email, desc } = req.body;
      await mailer.sendMail({
        from: `Portfolio contact <${CONTACT_EMAIL}>`,
        to: CONTACT_EMAIL_RECIEVER,
        subject: "Someone has sent an email from your portfolio",
        text: `Someone has sent an email from the portfolio web!
        His/her name is ${name} and want to tell you the following: 
         
        ${desc}
        
        You can answer to the following email: ${email}`,
      });
      res.status(200).json({ message: "ok" });
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }
};
