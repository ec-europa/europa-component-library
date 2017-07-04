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
      avatar: 'http://lorempixel.com/160/160/business/',
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
          extraAttributes: [
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
      details:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    context_nav: {
      label: 'Department',
      items: [
        {
          target: '#',
          title: 'Trade',
        },
        {
          target: '#',
          title: ' European Anti-Fraud Office',
        },
      ],
    },
  },
};
