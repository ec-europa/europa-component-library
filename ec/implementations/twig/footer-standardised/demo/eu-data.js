import specs from '@ecl/eu-specs-footer-standardised/demo/data';
import adapter from '../adapter';

const data = adapter(specs);
data.sections.splice(3, 0, { section_id: 6 });

data.sections[4].logo.src_mobile = '/eu-logo-mobile-en.svg';
data.sections[4].logo.src_desktop = '/eu-en-desktop.svg';

export default data;
