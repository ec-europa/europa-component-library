import dataDefault from '@ecl/table/demo/data--default';
import dataMulti from '@ecl/table/demo/data--multi';
import dataSortable from '@ecl/table/demo/data--sort-table';
import template from '@ecl/table/table.html.twig';

const dataZebra = { ...dataDefault, zebra: true };

export const tableDefault = template(dataDefault);
export const tableZebra = template(dataZebra);
export const tableMulti = template(dataMulti);
export const tableSortable = template(dataSortable);
