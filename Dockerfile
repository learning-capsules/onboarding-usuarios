# Use an official Node.js runtime as the base image
FROM node:16-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application's dependencies inside the container
RUN npm install

RUN npm install nodemon --save

# If you want to install global packages, you can use:
# RUN npm install -g <package-name>

# Copy the entire local current directory to the container
COPY . .

# Set environment variables if needed
# For example, if you want to set NODE_ENV to production:
# ENV NODE_ENV=production

# Expose port (the port your app uses, change if needed)
EXPOSE 3000

# Specify the command to run on container start
CMD [ "npm", "start" ]
