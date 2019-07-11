/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/react';

import Ordered from '../examples/Ordered';
import Unordered from '../examples/Unordered';
import UnorderedWithoutBullet from '../examples/UnorderedWithoutBullet';
import UnorderedWithDivider from '../examples/UnorderedWithDivider';

storiesOf('Components|List', module)
  .add('ordered', Ordered)
  .add('unordered', Unordered)
  .add('without bullet', UnorderedWithoutBullet)
  .add('with divider', UnorderedWithDivider);
