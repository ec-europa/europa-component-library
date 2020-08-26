import specs from '@ecl/eu-specs-footer-core/demo/data';
import adapter from '../adapter';

const data = adapter(specs);

data.sections[0].logo.src_mobile = '/eu-logo-mobile-en.svg';
data.sections[0].logo.src_desktop = '/eu-en-desktop.svg';

export default data;
