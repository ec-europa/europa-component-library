export const dropdown = selector => {
  const dropdownsArray = Array.prototype.slice.call(
    document.querySelectorAll(selector)
  );

  document.addEventListener('click', event => {
    dropdownsArray.forEach(dropdownSelection => {
      const isInside = dropdownSelection.contains(event.target);

      if (!isInside) {
        const dropdownButton = document.querySelector(
          `${selector} > [aria-expanded=true]`
        );
        const dropdownBody = document.querySelector(
          `${selector} > [aria-hidden=false]`
        );
        // If the body of the dropdown is visible, then toggle.
        if (dropdownBody) {
          dropdownButton.setAttribute('aria-expanded', false);
          dropdownBody.setAttribute('aria-hidden', true);
        }
      }
    });
  });
};

export default dropdown;
