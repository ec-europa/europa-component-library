// Handle click on tab to show + focus tabpanel
const initTabs = () => {
  const elements = document.querySelectorAll('[role="tab"]');
  Array.prototype.forEach.call(elements, el => {
    el.addEventListener('click', event => {
      event.preventDefault();

      console.log(event);

      /*

      // remove focusability [sic] and aria-selected
      $('[role="tab"]').attr({
        tabindex: '-1',
        'aria-selected': null,
      });

      // replace above on clicked tab

      $(this).attr({
        'aria-selected': true,
        tabindex: '0',
      });

      // Hide panels

      $(`${$container} [role="tabpanel"]`).attr('aria-hidden', 'true');

      // show corresponding panel

      $(`#${$(this).attr('href').substring(1)}`).attr('aria-hidden', null);

      */
    });
  });
};

export default initTabs;
