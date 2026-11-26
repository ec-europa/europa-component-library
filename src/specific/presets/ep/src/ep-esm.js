import { ECL as ECL_EC } from '@ecl/preset-ec/src/ec-esm.js';

// EP-only components are added to this object.
const ECL = { ...ECL_EC };

export { ECL };

if (typeof globalThis !== 'undefined') {
  globalThis.ECL = ECL;
} else if (typeof window !== 'undefined') {
  window.ECL = ECL;
}
