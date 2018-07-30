const breadcrumbSegments = [
  { href: '../../example.html#', label: 'Home' },
  { href: '../../example.html#', label: 'Announcements' },
  { label: 'Business, Economy, Euro' },
];

module.exports = {
  title: 'Page Headers',
  label: 'Page Headers',
  tags: ['organism'],
  status: 'ready',
  default: 'homepage',
  variants: [
    {
      name: 'homepage',
      context: {
        variant: 'homepage',
        identity: 'Your gateway',
        introduction: 'To the European Union',
        background_image: '../../assets/demo_images/pexels-photo-335393@2x.png',
      },
    },
    {
      name: 'branded-homepage',
      context: {
        variant: 'branded-homepage',
        breadcrumb: breadcrumbSegments,
        identity: 'Your gateway',
        introduction: 'To the European Union',
        background_image: '../../assets/demo_images/pexels-photo-335393@2x.png',
      },
    },
    {
      name: 'basic',
      context: {
        variant: 'basic',
        breadcrumb: breadcrumbSegments,
        identity: 'Your gateway',
      },
    },
  ],
  context: {
    _demo: {
      scripts: `
        document.addEventListener('DOMContentLoaded', function () { 
          ECL.initBreadcrumb();
        });`,
    },
  },
};
