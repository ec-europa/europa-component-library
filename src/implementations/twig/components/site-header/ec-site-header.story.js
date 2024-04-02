import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Get data
import dataFullEC from '@ecl/specs-component-site-header/demo/data--ec';
import enLogoEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import enLogoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import enDataMenu from '@ecl/specs-component-menu/demo/data--ec';
import enDataMegaMenu from '@ecl/specs-component-mega-menu/demo/data';
import siteHeader from './site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const dataFull = { ...dataFullEC };
const clonedDataFull = { ...dataFull };
const enMenu = { ...enDataMenu };
const enMegaMenu = { ...enDataMegaMenu };

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.banner_top;
delete dataCore.cta_link;
dataCore.has_menu = false;

// Standardised
const dataStandardised = JSON.parse(JSON.stringify(dataFull));
delete dataStandardised.login_box;
dataStandardised.has_menu = true;

// Harmonised
const dataHarmonised = JSON.parse(JSON.stringify(dataFull));
delete dataHarmonised.banner_top;
dataHarmonised.has_menu = true;

const getArgs = (data) => {
  const defaultArgs = {
    show_language_selector: true,
    show_search: true,
    show_notification: false,
  };

  if (data.login_box) {
    defaultArgs.show_login = true;
    defaultArgs.logged = false;
  }
  if (data.site_name) {
    defaultArgs.show_site_name = true;
    defaultArgs.site_name = data.site_name;
  }
  if (data.banner_top) {
    defaultArgs.show_banner_top = true;
  }
  if (data.has_menu) {
    defaultArgs.show_menu = 'menu';
  }
  if (data.cta_link) {
    defaultArgs.show_cta_link = false;
  }
  if (data.language_selector) {
    defaultArgs.languages_eu = data.language_selector.overlay.items.length;
    defaultArgs.languages_non_eu =
      data.language_selector.overlay.non_eu_items.length;
  }

  return defaultArgs;
};

