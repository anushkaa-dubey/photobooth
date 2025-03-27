function mergeImagesWithBackground(capturedImage, backgroundColor) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to match the captured image
    canvas.width = capturedImage.width;
    canvas.height = capturedImage.height;

    // Fill the canvas with the selected background color
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the captured image on top of the background
    ctx.drawImage(capturedImage, 0, 0);

    return canvas.toDataURL(); // Return the merged image as a data URL
}

function downloadImage(dataUrl, filename) {
    const link = document.createElement('a');
    link.href = dataUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

const mergeButton = document.getElementById('mergeButton');
const finalCanvas = document.getElementById('finalCanvas');
const downloadButton = document.getElementById('downloadButton');

mergeButton.addEventListener('click', () => {
    // Logic to merge images with background color
});

downloadButton.addEventListener('click', () => {
    const link = document.createElement('a');
    link.download = 'final-image.png';
    link.href = finalCanvas.toDataURL();
    link.click();
});