import specs from '@ecl/eu-specs-footer-harmonised/demo/data';
import adapter from '../adapter';

specs.logo.src_mobile = '/eu-logo-mobile-en.svg';
specs.logo.src_desktop = '/eu-en-desktop.svg';

const data = adapter(specs);
data.sections.splice(3, 0, { section_id: 6 });

export default data;
