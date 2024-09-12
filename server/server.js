// Import required modules
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// Create an instance of the Express app, which will be used to set up routes, middleware, and server behavior
const app = express();

// Set up body parser middleware to handle form data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (like my front-end HTML/CSS)
// This line tells the Express app to serve static files 
// (such as HTML, CSS, and client-side JavaScript) from 
// the public directory.
app.use(express.static('public')); // Assumes my front-end files are stored in 'public'

// Contact form route
app.post('/send', (req, res) => {
    console.log(req.body); // Log the entire request body
    const { name, email, message } = req.body;
    console.log(`Form data received: Name - ${name}, Email - ${email}, Message - ${message}`);

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS, 
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
