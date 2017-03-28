FROM node:boron

RUN apt-key adv --keyserver pgp.mit.edu --recv 9D41F3C3 && \
    echo "deb http://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && \
    apt-get install yarn

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json yarn.lock lerna.json /usr/src/app/
RUN yarn
RUN yarn bootstrap

# Bundle app source
COPY . /usr/src/app

EXPOSE 8080
CMD [ "yarn", "start" ]
