let audioStream;

// Function to start audio recognition
async function startRecognition() {
    try {
        const constraints = { audio: true };
        audioStream = await navigator.mediaDevices.getUserMedia(constraints);
        console.log('Audio stream started:', audioStream);
        // You can process audio from audioStream to recognize music here
    } catch (error) {
        console.error('Error starting audio stream:', error);
    }
}

// Function to stop audio recognition
function stopRecognition() {
    if (audioStream) {
        audioStream.getTracks().forEach(track => track.stop());
        console.log('Audio stream stopped');
    }
}

// Event listener for the start button
document.getElementById('startBtn').addEventListener('click', () => {
    startRecognition();
});
