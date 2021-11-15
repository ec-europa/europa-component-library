import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-carousel/demo/data';
import carousel from './carousel.html.twig';
import notes from './README.md';

const prepareData = (data, args) => {
  return Object.assign(correctSvgPath(data), args);
};

export default {
  title: 'Components/Carousel',
};

export const Default = (args) => carousel(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];
