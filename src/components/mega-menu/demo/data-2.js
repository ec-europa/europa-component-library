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
      label: 'Welcome',
      path: exampleLink,
    },
    {
      label: 'Policy Updates',
      path: exampleLink,
      info: {
        title: 'Policy Updates Overview',
        content: 'Explore the latest policy developments and initiatives.',
        link: {
          link: {
            label: 'Learn more',
          },
        },
      },
      featured: {
        items: [
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image2.jpg',
                alt: 'Policy banner',
              },
            },
            label: 'Policy Highlight',
            path: exampleLink,
            description: '<p>Key policy changes for 2025.</p>',
          },
          {
            label: 'External Policy Resource',
            path: exampleLink,
            external: true,
            sr_external: 'Link to external policy site',
          },
        ],
      },
      children: [
        {
          label: 'Policy Item 1',
          path: exampleLink,
          sublink_id: 'policy-item-1-id',
          children: [
            { label: 'Subitem 1.1', path: exampleLink },
            { label: 'Subitem 1.2', path: exampleLink },
          ],
        },
        {
          label: 'Policy Item 2',
          path: exampleLink,
          see_all: true,
          see_all_label: 'View all policies',
          sublink_id: 'policy-item-2-id',
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image3.jpg',
                    alt: 'Initiative banner',
                  },
                },
              },
              {
                label: 'Featured Policy',
                path: exampleLink,
                description: 'Details on major policy initiatives.',
                extra_attributes: [{ name: 'policy-featured-link' }],
              },
            ],
          },
        },
      ],
    },
    {
      label: 'EU Governance',
      path: exampleLink,
      info: {
        title: 'EU Governance Insights',
        content: 'Learn about the EU’s governance structure.',
        link: {
          link: {
            label: 'Explore governance',
          },
        },
      },
      children: [
        { label: 'Governance Item 1', path: exampleLink },
        { label: 'Governance Item 2', path: exampleLink },
        {
          label: 'Governance Item 3',
          path: exampleLink,
          children: [
            { label: 'Subitem 3.1', path: exampleLink },
            { label: 'Subitem 3.2', path: exampleLink },
            { label: 'Subitem 3.3', path: exampleLink },
            { label: 'Subitem 3.4', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Innovation Hub',
      path: exampleLink,
      featured: {
        items: [
          {
            label: 'Innovation Spotlight',
            path: exampleLink,
            description: '<p>Showcasing EU innovation projects.</p>',
            extra_attributes: [{ name: 'innovation-featured-link' }],
          },
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image7.jpg',
                alt: 'Innovation banner',
              },
            },
            label: 'Tech Breakthrough',
            path: exampleLink,
          },
          {
            label: 'Research Link',
            path: exampleLink,
            external: true,
            sr_external: 'External research site',
          },
        ],
      },
      children: [
        {
          label: 'Tech Item 1',
          path: exampleLink,
          sublink_id: 'tech-item-1-id',
          children: [
            { label: 'Tech Subitem 1', path: exampleLink },
            { label: 'Tech Subitem 2', path: exampleLink },
            { label: 'Tech Subitem 3', path: exampleLink },
          ],
        },
        { label: 'Tech Item 2', path: exampleLink },
        {
          label: 'Tech Item 3 with Long Name',
          path: exampleLink,
          see_all: true,
          see_all_label: 'See all tech projects',
          sublink_id: 'tech-item-3-id',
          featured: {
            title: 'Highlighted Tech',
            items: [
              { label: 'Tech Feature 1', path: exampleLink },
              { label: 'Tech Feature 2', path: exampleLink },
            ],
          },
        },
      ],
    },
    {
      label: 'Community',
      path: exampleLink,
      container: `<div class="ecl">
        <h2 class="ecl-u-mt-none ecl-u-mt-l-l">Community Engagement</h2>
        <p>Join our community events and initiatives.</p>
      </div>`,
    },
    {
      label: 'Events',
      promotional: true,
      path: exampleLink,
    },
  ],
};
