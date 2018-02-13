module.exports = {
  title: 'Language select (Page)',
  label: 'Language select (Page)',
  tags: ['molecule'],
  status: 'ready',
  context: {
    _demo: {
      scripts: `document.addEventListener('DOMContentLoaded', function () {
        ECL.eclLangSelectPages({
          dropdownOnChange: function (event) { alert('language changed to: ' + event.target.value ) }
        });
      });`,
    },
  },
  variants: [
    {
      name: 'default',
      title: 'Language select (Page) - Default',
      label: 'Default',
      context: {
        unavailable: 'français',
        current: 'Nederlands',
        options: [
          {
            href: '/en',
            hreflang: 'en',
            label: 'English',
            lang: 'en',
          },
          {
            href: '/hr',
            hreflang: 'hr',
            label: 'hrvatski',
            lang: 'hr',
          },
          {
            href: '/it',
            hreflang: 'it',
            label: 'italiano',
            lang: 'it',
          },
          {
            href: '/lv',
            hreflang: 'lv',
            label: 'latviesu',
            lang: 'lv',
          },
          {
            href: '/hu',
            hreflang: 'hu',
            label: 'magyar',
            lang: 'hu',
          },
        ],
      },
    },
    {
      name: 'primary',
      title: 'Language select (Page) - Primary',
      label: 'Primary',
      context: {
        theme: 'primary',
        unavailable: 'français',
        current: 'Nederlands',
        options: [
          {
            href: '/en',
            hreflang: 'en',
            label: 'English',
            lang: 'en',
            variant: 'inverted',
          },
          {
            href: '/hr',
            hreflang: 'hr',
            label: 'hrvatski',
            lang: 'hr',
            variant: 'inverted',
          },
          {
            href: '/it',
            hreflang: 'it',
            label: 'italiano',
            lang: 'it',
            variant: 'inverted',
          },
          {
            href: '/lv',
            hreflang: 'lv',
            label: 'latviesu',
            lang: 'lv',
            variant: 'inverted',
          },
          {
            href: '/hu',
            hreflang: 'hu',
            label: 'magyar',
            lang: 'hu',
            variant: 'inverted',
          },
        ],
      },
    },
  ],
};
