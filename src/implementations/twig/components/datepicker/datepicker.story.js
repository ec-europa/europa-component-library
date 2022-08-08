import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls, correctPaths } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-datepicker/demo/data';

import datepicker from './datepicker.html.twig';
import notes from './README.md';

const dataTranslated = {
  ...dataDefault,
  autoinit: false,
  helper_text: "Ceci est le texte d'aide de l'entrée",
  invalid_text: "Ceci est le message d'erreur",
};

const withInit = (story) => {
  const demo = story();
  return `
  <script>
    var elt = document.querySelector('[data-ecl-datepicker-toggle]');
    var datepicker = new ECL.Datepicker(elt, {
      format: 'DD/MMM/YYYY',
      i18n: {
        previousMonth : 'Mois précédent',
        nextMonth     : 'Mois prochain',
        months        : ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'],
        weekdays      : ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],
        weekdaysShort : ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam']
      }
    });
    datepicker.init();
  </script>
  ${demo}`;
};

const getArgs = (data) => ({
  show_label: true,
  show_helper: true,
  show_error: true,
  label: data.label || '',
  helper_text: data.helper_text,
  invalid_text: data.invalid_text,
  invalid: data.invalid || false,
  disabled: data.disabled || false,
  required: data.required,
  placeholder: data.placeholder,
});

const getArgTypes = (data) => ({
  ...getFormControls(data, 'element'),
});

const prepareData = (data, args) => {
  Object.assign(data, args);

  if (!args.show_label) {
    data.label = '';
  }
  if (!args.show_error) {
    data.invalid_text = '';
  }
  if (!args.show_helper) {
    data.helper_text = '';
  }

  delete data.show_label;
  delete data.show_helper;
  delete data.show_error;

  correctPaths(data);

  return data;
};

export default {
  title: 'Components/Forms/Datepicker',
};

export const Default = (args) => datepicker(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };
Default.decorators = [withNotes, withCode];

export const Translated = (args) =>
  datepicker(prepareData(dataTranslated, args));

Translated.storyName = 'translated';
Translated.args = getArgs(dataTranslated);
Translated.argTypes = getArgTypes(dataTranslated);
Translated.parameters = { notes: { markdown: notes, json: dataTranslated } };
Translated.decorators = [withNotes, withInit, withCode];
