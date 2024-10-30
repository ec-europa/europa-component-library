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
  }

  /**
   * Initialise component.
   */
  init() {
    if (!ECL) {
      throw new TypeError('Called init but ECL is not present');
    }

    ECL.components = ECL.components || new Map();

    // Check if svg4everybody script has already been loaded
    if (!window.svg4everybody) {
      if (!document.getElementById('svg4everybody-script')) {
        const script = document.createElement('script');
        script.id = 'svg4everybody-script';
        script.src =
          'https://cdnjs.cloudflare.com/ajax/libs/svg4everybody/2.1.9/svg4everybody.min.js';
        script.crossOrigin = 'anonymous';
        script.referrerPolicy = 'no-referrer';
        // eslint-disable-next-line func-names
        script.onload = function () {
          // eslint-disable-next-line no-undef
          svg4everybody();
        };
        document.head.appendChild(script);
      }
    } else {
      // eslint-disable-next-line no-undef
      svg4everybody();
    }

    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

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
