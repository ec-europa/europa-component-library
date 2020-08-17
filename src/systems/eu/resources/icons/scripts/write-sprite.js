const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const SVGSpriter = require('svg-sprite');

const writeSprite = ({ cwd, files, dest, outputFile }) => {
  const spriter = new SVGSpriter({
    dest,
    shape: {
      id: {
        generator(name) {
          const segments = name.split(path.sep);
          const id = segments
            .map((segment) => {
              let s = segment;
              if (segment.startsWith('_')) {
                console.log(
                  '⚠️ Deprecated icon:',
                  segment,
                  'This icon will be removed in ECL v3.'
                );

                // Remove underscore
                s = segment.replace('_', '');
              }

              return s.replace('.svg', ''); // Remove extension
            })
            .join('--');

          return id;
        },
      },
      dimension: { attributes: true },
      transform: [], // no transform, SVGs have already been optimized
    },
    svg: { dimensionAttributes: true },
    mode: {
      symbol: {
        dest: '',
        sprite: outputFile,
      },
    },
  });

  files.forEach((file) => {
    const filePath = path.resolve(cwd, file);
    spriter.add(
      filePath,
      file,
      fs.readFileSync(filePath, { encoding: 'utf-8' })
    );
  });

  spriter.compile((error, result) => {
    Object.keys(result).forEach((mode) => {
      Object.keys(result[mode]).forEach((resource) => {
        mkdirp.sync(path.dirname(result[mode][resource].path));
        fs.writeFileSync(
          result[mode][resource].path,
          result[mode][resource].contents
        );
      });
    });
  });
};

module.exports = writeSprite;
