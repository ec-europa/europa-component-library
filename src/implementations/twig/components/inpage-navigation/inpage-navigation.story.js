import { withKnobs, button } from '@storybook/addon-knobs';
import { loremIpsum } from 'lorem-ipsum';
import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { tabLabels } from '@ecl/story-utils';
import iconPath from '@ecl/resources-ec-icons/dist/sprites/icons.svg';

import demoData from '@ecl/specs-component-inpage-navigation/demo/data';
import inpageNavigation from './inpage-navigation.html.twig';
import notes from './README.md';

const demoText = loremIpsum({ count: 25 });
const cssText =
  'height: 200px; margin: 0 0 1em; background: #ececec; display:flex; padding: 1em; align-items: center; justify-content: center;';
const btnLeftLabel = 'Inject a block in the left sidebar';
const btnMainLabel = 'Inject a generic block in the main column';
const btnIdLabel =
  'Inject a new <h2 id="..." in the main column (random order)';
const btnIdRemoveLabel =
  'Remove an <h2 id="..." from the main column (random order)';
// Handlers.
// Remove from content button.
const btnIdRemoveHandler = () => {
  const numH2s = document.querySelectorAll('.ecl-col-l-9 h2[id]').length;
  const position = Math.floor(Math.random() * Math.floor(numH2s));
  const randomH2 = document.querySelectorAll('.ecl-col-l-9 h2[id]')[position];
  randomH2.nextSibling.outerHTML = '';
  randomH2.outerHTML = '';
  // Prevent the story from being reloaded.
  return false;
};
// Add generic container in the left sidebar.
const btnLeftHandler = () => {
  const btnLeftElement = document.querySelector('.inPageDemoSidebar');
  const btnLeftTag = document.createElement('div');
  btnLeftTag.style.cssText = cssText;
  btnLeftTag.innerHTML =
    '<span>This is a block injected in the left sidebar</span>';
  btnLeftElement.append(btnLeftTag);
  // Prevent the story from being reloaded.
  return false;
};
// Add generic container in the main column.
const btnMainHandler = () => {
  const btnMainElement = document.querySelector('.inPageDemoContent');
  const btnMainTag = document.createElement('div');
  btnMainTag.style.cssText = cssText;
  btnMainTag.innerHTML =
    '<h2>This is an injected block in the Main column</h2>';
  btnMainElement.append(btnMainTag);
  // Prevent the story from being reloaded.
  return false;
};
// Add an h2 with a paragraph in the main column.
const btnIdHandler = () => {
  const numParagraphs = document.querySelectorAll('.ecl-col-l-9 p').length;
  const position = Math.floor(Math.random() * Math.floor(numParagraphs));
  const btnIdElement = document.querySelectorAll('.ecl-col-l-9 p')[position];
  const demoId = Math.random().toString(36).slice(7);
  const btnIdTag = document.createElement('h2');
  btnIdTag.classList.add('ecl-u-type-heading-2');
  btnIdTag.id = `new-${demoId}`;
  btnIdTag.innerHTML = `New heading ${demoId}`;
  const btnIdParagraph = document.createElement('p');
  btnIdParagraph.classList.add('ecl-u-type-paragraph-m');
  btnIdParagraph.innerHTML = demoText;
  btnIdElement.insertAdjacentHTML('afterend', btnIdParagraph.outerHTML);
  btnIdElement.insertAdjacentHTML('afterend', btnIdTag.outerHTML);
  // Prevent the story from being reloaded.
  return false;
};

export default {
  title: 'Components/Navigation/Inpage navigation',
};

export const Default = () => {
  // Buttons for the demo.
  button(btnLeftLabel, btnLeftHandler, tabLabels.cases);
  button(btnMainLabel, btnMainHandler, tabLabels.cases);
  button(btnIdLabel, btnIdHandler, tabLabels.cases);
  button(btnIdRemoveLabel, btnIdRemoveHandler, tabLabels.cases);

  let pageFillerHtml = '';
  demoData.links.forEach((content) => {
    pageFillerHtml += content.item;
  });

  const fullDemoData = { ...demoData, icon_path: iconPath };
  const html = inpageNavigation(fullDemoData);
  const demo = document.createDocumentFragment();
  const htmlElement = document.createElement('div');
  htmlElement.innerHTML = `<div class="ecl-container">
                            <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
                              <div class="ecl-col-l-3">
                                <div class="inPageDemoSidebar"></div>
                                ${html}
                              </div>
                              <div class="ecl-col-l-9">
                                <div class="inPageDemoContent"></div>
                                ${pageFillerHtml}
                              </div>
                            </div>
                          </div>`;
  demo.appendChild(htmlElement.firstChild);

  return demo;
};

Default.storName = 'default';
Default.parameters = { notes: { markdown: notes } };
Default.decorators = [withNotes, withKnobs, withCode];
