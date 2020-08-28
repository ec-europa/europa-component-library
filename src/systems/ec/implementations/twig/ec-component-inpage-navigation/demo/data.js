/* eslint-disable import/no-extraneous-dependencies, no-param-reassign */
import specData from '@ecl/ec-specs-inpage-navigation/demo/data';

const loremIpsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id orci blandit, sodales tellus ut, ultricies sem. Donec ipsum risus, dignissim sit amet felis eu, viverra tempor enim. Praesent lobortis arcu ut orci commodo pellentesque. Phasellus dignissim sit amet risus at congue. Nunc vitae sapien eget augue volutpat congue. Ut quis lectus ultrices, mattis nisl non, porttitor lorem. Suspendisse potenti. Morbi ultrices, nibh at interdum tincidunt, lacus orci vestibulum velit, et rhoncus lacus tellus id velit. Etiam sed erat sit amet mauris iaculis volutpat sollicitudin ac odio. Phasellus dignissim non metus non consequat. Nam eu vestibulum nunc.';

const adapter = (initialData) => {
  // Copy reference specification demo data.
  const adaptedData = JSON.parse(JSON.stringify(initialData));
  adaptedData.links.forEach((link) => {
    link.hash = link.href.replace('#', '');
    link.item = `<h2 class="ecl-u-type-heading-2" id="${link.hash}">${link.label}</h2><p class="ecl-u-type-paragraph-m">${loremIpsum}</p><p class="ecl-u-type-paragraph-m">${loremIpsum}</p>`;
  });

  return adaptedData;
};

export default adapter(specData);
