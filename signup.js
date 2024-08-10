document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting the traditional way

        // Get form values
        const username = document.getElementById("username").value.trim();
        const number = document.getElementById("number").value.trim();
        const email = document.getElementById("email").value.trim();
        const gender = document.getElementById("gender").value;
        const password = document.getElementById("password").value.trim();

        // Simple validation
        if (username === "" || number === "" || email === "" || gender === "" || password === "") {
            alert("Please fill out all fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        // Log the data (in a real scenario, this would be sent to the server)
        console.log("Form Data:");
        console.log("Fullname:", username);
        console.log("Phone Number:", number);
        console.log("Email:", email);
        console.log("Gender:", gender);
        console.log("Password:", password);

        alert("Sign Up Successful!");

        // Redirect to the main page
        window.location.href = 'main.html'; // Change 'main.html' to the path of your main page

        // Reset the form
        form.reset();
    });

    function validateEmail(email) {
        // Basic email format validation
        const re = /^(([^<>()\[\]\.,;:\s@"]+(.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
