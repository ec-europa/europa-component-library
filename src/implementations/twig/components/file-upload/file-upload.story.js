import { withNotes } from '@ecl/storybook-addon-notes';
import withCode from '@ecl/storybook-addon-code';
import { getFormControls, correctSvgPath } from '@ecl/story-utils';

import dataDefault from '@ecl/specs-component-file-upload/demo/data';
import dataMulti from '@ecl/specs-component-file-upload/demo/data--multiple';
import fileUpload from './file-upload.html.twig';
import notes from './README.md';

const dataFiles = {
  icon_path: '/icons.svg',
};

const getArgs = (data) => ({
  show_label: true,
  show_helper: true,
  show_error: true,
  invalid: data.invalid || false,
  disabled: data.disabled || false,
  required: data.required,
  label: data.label || '',
  helper_text: data.helper_text,
  required_text: data.required_text,
  button_choose_label: data.button_choose_label,
  button_replace_label: data.button_replace_label,
});

const getArgTypes = (data) => ({
  ...getFormControls(data, 'element'),
  button_choose_label: {
    name: 'button choose label',
    type: { name: 'string', required: true },
    description: 'Label for the upload button',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
  button_replace_label: {
    name: 'button replace label',
    type: { name: 'string', required: true },
    description: 'Label for the buttonto replace a selected file',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: '' },
      category: 'Content',
    },
  },
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

  return data;
};

const renderFilesList = (data) => `
<ul class="ecl-file-upload__list ecl-file-upload__item--dynamic" data-ecl-file-upload-list>
  <li class="ecl-file-upload__item">
    <div class="ecl-file-upload__item-info">
      <span class="ecl-file-upload__item-name">File_3.jpg</span>
      <span class="ecl-file-upload__item-meta">(58.6 kB - jpg)</span>
    </div>
    <div class="ecl-file-upload__item-action">
      <div class="ecl-file-upload__item-uploading">
        Uploading... 
        <div class="ecl-spinner ecl-spinner--primary ecl-spinner--small ecl-spinner--visible">
          <svg class="ecl-spinner__loader" viewBox="25 25 50 50">
            <circle class="ecl-spinner__circle" cx="50" cy="50" r="20" fill="none" stroke-width="4px" stroke-miterlimit="10" vector-effect="non-scaling-stroke" />
          </svg>
        </div>
      </div>
    </div>
  </li>
  <li class="ecl-file-upload__item ecl-file-upload__item--error">
    <div class="ecl-file-upload__item-info">
      <span class="ecl-file-upload__item-name">File_2.pdf</span>
      <span class="ecl-file-upload__item-meta">(65 kB - pdf)</span>
      <span class="ecl-file-upload__item-error-text">Error text</span>
    </div>
    <div class="ecl-file-upload__item-action">
      <a href="#" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after" aria-label="Delete">
        <span class="ecl-link__label">Delete</span>
        <svg class="ecl-icon ecl-icon--xs ecl-link__icon ecl-icon--primary" focusable="false" aria-hidden="true">
          <use xlink:href="${data.icon_path}#trash"></use>
        </svg>
      </a>
    </div>
  </li>
  <li class="ecl-file-upload__item">
    <div class="ecl-file-upload__item-info">
      <span class="ecl-file-upload__item-name">File_1.docx</span>
      <span class="ecl-file-upload__item-meta">(44.7 kB - docx)</span>
    </div>
    <div class="ecl-file-upload__item-action">
      <a href="#" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after" aria-label="Delete">
        <span class="ecl-link__label">Delete</span>
        <svg class="ecl-icon ecl-icon--xs ecl-link__icon ecl-icon--primary" focusable="false" aria-hidden="true">
          <use xlink:href="${data.icon_path}#trash"></use>
        </svg>
      </a>
    </div>
  </li>
  <li class="ecl-file-upload__item">
    <div class="ecl-file-upload__item-action">
      <a href="#" class="ecl-link ecl-link--standalone ecl-link--icon ecl-link--icon-after" aria-label="Delete all">
        <span class="ecl-link__label">Delete all</span>
        <svg class="ecl-icon ecl-icon--xs ecl-link__icon ecl-icon--primary" focusable="false" aria-hidden="true">
          <use xlink:href="${data.icon_path}#trash"></use>
        </svg>
      </a>
    </div>
  </li>
</ul>`;

export default {
  title: 'Components/Forms/File Upload',
  decorators: [withNotes, withCode],
};

export const Default = (args) => fileUpload(prepareData(dataDefault, args));

Default.storyName = 'default';
Default.args = getArgs(dataDefault);
Default.argTypes = getArgTypes(dataDefault);
Default.parameters = { notes: { markdown: notes, json: dataDefault } };

export const Multiple = (args) => fileUpload(prepareData(dataMulti, args));

Multiple.storyName = 'multiple';
Multiple.args = getArgs(dataMulti);
Multiple.argTypes = getArgTypes(dataMulti);
Multiple.parameters = { notes: { markdown: notes, json: dataMulti } };

export const FileUploadList = () => renderFilesList(correctSvgPath(dataFiles));

FileUploadList.storyName = 'file upload list';
FileUploadList.parameters = { notes: { disable: true } };
