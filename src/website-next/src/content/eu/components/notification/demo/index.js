import demoContentInfo from '@ecl/notification/demo/data--info-eu';
import demoContentSuccess from '@ecl/notification/demo/data--success-eu';
import demoContentWarning from '@ecl/notification/demo/data--warning-eu';
import demoContentError from '@ecl/notification/demo/data--error-eu';
import template from '@ecl/notification/notification.html.twig';
import { correctSvgPath } from '@ecl/website-utils';

export const notificationInfo = template(correctSvgPath(demoContentInfo));
export const notificationSuccess = template(correctSvgPath(demoContentSuccess));
export const notificationWarning = template(correctSvgPath(demoContentWarning));
export const notificationError = template(correctSvgPath(demoContentError));
