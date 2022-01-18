import React from 'react';
import demoText from '@ecl/eu-specs-ordered-list/demo/data';
import OrderedListWithData from '../src/OrderedListWithData';

export default function () {
  return <OrderedListWithData {...demoText} />;
}
