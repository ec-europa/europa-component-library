import specs from '@ecl/ec-specs-site-header-harmonised/demo/data--group1';
import dataMenu from '../../ec-component-menu/demo/data--group1';
import adapter from '../adapter';

specs.group = 'group1';
specs.menu = dataMenu;
specs.logo.src_desktop = '/logo--en.svg';
specs.languageSelector.eu_category = 'EU official languages';
specs.languageSelector.non_eu_category = 'Non-EU languages';

export default adapter(specs);
