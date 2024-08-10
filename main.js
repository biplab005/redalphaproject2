document.addEventListener('DOMContentLoaded', function() {
    // Get the button element by its ID
    const detailsButton = document.getElementById('detailsButton');

    // Check if the button exists to avoid errors
    if (detailsButton) {
        // Add a click event listener to the button
        detailsButton.addEventListener('click', function(event) {
            // Perform any action on button click, for now, we'll just log a message
            console.log('Fill Your Details button clicked');

            // Optionally, you could add additional functionality here, such as form validation or data tracking
        });
    }
});
