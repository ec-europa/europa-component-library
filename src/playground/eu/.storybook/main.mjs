import { fileURLToPath } from 'node:url';
import { createConfig } from '@ecl/storybook-config';

export default createConfig('eu', fileURLToPath(new URL('.', import.meta.url)));
