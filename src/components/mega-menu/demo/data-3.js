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
      label: 'Homepage',
      path: exampleLink,
    },
    {
      label: 'Policy & Initiatives',
      path: exampleLink,
      info: {
        title: 'Policy & Initiatives',
        content: 'Discover EU policies and initiatives shaping the future.',
        link: {
          link: {
            label: 'Explore more',
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
            {
              label: 'Subitem 1.5',
              path: exampleLink,
              external: true,
              sr_external: 'External policy link',
            },
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
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                    alt: 'Policy banner',
                  },
                },
                label: 'Key Policy',
                path: exampleLink,
                description: '<p>Highlighting major policy updates.</p>',
              },
            ],
          },
        },
        { label: 'Policy Area 2', path: exampleLink },
        {
          label: 'Policy Area 3 with Extended Name',
          path: exampleLink,
          sublink_id: 'policy-area-3-id',
          see_all: true,
          see_all_label: 'View all policies',
          children: [
            { label: 'Subitem 3.1', path: exampleLink },
            { label: 'Subitem 3.2', path: exampleLink },
            { label: 'Subitem 3.3', path: exampleLink },
          ],
        },
        { label: 'Policy Area 4', path: exampleLink },
        { label: 'Policy Area 5', path: exampleLink },
      ],
    },
    {
      label: 'Governance & Leadership',
      path: exampleLink,
      info: {
        title: 'Governance & Leadership',
        content: 'Understand EU leadership structures.',
        link: {
          link: {
            label: 'Learn more',
          },
        },
      },
      featured: {
        items: [
          {
            label: 'Leadership Spotlight',
            path: exampleLink,
            description: '<p>Key figures in EU governance.</p>',
            extra_attributes: [{ name: 'leadership-featured-link' }],
          },
          {
            picture: {
              img: {
                src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image9.jpg',
                alt: 'Governance banner',
              },
            },
          },
        ],
      },
      children: [
        { label: 'Governance Item 1', path: exampleLink },
        { label: 'Governance Item 2', path: exampleLink },
      ],
    },
    {
      label: 'Research & Development',
      path: exampleLink,
      info: {
        title: 'Research & Development',
        content: 'Advancing EU innovation and research.',
        link: {
          link: {
            label: 'Discover projects',
          },
        },
      },
      children: [
        {
          label: 'R&D Item 1 with Long Title',
          path: exampleLink,
          sublink_id: 'rnd-item-1-id',
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
            title: 'Highlighted R&D',
            items: [
              { label: 'R&D Feature 1', path: exampleLink },
              { label: 'R&D Feature 2', path: exampleLink },
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image10.jpg',
                    alt: 'R&D banner',
                  },
                },
                label: 'Innovation Project',
                path: exampleLink,
                description: '<p>Leading research initiatives.</p>',
              },
            ],
          },
        },
        { label: 'R&D Item 2', path: exampleLink },
        { label: 'R&D Item 3', path: exampleLink },
        { label: 'R&D Item 4', path: exampleLink },
        { label: 'R&D Item 5', path: exampleLink },
        { label: 'R&D Item 6', path: exampleLink },
      ],
    },
    {
      label: 'Community Engagement',
      path: exampleLink,
      container: `<div class="ecl">
        <h2 class="ecl-u-mt-none ecl-u-mt-l-l">Engage with Us</h2>
        <p>Participate in EU community programs and events.</p>
      </div>`,
    },
    {
      label: 'Upcoming Events',
      promotional: true,
      path: exampleLink,
    },
  ],
};
