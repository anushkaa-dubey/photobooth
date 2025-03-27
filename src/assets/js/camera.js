const video = document.getElementById('cameraPreview');
const countdown = document.getElementById('countdown');
const capturedImages = [];
let captureCount = 0;

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.error('Error accessing camera:', err);
    });

// Function to capture an image from the video stream
function captureImage() {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Save the image data URL
    capturedImages.push(canvas.toDataURL('image/png'));
    captureCount++;

    // If 3 images are captured, process them
    if (captureCount === 3) {
        processImages();
    }
}

// Function to start the countdown and capture images
function startPhotoBooth() {
    let timer = 3; // Countdown timer
    countdown.textContent = timer;

    const interval = setInterval(() => {
        timer--;
        countdown.textContent = timer;

        if (timer === 0) {
            clearInterval(interval);
            captureImage();

            // If less than 3 images are captured, restart the countdown
            if (captureCount < 3) {
                startPhotoBooth();
            }
        }
    }, 1000);
}

// Function to combine the 3 images into a single image
function processImages() {
    const finalCanvas = document.createElement('canvas');
    const context = finalCanvas.getContext('2d');
    const imageWidth = video.videoWidth;
    const imageHeight = video.videoHeight;

    // Set the canvas size to fit all 3 images vertically
    finalCanvas.width = imageWidth;
    finalCanvas.height = imageHeight * 3;

    // Draw each captured image onto the canvas
    capturedImages.forEach((imageData, index) => {
        const img = new Image();
        img.src = imageData;

        img.onload = () => {
            context.drawImage(img, 0, index * imageHeight, imageWidth, imageHeight);

            // Once all images are drawn, navigate to the final page
            if (index === 2) {
                navigateToFinal(finalCanvas.toDataURL('image/png'));
            }
        };
    });
}

// Function to navigate to the final page with the combined image
function navigateToFinal(finalImageData) {
    // Save the final image data in localStorage (or pass it via query params)
    localStorage.setItem('finalImage', finalImageData);

    // Redirect to the final page
    window.location.href = "final.html";
}

// Start the photo booth when the capture button is clicked
document.getElementById('captureButton').addEventListener('click', startPhotoBooth);