const getArgTypes = (data) => {
  const argTypes = {};

  if (data.login_box) {
    argTypes.show_login = {
      name: 'login',
      type: { name: 'boolean' },
      description: 'Show the login box',
      table: {
        category: 'Optional',
      },
    };
    argTypes.logged = {
      name: 'logged in',
      type: { name: 'boolean' },
      description: 'Show the login box for a logged in user',
      table: {
        category: 'Optional',
      },
    };
  }
  argTypes.show_language_selector = {
    name: 'language selector',
    type: { name: 'boolean' },
    description: 'Show the language selector',
    table: {
      category: 'Optional',
    },
  };
  argTypes.show_search = {
    name: 'search (Europa Search)',
    type: { name: 'boolean' },
    description: 'Show the search form',
    table: {
      category: 'Optional',
    },
  };
  if (data.notification) {
    argTypes.show_notification = {
      name: 'notification',
      type: { name: 'boolean' },
      description: 'Show the notification box',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.banner_top) {
    argTypes.show_banner_top = {
      name: 'class name',
      type: { name: 'boolean' },
      description: 'Show the class name',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.has_menu) {
    argTypes.show_menu = {
      name: 'menu',
      control: { type: 'radio' },
      description: 'Show the menu, the mega menu or none of the two',
      options: ['none', 'menu', 'mega-menu'],
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.cta_link) {
    argTypes.show_cta_link = {
      name: 'call to action',
      type: { name: 'boolean' },
      description: 'Show the call to action link',
      table: {
        category: 'Optional',
      },
    };
  }
  if (data.site_name) {
    argTypes.show_site_name = {
      name: 'site name',
      type: { name: 'boolean' },
      description: 'Show the site name',
      table: {
        category: 'Optional',
      },
    };
    argTypes.site_name = {
      name: 'site name',
      type: { name: 'string', required: true },
      description: 'The site name',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
        category: 'Content',
      },
      if: { arg: 'show_site_name' },
    };
  }
  if (data.language_selector) {
    argTypes.languages_eu = {
      name: 'EU languages',
      description: 'Number of official EU languages',
      control: {
        type: 'range',
        min: 0,
        max: data.language_selector.overlay.items.length,
        step: 1,
      },
      table: {
        category: 'Content',
      },
      if: { arg: 'show_language_selector' },
    };
    argTypes.languages_non_eu = {
      name: 'non-EU languages',
      description: 'Number of other languages',
      control: {
        type: 'range',
        min: 0,
        max: data.language_selector.overlay.non_eu_items.length,
        step: 1,
      },
      table: {
        category: 'Content',
      },
      if: { arg: 'show_language_selector' },
    };
  }

  return argTypes;
};

const prepareData = (data, args) => {
  if (!args.show_login) {
    delete data.login_box;
    delete data.login_toggle;
  } else if (args.show_login && !data.login_box) {
    data.login_box = clonedDataFull.login_box;
    data.login_toggle = clonedDataFull.login_toggle;
  }

  if (args.show_menu === 'none' && (data.menu || data.mega_menu)) {
    delete data.menu;
    delete data.mega_menu;
  }
  if (args.show_menu === 'menu' && !data.menu) {
    data.menu = enMenu;
    delete data.mega_menu;
  }
  if (args.show_menu === 'mega-menu' && !data.mega_menu) {
    data.mega_menu = enMegaMenu;
    delete data.menu;
  }

  data.logged = args.logged;

  if (!args.show_language_selector) {
    delete data.language_selector;
  } else {
    data.language_selector = JSON.parse(
      JSON.stringify(clonedDataFull.language_selector),
    );
    data.language_selector.overlay.items.splice(
      -(data.language_selector.overlay.items.length - args.languages_eu),
      data.language_selector.overlay.items.length - args.languages_eu,
    );
    data.language_selector.overlay.non_eu_items.splice(
      -(
        data.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu
      ),
      data.language_selector.overlay.non_eu_items.length -
        args.languages_non_eu,
    );
  }

  if (!args.show_site_name) {
    data.site_name = '';
  } else {
    data.site_name = args.site_name;
  }

  if (!args.show_search) {
    delete data.search_form;
    delete data.search_toggle;
  } else if (args.show_search && !data.search_form) {
    data.search_form = clonedDataFull.search_form;
    data.search_toggle = clonedDataFull.search_toggle;
  }

  if (!args.show_cta_link) {
    delete data.cta_link;
  } else {
    data.cta_link = clonedDataFull.cta_link;
  }

  if (!args.show_banner_top) {
    delete data.banner_top;
  } else {
    data.banner_top = clonedDataFull.banner_top;
  }

  if (!args.show_notification) {
    delete data.notification;
  } else {
    data.notification = clonedDataFull.notification;
  }

  correctPaths(data);

  data.logo.src_desktop = enLogoEC;
  data.logo.src_mobile = enLogoMobileEC;

  return data;
};

export default {
  title: 'Components/Site-wide/Site header',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (_, { loaded: { component } }) => component;

Core.render = async (args) => {
  const renderedCore = await siteHeader(prepareData(dataCore, args));
  return renderedCore;
};
Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = { notes: { markdown: notes, json: dataCore } };

export const Standardised = (_, { loaded: { component } }) => component;

Standardised.render = async (args) => {
  const renderedStandardised = `${await siteHeader(
    prepareData(dataStandardised, args),
  )}<main class="ecl-u-pb-xl" id="main-content" data-inpage-navigation-source-area="h2.ecl-u-type-heading-2, div.ecl-featured-item__heading">
    <div class="ecl-container">
      <div class="ecl-row">
        <div class="ecl-col-s-12 ewcms-top-sidebar">
            <div>
    <div data-drupal-messages-fallback="" class="hidden"></div>
  </div>

        </div>
      </div>
      <div class="ecl-row">
        <div class="ecl-col-s-12">
                      <div id="block-ewcms-theme-main-page-content" data-inpage-navigation-source-area="h2, div.ecl-featured-item__heading" class="ecl-u-mb-l">
  
    
      <article dir="ltr">

  
    

  
  <div>
    

  
  
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_33232"></a>
                                                                                    <div class="ecl-carousel ecl-carousel--full-width" data-ecl-auto-init="Carousel" data-ecl-auto-initialized="true"><div class="ecl-carousel__container"><div class="ecl-carousel__slides" id="ecl-carousel-slider" style="width: 11520px; transition-duration: 0s; left: -7680px;"><div class="ecl-carousel__slide" role="group" aria-label="slide 4 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Farmers-dialogue_11%201_0.png?itok=hgvu1m12" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Strategic Dialogue on the future of EU agriculture</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/european-green-deal/agriculture-and-green-deal/strategic-dialogue-future-eu-agriculture_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 1 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/A-more-secure-Europe%202.png?itok=R2YV3cOn" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">A more secure Europe</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/more-secure-europe_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 2 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Building-a-fairer-and-more-inclusive-Union%202_0.png?itok=vDAQIgWv" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Building a fairer and more inclusive Union</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/building-fairer-and-more-inclusive-union_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 3 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Response-to-Russia%26%2339%3Bs-invasion%202.png?itok=TEmqiX_V" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Solidarity with Ukraine</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/solidarity-ukraine_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 4 of 4" style="width: 16.6667%;"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Farmers-dialogue_11%201_0.png?itok=hgvu1m12" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Strategic Dialogue on the future of EU agriculture</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/european-green-deal/agriculture-and-green-deal/strategic-dialogue-future-eu-agriculture_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 1 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/A-more-secure-Europe%202.png?itok=R2YV3cOn" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">A more secure Europe</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/more-secure-europe_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div></div><button class="ecl-carousel__prev"><svg class="ecl-icon ecl-icon--m ecl-icon--rotate-270 ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg><span class="ecl-u-sr-only">Previous slides</span></button><button class="ecl-carousel__next"><svg class="ecl-icon ecl-icon--m ecl-icon--rotate-90 ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg><span class="ecl-u-sr-only">Next slides</span></button></div><div class="ecl-carousel__controls"><div class="ecl-container"><div class="ecl-carousel__autoplay"><button class="ecl-carousel__play" style="display: none;"><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#play"></use></svg><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-active" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#play-filled"></use></svg><span class="ecl-u-sr-only">Play carousel</span></button><button class="ecl-carousel__pause" style="display: flex;"><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#pause"></use></svg><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-active" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#pause-filled"></use></svg><span class="ecl-u-sr-only">Pause carousel</span></button></div><div class="ecl-carousel__navigation"><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 1</span></button><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 2</span></button><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 3</span></button><button class="ecl-carousel__navigation-item" aria-current="true"><span class="ecl-u-sr-only">Go to slide 4</span></button></div><div class="ecl-carousel__pagination"><span class="ecl-carousel__current">4</span> of <span class="ecl-carousel__max">4</span></div></div></div></div>

  </div>

  

  
  
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31384"></a>
    <div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__title ecl-col-12"><h2 class="ecl-u-type-heading-2">In focus</h2></div></div><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="A woman and a man wearing helmet and looking at a tablet" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-05/european-year-skills.jpg?itok=Rz7wVFH1" alt="A woman and a man wearing helmet and looking at a tablet"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://year-of-skills.europa.eu/index_en" class="ecl-link ecl-link--standalone">European Year of Skills</a></h1></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="Children look out from a carriage window as a train prepares to depart from a station in Lviv" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-05/Children-Ukraine-train-lviv_0.png?itok=EDyUd4_Z" alt="Children look out from a carriage window as a train prepares to depart from a station in Lviv"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://eu-solidarity-ukraine.ec.europa.eu/index_en" class="ecl-link ecl-link--standalone">EU Solidarity with Ukraine</a></h1></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column last-item"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="Humanitarian cargo to Gaza from Ostende airport" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-11/Janez-Lenar%C4%8Di%C4%8D%2C-from-behind.png?itok=nuaazt2j" alt="Humanitarian cargo to Gaza from Ostende airport"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/strategy-and-policy/priorities-2019-2024/stronger-europe-world/middle-east-crisis_en" class="ecl-link ecl-link--standalone">The Middle East crisis</a></h1></div></div></article></div></div></div>

  </div>

    <div class="ewcms-page-section ecl-u-mb-2xl ecl-u-bg-grey-3">
  <div class="ecl-container ecl-u-pv-m">
    <a id="paragraph_39923"></a>
          <div class="ecl"><h2>Highlighted news</h2></div>

  
  </div>

    
  <div class="ecl-container ecl-u-pv-m">
    <a id="paragraph_39924"></a>
          <div id="block-highlightednewshomepage">
  
    
      <div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 "><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/Flag-of-bulgaria-and-romania.jpg?h=ef1d7280&amp;itok=DP_IIhA9" alt="Bulgarian and Romanian flags"></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">Press release</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-31T12:00:00Z">31 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1722" class="ecl-link ecl-link--standalone">Bulgaria and Romania join the Schengen area</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 "><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/P034241003102-67773.jpg?h=14ca6b62&amp;itok=f9pEEeF5" alt="Erasmus students inscription for the Spring Semester of the Free University of Berlin"></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-27T12:00:00Z">27 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/news/commission-rolls-out-plans-european-degree-2024-03-27_en" class="ecl-link ecl-link--standalone">Commission rolls out plans for a European degree</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column"><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/avportal/P-063474/00-12.jpg?itok=_GUVWKUQ" alt="Participation of Ursula von der Leyen, President of the European Commission, in the Brussels European Council "></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-25T12:00:00Z">25 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://ec.europa.eu/commission/presscorner/detail/en/ac_24_1706" class="ecl-link ecl-link--standalone">EU Leaders discuss support for Ukraine, enlargement, and the situation in the Middle East</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column last-item"><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/firefighting%20plane%20slovenia.jpg?h=ed439f42&amp;itok=mRT_JLe0" alt="A firefighting airplane near Nova Gorica in Slovenia."></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" data-ecl-auto-initialized="true"><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">Press release</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-25T12:00:00Z">25 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://ec.europa.eu/commission/presscorner/detail/en/ip_24_1685" class="ecl-link ecl-link--standalone">EU provides €600 million to buy new firefighting planes</a></h1><div class="ecl-content-block__list-container"></div></div></article></div></div><div class="ecl-row"><div class="ecl-content-item-block__button ecl-col-12"><div class="ecl-u-clearfix ecl-u-pv-m"><a href="/highlighted-news_en" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before"><svg class="ecl-icon ecl-icon--xs ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#list"></use></svg><span class="ecl-link__label">See more news</span></a></div></div></div></div>
  </div>

  
  </div>

    
  <div class="ecl-container ecl-u-pv-m">
    <a id="paragraph_39925"></a>
          <div class="ecl"><p>Looking for the Commission's press releases and daily updates?&nbsp;Visit the&nbsp;<a href="https://ec.europa.eu/commission/presscorner/home/en" class="ecl-link">Press Corner</a></p></div>

  
  </div>

  </div>  
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31386"></a>
          <div class="ecl"><h2>Your European Commission</h2></div>

  
  </div>

    
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31387"></a>
    



    
  

              


<article class="ecl-featured-item ecl-featured-item--extended"><div class="ecl-featured-item__container ecl-featured-item__container--right"><div class="ecl-featured-item__item"><div class="ecl-media-container ecl-featured-item__media_container"><figure class="ecl-media-container__figure"><picture class="ecl-picture ecl-media-container__picture"><img class="ecl-media-container__media" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_medium_no_crop/public/2023-12/Commissioners-12-2023.jpg?itok=5uX_BY_c" alt="commissioners standing together"></picture></figure></div></div><div class="ecl-featured-item__item"><div class="ecl-featured-item__description"><div class="ecl"><p><a href="https://commissioners.ec.europa.eu/index_en" class="ecl-link ecl-link--standalone"><strong>President Ursula von der Leyen and the&nbsp;College of Commissioners</strong></a><br>
The Commission's work is steered by a College of Commissioners, and led by its President.&nbsp;</p><p><strong><a href="/about-european-commission_en" class="ecl-link ecl-link--standalone">About the European Commission</a></strong><br>
Learn about the European Commission's role in instigating and implementing the EU's policies.</p><p><strong><a href="/strategy-and-policy_en" class="ecl-link ecl-link--standalone">Strategy</a></strong><br>
Find out how the EU's strategy is developed and translated into policies and initiatives by the European Commission.</p><p><strong><a href="https://ec.europa.eu/info/law/better-regulation/have-your-say_en" class="ecl-link ecl-link--standalone">Have your say</a></strong><br>
Share your views on new EU policies and existing laws.</p></div></div></div></div></article>

  </div>

    
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31388"></a>
      
  
  

<div>
  <section class="ecl-banner ecl-banner--text-box ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2022-11/221014_banner_for-a-union_1920x480_300dpi%20%281%29.jpg?itok=UCU77wez" alt="Illustrative image"></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Agenda for Europe</span></div><p class="ecl-banner__description"><span class="ecl-banner__description-text">Key priorities of the European Commission for 2019-2024</span></p><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--xs ecl-icon--rotate-90 ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section>
</div>


  </div>

    
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_33215"></a>
      <h2 class="ecl-u-type-heading-2">Topics</h2>

<div class="navigation-lists-block"><div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/business-economy-euro_en" class="ecl-link ecl-link--standalone">Business, Economy, Euro</a></h1><div class="ecl-content-block__description">EU economy, the euro, and practical information for EU businesses and entrepreneurs.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/live-work-travel-eu_en" class="ecl-link ecl-link--standalone">Live, work, travel in the EU</a></h1><div class="ecl-content-block__description">Advice on living, working or travelling in the EU, on visas and immigration for non-EU citizens, European culture.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/law_en" class="ecl-link ecl-link--standalone">Law</a></h1><div class="ecl-content-block__description">EU law and judgments, how EU law is applied, public consultations, data protection, infringements, fraud, serious crime.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/funding-tenders_en" class="ecl-link ecl-link--standalone">Funding, Tenders</a></h1><div class="ecl-content-block__description">EU funding, grants, tenders, and how to apply.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/research-and-innovation_en" class="ecl-link ecl-link--standalone">Research and innovation</a></h1><div class="ecl-content-block__description">Research funding, partners, results and EU action to promote innovation.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/energy-climate-change-environment_en" class="ecl-link ecl-link--standalone">Energy, Climate change, Environment</a></h1><div class="ecl-content-block__description">Action by the EU on environmental protection, climate change and clean energy.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/education_en" class="ecl-link ecl-link--standalone">Education</a></h1><div class="ecl-content-block__description">Education and training opportunities, EU actions on schools, youth, higher education, adult learning and vocational training.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/aid-development-cooperation-fundamental-rights_en" class="ecl-link ecl-link--standalone">Aid, Development cooperation, Fundamental rights</a></h1><div class="ecl-content-block__description">EU promotion of fundamental rights, development and humanitarian aid, current and upcoming projects, partner organisations.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 "><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/jobs-european-commission_en" class="ecl-link ecl-link--standalone">Jobs at the European Commission</a></h1><div class="ecl-content-block__description">Permanent and temporary jobs, traineeships, how to apply, EU careers office EPSO.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/statistics_en" class="ecl-link ecl-link--standalone">Statistics</a></h1><div class="ecl-content-block__description">Official EU statistics, public opinion polls, trends and forecasts.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/food-farming-fisheries_en" class="ecl-link ecl-link--standalone">Food, Farming, Fisheries</a></h1><div class="ecl-content-block__description">Rules and policy for safety and quality, information and statistics on products and markets.</div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column last-item"><article class="ecl-navigation-list__item ecl-navigation-list__item--no-border"><div class="ecl-content-block ecl-navigation-list__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title"><a href="/eu-regional-and-urban-development_en" class="ecl-link ecl-link--standalone">EU regional and urban development</a></h1><div class="ecl-content-block__description">EU support for job creation, economic growth, business competitiveness, and sustainable development.</div></div></article></div></div></div></div>


  </div>

    
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31413"></a>
          <div id="block-eventsandpublications">
  
    
      <div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__title ecl-col-12"><h2 class="ecl-u-type-heading-2">Events and publications</h2></div></div><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column"><article class="ecl-card"><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/events_en" class="ecl-link ecl-link--standalone">Events</a></h1><div class="ecl-content-block__description"><p>Upcoming events organised by the European Commission.</p></div></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column last-item"><article class="ecl-card"><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block=""><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/publications_en" class="ecl-link ecl-link--standalone">Publications</a></h1><div class="ecl-content-block__description"><p>Search for Commission documents on this website. These include Commission plans, reports, studies, factsheets and much more.</p></div></div></div></article></div></div></div>
  </div>

  
  </div>

    
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31414"></a>
    
                                                                  
<div class="ecl-social-media-follow ecl-social-media-follow--horizontal"><p class="ecl-social-media-follow__description">Follow the latest progress and learn more about getting involved.</p><ul class="ecl-social-media-follow__list"><li class="ecl-social-media-follow__item"><a href="https://twitter.com/EU_commission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-follow__link"><svg class="ecl-icon ecl-icon--l ecl-link__icon ecl-social-media-follow__icon" focusable="false" aria-hidden="true"><use href="/themes/contrib/oe_theme/dist/ec/images/icons-social-media/sprites/icons-social-media.svg#twitter-color"></use></svg><span class="ecl-link__label">Twitter</span></a></li><li class="ecl-social-media-follow__item"><a href="https://www.facebook.com/EuropeanCommission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-follow__link"><svg class="ecl-icon ecl-icon--l ecl-link__icon ecl-social-media-follow__icon" focusable="false" aria-hidden="true"><use href="/themes/contrib/oe_theme/dist/ec/images/icons-social-media/sprites/icons-social-media.svg#facebook-color"></use></svg><span class="ecl-link__label">Facebook</span></a></li><li class="ecl-social-media-follow__item"><a href="https://www.instagram.com/europeancommission/" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-follow__link"><svg class="ecl-icon ecl-icon--l ecl-link__icon ecl-social-media-follow__icon" focusable="false" aria-hidden="true"><use href="/themes/contrib/oe_theme/dist/ec/images/icons-social-media/sprites/icons-social-media.svg#instagram-color"></use></svg><span class="ecl-link__label">Instagram</span></a></li><li class="ecl-social-media-follow__item"><a href="https://www.linkedin.com/company/european-commission" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-follow__link"><svg class="ecl-icon ecl-icon--l ecl-link__icon ecl-social-media-follow__icon" focusable="false" aria-hidden="true"><use href="/themes/contrib/oe_theme/dist/ec/images/icons-social-media/sprites/icons-social-media.svg#linkedin-color"></use></svg><span class="ecl-link__label">Linkedin</span></a></li><li class="ecl-social-media-follow__item"><a href="https://www.youtube.com/user/eutube" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before ecl-social-media-follow__link"><svg class="ecl-icon ecl-icon--l ecl-link__icon ecl-social-media-follow__icon" focusable="false" aria-hidden="true"><use href="/themes/contrib/oe_theme/dist/ec/images/icons-social-media/sprites/icons-social-media.svg#youtube-color"></use></svg><span class="ecl-link__label">Youtube</span></a></li><li class="ecl-social-media-follow__item"><a href="https://european-union.europa.eu/contact-eu/social-media-channels_en" class="ecl-link ecl-link--standalone ecl-social-media-follow__link">Other social networks</a></li></ul></div>

  </div>

  
  </div>

</article>

  </div>

            
                  </div>
      </div>
      <div class="ecl-row">
        <div class="ecl-col-s-12">
          
            <div>
    <div id="block-ewcms-theme-socialshare">
  
    
      <div class="ecl-social-media-share">
  <p class="ecl-social-media-share__description">
    Share this page
  </p>
  <div class="sbkm wt wt-sbkm wt-ecl-social-media-share" data-nosnippet="true"><ul class="wt-ecl-social-media-share__list"><li class="wt-ecl-social-media-share__item ">
      <a href="#twitter" data-href="https://twitter.com/intent/tweet?url={url}&amp;text={title}" role="button" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  "><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="wt-twitter wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.7) translate(11 11)" class="wt-noconflict"><path fill="#1DA1F2" fill-rule="evenodd" d="M15.838 42c16.605 0 25.685-13.85 25.685-25.858 0-.393-.008-.785-.026-1.175A18.422 18.422 0 0 0 46 10.262a17.863 17.863 0 0 1-5.184 1.43 9.107 9.107 0 0 0 3.97-5.026 18.01 18.01 0 0 1-5.733 2.205A8.997 8.997 0 0 0 32.465 6c-4.986 0-9.03 4.071-9.03 9.088 0 .712.08 1.406.235 2.072-7.503-.38-14.156-3.997-18.608-9.495a9.105 9.105 0 0 0-1.222 4.567 9.095 9.095 0 0 0 4.018 7.565 8.92 8.92 0 0 1-4.09-1.137l-.001.117c0 4.4 3.111 8.075 7.242 8.909a8.895 8.895 0 0 1-4.077.155c1.15 3.611 4.481 6.238 8.433 6.313a18.044 18.044 0 0 1-11.212 3.89c-.727 0-1.446-.043-2.153-.126A25.436 25.436 0 0 0 15.838 42" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Twitter</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#facebook" data-href="http://www.facebook.com/share.php?u={url}&amp;t={title}" role="button" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  "><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="wt-facebook wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.7) translate(10.5 10.5)" class="wt-noconflict"><path fill="#1877F2" d="M46 24.134C46 11.911 36.15 2 24 2S2 11.91 2 24.134C2 35.182 10.045 44.34 20.563 46V30.532h-5.586v-6.398h5.585v-4.876c0-5.548 3.285-8.612 8.31-8.612 2.407 0 4.925.432 4.925.432v5.448h-2.775c-2.732 0-3.584 1.705-3.584 3.457v4.151h6.1l-.973 6.398h-5.127V46C37.954 44.339 46 35.182 46 24.134" class="wt-noconflict"></path><path fill="#FFF" d="m32.756 30.539.984-6.287h-6.16v-4.079c0-1.72.862-3.396 3.62-3.396H34v-5.353S31.458 11 29.028 11c-5.073 0-8.39 3.01-8.39 8.461v4.791H15v6.287h5.639v15.197c1.131.174 2.29.264 3.47.264 1.182 0 2.34-.09 3.47-.264V30.54h5.177Z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Facebook</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#linkedin" data-href="http://www.linkedin.com/shareArticle?mini=true&amp;url={url}&amp;title={title}&amp;ro=false&amp;summary=&amp;source=" role="button" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  "><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="wt-linkedin wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.7) translate(10 10)" class="wt-noconflict"><path fill="#0A66C2" d="M42.74 2.003H5.247A3.21 3.21 0 0 0 2 5.175v37.65A3.213 3.213 0 0 0 5.247 46H42.74A3.22 3.22 0 0 0 46 42.825V5.172A3.218 3.218 0 0 0 42.74 2" class="wt-noconflict"></path><path fill="#fff" d="M31.295 17.778c6.506 0 7.705 4.286 7.705 9.863L38.997 39H32.58V28.6c-.01-2.345-.193-5.161-3.338-5.161-3.266 0-3.83 2.496-3.854 5.129v10.431h-6.42V18.293h6.162v2.83h.087a6.75 6.75 0 0 1 6.08-3.345Zm-16.36.515V39H8.509V18.293h6.426ZM11.725 8a3.728 3.728 0 0 1 3.724 3.73c0 .99-.392 1.94-1.09 2.64a3.721 3.721 0 0 1-2.634 1.093A3.728 3.728 0 0 1 8 11.732 3.728 3.728 0 0 1 11.724 8Z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">LinkedIn</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#email" data-href="mailto:?subject={title}&amp;body={url}" role="button" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  "><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="wt-email wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path d="M0 0h48v48H0z" fill="none" class="wt-noconflict"></path><path d="M4 11v26h40V11zm37 2L24 24 7 13zM24 25.69 6 14v21h36V14z" fill-rule="evenodd" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">E-mail</span></a></li><li class="wt-ecl-social-media-share__item ">
        <div class="wt-share--menu">
          <a href="#share" class="wt-ecl-link wt-ecl-link--standalone
          wt-ecl-link--icon wt-ecl-link--icon-before wt-ecl-social-media-share__link " role="button" aria-haspopup="true" aria-expanded="false" aria-controls="share_s242o5qx5q">
            <svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-share-color wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#15a0b7" d="M26 22.6c-1.5 0-2.8.8-3.6 2L17.8 22c.3-.6.5-1.2.5-1.9 0-.4-.1-.8-.2-1.2l4.8-2.7c.8.9 1.9 1.4 3.1 1.4 2.4 0 4.3-1.9 4.3-4.3s-2-4.4-4.3-4.4c-2.4 0-4.3 1.9-4.3 4.3 0 .4.1.8.2 1.2l-4.8 2.7c-.8-.8-1.9-1.4-3.1-1.4-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3c1 0 1.9-.3 2.6-.9l5.2 3v.5c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3-2.1-4.3-4.4-4.3z" class="wt-noconflict"></path></svg>
            <span class="wt-ecl-link__label">More share options</span>
          </a>
          <ul role="menu" id="share_s242o5qx5q" class="wt-share--menu-content" hidden=""><li class="wt-ecl-social-media-share__item ">
      <a href="#pinterest" data-href="http://www.pinterest.com/pin/create/button/?url={url}&amp;media=http%3 A%2F%2Fec.europa.eu%2Fwel%2Ftemplate-2012%2Fimages%2Flogo%2Flogo_en.gif&amp;description={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 144 144" class="wt-pinterest wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.7) translate(30 30)" class="wt-noconflict"><path fill="#e60023" d="M71.9,5.4C35.1,5.4,5.3,35.2,5.3,72c0,28.2,17.5,52.3,42.3,62c-0.6-5.3-1.1-13.3,0.2-19.1  c1.2-5.2,7.8-33.1,7.8-33.1s-2-4-2-9.9c0-9.3,5.4-16.2,12-16.2c5.7,0,8.4,4.3,8.4,9.4c0,5.7-3.6,14.3-5.5,22.2  c-1.6,6.6,3.3,12,9.9,12c11.8,0,20.9-12.5,20.9-30.5c0-15.9-11.5-27.1-27.8-27.1c-18.9,0-30.1,14.2-30.1,28.9 c0,5.7,2.2,11.9,5,15.2c0.5,0.7,0.6,1.2,0.5,1.9c-0.5,2.1-1.6,6.6-1.8,7.5c-0.3,1.2-1,1.5-2.2,0.9c-8.3-3.9-13.5-16-13.5-25.8 c0-21,15.3-40.3,44-40.3c23.1,0,41,16.5,41,38.4c0,22.9-14.5,41.4-34.5,41.4c-6.7,0-13.1-3.5-15.3-7.6c0,0-3.3,12.7-4.1,15.8  c-1.5,5.8-5.6,13-8.3,17.5c6.2,1.9,12.8,3,19.7,3c36.8,0,66.6-29.8,66.6-66.6C138.5,35.2,108.7,5.4,71.9,5.4z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Pinterest</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#blogger" data-href="http://www.blogger.com/blog_this.pyra?t={title}&amp;u={url}&amp;n={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-blogger wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#fbc866" d="M30.1 18.2V18l-.4-.2c-.4-.2-2.3 0-2.8-.5-.4-.4-.4-.9-.5-1.8-.2-1.5-.4-1.6-.6-2.2-.8-2-3.4-3.4-4.9-3.5h-4.6c-3.6 0-6.5 2.9-6.5 6.5v7.6c0 3.5 2.9 6.5 6.5 6.5h7.5c3.6 0 6.5-2.9 6.5-6.5v-5.2l-.2-.5zm-13.7-3.1H20c.7 0 1.2.6 1.2 1.2 0 .7-.6 1.2-1.2 1.2h-3.6c-.7 0-1.2-.6-1.2-1.2-.1-.6.5-1.2 1.2-1.2zm7.3 9.8h-7.3c-.7 0-1.2-.6-1.2-1.2 0-.7.6-1.2 1.2-1.2h7.3c.7 0 1.2.6 1.2 1.2s-.5 1.2-1.2 1.2z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Blogger</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#pocket" data-href="https://getpocket.com/edit.php?url={url}&amp;title={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-pocket wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#ff0042" d="M8.5 11.3c.6-1.3 1.6-1.6 2.9-1.6h17.5c.7 0 1.4 0 1.9.5.3.4.6.9.6 1.3 0 2.8.1 5.7-.1 8.5-.4 4.7-3.9 8.6-8.5 9.7-6.5 1.6-12.9-2.4-14.2-9-.1-.5-.1-.9-.2-1.4.1-2.6.1-5.3.1-8zM20 20.1c-.3-.3-.6-.5-.8-.8-1.1-1.1-2.3-2.2-3.4-3.3-.7-.7-1.7-.7-2.3 0-.6.6-.6 1.6.1 2.3l5.4 5.1c.7.7 1.5.7 2.2.1 1.9-1.7 3.7-3.5 5.5-5.3.9-.9.4-2.4-.9-2.7-.7-.1-1.1.2-1.6.6-1.4 1.4-2.8 2.7-4.2 4z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Pocket</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#tumblr" data-href="http://www.tumblr.com/share?v=3&amp;u={url}&amp;t={title}&amp;s=" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-tumblr wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#36455c" d="M13.4 18v-3.1c.9-.3 1.6-.7 2.2-1.2.6-.5 1.1-1.1 1.5-1.9.4-.7.6-1.7.8-2.8H21v5.5h5V18h-5.1v5.6c0 1.2.1 2.1.2 2.4.1.3.4.6.7.8.5.3 1 .4 1.6.4 1.1 0 2.2-.4 3.3-1.1v3.4c-.9.4-1.7.8-2.5.9-.8.2-1.6.3-2.4.3-1 0-1.9-.1-2.6-.4-.8-.3-1.4-.6-1.9-1.1-.5-.4-.9-.9-1.1-1.5-.2-.5-.3-1.3-.3-2.3V18h-2.5z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Tumblr</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#yammer" data-href="https://www.yammer.com/home/bookmarklet?t={title}&amp;u={url}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-yammer wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g fill="#0093be" transform="translate(97.881 120)" class="wt-noconflict"><path d="M-72.9-99.4c1.9.4 3.9.6 5.9.7.7.1 1.3-.6 1.3-1.2 0-.7-.6-1.3-1.3-1.2-2 .1-4 .3-5.9.7-.3.1-1.2.2-1.2.5 0 .4.9.4 1.2.5z" class="wt-noconflict"></path><path d="M-88.9-110.4c-.4 0-.7.2-.9.5-.2.3-.3.7-.1 1.1 0 0 1.6 4 3.1 8.1.8 2 1.6 4 2.2 5.6-.2.5-.4.9-.5 1.3-.1.3-.2.4-.3.6-.3.6-.9 1-1.4 1.1-.9.1-1.9.1-1.9.1-.3 0-.6.2-.8.4-.2.2-.3.5-.3.8 0 .3.2.6.4.8s.5.3.8.3c.9 0 1.2 0 2.4-.2 1.8-.5 2.7-1.6 3.3-3.1.2-.5.5-1.2.8-2 .6-1.6 1.4-3.7 2.2-5.7 1.6-4.1 3.1-8.1 3.1-8.1.1-.4.1-.8-.1-1.1-.2-.3-.6-.5-1-.5-.2 0-.4.1-.6.2-.2.1-.3.3-.4.5 0 0-1.6 4-3.1 8.1-.4 1.1-.9 2.2-1.3 3.3-.4-1.1-.8-2.1-1.3-3.3-1.6-4.1-3.1-8.1-3.1-8.1-.1-.2-.2-.4-.4-.5-.3-.1-.5-.2-.8-.2z" class="wt-noconflict"></path><path d="M-75.1-95.6c1.4 1.4 3.1 2.5 4.7 3.7.6.4 1.4.2 1.7-.4.4-.6.1-1.4-.5-1.7-1.8-.9-3.5-1.8-5.4-2.5-.3-.1-1.1-.5-1.3-.2-.2.4.5.9.8 1.1z" class="wt-noconflict"></path><path d="M-75.1-104.2c1.4-1.4 3.1-2.5 4.7-3.7.6-.4 1.4-.2 1.7.4.4.6.1 1.4-.5 1.7-1.8.9-3.5 1.8-5.4 2.5-.3.1-1.1.5-1.3.2-.2-.4.5-.9.8-1.1z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Yammer</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#digg" data-href="http://digg.com/submit?phase=2&amp;url={url}&amp;title={title}&amp;bodytext=" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-digg wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#4b4b4c" d="M5.7 25v-9.5c0-.2.1-.3.3-.3h4.5V12c0-.2.1-.4.3-.4h2.5v13.1c0 .2-.1.4-.3.4H5.7V25zm2.8-2.1h1.7c.2 0 .3-.1.3-.4v-5.2H8.8c-.2 0-.3.1-.3.4v5.2zm5.7 2.1v-9.5c0-.2.1-.3.3-.3H17v9.4c0 .2-.1.4-.3.4h-2.5zm0-11.3V12c0-.2.1-.4.3-.4H17v1.8c0 .2-.1.4-.3.4h-2.5v-.1zM18 25v-9.5c0-.2.1-.3.3-.3h7.3V28c0 .2-.1.3-.3.3H18v-1.8c0-.2.1-.4.3-.4h4.5V25H18zm2.8-2.1h1.7c.2 0 .3-.1.3-.4v-5.2h-1.7c-.2 0-.3.1-.3.4v5.2zm5.8 3.7c0-.2.1-.4.3-.4h4.5V25h-4.8v-9.5c0-.2.1-.3.3-.3h7.3V28c0 .2-.1.3-.3.3h-7.3v-1.7zm2.8-3.7h1.7c.2 0 .3-.1.3-.4v-5.2h-1.7c-.2 0-.3.1-.3.4v5.2z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Digg</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#reddit" data-href="http://reddit.com/submit?url={url}&amp;title={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" class="wt-reddit wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.65) translate(6.5 6.5)" class="wt-noconflict"><path fill="#ff4500" d="M14.238 15.348c.085.084.085.221 0 .306-.465.462-1.194.687-2.231.687l-.008-.002-.008.002c-1.036 0-1.766-.225-2.231-.688-.085-.084-.085-.221 0-.305.084-.084.222-.084.307 0 .379.377 1.008.561 1.924.561l.008.002.008-.002c.915 0 1.544-.184 1.924-.561.085-.084.223-.084.307 0zm-3.44-2.418c0-.507-.414-.919-.922-.919-.509 0-.923.412-.923.919 0 .506.414.918.923.918.508.001.922-.411.922-.918zm13.202-.93c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm-5-.129c0-.851-.695-1.543-1.55-1.543-.417 0-.795.167-1.074.435-1.056-.695-2.485-1.137-4.066-1.194l.865-2.724 2.343.549-.003.034c0 .696.569 1.262 1.268 1.262.699 0 1.267-.566 1.267-1.262s-.568-1.262-1.267-1.262c-.537 0-.994.335-1.179.804l-2.525-.592c-.11-.027-.223.037-.257.145l-.965 3.038c-1.656.02-3.155.466-4.258 1.181-.277-.255-.644-.415-1.05-.415-.854.001-1.549.693-1.549 1.544 0 .566.311 1.056.768 1.325-.03.164-.05.331-.05.5 0 2.281 2.805 4.137 6.253 4.137s6.253-1.856 6.253-4.137c0-.16-.017-.317-.044-.472.486-.261.82-.766.82-1.353zm-4.872.141c-.509 0-.922.412-.922.919 0 .506.414.918.922.918s.922-.412.922-.918c0-.507-.413-.919-.922-.919z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Reddit</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#printfriendly" data-href="http://www.printfriendly.com/printc?url={url}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="5 -5 130 150" class="wt-printfriendly wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.9) translate(10 10)" class="wt-noconflict"><path fill="#00B0F0" d="M 118.518 37.51 L 63.12 5.526 L 63.12 39.086 L 63.12 46.125 L 63.12 69.497 L 118.515 101.477 L 118.518 101.48 L 118.518 87.408 L 118.518 37.51 Z" class="wt-noconflict"></path><path fill="#FFD803" d="M 36.773 84.765 L 7.715 101.543 L 63.114 133.526 L 106.355 108.558 L 50.512 108.558 L 36.773 84.765 Z" class="wt-noconflict"></path><path fill="#ED008D" d="M 54.575 101.52 L 104.517 101.52 L 56.134 73.586 L 56.084 73.556 L 56.084 46.125 L 22.591 46.125 L 42.867 81.247 L 54.575 101.52 Z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">PrintFriendly</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#viadeo" data-href="http://www.viadeo.com/shareit/share/?url={url}&amp;title={title}&amp;encoding=UTF-8" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-viadeo wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#f07355" d="M8.8 23.1c0 2.5.9 4.7 2.6 6.5 1.7 1.9 3.9 2.8 6.6 2.8 2.7 0 4.9-.9 6.6-2.8 1.7-1.8 2.6-4 2.6-6.5 0-1.3-.2-2.6-.7-3.7-.7.4-1.4.7-2.2.9.4.9.6 1.8.6 2.9 0 1.3-.3 2.5-.9 3.6-.6 1.1-1.5 2-2.5 2.6-1.1.6-2.2.9-3.4.9-1.3 0-2.4-.3-3.5-.9-1.1-.6-1.9-1.5-2.5-2.6-.6-1.1-.9-2.3-.9-3.6 0-2 .7-3.7 2-5.1 1.4-1.4 3-2.1 4.9-2.1.9 0 1.7.2 2.5.5.1-.7.3-1.4.7-2.2-1-.4-2-.5-3.2-.5-2.7 0-5 1-6.8 3-1.7 1.6-2.5 3.8-2.5 6.3zm7.1 6.4l1.4.1c1.3-.8 2.3-1.7 3.2-2.8.9-1.1 1.5-2.1 1.8-3.2.4-1.1.6-2.1.8-3.2.1-.7.2-1.4.2-2 0-.4 0-.7-.1-1-.1-.9-.2-1.8-.3-2.5-.1-.7-.3-1.3-.4-1.7l-.2-.6c-.4-1.2-.7-2.2-1.1-3-.4-.9-.6-1.4-.8-1.7l-.3-.4c.7.3 1.2.7 1.6 1.2.4.5.6.9.7 1.4.1.3.1.7.1 1v.2c0 .4-.1.7-.2.9l-.1.3c.1 1 .1 1.9.1 2.9 0 .9 0 1.7-.1 2.6-.2 1.7-.4 3.1-.8 4.3-.4 1.1-.8 2.2-1.3 3.1-.5.9-1 1.7-1.5 2.2-.5.5-1 1-1.4 1.3-.4.3-.8.6-1 .7l-.3-.1zm7-16.2c.1-.7.3-1.2.6-1.6l.5-.7c.2-.2.5-.5 1-.7.5-.2.9-.4 1.2-.5l.5-.2c.6-.1 1.2-.4 1.7-.9s.9-.9 1.1-1.3l.3-.6c.7 1 1.1 2.1 1.2 3.3.1.5.1 1 .1 1.5 0 .6-.1 1.1-.2 1.5l-.3 1.1c-.2.6-.5 1.1-.9 1.5-.4.5-.7.8-.9.9l-.4.3c-.6.3-1.1.5-1.7.5L23.9 16c1-.5 1.8-1.1 2.6-1.7.7-.6 1.3-1 1.6-1.5s.6-.8.8-1.1c.2-.3.3-.6.4-.8l.1-.3c-.3.7-.7 1.3-1.2 1.9-.5.6-1 1-1.6 1.3-.5.3-1 .6-1.5.8-.5.2-.9.4-1.2.5l-.5.1c-.4-.7-.6-1.4-.6-2 .1.3.1.2.1.1z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Viadeo</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#typepad" data-href="http://www.typepad.com/services/quickpost/post?v=2&amp;qp_show=ac&amp;qp_title={title}&amp;qp_href={url}&amp;qp_text=" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1000 1000" class="wt-typepad wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.8) translate(100 160)" class="wt-noconflict"><path fill="#d2de61" d="M990,500c0,165.8-219.4,300.2-490,300.2c-149.7,0-375.2-43.4-373.6-106c1.6-61.5,394.1-244.1,394.1-244.1S155,613.3,40.6,604.6C15.6,602.7,10,536.8,10,500c0-165.8,219.4-300.2,490-300.2C770.6,199.8,990,334.2,990,500z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Typepad</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#netvibes" data-href="http://www.netvibes.com/share?title={title}&amp;url={url}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40" class="wt-netvibes wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><path fill="#1ec11d" d="M23.6 16.4V8.8h-7.3v7.6H8.8v7.3h7.6v7.6h7.3v-7.6h7.6v-7.3h-7.7z" class="wt-noconflict"></path></svg><span class="wt-ecl-link__label">Netvibes</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#gmail" data-href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;tf=1&amp;to=&amp;su={title}&amp;body={url}&amp;zx=RANDOMCRAP&amp;shva=1&amp;disablechatbrowsercheck=1&amp;ui=1" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 560 560" class="wt-gmail wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g fill-rule="nonzero" transform="matrix(4 0 0 4 -95 -40)" class="wt-noconflict"><path d="m58 108h14v-34l-20-15v43c0 3.32 2.69 6 6 6" fill="#4285f4" class="wt-noconflict"></path><path d="m120 108h14c3.32 0 6-2.69 6-6v-43l-20 15" fill="#34a853" class="wt-noconflict"></path><path d="m120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" fill="#fbbc04" class="wt-noconflict"></path><path d="m72 74v-26l24 18 24-18v26l-24 18" fill="#ea4335" class="wt-noconflict"></path><path d="m52 51v8l20 15v-26l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" fill="#c5221f" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Gmail</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#yahoomail" data-href="http://compose.mail.yahoo.com/?Subject={title}&amp;body={url}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 76 76" class="wt-yahoomail wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(1.3) translate(-8 -8)" class="wt-noconflict"><path fill="#7b0099" fill-opacity="1" stroke-width="0.2" stroke-linejoin="round" d="M 54.2291,23.75L 59.375,23.75C 60.2494,23.75 60.9583,24.4589 60.9583,25.3334L 57,45.125C 57,45.9995 56.2911,46.7083 55.4167,46.7083L 53.4375,46.7083C 52.563,46.7083 51.8542,45.9995 51.8542,45.125L 52.6458,25.3334C 52.6458,24.4589 53.3547,23.75 54.2291,23.75 Z M 54.2292,53.8333L 51.8541,53.8333C 50.9797,53.8333 50.2708,53.1245 50.2708,52.25L 50.6666,50.6667C 50.6666,49.7922 51.3755,49.0833 52.25,49.0833L 54.625,49.0833C 55.4994,49.0833 56.2083,49.7922 56.2083,50.6667L 55.8125,52.25C 55.8125,53.1245 55.1036,53.8333 54.2292,53.8333 Z M 31.6667,23.75C 41.2856,23.75 49.0833,30.4844 49.0833,38.7917C 49.0833,47.0989 41.2856,53.8333 31.6667,53.8333C 22.0477,53.8333 14.25,47.0989 14.25,38.7917C 14.25,30.4844 22.0477,23.75 31.6667,23.75 Z M 27.7083,46.7083L 27.7083,49.0834L 37.2083,49.0834L 37.2083,46.7083L 34.0416,46.7083L 34.0416,42.75L 39.9791,35.625L 41.9583,35.625L 41.9583,33.25L 34.0417,33.25L 34.0417,35.625L 36.8125,35.625L 32.7083,40.0028L 28.1041,33.25L 30.875,33.25L 30.875,30.875L 22.9583,30.875L 22.9583,33.25L 24.9375,33.25L 30.875,42.75L 30.875,46.7083L 27.7083,46.7083 Z " class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">YahooMail</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#qzone" data-href="https://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&amp;title={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1024 1024" class="wt-qzone wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.7) translate(230 160)" class="wt-noconflict"><path fill="#FFCE00" d="M504.768 24.224c-5.216 2.144-19.872 17.728-19.872 21.28 0 1.184-22.944 49.888-51.072 108.064S381.568 262.56 380.16 266.592c-1.184 3.776-3.328 8.288-4.256 9.696-1.184 1.408-7.808 14.176-14.88 28.384-7.552 15.616-15.616 28.608-20.096 32.16-10.88 9.216-3.552 8.288-221.312 32.64C21.248 380.576 10.368 382.24 4.48 387.68c-4.256 3.776-5.92 17.504-2.848 25.536 0.96 2.112 43.264 42.336 94.112 89.376 160.768 148.48 150.368 138.08 150.368 149.184 0 5.44-3.296 25.056-7.104 43.968-4.032 18.912-12.992 66.208-20.32 105.216s-15.84 83.712-18.912 99.296c-16.32 83.232-16.544 85.6-8.032 94.592 8.032 8.512 17.248 7.552 41.6-4.736 22.688-11.584 24.832-12.768 69.504-39.008 16.32-9.472 37.6-21.76 47.296-27.2s27.648-16.064 39.712-23.392 22.464-13.248 23.168-13.248c0.48 0 7.808-4.256 16.064-9.472s15.84-9.44 16.8-9.44c0.96 0 9.472-4.736 18.912-10.624 22.464-13.952 41.856-21.056 52.96-18.912 4.736 0.96 16.064 5.44 25.056 10.4 23.648 12.544 172.608 98.368 218.944 126.016 39.488 23.648 51.072 28.128 64.544 24.576 8.992-2.144 11.584-15.136 8.512-40.896-1.408-11.584-3.552-24.608-4.736-29.088-1.888-7.552-9.696-49.408-28.608-154.4-8.736-49.888-8.736-50.848 10.88-58.176 27.2-10.176 39.968-19.136 35.008-24.128-1.664-1.664-16.8 0.256-48.224 5.92-58.4 10.624-70.464 12.288-132.16 17.984-70.208 6.624-135.008 8.032-221.568 4.96-67.616-2.368-148-8.288-152.512-11.104-3.552-2.368-1.888-9.696 3.552-14.432 2.848-2.592 38.784-28.384 79.68-57.44 128.16-90.784 211.392-150.848 218.24-157.248 11.808-11.104 10.88-11.584-38.304-17.984-77.792-9.92-98.112-11.584-224.864-17.504-42.336-1.888-80.64-4.256-85.12-4.96-46.336-7.808 189.856-29.088 289.632-26.016 65.504 1.888 142.592 7.328 187.968 13.248 42.336 5.664 44.928 6.144 44.928 10.88 0 3.776-4.48 7.104-104.032 75.648-40.896 28.384-84.416 58.4-96.704 66.912-12.064 8.512-24.576 17.248-27.424 19.136-13.248 8.992-57.696 39.968-69.984 48.928-7.808 5.664-13.952 11.808-13.952 13.728 0 4.48 11.584 7.328 47.296 11.584 94.816 11.104 271.2 17.248 279.008 9.472 1.664-1.664 1.408-6.848-1.184-17.728-1.888-8.288-3.552-16.096-3.552-17.248 0-3.328 40.192-43.52 95.744-95.52 146.816-137.6 150.144-140.928 150.144-151.808 0-9.472-7.808-17.984-19.392-20.8-5.664-1.408-39.488-5.216-75.2-8.736-35.712-3.328-75.2-7.104-87.488-8.288-12.288-1.408-38.304-4.032-57.92-6.144-74.944-7.552-97.888-10.4-103.328-12.992-10.4-4.736-20.096-24.128-91.744-185.376C537.824 44.8 533.344 35.584 526.24 29.216c-5.888-5.44-15.104-7.552-21.504-4.96z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Qzone</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#weibo" data-href="http://service.weibo.com/share/share.php?url={url}&amp;title={title}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48" class="wt-weibo wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(.9) translate(4 2)" class="wt-noconflict"><path fill="#fff" d="M5.236 30.444c0 5.11 6.672 9.252 14.898 9.252 8.226 0 14.898-4.142 14.898-9.252s-6.672-9.252-14.898-9.252c-8.226 0-14.898 4.142-14.898 9.252Z" class="wt-noconflict"></path><path fill="#E6162D" d="M20.486 38.944c-7.286.72-13.575-2.568-14.048-7.332-.473-4.771 5.052-9.216 12.33-9.936 7.285-.72 13.574 2.567 14.041 7.332.48 4.77-5.045 9.222-12.323 9.936ZM35.05 23.11c-.62-.188-1.045-.309-.723-1.12.704-1.763.778-3.283.013-4.372-1.427-2.034-5.336-1.925-9.817-.055 0 0-1.409.612-1.044-.497.686-2.21.582-4.056-.486-5.128-2.428-2.427-8.894.092-14.437 5.62C4.41 21.693 2 26.083 2 29.88c0 7.253 9.33 11.667 18.456 11.667 11.965 0 19.924-6.933 19.924-12.437.007-3.329-2.805-5.219-5.33-6" class="wt-noconflict"></path><path fill="#F93" d="M42.998 9.834c-2.89-3.197-7.152-4.414-11.085-3.578a1.68 1.68 0 1 0 .703 3.282 8.288 8.288 0 0 1 7.88 2.543 8.235 8.235 0 0 1 1.731 8.076c-.285.884.2 1.828 1.088 2.113.886.285 1.833-.2 2.118-1.078v-.006A11.564 11.564 0 0 0 43 9.834" class="wt-noconflict"></path><path fill="#F93" d="M38.56 13.83a5.663 5.663 0 0 0-5.398-1.737 1.452 1.452 0 0 0-1.117 1.72c.17.78.94 1.277 1.718 1.107.936-.2 1.955.092 2.642.848a2.76 2.76 0 0 1 .577 2.707 1.45 1.45 0 0 0 2.762.889 5.644 5.644 0 0 0-1.183-5.534" class="wt-noconflict"></path><path fill="#000" d="M20.887 30.31c-.256.436-.82.642-1.258.46-.437-.176-.57-.666-.322-1.09.256-.424.796-.63 1.226-.46.437.158.595.648.352 1.09m-2.325 2.968c-.704 1.12-2.217 1.61-3.351 1.095-1.117-.508-1.452-1.81-.746-2.906.698-1.09 2.155-1.574 3.284-1.102 1.14.491 1.505 1.78.814 2.913m2.647-7.932c-3.466-.902-7.382.823-8.888 3.87-1.537 3.105-.049 6.556 3.449 7.682 3.63 1.17 7.904-.623 9.391-3.971 1.47-3.282-.364-6.654-3.952-7.58Z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Weibo</span></a></li><li class="wt-ecl-social-media-share__item ">
      <a href="#whatsapp" data-href="https://wa.me/?text={title}+{url}" role="menuitem" class="wt-ecl-link wt-ecl-link--standalone wt-ecl-link--icon wt-ecl-link--icon-before
      wt-ecl-social-media-share__link  " tabindex="-1"><svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 58 58" class="wt-whatsapp wt-ecl-icon wt-ecl-icon--l wt-ecl-link__icon wt-ecl-social-media-share__icon"><g transform="scale(0.65) translate(18 16)" class="wt-noconflict"><path fill="#2CB742" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z" class="wt-noconflict"></path><path fill="#FFFFFF" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z" class="wt-noconflict"></path></g></svg><span class="wt-ecl-link__label">Whatsapp</span></a></li></ul>
        </div>
      </li></ul></div><script type="application/json" data-process="true">{"service":"share","version":"2.0","networks":["twitter","facebook","linkedin","email","more"],"stats":true,"selection":true}</script>
</div>

  </div>

  </div>

        </div>
      </div>
    </div>
  </main>`;
  return renderedStandardised;
};

Standardised.storyName = 'standardised';
Standardised.args = getArgs(dataStandardised);
Standardised.argTypes = getArgTypes(dataStandardised);
Standardised.parameters = {
  notes: { markdown: notes, json: dataStandardised },
};

export const Harmonised = (_, { loaded: { component } }) => component;

Harmonised.render = async (args) => {
  const renderedHarmonised = `${await siteHeader(
    prepareData(dataHarmonised, args),
  )}
  <div class="ecl-container">
  <div class="ecl-row ecl-u-mt-l" data-ecl-inpage-navigation-container>
    <div class="ecl-col-l-3">
      <nav class="ecl-inpage-navigation" data-ecl-auto-init="InpageNavigation" data-ecl-inpage-navigation="true" aria-labelledby="ecl-inpage-navigation-default">
        <div class="ecl-inpage-navigation__title" id="ecl-inpage-navigation-default">Page contents</div>
        <div class="ecl-inpage-navigation__body"><button type="button" class="ecl-inpage-navigation__trigger" id="ecl-inpage-navigation-default-trigger" data-ecl-inpage-navigation-trigger="true" aria-controls="ecl-inpage-navigation-list" aria-expanded="false" aria-label="inpage-navigation trigger"><span class="ecl-inpage-navigation__trigger-current" data-ecl-inpage-navigation-trigger-current="true"></span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-180 ecl-inpage-navigation__trigger-icon" focusable="false" aria-hidden="true">
              <use xlink:href="static/media/../../resources/icons-ec/dist/sprites/icons.svg#corner-arrow"></use>
            </svg></button>
          <ul class="ecl-inpage-navigation__list" data-ecl-inpage-navigation-list="true" id="ecl-inpage-navigation-default-list">
            <li class="ecl-inpage-navigation__item"><a href="#inline-nav-1" class="ecl-link ecl-inpage-navigation__link" data-ecl-inpage-navigation-link>Heading 1</a></li>
            <li class="ecl-inpage-navigation__item"><a href="#inline-nav-2" class="ecl-link ecl-inpage-navigation__link" data-ecl-inpage-navigation-link>Heading 2 with a long title going on several lines</a></li>
            <li class="ecl-inpage-navigation__item"><a href="#inline-nav-3" class="ecl-link ecl-inpage-navigation__link" data-ecl-inpage-navigation-link>Heading 3</a></li>
            <li class="ecl-inpage-navigation__item"><a href="#inline-nav-4" class="ecl-link ecl-inpage-navigation__link" data-ecl-inpage-navigation-link>Heading 4</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="ecl-col-l-9">
      <h2 class="ecl-u-type-heading-2" id="inline-nav-1">Heading 1</h2>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p> , <h2 class="ecl-u-type-heading-2" id="inline-nav-2">Heading 2 with a long title going on several lines</h2>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p> , <h2 class="ecl-u-type-heading-2" id="inline-nav-3">Heading 3</h2>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p> , <h2 class="ecl-u-type-heading-2" id="inline-nav-4">Heading 4</h2>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p>
      <p class="ecl-u-type-paragraph-m">Non ipsum laboris do voluptate anim enim ipsum dolore commodo culpa nulla eiusmod nisi. Aliquip ad in sint eiusmod eiusmod occaecat ut nostrud eu officia quis cupidatat. Non amet aliquip tempor dolore anim deserunt sint pariatur consequat nostrud occaecat exercitation. Voluptate enim ex duis sint dolore. Incididunt consequat id do sint magna. Ullamco veniam est est reprehenderit elit non ad duis culpa consectetur magna elit. Sint ullamco et adipisicing tempor occaecat. Velit adipisicing adipisicing ex ad labore amet duis aute consequat ea consequat aute. Et sunt est aute culpa proident elit ea deserunt veniam Lorem officia nisi. Aliqua incididunt quis non dolore occaecat ullamco occaecat commodo et adipisicing ea. Eu dolore duis ut duis amet sit consectetur fugiat ex cillum ex cillum commodo ipsum. Ea tempor sint sunt veniam consequat labore enim veniam voluptate. Minim do voluptate in ex. Proident Lorem voluptate nostrud incididunt consequat officia esse do sint et esse occaecat nostrud. Voluptate aliquip elit anim eiusmod ex non labore irure laborum tempor dolor mollit. Non ullamco ad excepteur est et culpa duis sunt quis nisi tempor sunt magna ut. Ullamco ad nostrud enim excepteur eiusmod et labore labore dolor esse veniam veniam sunt. Commodo est ullamco reprehenderit incididunt esse eu deserunt fugiat in. Sit aute occaecat sit sint consequat fugiat cupidatat. Qui voluptate exercitation sunt qui officia consectetur. Deserunt enim in eiusmod ea. Incididunt cillum ad esse esse labore nisi. Cillum veniam et pariatur qui id sunt nostrud deserunt Lorem proident nisi cillum magna sint. Quis do enim esse velit adipisicing sit laboris commodo enim sit est. Pariatur consequat labore dolore velit incididunt proident officia elit adipisicing duis.</p>
    </div>
  </div>
</div>`;
  return renderedHarmonised;
};

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
