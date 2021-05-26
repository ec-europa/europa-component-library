import demoContentInfo from '@ecl/specs-component-message/demo/data--info';
import demoContentSuccess from '@ecl/specs-component-message/demo/data--success';
import demoContentWarning from '@ecl/specs-component-message/demo/data--warning';
import demoContentError from '@ecl/specs-component-message/demo/data--error';
import template from '@ecl/twig-component-message/message.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const messageInfo = template(correctSvgPath(demoContentInfo));
export const messageSuccess = template(correctSvgPath(demoContentSuccess));
export const messageWarning = template(correctSvgPath(demoContentWarning));
export const messageError = template(correctSvgPath(demoContentError));
