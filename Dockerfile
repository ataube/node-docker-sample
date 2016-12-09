FROM mhart/alpine-node:7.2

# Create app directory
RUN mkdir -p /app
WORKDIR /app

# Install app dependencies
COPY package.json /app
RUN npm install

# Bundle app source
COPY . /app

RUN npm test && npm prune --production && rm -rf test

EXPOSE 3000
CMD [ "npm", "start" ]
