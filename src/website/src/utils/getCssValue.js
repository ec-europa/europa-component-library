/**
 * Get the value of a css parameter
 * @param {String} cssVar css parameter
 * @returns the corresponding value
 */
export function getCssValue(cssVar) {
  const styles = getComputedStyle(document.documentElement);
  return styles.getPropertyValue(cssVar.toLowerCase()).trim();
}

export default getCssValue;
