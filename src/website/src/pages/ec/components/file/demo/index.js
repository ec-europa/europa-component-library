import demoWithTranslation from '@ecl/specs-component-file/demo/data--with-translation';
import demoWithoutTranslation from '@ecl/specs-component-file/demo/data--without-translation';
import demoThumbnail from '@ecl/specs-component-file/demo/data--thumbnail';
import demoTaxonomy from '@ecl/specs-component-file/demo/data--taxonomy';
import template from '@ecl/twig-component-file/file.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const fileWithTranslation = template(
  correctSvgPath(demoWithTranslation)
);
export const fileWithoutTranslation = template(
  correctSvgPath(demoWithoutTranslation)
);
export const fileThumbnail = template(correctSvgPath(demoThumbnail));
export const fileTaxonomy = template(correctSvgPath(demoTaxonomy));
