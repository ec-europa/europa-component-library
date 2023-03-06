// Simple content for demo
module.exports = {
  id: 'modal-example',
  toggle_id: 'modal-toggle',
  icon_path: '/icons.svg',
  close_label: 'Close',
  header: 'Lorem ipsum dolor sit amet',
  body: 'Sed quam augue, volutpat sed dapibus in, accumsan a arcu. Nulla quam enim, porttitor at neque a, egestas porttitor tortor. Nam tortor sem, elementum id augue quis, posuere vestibulum dui. Donec id posuere libero, sit amet egestas lorem. Aliquam finibus ipsum mauris, a molestie tortor laoreet.',
  footer: 'footer',
  buttons: [
    {
      label: 'Primary action',
      type: 'submit',
    },
    {
      label: 'Secondary action',
      type: 'button',
      extra_attributes: [{ name: 'data-ecl-modal-close' }],
    },
  ],
};
