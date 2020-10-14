import Table from '../examples/Table';
import TableZebra from '../examples/TableZebra';
import TableMulti from '../examples/TableMulti';

export default {
  title: 'Components/Table',
};

export const Default = Table;

Default.storyName = 'default';

export const Zebra = TableZebra;

Zebra.storyName = 'zebra';

export const MultiHeader = TableMulti;

MultiHeader.storyName = 'multi header';
