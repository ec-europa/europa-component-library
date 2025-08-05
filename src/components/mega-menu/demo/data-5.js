const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'demo',
  aria_label: 'Main navigation',
  second_level_aria_label: 'Pages in this section',
  third_level_aria_label: 'Sub-pages in this section',
  toggle: {
    label: 'Menu',
    icon: {
      name: 'hamburger',
      size: 'm',
    },
  },
  close: {
    label: 'Close',
    icon: {
      name: 'close',
      size: 'm',
    },
  },
  back_label: 'Back',
  items: [
    {
      label: 'Policy Development',
      path: exampleLink,
      info: {
        title: 'Policy Development Hub',
        content: 'Shaping the EU’s policy landscape.',
        link: {
          link: {
            label: 'Explore policies',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
                alt: 'Policy banner',
              },
            },
            label: 'Policy Spotlight',
            path: exampleLink,
            description: '<p>Key policy initiatives for 2025.</p>',
          },
          {
            label: 'Policy Resource',
            path: exampleLink,
            external: true,
            sr_external: 'External policy link',
          },
        ],
      },
      children: [
        {
          label: 'Policy Area A',
          path: exampleLink,
          sublink_id: 'policy-area-a-id',
          children: [
            { label: 'Subitem A.1', path: exampleLink },
            { label: 'Subitem A.2', path: exampleLink },
            { label: 'Subitem A.3', path: exampleLink },
            { label: 'Subitem A.4', path: exampleLink },
            { label: 'Subitem A.5', path: exampleLink },
          ],
        },
        {
          label: 'Policy Area B',
          path: exampleLink,
          sublink_id: 'policy-area-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
            { label: 'Subitem B.3', path: exampleLink },
            { label: 'Subitem B.4', path: exampleLink },
            { label: 'Subitem B.5', path: exampleLink },
            { label: 'Subitem B.6', path: exampleLink },
            { label: 'Subitem B.7', path: exampleLink },
            { label: 'Subitem B.8', path: exampleLink },
            { label: 'Subitem B.9', path: exampleLink },
            { label: 'Subitem B.10', path: exampleLink },
            { label: 'Subitem B.11', path: exampleLink },
            { label: 'Subitem B.12', path: exampleLink },
            { label: 'Subitem B.13', path: exampleLink },
            { label: 'Subitem B.14', path: exampleLink },
            { label: 'Subitem B.15', path: exampleLink },
          ],
          featured: {
            title: 'Highlighted Policies',
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                    alt: 'Policy highlight banner',
                  },
                },
              },
              {
                label: 'Policy Feature',
                path: exampleLink,
                description: '<p>Leading policy developments.</p>',
                extra_attributes: [{ name: 'policy-featured-link' }],
              },
            ],
          },
        },
        { label: 'Policy Area C', path: exampleLink },
        { label: 'Policy Area D', path: exampleLink },
        { label: 'Policy Area E', path: exampleLink },
        { label: 'Policy Area F', path: exampleLink },
        { label: 'Policy Area G', path: exampleLink },
        { label: 'Policy Area H', path: exampleLink },
        {
          label: 'Policy Area I with Long Title',
          path: exampleLink,
          sublink_id: 'policy-area-i-id',
          see_all: true,
          see_all_label: 'View all policy areas',
        },
      ],
    },
    {
      label: 'EU Institutions',
      path: exampleLink,
      info: {
        title: 'EU Institutions Overview',
        content: 'Learn about EU governance and institutions.',
        link: {
          link: {
            label: 'Explore institutions',
          },
        },
      },
      children: [
        { label: 'Institution 1', path: exampleLink },
        { label: 'Institution 2', path: exampleLink },
      ],
    },
    {
      label: 'Science & Innovation',
      path: exampleLink,
      info: {
        title: 'Science and Innovation',
        content: 'Driving EU research and technology.',
        link: {
          link: {
            label: 'Discover innovations',
          },
        },
      },
      children: [
        {
          label: 'Research Project 1',
          path: exampleLink,
          sublink_id: 'research-project-1-id',
          featured: {
            title: 'Major Research Highlights',
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
                    alt: 'Research banner',
                  },
                },
                label: 'Research Breakthrough',
                path: exampleLink,
                description: '<p>Groundbreaking EU research.</p>',
              },
              {
                label: 'Innovation Link 1',
                path: exampleLink,
                external: true,
                sr_external: 'External innovation site',
              },
              {
                label: 'Innovation Link 2',
                path: exampleLink,
                description: '<p>Supporting EU startups.</p>',
              },
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
                    alt: 'Tech banner',
                  },
                },
              },
              {
                label: 'Global Research',
                path: exampleLink,
                external: true,
                sr_external: 'External global research',
                extra_attributes: [{ name: 'global-research-link' }],
              },
              {
                label: 'Future Tech',
                path: exampleLink,
                description: '<p>Next-generation technologies.</p>',
                extra_classes: 'future-tech-class',
              },
            ],
          },
        },
        { label: 'Research Project 2', path: exampleLink },
        { label: 'Research Project 3', path: exampleLink },
        {
          label: 'Research Project 4 with Extended Name',
          path: exampleLink,
          sublink_id: 'research-project-4-id',
          see_all: true,
          see_all_label: 'See all projects',
          children: [
            { label: 'Project 4.1', path: exampleLink },
            { label: 'Project 4.2', path: exampleLink },
            { label: 'Project 4.3', path: exampleLink },
            { label: 'Project 4.4', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Community Programs',
      path: exampleLink,
      container: `<div class="ecl">
        <h2 class="ecl-u-mt-none ecl-u-mt-l-l">Join Our Community</h2>
        <p>Participate in EU-wide community initiatives.</p>
      </div>`,
      featured: {
        items: [
          {
            label: 'Community Event',
            path: exampleLink,
            description: '<p>Upcoming community engagement event.</p>',
          },
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
                alt: 'Community banner',
              },
            },
            label: 'Citizen Initiative',
            path: exampleLink,
          },
        ],
      },
    },
    {
      label: 'Sustainability Goals',
      path: exampleLink,
      info: {
        title: 'Sustainability Goals',
        content: 'Advancing EU’s environmental objectives.',
        link: {
          link: {
            label: 'Explore sustainability',
          },
        },
      },
      children: [
        {
          label: 'Green Initiative 1',
          path: exampleLink,
          sublink_id: 'green-initiative-1-id',
          children: [
            { label: 'Subitem 1.1', path: exampleLink },
            { label: 'Subitem 1.2', path: exampleLink },
            { label: 'Subitem 1.3', path: exampleLink },
            { label: 'Subitem 1.4', path: exampleLink },
            { label: 'Subitem 1.5', path: exampleLink },
            { label: 'Subitem 1.6', path: exampleLink },
            { label: 'Subitem 1.7', path: exampleLink },
            { label: 'Subitem 1.8', path: exampleLink },
            { label: 'Subitem 1.9', path: exampleLink },
            { label: 'Subitem 1.10', path: exampleLink },
            { label: 'Subitem 1.11', path: exampleLink },
            { label: 'Subitem 1.12', path: exampleLink },
            { label: 'Subitem 1.13', path: exampleLink },
            { label: 'Subitem 1.14', path: exampleLink },
            { label: 'Subitem 1.15', path: exampleLink },
            { label: 'Subitem 1.16', path: exampleLink },
            { label: 'Subitem 1.17', path: exampleLink },
            { label: 'Subitem 1.18', path: exampleLink },
          ],
        },
        { label: 'Green Initiative 2', path: exampleLink },
        { label: 'Green Initiative 3', path: exampleLink },
        { label: 'Green Initiative 4', path: exampleLink },
        { label: 'Green Initiative 5', path: exampleLink },
        { label: 'Green Initiative 6', path: exampleLink },
        { label: 'Green Initiative 7', path: exampleLink },
        { label: 'Green Initiative 8', path: exampleLink },
        { label: 'Green Initiative 9', path: exampleLink },
        { label: 'Green Initiative 10', path: exampleLink },
        {
          label: 'Green Initiative 11 with Long Name',
          path: exampleLink,
          sublink_id: 'green-initiative-11-id',
          see_all: true,
          see_all_label: 'View all initiatives',
        },
      ],
    },
  ],
};
