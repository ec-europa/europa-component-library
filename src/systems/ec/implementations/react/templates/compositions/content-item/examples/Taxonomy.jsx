import React from 'react';
import parse from 'html-react-parser';
import { DescriptionListWithData } from '@ecl/ec-react-component-description-list';

import demoContentTaxonomy from '@ecl/ec-specs-content-item/demo/data--taxonomy';
import ContentItem from '../src/ContentItem';

// Format data
demoContentTaxonomy.meta.label = parse(demoContentTaxonomy.meta.label);

export default () => (
  <ContentItem {...demoContentTaxonomy}>
    <DescriptionListWithData
      {...demoContentTaxonomy.descriptionList}
      variant="horizontal"
      className="ecl-u-mt-m ecl-u-mt-lg-l"
    />
    <DescriptionListWithData
      {...demoContentTaxonomy.descriptionListTaxonomy}
      variant="taxonomy"
    />
  </ContentItem>
);
