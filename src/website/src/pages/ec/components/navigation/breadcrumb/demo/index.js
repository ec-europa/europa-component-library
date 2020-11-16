import dataSimple from '@ecl/specs-component-breadcrumb/demo/data--simple';
import dataLong from '@ecl/specs-component-breadcrumb/demo/data';
import templateCore from '@ecl/twig-component-breadcrumb-core/breadcrumb-core.html.twig';
import templateStandardised from '@ecl/twig-component-breadcrumb-standardised/breadcrumb-standardised.html.twig';
import templateHarmonised from '@ecl/twig-component-breadcrumb-harmonised/breadcrumb-harmonised.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const simpleContentCore = templateCore(correctSvgPath(dataSimple));
export const longContentCore = templateCore(correctSvgPath(dataLong));
export const simpleContentStandardised = templateStandardised(
  correctSvgPath(dataSimple)
);
export const longContentStandardised = templateStandardised(
  correctSvgPath(dataLong)
);
export const simpleContentHarmonised = templateHarmonised(
  correctSvgPath(dataSimple)
);
export const longContentHarmonised = templateHarmonised(
  correctSvgPath(dataLong)
);
