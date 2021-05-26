import demoDefault from '@ecl/specs-component-file-upload/demo/data';
import demoMultiple from '@ecl/specs-component-file-upload/demo/data--multiple';
import template from '@ecl/twig-component-file-upload/file-upload.html.twig';

export const fileUpload = template(demoDefault);
export const fileUploadMultiple = template(demoMultiple);
export const fileUploadDisabled = template({
  ...fileUpload,
  disabled: true,
  required: false,
});
export const fileUploadInvalid = template({ ...fileUpload, invalid: true });
export const fileUploadOptional = template({ ...fileUpload, required: false });
