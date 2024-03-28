// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'demo',
  title: 'ecl mega menu demo',
  toggle: {
    link: {
      label: 'Menu',
      path: exampleLink,
      hide_label: true,
    },
    icon: {
      path: '/icons.svg',
      name: 'hamburger',
      size: 'm',
    },
  },
  close: {
    label: 'Close',
    icon: {
      path: '/icons.svg',
      name: 'close',
      size: 'm',
    },
  },
  back_label: 'Back',
  see_all_label: 'View all',
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'News and media',
      path: exampleLink,
      trigger_aria_label: 'Access news and media children',
      link_aria_label: 'Link to the News and media page',
      children: [
        {
          label: 'Item 2.1',
          path: exampleLink,
          see_all: true,
          trigger_aria_label: "Access item 2.1's children",
          link_aria_label: "Link to the 2.1 item's page",
          featured: {
            title: 'featured column',
            content: `<article class="ecl-navigation-list__item">
    <picture class="ecl-picture ecl-navigation-list__picture"><img class="ecl-navigation-list__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="Alt text for the image" /></picture>
    <div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
      <div class="ecl-content-block__title" data-ecl-title-link><a href="/example#qspea" class="ecl-link ecl-link--standalone">Title 1</a></div>
      <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus</div>
    </div>
  </article>`,
            items: [
              { label: 'Featured link 1', path: exampleLink },
              { label: 'Featured link 2', path: exampleLink },
              { label: 'Featured link 3', path: exampleLink },
              { label: 'Featured link 4', path: exampleLink, external: true },
            ],
          },
          children: [
            {
              label: 'Item 2.1 subitem 1',
              path: exampleLink,
            },
            { label: 'Item 2.1 subitem 2', path: exampleLink, external: true },
            { label: 'Item 2.1 subitem 3', path: exampleLink },
            { label: 'Item 2.1 subitem 4', path: exampleLink },
            { label: 'Item 2.1 subitem 5', path: exampleLink },
          ],
        },
        { label: 'Item 2.2', path: exampleLink },
        {
          label:
            'Item 2.3 that has a very long label by no other mean that showing how after the third line the text will be trimmed, but not if the link is a categroy title.',
          path: exampleLink,
          trigger_aria_label: "Access item 2.3's children",
          link_aria_label: 'Link to the 2.3 item page',
          children: [
            { label: 'Item 2.3 subitem 1', path: exampleLink },
            {
              label: 'Item 2.3 subitem 2',
              path: exampleLink,
              is_current: true,
            },
            { label: 'Item 2.3 subitem 3', path: exampleLink },
          ],
        },
        { label: 'Item 2.4', path: exampleLink, is_current: true },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink, external: true },
      ],
    },
    {
      label: 'About the European Commission',
      path: exampleLink,
      trigger_aria_label: "Access about the european commission's children",
      link_aria_label: 'Link to About the European Commission page',
      children: [
        { label: 'Item 3.1', path: exampleLink },
        { label: 'Item 3.2', path: exampleLink },
        { label: 'Item 3.3', path: exampleLink },
      ],
    },
    {
      label: 'Key priorities',
      path: exampleLink,
      trigger_aria_label: "Access key priorities' children",
      link_aria_label: 'Link to Key priorities page',
      children: [
        {
          label: 'Aid, Development cooperation, Fundamental rights',
          path: exampleLink,
        },
        { label: 'Energy, Climate change, Environment', path: exampleLink },
        { label: 'Law', path: exampleLink },
        { label: 'EU regional and urban development', path: exampleLink },
        {
          label: 'Research and innovation',
          path: exampleLink,
          see_all: true,
          featured: {
            title: 'featured column',
            content: `<article class="ecl-navigation-list__item">
    <picture class="ecl-picture ecl-navigation-list__picture"><img class="ecl-navigation-list__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="Alt text for the image" /></picture>
    <div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
      <div class="ecl-content-block__title" data-ecl-title-link><a href="/example#qspea" class="ecl-link ecl-link--standalone">Title 1</a></div>
      <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus</div>
    </div>
  </article>`,
          },
          trigger_aria_label: "Access research and innovation's children",
          link_aria_label: 'Link to research and innovation page',
          children: [
            { label: 'How we provide aid', path: exampleLink },
            { label: 'Who we work with', path: exampleLink },
            { label: 'Get involved in EU humanitarian aid', path: exampleLink },
          ],
        },
        { label: 'Food, Farming, Fisheries', path: exampleLink },
      ],
    },
    {
      label: 'EU Policies',
      path: exampleLink,
      trigger_aria_label: "Access EU Policies' children",
      link_aria_label: 'Link to the EU Policies page',
      children: [
        {
          label: 'Item 5.1',
          path: exampleLink,
          see_all: true,
          trigger_aria_label: "Access item 5.1's children",
          link_aria_label: 'Link to the Item 5.1 page',
          featured: {
            title: 'featured column',
            content: `<article class="ecl-navigation-list__item">
    <picture class="ecl-picture ecl-navigation-list__picture"><img class="ecl-navigation-list__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="Alt text for the image" /></picture>
    <div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
      <div class="ecl-content-block__title" data-ecl-title-link><a href="/example#qspea" class="ecl-link ecl-link--standalone">Title 1</a></div>
      <div class="ecl-content-block__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida ipsum ut lorem cursus</div>
    </div>
  </article>`,
          },
          children: [
            { label: 'Item 5.1 subitem 1', path: exampleLink },
            { label: 'Item 5.1 subitem 2', path: exampleLink },
            { label: 'Item 5.1 subitem 3', path: exampleLink },
            { label: 'Item 5.1 subitem 4', path: exampleLink },
            { label: 'Item 5.1 subitem 5', path: exampleLink },
            { label: 'Item 5.1 subitem 6', path: exampleLink },
            { label: 'Item 5.1 subitem 7', path: exampleLink },
            { label: 'Item 5.1 subitem 8', path: exampleLink },
            { label: 'Item 5.1 subitem 9', path: exampleLink },
            { label: 'Item 5.1 subitem 10', path: exampleLink },
            { label: 'Item 5.1 subitem 11', path: exampleLink },
            { label: 'Item 5.1 subitem 12', path: exampleLink },
            { label: 'Item 5.1 subitem 13 ', path: exampleLink },
            { label: 'Item 5.1 subitem 14', path: exampleLink },
            { label: 'Item 5.1 subitem 15', path: exampleLink },
            { label: 'Item 5.1 subitem 16', path: exampleLink },
            { label: 'Item 5.1 subitem 17', path: exampleLink },
            { label: 'Item 5.1 subitem 18', path: exampleLink },
            { label: 'Item 5.1 subitem 19', path: exampleLink },
            { label: 'Item 5.1 subitem 20', path: exampleLink },
            { label: 'Item 5.1 subitem 21', path: exampleLink },
            { label: 'Item 5.1 subitem 22', path: exampleLink },
            { label: 'Item 5.1 subitem 23', path: exampleLink },
            { label: 'Item 5.1 subitem 24', path: exampleLink },
            { label: 'Item 5.1 subitem 25', path: exampleLink },
            { label: 'Item 5.1 subitem 26', path: exampleLink },
            { label: 'Item 5.1 subitem 27', path: exampleLink },
          ],
        },
        {
          label: 'Item 5.2',
          path: exampleLink,
          trigger_aria_label: "Access item 5.2's children",
          link_aria_label: 'Link to the Item 5.2 page',
          children: [
            { label: 'Item 5.2 subitem 1', path: exampleLink },
            { label: 'Item 5.2 subitem 2', path: exampleLink },
            { label: 'Item 5.2 subitem 3', path: exampleLink },
            { label: 'Item 5.2 subitem 4', path: exampleLink },
            { label: 'Item 5.2 subitem 5', path: exampleLink },
          ],
        },
        {
          label: 'Item 5.3',
          path: exampleLink,
          see_all: true,
          trigger_aria_label: "Access item 5.3's children",
          link_aria_label: 'Link to the Item 5.3 page',
          children: [
            { label: 'Item 5.3 subitem 1', path: exampleLink },
            { label: 'Item 5.3 subitem 2', path: exampleLink },
            { label: 'Item 5.3 subitem 3', path: exampleLink },
            { label: 'Item 5.3 subitem 4', path: exampleLink },
            { label: 'Item 5.3 subitem 5', path: exampleLink },
            { label: 'Item 5.3 subitem 6', path: exampleLink },
            { label: 'Item 5.3 subitem 7', path: exampleLink },
            { label: 'Item 5.3 subitem 8', path: exampleLink },
            { label: 'Item 5.3 subitem 9', path: exampleLink },
            { label: 'Item 5.3 subitem 10', path: exampleLink },
          ],
        },
        { label: 'Item 5.4', path: exampleLink },
        {
          label:
            'Item 5.5 with a very long label that will trigger the trimming after the third line also for an item without children',
          path: exampleLink,
        },
        { label: 'Item 5.6', path: exampleLink },
        { label: 'Item 5.7', path: exampleLink },
        { label: 'Item 5.8', path: exampleLink },
        { label: 'Item 5.9', path: exampleLink },
      ],
    },
    {
      label: 'Engage',
      path: exampleLink,
      container: `<div></div>`,
    },
    {
      label: 'Contact',
      path: exampleLink,
    },
  ],
};
