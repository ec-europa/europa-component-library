const data = require('@ecl/generic-component-social-icon/data/demo');

module.exports = {
  title: 'Social icons',
  label: 'Social icons',
  status: 'ready',
  tags: ['atom'],
  collated: true,
  collator(markup, item) {
    return `
      <!-- Start demo of: @${item.handle} -->\n
      <div class="ecl-row">
        <div class="ecl-col-12 ecl-col-md ecl-u-mt-xs ecl-u-mt-md-none">
          <strong>.ecl-social-icon--${item.context.variant}</strong>
        </div>
        <div class="ecl-col">
          <a href="#" class="ecl-link ecl-social-icon ecl-social-icon--${item.context.variant}">${item.label}</a>
        </div>
        <div class="ecl-col">
          <span class="ecl-social-icon ecl-social-icon--${item.context.variant}">${item.label}</span>
        </div>
        <div class="ecl-col">
          <span class="ecl-social-icon ecl-social-icon--smaller ecl-social-icon--${item.context.variant}">${item.label}</span>
        </div>
      </div>
      <!-- End: @${item.handle} -->\n
    `;
  },
  default: 'arto',
  variants: Object.keys(data).map(key => ({
    name: data[key].variant,
    label: data[key].label,
    context: data[key],
  })),
};
