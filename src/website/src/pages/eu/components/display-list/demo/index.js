import dataImage from '@ecl/specs-component-display-list/demo/data--image';
import dataIcon from '@ecl/specs-component-display-list/demo/data--icon';

import templateList from '@ecl/twig-component-display-list/display-list.html.twig';
import templateListItem from '@ecl/twig-component-display-list/display-list-item.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const displayListWithImage = templateList(correctSvgPath(dataImage));
export const displayListWithIcon = templateList(correctSvgPath(dataIcon));
export const displayListItemWithImage = `
  <div class="ecl-container">
    <div class="ecl-row">
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataImage.items[0]))}
      </div>
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataImage.items[1]))}
      </div>
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataImage.items[2]))}
      </div>
    </div>
  </div>`;
export const displayListItemWithIcon = `
  <div class="ecl-container">
    <div class="ecl-row">
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataIcon.items[0]))}
      </div>
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataIcon.items[1]))}
      </div>
      <div class="ecl-col-4">
        ${templateListItem(correctSvgPath(dataIcon.items[2]))}
      </div>
    </div>
  </div>`;
