// Simple content for demo
module.exports = {
  id: 'modal-example',
  toggle_id: 'modal-toggle',
  close: {
    label: 'Close',
    icon: {
      name: 'close',
      size: 'm',
    },
  },
  header: 'Modal title',
  body: 'Scrollable content: <br />Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.<br />Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.',
  body_fixed:
    '<div class="ecl-checkbox ecl-checkbox--single"><input name="checkbox-default" class="ecl-checkbox__input" type="checkbox" value="yes" id="checkbox-default-1"><label for="checkbox-default-1" class="ecl-checkbox__label"><span class="ecl-checkbox__box"><span class="wt-icon--check ecl-icon ecl-icon--xs ecl-checkbox__icon ecl-icon--check" aria-hidden="true"></span></span><span class="ecl-checkbox__text">Label Checkbox</span></label></div>',
  buttons: [
    {
      label: 'Button',
      type: 'button',
      variant: 'secondary',
      extra_attributes: [{ name: 'data-ecl-modal-close' }],
    },
    {
      label: 'Button',
      type: 'submit',
      variant: 'primary',
    },
  ],
};
