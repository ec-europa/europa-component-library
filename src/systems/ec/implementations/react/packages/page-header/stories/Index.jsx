/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs/react';
import Breadcrumb, { BreadcrumbItem } from '@ecl/ec-react-component-breadcrumb';

import breadcrumbContent from '@ecl/ec-specs-breadcrumb/demo/data-simple';

// import demoContent from '@ecl/ec-specs-site-switcher/demo/data';
import PageHeader from '../PageHeader';

const { items, ...breadcrumbProps } = breadcrumbContent;
const breadcrumb = (
  <Breadcrumb {...breadcrumbProps}>
    {items.map(item => (
      <BreadcrumbItem {...item} key={item.label} />
    ))}
  </Breadcrumb>
);
/*
const variant = {
  none: '',
  header: 'header',
  footer: 'footer',
};
*/

storiesOf('PageHeader', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <PageHeader
      breadcrumb={breadcrumb}
      title="Page title"
      description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium"
      meta={['News article', '17 October 2015']}
      infos={[
        'Monday 8 February',
        'Munich, Germany',
        'Live streaming available',
      ]}
    />
  ));
