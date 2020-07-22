import Unordered from '../examples/Unordered';
import UnorderedWithoutBullet from '../examples/UnorderedWithoutBullet';
import UnorderedWithDivider from '../examples/UnorderedWithDivider';

export default {
  title: 'Components/List',
};

export const _Unordered = Unordered;

_Unordered.story = {
  name: 'unordered',
};

export const WithoutBullet = UnorderedWithoutBullet;

WithoutBullet.story = {
  name: 'without bullet',
};

export const WithDivider = UnorderedWithDivider;

WithDivider.story = {
  name: 'with divider',
};
