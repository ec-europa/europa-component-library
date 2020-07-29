import { storiesOf } from '@storybook/react';

import Unordered from '../examples/Unordered';
import UnorderedWithoutBullet from '../examples/UnorderedWithoutBullet';
import UnorderedWithDivider from '../examples/UnorderedWithDivider';

storiesOf('Components/List', module)
  .add('unordered', Unordered)
  .add('without bullet', UnorderedWithoutBullet)
  .add('with divider', UnorderedWithDivider);
