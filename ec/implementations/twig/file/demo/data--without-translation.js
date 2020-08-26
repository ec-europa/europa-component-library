import specDataWithoutTranslation from '@ecl/ec-specs-file/demo/data--without-translation';
import { formatLink, formatIcon } from '@ecl-twig/data-utils';

export default {
  title: specDataWithoutTranslation.title,
  language: specDataWithoutTranslation.language,
  meta: specDataWithoutTranslation.meta,
  icon: formatIcon(specDataWithoutTranslation.icon),
  download: {
    ...formatLink(specDataWithoutTranslation.download),
    icon: {
      path: '/icons.svg',
    },
  },
};
