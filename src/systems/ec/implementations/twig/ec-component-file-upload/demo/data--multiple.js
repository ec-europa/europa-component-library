import specData from '@ecl/ec-specs-file-upload/demo/data--multiple';
import adapter from '../adapter';

specData.id = 'example-file-upload-multiple';
specData.multiple = true;

export default adapter(specData);
