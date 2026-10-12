# Use a lightweight Nginx web server image
FROM nginx:alpine

# Copy your local web files into the Nginx public directory
COPY . /usr/share/nginx/html

# Expose port 80 to access the app in your browser
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]