const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();

// Body parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (like my front-end HTML/CSS)
app.use(express.static('public')); // Assuming my front-end is in 'public'

// Contact form route
app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'tiffiny.haluschak@gmail.com',
            pass: 'GlurytoHope7!', 
        },
    });

    const mailOptions = {
        from: email, // Sender's email
        to: 'tiffiny.haluschak@gmail.com', 
        subject: `New Contact Form Submission from ${name}`,
        text: `You have a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ success: false, message: 'Failed to send email.' });
        } else {
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        }
    });
});

// Basic route to test the server
app.get('/', (req, res) => {
    res.send('Server is running!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
