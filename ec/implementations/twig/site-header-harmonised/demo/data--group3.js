import specs from '@ecl/ec-specs-site-header-harmonised/demo/data--group3';

const adapter = (initialData) => {
  // Copy reference specification demo adaptedData.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.site_name = adaptedData.siteName;
  adaptedData.logo.src_desktop = adaptedData.logo.src;
  adaptedData.group = 'group3';
  delete adaptedData.SiteName;
  return adaptedData;
};

export default adapter(specs);
