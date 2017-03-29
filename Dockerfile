FROM kkarczmarczyk/node-yarn

CMD [ "npm", "install" "-g node-gyp"]

# Install app dependencies
WORKDIR /usr/src/app
RUN yarn
RUN yarn bootstrap

# EXPOSE 3000
# CMD [ "npm", "start" ]
