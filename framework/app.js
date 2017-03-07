// Full build

// Include core
import './index';
import './index.scss';

// Example
// In production, it would be: import '@ec-europa/ecl-banners';
import './components/banners/';

if (module.hot) {
  module.hot.accept();
}
