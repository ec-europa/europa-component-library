import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';

// Get data
import dataFullEU from '@ecl/specs-component-site-header/demo/data--eu';
import enLogoDesktopEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import enLogoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';
import enDataMenu from '@ecl/specs-component-menu/demo/data--en';
import siteHeader from './site-header.html.twig';
import notes from './README.md';

// Preserve original data.
const dataFull = { ...dataFullEU };
const clonedDataFull = { ...dataFull };
const enMenu = { ...enDataMenu };

// Core
const dataCore = JSON.parse(JSON.stringify(dataFull));
delete dataCore.login_box;
delete dataCore.site_name;
delete dataCore.cta_link;
dataCore.has_menu = false;

// Harmonised
const dataHarmonised = JSON.parse(JSON.stringify(dataFull));
dataHarmonised.has_menu = true;

const getArgs = (data) => {
  const defaultArgs = {
    show_language_selector: true,
    show_search: true,
    show_message: false,
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
  if (data.message) {
    argTypes.show_message = {
      name: 'message',
      type: { name: 'boolean' },
      description: 'Show the message box',
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

  if (!args.show_menu) {
    delete data.menu;
  } else if (args.show_menu && !data.menu) {
    data.menu = enMenu;
  }

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

  if (!args.show_message) {
    delete data.message;
  } else {
    data.message = clonedDataFull.message;
  }

  data.logged = args.logged;

  correctPaths(data);

  data.logo.src_desktop = enLogoDesktopEU;
  data.logo.src_mobile = enLogoMobileEU;

  return data;
};

export default {
  title: 'Components/Site-wide/Site header',
  decorators: [withNotes, withCode],
  parameters: { layout: 'fullscreen' },
};

export const Core = (args) => siteHeader(prepareData(dataCore, args));

Core.storyName = 'core';
Core.args = getArgs(dataCore);
Core.argTypes = getArgTypes(dataCore);
Core.parameters = { notes: { markdown: notes, json: dataCore } };

export const Harmonised = (
  args,
) => `${siteHeader(prepareData(dataHarmonised, args))}<div class="ecl-container">
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

Harmonised.storyName = 'harmonised';
Harmonised.args = getArgs(dataHarmonised);
Harmonised.argTypes = getArgTypes(dataHarmonised);
Harmonised.parameters = { notes: { markdown: notes, json: dataHarmonised } };
