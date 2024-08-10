document.addEventListener('DOMContentLoaded', () => {
    const startRecordingButton = document.getElementById('startRecording');
    const stopRecordingButton = document.getElementById('stopRecording');
    const audioPlayback = document.getElementById('audioPlayback');
    const voiceMessageInput = document.getElementById('voiceMessage');
    const form = document.getElementById('registrationForm');
    
    let mediaRecorder;
    let audioChunks = [];

    // Check if the browser supports audio recording
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        alert('Your browser does not support audio recording.');
        return;
    }

    // Start recording audio
    startRecordingButton.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                const audioUrl = URL.createObjectURL(audioBlob);
                audioPlayback.src = audioUrl;

                // Save audioBlob to hidden input (can be used for form submission)
                voiceMessageInput.value = audioUrl;  // For submission purposes, you may want to convert this to a base64 string
                audioChunks = [];
            };

            mediaRecorder.start();
            startRecordingButton.disabled = true;
            stopRecordingButton.disabled = false;
        } catch (error) {
            console.error('Error accessing audio devices.', error);
        }
    });

    // Stop recording audio
    stopRecordingButton.addEventListener('click', () => {
        if (mediaRecorder) {
            mediaRecorder.stop();
            startRecordingButton.disabled = false;
            stopRecordingButton.disabled = true;
        }
    });

    // Optional: Handle form submission if needed
    form.addEventListener('submit', (event) => {
        // Perform additional checks or operations before form submission
        console.log('Form submitted');
    });
});
