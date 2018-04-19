const contextDefault = require('@ecl/generic-component-table/data/data-default.config');
const contextDefaultEnhanced = require('@ecl/generic-component-table/data/data-default-enhanced.config');
const contextEmpty = require('@ecl/generic-component-table/data/data-empty.config');
const contextEmptyEnhanced = require('@ecl/generic-component-table/data/data-empty-enhanced.config');
const contextColspan = require('@ecl/generic-component-table/data/data-colspan.config');
const contextColspanEnhanced = require('@ecl/generic-component-table/data/data-colspan-enhanced.config');
const contextColspanEmpty = require('@ecl/generic-component-table/data/data-colspan-empty.config');
const contextColspanEmptyEnhanced = require('@ecl/generic-component-table/data/data-colspan-empty-enhanced.config');

module.exports = [
  {
    name: 'default',
    label: 'Default table',
    context: contextDefault,
  },
  {
    name: 'default-enhanced',
    label: 'Default table - enhanced',
    context: contextDefaultEnhanced,
  },
  {
    name: 'empty',
    label: 'Table with empty heading',
    context: contextEmpty,
  },
  {
    name: 'empty-enhanced',
    label: 'Table with empty heading - enhanced',
    context: contextEmptyEnhanced,
  },
  {
    name: 'colspan',
    label: 'Table with colspan',
    context: contextColspan,
  },
  {
    name: 'colspan-enhanced',
    label: 'Table with colspan - enhanced',
    context: contextColspanEnhanced,
  },
  {
    name: 'colspan-empty',
    label: 'Table with colspan and empty heading',
    context: contextColspanEmpty,
  },
  {
    name: 'colspan-empty-enhanced',
    label: 'Table with colspan and empty heading - enhanced',
    context: contextColspanEmptyEnhanced,
  },
];
