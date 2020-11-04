import demoContentDefault from '@ecl/specs-component-radio/demo/data--default';
import demoContentInvalid from '@ecl/specs-component-radio/demo/data--invalid';
import demoContentRequired from '@ecl/specs-component-radio/demo/data--required';
import demoContentOptional from '@ecl/specs-component-radio/demo/data--optional';
import demoContentBinary from '@ecl/specs-component-radio/demo/data--binary';
import demoContentBinaryInvalid from '@ecl/specs-component-radio/demo/data--binary-invalid';
import template from '@ecl/twig-component-radio/radio-group.html.twig';

export const radioGroupDefault = template(demoContentDefault);
export const radioGroupInvalid = template(demoContentInvalid);
export const radioGroupRequired = template(demoContentRequired);
export const radioGroupOptional = template(demoContentOptional);
export const radioGroupBinary = template(demoContentBinary);
export const radioGroupBinaryInvalid = template(demoContentBinaryInvalid);
