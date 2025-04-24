export const TOGGLE_STYLE = 'TOGGLE_STYLE';

export function toggleStyle(key, enabled, styleSheets) {
  const styleSheet = styleSheets.find((s) => s.id === key);
  if (!styleSheet) {
    return;
  }

  const existing = document.getElementById(`style-${key}`);
  if (enabled && !existing) {
    const link = document.createElement('link');
    link.id = `style-${key}`;
    link.rel = 'stylesheet';
    link.href = styleSheet.href;
    document.head.appendChild(link);
  } else if (!enabled && existing) {
    existing.remove();
  }
}
