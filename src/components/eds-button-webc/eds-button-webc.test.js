import { axe, toHaveNoViolations } from 'jest-axe';

// Side effect: registers the <eds-button-webc> custom element.
import './eds-button-webc';
import dataButton from './demo/data';

expect.extend(toHaveNoViolations);

// No snapshot tests here - outerHTML snapshots are brittle for a
// Lit-rendered component; explicit assertions are clearer for what
// actually matters here: a real semantic <button>, the right classes,
// attribute reactivity, and the captured-label behaviour on connect.
//
// Lit renders asynchronously (a microtask after connect, or after any
// reactive property changes) - every assertion below awaits
// `el.updateComplete` first.
function renderButton({ label, variant, type, disabled }) {
  const el = document.createElement('eds-button-webc');
  if (variant) el.setAttribute('variant', variant);
  if (type) el.setAttribute('type', type);
  if (disabled) el.setAttribute('disabled', '');
  el.textContent = label;
  document.body.appendChild(el);
  return el;
}

afterEach(() => {
  document.body.innerHTML = '';
});

describe('EdsButtonWebc', () => {
  describe('Primary', () => {
    const dataButtonPrimary = { ...dataButton, variant: 'primary' };

    test('renders a real button with the expected classes', async () => {
      const el = renderButton(dataButtonPrimary);
      await el.updateComplete;
      const button = el.querySelector('button');

      expect(button).not.toBeNull();
      expect(button.className).toBe('eds-button eds-button--primary');
      expect(button.type).toBe('button');
      expect(button.textContent).toBe('Button label');
      expect(button.disabled).toBe(false);
    });

    test('passes the accessibility tests', async () => {
      const el = renderButton(dataButtonPrimary);
      await el.updateComplete;

      expect(await axe(el.outerHTML)).toHaveNoViolations();
    });

    test('renders disabled', async () => {
      const el = renderButton({ ...dataButtonPrimary, disabled: true });
      await el.updateComplete;

      expect(el.querySelector('button').disabled).toBe(true);
    });

    test('falls back to the primary variant for an unknown value', async () => {
      const el = renderButton({ ...dataButtonPrimary, variant: 'unknown' });
      await el.updateComplete;

      expect(el.querySelector('button').className).toBe(
        'eds-button eds-button--primary',
      );
    });

    test('updates the button when an observed attribute changes', async () => {
      const el = renderButton(dataButtonPrimary);
      await el.updateComplete;

      el.setAttribute('variant', 'secondary');
      await el.updateComplete;

      expect(el.querySelector('button').className).toBe(
        'eds-button eds-button--secondary',
      );
    });

    test('captures the label from an already-rendered button on first connect', async () => {
      const el = document.createElement('eds-button-webc');
      el.setAttribute('variant', 'primary');
      el.innerHTML =
        '<button class="eds-button eds-button--primary" type="button">Server label</button>';
      document.body.appendChild(el);
      await el.updateComplete;

      expect(el.querySelectorAll('button')).toHaveLength(1);
      expect(el.querySelector('button').textContent).toBe('Server label');
    });
  });

  describe('Secondary', () => {
    const dataButtonSecondary = { ...dataButton, variant: 'secondary' };

    test('renders correctly', async () => {
      const el = renderButton(dataButtonSecondary);
      await el.updateComplete;

      expect(el.querySelector('button').className).toBe(
        'eds-button eds-button--secondary',
      );
    });

    test('passes the accessibility tests', async () => {
      const el = renderButton(dataButtonSecondary);
      await el.updateComplete;

      expect(await axe(el.outerHTML)).toHaveNoViolations();
    });
  });

  describe('Tertiary', () => {
    const dataButtonTertiary = { ...dataButton, variant: 'tertiary' };

    test('renders correctly', async () => {
      const el = renderButton(dataButtonTertiary);
      await el.updateComplete;

      expect(el.querySelector('button').className).toBe(
        'eds-button eds-button--tertiary',
      );
    });

    test('passes the accessibility tests', async () => {
      const el = renderButton(dataButtonTertiary);
      await el.updateComplete;

      expect(await axe(el.outerHTML)).toHaveNoViolations();
    });
  });
});
