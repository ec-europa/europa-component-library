import demoContentDefault from '@ecl/ec-specs-table/demo/data--multi';

import React from 'react';
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
    <Table data-ecl-auto-init="Table" data-ecl-table>
      <TableHead>
        {demoContentDefault.headers.map((row, rowIndex) => (
          <TableRow key={`header-row${rowIndex}`}>
            {row.map(({ label, ...cellProps }, cellIndex) => (
              <TableHeader
                {...adaptCellProps(cellProps)}
                key={`header-row${rowIndex}-cell${cellIndex}`}
                {...(label &&
                  !cellProps.colspan && {
                    'data-ecl-table-sort-toggle': true,
                  })}
              >
                {label}
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
                {label}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
