/* eslint-disable camelcase */
import dataSiteHeaderEC from '@ecl/site-header/demo/data--ec';
import dataSiteFooterEC from '@ecl/site-footer/demo/data-core--ec';
import rating from '@ecl/rating-field/demo/data';

import dataMegaMenu from './data-menu';
const publicUrl = process.env.PUBLIC_URL || '';
const exampleLink = `${publicUrl}/example`;

// Site header
dataSiteHeaderEC.mega_menu = dataMegaMenu;
delete dataSiteHeaderEC.cta_link;
delete dataSiteHeaderEC.custom_action;
delete dataSiteHeaderEC.login_box;
delete dataSiteHeaderEC.banner_top;
delete dataSiteHeaderEC.notification;
delete dataSiteHeaderEC.site_name;
delete dataSiteFooterEC.co_owner;

// Rating field
rating.label = 'Rate this page';
rating.required = false;
rating.helper_text = '';
rating.optional_text = '';

// Breadcrumb
const breadcrumb = {
  links: [
    { label: 'Home', path: exampleLink },
    { label: 'About', path: exampleLink },
    { label: 'Organization', path: exampleLink },
    { label: 'The President' },
  ],
  navigation_text: 'You are here:',
  ellipsis_label: 'Show more breadcrumb items',
};

// Page Header
const page_header = {
  title: 'Ursula von der Leyen',
  description: 'President of the European Commission',
  breadcrumb: breadcrumb,
};

// Blockquote
const blockquote = {
  citation:
    'My view is that our era’s greatest challenges – from security to climate change to competitiveness - can only be solved through joint action. Against this backdrop, I believe Europe must choose its best option: Union.',
  author: 'President von der Leyen',
};

// Agenda block
const agenda_items = [
  {
    primary_meta: ['18 March 2026', 'Brussels'],
    title: 'Tripartite Social Summit',
  },
  {
    primary_meta: ['18 March 2026', 'Brussels'],
    title: 'Meeting with António Guterres, UN Secretary-General',
  },
  {
    primary_meta: ['19-20 March 2026', 'Brussels'],
    title: 'European Council',
  },
];

// Social media follow
const social_media = {
  description: 'Follow us',
  variant: 'horizontal',
  links: [
    {
      link: {
        path: exampleLink,
      },
      icon: {
        name: 'x',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        path: exampleLink,
      },
      icon: {
        name: 'facebook',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        path: exampleLink,
      },
      icon: {
        name: 'instagram',
        family: 'networks',
        style: 'monochrome',
      },
    },
    {
      link: {
        path: exampleLink,
      },
      icon: {
        name: 'linkedin',
        family: 'networks',
        style: 'monochrome',
      },
    },
  ],
};

// News block
const news = [
  {
    picture_zoom: true,
    primary_meta: '16 March 2026',

    title: {
      link: {
        type: 'standalone',
        label:
          'EU leaders work with countries of the region to bring peace and stability back to the Middle East and Gulf region',
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '4 min read',
      },
    ],
    picture: {
      position: 'top',
      img: {
        src: 'https://ec.europa.eu/avservices/avs/files/video6/repository/prod/photo/store//06/92/23/P-069223_00-05_03-MED-677887.jpg',
      },
    },
  },
  {
    picture_zoom: true,
    primary_meta: '27 February 2026',
    title: {
      link: {
        type: 'standalone',
        label:
          "President von der Leyen stresses EU's support to Eastern borders at first Eastern Border Regions High-Level Conference",
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '5 min read',
      },
    ],
    picture: {
      position: 'top',
      img: {
        src: 'https://ec.europa.eu/avservices/avs/files/video6/repository/prod/photo/store//06/91/24/P-069124_00-10_03-MED-360540.jpg',
      },
    },
  },
  {
    picture_zoom: true,
    primary_meta: '25 February 2026',
    title: {
      link: {
        type: 'standalone',
        label:
          "President von der Leyen visits Kyiv to reaffirm EU's unwavering support as Ukraine commemorates four years of war",
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '5 min read',
      },
    ],
    picture: {
      position: 'top',
      img: {
        src: 'https://ec.europa.eu/avservices/avs/files/video6/repository/prod/photo/store//06/92/23/P-069223_00-05_03-MED-677887.jpg',
      },
    },
  },
  {
    picture_zoom: true,
    image_position: 'top',
    primary_meta: '17 February 2026',
    title: {
      link: {
        type: 'standalone',
        label:
          '“Europe must become more independent – there is no other choice”, says President von der Leyen at 2026 Munich Security Conference',
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '4 min read',
      },
    ],
    picture: {
      position: 'top',
      img: {
        src: 'https://ec.europa.eu/avservices/avs/files/video6/repository/prod/photo/store//06/89/77/P-068977_00-19_03-MED-631002.jpg',
      },
    },
  },
];

