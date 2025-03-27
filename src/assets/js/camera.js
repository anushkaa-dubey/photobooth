const video = document.getElementById('cameraPreview');
const countdown = document.getElementById('countdown');
const backgroundColorPicker = document.getElementById('backgroundColor');
const downloadButton = document.getElementById('downloadButton');
const finalCanvas = document.getElementById('finalCanvas');
const context = finalCanvas.getContext('2d');

let capturedImages = [];
let captureCount = 0;

// Access the user's camera
navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
    })
    .catch(err => {
        console.error('Error accessing camera:', err);
        alert('Unable to access the camera. Please check your permissions.');
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

    // If 3 images are captured, stop the process
    if (captureCount === 3) {
        processImages();
    }
}

// Function to start the countdown and capture 3 images
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

// Function to combine the 3 images into a single photo booth strip
function processImages() {
    const imageWidth = video.videoWidth;
    const imageHeight = video.videoHeight;

    // Set the canvas size to fit all 3 images vertically
    finalCanvas.width = imageWidth;
    finalCanvas.height = imageHeight * 3;

    // Get the selected background color
    const backgroundColor = backgroundColorPicker.value;

    // Fill the canvas with the background color
    context.fillStyle = backgroundColor;
    context.fillRect(0, 0, finalCanvas.width, finalCanvas.height);

    // Draw each captured image onto the canvas
    capturedImages.forEach((imageData, index) => {
        const img = new Image();
        img.src = imageData;

        img.onload = () => {
            context.drawImage(img, 0, index * imageHeight, imageWidth, imageHeight);
        };
    });

    // Show the download button after processing
    downloadButton.style.display = 'block';
}

// Function to download the final photo booth image
downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'photo-booth-image.png';
    link.href = finalCanvas.toDataURL('image/png');
    link.click();
});

// Start the photo booth when the capture button is clicked
document.getElementById('captureButton').addEventListener('click', startPhotoBooth);