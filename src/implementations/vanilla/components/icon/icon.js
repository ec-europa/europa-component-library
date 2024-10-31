/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 */
export class Icon {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {MediaContainer} An instance of Icon.
   */
  static autoInit(root, { ICON: defaultOptions = {} } = {}) {
    const icon = new Icon(root, defaultOptions);
    icon.init();
    root.ECLIcon = icon;
    return icon;
  }

  constructor(element, { iconSelector = '[data-ecl-icon]' } = {}) {
    // Check element
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;
    this.iconSelector = iconSelector;
    this.cache = new Map();
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }

    ECL.components = ECL.components || new Map();

    this.inlineSVG();

    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  inlineSVG = async () => {
    const useElement = this.element.querySelector('use');
    if (!useElement) return;

    const iconUrl = useElement.getAttribute('xlink:href');
    const [url, symbolId] = iconUrl.split('#');

    if (this.cache.has(url)) {
      this.renderSymbol(this.cache.get(url), symbolId);
      return;
    }

    try {
      const response = await fetch(url, { mode: 'cors' });
      const svgText = await response.text();
      this.cache.set(url, svgText);

      const parser = new DOMParser();
      const svgDocument = parser.parseFromString(svgText, 'image/svg+xml');
      const symbolElement = svgDocument.getElementById(symbolId);

      if (symbolElement) {
        const viewBox = symbolElement.getAttribute('viewBox');
        const parentSVG = useElement.parentElement;

        const fragment = document.createDocumentFragment();
        Array.from(symbolElement.childNodes).forEach((node) =>
          fragment.appendChild(node.cloneNode(true)),
        );

        parentSVG.replaceChild(fragment, useElement);

        if (viewBox) {
          parentSVG.setAttribute('viewBox', viewBox);
        }
      }
    } catch (error) {
      console.error('Error inlining SVG:', error);
    }
  };

  /**
   * Destroy component.
   */
  destroy() {
    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }
  }
}

export default Icon;
