const video = document.getElementById('cameraPreview');
const countdown = document.getElementById('countdown');
const captureButton = document.getElementById('captureButton');

navigator.mediaDevices.getUserMedia({ video: true })
    .then(stream => {
        video.srcObject = stream;
        video.play();
    })
    .catch(err => {
        console.error('Error accessing camera:', err);
    });

captureButton.addEventListener('click', () => {
    let timer = 5;
    const interval = setInterval(() => {
        countdown.textContent = timer;
        if (timer === 0) {
            clearInterval(interval);
            captureImage();
        }
        timer--;
    }, 1000);
});

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