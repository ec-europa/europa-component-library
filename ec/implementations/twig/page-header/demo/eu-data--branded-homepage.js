import specData from '@ecl/eu-specs-page-header/demo/data--branded-homepage';
import breadcrumbData from '../../ec-component-breadcrumb/demo/eu-data--simple';
import adapter from '../adapter';

specData.title_wrapper = true;
specData.breadcrumb = breadcrumbData;

export default adapter(specData);
