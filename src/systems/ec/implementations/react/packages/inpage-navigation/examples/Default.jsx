/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import StoryWrapper from '@ecl/story-wrapper';
import VanillaInpageNavigation from '@ecl/ec-component-inpage-navigation';
import demoContent from '@ecl/ec-specs-inpage-navigation/demo/data';
import loremIpsum from 'lorem-ipsum';
import InpageNavigation from '../src/InpageNavigation';

export default () => {
  const demoText = loremIpsum({ count: 25 });

  return (
    <React.Fragment>
      <StoryWrapper
        afterMount={() => {
          const element = document.querySelector(
            '[data-ecl-inpage-navigation]'
          );
          const vanillaInpageNavigation = new VanillaInpageNavigation(element);
          vanillaInpageNavigation.init();
          // Return new context
          return { vanillaInpageNavigation };
        }}
        beforeUnmount={context => {
          if (context.vanillaInpageNavigation) {
            context.vanillaInpageNavigation.destroy();
          }
        }}
      />

      <div className="ecl-container">
        <div className="ecl-row ecl-u-mt-l">
          <div className="ecl-col-md-3">
            <InpageNavigation {...demoContent} />
          </div>

          <div className="ecl-col-md-9">
            <h2 className="ecl-u-type-heading-2" id="inline-nav-1">
              Heading 1
            </h2>
            <p className="ecl-u-type-paragraph-m">{demoText}</p>
            <h2 className="ecl-u-type-heading-2" id="inline-nav-2">
              Heading 2
            </h2>
            <p className="ecl-u-type-paragraph-m">{demoText}</p>
            <h2 className="ecl-u-type-heading-2" id="inline-nav-3">
              Heading 3
            </h2>
            <p className="ecl-u-type-paragraph-m">{demoText}</p>
            <h2 className="ecl-u-type-heading-2" id="inline-nav-4">
              Heading 4
            </h2>
            <p className="ecl-u-type-paragraph-m">{demoText}</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
