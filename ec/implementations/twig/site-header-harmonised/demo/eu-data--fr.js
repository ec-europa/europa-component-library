import specs from '@ecl/eu-specs-site-header-harmonised/demo/data--fr';
import dataMenu from '../../ec-component-menu/demo/data--group1';
import adapter from '../adapter';

specs.logo.src_mobile = '/eu-logo-mobile-fr.svg';
specs.logo.src_desktop = '/eu-logo--fr.svg';
specs.menu = dataMenu;
specs.languageSelector.eu_category = "Langues officielles de l'UE";
specs.languageSelector.non_eu_category = 'Non-EU Langues';

export default adapter(specs);
