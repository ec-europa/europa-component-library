import demoContentDefault from '@ecl/ec-specs-table/demo/data--multi';

import React from 'react';
import parse from 'html-react-parser';
import Table from '../src/Table';
import TableRow from '../src/TableRow';
import TableHead from '../src/TableHead';
import TableHeader from '../src/TableHeader';
import TableBody from '../src/TableBody';
import TableCell from '../src/TableCell';

// Map to known JSX properties
const adaptCellProps = ({ colspan, ...otherProps }) => ({
  colSpan: colspan,
  ...otherProps,
});

export default function () {
  return (
    <Table>
      <TableHead>
        {demoContentDefault.headers.map((row, rowIndex) => (
          <TableRow key={`header-row${rowIndex}`}>
            {row.map(({ label, ...cellProps }, cellIndex) => (
              <TableHeader
                {...adaptCellProps(cellProps)}
                key={`header-row${rowIndex}-cell${cellIndex}`}
              >
                {parse(label)}
              </TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {demoContentDefault.rows.map((row, rowIndex) => (
          <TableRow key={`body-row${rowIndex}`}>
            {row.map(({ label, ...cellProps }, cellIndex) => (
              <TableCell
                {...adaptCellProps(cellProps)}
                key={`body-row${rowIndex}-cell${cellIndex}`}
              >
                {parse(label)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
