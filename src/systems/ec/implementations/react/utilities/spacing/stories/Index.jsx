/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const styleLine = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '0.5rem',
  marginTop: '0.5rem',
};
const styleContainer = {
  backgroundColor: '#ebebeb',
  display: 'flex',
};
const styleContent = {
  backgroundColor: '#9f9f9f',
  border: '2px solid #404040',
  display: 'flex',
};
const styleItem = {
  backgroundColor: '#fff',
  display: 'block',
  font: 'normal normal 400 .875rem/1rem Arial,sans-serif',
  textAlign: 'center',
  width: '7rem',
};

const Spacing = (type, token) => (
  <div style={styleLine}>
    <div style={styleContainer}>
      <div style={styleContent} className={`ecl-u-m${type}-${token}`}>
        <span style={styleItem}>{`ecl-u-m${type}-${token}`}</span>
      </div>
    </div>

    <div style={styleContainer}>
      <div style={styleContent} className={`ecl-u-p${type}-${token}`}>
        <span style={styleItem}>{`ecl-u-p${type}-${token}`}</span>
      </div>
    </div>
  </div>
);

storiesOf('Utilities|Spacing', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <Fragment>
      <h2 className="ecl-u-type-heading-2">All around spacing</h2>
      {Spacing('a', '2xs')}
      {Spacing('a', 'xs')}
      {Spacing('a', 's')}
      {Spacing('a', 'm')}
      {Spacing('a', 'l')}
      {Spacing('a', 'xl')}
      {Spacing('a', '2xl')}
      {Spacing('a', '3xl')}
      {Spacing('a', '4xl')}

      <h2 className="ecl-u-type-heading-2">Vertical spacing</h2>
      {Spacing('v', '2xs')}
      {Spacing('v', 'xs')}
      {Spacing('v', 's')}
      {Spacing('v', 'm')}
      {Spacing('v', 'l')}
      {Spacing('v', 'xl')}
      {Spacing('v', '2xl')}
      {Spacing('v', '3xl')}
      {Spacing('v', '4xl')}

      <h2 className="ecl-u-type-heading-2">Horizontal spacing</h2>
      {Spacing('h', '2xs')}
      {Spacing('h', 'xs')}
      {Spacing('h', 's')}
      {Spacing('h', 'm')}
      {Spacing('h', 'l')}
      {Spacing('h', 'xl')}
      {Spacing('h', '2xl')}
      {Spacing('h', '3xl')}
      {Spacing('h', '4xl')}
    </Fragment>
  ));
