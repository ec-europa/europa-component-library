/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
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
        <TableRow>
          <TableHeader>Name</TableHeader>
          <TableHeader>Registration date</TableHeader>
          <TableHeader colspan="3">Languages</TableHeader>
        </TableRow>
        <TableRow>
          <TableHeader />
          <TableHeader />
          <TableHeader>English</TableHeader>
          <TableHeader>French</TableHeader>
          <TableHeader>German</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell data-ecl-table-header="Name">John</TableCell>
          <TableCell data-ecl-table-header="Registration date">
            September 14, 2013
          </TableCell>
          <TableCell data-ecl-table-header="English">Yes</TableCell>
          <TableCell data-ecl-table-header="French">No</TableCell>
          <TableCell data-ecl-table-header="German">Yes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-table-header="Name">Ron</TableCell>
          <TableCell data-ecl-table-header="Registration date">
            October 23, 2014
          </TableCell>
          <TableCell data-ecl-table-header="English">Yes</TableCell>
          <TableCell data-ecl-table-header="French">Yes</TableCell>
          <TableCell data-ecl-table-header="German">Yes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-table-header="Name">Albert</TableCell>
          <TableCell data-ecl-table-header="Registration date">
            December 13, 2014
          </TableCell>
          <TableCell data-ecl-table-header="English">No</TableCell>
          <TableCell data-ecl-table-header="French">No</TableCell>
          <TableCell data-ecl-table-header="German">Yes</TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-table-header="Name">Marcel</TableCell>
          <TableCell data-ecl-table-header="Registration date">
            January 12, 1995
          </TableCell>
          <TableCell data-ecl-table-header="English">Yes</TableCell>
          <TableCell data-ecl-table-header="French">Yes</TableCell>
          <TableCell data-ecl-table-header="German">Yes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
