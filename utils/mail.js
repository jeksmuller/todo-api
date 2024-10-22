import { createTransport } from "nodemailer";

const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'dotseydelanyo11@gmail.com',
        pass: ''
    },
    from: 'dotseydelanyo11@gmail.com'
});