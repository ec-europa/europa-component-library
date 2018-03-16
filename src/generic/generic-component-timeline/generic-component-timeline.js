/**
 * Timeline
 */

const expandTimeline = (
  timeline,
  button,
  {
    classToRemove = 'ecl-timeline__item--over-limit',
    hiddenElementsSelector = '.ecl-timeline__item--over-limit',
  } = {}
) => {
  if (!timeline) {
    return;
  }

  const hiddenElements = Array.prototype.slice.call(
    timeline.querySelectorAll(hiddenElementsSelector)
  );

  // Remove extra class
  hiddenElements.forEach(element => {
    element.classList.remove(classToRemove);
  });

  // Remove buttton
  button.parentNode.removeChild(button);
};

// Helper method to automatically attach the event listener to all the expandables on page load
export const timelines = ({
  selector = '.ecl-timeline',
  buttonSelector = '.ecl-timeline__button',
  hiddenElementsSelector = '.ecl-timeline__item--over-limit',
  classToRemove = 'ecl-timeline__item--over-limit',
  context = document,
} = {}) => {
  const nodesArray = Array.prototype.slice.call(
    context.querySelectorAll(selector)
  );

  nodesArray.forEach(node => {
    const button = context.querySelector(buttonSelector);

    if (button) {
      button.addEventListener('click', () =>
        expandTimeline(node, button, { classToRemove, hiddenElementsSelector })
      );
    }
  });
};

export default timelines;
