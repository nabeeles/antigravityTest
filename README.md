# Nature Photography Gallery

A modern, minimalist nature photography gallery designed to showcase stunning landscapes and macro photography with a premium feel.

## 🌟 Features

- **Responsive Grid Layout**: Photos are beautifully organized in a grid that adapts to any screen size.
- **Interactive Lightbox**: Click any image to view it in full-resolution with a smooth transition.
- **Keyboard Navigation**: Navigate the lightbox using the `Left` and `Right` arrow keys, and close it with `Escape`.
- **Performance Optimized**: Uses lazy loading and optimized image fetches for a fast browsing experience.
- **Modern Aesthetics**: Sleek dark mode design with glassmorphism effects and smooth micro-animations.

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3 (Custom Variables, Flexbox, Grid), and JavaScript (ES6+).
- **Deployment**: Dockerized using `nginx:alpine` for efficient serving.

## 🚀 Getting Started

### Prerequisites

- A web browser (Chrome, Firefox, Safari, Edge).
- (Optional) [Docker](https://www.docker.com/) if you want to run it as a container.

### Running Locally

Simply open the `index.html` file in your preferred web browser.

### Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t photo-gallery .
   ```

2. Run the container:
   ```bash
   docker run -p 8080:80 photo-gallery
   ```
   Now visit `http://localhost:8080` in your browser.

## 📂 Project Structure

- `index.html`: Main structure of the application.
- `index.css`: Custom styling and design system.
- `script.js`: Dynamic gallery generation and lightbox logic.
- `images/`: Local nature assets.
- `Dockerfile`: Configuration for containerized deployment.

---

> [!NOTE]
> This project is connected to the GitHub account nabeeles@gmail.com.

&copy; 2026 Nature Photography Gallery. Built with ❤️ for visual excellence.
