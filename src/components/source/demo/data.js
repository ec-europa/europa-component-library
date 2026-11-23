const exampleLink = '/example';

export default {
  label: 'Sources:',
  sources: [
    {
      link: {
        label: 'Eurostat',
        path: exampleLink,
      },
    },
    {
      link: {
        label: 'DG CNECT',
        path: exampleLink,
        external: true,
      },
    },
    {
      name: 'European Commission',
    },
  ],
};