// Statements block
const statements = [
  {
    primary_meta: ['Speech', '11 March 2026'],
    title: {
      link: {
        type: 'standalone',
        label:
          'Speech by President von der Leyen at the European Parliament plenary debate in preparation of the European Council meeting of 19-20 March 2026 and on the US-Israel military operations against the Iranian regime, its consequences and the need to support the people of Iran',
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '6 min read',
      },
    ],
  },
  {
    primary_meta: ['Speech', '10 March 2026'],
    title: {
      link: {
        type: 'standalone',
        label: 'Speech by President von der Leyen at the Nuclear Energy Summit',
        path: exampleLink,
      },
    },
    secondary_meta_direction: 'horizontal',
    secondary_meta: [
      {
        icon: {
          name: 'clock',
          size: 'xs',
        },
        label: '5 min read',
      },
    ],
  },
];

// Banner
const banner = {
  id: 'banner-example-video',
  video: {
    poster:
      'https://commission.europa.eu/profiles/contrib/ewcms/themes/ewcms_theme/images/default_animation_thumbnail.jpg',
    sources: [
      {
        src: 'https://commission.europa.eu/system/files/2025-12/President%20von%20der%20Leyen%20-%20video%20banner%2012-25.mp4',
        type: 'video/mp4',
      },
    ],
  },
  sr_play: 'Play video',
  sr_pause: 'Pause video',
  icon_path: '/icons.svg',
};

// Gallery
const gallery = {
  id: 'gallery-id',
  column: 4,
  expandable: false,
  picture_zoom: true,
  grid: true,
  items: [
    {
      thumbnail: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069224/00-01.jpg?itok=QGlSxthx',
        },
      },
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069224/00-01.jpg?itok=QGlSxthx',
        },
      },
      title:
        'Participation of Ursula von der Leyen, President of the European Commission, in the Nuclear Energy Summit',
      description:
        'Participation of Ursula von der Leyen, President of the European Commission, in the Nuclear Energy Summit',
    },
    {
      thumbnail: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2026-02/P-069076_00-49_02-HIGH-552395.jpg?h=0257d294&itok=1jkoqGOV',
        },
      },
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2026-02/P-069076_00-49_02-HIGH-552395.jpg?h=0257d294&itok=1jkoqGOV',
        },
      },
      title: 'Presidents von der Leyen, Costa and Zelenskyy',
      description: 'Presidents von der Leyen, Costa and Zelenskyy',
    },
    {
      thumbnail: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069226/00-02.jpg?itok=LDZYSwbL',
        },
      },
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069226/00-02.jpg?itok=LDZYSwbL',
        },
      },
      title:
        'Participation of Ursula von der Leyen, President of the European Commission, in the plenary session of the European Parliament',
      description:
        'Participation of Ursula von der Leyen, President of the European Commission, in the plenary session of the European Parliament',
    },
    {
      thumbnail: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069124/00-02.jpg?itok=FuW4ZHFB',
        },
      },
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-069124/00-02.jpg?itok=FuW4ZHFB',
        },
      },
      title:
        'Participation of Ursula von der Leyen, President of the European Commission, and Raffaele Fitto, Executive Vice-President of the European Commission, in the Eastern Border Regions High-Level Conference ',
      description:
        'Participation of Ursula von der Leyen, President of the European Commission, and Raffaele Fitto, Executive Vice-President of the European Commission, in the Eastern Border Regions High-Level Conference ',
    },
  ],
  overlay: {
    close: {
      variant: 'ghost',
      hide_label: true,
      label: 'Close',
      icon: {
        name: 'close',
        size: 'm',
      },
    },
    previous: {
      variant: 'tertiary',
      label: 'Previous',
      icon: {
        name: 'corner-arrow',
        size: 's',
        transform: 'rotate-270',
      },
      icon_position: 'before',
    },
    next: {
      variant: 'tertiary',
      label: 'Next',
      icon: {
        name: 'corner-arrow',
        size: 's',
        transform: 'rotate-90',
      },
    },
    counter_separator: 'of',
    full_screen_label: 'View original',
  },
};

