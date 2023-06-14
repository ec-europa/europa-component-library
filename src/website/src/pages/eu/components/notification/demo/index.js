import demoContentInfo from '@ecl/specs-component-notification/demo/data--info';
import demoContentSuccess from '@ecl/specs-component-notification/demo/data--success';
import demoContentWarning from '@ecl/specs-component-notification/demo/data--warning';
import demoContentError from '@ecl/specs-component-notification/demo/data--error';
import template from '@ecl/twig-component-notification/notification.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const notificationInfo = template(correctSvgPath(demoContentInfo));
export const notificationSuccess = template(correctSvgPath(demoContentSuccess));
export const notificationWarning = template(correctSvgPath(demoContentWarning));
export const notificationError = template(correctSvgPath(demoContentError));
