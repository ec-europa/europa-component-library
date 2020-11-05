import dataDefault from '@ecl/specs-component-table/demo/data--default';
import dataMulti from '@ecl/specs-component-table/demo/data--multi';
import dataSortable from '@ecl/specs-component-table/demo/data--sort-table';
import template from '@ecl/twig-component-table/table.html.twig';

const dataZebra = { ...dataDefault, zebra: true };

export const tableDefault = template(dataDefault);
export const tableZebra = template(dataZebra);
export const tableMulti = template(dataMulti);
export const tableSortable = template(dataSortable);
