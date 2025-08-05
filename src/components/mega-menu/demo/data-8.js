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
      label: 'EU Policy Hub',
      path: exampleLink,
      info: {
        title: 'EU Policy Hub',
        content: 'Shaping the future of EU policies.',
        link: {
          link: {
            label: 'Explore policies',
          },
        },
      },
      children: [
        {
          label: 'Policy Area 1',
          path: exampleLink,
          sublink_id: 'policy-area-1-id',
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
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
                    alt: 'Policy banner',
                  },
                },
                label: 'Policy Spotlight',
                path: exampleLink,
                description: '<p>Key policy developments for 2025.</p>',
              },
              {
                label: 'Policy Resource',
                path: exampleLink,
                external: true,
                sr_external: 'External policy site',
                extra_attributes: [{ name: 'policy-featured-link' }],
              },
            ],
          },
        },
        {
          label: 'Policy Area 2',
          path: exampleLink,
          sublink_id: 'policy-area-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
            { label: 'Subitem 2.4', path: exampleLink },
          ],
        },
        {
          label: 'Policy Area 3 with Detailed Title',
          path: exampleLink,
          sublink_id: 'policy-area-3-id',
          see_all: true,
          see_all_label: 'View all areas',
        },
      ],
    },
    {
      label: 'Governance Insights',
      path: exampleLink,
      info: {
        title: 'Governance Insights',
        content: 'Explore EU institutions and governance.',
        link: {
          link: {
            label: 'Learn about governance',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                alt: 'Governance banner',
              },
            },
            label: 'Institution Highlight',
            path: exampleLink,
            description: '<p>Key governance updates.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Institution A',
          path: exampleLink,
          sublink_id: 'institution-a-id',
          children: [
            { label: 'Subitem A.1', path: exampleLink },
            { label: 'Subitem A.2', path: exampleLink },
            { label: 'Subitem A.3', path: exampleLink },
            { label: 'Subitem A.4', path: exampleLink },
            { label: 'Subitem A.5', path: exampleLink },
            { label: 'Subitem A.6', path: exampleLink },
          ],
        },
        {
          label: 'Institution B',
          path: exampleLink,
          sublink_id: 'institution-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Science & Research',
      path: exampleLink,
      info: {
        title: 'Science and Research',
        content: 'Advancing EU innovation and science.',
        link: {
          link: {
            label: 'Discover research',
          },
        },
      },
      featured: {
        title: 'Featured Research Projects',
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
                alt: 'Research banner',
              },
            },
            label: 'Research Breakthrough',
            path: exampleLink,
            description: '<p>Cutting-edge EU research projects.</p>',
          },
          {
            label: 'Innovation Link 1',
            path: exampleLink,
            external: true,
            sr_external: 'External innovation site',
          },
          {
            label: 'Startup Support',
            path: exampleLink,
            description: '<p>Empowering EU startups.</p>',
            extra_classes: 'startup-class',
          },
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
                alt: 'Innovation banner',
              },
            },
          },
          {
            label: 'Global Research Network',
            path: exampleLink,
            external: true,
            sr_external: 'External research network',
            extra_attributes: [{ name: 'global-research-link' }],
          },
          {
            label: 'Future Tech Solutions',
            path: exampleLink,
            description: '<p>Next-generation technologies.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Research Program 1',
          path: exampleLink,
          sublink_id: 'research-program-1-id',
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
          ],
        },
        {
          label: 'Research Program 2',
          path: exampleLink,
          sublink_id: 'research-program-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
            { label: 'Subitem 2.4', path: exampleLink },
            { label: 'Subitem 2.5', path: exampleLink },
          ],
        },
        {
          label: 'Research Program 3 with Long Title',
          path: exampleLink,
          sublink_id: 'research-program-3-id',
          see_all: true,
          see_all_label: 'See all programs',
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg',
                    alt: 'Program banner',
                  },
                },
                label: 'Program Highlight',
                path: exampleLink,
                description: '<p>Key research initiatives.</p>',
              },
              {
                label: 'Research Resource',
                path: exampleLink,
                extra_attributes: [{ name: 'research-featured-link' }],
              },
            ],
          },
        },
      ],
    },
    {
      label: 'Environmental Goals',
      path: exampleLink,
      info: {
        title: 'Environmental Goals',
        content: 'Promoting EU sustainability.',
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
          ],
        },
        {
          label: 'Green Initiative 2',
          path: exampleLink,
          sublink_id: 'green-initiative-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
          ],
        },
        {
          label: 'Green Initiative 3',
          path: exampleLink,
          sublink_id: 'green-initiative-3-id',
        },
      ],
    },
    {
      label: 'Economic Development',
      path: exampleLink,
      info: {
        title: 'Economic Development',
        content: 'Boosting EU economic growth.',
        link: {
          link: {
            label: 'Explore economic initiatives',
          },
        },
      },
      children: [
        {
          label: 'Economic Strategy 1',
          path: exampleLink,
          sublink_id: 'economic-strategy-1-id',
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
          ],
        },
        {
          label: 'Economic Strategy 2 with Long Name',
          path: exampleLink,
          sublink_id: 'economic-strategy-2-id',
          see_all: true,
          see_all_label: 'View all strategies',
        },
      ],
    },
  ],
};
