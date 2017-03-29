FROM kkarczmarczyk/node-yarn

CMD [ "npm", "install" "-g node-gyp"]

WORKDIR /usr/src/app
