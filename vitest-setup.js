import '@testing-library/jest-dom';
import { expect, beforeAll } from 'vitest';
import * as matchers from 'vitest-axe/matchers';

expect.extend(matchers);

beforeAll(() => {
  window.getComputedStyle = () => ({
    getPropertyValue: () => '',
  });
});
