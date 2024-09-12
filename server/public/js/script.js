document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let formMessage = document.getElementById('formMessage');

    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "All fields are required.";
        formMessage.style.color = "red";
    } else if (!validateEmail(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        formMessage.style.color = "red";
    } else {
        formMessage.textContent = "Thank you for your message!";
        formMessage.style.color = "green";

        // Optionally, send form data to a server or use an email service API
        // For this example, we'll just reset the form
        //document.getElementById('contactForm').reset();
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
