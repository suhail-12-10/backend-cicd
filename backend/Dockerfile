


# Use small Node.js image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy rest of the source code
COPY . .

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]

