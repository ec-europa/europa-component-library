import smartcrop from 'smartcrop';

/**
 * @param {HTMLElement} element DOM element for component instantiation and scope
 * @param {Object} options
 * @param {String} options.imgSelector Selector for the image element
 * @param {String} options.debugSelector Selector for enabling the debug
 * @param {String} options.smartcropSelector Selector for enabling smartcrop
 * @param {String} options.imagePendingAttribute Selector for hiding the image before calculations are done
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
      debugSelector = 'data-picture-debug',
      smartcropSelector = 'smartcrop',
      imagePendingAttribute = 'data-picture-focal-pending',
    } = {},
  ) {
    if (!element || element.nodeType !== Node.ELEMENT_NODE) {
      throw new TypeError(
        'DOM element should be given to initialize this widget.',
      );
    }

    this.element = element;

    this.imgSelector = imgSelector;
    this.debugSelector = debugSelector;
    this.focalPointAttribute = focalPointAttribute;
    this.smartcropSelector = smartcropSelector;
    this.imagePendingAttribute = imagePendingAttribute;

    this.image = null;
    this.resizeObserver = null;
    this.hadPendingAttribute = false;
    this.smartcrop = false;
    this.currentCrop = null;
    this.debug = false;
    this.debugMarker = null;
    this.resizeTimeout = null;
    this.resizeObserver = null;

    this.updateFocalPoint = this.updateFocalPoint.bind(this);
    this.updateDebugMarker = this.updateDebugMarker.bind(this);
  }

  /**
   * Initialise component.
   */
  init() {
    this.image = this.element.querySelector(this.imgSelector);
    this.debug = this.element.hasAttribute(this.debugSelector);
    this.smartcrop = this.element.hasAttribute(this.smartcropSelector);

    if (!this.image) {
      return;
    }

    this.image.addEventListener('load', this.updateFocalPoint);
    this.image.crossOrigin = 'anonymous';

    if (this.image.complete) {
      this.updateFocalPoint();
    }

    this.hadPendingAttribute = this.image.hasAttribute(
      this.imagePendingAttribute,
    );

    this.resizeObserver = new ResizeObserver(this.handleResize);
    this.resizeObserver.observe(this.image);

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
  async updateFocalPoint() {
    if (!this.image?.naturalWidth || !this.image?.naturalHeight) {
      return;
    }

    const focalPoint = this.getFocalPoint();

    if (!focalPoint && !this.smartcrop) {
      this.image.style.objectPosition = '';
      this.image.removeAttribute(this.imagePendingAttribute);
      return;
    }

    const container = this.element.getBoundingClientRect();

    if (this.smartcrop) {
      await this.executeCrop({
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

    if (this.debug) {
      const position = getComputedStyle(this.element).position;
      if (position === 'static') {
        this.element.style.position = 'relative';
      }
      this.updateDebugMarker();
    }

    this.image.removeAttribute(this.imagePendingAttribute);
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
   * @param {Number} containerHeight Height of the container
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

      options.boost = [
        {
          x: focalPxX - boostSize / 2,
          y: focalPxY - boostSize / 2,
          width: boostSize,
          height: boostSize,
          weight: 5,
        },
      ];

      const result = await smartcrop.crop(this.image, options);
      const crop = result.topCrop;

      this.currentCrop = crop;

      this.canvas.width = containerWidth;
      this.canvas.height = containerHeight;

      this.ctx.clearRect(0, 0, containerWidth, containerHeight);
      this.ctx.drawImage(
        this.image,
        crop.x,
        crop.y,
        crop.width,
        crop.height,
        0,
        0,
        containerWidth,
        containerHeight,
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

  /**
   * Debounced call to the update function when resizing.
   */
  handleResize = () => {
    clearTimeout(this.resizeTimeout);

    this.resizeTimeout = setTimeout(() => {
      this.updateFocalPoint();
    }, 100);
  };

  /**
   * Decide whether to run the smartcrop or standard debug.
   */
  getRenderedFocalPoint() {
    if (this.smartcrop) {
      return this.getSmartcropRenderedFocalPoint();
    }

    return this.getObjectPositionRenderedFocalPoint();
  }

  /**
   * Get the rendered coordinates of the focal point inside the container.
   *
   * @returns {{x: number, y: number, visible: boolean}|null}
   */
  getObjectPositionRenderedFocalPoint = () => {
    if (!this.image?.naturalWidth || !this.image?.naturalHeight) {
      return null;
    }

    const focalPoint = this.getFocalPoint();

    if (!focalPoint) {
      return null;
    }

    const container = this.element.getBoundingClientRect();

    const imageWidth = this.image.naturalWidth;
    const imageHeight = this.image.naturalHeight;

    const containerWidth = container.width;
    const containerHeight = container.height;

    const scale = Math.max(
      containerWidth / imageWidth,
      containerHeight / imageHeight,
    );

    const renderedWidth = imageWidth * scale;
    const renderedHeight = imageHeight * scale;

    const objectPosition = this.calculateObjectPosition({
      imageWidth,
      imageHeight,
      containerWidth,
      containerHeight,
      focalX: focalPoint.x,
      focalY: focalPoint.y,
    });

    const overflowX = renderedWidth - containerWidth;
    const overflowY = renderedHeight - containerHeight;

    const translateX =
      overflowX > 0 ? -(objectPosition.x / 100) * overflowX : 0;

    const translateY =
      overflowY > 0 ? -(objectPosition.y / 100) * overflowY : 0;

    const x = renderedWidth * (focalPoint.x / 100) + translateX;

    const y = renderedHeight * (focalPoint.y / 100) + translateY;

    return {
      x,
      y,
      visible: x >= 0 && x <= containerWidth && y >= 0 && y <= containerHeight,
    };
  };

  /**
   * Get the focal point position in the rendered canvas.
   *
   */
  getSmartcropRenderedFocalPoint = () => {
    const container = this.element.getBoundingClientRect();
    const containerWidth = container.width;
    const containerHeight = container.height;
    const focalPoint = this.getFocalPoint();
    const focalPxX = this.image.naturalWidth * (focalPoint?.x / 100);
    const focalPxY = this.image.naturalHeight * (focalPoint?.y / 100);

    const x =
      ((focalPxX - this.currentCrop.x) / this.currentCrop.width) *
      this.canvas.width;

    const y =
      ((focalPxY - this.currentCrop.y) / this.currentCrop.height) *
      this.canvas.height;

    return {
      x,
      y,
      visible: x >= 0 && x <= containerWidth && y >= 0 && y <= containerHeight,
    };
  };

  /**
   * Set the marker at the right position in the image.
   */
  updateDebugMarker() {
    const point = this.getRenderedFocalPoint();

    if (!point) {
      return;
    }

    if (!this.debugMarker) {
      this.debugMarker = document.createElement('span');

      Object.assign(this.debugMarker.style, {
        position: 'absolute',
        width: '16px',
        height: '16px',
        borderRadius: '50%',
        background: '#e43',
        border: '3px solid white',
        transform: 'translate(-50%, -50%)',
        boxShadow: '0 0 0 1px rgba(0,0,0,.3)',
        pointerEvents: 'none',
        zIndex: 9999,
      });

      this.element.appendChild(this.debugMarker);
    }

    this.debugMarker.style.left = `${point.x}px`;
    this.debugMarker.style.top = `${point.y}px`;
    this.debugMarker.style.display = point.visible ? '' : 'none';
  }

  /*
   * Destroy the instance
   */
  destroy() {
    if (this.image) {
      this.image.removeEventListener('load', this.updateFocalPoint);

      this.image.style.removeProperty('object-position');

      if (this.hadPendingAttribute) {
        this.image.setAttribute(this.imagePendingAttribute, '');
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

    if (this.debugMarker) {
      this.debugMarker.remove();
    }

    if (this.element) {
      this.element.removeAttribute('data-ecl-auto-initialized');
      ECL.components.delete(this.element);
    }

    this.image = null;
  }
}

export default Picture;
