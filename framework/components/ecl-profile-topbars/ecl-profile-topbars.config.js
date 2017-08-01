module.exports = {
  title: 'Profile topbars',
  label: 'Profile topbars',
  status: 'ready',
  tags: ['organism'],
  context: {
    _demo: {
      scripts:
        "document.addEventListener('DOMContentLoaded', function () { ECL.initExpandables(); });",
    },
    profile: {
      image: {
        src: 'http://lorempixel.com/output/business-q-c-160-160-10.jpg',
        alt: 'Example profile image',
      },
      expandable: {
        button: {
          label: 'See details',
          extraClass: 'ecl-expandable__button ecl-profile-topbar__pane-button',
          extraAttributes: [
            {
              name: 'aria-controls',
              value: 'ecl-profile-topbar__expandable-1',
            },
            { name: 'aria-expanded', value: 'false' },
            { name: 'id', value: 'ecl-profile-topbar__expandable-button-1' },
            { name: 'type', value: 'button' },
          ],
        },
        expandable_body: {
          extra_attributes: [
            {
              name: 'aria-hidden',
              value: 'true',
            },
            {
              name: 'aria-labelledby',
              value: 'ecl-profile-topbar__expandable-button-1',
            },
            { name: 'id', value: 'ecl-profile-topbar__expandable-1' },
            { name: 'class', value: 'ecl-profile-topbar__collapsible-area' },
          ],
        },
      },
    },
    context_nav: {
      label: 'Department',
      items: [
        {
          href: '#',
          label: 'Trade',
        },
        {
          href: '#',
          label: ' European Anti-Fraud Office',
        },
      ],
    },
  },
};
