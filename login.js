document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const forgotPasswordLink = document.querySelector(".forgot-password");

    // Handle form submission
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        // Basic validation
        if (!username || !email || !password) {
            alert('Please fill out all fields.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Example of handling form submission with fetch (you can replace URL with your backend endpoint)
        fetch('login.html', { // Replace with your actual login URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Login successful!');
                // Redirect to another page on successful login
                window.location.href = 'main.html'; // Replace with your actual redirect URL
            } else {
                alert('Login failed: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while processing your request.');
        });
    });

    // Handle forgot password link
    forgotPasswordLink.addEventListener('click', (event) => {
        event.preventDefault();
        window.location.href = 'forgetpass.html'; // Redirect to forgot password page
    });

    function validateEmail(email) {
        // Basic email format validation
        const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
