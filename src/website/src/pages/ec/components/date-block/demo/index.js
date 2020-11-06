import demoDefault from '@ecl/specs-component-date-block/demo/data';
import template from '@ecl/twig-component-date-block/date-block.html.twig';

demoDefault.variant = 'default';
const demoCancelled = { ...demoDefault, variant: 'cancelled' };
const demoOngoing = { ...demoDefault, variant: 'ongoing' };
const demoPast = { ...demoDefault, variant: 'past' };

export const dateBlockDefault = template(demoDefault);
export const dateBlockCancelled = template(demoCancelled);
export const dateBlockOngoing = template(demoOngoing);
export const dateBlockPast = template(demoPast);
