import specs from '@ecl/eu-specs-site-header-standardised/demo/data--en';
import dataMenu from '../../ec-component-menu/demo/data--en';
import adapter from '../adapter';

specs.menu = dataMenu;
specs.logo.src_mobile = '/eu-logo-mobile-en.svg';
specs.logo.src_desktop = '/eu-logo--en.svg';
specs.languageSelector.eu_category = 'EU official languages';
specs.languageSelector.non_eu_category = 'Non-EU languages';

export default adapter(specs);
