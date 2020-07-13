const theo = require('theo');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const buildTokens = ({ input, output, type, format }) => {
  mkdirp.sync(path.dirname(output));

  theo
    .convert({
      transform: { type, file: input },
      format: { type: format },
    })
    .then((result) => {
      fs.writeFile(
        output,
        result,
        (error) => error && console.log('Error writing file:', error)
      );
    })
    .catch((error) => error && console.log('Error converting tokens:', error));
};

module.exports = buildTokens;
