# Use official Node image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files first to install dependencies
COPY package.json package-lock.json* ./

# Install dependencies with legacy peer deps
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build the app (if you're using Next.js, Vite, etc.)
RUN npm run build

# Expose the port (change according to your app)
EXPOSE 3000

# Start the app
CMD ["npm", "start"]