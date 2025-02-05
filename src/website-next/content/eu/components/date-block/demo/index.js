import demoDefault from '@ecl/date-block/demo/data';
import template from '@ecl/date-block/date-block.html.twig';

const demoOngoing = { ...demoDefault, variant: 'ongoing' };
const demoPast = { ...demoDefault, variant: 'past' };

export const dateBlockOngoing = template(demoOngoing);
export const dateBlockPast = template(demoPast);
