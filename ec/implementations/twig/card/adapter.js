/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import { formatLinkAlt } from '@ecl-twig/data-utils';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.card = {};
  adaptedData.card.description = adaptedData.description;
  adaptedData.card.title = adaptedData.title;
  delete adaptedData.description;
  if (adaptedData.type) {
    adaptedData.card.type = adaptedData.type;
    delete adaptedData.type;
  }
  if (adaptedData.meta) {
    adaptedData.card.meta = [];
    adaptedData.card.meta = adaptedData.meta.split(' | ');
    delete adaptedData.meta;
  }
  if (adaptedData.tags) {
    adaptedData.card.tags = adaptedData.tags;
    adaptedData.card.tags.forEach((item) => {
      item.path = item.href;
      delete item.href;
    });
    delete adaptedData.tags;
  }
  if (adaptedData.card.title.href) {
    adaptedData.card.title.path = adaptedData.card.title.href;
    adaptedData.card.title.type = 'standalone';
    delete adaptedData.card.title.href;
  }
  if (adaptedData.image) {
    adaptedData.card.image = adaptedData.image;
    delete adaptedData.image;
  }
  if (adaptedData.infos) {
    adaptedData.card.infos = adaptedData.infos;
    adaptedData.card.infos.forEach((info) => {
      info.icon.path = '/icons.svg';
      const [type, name] = info.icon.shape.split('--');
      info.icon.name = name;
      info.icon.type = type;
      delete info.icon.shape;
    });
    delete adaptedData.infos;
  }
  if (adaptedData.links) {
    adaptedData.card.links = adaptedData.links;
    adaptedData.card.links = adaptedData.card.links.map((item) =>
      formatLinkAlt(item)
    );
    delete adaptedData.links;
  }
  delete adaptedData.title;

  return adaptedData;
};

export default adapter;
