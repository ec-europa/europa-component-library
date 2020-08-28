import specDataSplash from '@ecl/eu-specs-language-list/demo/data--splash';
import adapter from '../adapter';

const data = adapter(specDataSplash);
data.overlay = false;
data.logo.path = '/eu-logo--mute.svg';

export default data;
