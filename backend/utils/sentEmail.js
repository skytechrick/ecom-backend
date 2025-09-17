
import nodemailer from 'nodemailer';
import { config } from 'dotenv';
config({
    quiet: true,
    path: 'backend/config/config.env'
})

const options = {
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: parseInt(process.env.EMAIL_PORT) === 465,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
}

const mailTransporter = nodemailer.createTransport(options);

mailTransporter.verify((error, success) => {
    if (error) {
        console.error("Email server connection failed:", error);
    } else {
        console.log("Email server connected successfully!");
    }
});


export const sendEmail = async (a) => {
    try {
        const { email, subject, message } = a;

        return await mailTransporter.sendMail({
            from: `AR <${process.env.EMAIL_USER}>`,
            to: email,
            subject,
            text: message,
        });

    } catch (error) {
        return null;
    }
}


