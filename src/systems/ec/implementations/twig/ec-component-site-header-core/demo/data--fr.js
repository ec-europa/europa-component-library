import specs from '@ecl/ec-specs-site-header-core/demo/data--fr';
import adapter from '../adapter';

specs.logo.src_desktop = '/logo--fr.svg';
specs.languageSelector.eu_category = "Langues officielles de l'UE";
specs.languageSelector.non_eu_category = 'Non-EU Langues';

export default adapter(specs);
