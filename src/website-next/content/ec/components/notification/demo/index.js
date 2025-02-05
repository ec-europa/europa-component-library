import demoContentInfo from '@ecl/notification/demo/data--info-ec';
import demoContentSuccess from '@ecl/notification/demo/data--success-ec';
import demoContentWarning from '@ecl/notification/demo/data--warning-ec';
import demoContentError from '@ecl/notification/demo/data--error-ec';
import template from '@ecl/notification/notification.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const notificationInfo = template(correctSvgPath(demoContentInfo));
export const notificationSuccess = template(correctSvgPath(demoContentSuccess));
export const notificationWarning = template(correctSvgPath(demoContentWarning));
export const notificationError = template(correctSvgPath(demoContentError));