// Navigation list
const nav_list = {
  items: [
    {
      variant: 'illustration',
      title: {
        link: {
          label: 'Biography and role of the President',
          path: exampleLink,
          type: 'standalone',
        },
      },
      description:
        "Read more about Ursula von der Leyen's professional experience and her tasks as President of the European Commission.",
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/ewcms_icon/public/2024-10/podium_1.png?h=4260f18d&itok=JM2KTxjL',
        },
      },
    },
    {
      variant: 'illustration',
      title: {
        link: {
          label: 'Members of the von der Leyen Commission',
          path: exampleLink,
          type: 'standalone',
        },
      },
      description:
        "Under the leadership of the President, the Commission's work is steered by a group of 27 Commissioners for the term 2024-2029. It decides the Commission's political and strategic direction.",
      picture: {
        img: {
          src: 'https://commission.europa.eu/sites/default/files/styles/ewcms_icon/public/2024-10/People_0.png?h=4260f18d&itok=0PtOzpd9',
        },
      },
    },
  ],
};

// Other banner
const banner_bottom = {
  title: 'Priorities for 2024-2029',
  box_background: 'dark',
  link: {
    link: {
      type: '',
      style: 'highlight',
      label: 'Learn more',
      path: '#',
    },
    icon: {
      name: 'corner-arrow',
      transform: 'rotate-90',
    },
  },
  picture: {
    img: {
      src: 'https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width_banner_4_1/public/2025-04/Priorities_banner-4x1.jpg.webp?h=a6f0d49e&itok=zyHMWUo4',
    },
  },
};

// Related links section
const related = {
  col1: [
    {
      divider: true,
      title: {
        link: {
          label: 'Political Guidelines',
          type: 'standalone',
          path: exampleLink,
        },
      },
    },
    {
      divider: true,
      title: {
        link: {
          label: "President von der Leyen's team",
          type: 'standalone',
          path: exampleLink,
        },
      },
    },
    {
      title: {
        link: {
          label: 'Decision-making during weekly meetingsm',
          type: 'standalone',
          path: exampleLink,
        },
      },
    },
  ],
  col2: [
    {
      divider: true,
      title: {
        link: {
          label: 'Contact the President',
          type: 'standalone',
          path: exampleLink,
        },
      },
    },
    {
      divider: true,
      title: {
        link: {
          label: 'How leaders of the EU institutions are elected and appointed',
          type: 'standalone',
          path: exampleLink,
        },
      },
    },
  ],
};

const data = {
  banner,
  blockquote,
  agenda_items,
  social_media,
  news,
  statements,
  gallery,
  banner_bottom,
  related,
  rating,
  nav_list,
  icon_path: '/icons.svg',
  site_header: dataSiteHeaderEC,
  site_footer: dataSiteFooterEC,
  page_header,
};

export default data;
