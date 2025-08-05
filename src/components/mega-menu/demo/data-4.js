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
      label: 'EU Policies',
      path: exampleLink,
      info: {
        title: 'EU Policy Framework',
        content: 'Explore policies driving EU progress.',
        link: {
          link: {
            label: 'Discover policies',
          },
        },
      },
      children: [
        {
          label: 'Policy Sector 1',
          path: exampleLink,
          sublink_id: 'policy-sector-1-id',
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
            {
              label: 'Subitem 1.13',
              path: exampleLink,
              external: true,
              sr_external: 'External policy resource',
            },
            { label: 'Subitem 1.14', path: exampleLink },
            { label: 'Subitem 1.15', path: exampleLink },
          ],
          featured: {
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image11.jpg',
                    alt: 'Policy highlight banner',
                  },
                },
                label: 'Major Policy Initiative',
                path: exampleLink,
                description: '<p>Key updates for 2025 policies.</p>',
                extra_attributes: [{ name: 'policy-featured-link' }],
              },
              {
                label: 'External Policy Link',
                path: exampleLink,
                external: true,
                sr_external: 'Link to external policy site',
              },
            ],
          },
        },
        { label: 'Policy Sector 2', path: exampleLink },
        {
          label: 'Policy Sector 3 with Detailed Title',
          path: exampleLink,
          sublink_id: 'policy-sector-3-id',
          see_all: true,
          see_all_label: 'View all sectors',
        },
      ],
    },
    {
      label: 'Governance Structure',
      path: exampleLink,
      info: {
        title: 'EU Governance Overview',
        content: 'Learn about EU institutions and leadership.',
        link: {
          link: {
            label: 'Explore governance',
          },
        },
      },
      children: [{ label: 'Institution 1', path: exampleLink }],
    },
    {
      label: 'Innovation & Research',
      path: exampleLink,
      info: {
        title: 'Innovation and Research',
        content: 'Advancing EU science and technology.',
        link: {
          link: {
            label: 'Discover projects',
          },
        },
      },
      children: [
        {
          label: 'Research Program 1',
          path: exampleLink,
          sublink_id: 'research-program-1-id',
          children: [
            { label: 'Project 1.1', path: exampleLink },
            { label: 'Project 1.2', path: exampleLink },
            { label: 'Project 1.3', path: exampleLink },
            { label: 'Project 1.4', path: exampleLink },
            { label: 'Project 1.5', path: exampleLink },
            { label: 'Project 1.6', path: exampleLink },
            { label: 'Project 1.7', path: exampleLink },
            { label: 'Project 1.8', path: exampleLink },
            { label: 'Project 1.9', path: exampleLink },
            { label: 'Project 1.10', path: exampleLink },
            { label: 'Project 1.11', path: exampleLink },
            { label: 'Project 1.12', path: exampleLink },
            { label: 'Project 1.13', path: exampleLink },
            { label: 'Project 1.14', path: exampleLink },
            { label: 'Project 1.15', path: exampleLink },
            { label: 'Project 1.16', path: exampleLink },
            { label: 'Project 1.17', path: exampleLink },
            { label: 'Project 1.18', path: exampleLink },
            { label: 'Project 1.19', path: exampleLink },
            { label: 'Project 1.20', path: exampleLink },
          ],
          featured: {
            title: 'Highlighted Research',
            items: [
              {
                picture: {
                  img: {
                    src: 'https://inno-ecl.s3.amazonaws.com/media/examples/example-image8.jpg',
                    alt: 'Research banner',
                  },
                },
              },
              {
                label: 'Research Breakthrough',
                path: exampleLink,
                description: '<p>Cutting-edge EU research projects.</p>',
              },
              {
                label: 'External Research',
                path: exampleLink,
                external: true,
                sr_external: 'External research link',
                extra_attributes: [{ name: 'research-featured-link' }],
              },
            ],
          },
        },
        { label: 'Research Program 2', path: exampleLink },
        { label: 'Research Program 3', path: exampleLink },
        {
          label: 'Research Program 4 with Extended Name',
          path: exampleLink,
          sublink_id: 'research-program-4-id',
          see_all: true,
          see_all_label: 'See all programs',
          children: [
            { label: 'Project 4.1', path: exampleLink },
            { label: 'Project 4.2', path: exampleLink },
          ],
        },
      ],
    },
    {
      label: 'Citizen Engagement',
      path: exampleLink,
      container: `<div class="ecl">
        <h2 class="ecl-u-mt-none ecl-u-mt-l-l">Get Involved</h2>
        <p>Join EU community initiatives and events.</p>
      </div>`,
      featured: {
        items: [
          {
            label: 'Community Event',
            path: exampleLink,
            description: '<p>Upcoming citizen engagement event.</p>',
          },
        ],
      },
    },
  ],
};
