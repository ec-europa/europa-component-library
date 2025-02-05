import demoWithTranslation from '@ecl/file/demo/data--with-translation';
import demoWithoutTranslation from '@ecl/file/demo/data--without-translation';
import demoThumbnail from '@ecl/file/demo/data--thumbnail';
import demoTaxonomy from '@ecl/file/demo/data--taxonomy';
import template from '@ecl/file/file.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const fileWithTranslation = template(
  correctSvgPath(demoWithTranslation),
);
export const fileWithoutTranslation = template(
  correctSvgPath(demoWithoutTranslation),
);
export const fileThumbnail = template(correctSvgPath(demoThumbnail));
export const fileTaxonomy = template(correctSvgPath(demoTaxonomy));
