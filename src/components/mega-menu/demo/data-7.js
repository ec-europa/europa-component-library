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
      label: 'Policy Initiatives',
      path: exampleLink,
      info: {
        title: 'Policy Initiatives',
        content: 'Leading EU policy development.',
        link: {
          link: {
            label: 'Explore initiatives',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
                alt: 'Policy initiative banner',
              },
            },
            label: 'Policy Focus',
            path: exampleLink,
            description: '<p>Key policy updates for 2025.</p>',
          },
          {
            label: 'External Policy Resource',
            path: exampleLink,
            external: true,
            sr_external: 'External policy site',
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
        },
        {
          label: 'Policy Sector B',
          path: exampleLink,
          sublink_id: 'policy-sector-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
            { label: 'Subitem B.3', path: exampleLink },
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
                label: 'Sector Highlight',
                path: exampleLink,
                description: '<p>Advancing sector policies.</p>',
              },
              {
                label: 'Sector Resource',
                path: exampleLink,
                extra_attributes: [{ name: 'sector-featured-link' }],
              },
            ],
          },
        },
        {
          label: 'Policy Sector C with Extended Title',
          path: exampleLink,
          sublink_id: 'policy-sector-c-id',
          see_all: true,
          see_all_label: 'View all sectors',
        },
      ],
    },
    {
      label: 'EU Governance',
      path: exampleLink,
      info: {
        title: 'EU Governance',
        content: 'Understanding EU institutions.',
        link: {
          link: {
            label: 'Learn about governance',
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
          ],
        },
        {
          label: 'Institution 2',
          path: exampleLink,
          sublink_id: 'institution-2-id',
        },
      ],
    },
    {
      label: 'Innovation Hub',
      path: exampleLink,
      info: {
        title: 'Innovation Hub',
        content: 'Fostering EU research and innovation.',
        link: {
          link: {
            label: 'Discover innovation',
          },
        },
      },
      featured: {
        title: 'Featured Innovations',
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image4.jpg',
                alt: 'Innovation banner',
              },
            },
            label: 'Tech Breakthrough',
            path: exampleLink,
            description: '<p>Leading EU tech projects.</p>',
          },
          {
            label: 'Global Research',
            path: exampleLink,
            external: true,
            sr_external: 'External research link',
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
                alt: 'Research banner',
              },
            },
          },
          {
            label: 'Future Tech',
            path: exampleLink,
            description: '<p>Next-generation technologies.</p>',
            extra_attributes: [{ name: 'future-tech-link' }],
          },
          {
            label: 'Innovation Network',
            path: exampleLink,
            external: true,
            sr_external: 'External innovation network',
          },
        ],
      },
      children: [
        {
          label: 'Research Initiative 1',
          path: exampleLink,
          sublink_id: 'research-initiative-1-id',
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
          ],
        },
        {
          label: 'Research Initiative 2',
          path: exampleLink,
          sublink_id: 'research-initiative-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
          ],
        },
        {
          label: 'Research Initiative 3 with Long Name',
          path: exampleLink,
          sublink_id: 'research-initiative-3-id',
          see_all: true,
          see_all_label: 'See all initiatives',
        },
      ],
    },
    {
      label: 'Sustainability Programs',
      path: exampleLink,
      info: {
        title: 'Sustainability Programs',
        content: 'Advancing EU environmental goals.',
        link: {
          link: {
            label: 'Explore sustainability',
          },
        },
      },
      children: [
        {
          label: 'Green Project 1',
          path: exampleLink,
          sublink_id: 'green-project-1-id',
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
          ],
        },
        {
          label: 'Green Project 2',
          path: exampleLink,
          sublink_id: 'green-project-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
          ],
        },
        {
          label: 'Green Project 3',
          path: exampleLink,
          sublink_id: 'green-project-3-id',
        },
      ],
    },
    {
      label: 'Economic Growth',
      path: exampleLink,
      info: {
        title: 'Economic Growth',
        content: 'Promoting EU economic development.',
        link: {
          link: {
            label: 'Explore economic initiatives',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image6.jpg',
                alt: 'Economic banner',
              },
            },
            label: 'Economic Initiative',
            path: exampleLink,
            description: '<p>Boosting EU economy.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Economic Plan 1',
          path: exampleLink,
          sublink_id: 'economic-plan-1-id',
          children: [
            { label: 'Subitem 1.1', path: exampleLink },
            { label: 'Subitem 1.2', path: exampleLink },
            { label: 'Subitem 1.3', path: exampleLink },
            { label: 'Subitem 1.4', path: exampleLink },
            { label: 'Subitem 1.5', path: exampleLink },
            { label: 'Subitem 1.6', path: exampleLink },
            { label: 'Subitem 1.7', path: exampleLink },
          ],
        },
        {
          label: 'Economic Plan 2 with Long Name',
          path: exampleLink,
          sublink_id: 'economic-plan-2-id',
          see_all: true,
          see_all_label: 'View all plans',
        },
      ],
    },
  ],
};
