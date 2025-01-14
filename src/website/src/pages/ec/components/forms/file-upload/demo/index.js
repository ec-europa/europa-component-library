import demoDefault from '@ecl/file-upload/demo/data';
import demoMultiple from '@ecl/file-upload/demo/data--multiple';
import template from '@ecl/form-group/form-group.html.twig';

export const fileUpload = template(demoDefault);
export const fileUploadMultiple = template(demoMultiple);
export const fileUploadDisabled = template({
  ...demoDefault,
  disabled: true,
  required: false,
});
export const fileUploadInvalid = template({ ...demoDefault, invalid: true });
export const fileUploadOptional = template({ ...demoDefault, required: false });
