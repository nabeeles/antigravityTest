FROM nginx:alpine

# Copy the static web files to the nginx default public directory
# The files are: index.html, index.css, script.js, and the images folder
COPY . /usr/share/nginx/html/

# Expose port 80 based on the requirement
EXPOSE 80

# Cloud Run expects the process to listen on $PORT, but we'll use a simple
# nginx configuration. Nginx defaults to 80.
# We'll rely on the user's PORT 80 assumption.
CMD ["nginx", "-g", "daemon off;"]
