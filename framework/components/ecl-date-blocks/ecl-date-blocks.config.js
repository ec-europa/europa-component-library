module.exports = {
  title: 'Date blocks',
  label: 'Date blocks',
  status: 'ready',
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start: @${item.handle} -->\n
      <h3 class="ecl-heading ecl-heading--h3">${item.label}\n</h3>\n
      ${markup}\n
      <!-- End: @${item.handle} -->\n
    `;
  },
  tags: ['atom'],
  default: 'default',
  variants: [
    {
      name: 'default',
      label: 'Default event',
      context: {
        week_day: 'Tue',
        day: '12',
        month: 'Jan',
      },
    },
    {
      name: 'ongoing',
      label: 'Ongoing event',
      context: {
        variant: 'ongoing',
        week_day: 'Wed-Fri',
        day: '31-11',
        month: 'May-Jun',
      },
    },
    {
      name: 'cancelled',
      label: 'Cancelled event',
      context: {
        variant: 'cancelled',
        week_day: 'Mon',
        day: '11',
        month: 'Jan',
      },
    },
    {
      name: 'past',
      label: 'Past event',
      context: {
        variant: 'past',
        day: '2-4',
        month: 'Feb',
        year: '2015',
      },
    },
  ],
};
