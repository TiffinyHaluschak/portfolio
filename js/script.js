// Full screen transition
const links = document.querySelectorAll('.dropdown-menu a');
const overlay = document.querySelector('.transition-overlay');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = event.target.href;

        // Trigger overlay animation
        overlay.classList.add('active');

        // Navigate after animation completes
        setTimeout(() => {
            window.location.href = target;
        }, 500); // Match this to CSS transition duration
    });
});

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

// Dropdown menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

if (menuToggle && dropdownMenu) {
    menuToggle.addEventListener('click', function () {
        dropdownMenu.classList.toggle('active');
    });

    // Optional: Close dropdown when clicking outside
    document.addEventListener('click', function (event) {
        if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('active');
        }
    });
}

