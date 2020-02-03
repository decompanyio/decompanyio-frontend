FROM node:10

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json ./
RUN npm install

# Set Arguments from buildspec.yml
ARG NODE_ENV
ARG NODE_ENV_SUB

# Copying source files
COPY . .

# Building app
RUN if [ "$NODE_ENV_SUB" = "production" ] ; then npm run build:production ; else npm run build ; fi

# Running the app
CMD [ "npm", "start" ]