const fs = require('fs');
const mkdirp = require('mkdirp');
const path = require('path');
const SVGSpriter = require('svg-sprite');
const { DOMParser } = require('xmldom');

const defs = new DOMParser().parseFromString('<defs></defs>');
let count = 0;

/**
 * Escape regex characters in given string
 * @param {string} str
 * @return {string}
 */
function regexEscape(str) {
  // eslint-disable-next-line no-useless-escape
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
}

/**
 * Updates urls in given SVG from array of [oldId, newId].
 * @param {string} svg
 * @param {Array} idsToReplace
 * @return {string}
 */
function updateUrls(svg, idsToReplace) {
  for (let i = 0; i < idsToReplace.length; i += 1) {
    const str = `url(#${idsToReplace[i][0]})`;
    svg = svg.replace(
      new RegExp(regexEscape(str), 'g'),
      `url(#${idsToReplace[i][1]})`
    );
  }

  return svg;
}

/**
 * Extracts specific gradient defined by tag from given shape.
 * @param {SVGShape} shape
 * @param {string} tag
 * @return {Array}
 */
function extractGradients(shape, tag) {
  const idsToReplace = [];

  const gradients = shape.dom.getElementsByTagName(tag);
  while (gradients.length > 0) {
    // Add gradient to defs block
    defs.documentElement.appendChild(gradients[0]);

    // Give gradient new ID
    const id = gradients[0].getAttribute('id');
    // eslint-disable-next-line no-plusplus
    const newId = `g${++count}`;
    gradients[0].setAttribute('id', newId);

    idsToReplace.push([id, newId]);
  }

  return idsToReplace;
}

/**
 * Extracts gradient from the sprite and replaces their ids to prevent duplicates.
 * @param {SVGShape} shape
 * @param {SVGSpriter} spriter
 * @param {Function} callback
 */
function gradientsExtraction(shape, spriter, callback) {
  const idsToReplace = [].concat(
    extractGradients(shape, 'linearGradient'),
    extractGradients(shape, 'radialGradient')
  );

  shape.setSVG(updateUrls(shape.getSVG(), idsToReplace));

  callback(null);
}

const writeSprite = ({ cwd, files, dest, outputFile }) => {
  const spriter = new SVGSpriter({
    dest,
    shape: {
      id: {
        generator(name) {
          const segments = name.split(path.sep);
          return segments[1].replace('.svg', '');
        },
      },
      dimension: { attributes: true },
      // https://github.com/svg-sprite/svg-sprite/issues/74
      transform: [gradientsExtraction],
    },
    svg: {
      dimensionAttributes: true,
      transform: [
        function modeDefs(svg) {
          return svg.replace(
            '<symbol ',
            `${defs.firstChild.toString()}<symbol `
          );
        },
      ],
    },
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
