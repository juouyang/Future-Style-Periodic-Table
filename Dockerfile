# Use Nginx as the base image to serve static content
FROM nginx:alpine

# Copy project files to Nginx default serving directory
COPY . /usr/share/nginx/html/

# Copy custom Nginx configuration if needed (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
