/* eslint-disable import/no-extraneous-dependencies, import/first */
import $ from 'jquery';
import * as ECL from '@ec-europa/ecl-preset-full';

// Local imports
import Pen from './components/pen';
import search from './search';
import events from './events';

document.addEventListener('DOMContentLoaded', () => {
  $.map($('[data-behaviour="pen"]'), p => new Pen(p));
  search();

  ECL.megamenu();
});

export default events;
