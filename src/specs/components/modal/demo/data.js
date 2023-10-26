// Simple content for demo
module.exports = {
  id: 'modal-example',
  toggle_id: 'modal-toggle',
  icon_path: '/icons.svg',
  close_label: 'Close',
  header: 'Lorem ipsum dolor sit amet',
  body: 'Scrollable content: <br />Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.<br />Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet. Morbi interdum orci arcu, tempor porta nisl elementum non. Morbi blandit risus sed turpis mollis mattis. Maecenas semper, risus nec sollicitudin aliquet, dui eros vehicula nulla, ac bibendum mauris mauris a lectus. Ut ut justo in sem vestibulum mollis. Pellentesque ac commodo erat. Phasellus vitae aliquet mi. Suspendisse sed nisl feugiat, porta ante a, finibus nisi.',
  body_fixed:
    '<div class="ecl-checkbox"><input type="checkbox" name="checkbox-default" class="ecl-checkbox__input" id="checkbox-default-1" value="1" /><label for="checkbox-default-1" class="ecl-checkbox__label"><span class="ecl-checkbox__box"><svg class="ecl-icon ecl-icon--m ecl-checkbox__icon" focusable="false" aria-hidden="true"><use xlink:href="/icons.svg#check"></use></svg></span><span class="ecl-checkbox__text">Option label</span></label></div>',
  buttons: [
    {
      label: 'Secondary action',
      type: 'button',
      variant: 'secondary',
      extra_attributes: [{ name: 'data-ecl-modal-close' }],
    },
    {
      label: 'Primary action',
      type: 'submit',
      variant: 'primary',
    },
  ],
};
