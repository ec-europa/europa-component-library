/* eslint-disable import/no-extraneous-dependencies */
import specData from '@ecl/ec-specs-pagination/demo/data';
import { formatLink } from '@ecl-twig/data-utils';

function formatItem(i) {
  let type = '';
  if (i.isCurrent) {
    type = 'current';
  }
  if (i.isPrevious) {
    type = 'previous';
  }
  if (i.isNext) {
    type = 'next';
  }

  const item = {
    type,
    label: i.label,
    aria_label: i.ariaLabel,
  };

  if (i.link) {
    item.link = formatLink(i.link);
  }

  return item;
}

const data = {
  label: specData.label,
  items: specData.items.map((item) => formatItem(item)),
  icon_path: '/icons.svg',
};

export default data;
