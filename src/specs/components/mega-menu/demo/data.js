// Simple content for demo
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

module.exports = {
  id: 'demo',
  title: 'Menu',
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
    hide_label: true,
  },
  back_label: 'Back',
  see_all_label: 'View all',
  icon_path: '/icons.svg',
  items: [
    { label: 'Home', path: exampleLink },
    {
      label: 'News and media',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
      link_aria_label: 'Link to News and media page',
      children: [
        {
          label: 'Item 2.1',
          path: exampleLink,
          see_all: true,
          is_current: true,
          trigger_aria_label: "Access item's children",
          link_aria_label: 'Link to the 2.1 item page',
          featured: {
            title: 'featured column',
            content: `<article class="ecl-card">
                <picture class="ecl-picture ecl-card__picture" aria-label="card image"><img class="ecl-card__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="card image" /></picture>
                <div class="ecl-card__body">
                  <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
                    <h1 class="ecl-content-block__title"><a class="ecl-link" href="#">Delivery on the priorities of items 2.1</a></h1>
                  </div>
                </div>
              </article>
              <article class="ecl-navigation-list__item ecl-navigation-list__item--no-border">
                <div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="">
                  <div class="ecl-content-block__link-container">
                    <ul class="ecl-content-block__link-list">
                      <li class="ecl-content-block__link-item"><a href="/component-library/example#aw24p" class="ecl-link ecl-link--standalone">Primary link 1</a></li>
                      <li class="ecl-content-block__link-item"><a href="/component-library/example#5t02k" class="ecl-link ecl-link--standalone">Primary link 2</a></li>
                      <li class="ecl-content-block__link-item">A simple string</li>
                      <li class="ecl-content-block__link-item"><a href="/component-library/example#6y5wj" class="ecl-link ecl-link--standalone">Primary link 3</a></li>
                    </ul>
                    <ul class="ecl-content-block__link-list">
                      <li class="ecl-content-block__link-item"><a href="/component-library/example#b2u8v" class="ecl-link ecl-link--standalone">Secondary link 1</a></li>
                      <li class="ecl-content-block__link-item"><a href="/component-library/example#goyou" class="ecl-link ecl-link--standalone">Secondary link 2</a></li>
                    </ul>
                  </div>
                </div>
              </article>`,
          },
          children: [
            {
              label: 'Item 2.1 subitem 1',
              path: exampleLink,
              is_current: true,
            },
            { label: 'Item 2.1 subitem 2', path: exampleLink },
            { label: 'Item 2.1 subitem 3', path: exampleLink },
            { label: 'Item 2.1 subitem 4', path: exampleLink },
            { label: 'Item 2.1 subitem 5', path: exampleLink },
          ],
        },
        { label: 'Item 2.2', path: exampleLink },
        {
          label:
            'Item 2.3 that has a very long label by no other mean that showing how after the third line the text will be trimmed, even in mobile where there is more space.',
          path: exampleLink,
          trigger_aria_label: "Access item's children",
          link_aria_label: 'Link to the 2.3 item page',
          children: [
            { label: 'Item 2.3 subitem 1', path: exampleLink },
            { label: 'Item 2.3 subitem 2', path: exampleLink },
            { label: 'Item 2.3 subitem 3', path: exampleLink },
          ],
        },
        { label: 'Item 2.4', path: exampleLink },
        { label: 'Item 2.5', path: exampleLink },
        { label: 'Item 2.6', path: exampleLink },
        { label: 'Item 2.7', path: exampleLink, external: true },
      ],
    },
    {
      label: 'About the European Commission',
      path: exampleLink,
      trigger_aria_label: "Access item's children",
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
      trigger_aria_label: "Access item's children",
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
            content: `<article class="ecl-card">
                <picture class="ecl-picture ecl-card__picture" aria-label="card image"><img class="ecl-card__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="card image" /></picture>
                <div class="ecl-card__body">
                  <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
                    <h1 class="ecl-content-block__title">Delivery on the priorities of research and innovation</h1>
                  </div>
                </div>
              </article>`,
          },
          trigger_aria_label: "Access item's children",
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
      trigger_aria_label: "Access item's children",
      link_aria_label: 'Link to the EU Policies page',
      children: [
        {
          label: 'Item 5.1',
          path: exampleLink,
          see_all: true,
          trigger_aria_label: "Access item's children",
          link_aria_label: 'Link to the Item 5.1 page',
          featured: {
            title: 'featured column',
            content: `<article class="ecl-card">
                <picture class="ecl-picture ecl-card__picture" aria-label="card image"><img class="ecl-card__image" src="https://inno-ecl.s3.amazonaws.com/media/examples/example-image.jpg" alt="card image" /></picture>
                <div class="ecl-card__body">
                  <div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block>
                    <h1 class="ecl-content-block__title">Delivery on the priorities of Item 5.1</h1>
                  </div>
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
          trigger_aria_label: "Access item's children",
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
          trigger_aria_label: "Access item's children",
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
    },
    {
      label: 'Contact',
      path: exampleLink,
    },
  ],
};
