import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';

import defaultSprite from '@ecl/resources-ec-icons/dist/sprites/icons.svg';
import specs from '@ecl/specs-component-pagination/demo/data';
import pagination from './pagination.html.twig';
import notes from './README.md';

const prepareData = (data) => {
  data.icon_path = defaultSprite;

  return data;
};

export default {
  title: 'Components/Navigation/Pagination',
  decorators: [withNotes, withCode],
  parameters: {
    knobs: { disable: true },
    controls: { hideNoControlsWarning: true },
  },
};

export const Default = () => pagination(prepareData(specs));

Default.storyName = 'default';
Default.parameters = { notes: { markdown: notes, json: specs } };
