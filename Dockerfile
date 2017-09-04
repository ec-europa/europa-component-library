FROM node:8

# Create app directory
WORKDIR /usr/src/ecl

# ENV
ENV SHELL /bin/sh

# Install app dependencies
COPY package.json yarn.lock /usr/src/ecl/

# Install dependencies
RUN yarn install --pure-lockfile

# Copy project
COPY . /usr/src/ecl/

# Bootstrap Lerna
RUN yarn bootstrap
