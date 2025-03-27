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