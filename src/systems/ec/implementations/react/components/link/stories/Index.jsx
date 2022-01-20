import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import demoContentDefault from '@ecl/ec-specs-link/demo/data--default';
import demoContentStandalone from '@ecl/ec-specs-link/demo/data--standalone';
import demoContentCTA from '@ecl/ec-specs-link/demo/data--cta';
import uiIcons from '@ecl/ec-resources-icons/dist/lists/ui.json';

import Link from '../src/Link';

const icons = {
  none: '',
  ...uiIcons
    .map((icon) => ({ [`${icon}`]: `ui--${icon}` }))
    .reduce((a, b) => ({
      ...a,
      ...b,
    })),
};

const iconPosition = {
  before: 'before',
  after: 'after',
};

export default {
  title: 'Components/Navigation/Link',
  decorators: [withKnobs],
};

export function Default() {
  const linkIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'fluid',
  };

  return (
    <Link
      variant="default"
      href="/example#default-link"
      label={text('Label', demoContentDefault.label)}
      ariaLabel={text('Aria label', demoContentDefault.ariaLabel)}
      icon={linkIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
    />
  );
}

Default.storyName = 'default';

export function Standalone() {
  const linkIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'fluid',
  };

  return (
    <Link
      variant="standalone"
      href="/example#standalone-link"
      label={text('Label', demoContentStandalone.label)}
      ariaLabel={text('Aria label', demoContentStandalone.ariaLabel)}
      icon={linkIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
    />
  );
}

Standalone.storyName = 'standalone';

export function CallToAction() {
  const linkIcon = {
    shape: select('Icon (sample)', icons, ''),
    size: 'fluid',
  };

  return (
    <Link
      variant={demoContentCTA.variant}
      href={demoContentCTA.href}
      label={text('Label', demoContentCTA.label)}
      ariaLabel={text('Aria label', demoContentCTA.ariaLabel)}
      icon={linkIcon}
      iconPosition={select('Icon position', iconPosition, 'after')}
    />
  );
}

CallToAction.storyName = 'call-to-action';
