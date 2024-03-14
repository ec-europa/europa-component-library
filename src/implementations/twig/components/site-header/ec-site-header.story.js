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
    defaultArgs.show_menu = true;
    defaultArgs.show_mega_menu = false;
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
      type: { name: 'boolean' },
      description: 'Show the menu',
      table: {
        category: 'Optional',
      },
      if: { arg: 'show_mega_menu', truthy: false },
    };
    argTypes.show_mega_menu = {
      name: 'mega menu',
      type: { name: 'boolean' },
      description: 'Show the mega menu',
      table: {
        category: 'Optional',
      },
      if: { arg: 'show_menu', truthy: false },
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

  if (!args.show_menu && data.menu) {
    delete data.menu;
  }
  if (args.show_menu && !data.menu) {
    data.menu = enMenu;
  }
  if (!args.show_mega_menu && data.mega_menu) {
    delete data.mega_menu;
  }
  if (args.show_mega_menu && !data.mega_menu) {
    data.mega_menu = enMegaMenu;
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
  )}<div id="block-ewcms-theme-main-page-content" data-inpage-navigation-source-area="h2, div.ecl-featured-item__heading" class="ecl-u-mb-l">
  
    
      <article dir="ltr">

  
    

  
  <div>
    

  
  
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_33232"></a>
                                                                                    <div class="ecl-carousel ecl-carousel--full-width" data-ecl-auto-init="Carousel" ><div class="ecl-carousel__container"><div class="ecl-carousel__slides" id="ecl-carousel-slider" style="width: 11520px; transition-duration: 0s; left: -1920px;"><div class="ecl-carousel__slide" role="group" aria-label="slide 4 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2023-03/230327_NextGenEU_banner2.png?itok=jhbt_wRa" alt="NextGenerationEU banner"></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">NextGenerationEU</span></div><p class="ecl-banner__description"><span class="ecl-banner__description-text">Discover what is happening in your country</span></p><div class="ecl-banner__cta"><a href="https://next-generation-eu.europa.eu/recovery-and-resilience-facility_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 1 of 4" style="width: 16.6667%;"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Building-a-fairer-and-more-inclusive-Union%202.png?itok=H0-WR3wj" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Building a fairer and more inclusive Union</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/building-fairer-and-more-inclusive-union_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 2 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/College%20of%20Commissioners%20blue%204B.png?itok=wc-EiHc6" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Keeping our promise to Europe</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 3 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-01/Farmers-dialogue_8.png?itok=unsztwrx" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Strategic Dialogue on the future of EU agriculture</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/european-green-deal/agriculture-and-green-deal/strategic-dialogue-future-eu-agriculture_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 4 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2023-03/230327_NextGenEU_banner2.png?itok=jhbt_wRa" alt="NextGenerationEU banner"></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">NextGenerationEU</span></div><p class="ecl-banner__description"><span class="ecl-banner__description-text">Discover what is happening in your country</span></p><div class="ecl-banner__cta"><a href="https://next-generation-eu.europa.eu/recovery-and-resilience-facility_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div><div class="ecl-carousel__slide" role="group" aria-label="slide 1 of 4" style="width: 16.6667%;" inert="true"><section class="ecl-banner ecl-banner--text-highlight ecl-banner--m"><picture class="ecl-picture ecl-banner__picture"><img class="ecl-banner__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_full_width/public/2024-03/Building-a-fairer-and-more-inclusive-Union%202.png?itok=H0-WR3wj" alt=""></picture><div class="ecl-container"><div class="ecl-banner__container"><div class="ecl-banner__content"><div class="ecl-banner__title"><span class="ecl-banner__title-text">Building a fairer and more inclusive Union</span></div><div class="ecl-banner__cta"><a href="/strategy-and-policy/priorities-2019-2024/story-von-der-leyen-commission/building-fairer-and-more-inclusive-union_en" class="ecl-link ecl-link--cta ecl-link--icon ecl-link--icon-after ecl-banner__link-cta" tabindex="-1"><span class="ecl-link__label">Learn more</span><svg class="ecl-icon ecl-icon--s ecl-icon--rotate-90 ecl-icon--primary ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg></a></div></div></div></div></section></div></div><button class="ecl-carousel__prev"><svg class="ecl-icon ecl-icon--m ecl-icon--rotate-270 ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg><span class="ecl-u-sr-only">Previous slides</span></button><button class="ecl-carousel__next"><svg class="ecl-icon ecl-icon--m ecl-icon--rotate-90 ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#corner-arrow"></use></svg><span class="ecl-u-sr-only">Next slides</span></button></div><div class="ecl-carousel__controls"><div class="ecl-container"><div class="ecl-carousel__autoplay"><button class="ecl-carousel__play" style="display: none;"><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#play"></use></svg><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-active" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#play-filled"></use></svg><span class="ecl-u-sr-only">Play carousel</span></button><button class="ecl-carousel__pause" style="display: flex;"><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-default" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#pause"></use></svg><svg class="ecl-icon ecl-icon--l ecl-icon--inverted ecl-carousel__icon-active" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#pause-filled"></use></svg><span class="ecl-u-sr-only">Pause carousel</span></button></div><div class="ecl-carousel__navigation"><button class="ecl-carousel__navigation-item" aria-current="true"><span class="ecl-u-sr-only">Go to slide 1</span></button><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 2</span></button><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 3</span></button><button class="ecl-carousel__navigation-item"><span class="ecl-u-sr-only">Go to slide 4</span></button></div><div class="ecl-carousel__pagination"><span class="ecl-carousel__current">1</span> of <span class="ecl-carousel__max">4</span></div></div></div></div>

  </div>

  

  
  
  <div class="ecl-u-mb-2xl">
    <a id="paragraph_31384"></a>
    <div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__title ecl-col-12"><h2 class="ecl-u-type-heading-2">In focus</h2></div></div><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="A woman and a man wearing helmet and looking at a tablet" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-05/european-year-skills.jpg?itok=Rz7wVFH1" alt="A woman and a man wearing helmet and looking at a tablet"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://year-of-skills.europa.eu/index_en" class="ecl-link ecl-link--standalone">European Year of Skills</a></h1></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="Children look out from a carriage window as a train prepares to depart from a station in Lviv" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-05/Children-Ukraine-train-lviv_0.png?itok=EDyUd4_Z" alt="Children look out from a carriage window as a train prepares to depart from a station in Lviv"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://eu-solidarity-ukraine.ec.europa.eu/index_en" class="ecl-link ecl-link--standalone">EU Solidarity with Ukraine</a></h1></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-4 last-item-column last-item"><article class="ecl-card"><picture class="ecl-picture ecl-card__picture" aria-label="Humanitarian cargo to Gaza from Ostende airport" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-card__image" src="/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2023-11/Janez-Lenar%C4%8Di%C4%8D%2C-from-behind.png?itok=nuaazt2j" alt="Humanitarian cargo to Gaza from Ostende airport"></picture><div class="ecl-card__body"><div class="ecl-content-block ecl-card__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/strategy-and-policy/priorities-2019-2024/stronger-europe-world/middle-east-crisis_en" class="ecl-link ecl-link--standalone">The Middle East crisis</a></h1></div></div></article></div></div></div>

  </div>

    <div class="ewcms-page-section ecl-u-mb-2xl ecl-u-bg-grey-3">
  <div class="ecl-container ecl-u-pv-m">
    <a id="paragraph_39923"></a>
          <div class="ecl"><h2>Highlighted news</h2></div>

  
  </div>

    
  <div class="ecl-container ecl-u-pv-m">
    <a id="paragraph_39924"></a>
          <div id="block-highlightednewshomepage">
  
    
      <div class="ecl-content-item-block"><div class="ecl-row"><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 "><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/Madridians-light_highlighted-news.jpg?h=ef1d7280&amp;itok=PzXZYOna" alt="Madridians light candles as tribute to the 200 victims of the March 11 bomb attacks at three of the Spanish capital's train stations in Madrid, Spain On March 13, 2004"></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-11T12:00:00Z">11 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="https://ec.europa.eu/commission/presscorner/detail/en/statement_24_1366" class="ecl-link ecl-link--standalone">Remembering victims of terrorism, in the EU and abroad</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 "><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/Office%20worker.png?h=14ca6b62&amp;itok=36FcuFxt" alt="An office worker giving a presentation on a flipchart"></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-08T12:00:00Z">8 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/news/international-womens-day-2024-our-democracies-are-stronger-when-women-are-involved-equals-2024-03-08_en" class="ecl-link ecl-link--standalone">International Women’s Day 2024: our democracies are stronger when women are involved as equals</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column"><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-03/German-military-transport-helicopter.jpg?h=ef1d7280&amp;itok=W5uvzI8a" alt="German military transport helicopter NH 90 flying"></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-03-05T12:00:00Z">5 March 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/news/first-ever-european-defence-industrial-strategy-enhance-europes-readiness-and-security-2024-03-05_en" class="ecl-link ecl-link--standalone">First-ever European defence industrial strategy to enhance Europe's readiness and security</a></h1><div class="ecl-content-block__list-container"></div></div></article></div><div class="ecl-content-item-block__item ecl-u-mb-l ecl-col-12 ecl-col-l-6 last-item-column last-item"><article class="ecl-content-item"><picture class="ecl-content-item__picture ecl-picture ecl-content-item__picture--large ecl-content-item__picture--left" data-ecl-picture-link="" style="cursor: pointer;"><img class="ecl-content-item__image" src="https://commission.europa.eu/sites/default/files/styles/oe_theme_ratio_3_2_medium/public/2024-02/Victor%20with%20his%20parents.PNG?h=14ca6b62&amp;itok=GiT5MSCw" alt=""></picture><div class="ecl-content-block ecl-content-item__content-block" data-ecl-auto-init="ContentBlock" data-ecl-content-block="" ><ul class="ecl-content-block__primary-meta-container"><li class="ecl-content-block__primary-meta-item">News article</li><li class="ecl-content-block__primary-meta-item"><time datetime="2024-02-29T12:00:00Z">29 February 2024</time></li></ul><h1 class="ecl-content-block__title" data-ecl-title-link=""><a href="/news/stronger-together-fight-against-rare-diseases-2024-02-29_en" class="ecl-link ecl-link--standalone">Stronger together in the fight against rare diseases</a></h1><div class="ecl-content-block__list-container"></div></div></article></div></div><div class="ecl-row"><div class="ecl-content-item-block__button ecl-col-12"><div class="ecl-u-clearfix ecl-u-pv-m"><a href="/highlighted-news_en" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-before"><svg class="ecl-icon ecl-icon--xs ecl-link__icon" focusable="false" aria-hidden="true"><use xlink:href="/themes/contrib/oe_theme/dist/ec/images/icons/sprites/icons.svg#list"></use></svg><span class="ecl-link__label">See more news</span></a></div></div></div></div>
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

  </div>`;
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
  const renderedHarmonised = await siteHeader(
    prepareData(dataHarmonised, args),
  );
  return renderedHarmonised;
};
Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
