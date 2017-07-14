module.exports = {
  title: 'Social icons',
  label: 'Social icons',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start demo of: @${item.handle} -->\n

      <div>
        <h3>@${item.handle}</h3>
        <div class="ecl-container">
          <div class="ecl-row">
            <div class="ecl-col">
              <a href="#" class="ecl-link ecl-icon-social ${item.context
                .modifier}">${item.label}</a>
            </div>
            <div class="ecl-col">
              <span class="ecl-icon-social ${item.context
                .modifier}">${item.label}</span>
            </div>
            <div class="ecl-col">
              <div class="ecl-icon-social--smaller">
              <span class="ecl-icon-social ${item.context
                .modifier}">${item.label}</span>
              </div>
            </div>
          </div>
      </div>
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'facebook',
  variants: [
    {
      name: 'arto',
      label: 'Arto',
      context: {
        modifier: 'ecl-icon-social--arto',
        social_icon_text: 'Arto',
      },
    },
    {
      name: 'bebo',
      label: 'Bebo',
      context: {
        modifier: 'ecl-icon-social--bebo',
        social_icon_text: 'Bebo',
      },
    },
    {
      name: 'bitly',
      label: 'Bitly',
      context: {
        modifier: 'ecl-icon-social--bitly',
        social_icon_text: 'Bitly',
      },
    },
    {
      name: 'blinklist',
      label: 'Blinklist',
      context: {
        modifier: 'ecl-icon-social--blinklist',
        social_icon_text: 'Blinklist',
      },
    },
    {
      name: 'blog',
      label: 'Blog',
      context: {
        modifier: 'ecl-icon-social--blog',
        social_icon_text: 'Blog',
      },
    },
    {
      name: 'blogger',
      label: 'Blogger',
      context: {
        modifier: 'ecl-icon-social--blogger',
        social_icon_text: 'Blogger',
      },
    },
    {
      name: 'delicious',
      label: 'Delicious',
      context: {
        modifier: 'ecl-icon-social--delicious',
        social_icon_text: 'Delicious',
      },
    },
    {
      name: 'digg',
      label: 'Digg',
      context: {
        modifier: 'ecl-icon-social--digg',
        social_icon_text: 'Digg',
      },
    },
    {
      name: 'diigo',
      label: 'Diigo',
      context: {
        modifier: 'ecl-icon-social--diigo',
        social_icon_text: 'Diigo',
      },
    },
    {
      name: 'dzone',
      label: 'Dzone',
      context: {
        modifier: 'ecl-icon-social--dzone',
        social_icon_text: 'Dzone',
      },
    },
    {
      name: 'email',
      label: 'Email',
      context: {
        modifier: 'ecl-icon-social--email',
        social_icon_text: 'Email',
      },
    },
    {
      name: 'facebook',
      label: 'Facebook',
      context: {
        modifier: 'ecl-icon-social--facebook',
        social_icon_text: 'Facebook',
      },
    },
    {
      name: 'flickr',
      label: 'Flickr',
      context: {
        modifier: 'ecl-icon-social--flickr',
        social_icon_text: 'Flickr',
      },
    },
    {
      name: 'foursquare',
      label: 'Foursquare',
      context: {
        modifier: 'ecl-icon-social--foursquare',
        social_icon_text: 'Foursquare',
      },
    },
    {
      name: 'generic',
      label: 'Generic',
      context: {
        modifier: 'ecl-icon-social--generic',
        social_icon_text: 'Generic',
      },
    },
    {
      name: 'google',
      label: 'Google',
      context: {
        modifier: 'ecl-icon-social--google',
        social_icon_text: 'Google',
      },
    },
    {
      name: 'gplus',
      label: 'Gplus',
      context: {
        modifier: 'ecl-icon-social--gplus',
        social_icon_text: 'Gplus',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram',
      context: {
        modifier: 'ecl-icon-social--instagram',
        social_icon_text: 'Instagram',
      },
    },
    {
      name: 'linkarena',
      label: 'Linkarena',
      context: {
        modifier: 'ecl-icon-social--linkarena',
        social_icon_text: 'Linkarena',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin',
      context: {
        modifier: 'ecl-icon-social--linkedin',
        social_icon_text: 'Linkedin',
      },
    },
    {
      name: 'live',
      label: 'Live',
      context: {
        modifier: 'ecl-icon-social--live',
        social_icon_text: 'Live',
      },
    },
    {
      name: 'meneame',
      label: 'Meneame',
      context: {
        modifier: 'ecl-icon-social--meneame',
        social_icon_text: 'Meneame',
      },
    },
    {
      name: 'misterwong',
      label: 'Misterwong',
      context: {
        modifier: 'ecl-icon-social--misterwong',
        social_icon_text: 'Misterwong',
      },
    },
    {
      name: 'myspace',
      label: 'Myspace',
      context: {
        modifier: 'ecl-icon-social--myspace',
        social_icon_text: 'Myspace',
      },
    },
    {
      name: 'netlog',
      label: 'Netlog',
      context: {
        modifier: 'ecl-icon-social--netlog',
        social_icon_text: 'Netlog',
      },
    },
    {
      name: 'netvibes',
      label: 'Netvibes',
      context: {
        modifier: 'ecl-icon-social--netvibes',
        social_icon_text: 'Netvibes',
      },
    },
    {
      name: 'newsvine',
      label: 'Newsvine',
      context: {
        modifier: 'ecl-icon-social--newsvine',
        social_icon_text: 'Newsvine',
      },
    },
    {
      name: 'nujij',
      label: 'Nujij',
      context: {
        modifier: 'ecl-icon-social--nujij',
        social_icon_text: 'Nujij',
      },
    },
    {
      name: 'pinterest',
      label: 'Pinterest',
      context: {
        modifier: 'ecl-icon-social--pinterest',
        social_icon_text: 'Pinterest',
      },
    },
    {
      name: 'pocket',
      label: 'Pocket',
      context: {
        modifier: 'ecl-icon-social--pocket',
        social_icon_text: 'Pocket',
      },
    },
    {
      name: 'reddit',
      label: 'Reddit',
      context: {
        modifier: 'ecl-icon-social--reddit',
        social_icon_text: 'Reddit',
      },
    },
    {
      name: 'rss',
      label: 'RSS',
      context: {
        modifier: 'ecl-icon-social--rss',
        social_icon_text: 'RSS',
      },
    },
    {
      name: 'share',
      label: 'Share',
      context: {
        modifier: 'ecl-icon-social--share',
        social_icon_text: 'Share',
      },
    },
    {
      name: 'skype',
      label: 'Skype',
      context: {
        modifier: 'ecl-icon-social--skype',
        social_icon_text: 'Skype',
      },
    },
    {
      name: 'slashdot',
      label: 'Slashdot',
      context: {
        modifier: 'ecl-icon-social--slashdot',
        social_icon_text: 'Slashdot',
      },
    },
    {
      name: 'sonico',
      label: 'Sonico',
      context: {
        modifier: 'ecl-icon-social--sonico',
        social_icon_text: 'Sonico',
      },
    },
    {
      name: 'spotify',
      label: 'Spotify',
      context: {
        modifier: 'ecl-icon-social--spotify',
        social_icon_text: 'Spotify',
      },
    },
    {
      name: 'storify',
      label: 'Storify',
      context: {
        modifier: 'ecl-icon-social--storify',
        social_icon_text: 'Storify',
      },
    },
    {
      name: 'studivz',
      label: 'Studivz',
      context: {
        modifier: 'ecl-icon-social--studivz',
        social_icon_text: 'Studivz',
      },
    },
    {
      name: 'stumbleupon',
      label: 'Stumbleupon',
      context: {
        modifier: 'ecl-icon-social--stumbleupon',
        social_icon_text: 'Stumbleupon',
      },
    },
    {
      name: 'technorati',
      label: 'Technorati',
      context: {
        modifier: 'ecl-icon-social--technorati',
        social_icon_text: 'Technorati',
      },
    },
    {
      name: 'tuenti',
      label: 'Tuenti',
      context: {
        modifier: 'ecl-icon-social--tuenti',
        social_icon_text: 'Tuenti',
      },
    },
    {
      name: 'tumblr',
      label: 'Tumblr',
      context: {
        modifier: 'ecl-icon-social--tumblr',
        social_icon_text: 'Tumblr',
      },
    },
    {
      name: 'tumblr',
      label: 'Tumblr',
      context: {
        modifier: 'ecl-icon-social--tumblr',
        social_icon_text: 'Tumblr',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter',
      context: {
        modifier: 'ecl-icon-social--twitter',
        social_icon_text: 'Twitter',
      },
    },
    {
      name: 'viadeo',
      label: 'Viadeo',
      context: {
        modifier: 'ecl-icon-social--viadeo',
        social_icon_text: 'Viadeo',
      },
    },
    {
      name: 'vine',
      label: 'Vine',
      context: {
        modifier: 'ecl-icon-social--vine',
        social_icon_text: 'Vine',
      },
    },
    {
      name: 'wordpress',
      label: 'Wordpress',
      context: {
        modifier: 'ecl-icon-social--wordpress',
        social_icon_text: 'Wordpress',
      },
    },
    {
      name: 'wykop',
      label: 'Wykop',
      context: {
        modifier: 'ecl-icon-social--wykop',
        social_icon_text: 'Wykop',
      },
    },
    {
      name: 'xerpi',
      label: 'Xerpi',
      context: {
        modifier: 'ecl-icon-social--xerpi',
        social_icon_text: 'Xerpi',
      },
    },
    {
      name: 'yammer',
      label: 'Yammer',
      context: {
        modifier: 'ecl-icon-social--yammer',
        social_icon_text: 'Yammer',
      },
    },
    {
      name: 'youtube',
      label: 'Youtube',
      context: {
        modifier: 'ecl-icon-social--youtube',
        social_icon_text: 'Youtube',
      },
    },
    {
      name: 'print',
      label: 'Print',
      context: {
        modifier: 'ecl-icon-social--print',
        social_icon_text: 'Print',
      },
    },
  ],
};
