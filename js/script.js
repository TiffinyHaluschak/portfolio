// Form validation
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        let isValid = true;

        // Validate name
        if (name === '') {
            alert('Please enter your name.');
            isValid = false;
        }

        // Validate email
        if (email === '') {
            alert('Please enter your email.');
            isValid = false;
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        // Validate message
        if (message === '') {
            alert('Please enter your message.');
            isValid = false;
        }

        // Prevent form submission if invalid
        if (!isValid) {
            e.preventDefault();
        }
    });
}

// Email validation function
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}


// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
}
