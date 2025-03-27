# Web App Project

## Overview
This web application project is designed to provide users with a seamless experience for capturing images, applying filters, and merging them with a selected background. The application utilizes modern web technologies to ensure a responsive and interactive user interface.

## Features
- **Home Page**: A welcoming interface with a "Start" button to initiate the photo capture process.
- **Photo Capture Page**: 
  - Live camera preview.
  - Countdown timer for automatic image capture.
  - Options to select and apply various filters to the captured images.
- **Processing Page**: 
  - Display of captured images.
  - Background color selection for merging images.
- **Final Page**: 
  - Merged image display with the selected background.
  - "Download" button for saving the final image.

## Tech Stack
- **HTML**: For structuring the web pages.
- **CSS**: For styling the user interface, including layout, colors, and responsive design.
- **JavaScript**: 
  - Camera access and management using `navigator.mediaDevices.getUserMedia()`.
  - Countdown timer implementation.
  - Filter application functionality.
  - Image processing and merging using the Canvas API.

## File Structure
```
web-app-project
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   └── js
│   │       ├── app.js
│   │       ├── camera.js
│   │       ├── filters.js
│   │       └── imageProcessing.js
│   ├── pages
│   │   ├── home.html
│   │   ├── photoCapture.html
│   │   ├── processing.html
│   │   └── final.html
│   └── templates
│       └── header.html
├── README.md
└── project-plan.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Open the `index.html` file in your web browser to view the application.
3. Ensure that your browser supports camera access and has the necessary permissions enabled.

## Usage Guidelines
- Click the "Start" button on the Home Page to navigate to the Photo Capture Page.
- Follow the on-screen instructions to capture images and apply filters.
- Proceed to the Processing Page to select a background color.
- Finally, view the merged image on the Final Page and use the "Download" button to save your creation.

## Contribution
Contributions to enhance the functionality and user experience of the application are welcome. Please submit a pull request or open an issue for discussion.