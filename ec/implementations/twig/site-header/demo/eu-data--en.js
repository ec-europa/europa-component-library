import specs from '@ecl/eu-specs-site-header/demo/data--en';
import adapter from '../adapter';

specs.logo.src = '/eu-logo--en.svg';
specs.languageSelector.eu_category = 'EU official languages';
specs.languageSelector.non_eu_category = 'Non-EU languages';

export default adapter(specs);
