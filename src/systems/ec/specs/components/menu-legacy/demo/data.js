// Simple content for demo
module.exports = {
  label: 'Menu',
  items: [
    { label: 'Home', href: '/example#menu1' },
    {
      label: 'Policy',
      href: '/example#menu2',
      isCurrent: true,
      children: [
        {
          items: [
            { label: 'Item 2.1', href: '/example#menu2-1' },
            { label: 'Item 2.2', href: '/example#menu2-2' },
            { label: 'Item 2.3', href: '/example#menu2-3' },
            { label: 'Item 2.4', href: '/example#menu2-4' },
            { label: 'Item 2.5', href: '/example#menu2-5' },
          ],
        },
        {
          items: [
            { label: 'Item 2.6', href: '/example#menu2-6' },
            { label: 'Item 2.7', href: '/example#menu2-7', isCurrent: true },
            { label: 'Item 2.8', href: '/example#menu2-8' },
            { label: 'Item 2.9', href: '/example#menu2-9' },
          ],
        },
        {
          items: [
            { label: 'Item 2.10', href: '/example#menu2-10' },
            { label: 'Item 2.11', href: '/example#menu2-11' },
            { label: 'Item 2.12', href: '/example#menu2-12' },
            { label: 'Item 2.13', href: '/example#menu2-13' },
          ],
        },
        {
          items: [
            { label: 'Item 2.14', href: '/example#menu2-14' },
            { label: 'Item 2.15', href: '/example#menu2-15' },
            { label: 'Item 2.16', href: '/example#menu2-16' },
            { label: 'Item 2.17', href: '/example#menu2-17' },
          ],
        },
      ],
    },
    {
      label: 'Advisor Bodies',
      href: '/example#menu3',
      children: [
        {
          title: 'Optional title 1',
          items: [
            { label: 'Item 3.1', href: '/example#menu3-1' },
            { label: 'Item 3.2', href: '/example#menu3-2' },
            { label: 'Item 3.3', href: '/example#menu3-3' },
            { label: 'Item 3.4', href: '/example#menu3-4' },
            { label: 'Item 3.5', href: '/example#menu3-5' },
          ],
        },
        {
          title: 'Optional title 2',
          items: [
            { label: 'Item 3.6', href: '/example#menu3-6' },
            { label: 'Item 3.7', href: '/example#menu3-7' },
            { label: 'Item 3.8', href: '/example#menu3-8' },
            { label: 'Item 3.9', href: '/example#menu3-9' },
            { label: 'Item 3.10', href: '/example#menu3-10' },
          ],
        },
      ],
    },
    {
      label: 'News & Events',
      href: '/example#menu4',
      children: [
        {
          title: 'Optional title 1',
          items: [
            { label: 'Item 4.1', href: '/example#menu4-1' },
            { label: 'Item 4.2', href: '/example#menu4-2' },
            { label: 'Item 4.3', href: '/example#menu4-3' },
            { label: 'Item 4.4', href: '/example#menu4-4' },
            { label: 'Item 4.5', href: '/example#menu4-5' },
          ],
        },
        {
          title: 'Optional title 2',
          items: [
            { label: 'Item 4.6', href: '/example#menu4-6' },
            { label: 'Item 4.7', href: '/example#menu4-7' },
            { label: 'Item 4.8', href: '/example#menu4-8' },
            { label: 'Item 4.9', href: '/example#menu4-9' },
            { label: 'Item 4.10', href: '/example#menu4-10' },
          ],
        },
        {
          title: 'Optional title 3',
          items: [
            { label: 'Item 4.11', href: '/example#menu4-11' },
            { label: 'Item 4.12', href: '/example#menu4-12' },
            { label: 'Item 4.13', href: '/example#menu4-13' },
            { label: 'Item 4.14', href: '/example#menu4-14' },
            { label: 'Item 4.15', href: '/example#menu4-15' },
          ],
        },
      ],
    },
    {
      label: 'Contract and Fundings',
      href: '/example#menu5',
      children: [
        {
          title: 'Optional title 1',
          items: [
            { label: 'Item 5.1', href: '/example#menu5-1' },
            { label: 'Item 5.2', href: '/example#menu5-2' },
            { label: 'Item 5.3', href: '/example#menu5-3' },
            { label: 'Item 5.4', href: '/example#menu5-4' },
            { label: 'Item 5.5', href: '/example#menu5-5' },
          ],
        },
        {
          title: 'Optional title 2',
          items: [
            { label: 'Item 5.6', href: '/example#menu5-6' },
            { label: 'Item 5.7', href: '/example#menu5-7' },
            { label: 'Item 5.8', href: '/example#menu5-8' },
            { label: 'Item 5.9', href: '/example#menu5-9' },
            { label: 'Item 5.10', href: '/example#menu5-10' },
          ],
        },
        {
          title: 'Optional title 3',
          items: [
            { label: 'Item 5.11', href: '/example#menu5-11' },
            { label: 'Item 5.12', href: '/example#menu5-12' },
            { label: 'Item 5.13', href: '/example#menu5-13' },
            { label: 'Item 5.14', href: '/example#menu5-14' },
            { label: 'Item 5.15', href: '/example#menu5-15' },
          ],
        },
        {
          title: 'Optional title 4',
          items: [
            { label: 'Item 5.16', href: '/example#menu5-16' },
            { label: 'Item 5.17', href: '/example#menu5-17' },
            { label: 'Item 5.18', href: '/example#menu5-18' },
            { label: 'Item 5.19', href: '/example#menu5-19' },
            { label: 'Item 5.20', href: '/example#menu5-20' },
          ],
        },
      ],
    },
  ],
};
