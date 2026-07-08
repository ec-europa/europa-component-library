/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.imgSelector Selector for the image element
 * @param {String} options.focalPointAttribute Attribute containing the focal point
 */
export class Picture {
  /**
   * @static
   * Shorthand for instance creation and initialisation.
   *
   * @param {HTMLElement} root DOM element for component instantiation and scope
   *
   * @return {Picture} An instance of Picture.
   */
  static autoInit(root, { PICTURE: defaultOptions = {} } = {}) {
    const picture = new Picture(root, defaultOptions);
    picture.init();
    root.ECLPicture = picture;
    return picture;
  }

  constructor(
    element,
    {
      imgSelector = 'img',
      focalPointAttribute = 'data-picture-focal-point',
    } = {},
  ) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    this.imgSelector = imgSelector;
    this.focalPointAttribute = focalPointAttribute;

    this.image = null;
    this.resizeObserver = null;
    this.hadPendingAttribute = false;

    this.updateFocalPoint = this.updateFocalPoint.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.image = this.element.querySelector(this.imgSelector);

    if (!this.image) {
      return;
    }

    this.image.addEventListener('load', this.updateFocalPoint);

    if (this.image.complete) {
      this.updateFocalPoint();
    }

    this.hadPendingAttribute = this.image.hasAttribute(
      'data-picture-focal-pending',
    );

    this.resizeObserver = new ResizeObserver(this.updateFocalPoint);
    this.resizeObserver.observe(this.element);

    // Set ecl initialized attribute
    this.element.setAttribute('data-ecl-auto-initialized', 'true');
    ECL.components.set(this.element, this);
  }

  /**
   * Update the image object-position.
   */
  updateFocalPoint() {
    if (!this.image?.naturalWidth || !this.image?.naturalHeight) {
      return;
    }

    const focalPoint = this.getFocalPoint();

    if (!focalPoint) {
      this.image.style.objectPosition = '';
      this.image.removeAttribute('data-picture-focal-pending');
      return;
    }

    const container = this.element.getBoundingClientRect();

    const objectPosition = this.calculateObjectPosition({
      imageWidth: this.image.naturalWidth,
      imageHeight: this.image.naturalHeight,
      containerWidth: container.width,
      containerHeight: container.height,
      focalX: focalPoint.x,
      focalY: focalPoint.y,
    });

    this.image.style.objectPosition = `${objectPosition.x}% ${objectPosition.y}%`;

    this.image.removeAttribute('data-picture-focal-pending');
  }

  /**
   * Read the focal point.
   */
  getFocalPoint() {
    const value = this.element.getAttribute(this.focalPointAttribute);

    if (!value) {
      return null;
    }

    const [x, y] = value.split(/[ ,]+/).map(Number);

    if (Number.isNaN(x) || Number.isNaN(y)) {
      return null;
    }

    return { x, y };
  }

  /**
   * Calculate the object-position.
   *
   */
  calculateObjectPosition({
    imageWidth,
    imageHeight,
    containerWidth,
    containerHeight,
    focalX,
    focalY,
  }) {
    const scale = Math.max(
      containerWidth / imageWidth,
      containerHeight / imageHeight,
    );

    const renderedWidth = imageWidth * scale;
    const renderedHeight = imageHeight * scale;

    const focalRenderedX = renderedWidth * (focalX / 100);
    const focalRenderedY = renderedHeight * (focalY / 100);

    let translateX = containerWidth / 2 - focalRenderedX;
    let translateY = containerHeight / 2 - focalRenderedY;

    translateX = Math.min(
      0,
      Math.max(containerWidth - renderedWidth, translateX),
    );

    translateY = Math.min(
      0,
      Math.max(containerHeight - renderedHeight, translateY),
    );

    const overflowX = renderedWidth - containerWidth;
    const overflowY = renderedHeight - containerHeight;

    return {
      x: overflowX > 0 ? (-translateX / overflowX) * 100 : 50,

      y: overflowY > 0 ? (-translateY / overflowY) * 100 : 50,
    };
  }

  /* Destroy the instance
   *
   */
  destroy() {
    if (this.image) {
      this.image.removeEventListener('load', this.updateFocalPoint);

      this.image.style.removeProperty('object-position');

      if (this.hadPendingAttribute) {
        this.image.setAttribute('data-ecl-focal-pending', '');
      }
    }

    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }

    this.image = null;
  }
}

export default Picture;
