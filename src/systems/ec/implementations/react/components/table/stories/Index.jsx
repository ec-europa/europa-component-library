import Table from '../examples/Table';
import TableZebra from '../examples/TableZebra';
import TableMulti from '../examples/TableMulti';

export default {
  title: 'Components/Table',
};

export const Default = Table;

Default.story = {
  name: 'default',
};

export const Zebra = TableZebra;

Zebra.story = {
  name: 'zebra',
};

export const MultiHeader = TableMulti;

MultiHeader.story = {
  name: 'multi header',
};
