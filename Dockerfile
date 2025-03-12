# Starting from base image
FROM node:22-alpine3.21

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY ./package* ./

# Install dependencies
RUN npm install

# Copy extra files
COPY . .

ENTRYPOINT [ "npm", "run", "start:v1" ]

