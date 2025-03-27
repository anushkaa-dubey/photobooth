const video = document.getElementById('video');
const captureButton = document.getElementById('capture-button');
const countdownDisplay = document.getElementById('countdown');
let countdownTimer;
let countdownValue = 3; // Countdown starts from 3 seconds

// Function to start the camera
async function startCamera() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.play();
    } catch (error) {
        console.error("Error accessing the camera: ", error);
    }
}

// Function to start the countdown timer
function startCountdown() {
    countdownValue = 3; // Reset countdown value
    countdownDisplay.textContent = countdownValue;

    countdownTimer = setInterval(() => {
        countdownValue--;
        countdownDisplay.textContent = countdownValue;

        if (countdownValue < 0) {
            clearInterval(countdownTimer);
            captureImage();
        }
    }, 1000);
}

// Function to capture the image
function captureImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    
    // Here you can add code to apply filters or process the image further
    // For now, we will just log the image data URL
    const imageDataUrl = canvas.toDataURL('image/png');
    console.log("Captured Image Data URL: ", imageDataUrl);
}

// Event listener for the capture button
captureButton.addEventListener('click', () => {
    startCountdown();
});

// Start the camera when the script loads
startCamera();