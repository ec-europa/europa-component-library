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
      label: 'EU Policy Framework',
      path: exampleLink,
      info: {
        title: 'EU Policy Framework',
        content: 'Driving EU policy advancements.',
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
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                alt: 'Policy banner',
              },
            },
            label: 'Policy Highlight',
            path: exampleLink,
            description: '<p>Major policy updates for 2025.</p>',
          },
        ],
      },
      children: [
        {
          label: 'Policy Domain 1',
          path: exampleLink,
          sublink_id: 'policy-domain-1-id',
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
          featured: {
            items: [
              {
                label: 'Domain Feature',
                path: exampleLink,
                description: '<p>Key policy initiatives.</p>',
                extra_attributes: [{ name: 'domain-featured-link' }],
              },
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
                    alt: 'Domain banner',
                  },
                },
              },
            ],
          },
        },
        {
          label: 'Policy Domain 2',
          path: exampleLink,
          sublink_id: 'policy-domain-2-id',
          see_all: true,
          see_all_label: 'View all domains',
        },
        {
          label: 'Policy Domain 3',
          path: exampleLink,
        },
      ],
    },
    {
      label: 'Governance & Policy',
      path: exampleLink,
      info: {
        title: 'Governance and Policy',
        content: 'Understanding EU institutions and policies.',
        link: {
          link: {
            label: 'Learn more',
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
          ],
        },
        {
          label: 'Institution B',
          path: exampleLink,
        },
      ],
    },
    {
      label: 'Research & Technology',
      path: exampleLink,
      info: {
        title: 'Research and Technology',
        content: 'Advancing EU innovation and science.',
        link: {
          link: {
            label: 'Discover research',
          },
        },
      },
      children: [
        {
          label: 'Tech Project 1',
          path: exampleLink,
          sublink_id: 'tech-project-1-id',
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
          featured: {
            title: 'Featured Tech Innovations',
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
                    alt: 'Tech innovation banner',
                  },
                },
                label: 'Breakthrough Project',
                path: exampleLink,
                description: '<p>Leading EU tech advancements.</p>',
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
                description: '<p>Supporting tech startups.</p>',
              },
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg',
                    alt: 'Research banner',
                  },
                },
              },
              {
                label: 'Global Research Hub',
                path: exampleLink,
                external: true,
                sr_external: 'External research link',
                extra_attributes: [{ name: 'global-research-link' }],
              },
              {
                label: 'Future Technology',
                path: exampleLink,
                description: '<p>Next-generation tech solutions.</p>',
                extra_classes: 'future-tech-class',
              },
            ],
          },
        },
        {
          label: 'Tech Project 2',
          path: exampleLink,
          sublink_id: 'tech-project-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
            { label: 'Subitem 2.3', path: exampleLink },
          ],
        },
        {
          label: 'Tech Project 3 with Long Name',
          path: exampleLink,
          sublink_id: 'tech-project-3-id',
          see_all: true,
          see_all_label: 'See all projects',
        },
      ],
    },
    {
      label: 'Environmental Strategy',
      path: exampleLink,
      info: {
        title: 'Environmental Strategy',
        content: 'Promoting EU sustainability goals.',
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
          ],
        },
        {
          label: 'Green Plan 2',
          path: exampleLink,
          sublink_id: 'green-plan-2-id',
          children: [
            { label: 'Subitem 2.1', path: exampleLink },
            { label: 'Subitem 2.2', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Economic Initiatives',
      path: exampleLink,
      info: {
        title: 'Economic Initiatives',
        content: 'Boosting EU economic growth.',
        link: {
          link: {
            label: 'Explore initiatives',
          },
        },
      },
      children: [
        {
          label: 'Economic Program 1',
          path: exampleLink,
          sublink_id: 'economic-program-1-id',
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
          label: 'Economic Program 2',
          path: exampleLink,
          sublink_id: 'economic-program-2-id',
          see_all: true,
          see_all_label: 'View all programs',
        },
      ],
    },
  ],
};
