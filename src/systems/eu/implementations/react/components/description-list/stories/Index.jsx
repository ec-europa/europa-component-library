import { storiesOf } from '@storybook/react';

import Description from '../examples/Description';
import DescriptionHorizontal from '../examples/DescriptionHorizontal';

storiesOf('Components/List', module)
  .add('description', Description)
  .add('description (horizontal)', DescriptionHorizontal);
