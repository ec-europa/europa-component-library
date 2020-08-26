/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-date-block/demo/data';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.month_full = initialData.monthFull;
  adaptedData.date_time = initialData.dateTime;
  delete adaptedData.monthFull;
  delete adaptedData.dateTime;

  return adaptedData;
};

export default adapter(specData);
