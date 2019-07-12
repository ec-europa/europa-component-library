/* eslint-disable import/no-extraneous-dependencies */
import Link from '@ecl/ec-react-component-link';

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
          <TableHeader>Email address</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        <TableRow>
          <TableCell data-ecl-th="Name">John</TableCell>
          <TableCell data-ecl-th="Registration date">
            September 14, 2013
          </TableCell>
          <TableCell data-ecl-th="Email address">
            <Link href="/example" label="john@example.com" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-th="Name">Ron</TableCell>
          <TableCell data-ecl-th="Registration date">
            October 23, 2014
          </TableCell>
          <TableCell data-ecl-th="Email address">
            <Link href="/example" label="ron@example.com" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-th="Name">Albert</TableCell>
          <TableCell data-ecl-th="Registration date">
            December 13, 2014
          </TableCell>
          <TableCell data-ecl-th="Email address">
            <Link href="/example" label="albert@example.com" />
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell data-ecl-th="Name">Marcel</TableCell>
          <TableCell data-ecl-th="Registration date">
            January 12, 1995
          </TableCell>
          <TableCell data-ecl-th="Email address">
            <Link href="/example" label="marcel@example.com" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};
