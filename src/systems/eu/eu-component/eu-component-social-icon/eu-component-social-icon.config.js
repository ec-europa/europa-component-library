const arto = require('@ecl/generic-component-social-icon/data/demo--arto');
const bebo = require('@ecl/generic-component-social-icon/data/demo--bebo');
const bitly = require('@ecl/generic-component-social-icon/data/demo--bitly');
// const blinklist = require('@ecl/generic-component-social-icon/data/demo--blinklist');
// const blog = require('@ecl/generic-component-social-icon/data/demo--blog');
// const blogger = require('@ecl/generic-component-social-icon/data/demo--blogger');
// const delicious = require('@ecl/generic-component-social-icon/data/demo--delicious');
const digg = require('@ecl/generic-component-social-icon/data/demo--digg');
const diigo = require('@ecl/generic-component-social-icon/data/demo--diigo');
// const dzone = require('@ecl/generic-component-social-icon/data/demo--dzone');
// const email = require('@ecl/generic-component-social-icon/data/demo--email');
// const facebook = require('@ecl/generic-component-social-icon/data/demo--facebook');
// const flickr = require('@ecl/generic-component-social-icon/data/demo--flickr');
// const foursquare = require('@ecl/generic-component-social-icon/data/demo--foursquare');
// const generic = require('@ecl/generic-component-social-icon/data/demo--generic');
// const google = require('@ecl/generic-component-social-icon/data/demo--google');
// const gplus = require('@ecl/generic-component-social-icon/data/demo--gplus');
// const instagram = require('@ecl/generic-component-social-icon/data/demo--instagram');
// const linkarena = require('@ecl/generic-component-social-icon/data/demo--linkarena');
// const linkedin = require('@ecl/generic-component-social-icon/data/demo--linkedin');
// const live = require('@ecl/generic-component-social-icon/data/demo--live');
// const meneame = require('@ecl/generic-component-social-icon/data/demo--meneame');
// const misterwong = require('@ecl/generic-component-social-icon/data/demo--misterwong');
// const myspace = require('@ecl/generic-component-social-icon/data/demo--myspace');
// const netlog = require('@ecl/generic-component-social-icon/data/demo--netlog');
// const netvibes = require('@ecl/generic-component-social-icon/data/demo--netvibes');
// const newsvine = require('@ecl/generic-component-social-icon/data/demo--newsvine');
// const nujij = require('@ecl/generic-component-social-icon/data/demo--nujij');
// const pinterest = require('@ecl/generic-component-social-icon/data/demo--pinterest');
// const pocket = require('@ecl/generic-component-social-icon/data/demo--pocket');
// const reddit = require('@ecl/generic-component-social-icon/data/demo--reddit');
// const rss = require('@ecl/generic-component-social-icon/data/demo--rss');
// const share = require('@ecl/generic-component-social-icon/data/demo--share');
// const skype = require('@ecl/generic-component-social-icon/data/demo--skype');
// const slashdot = require('@ecl/generic-component-social-icon/data/demo--slashdot');
// const sonico = require('@ecl/generic-component-social-icon/data/demo--sonico');
// const spotify = require('@ecl/generic-component-social-icon/data/demo--spotify');
// const storify = require('@ecl/generic-component-social-icon/data/demo--storify');
// const studivz = require('@ecl/generic-component-social-icon/data/demo--studivz');
// const stumbleupon = require('@ecl/generic-component-social-icon/data/demo--stumbleupon');
// const technorati = require('@ecl/generic-component-social-icon/data/demo--technorati');
// const tuenti = require('@ecl/generic-component-social-icon/data/demo--tuenti');
// const tumblr = require('@ecl/generic-component-social-icon/data/demo--tumblr');
// const twitter = require('@ecl/generic-component-social-icon/data/demo--twitter');
// const viadeo = require('@ecl/generic-component-social-icon/data/demo--viadeo');
// const vine = require('@ecl/generic-component-social-icon/data/demo--vine');
// const wordpress = require('@ecl/generic-component-social-icon/data/demo--wordpress');
// const wykop = require('@ecl/generic-component-social-icon/data/demo--wykop');
// const xerpi = require('@ecl/generic-component-social-icon/data/demo--xerpi');
// const yammer = require('@ecl/generic-component-social-icon/data/demo--yammer');
// const youtube = require('@ecl/generic-component-social-icon/data/demo--youtube');
// const print = require('@ecl/generic-component-social-icon/data/demo--print');

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
              <a href="#" class="ecl-link ecl-icon-social ecl-icon-social--${
                item.context.variant
              }">${item.label}</a>
            </div>
            <div class="ecl-col">
              <span class="ecl-icon-social ecl-icon-social--${
                item.context.variant
              }">${item.label}</span>
            </div>
            <div class="ecl-col">
              <span class="ecl-icon-social ecl-icon-social--smaller ecl-icon-social--${
                item.context.variant
              }">${item.label}</span>
            </div>
          </div>
      </div>
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'arto',
  variants: [
    {
      name: 'arto',
      label: 'Arto',
      context: arto,
    },
    {
      name: 'bebo',
      label: 'Bebo',
      context: bebo,
    },
    {
      name: 'bitly',
      label: 'Bitly',
      context: bitly,
    },
    {
      name: 'blinklist',
      label: 'Blinklist',
      context: {
        variant: 'blinklist',
        label: 'Blinklist',
      },
    },
    {
      name: 'blog',
      label: 'Blog',
      context: {
        variant: 'blog',
        label: 'Blog',
      },
    },
    {
      name: 'blogger',
      label: 'Blogger',
      context: {
        variant: 'blogger',
        label: 'Blogger',
      },
    },
    {
      name: 'delicious',
      label: 'Delicious',
      context: {
        variant: 'delicious',
        label: 'Delicious',
      },
    },
    {
      name: 'digg',
      label: 'Digg',
      context: digg,
    },
    {
      name: 'diigo',
      label: 'Diigo',
      context: diigo,
    },
    {
      name: 'dzone',
      label: 'Dzone',
      context: {
        variant: 'dzone',
        label: 'Dzone',
      },
    },
    {
      name: 'email',
      label: 'Email',
      context: {
        variant: 'email',
        label: 'Email',
      },
    },
    {
      name: 'facebook',
      label: 'Facebook',
      context: {
        variant: 'facebook',
        label: 'Facebook',
      },
    },
    {
      name: 'flickr',
      label: 'Flickr',
      context: {
        variant: 'flickr',
        label: 'Flickr',
      },
    },
    {
      name: 'foursquare',
      label: 'Foursquare',
      context: {
        variant: 'foursquare',
        label: 'Foursquare',
      },
    },
    {
      name: 'generic',
      label: 'Generic',
      context: {
        variant: 'generic',
        label: 'Generic',
      },
    },
    {
      name: 'google',
      label: 'Google',
      context: {
        variant: 'google',
        label: 'Google',
      },
    },
    {
      name: 'gplus',
      label: 'Gplus',
      context: {
        variant: 'gplus',
        label: 'Gplus',
      },
    },
    {
      name: 'instagram',
      label: 'Instagram',
      context: {
        variant: 'instagram',
        label: 'Instagram',
      },
    },
    {
      name: 'linkarena',
      label: 'Linkarena',
      context: {
        variant: 'linkarena',
        label: 'Linkarena',
      },
    },
    {
      name: 'linkedin',
      label: 'Linkedin',
      context: {
        variant: 'linkedin',
        label: 'Linkedin',
      },
    },
    {
      name: 'live',
      label: 'Live',
      context: {
        variant: 'live',
        label: 'Live',
      },
    },
    {
      name: 'meneame',
      label: 'Meneame',
      context: {
        variant: 'meneame',
        label: 'Meneame',
      },
    },
    {
      name: 'misterwong',
      label: 'Misterwong',
      context: {
        variant: 'misterwong',
        label: 'Misterwong',
      },
    },
    {
      name: 'myspace',
      label: 'Myspace',
      context: {
        variant: 'myspace',
        label: 'Myspace',
      },
    },
    {
      name: 'netlog',
      label: 'Netlog',
      context: {
        variant: 'netlog',
        label: 'Netlog',
      },
    },
    {
      name: 'netvibes',
      label: 'Netvibes',
      context: {
        variant: 'netvibes',
        label: 'Netvibes',
      },
    },
    {
      name: 'newsvine',
      label: 'Newsvine',
      context: {
        variant: 'newsvine',
        label: 'Newsvine',
      },
    },
    {
      name: 'nujij',
      label: 'Nujij',
      context: {
        variant: 'nujij',
        label: 'Nujij',
      },
    },
    {
      name: 'pinterest',
      label: 'Pinterest',
      context: {
        variant: 'pinterest',
        label: 'Pinterest',
      },
    },
    {
      name: 'pocket',
      label: 'Pocket',
      context: {
        variant: 'pocket',
        label: 'Pocket',
      },
    },
    {
      name: 'reddit',
      label: 'Reddit',
      context: {
        variant: 'reddit',
        label: 'Reddit',
      },
    },
    {
      name: 'rss',
      label: 'RSS',
      context: {
        variant: 'rss',
        label: 'RSS',
      },
    },
    {
      name: 'share',
      label: 'Share',
      context: {
        variant: 'share',
        label: 'Share',
      },
    },
    {
      name: 'skype',
      label: 'Skype',
      context: {
        variant: 'skype',
        label: 'Skype',
      },
    },
    {
      name: 'slashdot',
      label: 'Slashdot',
      context: {
        variant: 'slashdot',
        label: 'Slashdot',
      },
    },
    {
      name: 'sonico',
      label: 'Sonico',
      context: {
        variant: 'sonico',
        label: 'Sonico',
      },
    },
    {
      name: 'spotify',
      label: 'Spotify',
      context: {
        variant: 'spotify',
        label: 'Spotify',
      },
    },
    {
      name: 'storify',
      label: 'Storify',
      context: {
        variant: 'storify',
        label: 'Storify',
      },
    },
    {
      name: 'studivz',
      label: 'Studivz',
      context: {
        variant: 'studivz',
        label: 'Studivz',
      },
    },
    {
      name: 'stumbleupon',
      label: 'Stumbleupon',
      context: {
        variant: 'stumbleupon',
        label: 'Stumbleupon',
      },
    },
    {
      name: 'technorati',
      label: 'Technorati',
      context: {
        variant: 'technorati',
        label: 'Technorati',
      },
    },
    {
      name: 'tuenti',
      label: 'Tuenti',
      context: {
        variant: 'tuenti',
        label: 'Tuenti',
      },
    },
    {
      name: 'tumblr',
      label: 'Tumblr',
      context: {
        variant: 'tumblr',
        label: 'Tumblr',
      },
    },
    {
      name: 'twitter',
      label: 'Twitter',
      context: {
        variant: 'twitter',
        label: 'Twitter',
      },
    },
    {
      name: 'viadeo',
      label: 'Viadeo',
      context: {
        variant: 'viadeo',
        label: 'Viadeo',
      },
    },
    {
      name: 'vine',
      label: 'Vine',
      context: {
        variant: 'vine',
        label: 'Vine',
      },
    },
    {
      name: 'wordpress',
      label: 'Wordpress',
      context: {
        variant: 'wordpress',
        label: 'Wordpress',
      },
    },
    {
      name: 'wykop',
      label: 'Wykop',
      context: {
        variant: 'wykop',
        label: 'Wykop',
      },
    },
    {
      name: 'xerpi',
      label: 'Xerpi',
      context: {
        variant: 'xerpi',
        label: 'Xerpi',
      },
    },
    {
      name: 'yammer',
      label: 'Yammer',
      context: {
        variant: 'yammer',
        label: 'Yammer',
      },
    },
    {
      name: 'youtube',
      label: 'Youtube',
      context: {
        variant: 'youtube',
        label: 'Youtube',
      },
    },
    {
      name: 'print',
      label: 'Print',
      context: {
        variant: 'print',
        label: 'Print',
      },
    },
  ],
};
