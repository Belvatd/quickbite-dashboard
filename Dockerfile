# Stage 1: Build the React application
FROM node:20-slim AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install ALL dependencies (explicitly including devDependencies for Vite)
RUN npm install --include=dev

# Copy the rest of the application code
COPY . .

# Set memory limit to prevent OOM errors during Vite/Rollup build
ENV NODE_OPTIONS="--max_old_space_size=4096"

# Build the Vite application for production
RUN npm run build

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx serve directory
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Add custom nginx configuration if routing is needed (Vite SPA)
# RUN rm /etc/nginx/conf.d/default.conf
# COPY nginx.conf /etc/nginx/conf.d/

# Expose port 80 for the server
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
