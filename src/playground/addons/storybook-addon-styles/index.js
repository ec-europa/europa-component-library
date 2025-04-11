export const TOGGLE_STYLE = 'TOGGLE_STYLE';

export function toggleStyle(id, enabled, styleSheets) {
  const style = styleSheets.find((s) => s.id === id);
  if (!style) return;

  const link = document.getElementById(`style-${id}`);
  if (enabled && !link) {
    const newLink = document.createElement('link');
    newLink.id = `style-${id}`;
    newLink.rel = 'stylesheet';
    newLink.href = style.href;
    document.head.appendChild(newLink);
  } else if (!enabled && link) {
    link.remove();
  }
}
