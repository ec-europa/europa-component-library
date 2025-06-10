export const TOGGLE_STYLE = 'TOGGLE_STYLE';

export function toggleStyle(key, enabled, styleSheets) {
  const styleSheet = styleSheets.find((s) => s.id === key);
  if (!styleSheet) return;

  const existing = document.getElementById(`style-${key}`);

  if (enabled && !existing) {
    const link = document.createElement('link');
    link.id = `style-${key}`;
    link.rel = 'stylesheet';
    link.href = styleSheet.href;

    // Find the index of the stylesheet in the ordered array
    const currentIndex = styleSheets.indexOf(styleSheet);

    // Find the last stylesheet before currentIndex that is currently in the DOM
    let insertedAfter = null;
    for (let i = currentIndex - 1; i >= 0; i--) {
      const prevId = styleSheets[i].id;
      const prevElem = document.getElementById(`style-${prevId}`);
      if (prevElem) {
        insertedAfter = prevElem;
        break;
      }
    }

    if (insertedAfter && insertedAfter.nextSibling) {
      insertedAfter.parentNode.insertBefore(link, insertedAfter.nextSibling);
    } else if (insertedAfter) {
      insertedAfter.parentNode.appendChild(link);
    } else {
      // No previous stylesheet found, insert as first link or at end
      const head = document.head;
      if (head.firstChild) {
        head.insertBefore(link, head.firstChild);
      } else {
        head.appendChild(link);
      }
    }
  } else if (!enabled && existing) {
    existing.remove();
  }
}
