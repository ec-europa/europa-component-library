/**
 * Tables related behaviors.
 */

/* eslint-disable no-unexpected-multiline */

export function eclTables(elements = null) {
  const tables =
    elements || document.getElementsByClassName('ecl-table--responsive');
  [].forEach.call(tables, table => {
    const headerText = [];
    let textColspan = '';
    let ci = 0;
    let cn = [];

    // The rows in a table body.
    const tableRows = table.querySelectorAll('tbody tr');

    // The headers in a table.
    const headers = table.querySelectorAll('thead tr th');

    // The number of main headers.
    const headFirst =
      table.querySelectorAll('thead tr')[0].querySelectorAll('th').length - 1;

    // Number of cells per row.
    const cellPerRow = table
      .querySelectorAll('tbody tr')[0]
      .querySelectorAll('td').length;

    // Position of the eventual colspan element.
    let colspanIndex = -1;

    // Build the array with all the "labels"
    // Also get position of the eventual colspan element
    for (let i = 0; i < headers.length; i += 1) {
      if (headers[i].getAttribute('colspan')) {
        colspanIndex = i;
      }

      headerText[i] = [];
      headerText[i] = headers[i].textContent;
    }

    // If we have a colspan, we have to prepare the data for it.
    if (colspanIndex !== -1) {
      textColspan = headerText.splice(colspanIndex, 1);
      ci = colspanIndex;
      cn = table.querySelectorAll('th[colspan]')[0].getAttribute('colspan');

      for (let c = 0; c < cn; c += 1) {
        headerText.splice(ci + c, 0, headerText[headFirst + c]);
        headerText.splice(headFirst + 1 + c, 1);
      }
    }

    // For every row, set the attributes we use to make this happen.
    [].forEach.call(tableRows, row => {
      for (let j = 0; j < cellPerRow; j += 1) {
        if (headerText[j] === '' || headerText[j] === '\u00A0') {
          row
            .querySelectorAll('td')
            [j].setAttribute('class', 'ecl-table__heading');
        } else {
          row.querySelectorAll('td')[j].setAttribute('data-th', headerText[j]);
        }

        if (colspanIndex !== -1) {
          const cell = row.querySelectorAll('td')[colspanIndex];
          cell.setAttribute('class', 'ecl-table__group-label');
          cell.setAttribute('data-th-group', textColspan);

          for (let c = 1; c < cn; c += 1) {
            row
              .querySelectorAll('td')
              [colspanIndex + c].setAttribute(
                'class',
                'ecl-table__group_element'
              );
          }
        }
      }
    });
  });
}

export default eclTables;
