/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Table from '../examples/Table';
import TableZebra from '../examples/TableZebra';
import TableMulti from '../examples/TableMulti';

storiesOf('Components/Table', module)
  .add('default', Table)
  .add('zebra', TableZebra)
  .add('multi header', TableMulti);
