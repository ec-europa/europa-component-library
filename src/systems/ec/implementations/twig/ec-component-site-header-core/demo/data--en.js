import specs from '@ecl/ec-specs-site-header-core/demo/data--en';
import adapter from '../adapter';

specs.logo.src_desktop = '/logo--en.svg';
specs.languageSelector.eu_category = 'EU official languages';
specs.languageSelector.non_eu_category = 'Non-EU languages';

export default adapter(specs);
