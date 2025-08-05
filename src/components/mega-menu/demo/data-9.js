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
      label: 'Policy Priorities',
      path: exampleLink,
      info: {
        title: 'Policy Priorities',
        content: 'Advancing EU policy objectives.',
        link: {
          link: {
            label: 'Explore priorities',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
                alt: 'Policy priority banner',
              },
            },
            label: 'Policy Focus',
            path: exampleLink,
            description: '<p>Key policy initiatives for 2025.</p>',
          },
          {
            label: 'Policy Resource',
            path: exampleLink,
            external: true,
            sr_external: 'External policy resource',
          },
        ],
      },
      children: [
        {
          label: 'Policy Sector A',
          path: exampleLink,
          sublink_id: 'policy-sector-a-id',
          children: [
            { label: 'Subitem A.1', path: exampleLink },
            { label: 'Subitem A.2', path: exampleLink },
            { label: 'Subitem A.3', path: exampleLink },
            { label: 'Subitem A.4', path: exampleLink },
            { label: 'Subitem A.5', path: exampleLink },
            { label: 'Subitem A.6', path: exampleLink },
            { label: 'Subitem A.7', path: exampleLink },
            { label: 'Subitem A.8', path: exampleLink },
            { label: 'Subitem A.9', path: exampleLink },
            { label: 'Subitem A.10', path: exampleLink },
            { label: 'Subitem A.11', path: exampleLink },
            { label: 'Subitem A.12', path: exampleLink },
            { label: 'Subitem A.13', path: exampleLink },
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
                    alt: 'Sector highlight banner',
                  },
                },
                label: 'Sector Spotlight',
                path: exampleLink,
                description: '<p>Leading sector initiatives.</p>',
              },
              {
                label: 'Sector Link',
                path: exampleLink,
                extra_attributes: [{ name: 'sector-featured-link' }],
              },
            ],
          },
        },
        {
          label: 'Policy Sector B',
          path: exampleLink,
          sublink_id: 'policy-sector-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
            { label: 'Subitem B.3', path: exampleLink },
            { label: 'Subitem B.4', path: exampleLink },
            { label: 'Subitem B.5', path: exampleLink },
          ],
        },
        {
          label: 'Policy Sector C with Long Title',
          path: exampleLink,
          sublink_id: 'policy-sector-c-id',
          see_all: true,
          see_all_label: 'View all sectors',
        },
      ],
    },
    {
      label: 'EU Institutions',
      path: exampleLink,
      info: {
        title: 'EU Institutions',
        content: 'Discover EU governance structures.',
        link: {
          link: {
            label: 'Learn about institutions',
          },
        },
      },
      children: [
        {
          label: 'Institution 1',
          path: exampleLink,
          sublink_id: 'institution-1-id',
          children: [
            { label: 'Subitem 1.1', path: exampleLink },
            { label: 'Subitem 1.2', path: exampleLink },
            { label: 'Subitem 1.3', path: exampleLink },
            { label: 'Subitem 1.4', path: exampleLink },
            { label: 'Subitem 1.5', path: exampleLink },
            { label: 'Subitem 1.6', path: exampleLink },
            { label: 'Subitem 1.7', path: exampleLink },
            { label: 'Subitem 1.8', path: exampleLink },
          ],
        },
        {
          label: 'Institution 2',
          path: exampleLink,
          sublink_id: 'institution-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Research & Innovation',
      path: exampleLink,
      info: {
        title: 'Research and Innovation',
        content: 'Driving EU scientific progress.',
        link: {
          link: {
            label: 'Discover research',
          },
        },
      },
      featured: {
        title: 'Featured Research Initiatives',
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
                alt: 'Research banner',
              },
            },
            label: 'Innovation Breakthrough',
            path: exampleLink,
            description: '<p>Leading EU research projects.</p>',
          },
          {
            label: 'Research Network',
            path: exampleLink,
            external: true,
            sr_external: 'External research network',
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
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image5.jpg',
                alt: 'Innovation banner',
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
            label: 'Future Technologies',
            path: exampleLink,
            description: '<p>Next-generation tech solutions.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Research Project 1',
          path: exampleLink,
          sublink_id: 'research-project-1-id',
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
        },
        {
          label: 'Research Project 2',
          path: exampleLink,
          sublink_id: 'research-project-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
            { label: 'Subitem 2.4', path: exampleLink },
          ],
        },
        {
          label: 'Research Project 3 with Extended Title',
          path: exampleLink,
          sublink_id: 'research-project-3-id',
          see_all: true,
          see_all_label: 'See all projects',
        },
      ],
    },
    {
      label: 'Sustainability Agenda',
      path: exampleLink,
      info: {
        title: 'Sustainability Agenda',
        content: 'Promoting EU environmental objectives.',
        link: {
          link: {
            label: 'Explore sustainability',
          },
        },
      },
      children: [
        {
          label: 'Green Plan 1',
          path: exampleLink,
          sublink_id: 'green-plan-1-id',
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
          label: 'Green Plan 2',
          path: exampleLink,
          sublink_id: 'green-plan-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
            { label: 'Subitem 2.4', path: exampleLink },
            { label: 'Subitem 2.5', path: exampleLink },
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
                    alt: 'Green plan banner',
                  },
                },
                label: 'Green Initiative',
                path: exampleLink,
                description: '<p>Leading sustainability efforts.</p>',
              },
              {
                label: 'Sustainability Resource',
                path: exampleLink,
                external: true,
                sr_external: 'External sustainability site',
              },
            ],
          },
        },
      ],
    },
    {
      label: 'Economic Progress',
      path: exampleLink,
      info: {
        title: 'Economic Progress',
        content: 'Fostering EU economic growth.',
        link: {
          link: {
            label: 'Explore economic progress',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
                alt: 'Economic banner',
              },
            },
            label: 'Economic Strategy',
            path: exampleLink,
            description: '<p>Boosting EU economy.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Economic Initiative 1',
          path: exampleLink,
          sublink_id: 'economic-initiative-1-id',
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
          label: 'Economic Initiative 2 with Long Name',
          path: exampleLink,
          sublink_id: 'economic-initiative-2-id',
          see_all: true,
          see_all_label: 'View all initiatives',
        },
      ],
    },
  ],
};
