import specs from '@ecl/ec-specs-site-header/demo/data--en';
import adapter from '../adapter';

specs.logo.src = '/logo--en.svg';
specs.languageSelector.eu_category = 'EU official languages';
specs.languageSelector.non_eu_category = 'Non-EU languages';

export default adapter(specs);
