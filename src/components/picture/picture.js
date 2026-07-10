import smartcrop from 'smartcrop';

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
    this.smartcrop = false;

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
    this.image.crossOrigin = 'anonymous';

    this.smartcrop = this.element.hasAttribute('smartcrop');

    if (this.image.complete) {
      this.updateFocalPoint();
    }

    this.hadPendingAttribute = this.image.hasAttribute(
      'data-picture-focal-pending',
    );

    this.resizeObserver = new ResizeObserver(this.updateFocalPoint);
    this.resizeObserver.observe(this.element);

    if (this.smartcrop) {
      this.canvas = document.createElement('canvas');
      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.style.objectFit = 'cover';
      this.ctx = this.canvas.getContext('2d');
    }

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

    if (!focalPoint && !this.smartcrop) {
      this.image.style.objectPosition = '';
      this.image.removeAttribute('data-picture-focal-pending');
      return;
    }

    const container = this.element.getBoundingClientRect();

    if (this.smartcrop) {
      this.executeCrop({
        containerWidth: container.width,
        containerHeight: container.height,
        focalX: focalPoint?.x || '',
        focalY: focalPoint?.y || '',
      });
    } else {
      const objectPosition = this.calculateObjectPosition({
        imageWidth: this.image.naturalWidth,
        imageHeight: this.image.naturalHeight,
        containerWidth: container.width,
        containerHeight: container.height,
        focalX: focalPoint?.x,
        focalY: focalPoint?.y,
      });

      this.image.style.objectPosition = `${objectPosition.x}% ${objectPosition.y}%`;
    }

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
   * @param {Number} imageWidth Width of the image
   * @param {Number} imageHeight Height of the image
   * @param {Number} containerWidth Width of the container
   * @param {Number} imageHeight Height of the container
   * @param {Number} focalX Value in percentage of the horizontal position of the focal point
   * @param {Number} focalY Value in percentage of the vertical position of the focal point
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

  /**
   * Use smartcrop to smartly crop the image.
   *
   * @param {Number} containerWidth Width of the container
   * @param {Number} imageHeight Height of the container
   * @param {Number} focalX Value in percentage of the horizontal position of the focal point
   * @param {Number} focalY Value in percentage of the vertical position of the focal point
   */
  executeCrop = async ({ containerWidth, containerHeight, focalX, focalY }) => {
    try {
      // 1. Configure default options based on target container size
      const options = {
        width: containerWidth,
        height: containerHeight,
        minScale: 1.0,
      };

      // Get the focal point values in pixels
      const focalPxX = this.image.naturalWidth * (focalX / 100);
      const focalPxY = this.image.naturalHeight * (focalY / 100);

      // Smartcrop doesn't really use focal point, this is more an area that we want it to consider relevant.
      const boostSize =
        Math.min(this.image.naturalWidth, this.image.naturalHeight) * 0.2;

      // 2. Inject custom focal point logic using smartcrop's 'boost' feature
      options.boost = [
        {
          x: focalPxX - boostSize / 2,
          y: focalPxY - boostSize / 2,
          width: boostSize,
          height: boostSize,
          weight: 5,
        },
      ];

      // 3. Process the smart crop asynchronously
      const result = await smartcrop.crop(this.image, options);
      const crop = result.topCrop;

      // 4. Update canvas internal resolution to prevent blurriness
      this.canvas.width = containerWidth;
      this.canvas.height = containerHeight;

      // 5. Clear and paint the specific smart-cropped slice onto the canvas
      this.ctx.clearRect(0, 0, containerWidth, containerHeight);
      this.ctx.drawImage(
        this.image,
        crop.x,
        crop.y,
        crop.width,
        crop.height, // Source crop slice
        0,
        0,
        containerWidth,
        containerHeight, // Target canvas bounds
      );

      this.image.style.display = 'none';
      this.canvas.style.width = '';
      this.canvas.style.height = '';
      this.canvas.className = this.image.className;
      this.element.appendChild(this.canvas);
    } catch (error) {
      console.error('Smartcrop execution failed:', error);
    }
  };

  /*
   * Destroy the instance
   */
  destroy() {
    if (this.image) {
      this.image.removeEventListener('load', this.updateFocalPoint);

      this.image.style.removeProperty('object-position');

      if (this.hadPendingAttribute) {
        this.image.setAttribute('data-ecl-focal-pending', '');
      }

      if (this.smartcrop) {
        this.image.style.display = '';
        this.canvas.remove();
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
