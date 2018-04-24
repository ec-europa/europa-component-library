const contextDefault = require('@ecl/generic-component-table/data/demo--default');
const contextDefaultEnhanced = require('@ecl/generic-component-table/data/demo--default-enhanced');
const contextEmpty = require('@ecl/generic-component-table/data/demo--empty');
const contextEmptyEnhanced = require('@ecl/generic-component-table/data/demo--empty-enhanced');
const contextColspan = require('@ecl/generic-component-table/data/demo--colspan');
const contextColspanEnhanced = require('@ecl/generic-component-table/data/demo--colspan-enhanced');
const contextColspanEmpty = require('@ecl/generic-component-table/data/demo--colspan-empty');
const contextColspanEmptyEnhanced = require('@ecl/generic-component-table/data/demo--colspan-empty-enhanced');

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
