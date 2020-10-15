import React from 'react';
import { withKnobs, text, button } from '@storybook/addon-knobs';
import StoryWrapper from '@ecl/story-wrapper';
import { loremIpsum } from 'lorem-ipsum';
import demoContent from '@ecl/ec-specs-inpage-navigation/demo/data';
import { InpageNavigation } from '../src/InpageNavigation';

const btnIdRemoveHandler = () => {
  const numH2s = document.querySelectorAll('.ecl-col-lg-9 h2[id]').length;
  const position = Math.floor(Math.random() * Math.floor(numH2s));
  const randomH2 = document.querySelectorAll('.ecl-col-lg-9 h2[id]')[position];
  randomH2.nextSibling.outerHTML = '';
  randomH2.outerHTML = '';
};

export default {
  title: 'Components/Navigation/In page navigation',

  decorators: [
    withKnobs,
    (story) => (
      <StoryWrapper
        afterMount={() => {
          if (!window.ECL) return {};

          const autoinit = window.ECL.autoInit();
          return { components: autoinit.components };
        }}
        beforeUnmount={(context) => {
          if (context.components) {
            context.components.forEach((c) => c.destroy());
          }
        }}
      >
        {story()}
      </StoryWrapper>
    ),
  ],
};

export const Default = () => {
  const demoText = loremIpsum({ count: 25 });
  const cssText =
    'height: 200px; margin: 0 0 1em; background: #ececec; display:flex; padding: 1em; align-items: center; justify-content: center;';
  const btnLeftLabel = 'Inject a block in the left sidebar';
  const btnMainLabel = 'Inject a generic block in the main column';
  const groupId = 'buttons';
  const btnIdLabel =
    'Inject a new <h2 id="..." in the main column (random order)';
  const btnIdRemoveLabel =
    'Remove an <h2 id="..." from the main column (random order)';

  // Buttons for the demo.
  const btnLeftHandler = () => {
    const btnLeftElement = document.querySelector('.inPageDemoSidebar');
    const btnLeftTag = document.createElement('div');
    btnLeftTag.style.cssText = cssText;
    btnLeftTag.innerHTML =
      '<span>This is a block injected in the left sidebar</span>';
    btnLeftElement.append(btnLeftTag);
  };

  const btnMainHandler = () => {
    const btnMainElement = document.querySelector('.inPageDemoContent');
    const btnMainTag = document.createElement('div');
    btnMainTag.style.cssText = cssText;
    btnMainTag.innerHTML =
      '<h2>This is an injected block in the Main column</h2>';
    btnMainElement.append(btnMainTag);
  };

  const btnIdHandler = () => {
    const numParagraphs = document.querySelectorAll('.ecl-col-lg-9 p').length;
    const position = Math.floor(Math.random() * Math.floor(numParagraphs));
    const btnIdElement = document.querySelectorAll('.ecl-col-lg-9 p')[position];
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
  };

  button(btnLeftLabel, btnLeftHandler, groupId);
  button(btnMainLabel, btnMainHandler, groupId);
  button(btnIdLabel, btnIdHandler, groupId);
  button(btnIdRemoveLabel, btnIdRemoveHandler, groupId);

  const inpageProps = {
    links: [
      {
        href: demoContent.links[0].href,
        label: text('First element label', demoContent.links[0].label),
      },
      {
        href: demoContent.links[1].href,
        label: text('Second element label', demoContent.links[1].label),
      },
      {
        href: demoContent.links[2].href,
        label: text('Third element label', demoContent.links[2].label),
      },
      {
        href: demoContent.links[3].href,
        label: text('Fourth element label', demoContent.links[3].label),
      },
    ],
  };

  return (
    <div className="ecl-container">
      <div className="ecl-row ecl-u-mt-l">
        <div className="ecl-col-lg-3">
          <div className="inPageDemoSidebar" />
          <InpageNavigation
            {...inpageProps}
            data-ecl-auto-init="InpageNavigation"
          />
        </div>

        <div className="ecl-col-lg-9">
          <div className="inPageDemoContent" />
          <h2 className="ecl-u-type-heading-2" id="inline-nav-1">
            {inpageProps.links[0].label}
          </h2>
          <p className="ecl-u-type-paragraph-m">{demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-2">
            {inpageProps.links[1].label}
          </h2>
          <p className="ecl-u-type-paragraph-m">{demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-3">
            {inpageProps.links[2].label}
          </h2>
          <p className="ecl-u-type-paragraph-m">{demoText}</p>
          <h2 className="ecl-u-type-heading-2" id="inline-nav-4">
            {inpageProps.links[3].label}
          </h2>
          <p className="ecl-u-type-paragraph-m">{demoText}</p>
        </div>
      </div>
    </div>
  );
};

Default.storyName = 'default';
