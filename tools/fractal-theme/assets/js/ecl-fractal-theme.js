/* eslint-disable import/no-extraneous-dependencies, import/first */
import $ from 'jquery';
import * as ECL from '@ecl/ec-preset-full';

// Local imports
import Pen from './components/pen';
import search from './search';
import events from './events';

document.addEventListener('DOMContentLoaded', () => {
  $.map($('[data-behaviour="pen"]'), p => new Pen(p));
  search();

  ECL.navigationSide();
});

export default events;
