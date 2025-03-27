// This file serves as the main JavaScript entry point. It initializes the application, handles navigation between pages, and manages global state.

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const photoCaptureButton = document.getElementById('photoCaptureButton');
    const processingButton = document.getElementById('processingButton');
    const finalButton = document.getElementById('finalButton');

    if (startButton) {
        startButton.addEventListener('click', () => {
            navigateToCapture();
        });
    }

    if (photoCaptureButton) {
        photoCaptureButton.addEventListener('click', () => {
            window.location.href = 'processing.html';
        });
    }

    if (processingButton) {
        processingButton.addEventListener('click', () => {
            window.location.href = 'final.html';
        });
    }

    if (finalButton) {
        finalButton.addEventListener('click', () => {
            // Logic to download the final image
        });
    }
});

function navigateToCapture() {
    window.location.href = './photoCapture.html';
}