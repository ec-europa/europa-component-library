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
      label: 'EU Policy Strategies',
      path: exampleLink,
      info: {
        title: 'EU Policy Strategies',
        content: 'Guiding EU policy development.',
        link: {
          link: {
            label: 'Explore strategies',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                alt: 'Policy strategy banner',
              },
            },
            label: 'Policy Highlight',
            path: exampleLink,
            description: '<p>Key policy updates for 2025.</p>',
          },
          {
            label: 'External Policy Link',
            path: exampleLink,
            external: true,
            sr_external: 'External policy resource',
          },
        ],
      },
      children: [
        {
          label: 'Policy Domain A',
          path: exampleLink,
          sublink_id: 'policy-domain-a-id',
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
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
                    alt: 'Domain highlight banner',
                  },
                },
                label: 'Domain Feature',
                path: exampleLink,
                description: '<p>Leading policy initiatives.</p>',
              },
              {
                label: 'Domain Resource',
                path: exampleLink,
                extra_attributes: [{ name: 'domain-featured-link' }],
              },
            ],
          },
        },
        {
          label: 'Policy Domain B',
          path: exampleLink,
          sublink_id: 'policy-domain-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
            { label: 'Subitem B.3', path: exampleLink },
            { label: 'Subitem B.4', path: exampleLink },
            { label: 'Subitem B.5', path: exampleLink },
            { label: 'Subitem B.6', path: exampleLink },
          ],
        },
        {
          label: 'Policy Domain C with Extended Title',
          path: exampleLink,
          sublink_id: 'policy-domain-c-id',
          see_all: true,
          see_all_label: 'View all domains',
        },
      ],
    },
    {
      label: 'Governance Framework',
      path: exampleLink,
      info: {
        title: 'Governance Framework',
        content: 'Understanding EU institutions.',
        link: {
          link: {
            label: 'Learn about governance',
          },
        },
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
            { label: 'Subitem A.7', path: exampleLink },
          ],
        },
        {
          label: 'Institution B',
          path: exampleLink,
          sublink_id: 'institution-b-id',
          children: [
            { label: 'Subitem B.1', path: exampleLink },
            { label: 'Subitem B.2', path: exampleLink },
            { label: 'Subitem B.3', path: exampleLink },
            { label: 'Subitem B.4', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Science & Technology',
      path: exampleLink,
      info: {
        title: 'Science and Technology',
        content: 'Fostering EU innovation.',
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
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
                alt: 'Innovation banner',
              },
            },
            label: 'Tech Breakthrough',
            path: exampleLink,
            description: '<p>Leading EU tech projects.</p>',
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
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg',
                alt: 'Research banner',
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
            { label: 'Subitem 1.12', path: exampleLink },
            { label: 'Subitem 1.13', path: exampleLink },
            { label: 'Subitem 1.14', path: exampleLink },
            { label: 'Subitem 1.15', path: exampleLink },
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
            { label: 'Subitem 2.4', path: exampleLink },
            { label: 'Subitem 2.5', path: exampleLink },
          ],
        },
        {
          label: 'Research Initiative 3 with Long Title',
          path: exampleLink,
          sublink_id: 'research-initiative-3-id',
          see_all: true,
          see_all_label: 'See all initiatives',
        },
      ],
    },
    {
      label: 'Green Strategies',
      path: exampleLink,
      info: {
        title: 'Green Strategies',
        content: 'Advancing EU sustainability goals.',
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
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image12.jpg',
                    alt: 'Green project banner',
                  },
                },
                label: 'Sustainability Initiative',
                path: exampleLink,
                description: '<p>Leading green efforts.</p>',
              },
              {
                label: 'Green Resource',
                path: exampleLink,
                external: true,
                sr_external: 'External sustainability resource',
              },
            ],
          },
        },
        {
          label: 'Green Project 2',
          path: exampleLink,
          sublink_id: 'green-project-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Economic Advancement',
      path: exampleLink,
      info: {
        title: 'Economic Advancement',
        content: 'Promoting EU economic growth.',
        link: {
          link: {
            label: 'Explore economic advancement',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
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
            { label: 'Subitem 1.8', path: exampleLink },
            { label: 'Subitem 1.9', path: exampleLink },
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
