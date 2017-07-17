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
              <span class="ecl-icon-social ecl-icon-social--smaller ${item
                .context.modifier}">${item.label}</span>
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
        text: 'Arto',
      },
    },
    {
      name: 'bebo',
      label: 'Bebo',
      context: {
        modifier: 'ecl-icon-social--bebo',
        text: 'Bebo',
      },
    },
    {
      name: 'bitly',
      label: 'Bitly',
      context: {
        modifier: 'ecl-icon-social--bitly',
        text: 'Bitly',
      },
    },
    {
      name: 'blinklist',
      label: 'Blinklist',
      context: {
        modifier: 'ecl-icon-social--blinklist',
        text: 'Blinklist',
      },
    },
    {
      name: 'blog',
      label: 'Blog',
      context: {
        modifier: 'ecl-icon-social--blog',
        text: 'Blog',
      },
    },
    {
      name: 'blogger',
      label: 'Blogger',
      context: {
        modifier: 'ecl-icon-social--blogger',
        text: 'Blogger',
      },
    },
    {
      name: 'delicious',
      label: 'Delicious',
      context: {
        modifier: 'ecl-icon-social--delicious',
        text: 'Delicious',
      },
    },
    {
      name: 'digg',
      label: 'Digg',
      context: {
        modifier: 'ecl-icon-social--digg',
        text: 'Digg',
      },
    },
    {
      name: 'diigo',
      label: 'Diigo',
      context: {
        modifier: 'ecl-icon-social--diigo',
        text: 'Diigo',
      },
    },
    {
      name: 'dzone',
      label: 'Dzone',
      context: {
        modifier: 'ecl-icon-social--dzone',
        text: 'Dzone',
      },
    },
    {
      name: 'email',
      label: 'Email',
      context: {
        modifier: 'ecl-icon-social--email',
        text: 'Email',
      },
    },
    {
      name: 'facebook',
      label: 'Facebook',
      context: {
        modifier: 'ecl-icon-social--facebook',
        text: 'Facebook',
      },
    },
    {
      name: 'flickr',
      label: 'Flickr',
      context: {
        modifier: 'ecl-icon-social--flickr',
        text: 'Flickr',
      },
    },
    {
      name: 'foursquare',
      label: 'Foursquare',
      context: {
        modifier: 'ecl-icon-social--foursquare',
        text: 'Foursquare',
      },
    },
    {
      name: 'generic',
      label: 'Generic',
      context: {
        modifier: 'ecl-icon-social--generic',
        text: 'Generic',
      },
    },
    {
      name: 'google',
      label: 'Google',
      context: {
        modifier: 'ecl-icon-social--google',
        text: 'Google',
      },
    },
    {
      name: 'gplus',
      label: 'Gplus',
      context: {
        modifier: 'ecl-icon-social--gplus',
        text: 'Gplus',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram',
      context: {
        modifier: 'ecl-icon-social--instagram',
        text: 'Instagram',
      },
    },
    {
      name: 'linkarena',
      label: 'Linkarena',
      context: {
        modifier: 'ecl-icon-social--linkarena',
        text: 'Linkarena',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin',
      context: {
        modifier: 'ecl-icon-social--linkedin',
        text: 'Linkedin',
      },
    },
    {
      name: 'live',
      label: 'Live',
      context: {
        modifier: 'ecl-icon-social--live',
        text: 'Live',
      },
    },
    {
      name: 'meneame',
      label: 'Meneame',
      context: {
        modifier: 'ecl-icon-social--meneame',
        text: 'Meneame',
      },
    },
    {
      name: 'misterwong',
      label: 'Misterwong',
      context: {
        modifier: 'ecl-icon-social--misterwong',
        text: 'Misterwong',
      },
    },
    {
      name: 'myspace',
      label: 'Myspace',
      context: {
        modifier: 'ecl-icon-social--myspace',
        text: 'Myspace',
      },
    },
    {
      name: 'netlog',
      label: 'Netlog',
      context: {
        modifier: 'ecl-icon-social--netlog',
        text: 'Netlog',
      },
    },
    {
      name: 'netvibes',
      label: 'Netvibes',
      context: {
        modifier: 'ecl-icon-social--netvibes',
        text: 'Netvibes',
      },
    },
    {
      name: 'newsvine',
      label: 'Newsvine',
      context: {
        modifier: 'ecl-icon-social--newsvine',
        text: 'Newsvine',
      },
    },
    {
      name: 'nujij',
      label: 'Nujij',
      context: {
        modifier: 'ecl-icon-social--nujij',
        text: 'Nujij',
      },
    },
    {
      name: 'pinterest',
      label: 'Pinterest',
      context: {
        modifier: 'ecl-icon-social--pinterest',
        text: 'Pinterest',
      },
    },
    {
      name: 'pocket',
      label: 'Pocket',
      context: {
        modifier: 'ecl-icon-social--pocket',
        text: 'Pocket',
      },
    },
    {
      name: 'reddit',
      label: 'Reddit',
      context: {
        modifier: 'ecl-icon-social--reddit',
        text: 'Reddit',
      },
    },
    {
      name: 'rss',
      label: 'RSS',
      context: {
        modifier: 'ecl-icon-social--rss',
        text: 'RSS',
      },
    },
    {
      name: 'share',
      label: 'Share',
      context: {
        modifier: 'ecl-icon-social--share',
        text: 'Share',
      },
    },
    {
      name: 'skype',
      label: 'Skype',
      context: {
        modifier: 'ecl-icon-social--skype',
        text: 'Skype',
      },
    },
    {
      name: 'slashdot',
      label: 'Slashdot',
      context: {
        modifier: 'ecl-icon-social--slashdot',
        text: 'Slashdot',
      },
    },
    {
      name: 'sonico',
      label: 'Sonico',
      context: {
        modifier: 'ecl-icon-social--sonico',
        text: 'Sonico',
      },
    },
    {
      name: 'spotify',
      label: 'Spotify',
      context: {
        modifier: 'ecl-icon-social--spotify',
        text: 'Spotify',
      },
    },
    {
      name: 'storify',
      label: 'Storify',
      context: {
        modifier: 'ecl-icon-social--storify',
        text: 'Storify',
      },
    },
    {
      name: 'studivz',
      label: 'Studivz',
      context: {
        modifier: 'ecl-icon-social--studivz',
        text: 'Studivz',
      },
    },
    {
      name: 'stumbleupon',
      label: 'Stumbleupon',
      context: {
        modifier: 'ecl-icon-social--stumbleupon',
        text: 'Stumbleupon',
      },
    },
    {
      name: 'technorati',
      label: 'Technorati',
      context: {
        modifier: 'ecl-icon-social--technorati',
        text: 'Technorati',
      },
    },
    {
      name: 'tuenti',
      label: 'Tuenti',
      context: {
        modifier: 'ecl-icon-social--tuenti',
        text: 'Tuenti',
      },
    },
    {
      name: 'tumblr',
      label: 'Tumblr',
      context: {
        modifier: 'ecl-icon-social--tumblr',
        text: 'Tumblr',
      },
    },
    {
      name: 'tumblr',
      label: 'Tumblr',
      context: {
        modifier: 'ecl-icon-social--tumblr',
        text: 'Tumblr',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter',
      context: {
        modifier: 'ecl-icon-social--twitter',
        text: 'Twitter',
      },
    },
    {
      name: 'viadeo',
      label: 'Viadeo',
      context: {
        modifier: 'ecl-icon-social--viadeo',
        text: 'Viadeo',
      },
    },
    {
      name: 'vine',
      label: 'Vine',
      context: {
        modifier: 'ecl-icon-social--vine',
        text: 'Vine',
      },
    },
    {
      name: 'wordpress',
      label: 'Wordpress',
      context: {
        modifier: 'ecl-icon-social--wordpress',
        text: 'Wordpress',
      },
    },
    {
      name: 'wykop',
      label: 'Wykop',
      context: {
        modifier: 'ecl-icon-social--wykop',
        text: 'Wykop',
      },
    },
    {
      name: 'xerpi',
      label: 'Xerpi',
      context: {
        modifier: 'ecl-icon-social--xerpi',
        text: 'Xerpi',
      },
    },
    {
      name: 'yammer',
      label: 'Yammer',
      context: {
        modifier: 'ecl-icon-social--yammer',
        text: 'Yammer',
      },
    },
    {
      name: 'youtube',
      label: 'Youtube',
      context: {
        modifier: 'ecl-icon-social--youtube',
        text: 'Youtube',
      },
    },
    {
      name: 'print',
      label: 'Print',
      context: {
        modifier: 'ecl-icon-social--print',
        text: 'Print',
      },
    },
  ],
};
