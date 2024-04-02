import { withNotes } from '@ecl/storybook-addon-notes';
import { correctPaths } from '@ecl/story-utils';
import withCode from '@ecl/storybook-addon-code';
import getSystem from '@ecl/builder/utils/getSystem';

// Get data
import dataEC from '@ecl/specs-component-splash-page/demo/data--ec';
import dataEU from '@ecl/specs-component-splash-page/demo/data--eu';
import enLogoDesktopEC from '@ecl/resources-ec-logo/dist/positive/logo-ec--en.svg';
import enLogoMobileEC from '@ecl/resources-ec-logo/dist/logo-ec--mute.svg';
import enLogoDesktopEU from '@ecl/resources-eu-logo/dist/standard-version/positive/logo-eu--en.svg';
import enLogoMobileEU from '@ecl/resources-eu-logo/dist/condensed-version/positive/logo-eu--en.svg';
import splashPage from './splash-page.html.twig';
import notes from './README.md';

const system = getSystem();
const dataSplash = system === 'eu' ? dataEU : dataEC;
const logoMobile = system === 'eu' ? enLogoMobileEU : enLogoMobileEC;
const logoDesktop = system === 'eu' ? enLogoDesktopEU : enLogoDesktopEC;

const getArgs = (data) => ({
  languages_eu: data.items.length,
  languages_non_eu: data.non_eu_items.length,
});

const getArgTypes = (data) => {
  const argTypes = {};

  argTypes.languages_eu = {
    name: 'EU languages',
    description: 'Number of official EU languages',
    control: {
      type: 'range',
      min: 0,
      max: data.items.length,
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
      max: data.non_eu_items.length,
      step: 1,
    },
    table: {
      category: 'Content',
    },
  };

  return argTypes;
};

const prepareData = (data, args) => {
  const dataClone = JSON.parse(JSON.stringify(data));

  dataClone.items.splice(
    -(dataClone.items.length - args.languages_eu),
    dataClone.items.length - args.languages_eu,
  );
  dataClone.non_eu_items.splice(
    -(dataClone.non_eu_items.length - args.languages_non_eu),
    dataClone.non_eu_items.length - args.languages_non_eu,
  );

  correctPaths(dataClone);

  dataClone.logo.src_desktop = logoDesktop;
  dataClone.logo.src_mobile = logoMobile;

  return dataClone;
};

export default {
  title: 'Components/Splash Page',
};

export const Default = (_, { loaded: { component } }) => component;

Default.render = async (args) => {
  const renderedSplashPage = await splashPage(prepareData(dataSplash, args));
  return renderedSplashPage;
};
Default.storyName = 'default';
Default.args = getArgs(dataSplash);
Default.argTypes = getArgTypes(dataSplash);
Default.parameters = {
  notes: { markdown: notes, json: dataSplash },
  layout: 'fullscreen',
};
Default.decorators = [withCode, withNotes];
