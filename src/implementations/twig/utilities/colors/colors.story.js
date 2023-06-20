import generatePalette from './generatePalette';

const primary = generatePalette('#004494', 1.5, 'primary');
const secondary = generatePalette('#808080', 1.5, 'secondary');

let html = '';

function compareNumbers(a, b) {
  return a[0].replace(/^\D+/g, '') - b[0].replace(/^\D+/g, '');
}

html =
  '<div style="display:flex; flex-direction: row"><div style="flex-grow: 1" class="blues">';
html += '<h2>Primary</h2>';

Object.entries(primary)
  .sort(compareNumbers)
  .forEach(([name, color]) => {
    html += `<div style="color:#fff; text-align:center; font-family: Arial; text-transform: uppercase; padding: 1rem; background-color: ${color};">${name}</div>`;
  });

html += '</div><div class="secondary" style="flex-grow: 1">';
html += '<h2>Secondary</h2>';

Object.entries(secondary)
  .sort(compareNumbers)
  .forEach(([name, color]) => {
    html += `<div style="color:#fff; text-align:center; font-family: Arial; text-transform: uppercase; padding: 1rem; background-color: ${color};">${name}</div>`;
  });

html += '</div></div>';

export default {
  title: 'utilities/colors',
};

export const Colors = () => html;
Colors.storyName = 'custom palette';
