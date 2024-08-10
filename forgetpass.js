document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();
        
        // Basic validation
        if (!email) {
            alert('Please enter your email address.');
            return;
        }
        
        // Example of handling form submission with fetch (you can replace URL with your backend endpoint)
        fetch('https://example.com/forgot-password', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('If the email address is associated with an account, you will receive a password reset link shortly.');
                emailInput.value = ''; // Clear the input
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred while processing your request.');
        });
    });
});
