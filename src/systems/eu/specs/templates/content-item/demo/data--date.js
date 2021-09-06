const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  meta: {
    label: "<span class='ecl-u-type-uppercase'>Event</span>",
  },
  title: {
    href: exampleLink,
    label: 'Name',
  },
  description: {
    label:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut ex tristique, dignissim sem ac, bibendum est. Sed vehicula lorem non nunc tincidunt hendrerit. Nunc tristique ante et fringilla fermentum.',
  },
  date: {
    dateTime: '2019-09-26',
    day: '26',
    month: 'Sep',
    monthFull: 'September',
    year: '2019',
  },
};
