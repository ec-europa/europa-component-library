/* eslint-disable import/no-extraneous-dependencies */
import demoContentDefault from '@ecl/eu-specs-table/demo/data--multi';

import React from 'react';
import parse from 'html-react-parser';
import Table from '../src/Table';
import TableRow from '../src/TableRow';
import TableHead from '../src/TableHead';
import TableHeader from '../src/TableHeader';
import TableBody from '../src/TableBody';
import TableCell from '../src/TableCell';

export default () => {
  return (
    <Table>
      <TableHead>
        {demoContentDefault.headers.map(row => (
          <TableRow {...row}>
            {row.map(cell => (
              <TableHeader {...cell}>{parse(cell.label)}</TableHeader>
            ))}
          </TableRow>
        ))}
      </TableHead>
      <TableBody>
        {demoContentDefault.rows.map(row => (
          <TableRow {...row}>
            {row.map(cell => (
              <TableCell {...cell}>{parse(cell.label)}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
