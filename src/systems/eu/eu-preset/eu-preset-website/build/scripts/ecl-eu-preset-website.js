var ECL = (function(exports) {
  'use strict';

  // Query helper
  var queryAll = function queryAll(selector) {
    var context =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;
    return [].slice.call(context.querySelectorAll(selector));
  };

  // Heavily inspired by the accordion component from https://github.com/frend/frend.co

  /**
   * @param {object} options Object containing configuration overrides
   */
  var accordions = function accordions() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '.ecl-accordion' : _ref$selector,
      _ref$headerSelector = _ref.headerSelector,
      headerSelector =
        _ref$headerSelector === undefined
          ? '.ecl-accordion__header'
          : _ref$headerSelector;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    // SETUP
    // set accordion element NodeLists
    var accordionContainers = queryAll(selector);

    // ACTIONS
    function hidePanel(target) {
      // get panel
      var activePanel = document.getElementById(
        target.getAttribute('aria-controls')
      );

      target.setAttribute('aria-expanded', 'false');

      // toggle aria-hidden
      activePanel.setAttribute('aria-hidden', 'true');
    }

    function showPanel(target) {
      // get panel
      var activePanel = document.getElementById(
        target.getAttribute('aria-controls')
      );

      // set attributes on header
      target.setAttribute('tabindex', 0);
      target.setAttribute('aria-expanded', 'true');

      // toggle aria-hidden and set height on panel
      activePanel.setAttribute('aria-hidden', 'false');
    }

    function togglePanel(target) {
      // close target panel if already active
      if (target.getAttribute('aria-expanded') === 'true') {
        hidePanel(target);
        return;
      }

      showPanel(target);
    }

    function giveHeaderFocus(headerSet, i) {
      // set active focus
      headerSet[i].focus();
    }

    // EVENTS
    function eventHeaderClick(e) {
      togglePanel(e.currentTarget);
    }

    function eventHeaderKeydown(e) {
      // collect header targets, and their prev/next
      var currentHeader = e.currentTarget;
      var isModifierKey = e.metaKey || e.altKey;
      // get context of accordion container and its children
      var thisContainer = currentHeader.parentNode.parentNode;
      var theseHeaders = queryAll(headerSelector, thisContainer);
      var currentHeaderIndex = [].indexOf.call(theseHeaders, currentHeader);

      // don't catch key events when ⌘ or Alt modifier is present
      if (isModifierKey) return;

      // catch enter/space, left/right and up/down arrow key events
      // if new panel show it, if next/prev move focus
      switch (e.keyCode) {
        case 13:
        case 32:
          togglePanel(currentHeader);
          e.preventDefault();
          break;
        case 37:
        case 38: {
          var previousHeaderIndex =
            currentHeaderIndex === 0
              ? theseHeaders.length - 1
              : currentHeaderIndex - 1;
          giveHeaderFocus(theseHeaders, previousHeaderIndex);
          e.preventDefault();
          break;
        }
        case 39:
        case 40: {
          var nextHeaderIndex =
            currentHeaderIndex < theseHeaders.length - 1
              ? currentHeaderIndex + 1
              : 0;
          giveHeaderFocus(theseHeaders, nextHeaderIndex);
          e.preventDefault();
          break;
        }
        default:
          break;
      }
    }

    // BIND EVENTS
    function bindAccordionEvents(accordionContainer) {
      var accordionHeaders = queryAll(headerSelector, accordionContainer);
      // bind all accordion header click and keydown events
      accordionHeaders.forEach(function(accordionHeader) {
        accordionHeader.addEventListener('click', eventHeaderClick);
        accordionHeader.addEventListener('keydown', eventHeaderKeydown);
      });
    }

    // UNBIND EVENTS
    function unbindAccordionEvents(accordionContainer) {
      var accordionHeaders = queryAll(headerSelector, accordionContainer);
      // unbind all accordion header click and keydown events
      accordionHeaders.forEach(function(accordionHeader) {
        accordionHeader.removeEventListener('click', eventHeaderClick);
        accordionHeader.removeEventListener('keydown', eventHeaderKeydown);
      });
    }

    // DESTROY
    function destroy() {
      accordionContainers.forEach(function(accordionContainer) {
        unbindAccordionEvents(accordionContainer);
      });
    }

    // INIT
    function init() {
      if (accordionContainers.length) {
        accordionContainers.forEach(function(accordionContainer) {
          bindAccordionEvents(accordionContainer);
        });
      }
    }

    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  var commonjsGlobal =
    typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined'
          ? self
          : {};

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  var _typeof =
    typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol'
      ? function(obj) {
          return typeof obj;
        }
      : function(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };

  /**
   * lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="npm" -o ./`
   * Copyright jQuery Foundation and other contributors <https://jquery.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   */

  /** Used as the `TypeError` message for "Functions" methods. */
  var FUNC_ERROR_TEXT = 'Expected a function';

  /** Used as references for various `Number` constants. */
  var NAN = 0 / 0;

  /** `Object#toString` result references. */
  var symbolTag = '[object Symbol]';

  /** Used to match leading and trailing whitespace. */
  var reTrim = /^\s+|\s+$/g;

  /** Used to detect bad signed hexadecimal string values. */
  var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

  /** Used to detect binary string values. */
  var reIsBinary = /^0b[01]+$/i;

  /** Used to detect octal string values. */
  var reIsOctal = /^0o[0-7]+$/i;

  /** Built-in method references without a dependency on `root`. */
  var freeParseInt = parseInt;

  /** Detect free variable `global` from Node.js. */
  var freeGlobal =
    _typeof(commonjsGlobal) == 'object' &&
    commonjsGlobal &&
    commonjsGlobal.Object === Object &&
    commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf =
    (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' &&
    self &&
    self.Object === Object &&
    self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Used for built-in method references. */
  var objectProto = Object.prototype;

  /**
   * Used to resolve the
   * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
   * of values.
   */
  var objectToString = objectProto.toString;

  /* Built-in method references for those with the same name as other `lodash` methods. */
  var nativeMax = Math.max,
    nativeMin = Math.min;

  /**
   * Gets the timestamp of the number of milliseconds that have elapsed since
   * the Unix epoch (1 January 1970 00:00:00 UTC).
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Date
   * @returns {number} Returns the timestamp.
   * @example
   *
   * _.defer(function(stamp) {
   *   console.log(_.now() - stamp);
   * }, _.now());
   * // => Logs the number of milliseconds it took for the deferred invocation.
   */
  var now = function now() {
    return root.Date.now();
  };

  /**
   * Creates a debounced function that delays invoking `func` until after `wait`
   * milliseconds have elapsed since the last time the debounced function was
   * invoked. The debounced function comes with a `cancel` method to cancel
   * delayed `func` invocations and a `flush` method to immediately invoke them.
   * Provide `options` to indicate whether `func` should be invoked on the
   * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
   * with the last arguments provided to the debounced function. Subsequent
   * calls to the debounced function return the result of the last `func`
   * invocation.
   *
   * **Note:** If `leading` and `trailing` options are `true`, `func` is
   * invoked on the trailing edge of the timeout only if the debounced function
   * is invoked more than once during the `wait` timeout.
   *
   * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
   * until to the next tick, similar to `setTimeout` with a timeout of `0`.
   *
   * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
   * for details over the differences between `_.debounce` and `_.throttle`.
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Function
   * @param {Function} func The function to debounce.
   * @param {number} [wait=0] The number of milliseconds to delay.
   * @param {Object} [options={}] The options object.
   * @param {boolean} [options.leading=false]
   *  Specify invoking on the leading edge of the timeout.
   * @param {number} [options.maxWait]
   *  The maximum time `func` is allowed to be delayed before it's invoked.
   * @param {boolean} [options.trailing=true]
   *  Specify invoking on the trailing edge of the timeout.
   * @returns {Function} Returns the new debounced function.
   * @example
   *
   * // Avoid costly calculations while the window size is in flux.
   * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
   *
   * // Invoke `sendMail` when clicked, debouncing subsequent calls.
   * jQuery(element).on('click', _.debounce(sendMail, 300, {
   *   'leading': true,
   *   'trailing': false
   * }));
   *
   * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
   * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
   * var source = new EventSource('/stream');
   * jQuery(source).on('message', debounced);
   *
   * // Cancel the trailing debounced invocation.
   * jQuery(window).on('popstate', debounced.cancel);
   */
  function debounce(func, wait, options) {
    var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

    if (typeof func != 'function') {
      throw new TypeError(FUNC_ERROR_TEXT);
    }
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
      leading = !!options.leading;
      maxing = 'maxWait' in options;
      maxWait = maxing
        ? nativeMax(toNumber(options.maxWait) || 0, wait)
        : maxWait;
      trailing = 'trailing' in options ? !!options.trailing : trailing;
    }

    function invokeFunc(time) {
      var args = lastArgs,
        thisArg = lastThis;

      lastArgs = lastThis = undefined;
      lastInvokeTime = time;
      result = func.apply(thisArg, args);
      return result;
    }

    function leadingEdge(time) {
      // Reset any `maxWait` timer.
      lastInvokeTime = time;
      // Start the timer for the trailing edge.
      timerId = setTimeout(timerExpired, wait);
      // Invoke the leading edge.
      return leading ? invokeFunc(time) : result;
    }

    function remainingWait(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

      return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }

    function shouldInvoke(time) {
      var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

      // Either this is the first call, activity has stopped and we're at the
      // trailing edge, the system time has gone backwards and we're treating
      // it as the trailing edge, or we've hit the `maxWait` limit.
      return (
        lastCallTime === undefined ||
        timeSinceLastCall >= wait ||
        timeSinceLastCall < 0 ||
        (maxing && timeSinceLastInvoke >= maxWait)
      );
    }

    function timerExpired() {
      var time = now();
      if (shouldInvoke(time)) {
        return trailingEdge(time);
      }
      // Restart the timer.
      timerId = setTimeout(timerExpired, remainingWait(time));
    }

    function trailingEdge(time) {
      timerId = undefined;

      // Only invoke if we have `lastArgs` which means `func` has been
      // debounced at least once.
      if (trailing && lastArgs) {
        return invokeFunc(time);
      }
      lastArgs = lastThis = undefined;
      return result;
    }

    function cancel() {
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
      lastInvokeTime = 0;
      lastArgs = lastCallTime = lastThis = timerId = undefined;
    }

    function flush() {
      return timerId === undefined ? result : trailingEdge(now());
    }

    function debounced() {
      var time = now(),
        isInvoking = shouldInvoke(time);

      lastArgs = arguments;
      lastThis = this;
      lastCallTime = time;

      if (isInvoking) {
        if (timerId === undefined) {
          return leadingEdge(lastCallTime);
        }
        if (maxing) {
          // Handle invocations in a tight loop.
          timerId = setTimeout(timerExpired, wait);
          return invokeFunc(lastCallTime);
        }
      }
      if (timerId === undefined) {
        timerId = setTimeout(timerExpired, wait);
      }
      return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
  }

  /**
   * Checks if `value` is the
   * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
   * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
   *
   * @static
   * @memberOf _
   * @since 0.1.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is an object, else `false`.
   * @example
   *
   * _.isObject({});
   * // => true
   *
   * _.isObject([1, 2, 3]);
   * // => true
   *
   * _.isObject(_.noop);
   * // => true
   *
   * _.isObject(null);
   * // => false
   */
  function isObject(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    return !!value && (type == 'object' || type == 'function');
  }

  /**
   * Checks if `value` is object-like. A value is object-like if it's not `null`
   * and has a `typeof` result of "object".
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
   * @example
   *
   * _.isObjectLike({});
   * // => true
   *
   * _.isObjectLike([1, 2, 3]);
   * // => true
   *
   * _.isObjectLike(_.noop);
   * // => false
   *
   * _.isObjectLike(null);
   * // => false
   */
  function isObjectLike(value) {
    return (
      !!value &&
      (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object'
    );
  }

  /**
   * Checks if `value` is classified as a `Symbol` primitive or object.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
   * @example
   *
   * _.isSymbol(Symbol.iterator);
   * // => true
   *
   * _.isSymbol('abc');
   * // => false
   */
  function isSymbol(value) {
    return (
      (typeof value === 'undefined' ? 'undefined' : _typeof(value)) ==
        'symbol' ||
      (isObjectLike(value) && objectToString.call(value) == symbolTag)
    );
  }

  /**
   * Converts `value` to a number.
   *
   * @static
   * @memberOf _
   * @since 4.0.0
   * @category Lang
   * @param {*} value The value to process.
   * @returns {number} Returns the number.
   * @example
   *
   * _.toNumber(3.2);
   * // => 3.2
   *
   * _.toNumber(Number.MIN_VALUE);
   * // => 5e-324
   *
   * _.toNumber(Infinity);
   * // => Infinity
   *
   * _.toNumber('3.2');
   * // => 3.2
   */
  function toNumber(value) {
    if (typeof value == 'number') {
      return value;
    }
    if (isSymbol(value)) {
      return NAN;
    }
    if (isObject(value)) {
      var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
      value = isObject(other) ? other + '' : other;
    }
    if (typeof value != 'string') {
      return value === 0 ? value : +value;
    }
    value = value.replace(reTrim, '');
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value)
      ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
      : reIsBadHex.test(value)
        ? NAN
        : +value;
  }

  var lodash_debounce = debounce;

  /**
   * @param {object} options Object containing configuration overrides
   */
  var carousels = function carousels() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selectorId = _ref.selectorId,
      selectorId =
        _ref$selectorId === undefined ? 'ecl-carousel' : _ref$selectorId;

    // SUPPORTS
    if (!('querySelector' in document) || !('addEventListener' in window)) {
      return null;
    }

    // SETUP
    var currentSlide = 0;
    var carousel = document.getElementById(selectorId);
    var slides = queryAll('.ecl-carousel__item', carousel);
    var list = carousel.querySelector('.ecl-carousel__list');

    function getListItemWidth() {
      return carousel.querySelector('.ecl-carousel__item').offsetWidth;
    }

    function goToSlide(n) {
      slides[currentSlide].classList.remove('ecl-carousel__item--showing');
      currentSlide = (n + slides.length) % slides.length;
      slides[currentSlide].classList.add('ecl-carousel__item--showing');
    }

    function setOffset() {
      var itemWidth = getListItemWidth();
      var tr = 'translate3d(' + -currentSlide * itemWidth + 'px, 0, 0)';

      list.style.MozTransform = tr; /* FF */
      list.style.msTransform = tr; /* IE (9+) */
      list.style.OTransform = tr; /* Opera */
      list.style.WebkitTransform = tr; /* Safari + Chrome */
      list.style.transform = tr;
    }

    function announceCurrentSlide() {
      carousel.querySelector('.ecl-carousel__meta-slide').textContent =
        currentSlide + 1 + ' / ' + slides.length;
    }

    function showImageInformation() {
      // Reset/Hide all.
      var infoAreas = queryAll('[data-image]');
      // If anything is visible.
      if (infoAreas) {
        // eslint-disable-next-line
        infoAreas.forEach(function(area) {
          return (area.style.display = 'none');
        });
      }

      carousel.querySelector(
        '[data-image="' + currentSlide + '"]'
      ).style.display =
        'block';
    }

    function previousSlide() {
      goToSlide(currentSlide - 1);
      setOffset();
      announceCurrentSlide();
      showImageInformation();
    }

    function nextSlide() {
      goToSlide(currentSlide + 1);
      setOffset();
      announceCurrentSlide();
      showImageInformation();
    }

    // Attach controls to a carousel.
    function addCarouselControls() {
      var navControls = document.createElement('ul');

      navControls.className = 'ecl-carousel__controls ecl-list--unstyled';

      navControls.innerHTML =
        '\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--left ecl-carousel__button ecl-carousel__button--previous">\n          <span class="ecl-u-sr-only">Previous</span></button>\n      </li>\n      <li>\n        <button type="button" class="ecl-icon ecl-icon--right ecl-carousel__button ecl-carousel__button--next">\n          <span class="ecl-u-sr-only">Next</span>\n        </button>\n      </li>\n    ';

      navControls
        .querySelector(
          '.ecl-carousel__button--previous',
          '.ecl-carousel__controls'
        )
        .addEventListener('click', previousSlide);

      navControls
        .querySelector('.ecl-carousel__button--next', '.ecl-carousel__controls')
        .addEventListener('click', nextSlide);

      carousel
        .querySelector('.ecl-carousel__list-wrapper')
        .appendChild(navControls);
    }

    function removeCarouselControls() {
      var controls = carousel.querySelector('.ecl-carousel__controls');
      carousel
        .querySelector('.ecl-carousel__list-wrapper')
        .removeChild(controls);
    }

    function addLiveRegion() {
      var liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.classList.add('ecl-carousel__meta-slide');
      carousel
        .querySelector('.ecl-carousel__live-region')
        .appendChild(liveRegion);
    }

    function removeLiveRegion() {
      var liveRegion = carousel.querySelector('.ecl-carousel__meta-slide');
      carousel
        .querySelector('.ecl-carousel__live-region')
        .removeChild(liveRegion);
    }

    var debounceCb = function debounceCb() {
      return lodash_debounce(
        function() {
          setOffset();
        },
        100,
        { maxWait: 300 }
      )();
    };

    // INIT
    function init() {
      addCarouselControls();
      addLiveRegion();
      goToSlide(0);
      announceCurrentSlide();
      showImageInformation();

      // Re-align on resize.
      window.addEventListener('resize', debounceCb);
    }

    // DESTROY
    function destroy() {
      removeCarouselControls();
      removeLiveRegion();
      window.removeEventListener('resize', debounceCb);
    }

    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  /**
   * Contextual navigation scripts
   */

  var expandContextualNav = function expandContextualNav(
    contextualNav,
    button
  ) {
    var _ref =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$classToRemove = _ref.classToRemove,
      classToRemove =
        _ref$classToRemove === undefined
          ? 'ecl-context-nav__item--over-limit'
          : _ref$classToRemove,
      _ref$hiddenElementsSe = _ref.hiddenElementsSelector,
      hiddenElementsSelector =
        _ref$hiddenElementsSe === undefined
          ? '.ecl-context-nav__item--over-limit'
          : _ref$hiddenElementsSe,
      _ref$context = _ref.context,
      context = _ref$context === undefined ? document : _ref$context;

    if (!contextualNav) {
      return;
    }

    var hiddenElements = queryAll(hiddenElementsSelector, context);

    // Remove extra class
    hiddenElements.forEach(function(element) {
      element.classList.remove(classToRemove);
    });

    // Remove buttton
    button.parentNode.removeChild(button);
  };

  // Helper method to automatically attach the event listener to all the expandables on page load
  var contextualNavs = function contextualNavs() {
    var _ref2 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$selector = _ref2.selector,
      selector =
        _ref2$selector === undefined ? '.ecl-context-nav' : _ref2$selector,
      _ref2$buttonSelector = _ref2.buttonSelector,
      buttonSelector =
        _ref2$buttonSelector === undefined
          ? '.ecl-context-nav__more'
          : _ref2$buttonSelector,
      _ref2$hiddenElementsS = _ref2.hiddenElementsSelector,
      hiddenElementsSelector =
        _ref2$hiddenElementsS === undefined
          ? '.ecl-context-nav__item--over-limit'
          : _ref2$hiddenElementsS,
      _ref2$classToRemove = _ref2.classToRemove,
      classToRemove =
        _ref2$classToRemove === undefined
          ? 'ecl-context-nav__item--over-limit'
          : _ref2$classToRemove,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? document : _ref2$context;

    var nodesArray = queryAll(selector, context);

    nodesArray.forEach(function(node) {
      var button = context.querySelector(buttonSelector);

      if (button) {
        button.addEventListener('click', function() {
          return expandContextualNav(node, button, {
            classToRemove: classToRemove,
            hiddenElementsSelector: hiddenElementsSelector,
          });
        });
      }
    });
  };

  /**
   * `Node#contains()` polyfill.
   *
   * See: http://compatibility.shwups-cms.ch/en/polyfills/?&id=1
   *
   * @param {Node} node
   * @param {Node} other
   * @return {Boolean}
   * @public
   */

  function contains(node, other) {
    // eslint-disable-next-line no-bitwise
    return node === other || !!(node.compareDocumentPosition(other) & 16);
  }

  var dropdown = function dropdown(selector) {
    var dropdownsArray = Array.prototype.slice.call(
      document.querySelectorAll(selector)
    );

    document.addEventListener('click', function(event) {
      dropdownsArray.forEach(function(dropdownSelection) {
        var isInside = contains(dropdownSelection, event.target);

        if (!isInside) {
          var dropdownButton = document.querySelector(
            selector + ' > [aria-expanded=true]'
          );
          var dropdownBody = document.querySelector(
            selector + ' > [aria-hidden=false]'
          );
          // If the body of the dropdown is visible, then toggle.
          if (dropdownBody) {
            dropdownButton.setAttribute('aria-expanded', false);
            dropdownBody.setAttribute('aria-hidden', true);
          }
        }
      });
    });
  };

  /**
   * @param {object} options Object containing configuration overrides
   *
   * Available options:
   * - options.triggerElementsSelector - any selector to which event listeners
   * are attached. When clicked on any element with such a selector, a dialog opens.
   *
   * - options.dialogWindowId - id of target dialog window. Defaults to `ecl-dialog`.
   *
   * - options.dialogOverlayId - id of target dialog window. Defaults to `ecl-overlay`.
   * Overlay element is created in the document if not provided by the user.
   */
  var dialogs = function dialogs() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$triggerElementsS = _ref.triggerElementsSelector,
      triggerElementsSelector =
        _ref$triggerElementsS === undefined
          ? '[data-ecl-dialog]'
          : _ref$triggerElementsS,
      _ref$dialogWindowId = _ref.dialogWindowId,
      dialogWindowId =
        _ref$dialogWindowId === undefined ? 'ecl-dialog' : _ref$dialogWindowId,
      _ref$dialogOverlayId = _ref.dialogOverlayId,
      dialogOverlayId =
        _ref$dialogOverlayId === undefined
          ? 'ecl-overlay'
          : _ref$dialogOverlayId;

    // SUPPORTS
    if (!('querySelector' in document) || !('addEventListener' in window)) {
      return null;
    }

    // SETUP
    var triggerElements = queryAll(triggerElementsSelector);
    var dialogWindow = document.getElementById(dialogWindowId);
    var dialogOverlay = document.getElementById(dialogOverlayId);

    // Create an overlay element if the user does not supply one.
    if (!dialogOverlay) {
      var element = document.createElement('div');
      element.setAttribute('id', 'ecl-overlay');
      element.setAttribute('class', 'ecl-dialog__overlay');
      element.setAttribute('aria-hidden', 'true');
      document.body.appendChild(element);
      dialogOverlay = element;
    }

    // What we can focus on in the modal.
    var focusableElements = [].slice.call(
      queryAll(
        '\n        a[href],\n        area[href],\n        input:not([disabled]),\n        select:not([disabled]),\n        textarea:not([disabled]),\n        button:not([disabled]),\n        [tabindex="0"]\n      ',
        dialogWindow
      )
    );

    // Use this variable to return focus on element after dialog being closed.
    var focusedElBeforeOpen = null;

    // Specific elements to take care when openning and closing the dialog.
    var firstFocusableElement = focusableElements[0];
    var lastFocusableElement = focusableElements[focusableElements.length - 1];

    // EVENTS
    // Hide dialog and overlay elements.
    function close(event) {
      event.preventDefault();
      dialogWindow.setAttribute('aria-hidden', true);
      dialogOverlay.setAttribute('aria-hidden', true);

      if (focusedElBeforeOpen) {
        focusedElBeforeOpen.focus();
      }

      document.querySelector('body').classList.remove('ecl-u-disablescroll');
    }

    // Keyboard behaviors.
    function handleKeyDown(e) {
      var KEY_TAB = 9;
      var KEY_ESC = 27;

      function handleBackwardTab() {
        if (document.activeElement === firstFocusableElement) {
          e.preventDefault();
          lastFocusableElement.focus();
        }
      }

      function handleForwardTab() {
        if (document.activeElement === lastFocusableElement) {
          e.preventDefault();
          firstFocusableElement.focus();
        }
      }

      switch (e.keyCode) {
        // Keep tabbing in the scope of the dialog.
        case KEY_TAB:
          if (focusableElements.length === 1) {
            e.preventDefault();
            break;
          }
          if (e.shiftKey) {
            handleBackwardTab();
          } else {
            handleForwardTab();
          }
          break;
        case KEY_ESC:
          close();
          break;
        default:
          break;
      }
    }

    // Show dialog and overlay elements.
    function open(event) {
      event.preventDefault();
      dialogWindow.setAttribute('aria-hidden', false);
      dialogOverlay.setAttribute('aria-hidden', false);

      // This is the element to have the focus after closing the dialog.
      // Usually the element which triggered the dialog.
      focusedElBeforeOpen = document.activeElement;

      // Focus on the first element in the dialog.
      firstFocusableElement.focus();

      // Close dialog when clicked out of the dialog window.
      dialogOverlay.addEventListener('click', close);

      // Handle tabbing, esc and keyboard in the dialog window.
      dialogWindow.addEventListener('keydown', handleKeyDown);

      document.querySelector('body').classList.add('ecl-u-disablescroll');
    }

    // BIND EVENTS
    function bindDialogEvents(elements) {
      elements.forEach(function(element) {
        return element.addEventListener('click', open);
      });

      // const closeButtons = document.querySelectorAll('.ecl-message__dismiss');
      queryAll('.ecl-message__dismiss').forEach(function(button) {
        button.addEventListener('click', close);
      });
    }

    // UNBIND EVENTS
    function unbindDialogEvents(elements) {
      elements.forEach(function(element) {
        return element.removeEventListener('click', open);
      });

      // const closeButtons = document.querySelectorAll('.ecl-message__dismiss');
      queryAll('.ecl-message__dismiss').forEach(function(button) {
        button.removeEventListener('click', close);
      });
    }

    // DESTROY
    function destroy() {
      unbindDialogEvents(triggerElements);
    }

    // INIT
    function init() {
      if (triggerElements.length) {
        bindDialogEvents(triggerElements);
      }
    }

    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  /* eslint-disable no-param-reassign */

  var toggleExpandable = function toggleExpandable(toggleElement) {
    var _ref =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$context = _ref.context,
      context = _ref$context === undefined ? document : _ref$context,
      _ref$forceClose = _ref.forceClose,
      forceClose = _ref$forceClose === undefined ? false : _ref$forceClose,
      _ref$closeSiblings = _ref.closeSiblings,
      closeSiblings =
        _ref$closeSiblings === undefined ? false : _ref$closeSiblings,
      _ref$siblingsSelector = _ref.siblingsSelector,
      siblingsSelector =
        _ref$siblingsSelector === undefined
          ? '[aria-controls][aria-expanded]'
          : _ref$siblingsSelector;

    if (!toggleElement) {
      return;
    }

    // Get target element
    var target = document.getElementById(
      toggleElement.getAttribute('aria-controls')
    );

    // Exit if no target found
    if (!target) {
      return;
    }

    // Get current status
    var isExpanded =
      forceClose === true ||
      toggleElement.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    toggleElement.setAttribute('aria-expanded', !isExpanded);
    target.setAttribute('aria-hidden', isExpanded);

    // Toggle label if possible
    if (!isExpanded && toggleElement.hasAttribute('data-label-expanded')) {
      toggleElement.innerHTML = toggleElement.getAttribute(
        'data-label-expanded'
      );
    } else if (
      isExpanded &&
      toggleElement.hasAttribute('data-label-collapsed')
    ) {
      toggleElement.innerHTML = toggleElement.getAttribute(
        'data-label-collapsed'
      );
    }

    // Close siblings if requested
    if (closeSiblings === true) {
      var siblingsArray = Array.prototype.slice
        .call(context.querySelectorAll(siblingsSelector))
        .filter(function(sibling) {
          return sibling !== toggleElement;
        });

      siblingsArray.forEach(function(sibling) {
        toggleExpandable(sibling, {
          context: context,
          forceClose: true,
        });
      });
    }
  };

  // Helper method to automatically attach the event listener to all the expandables on page load
  var initExpandables = function initExpandables() {
    var selector =
      arguments.length > 0 && arguments[0] !== undefined
        ? arguments[0]
        : '[aria-controls][aria-expanded]';
    var context =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;

    var nodesArray = Array.prototype.slice.call(
      context.querySelectorAll(selector)
    );

    nodesArray.forEach(function(node) {
      return node.addEventListener('click', function(e) {
        toggleExpandable(node, { context: context });
        e.preventDefault();
      });
    });
  };

  /**
   * File uploads related behaviors.
   */

  /**
   * @param {object} options Object containing configuration overrides
   */
  var fileUploads = function fileUploads() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector =
        _ref$selector === undefined ? '.ecl-file-upload' : _ref$selector,
      _ref$inputSelector = _ref.inputSelector,
      inputSelector =
        _ref$inputSelector === undefined
          ? '.ecl-file-upload__input'
          : _ref$inputSelector,
      _ref$valueSelector = _ref.valueSelector,
      valueSelector =
        _ref$valueSelector === undefined
          ? '.ecl-file-upload__value'
          : _ref$valueSelector,
      _ref$browseSelector = _ref.browseSelector,
      browseSelector =
        _ref$browseSelector === undefined
          ? '.ecl-file-upload__browse'
          : _ref$browseSelector;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    // SETUP
    // set file upload element NodeLists
    var fileUploadContainers = queryAll(selector);

    // ACTIONS
    function updateFileName(element, files) {
      if (files.length === 0) return;

      var filename = '';

      for (var i = 0; i < files.length; i += 1) {
        var file = files[i];
        if ('name' in file) {
          if (i > 0) {
            filename += ', ';
          }
          filename += file.name;
        }
      }

      // Show the selected filename in the field.
      var messageElement = element;
      messageElement.innerHTML = filename;
    }

    // EVENTS
    function eventValueChange(e) {
      if ('files' in e.target) {
        var fileUploadElements = queryAll(valueSelector, e.target.parentNode);

        fileUploadElements.forEach(function(fileUploadElement) {
          updateFileName(fileUploadElement, e.target.files);
        });
      }
    }

    function eventBrowseKeydown(e) {
      // collect header targets, and their prev/next
      var isModifierKey = e.metaKey || e.altKey;

      var inputElements = queryAll(inputSelector, e.target.parentNode);

      inputElements.forEach(function(inputElement) {
        // don't catch key events when ⌘ or Alt modifier is present
        if (isModifierKey) return;

        // catch enter/space, left/right and up/down arrow key events
        // if new panel show it, if next/prev move focus
        switch (e.keyCode) {
          case 13:
          case 32:
            e.preventDefault();
            inputElement.click();
            break;
          default:
            break;
        }
      });
    }

    // BIND EVENTS
    function bindFileUploadEvents(fileUploadContainer) {
      // bind all file upload change events
      var fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
      fileUploadInputs.forEach(function(fileUploadInput) {
        fileUploadInput.addEventListener('change', eventValueChange);
      });

      // bind all file upload keydown events
      var fileUploadBrowses = queryAll(browseSelector, fileUploadContainer);
      fileUploadBrowses.forEach(function(fileUploadBrowse) {
        fileUploadBrowse.addEventListener('keydown', eventBrowseKeydown);
      });
    }

    // UNBIND EVENTS
    function unbindFileUploadEvents(fileUploadContainer) {
      var fileUploadInputs = queryAll(inputSelector, fileUploadContainer);
      // unbind all file upload change events
      fileUploadInputs.forEach(function(fileUploadInput) {
        fileUploadInput.removeEventListener('change', eventValueChange);
      });

      var fileUploadBrowses = queryAll(browseSelector, fileUploadContainer);
      // bind all file upload keydown events
      fileUploadBrowses.forEach(function(fileUploadBrowse) {
        fileUploadBrowse.removeEventListener('keydown', eventBrowseKeydown);
      });
    }

    // DESTROY
    function destroy() {
      fileUploadContainers.forEach(function(fileUploadContainer) {
        unbindFileUploadEvents(fileUploadContainer);
      });
    }

    // INIT
    function init() {
      if (fileUploadContainers.length) {
        fileUploadContainers.forEach(function(fileUploadContainer) {
          bindFileUploadEvents(fileUploadContainer);
        });
      }
    }

    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  var eclLangSelectPages = function eclLangSelectPages() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector =
        _ref$selector === undefined ? '.ecl-lang-select-page' : _ref$selector,
      _ref$toggleClass = _ref.toggleClass,
      toggleClass =
        _ref$toggleClass === undefined
          ? 'ecl-lang-select-page--dropdown'
          : _ref$toggleClass,
      _ref$listSelector = _ref.listSelector,
      listSelector =
        _ref$listSelector === undefined
          ? '.ecl-lang-select-page__list'
          : _ref$listSelector,
      _ref$dropdownSelector = _ref.dropdownSelector,
      dropdownSelector =
        _ref$dropdownSelector === undefined
          ? '.ecl-lang-select-page__dropdown'
          : _ref$dropdownSelector,
      _ref$dropdownOnChange = _ref.dropdownOnChange,
      dropdownOnChange =
        _ref$dropdownOnChange === undefined ? undefined : _ref$dropdownOnChange;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    var langSelectPagesContainers = queryAll(selector);

    function toggle(lsp) {
      if (!lsp) return null;

      var list = queryAll(listSelector, lsp)[0];

      if (!lsp.classList.contains(toggleClass)) {
        if (list && list.offsetLeft + list.offsetWidth > lsp.offsetWidth) {
          lsp.classList.add(toggleClass);
        }
      } else {
        var dropdown = queryAll(dropdownSelector, lsp)[0];
        if (dropdown.offsetLeft + list.offsetWidth < lsp.offsetWidth) {
          lsp.classList.remove(toggleClass);
        }
      }

      return true;
    }

    function init() {
      // On load
      langSelectPagesContainers.forEach(function(lsp) {
        toggle(lsp);

        if (dropdownOnChange) {
          var dropdown = queryAll(dropdownSelector, lsp)[0];

          if (dropdown) {
            dropdown.addEventListener('change', dropdownOnChange);
          }
        }
      });

      window.addEventListener(
        'resize',
        lodash_debounce(
          function() {
            langSelectPagesContainers.forEach(toggle);
          },
          100,
          { maxWait: 300 }
        )
      );
    }

    return init();
  };

  /*
   * Messages behavior
   */

  // Dismiss a selected message.
  function dismissMessage(message) {
    if (message && message.parentNode !== null) {
      message.parentNode.removeChild(message);
    }
  }

  // Helper method to automatically attach the event listener to all the messages on page load
  function initMessages() {
    var selectorClass = 'ecl-message__dismiss';

    var messages = Array.prototype.slice.call(
      document.getElementsByClassName(selectorClass)
    );

    messages.forEach(function(message) {
      return message.addEventListener('click', function() {
        return dismissMessage(message.parentElement);
      });
    });
  }

  /*
   * Messages behavior
   */

  /**
    stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
    @version v3.2.3
    @link https://github.com/dollarshaveclub/stickybits#readme
    @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
    @license MIT
  **/
  /*
    STICKYBITS 💉
    --------
    > a lightweight alternative to `position: sticky` polyfills 🍬
    --------
    - each method is documented above it our view the readme
    - Stickybits does not manage polymorphic functionality (position like properties)
    * polymorphic functionality: (in the context of describing Stickybits)
      means making things like `position: sticky` be loosely supported with position fixed.
      It also means that features like `useStickyClasses` takes on styles like `position: fixed`.
    --------
    defaults 🔌
    --------
    - version = `package.json` version
    - userAgent = viewer browser agent
    - target = DOM element selector
    - noStyles = boolean
    - offset = number
    - parentClass = 'string'
    - scrollEl = window || DOM element selector
    - stickyClass = 'string'
    - stuckClass = 'string'
    - useStickyClasses = boolean
    - verticalPosition = 'string'
    --------
    props🔌
    --------
    - p = props {object}
    --------
    instance note
    --------
    - stickybits parent methods return this
    - stickybits instance methods return an instance item
    --------
    nomenclature
    --------
    - target => el => e
    - props => o || p
    - instance => item => it
    --------
    methods
    --------
    - .definePosition = defines sticky or fixed
    - .addInstance = an array of objects for each Stickybits Target
    - .getClosestParent = gets the parent for non-window scroll
    - .computeScrollOffsets = computes scroll position
    - .toggleClasses = older browser toggler
    - .manageState = manages sticky state
    - .removeClass = older browser support class remover
    - .removeInstance = removes an instance
    - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
  */
  function Stickybits(target, obj) {
    var o = typeof obj !== 'undefined' ? obj : {};
    this.version = '3.2.3';
    this.userAgent =
      window.navigator.userAgent || 'no `userAgent` provided by the browser';
    this.props = {
      customStickyChangeNumber: o.customStickyChangeNumber || null,
      noStyles: o.noStyles || false,
      stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
      parentClass: o.parentClass || 'js-stickybit-parent',
      scrollEl: document.querySelector(o.scrollEl) || window,
      stickyClass: o.stickyClass || 'js-is-sticky',
      stuckClass: o.stuckClass || 'js-is-stuck',
      stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
      useStickyClasses: o.useStickyClasses || false,
      verticalPosition: o.verticalPosition || 'top',
    };
    var p = this.props;
    /*
      define positionVal
      ----
      -  uses a computed (`.definePosition()`)
      -  defined the position
    */

    p.positionVal = this.definePosition() || 'fixed';
    var vp = p.verticalPosition;
    var ns = p.noStyles;
    var pv = p.positionVal;
    this.els =
      typeof target === 'string' ? document.querySelectorAll(target) : target;
    if (!('length' in this.els)) this.els = [this.els];
    this.instances = [];

    for (var i = 0; i < this.els.length; i += 1) {
      var el = this.els[i];
      var styles = el.style; // set vertical position

      styles[vp] = vp === 'top' && !ns ? p.stickyBitStickyOffset + 'px' : '';
      styles.position = pv !== 'fixed' ? pv : '';

      if (pv === 'fixed' || p.useStickyClasses) {
        var instance = this.addInstance(el, p); // instances are an array of objects

        this.instances.push(instance);
      }
    }

    return this;
  }
  /*
    setStickyPosition ✔️
    --------
    —  most basic thing stickybits does
    => checks to see if position sticky is supported
    => defined the position to be used
    => stickybits works accordingly
  */

  Stickybits.prototype.definePosition = function() {
    var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
    var test = document.head.style;

    for (var i = 0; i < prefix.length; i += 1) {
      test.position = prefix[i] + 'sticky';
    }

    var stickyProp = test.position ? test.position : 'fixed';
    test.position = '';
    return stickyProp;
  };
  /*
    addInstance ✔️
    --------
    — manages instances of items
    - takes in an el and props
    - returns an item object
    ---
    - target = el
    - o = {object} = props
      - scrollEl = 'string'
      - verticalPosition = number
      - off = boolean
      - parentClass = 'string'
      - stickyClass = 'string'
      - stuckClass = 'string'
    ---
    - defined later
      - parent = dom element
      - state = 'string'
      - offset = number
      - stickyStart = number
      - stickyStop = number
    - returns an instance object
  */

  Stickybits.prototype.addInstance = function addInstance(el, props) {
    var _this = this;

    var item = {
      el: el,
      parent: el.parentNode,
      props: props,
    };
    this.isWin = this.props.scrollEl === window;
    var se = this.isWin
      ? window
      : this.getClosestParent(item.el, item.props.scrollEl);
    this.computeScrollOffsets(item);
    item.parent.className += ' ' + props.parentClass;
    item.state = 'default';

    item.stateContainer = function() {
      return _this.manageState(item);
    };

    se.addEventListener('scroll', item.stateContainer);
    return item;
  };
  /*
    --------
    getParent 👨‍
    --------
    - a helper function that gets the target element's parent selected el
    - only used for non `window` scroll elements
    - supports older browsers
  */

  Stickybits.prototype.getClosestParent = function(el, match) {
    // p = parent element
    var p = match;
    var e = el;
    if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent

    while (e.parentElement !== p) {
      e = e.parentElement;
    } // return parent element

    return p;
  };
  /*
    computeScrollOffsets 📊
    ---
    computeScrollOffsets for Stickybits
    - defines
      - offset
      - start
      - stop
  */

  Stickybits.prototype.computeScrollOffsets = function computeScrollOffsets(
    item
  ) {
    var it = item;
    var p = it.props;
    var el = it.el;
    var parent = it.parent;
    var isCustom = !this.isWin && p.positionVal === 'fixed';
    var isBottom = p.verticalPosition !== 'bottom';
    var scrollElOffset = isCustom ? p.scrollEl.getBoundingClientRect().top : 0;
    var stickyStart = isCustom
      ? parent.getBoundingClientRect().top - scrollElOffset
      : parent.getBoundingClientRect().top;
    var stickyChangeOffset =
      p.customStickyChangeNumber !== null
        ? p.customStickyChangeNumber
        : el.offsetHeight;
    it.offset = scrollElOffset + p.stickyBitStickyOffset;
    it.stickyStart = isBottom ? stickyStart - it.offset : 0;
    it.stickyChange = it.stickyStart + stickyChangeOffset;
    it.stickyStop = isBottom
      ? stickyStart + parent.offsetHeight - (it.el.offsetHeight + it.offset)
      : stickyStart + parent.offsetHeight;
    return it;
  };
  /*
    toggleClasses ⚖️
    ---
    toggles classes (for older browser support)
    r = removed class
    a = added class
  */

  Stickybits.prototype.toggleClasses = function(el, r, a) {
    var e = el;
    var cArray = e.className.split(' ');
    if (a && cArray.indexOf(a) === -1) cArray.push(a);
    var rItem = cArray.indexOf(r);
    if (rItem !== -1) cArray.splice(rItem, 1);
    e.className = cArray.join(' ');
  };
  /*
    manageState 📝
    ---
    - defines the state
      - normal
      - sticky
      - stuck
  */

  Stickybits.prototype.manageState = function manageState(item) {
    // cache object
    var it = item;
    var e = it.el;
    var p = it.props;
    var state = it.state;
    var start = it.stickyStart;
    var change = it.stickyChange;
    var stop = it.stickyStop;
    var stl = e.style; // cache props

    var ns = p.noStyles;
    var pv = p.positionVal;
    var se = p.scrollEl;
    var sticky = p.stickyClass;
    var stickyChange = p.stickyChangeClass;
    var stuck = p.stuckClass;
    var vp = p.verticalPosition;
    /*
      requestAnimationFrame
      ---
      - use rAF
      - or stub rAF
    */

    var rAFStub = function rAFDummy(f) {
      f();
    };

    var rAF = !this.isWin
      ? rAFStub
      : window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        rAFStub;
    /*
      define scroll vars
      ---
      - scroll
      - notSticky
      - isSticky
      - isStuck
    */

    var tC = this.toggleClasses;
    var scroll = this.isWin
      ? window.scrollY || window.pageYOffset
      : se.scrollTop;
    var notSticky =
      scroll > start &&
      scroll < stop &&
      (state === 'default' || state === 'stuck');
    var isSticky = scroll <= start && state === 'sticky';
    var isStuck = scroll >= stop && state === 'sticky';
    /*
      Unnamed arrow functions within this block
      ---
      - help wanted or discussion
      - view test.stickybits.js
        - `stickybits .manageState  `position: fixed` interface` for more awareness 👀
    */

    if (notSticky) {
      it.state = 'sticky';
      rAF(function() {
        tC(e, stuck, sticky);
        stl.position = pv;
        if (ns) return;
        stl.bottom = '';
        stl[vp] = p.stickyBitStickyOffset + 'px';
      });
    } else if (isSticky) {
      it.state = 'default';
      rAF(function() {
        tC(e, sticky);
        if (pv === 'fixed') stl.position = '';
      });
    } else if (isStuck) {
      it.state = 'stuck';
      rAF(function() {
        tC(e, sticky, stuck);
        if (pv !== 'fixed' || ns) return;
        stl.top = '';
        stl.bottom = '0';
        stl.position = 'absolute';
      });
    }

    var isStickyChange = scroll >= change && scroll <= stop;
    var isNotStickyChange = scroll < change || scroll > stop;
    var stub = 'stub'; // a stub css class to remove

    if (isNotStickyChange) {
      rAF(function() {
        tC(e, stickyChange);
      });
    } else if (isStickyChange) {
      rAF(function() {
        tC(e, stub, stickyChange);
      });
    }

    return it;
  };
  /*
    removes an instance 👋
    --------
    - cleanup instance
  */

  Stickybits.prototype.removeInstance = function removeInstance(instance) {
    var e = instance.el;
    var p = instance.props;
    var tC = this.toggleClasses;
    e.style.position = '';
    e.style[p.verticalPosition] = '';
    tC(e, p.stickyClass);
    tC(e, p.stuckClass);
    tC(e.parentNode, p.parentClass);
  };
  /*
    cleanup 🛁
    --------
    - cleans up each instance
    - clears instance
  */

  Stickybits.prototype.cleanup = function cleanup() {
    for (var i = 0; i < this.instances.length; i += 1) {
      var instance = this.instances[i];
      instance.props.scrollEl.removeEventListener(
        'scroll',
        instance.stateContainer
      );
      this.removeInstance(instance);
    }

    this.manageState = false;
    this.instances = [];
  };
  /*
    export
    --------
    exports StickBits to be used 🏁
  */

  function stickybits(target, o) {
    return new Stickybits(target, o);
  }

  var gumshoe_min = createCommonjsModule(function(module, exports) {
    /*! gumshoejs v3.5.0 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
    !(function(e, t) {
      'function' == typeof undefined && undefined.amd
        ? undefined([], t(e))
        : (module.exports = t(e));
    })(
      'undefined' != typeof commonjsGlobal
        ? commonjsGlobal
        : commonjsGlobal.window || commonjsGlobal.global,
      function(e) {
        var t,
          n,
          o,
          r,
          a,
          c,
          i,
          l = {},
          s =
            'querySelector' in document &&
            'addEventListener' in e &&
            'classList' in document.createElement('_'),
          u = [],
          f = {
            selector: '[data-gumshoe] a',
            selectorHeader: '[data-gumshoe-header]',
            container: e,
            offset: 0,
            activeClass: 'active',
            scrollDelay: !1,
            callback: function callback() {},
          },
          d = function d(e, t, n) {
            if ('[object Object]' === Object.prototype.toString.call(e))
              for (var o in e) {
                Object.prototype.hasOwnProperty.call(e, o) &&
                  t.call(n, e[o], o, e);
              }
            else
              for (var r = 0, a = e.length; r < a; r++) {
                t.call(n, e[r], r, e);
              }
          },
          v = function v() {
            var e = {},
              t = !1,
              n = 0,
              o = arguments.length;
            '[object Boolean]' ===
              Object.prototype.toString.call(arguments[0]) &&
              ((t = arguments[0]), n++);
            for (; n < o; n++) {
              var r = arguments[n];
              !(function(n) {
                for (var o in n) {
                  Object.prototype.hasOwnProperty.call(n, o) &&
                    (t &&
                    '[object Object]' === Object.prototype.toString.call(n[o])
                      ? (e[o] = v(!0, e[o], n[o]))
                      : (e[o] = n[o]));
                }
              })(r);
            }
            return e;
          },
          m = function m(e) {
            return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
          },
          g = function g() {
            return Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight,
              document.body.offsetHeight,
              document.documentElement.offsetHeight,
              document.body.clientHeight,
              document.documentElement.clientHeight
            );
          },
          h = function h(e) {
            var n = 0;
            if (e.offsetParent)
              do {
                (n += e.offsetTop), (e = e.offsetParent);
              } while (e);
            else n = e.offsetTop;
            return (n = n - a - t.offset), n >= 0 ? n : 0;
          },
          p = function p(t) {
            var n = t.getBoundingClientRect();
            return (
              n.top >= 0 &&
              n.left >= 0 &&
              n.bottom <=
                (e.innerHeight || document.documentElement.clientHeight) &&
              n.right <= (e.innerWidth || document.documentElement.clientWidth)
            );
          },
          y = function y() {
            u.sort(function(e, t) {
              return e.distance > t.distance
                ? -1
                : e.distance < t.distance
                  ? 1
                  : 0;
            });
          };
        l.setDistances = function() {
          (o = g()),
            (a = r ? m(r) + h(r) : 0),
            d(u, function(e) {
              e.distance = h(e.target);
            }),
            y();
        };
        var b = function b() {
            var e = document.querySelectorAll(t.selector);
            d(e, function(e) {
              if (e.hash) {
                var t = document.querySelector(e.hash);
                t &&
                  u.push({
                    nav: e,
                    target: t,
                    parent:
                      'li' === e.parentNode.tagName.toLowerCase()
                        ? e.parentNode
                        : null,
                    distance: 0,
                  });
              }
            });
          },
          H = function H() {
            c &&
              (c.nav.classList.remove(t.activeClass),
              c.parent && c.parent.classList.remove(t.activeClass));
          },
          C = function C(e) {
            H(),
              e.nav.classList.add(t.activeClass),
              e.parent && e.parent.classList.add(t.activeClass),
              t.callback(e),
              (c = { nav: e.nav, parent: e.parent });
          };
        l.getCurrentNav = function() {
          var n = e.pageYOffset;
          if (e.innerHeight + n >= o && p(u[0].target)) return C(u[0]), u[0];
          for (var r = 0, a = u.length; r < a; r++) {
            var c = u[r];
            if (c.distance <= n) return C(c), c;
          }
          H(), t.callback();
        };
        var L = function L() {
          d(u, function(e) {
            e.nav.classList.contains(t.activeClass) &&
              (c = { nav: e.nav, parent: e.parent });
          });
        };
        l.destroy = function() {
          t &&
            (t.container.removeEventListener('resize', j, !1),
            t.container.removeEventListener('scroll', j, !1),
            (u = []),
            (t = null),
            (n = null),
            (o = null),
            (r = null),
            (a = null),
            (c = null),
            (i = null));
        };
        var E = function E(e) {
            window.clearTimeout(n),
              (n = setTimeout(function() {
                l.setDistances(), l.getCurrentNav();
              }, 66));
          },
          j = function j(e) {
            n ||
              (n = setTimeout(function() {
                (n = null),
                  'scroll' === e.type && l.getCurrentNav(),
                  'resize' === e.type && (l.setDistances(), l.getCurrentNav());
              }, 66));
          };
        return (
          (l.init = function(e) {
            s &&
              (l.destroy(),
              (t = v(f, e || {})),
              (r = document.querySelector(t.selectorHeader)),
              b(),
              0 !== u.length &&
                (L(),
                l.setDistances(),
                l.getCurrentNav(),
                t.container.addEventListener('resize', j, !1),
                t.scrollDelay
                  ? t.container.addEventListener('scroll', E, !1)
                  : t.container.addEventListener('scroll', j, !1)));
          }),
          l
        );
      }
    );
  });

  /* eslint-disable no-param-reassign */

  var toggleExpandable$1 = function toggleExpandable(toggleElement) {
    var _ref =
        arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$context = _ref.context,
      context = _ref$context === undefined ? document : _ref$context,
      _ref$forceClose = _ref.forceClose,
      forceClose = _ref$forceClose === undefined ? false : _ref$forceClose,
      _ref$closeSiblings = _ref.closeSiblings,
      closeSiblings =
        _ref$closeSiblings === undefined ? false : _ref$closeSiblings,
      _ref$siblingsSelector = _ref.siblingsSelector,
      siblingsSelector =
        _ref$siblingsSelector === undefined
          ? '[aria-controls][aria-expanded]'
          : _ref$siblingsSelector;

    if (!toggleElement) {
      return;
    }

    // Get target element
    var target = document.getElementById(
      toggleElement.getAttribute('aria-controls')
    );

    // Exit if no target found
    if (!target) {
      return;
    }

    // Get current status
    var isExpanded =
      forceClose === true ||
      toggleElement.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    toggleElement.setAttribute('aria-expanded', !isExpanded);
    target.setAttribute('aria-hidden', isExpanded);

    // Toggle label if possible
    if (!isExpanded && toggleElement.hasAttribute('data-label-expanded')) {
      toggleElement.innerHTML = toggleElement.getAttribute(
        'data-label-expanded'
      );
    } else if (
      isExpanded &&
      toggleElement.hasAttribute('data-label-collapsed')
    ) {
      toggleElement.innerHTML = toggleElement.getAttribute(
        'data-label-collapsed'
      );
    }

    // Close siblings if requested
    if (closeSiblings === true) {
      var siblingsArray = Array.prototype.slice
        .call(context.querySelectorAll(siblingsSelector))
        .filter(function(sibling) {
          return sibling !== toggleElement;
        });

      siblingsArray.forEach(function(sibling) {
        toggleExpandable(sibling, {
          context: context,
          forceClose: true,
        });
      });
    }
  };

  /**
   * Navigation inpage related behaviors.
   */

  /**
   * @param {object} options Object containing configuration overrides
   */
  var navigationInpages = function navigationInpages() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$stickySelector = _ref.stickySelector,
      stickySelector =
        _ref$stickySelector === undefined
          ? '.ecl-inpage-navigation'
          : _ref$stickySelector,
      _ref$stickyOffset = _ref.stickyOffset,
      stickyOffset = _ref$stickyOffset === undefined ? 0 : _ref$stickyOffset,
      _ref$spySelector = _ref.spySelector,
      spySelector =
        _ref$spySelector === undefined
          ? '.ecl-inpage-navigation__link'
          : _ref$spySelector,
      _ref$spyClass = _ref.spyClass,
      spyClass =
        _ref$spyClass === undefined
          ? 'ecl-inpage-navigation__link--is-active'
          : _ref$spyClass,
      _ref$spyTrigger = _ref.spyTrigger,
      spyTrigger =
        _ref$spyTrigger === undefined
          ? '.ecl-inpage-navigation__trigger'
          : _ref$spyTrigger,
      _ref$spyOffset = _ref.spyOffset,
      spyOffset = _ref$spyOffset === undefined ? 20 : _ref$spyOffset,
      _ref$toggleSelector = _ref.toggleSelector,
      toggleSelector =
        _ref$toggleSelector === undefined
          ? '.ecl-inpage-navigation__trigger'
          : _ref$toggleSelector,
      _ref$linksSelector = _ref.linksSelector,
      linksSelector =
        _ref$linksSelector === undefined
          ? '.ecl-inpage-navigation__link'
          : _ref$linksSelector;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    var stickyInstance = void 0;

    // ACTIONS
    function initSticky() {
      stickyInstance = stickybits(stickySelector, {
        stickyBitStickyOffset: stickyOffset,
        useStickyClasses: true,
        parentClass: 'ecl-inpage-navigation__parent',
        stickyClass: 'ecl-inpage-navigation--sticky',
        stuckClass: 'ecl-inpage-navigation--stuck',
        stickyChangeClass: 'ecl-inpage-navigation--changed',
      });
    }

    function destroySticky() {
      if (stickyInstance) {
        stickyInstance.cleanup();
      }
    }

    function initScrollSpy() {
      gumshoe_min.init({
        selector: spySelector,
        activeClass: spyClass,
        offset: spyOffset,
        callback: function callback(nav) {
          if (!nav) return;
          var navigationTitle = document.querySelector(spyTrigger);
          navigationTitle.innerHTML = nav.nav.innerHTML;
        },
      });
    }

    function destroyScrollSpy() {
      gumshoe_min.destroy();
    }

    // Init
    function init() {
      var inpageNavElement = document.querySelector(stickySelector);
      var toggleElement = inpageNavElement.querySelector(toggleSelector);
      var navLinks = inpageNavElement.querySelectorAll(linksSelector);

      initSticky();
      initScrollSpy();

      toggleElement.addEventListener('click', function(e) {
        toggleExpandable$1(toggleElement, { context: inpageNavElement });
        e.preventDefault();
      });

      navLinks.forEach(function(link) {
        return link.addEventListener('click', function() {
          toggleExpandable$1(toggleElement, {
            context: inpageNavElement,
            forceClose: true,
          });
        });
      });
    }

    // Destroy
    function destroy() {
      destroyScrollSpy();
      destroySticky();
    }

    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  var onClick = function onClick(node, menu) {
    return function(e) {
      if (node && node.hasAttribute('aria-haspopup')) {
        var hasPopup = node.getAttribute('aria-haspopup');
        if (hasPopup === '' || hasPopup === 'true') {
          e.preventDefault();

          toggleExpandable$1(node, {
            context: menu,
            closeSiblings: true,
          });
        }
      }
    };
  };

  var onKeydown = function onKeydown(node, menu) {
    return function(e) {
      var currentTab = node.parentElement;
      var previousTabItem =
        currentTab.previousElementSibling ||
        currentTab.parentElement.lastElementChild;
      var nextTabItem =
        currentTab.nextElementSibling ||
        currentTab.parentElement.firstElementChild;

      // don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // catch left/right and up/down arrow key events
      // if new next/prev tab available, show it by passing tab anchor to showTab method
      switch (e.keyCode) {
        // ENTER or SPACE
        case 13:
        case 32:
          onClick(e.currentTarget, menu)(e);
          break;
        // ARROWS LEFT and UP
        case 37:
        case 38:
          e.preventDefault();
          previousTabItem.querySelector('a').focus();
          break;
        // ARROWS RIGHT and DOWN
        case 39:
        case 40:
          e.preventDefault();
          nextTabItem.querySelector('a').focus();
          break;
        default:
          break;
      }
    };
  };

  var megamenu = function megamenu() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector =
        _ref$selector === undefined ? '.ecl-navigation-menu' : _ref$selector,
      _ref$toggleSelector = _ref.toggleSelector,
      toggleSelector =
        _ref$toggleSelector === undefined
          ? '.ecl-navigation-menu__toggle'
          : _ref$toggleSelector,
      _ref$listSelector = _ref.listSelector,
      listSelector =
        _ref$listSelector === undefined
          ? '.ecl-navigation-menu__root'
          : _ref$listSelector,
      _ref$linkSelector = _ref.linkSelector,
      linkSelector =
        _ref$linkSelector === undefined
          ? '.ecl-navigation-menu__link'
          : _ref$linkSelector;

    var megamenusArray = queryAll(selector);

    megamenusArray.forEach(function(menu) {
      // Make the toggle expandable
      var toggle = menu.querySelector(toggleSelector);
      if (toggle) {
        toggle.addEventListener('click', function() {
          return toggleExpandable$1(toggle, { context: menu });
        });
      }

      // Get the list of links
      var list = menu.querySelector(listSelector);

      // Get expandables within the list
      var nodesArray = queryAll(linkSelector, list);

      nodesArray.forEach(function(node) {
        node.addEventListener('click', onClick(node, list));
        node.addEventListener('keydown', onKeydown(node, list));
      });
    });
  };

  /**
   * Side navigation related behaviors.
   */

  /**
   * @param {object} options Object containing configuration overrides
   */
  var navigationSide = function navigationSide() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$stickySelector = _ref.stickySelector,
      stickySelector =
        _ref$stickySelector === undefined
          ? '.ecl-side-navigation__toggle'
          : _ref$stickySelector;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    // ACTIONS
    function initSticky() {
      // init sticky menu
      // eslint-disable-next-line no-undef
      stickybits(stickySelector, { useStickyClasses: true });
    }

    function scrollToTop() {
      var toggle = document.getElementsByClassName(
        stickySelector.substring(1)
      )[0];

      if (toggle) {
        toggle.addEventListener('click', function(e) {
          if (e.target.getAttribute('aria-expanded') === 'false') {
            e.target.scrollIntoView();
          }
        });
      }
    }

    // INIT
    function init() {
      initSticky();
      scrollToTop();
    }

    init();

    // REVEAL API
    return {
      init: init,
    };
  };

  /**
   * Tables related behaviors.
   */

  /* eslint-disable no-unexpected-multiline */

  function eclTables() {
    var elements =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    var tables =
      elements || document.getElementsByClassName('ecl-table--responsive');
    [].forEach.call(tables, function(table) {
      var headerText = [];
      var textColspan = '';
      var ci = 0;
      var cn = [];

      // The rows in a table body.
      var tableRows = table.querySelectorAll('tbody tr');

      // The headers in a table.
      var headers = table.querySelectorAll('thead tr th');

      // The number of main headers.
      var headFirst =
        table.querySelectorAll('thead tr')[0].querySelectorAll('th').length - 1;

      // Number of cells per row.
      var cellPerRow = table
        .querySelectorAll('tbody tr')[0]
        .querySelectorAll('td').length;

      // Position of the eventual colspan element.
      var colspanIndex = -1;

      // Build the array with all the "labels"
      // Also get position of the eventual colspan element
      for (var i = 0; i < headers.length; i += 1) {
        if (headers[i].getAttribute('colspan')) {
          colspanIndex = i;
        }

        headerText[i] = [];
        headerText[i] = headers[i].textContent;
      }

      // If we have a colspan, we have to prepare the data for it.
      if (colspanIndex !== -1) {
        textColspan = headerText.splice(colspanIndex, 1);
        ci = colspanIndex;
        cn = table.querySelectorAll('th[colspan]')[0].getAttribute('colspan');

        for (var c = 0; c < cn; c += 1) {
          headerText.splice(ci + c, 0, headerText[headFirst + c]);
          headerText.splice(headFirst + 1 + c, 1);
        }
      }

      // For every row, set the attributes we use to make this happen.
      [].forEach.call(tableRows, function(row) {
        for (var j = 0; j < cellPerRow; j += 1) {
          if (headerText[j] === '' || headerText[j] === '\xA0') {
            row
              .querySelectorAll('td')
              [j].setAttribute('class', 'ecl-table__heading');
          } else {
            row
              .querySelectorAll('td')
              [j].setAttribute('data-th', headerText[j]);
          }

          if (colspanIndex !== -1) {
            var cell = row.querySelectorAll('td')[colspanIndex];
            cell.setAttribute('class', 'ecl-table__group-label');
            cell.setAttribute('data-th-group', textColspan);

            for (var _c = 1; _c < cn; _c += 1) {
              row
                .querySelectorAll('td')
                [colspanIndex + _c].setAttribute(
                  'class',
                  'ecl-table__group_element'
                );
            }
          }
        }
      });
    });
  }

  // Heavily inspired by the tab component from https://github.com/frend/frend.co

  /**
   * @param {object} options Object containing configuration overrides
   */
  var tabs = function tabs() {
    var _ref =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$selector = _ref.selector,
      selector = _ref$selector === undefined ? '.ecl-tabs' : _ref$selector,
      _ref$tablistSelector = _ref.tablistSelector,
      tablistSelector =
        _ref$tablistSelector === undefined
          ? '.ecl-tabs__tablist'
          : _ref$tablistSelector,
      _ref$tabpanelSelector = _ref.tabpanelSelector,
      tabpanelSelector =
        _ref$tabpanelSelector === undefined
          ? '.ecl-tabs__tabpanel'
          : _ref$tabpanelSelector,
      _ref$tabelementsSelec = _ref.tabelementsSelector,
      tabelementsSelector =
        _ref$tabelementsSelec === undefined
          ? tablistSelector + ' li'
          : _ref$tabelementsSelec;

    // SUPPORTS
    if (
      !('querySelector' in document) ||
      !('addEventListener' in window) ||
      !document.documentElement.classList
    )
      return null;

    // SETUP
    // set tab element NodeList
    var tabContainers = queryAll(selector);

    // ACTIONS
    function showTab(target) {
      var giveFocus =
        arguments.length > 1 && arguments[1] !== undefined
          ? arguments[1]
          : true;

      var siblingTabs = queryAll(
        tablistSelector + ' li',
        target.parentElement.parentElement
      );
      var siblingTabpanels = queryAll(
        tabpanelSelector,
        target.parentElement.parentElement
      );

      // set inactives
      siblingTabs.forEach(function(tab) {
        tab.setAttribute('tabindex', -1);
        tab.removeAttribute('aria-selected');
      });

      siblingTabpanels.forEach(function(tabpanel) {
        tabpanel.setAttribute('aria-hidden', 'true');
      });

      // set actives and focus
      target.setAttribute('tabindex', 0);
      target.setAttribute('aria-selected', 'true');
      if (giveFocus) target.focus();
      document
        .getElementById(target.getAttribute('aria-controls'))
        .removeAttribute('aria-hidden');
    }

    // EVENTS
    function eventTabClick(e) {
      showTab(e.currentTarget);
      e.preventDefault(); // look into remove id/settimeout/reinstate id as an alternative to preventDefault
    }

    function eventTabKeydown(e) {
      // collect tab targets, and their parents' prev/next (or first/last)
      var currentTab = e.currentTarget;
      var previousTabItem =
        currentTab.previousElementSibling ||
        currentTab.parentElement.lastElementChild;
      var nextTabItem =
        currentTab.nextElementSibling ||
        currentTab.parentElement.firstElementChild;

      // don't catch key events when ⌘ or Alt modifier is present
      if (e.metaKey || e.altKey) return;

      // catch left/right and up/down arrow key events
      // if new next/prev tab available, show it by passing tab anchor to showTab method
      switch (e.keyCode) {
        case 37:
        case 38:
          showTab(previousTabItem);
          e.preventDefault();
          break;
        case 39:
        case 40:
          showTab(nextTabItem);
          e.preventDefault();
          break;
        default:
          break;
      }
    }

    // BINDINGS
    function bindTabsEvents(tabContainer) {
      var tabsElements = queryAll(tabelementsSelector, tabContainer);
      // bind all tab click and keydown events
      tabsElements.forEach(function(tab) {
        tab.addEventListener('click', eventTabClick);
        tab.addEventListener('keydown', eventTabKeydown);
      });
    }

    function unbindTabsEvents(tabContainer) {
      var tabsElements = queryAll(tabelementsSelector, tabContainer);
      // unbind all tab click and keydown events
      tabsElements.forEach(function(tab) {
        tab.removeEventListener('click', eventTabClick);
        tab.removeEventListener('keydown', eventTabKeydown);
      });
    }

    // DESTROY
    function destroy() {
      tabContainers.forEach(unbindTabsEvents);
    }

    // INIT
    function init() {
      tabContainers.forEach(bindTabsEvents);
    }

    // Automatically init
    init();

    // REVEAL API
    return {
      init: init,
      destroy: destroy,
    };
  };

  /**
   * Timeline
   */

  var expandTimeline = function expandTimeline(timeline, button) {
    var _ref =
        arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$classToRemove = _ref.classToRemove,
      classToRemove =
        _ref$classToRemove === undefined
          ? 'ecl-timeline__item--over-limit'
          : _ref$classToRemove,
      _ref$hiddenElementsSe = _ref.hiddenElementsSelector,
      hiddenElementsSelector =
        _ref$hiddenElementsSe === undefined
          ? '.ecl-timeline__item--over-limit'
          : _ref$hiddenElementsSe;

    if (!timeline) {
      return;
    }

    var hiddenElements = Array.prototype.slice.call(
      timeline.querySelectorAll(hiddenElementsSelector)
    );

    // Remove extra class
    hiddenElements.forEach(function(element) {
      element.classList.remove(classToRemove);
    });

    // Remove buttton
    button.parentNode.removeChild(button);
  };

  // Helper method to automatically attach the event listener to all the expandables on page load
  var timelines = function timelines() {
    var _ref2 =
        arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$selector = _ref2.selector,
      selector =
        _ref2$selector === undefined ? '.ecl-timeline' : _ref2$selector,
      _ref2$buttonSelector = _ref2.buttonSelector,
      buttonSelector =
        _ref2$buttonSelector === undefined
          ? '.ecl-timeline__button'
          : _ref2$buttonSelector,
      _ref2$hiddenElementsS = _ref2.hiddenElementsSelector,
      hiddenElementsSelector =
        _ref2$hiddenElementsS === undefined
          ? '.ecl-timeline__item--over-limit'
          : _ref2$hiddenElementsS,
      _ref2$classToRemove = _ref2.classToRemove,
      classToRemove =
        _ref2$classToRemove === undefined
          ? 'ecl-timeline__item--over-limit'
          : _ref2$classToRemove,
      _ref2$context = _ref2.context,
      context = _ref2$context === undefined ? document : _ref2$context;

    var nodesArray = Array.prototype.slice.call(
      context.querySelectorAll(selector)
    );

    nodesArray.forEach(function(node) {
      var button = context.querySelector(buttonSelector);

      if (button) {
        button.addEventListener('click', function() {
          return expandTimeline(node, button, {
            classToRemove: classToRemove,
            hiddenElementsSelector: hiddenElementsSelector,
          });
        });
      }
    });
  };

  /**
   * Timeline
   */

  // Export components

  // Export components

  exports.accordions = accordions;
  exports.carousels = carousels;
  exports.contextualNavs = contextualNavs;
  exports.dropdown = dropdown;
  exports.dialogs = dialogs;
  exports.toggleExpandable = toggleExpandable;
  exports.initExpandables = initExpandables;
  exports.fileUploads = fileUploads;
  exports.eclLangSelectPages = eclLangSelectPages;
  exports.initMessages = initMessages;
  exports.navigationInpages = navigationInpages;
  exports.megamenu = megamenu;
  exports.navigationSide = navigationSide;
  exports.eclTables = eclTables;
  exports.tabs = tabs;
  exports.timelines = timelines;

  return exports;
})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsLWV1LXByZXNldC13ZWJzaXRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtYmFzZS9oZWxwZXJzL2RvbS5qcyIsIi4uLy4uLy4uLy4uL2V1LWNvbXBvbmVudC9ldS1jb21wb25lbnQtYWNjb3JkaW9uL2V1LWNvbXBvbmVudC1hY2NvcmRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9nZW5lcmljLWNvbXBvbmVudC1jYXJvdXNlbC9nZW5lcmljLWNvbXBvbmVudC1jYXJvdXNlbC5qcyIsIi4uLy4uLy4uLy4uL2V1LWNvbXBvbmVudC9ldS1jb21wb25lbnQtY29udGV4dC1uYXYvZXUtY29tcG9uZW50LWNvbnRleHQtbmF2LmpzIiwiLi4vLi4vLi4vLi4vZXUtY29tcG9uZW50L2V1LWNvbXBvbmVudC1kcm9wZG93bi9ldS1jb21wb25lbnQtZHJvcGRvd24uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtY29tcG9uZW50LWRpYWxvZy9nZW5lcmljLWNvbXBvbmVudC1kaWFsb2cuanMiLCIuLi8uLi8uLi8uLi9ldS1jb21wb25lbnQvZXUtY29tcG9uZW50LWV4cGFuZGFibGUvZXUtY29tcG9uZW50LWV4cGFuZGFibGUuanMiLCIuLi8uLi8uLi8uLi9ldS1jb21wb25lbnQvZXUtY29tcG9uZW50LWZvcm0vZXUtY29tcG9uZW50LWZvcm0tZmlsZS11cGxvYWQvZXUtY29tcG9uZW50LWZvcm0tZmlsZS11cGxvYWQuanMiLCIuLi8uLi8uLi8uLi9ldS1jb21wb25lbnQvZXUtY29tcG9uZW50LWxhbmctc2VsZWN0LXBhZ2UvZXUtY29tcG9uZW50LWxhbmctc2VsZWN0LXBhZ2UuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtY29tcG9uZW50LW1lc3NhZ2UvZ2VuZXJpYy1jb21wb25lbnQtbWVzc2FnZS5qcyIsIi4uLy4uLy4uLy4uL2V1LWNvbXBvbmVudC9ldS1jb21wb25lbnQtbWVzc2FnZS9ldS1jb21wb25lbnQtbWVzc2FnZS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdGlja3liaXRzL2Rpc3Qvc3RpY2t5Yml0cy5lcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndW1zaG9lanMvZGlzdC9qcy9ndW1zaG9lLm1pbi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtZXhwYW5kYWJsZS9nZW5lcmljLWNvbXBvbmVudC1leHBhbmRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9nZW5lcmljLWNvbXBvbmVudC1pbnBhZ2UtbmF2aWdhdGlvbi9nZW5lcmljLWNvbXBvbmVudC1pbnBhZ2UtbmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtbmF2aWdhdGlvbi1tZW51L2dlbmVyaWMtY29tcG9uZW50LW5hdmlnYXRpb24tbWVudS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtc2lkZS1uYXZpZ2F0aW9uL2dlbmVyaWMtY29tcG9uZW50LXNpZGUtbmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uL2V1LWNvbXBvbmVudC9ldS1jb21wb25lbnQtdGFibGUvZXUtY29tcG9uZW50LXRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vZXUtY29tcG9uZW50L2V1LWNvbXBvbmVudC10YWIvZXUtY29tcG9uZW50LXRhYi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtdGltZWxpbmUvZ2VuZXJpYy1jb21wb25lbnQtdGltZWxpbmUuanMiLCIuLi8uLi8uLi8uLi9ldS1jb21wb25lbnQvZXUtY29tcG9uZW50LXRpbWVsaW5lL2V1LWNvbXBvbmVudC10aW1lbGluZS5qcyIsIi4uLy4uLy4uL2V1LXByZXNldC1mdWxsL2V1LXByZXNldC1mdWxsLmpzIiwiLi4vLi4vZXUtcHJlc2V0LXdlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgaGVscGVyXG5leHBvcnQgY29uc3QgcXVlcnlBbGwgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT5cbiAgW10uc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvLyBIZWF2aWx5IGluc3BpcmVkIGJ5IHRoZSBhY2NvcmRpb24gY29tcG9uZW50IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZyZW5kL2ZyZW5kLmNvXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9ldS1iYXNlL2hlbHBlcnMvZG9tJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgYWNjb3JkaW9ucyA9ICh7XG4gIHNlbGVjdG9yOiBzZWxlY3RvciA9ICcuZWNsLWFjY29yZGlvbicsXG4gIGhlYWRlclNlbGVjdG9yOiBoZWFkZXJTZWxlY3RvciA9ICcuZWNsLWFjY29yZGlvbl9faGVhZGVyJyxcbn0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoXG4gICAgISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8XG4gICAgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0XG4gIClcbiAgICByZXR1cm4gbnVsbDtcblxuICAvLyBTRVRVUFxuICAvLyBzZXQgYWNjb3JkaW9uIGVsZW1lbnQgTm9kZUxpc3RzXG4gIGNvbnN0IGFjY29yZGlvbkNvbnRhaW5lcnMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiBoaWRlUGFuZWwodGFyZ2V0KSB7XG4gICAgLy8gZ2V0IHBhbmVsXG4gICAgY29uc3QgYWN0aXZlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICAgICk7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAvLyB0b2dnbGUgYXJpYS1oaWRkZW5cbiAgICBhY3RpdmVQYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQYW5lbCh0YXJnZXQpIHtcbiAgICAvLyBnZXQgcGFuZWxcbiAgICBjb25zdCBhY3RpdmVQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpXG4gICAgKTtcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIG9uIGhlYWRlclxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cbiAgICAvLyB0b2dnbGUgYXJpYS1oaWRkZW4gYW5kIHNldCBoZWlnaHQgb24gcGFuZWxcbiAgICBhY3RpdmVQYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQYW5lbCh0YXJnZXQpIHtcbiAgICAvLyBjbG9zZSB0YXJnZXQgcGFuZWwgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgIGhpZGVQYW5lbCh0YXJnZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3dQYW5lbCh0YXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2l2ZUhlYWRlckZvY3VzKGhlYWRlclNldCwgaSkge1xuICAgIC8vIHNldCBhY3RpdmUgZm9jdXNcbiAgICBoZWFkZXJTZXRbaV0uZm9jdXMoKTtcbiAgfVxuXG4gIC8vIEVWRU5UU1xuICBmdW5jdGlvbiBldmVudEhlYWRlckNsaWNrKGUpIHtcbiAgICB0b2dnbGVQYW5lbChlLmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRIZWFkZXJLZXlkb3duKGUpIHtcbiAgICAvLyBjb2xsZWN0IGhlYWRlciB0YXJnZXRzLCBhbmQgdGhlaXIgcHJldi9uZXh0XG4gICAgY29uc3QgY3VycmVudEhlYWRlciA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBpc01vZGlmaWVyS2V5ID0gZS5tZXRhS2V5IHx8IGUuYWx0S2V5O1xuICAgIC8vIGdldCBjb250ZXh0IG9mIGFjY29yZGlvbiBjb250YWluZXIgYW5kIGl0cyBjaGlsZHJlblxuICAgIGNvbnN0IHRoaXNDb250YWluZXIgPSBjdXJyZW50SGVhZGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGVzZUhlYWRlcnMgPSBxdWVyeUFsbChoZWFkZXJTZWxlY3RvciwgdGhpc0NvbnRhaW5lcik7XG4gICAgY29uc3QgY3VycmVudEhlYWRlckluZGV4ID0gW10uaW5kZXhPZi5jYWxsKHRoZXNlSGVhZGVycywgY3VycmVudEhlYWRlcik7XG5cbiAgICAvLyBkb24ndCBjYXRjaCBrZXkgZXZlbnRzIHdoZW4g4oyYIG9yIEFsdCBtb2RpZmllciBpcyBwcmVzZW50XG4gICAgaWYgKGlzTW9kaWZpZXJLZXkpIHJldHVybjtcblxuICAgIC8vIGNhdGNoIGVudGVyL3NwYWNlLCBsZWZ0L3JpZ2h0IGFuZCB1cC9kb3duIGFycm93IGtleSBldmVudHNcbiAgICAvLyBpZiBuZXcgcGFuZWwgc2hvdyBpdCwgaWYgbmV4dC9wcmV2IG1vdmUgZm9jdXNcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMzI6XG4gICAgICAgIHRvZ2dsZVBhbmVsKGN1cnJlbnRIZWFkZXIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNIZWFkZXJJbmRleCA9XG4gICAgICAgICAgY3VycmVudEhlYWRlckluZGV4ID09PSAwXG4gICAgICAgICAgICA/IHRoZXNlSGVhZGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICA6IGN1cnJlbnRIZWFkZXJJbmRleCAtIDE7XG4gICAgICAgIGdpdmVIZWFkZXJGb2N1cyh0aGVzZUhlYWRlcnMsIHByZXZpb3VzSGVhZGVySW5kZXgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDA6IHtcbiAgICAgICAgY29uc3QgbmV4dEhlYWRlckluZGV4ID1cbiAgICAgICAgICBjdXJyZW50SGVhZGVySW5kZXggPCB0aGVzZUhlYWRlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyBjdXJyZW50SGVhZGVySW5kZXggKyAxXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGdpdmVIZWFkZXJGb2N1cyh0aGVzZUhlYWRlcnMsIG5leHRIZWFkZXJJbmRleCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBCSU5EIEVWRU5UU1xuICBmdW5jdGlvbiBiaW5kQWNjb3JkaW9uRXZlbnRzKGFjY29yZGlvbkNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFjY29yZGlvbkhlYWRlcnMgPSBxdWVyeUFsbChoZWFkZXJTZWxlY3RvciwgYWNjb3JkaW9uQ29udGFpbmVyKTtcbiAgICAvLyBiaW5kIGFsbCBhY2NvcmRpb24gaGVhZGVyIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIGFjY29yZGlvbkhlYWRlcnMuZm9yRWFjaChhY2NvcmRpb25IZWFkZXIgPT4ge1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIZWFkZXJDbGljayk7XG4gICAgICBhY2NvcmRpb25IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50SGVhZGVyS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZEFjY29yZGlvbkV2ZW50cyhhY2NvcmRpb25Db250YWluZXIpIHtcbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gcXVlcnlBbGwoaGVhZGVyU2VsZWN0b3IsIGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgLy8gdW5iaW5kIGFsbCBhY2NvcmRpb24gaGVhZGVyIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIGFjY29yZGlvbkhlYWRlcnMuZm9yRWFjaChhY2NvcmRpb25IZWFkZXIgPT4ge1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIZWFkZXJDbGljayk7XG4gICAgICBhY2NvcmRpb25IZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50SGVhZGVyS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBERVNUUk9ZXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgYWNjb3JkaW9uQ29udGFpbmVycy5mb3JFYWNoKGFjY29yZGlvbkNvbnRhaW5lciA9PiB7XG4gICAgICB1bmJpbmRBY2NvcmRpb25FdmVudHMoYWNjb3JkaW9uQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoYWNjb3JkaW9uQ29udGFpbmVycy5sZW5ndGgpIHtcbiAgICAgIGFjY29yZGlvbkNvbnRhaW5lcnMuZm9yRWFjaChhY2NvcmRpb25Db250YWluZXIgPT4ge1xuICAgICAgICBiaW5kQWNjb3JkaW9uRXZlbnRzKGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0KCk7XG5cbiAgLy8gUkVWRUFMIEFQSVxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZGVzdHJveSxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25zO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiaW1wb3J0IHsgcXVlcnlBbGwgfSBmcm9tICdAZWNsL2dlbmVyaWMtYmFzZS9oZWxwZXJzL2RvbSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgY2Fyb3VzZWxzID0gKHsgc2VsZWN0b3JJZDogc2VsZWN0b3JJZCA9ICdlY2wtY2Fyb3VzZWwnIH0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8ICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNFVFVQXG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ySWQpO1xuICBjb25zdCBzbGlkZXMgPSBxdWVyeUFsbCgnLmVjbC1jYXJvdXNlbF9faXRlbScsIGNhcm91c2VsKTtcbiAgY29uc3QgbGlzdCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpc3QnKTtcblxuICBmdW5jdGlvbiBnZXRMaXN0SXRlbVdpZHRoKCkge1xuICAgIHJldHVybiBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvU2xpZGUobikge1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICAgIGN1cnJlbnRTbGlkZSA9IChuICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGdldExpc3RJdGVtV2lkdGgoKTtcbiAgICBjb25zdCB0ciA9IGB0cmFuc2xhdGUzZCgkey1jdXJyZW50U2xpZGUgKiBpdGVtV2lkdGh9cHgsIDAsIDApYDtcblxuICAgIGxpc3Quc3R5bGUuTW96VHJhbnNmb3JtID0gdHI7IC8qIEZGICovXG4gICAgbGlzdC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyOyAvKiBJRSAoOSspICovXG4gICAgbGlzdC5zdHlsZS5PVHJhbnNmb3JtID0gdHI7IC8qIE9wZXJhICovXG4gICAgbGlzdC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0cjsgLyogU2FmYXJpICsgQ2hyb21lICovXG4gICAgbGlzdC5zdHlsZS50cmFuc2Zvcm0gPSB0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFubm91bmNlQ3VycmVudFNsaWRlKCkge1xuICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmVjbC1jYXJvdXNlbF9fbWV0YS1zbGlkZSdcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFNsaWRlICsgMX0gLyAke3NsaWRlcy5sZW5ndGh9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJbWFnZUluZm9ybWF0aW9uKCkge1xuICAgIC8vIFJlc2V0L0hpZGUgYWxsLlxuICAgIGNvbnN0IGluZm9BcmVhcyA9IHF1ZXJ5QWxsKCdbZGF0YS1pbWFnZV0nKTtcbiAgICAvLyBJZiBhbnl0aGluZyBpcyB2aXNpYmxlLlxuICAgIGlmIChpbmZvQXJlYXMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaW5mb0FyZWFzLmZvckVhY2goYXJlYSA9PiAoYXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSk7XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihgW2RhdGEtaW1hZ2U9XCIke2N1cnJlbnRTbGlkZX1cIl1gKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICBzZXRPZmZzZXQoKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgIHNldE9mZnNldCgpO1xuICAgIGFubm91bmNlQ3VycmVudFNsaWRlKCk7XG4gICAgc2hvd0ltYWdlSW5mb3JtYXRpb24oKTtcbiAgfVxuXG4gIC8vIEF0dGFjaCBjb250cm9scyB0byBhIGNhcm91c2VsLlxuICBmdW5jdGlvbiBhZGRDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IG5hdkNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIG5hdkNvbnRyb2xzLmNsYXNzTmFtZSA9ICdlY2wtY2Fyb3VzZWxfX2NvbnRyb2xzIGVjbC1saXN0LS11bnN0eWxlZCc7XG5cbiAgICBuYXZDb250cm9scy5pbm5lckhUTUwgPSBgXG4gICAgICA8bGk+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWNsLWljb24gZWNsLWljb24tLWxlZnQgZWNsLWNhcm91c2VsX19idXR0b24gZWNsLWNhcm91c2VsX19idXR0b24tLXByZXZpb3VzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJlY2wtdS1zci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVjbC1pY29uIGVjbC1pY29uLS1yaWdodCBlY2wtY2Fyb3VzZWxfX2J1dHRvbiBlY2wtY2Fyb3VzZWxfX2J1dHRvbi0tbmV4dFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWNsLXUtc3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmVjbC1jYXJvdXNlbF9fYnV0dG9uLS1wcmV2aW91cycsXG4gICAgICAgICcuZWNsLWNhcm91c2VsX19jb250cm9scydcbiAgICAgIClcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZpb3VzU2xpZGUpO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19idXR0b24tLW5leHQnLCAnLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgIGNhcm91c2VsXG4gICAgICAucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fbGlzdC13cmFwcGVyJylcbiAgICAgIC5hcHBlbmRDaGlsZChuYXZDb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKTtcbiAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19saXN0LXdyYXBwZXInKS5yZW1vdmVDaGlsZChjb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXZlUmVnaW9uKCkge1xuICAgIGNvbnN0IGxpdmVSZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXZlUmVnaW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gICAgbGl2ZVJlZ2lvbi5jbGFzc0xpc3QuYWRkKCdlY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5hcHBlbmRDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpdmVSZWdpb24oKSB7XG4gICAgY29uc3QgbGl2ZVJlZ2lvbiA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5yZW1vdmVDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGNvbnN0IGRlYm91bmNlQ2IgPSAoKSA9PlxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRPZmZzZXQoKTtcbiAgICAgIH0sXG4gICAgICAxMDAsXG4gICAgICB7IG1heFdhaXQ6IDMwMCB9XG4gICAgKSgpO1xuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRDYXJvdXNlbENvbnRyb2xzKCk7XG4gICAgYWRkTGl2ZVJlZ2lvbigpO1xuICAgIGdvVG9TbGlkZSgwKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG5cbiAgICAvLyBSZS1hbGlnbiBvbiByZXNpemUuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUNhcm91c2VsQ29udHJvbHMoKTtcbiAgICByZW1vdmVMaXZlUmVnaW9uKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxzO1xuIiwiLyoqXG4gKiBDb250ZXh0dWFsIG5hdmlnYXRpb24gc2NyaXB0c1xuICovXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9ldS1iYXNlL2hlbHBlcnMvZG9tJztcblxuY29uc3QgZXhwYW5kQ29udGV4dHVhbE5hdiA9IChcbiAgY29udGV4dHVhbE5hdixcbiAgYnV0dG9uLFxuICB7XG4gICAgY2xhc3NUb1JlbW92ZSA9ICdlY2wtY29udGV4dC1uYXZfX2l0ZW0tLW92ZXItbGltaXQnLFxuICAgIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9faXRlbS0tb3Zlci1saW1pdCcsXG4gICAgY29udGV4dCA9IGRvY3VtZW50LFxuICB9ID0ge31cbikgPT4ge1xuICBpZiAoIWNvbnRleHR1YWxOYXYpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IHF1ZXJ5QWxsKGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IsIGNvbnRleHQpO1xuXG4gIC8vIFJlbW92ZSBleHRyYSBjbGFzc1xuICBoaWRkZW5FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIGJ1dHR0b25cbiAgYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgY29udGV4dHVhbE5hdnMgPSAoe1xuICBzZWxlY3RvciA9ICcuZWNsLWNvbnRleHQtbmF2JyxcbiAgYnV0dG9uU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9fbW9yZScsXG4gIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9faXRlbS0tb3Zlci1saW1pdCcsXG4gIGNsYXNzVG9SZW1vdmUgPSAnZWNsLWNvbnRleHQtbmF2X19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgY29udGV4dCA9IGRvY3VtZW50LFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IG5vZGVzQXJyYXkgPSBxdWVyeUFsbChzZWxlY3RvciwgY29udGV4dCk7XG5cbiAgbm9kZXNBcnJheS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRleHQucXVlcnlTZWxlY3RvcihidXR0b25TZWxlY3Rvcik7XG5cbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICBleHBhbmRDb250ZXh0dWFsTmF2KG5vZGUsIGJ1dHRvbiwge1xuICAgICAgICAgIGNsYXNzVG9SZW1vdmUsXG4gICAgICAgICAgaGlkZGVuRWxlbWVudHNTZWxlY3RvcixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRleHR1YWxOYXZzO1xuIiwiLyoqXG4gKiBgTm9kZSNjb250YWlucygpYCBwb2x5ZmlsbC5cbiAqXG4gKiBTZWU6IGh0dHA6Ly9jb21wYXRpYmlsaXR5LnNod3Vwcy1jbXMuY2gvZW4vcG9seWZpbGxzLz8maWQ9MVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBvdGhlclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjb250YWlucyhub2RlLCBvdGhlcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICByZXR1cm4gbm9kZSA9PT0gb3RoZXIgfHwgISEobm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihvdGhlcikgJiAxNik7XG59XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93biA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZHJvcGRvd25zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGRyb3Bkb3duc0FycmF5LmZvckVhY2goZHJvcGRvd25TZWxlY3Rpb24gPT4ge1xuICAgICAgY29uc3QgaXNJbnNpZGUgPSBjb250YWlucyhkcm9wZG93blNlbGVjdGlvbiwgZXZlbnQudGFyZ2V0KTtcblxuICAgICAgaWYgKCFpc0luc2lkZSkge1xuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7c2VsZWN0b3J9ID4gW2FyaWEtZXhwYW5kZWQ9dHJ1ZV1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7c2VsZWN0b3J9ID4gW2FyaWEtaGlkZGVuPWZhbHNlXWBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgdGhlIGJvZHkgb2YgdGhlIGRyb3Bkb3duIGlzIHZpc2libGUsIHRoZW4gdG9nZ2xlLlxuICAgICAgICBpZiAoZHJvcGRvd25Cb2R5KSB7XG4gICAgICAgICAgZHJvcGRvd25CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIGRyb3Bkb3duQm9keS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiIsImltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9nZW5lcmljLWJhc2UvaGVscGVycy9kb20nO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKlxuICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gKiAtIG9wdGlvbnMudHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IgLSBhbnkgc2VsZWN0b3IgdG8gd2hpY2ggZXZlbnQgbGlzdGVuZXJzXG4gKiBhcmUgYXR0YWNoZWQuIFdoZW4gY2xpY2tlZCBvbiBhbnkgZWxlbWVudCB3aXRoIHN1Y2ggYSBzZWxlY3RvciwgYSBkaWFsb2cgb3BlbnMuXG4gKlxuICogLSBvcHRpb25zLmRpYWxvZ1dpbmRvd0lkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtZGlhbG9nYC5cbiAqXG4gKiAtIG9wdGlvbnMuZGlhbG9nT3ZlcmxheUlkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtb3ZlcmxheWAuXG4gKiBPdmVybGF5IGVsZW1lbnQgaXMgY3JlYXRlZCBpbiB0aGUgZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgY29uc3QgZGlhbG9ncyA9ICh7XG4gIHRyaWdnZXJFbGVtZW50c1NlbGVjdG9yOiB0cmlnZ2VyRWxlbWVudHNTZWxlY3RvciA9ICdbZGF0YS1lY2wtZGlhbG9nXScsXG4gIGRpYWxvZ1dpbmRvd0lkOiBkaWFsb2dXaW5kb3dJZCA9ICdlY2wtZGlhbG9nJyxcbiAgZGlhbG9nT3ZlcmxheUlkOiBkaWFsb2dPdmVybGF5SWQgPSAnZWNsLW92ZXJsYXknLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmICghKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHwgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU0VUVVBcbiAgY29uc3QgdHJpZ2dlckVsZW1lbnRzID0gcXVlcnlBbGwodHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IpO1xuICBjb25zdCBkaWFsb2dXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dXaW5kb3dJZCk7XG4gIGxldCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nT3ZlcmxheUlkKTtcblxuICAvLyBDcmVhdGUgYW4gb3ZlcmxheSBlbGVtZW50IGlmIHRoZSB1c2VyIGRvZXMgbm90IHN1cHBseSBvbmUuXG4gIGlmICghZGlhbG9nT3ZlcmxheSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWNsLW92ZXJsYXknKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWNsLWRpYWxvZ19fb3ZlcmxheScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBkaWFsb2dPdmVybGF5ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFdoYXQgd2UgY2FuIGZvY3VzIG9uIGluIHRoZSBtb2RhbC5cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKFxuICAgIHF1ZXJ5QWxsKFxuICAgICAgYFxuICAgICAgICBhW2hyZWZdLFxuICAgICAgICBhcmVhW2hyZWZdLFxuICAgICAgICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgW3RhYmluZGV4PVwiMFwiXVxuICAgICAgYCxcbiAgICAgIGRpYWxvZ1dpbmRvd1xuICAgIClcbiAgKTtcblxuICAvLyBVc2UgdGhpcyB2YXJpYWJsZSB0byByZXR1cm4gZm9jdXMgb24gZWxlbWVudCBhZnRlciBkaWFsb2cgYmVpbmcgY2xvc2VkLlxuICBsZXQgZm9jdXNlZEVsQmVmb3JlT3BlbiA9IG51bGw7XG5cbiAgLy8gU3BlY2lmaWMgZWxlbWVudHMgdG8gdGFrZSBjYXJlIHdoZW4gb3Blbm5pbmcgYW5kIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gIGNvbnN0IGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gRVZFTlRTXG4gIC8vIEhpZGUgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBjbG9zZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlhbG9nV2luZG93LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgIGlmIChmb2N1c2VkRWxCZWZvcmVPcGVuKSB7XG4gICAgICBmb2N1c2VkRWxCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEtleWJvYXJkIGJlaGF2aW9ycy5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgY29uc3QgS0VZX1RBQiA9IDk7XG4gICAgY29uc3QgS0VZX0VTQyA9IDI3O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQmFja3dhcmRUYWIoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVGb3J3YXJkVGFiKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIC8vIEtlZXAgdGFiYmluZyBpbiB0aGUgc2NvcGUgb2YgdGhlIGRpYWxvZy5cbiAgICAgIGNhc2UgS0VZX1RBQjpcbiAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGhhbmRsZUJhY2t3YXJkVGFiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlRm9yd2FyZFRhYigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfRVNDOlxuICAgICAgICBjbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBvcGVuKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2dXaW5kb3cuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBlbGVtZW50IHRvIGhhdmUgdGhlIGZvY3VzIGFmdGVyIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgICAvLyBVc3VhbGx5IHRoZSBlbGVtZW50IHdoaWNoIHRyaWdnZXJlZCB0aGUgZGlhbG9nLlxuICAgIGZvY3VzZWRFbEJlZm9yZU9wZW4gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGRpYWxvZy5cbiAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIC8vIENsb3NlIGRpYWxvZyB3aGVuIGNsaWNrZWQgb3V0IG9mIHRoZSBkaWFsb2cgd2luZG93LlxuICAgIGRpYWxvZ092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG5cbiAgICAvLyBIYW5kbGUgdGFiYmluZywgZXNjIGFuZCBrZXlib2FyZCBpbiB0aGUgZGlhbG9nIHdpbmRvdy5cbiAgICBkaWFsb2dXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIGJpbmREaWFsb2dFdmVudHMoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pKTtcblxuICAgIC8vIGNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpO1xuICAgIHF1ZXJ5QWxsKCcuZWNsLW1lc3NhZ2VfX2Rpc21pc3MnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZERpYWxvZ0V2ZW50cyhlbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbikpO1xuXG4gICAgLy8gY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVjbC1tZXNzYWdlX19kaXNtaXNzJyk7XG4gICAgcXVlcnlBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERFU1RST1lcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmREaWFsb2dFdmVudHModHJpZ2dlckVsZW1lbnRzKTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodHJpZ2dlckVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgYmluZERpYWxvZ0V2ZW50cyh0cmlnZ2VyRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuLy8gbW9kdWxlIGV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRXhwYW5kYWJsZSA9IChcbiAgdG9nZ2xlRWxlbWVudCxcbiAge1xuICAgIGNvbnRleHQgPSBkb2N1bWVudCxcbiAgICBmb3JjZUNsb3NlID0gZmFsc2UsXG4gICAgY2xvc2VTaWJsaW5ncyA9IGZhbHNlLFxuICAgIHNpYmxpbmdzU2VsZWN0b3IgPSAnW2FyaWEtY29udHJvbHNdW2FyaWEtZXhwYW5kZWRdJyxcbiAgfSA9IHt9XG4pID0+IHtcbiAgaWYgKCF0b2dnbGVFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IHRhcmdldCBlbGVtZW50XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgKTtcblxuICAvLyBFeGl0IGlmIG5vIHRhcmdldCBmb3VuZFxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEdldCBjdXJyZW50IHN0YXR1c1xuICBjb25zdCBpc0V4cGFuZGVkID1cbiAgICBmb3JjZUNsb3NlID09PSB0cnVlIHx8XG4gICAgdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuXG4gIC8vIFRvZ2dsZSB0aGUgZXhwYW5kYWJsZS9jb2xsYXBzaWJsZVxuICB0b2dnbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFpc0V4cGFuZGVkKTtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBpc0V4cGFuZGVkKTtcblxuICAvLyBUb2dnbGUgbGFiZWwgaWYgcG9zc2libGVcbiAgaWYgKCFpc0V4cGFuZGVkICYmIHRvZ2dsZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJykpIHtcbiAgICB0b2dnbGVFbGVtZW50LmlubmVySFRNTCA9IHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJyk7XG4gIH0gZWxzZSBpZiAoaXNFeHBhbmRlZCAmJiB0b2dnbGVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sYWJlbC1jb2xsYXBzZWQnKSkge1xuICAgIHRvZ2dsZUVsZW1lbnQuaW5uZXJIVE1MID0gdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1sYWJlbC1jb2xsYXBzZWQnXG4gICAgKTtcbiAgfVxuXG4gIC8vIENsb3NlIHNpYmxpbmdzIGlmIHJlcXVlc3RlZFxuICBpZiAoY2xvc2VTaWJsaW5ncyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNpYmxpbmdzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgIC5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzaWJsaW5nc1NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoc2libGluZyA9PiBzaWJsaW5nICE9PSB0b2dnbGVFbGVtZW50KTtcblxuICAgIHNpYmxpbmdzQXJyYXkuZm9yRWFjaChzaWJsaW5nID0+IHtcbiAgICAgIHRvZ2dsZUV4cGFuZGFibGUoc2libGluZywge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JjZUNsb3NlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgaW5pdEV4cGFuZGFibGVzID0gKFxuICBzZWxlY3RvciA9ICdbYXJpYS1jb250cm9sc11bYXJpYS1leHBhbmRlZF0nLFxuICBjb250ZXh0ID0gZG9jdW1lbnRcbikgPT4ge1xuICBjb25zdCBub2Rlc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICApO1xuXG4gIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZShub2RlLCB7IGNvbnRleHQgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgKTtcbn07XG4iLCIvKipcbiAqIEZpbGUgdXBsb2FkcyByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG5pbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlY2wvZXUtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGZpbGVVcGxvYWRzID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtZmlsZS11cGxvYWQnLFxuICBpbnB1dFNlbGVjdG9yOiBpbnB1dFNlbGVjdG9yID0gJy5lY2wtZmlsZS11cGxvYWRfX2lucHV0JyxcbiAgdmFsdWVTZWxlY3RvcjogdmFsdWVTZWxlY3RvciA9ICcuZWNsLWZpbGUtdXBsb2FkX192YWx1ZScsXG4gIGJyb3dzZVNlbGVjdG9yOiBicm93c2VTZWxlY3RvciA9ICcuZWNsLWZpbGUtdXBsb2FkX19icm93c2UnLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIC8vIFNFVFVQXG4gIC8vIHNldCBmaWxlIHVwbG9hZCBlbGVtZW50IE5vZGVMaXN0c1xuICBjb25zdCBmaWxlVXBsb2FkQ29udGFpbmVycyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICAvLyBBQ1RJT05TXG4gIGZ1bmN0aW9uIHVwZGF0ZUZpbGVOYW1lKGVsZW1lbnQsIGZpbGVzKSB7XG4gICAgaWYgKGZpbGVzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG4gICAgbGV0IGZpbGVuYW1lID0gJyc7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XG4gICAgICBpZiAoJ25hbWUnIGluIGZpbGUpIHtcbiAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgZmlsZW5hbWUgKz0gJywgJztcbiAgICAgICAgfVxuICAgICAgICBmaWxlbmFtZSArPSBmaWxlLm5hbWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aGUgc2VsZWN0ZWQgZmlsZW5hbWUgaW4gdGhlIGZpZWxkLlxuICAgIGNvbnN0IG1lc3NhZ2VFbGVtZW50ID0gZWxlbWVudDtcbiAgICBtZXNzYWdlRWxlbWVudC5pbm5lckhUTUwgPSBmaWxlbmFtZTtcbiAgfVxuXG4gIC8vIEVWRU5UU1xuICBmdW5jdGlvbiBldmVudFZhbHVlQ2hhbmdlKGUpIHtcbiAgICBpZiAoJ2ZpbGVzJyBpbiBlLnRhcmdldCkge1xuICAgICAgY29uc3QgZmlsZVVwbG9hZEVsZW1lbnRzID0gcXVlcnlBbGwodmFsdWVTZWxlY3RvciwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG5cbiAgICAgIGZpbGVVcGxvYWRFbGVtZW50cy5mb3JFYWNoKGZpbGVVcGxvYWRFbGVtZW50ID0+IHtcbiAgICAgICAgdXBkYXRlRmlsZU5hbWUoZmlsZVVwbG9hZEVsZW1lbnQsIGUudGFyZ2V0LmZpbGVzKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50QnJvd3NlS2V5ZG93bihlKSB7XG4gICAgLy8gY29sbGVjdCBoZWFkZXIgdGFyZ2V0cywgYW5kIHRoZWlyIHByZXYvbmV4dFxuICAgIGNvbnN0IGlzTW9kaWZpZXJLZXkgPSBlLm1ldGFLZXkgfHwgZS5hbHRLZXk7XG5cbiAgICBjb25zdCBpbnB1dEVsZW1lbnRzID0gcXVlcnlBbGwoaW5wdXRTZWxlY3RvciwgZS50YXJnZXQucGFyZW50Tm9kZSk7XG5cbiAgICBpbnB1dEVsZW1lbnRzLmZvckVhY2goaW5wdXRFbGVtZW50ID0+IHtcbiAgICAgIC8vIGRvbid0IGNhdGNoIGtleSBldmVudHMgd2hlbiDijJggb3IgQWx0IG1vZGlmaWVyIGlzIHByZXNlbnRcbiAgICAgIGlmIChpc01vZGlmaWVyS2V5KSByZXR1cm47XG5cbiAgICAgIC8vIGNhdGNoIGVudGVyL3NwYWNlLCBsZWZ0L3JpZ2h0IGFuZCB1cC9kb3duIGFycm93IGtleSBldmVudHNcbiAgICAgIC8vIGlmIG5ldyBwYW5lbCBzaG93IGl0LCBpZiBuZXh0L3ByZXYgbW92ZSBmb2N1c1xuICAgICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaW5wdXRFbGVtZW50LmNsaWNrKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBCSU5EIEVWRU5UU1xuICBmdW5jdGlvbiBiaW5kRmlsZVVwbG9hZEV2ZW50cyhmaWxlVXBsb2FkQ29udGFpbmVyKSB7XG4gICAgLy8gYmluZCBhbGwgZmlsZSB1cGxvYWQgY2hhbmdlIGV2ZW50c1xuICAgIGNvbnN0IGZpbGVVcGxvYWRJbnB1dHMgPSBxdWVyeUFsbChpbnB1dFNlbGVjdG9yLCBmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICBmaWxlVXBsb2FkSW5wdXRzLmZvckVhY2goZmlsZVVwbG9hZElucHV0ID0+IHtcbiAgICAgIGZpbGVVcGxvYWRJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudFZhbHVlQ2hhbmdlKTtcbiAgICB9KTtcblxuICAgIC8vIGJpbmQgYWxsIGZpbGUgdXBsb2FkIGtleWRvd24gZXZlbnRzXG4gICAgY29uc3QgZmlsZVVwbG9hZEJyb3dzZXMgPSBxdWVyeUFsbChicm93c2VTZWxlY3RvciwgZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgZmlsZVVwbG9hZEJyb3dzZXMuZm9yRWFjaChmaWxlVXBsb2FkQnJvd3NlID0+IHtcbiAgICAgIGZpbGVVcGxvYWRCcm93c2UuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50QnJvd3NlS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZEZpbGVVcGxvYWRFdmVudHMoZmlsZVVwbG9hZENvbnRhaW5lcikge1xuICAgIGNvbnN0IGZpbGVVcGxvYWRJbnB1dHMgPSBxdWVyeUFsbChpbnB1dFNlbGVjdG9yLCBmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICAvLyB1bmJpbmQgYWxsIGZpbGUgdXBsb2FkIGNoYW5nZSBldmVudHNcbiAgICBmaWxlVXBsb2FkSW5wdXRzLmZvckVhY2goZmlsZVVwbG9hZElucHV0ID0+IHtcbiAgICAgIGZpbGVVcGxvYWRJbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudFZhbHVlQ2hhbmdlKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZpbGVVcGxvYWRCcm93c2VzID0gcXVlcnlBbGwoYnJvd3NlU2VsZWN0b3IsIGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgIC8vIGJpbmQgYWxsIGZpbGUgdXBsb2FkIGtleWRvd24gZXZlbnRzXG4gICAgZmlsZVVwbG9hZEJyb3dzZXMuZm9yRWFjaChmaWxlVXBsb2FkQnJvd3NlID0+IHtcbiAgICAgIGZpbGVVcGxvYWRCcm93c2UucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50QnJvd3NlS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBERVNUUk9ZXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZmlsZVVwbG9hZENvbnRhaW5lcnMuZm9yRWFjaChmaWxlVXBsb2FkQ29udGFpbmVyID0+IHtcbiAgICAgIHVuYmluZEZpbGVVcGxvYWRFdmVudHMoZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKGZpbGVVcGxvYWRDb250YWluZXJzLmxlbmd0aCkge1xuICAgICAgZmlsZVVwbG9hZENvbnRhaW5lcnMuZm9yRWFjaChmaWxlVXBsb2FkQ29udGFpbmVyID0+IHtcbiAgICAgICAgYmluZEZpbGVVcGxvYWRFdmVudHMoZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0KCk7XG5cbiAgLy8gUkVWRUFMIEFQSVxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZGVzdHJveSxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCBmaWxlVXBsb2FkcztcbiIsImltcG9ydCBkZWJvdW5jZSBmcm9tICdsb2Rhc2guZGVib3VuY2UnO1xuaW1wb3J0IHsgcXVlcnlBbGwgfSBmcm9tICdAZWNsL2V1LWJhc2UvaGVscGVycy9kb20nO1xuXG5leHBvcnQgY29uc3QgZWNsTGFuZ1NlbGVjdFBhZ2VzID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtbGFuZy1zZWxlY3QtcGFnZScsXG4gIHRvZ2dsZUNsYXNzOiB0b2dnbGVDbGFzcyA9ICdlY2wtbGFuZy1zZWxlY3QtcGFnZS0tZHJvcGRvd24nLFxuICBsaXN0U2VsZWN0b3I6IGxpc3RTZWxlY3RvciA9ICcuZWNsLWxhbmctc2VsZWN0LXBhZ2VfX2xpc3QnLFxuICBkcm9wZG93blNlbGVjdG9yOiBkcm9wZG93blNlbGVjdG9yID0gJy5lY2wtbGFuZy1zZWxlY3QtcGFnZV9fZHJvcGRvd24nLFxuICBkcm9wZG93bk9uQ2hhbmdlOiBkcm9wZG93bk9uQ2hhbmdlID0gdW5kZWZpbmVkLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGxhbmdTZWxlY3RQYWdlc0NvbnRhaW5lcnMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlKGxzcCkge1xuICAgIGlmICghbHNwKSByZXR1cm4gbnVsbDtcblxuICAgIGNvbnN0IGxpc3QgPSBxdWVyeUFsbChsaXN0U2VsZWN0b3IsIGxzcClbMF07XG5cbiAgICBpZiAoIWxzcC5jbGFzc0xpc3QuY29udGFpbnModG9nZ2xlQ2xhc3MpKSB7XG4gICAgICBpZiAobGlzdCAmJiBsaXN0Lm9mZnNldExlZnQgKyBsaXN0Lm9mZnNldFdpZHRoID4gbHNwLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGxzcC5jbGFzc0xpc3QuYWRkKHRvZ2dsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZHJvcGRvd24gPSBxdWVyeUFsbChkcm9wZG93blNlbGVjdG9yLCBsc3ApWzBdO1xuICAgICAgaWYgKGRyb3Bkb3duLm9mZnNldExlZnQgKyBsaXN0Lm9mZnNldFdpZHRoIDwgbHNwLm9mZnNldFdpZHRoKSB7XG4gICAgICAgIGxzcC5jbGFzc0xpc3QucmVtb3ZlKHRvZ2dsZUNsYXNzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgLy8gT24gbG9hZFxuICAgIGxhbmdTZWxlY3RQYWdlc0NvbnRhaW5lcnMuZm9yRWFjaChsc3AgPT4ge1xuICAgICAgdG9nZ2xlKGxzcCk7XG5cbiAgICAgIGlmIChkcm9wZG93bk9uQ2hhbmdlKSB7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duID0gcXVlcnlBbGwoZHJvcGRvd25TZWxlY3RvciwgbHNwKVswXTtcblxuICAgICAgICBpZiAoZHJvcGRvd24pIHtcbiAgICAgICAgICBkcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBkcm9wZG93bk9uQ2hhbmdlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAncmVzaXplJyxcbiAgICAgIGRlYm91bmNlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgbGFuZ1NlbGVjdFBhZ2VzQ29udGFpbmVycy5mb3JFYWNoKHRvZ2dsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIDEwMCxcbiAgICAgICAgeyBtYXhXYWl0OiAzMDAgfVxuICAgICAgKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gaW5pdCgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZWNsTGFuZ1NlbGVjdFBhZ2VzO1xuIiwiLypcbiAqIE1lc3NhZ2VzIGJlaGF2aW9yXG4gKi9cblxuLy8gRGlzbWlzcyBhIHNlbGVjdGVkIG1lc3NhZ2UuXG5mdW5jdGlvbiBkaXNtaXNzTWVzc2FnZShtZXNzYWdlKSB7XG4gIGlmIChtZXNzYWdlICYmIG1lc3NhZ2UucGFyZW50Tm9kZSAhPT0gbnVsbCkge1xuICAgIG1lc3NhZ2UucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChtZXNzYWdlKTtcbiAgfVxufVxuXG4vLyBIZWxwZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0byBhbGwgdGhlIG1lc3NhZ2VzIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNZXNzYWdlcygpIHtcbiAgY29uc3Qgc2VsZWN0b3JDbGFzcyA9ICdlY2wtbWVzc2FnZV9fZGlzbWlzcyc7XG5cbiAgY29uc3QgbWVzc2FnZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKHNlbGVjdG9yQ2xhc3MpXG4gICk7XG5cbiAgbWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+XG4gICAgbWVzc2FnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICBkaXNtaXNzTWVzc2FnZShtZXNzYWdlLnBhcmVudEVsZW1lbnQpXG4gICAgKVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbml0TWVzc2FnZXM7XG4iLCIvKlxuICogTWVzc2FnZXMgYmVoYXZpb3JcbiAqL1xuXG5leHBvcnQgKiBmcm9tICdAZWNsL2dlbmVyaWMtY29tcG9uZW50LW1lc3NhZ2UnO1xuIiwiLyoqXG4gIHN0aWNreWJpdHMgLSBTdGlja3liaXRzIGlzIGEgbGlnaHR3ZWlnaHQgYWx0ZXJuYXRpdmUgdG8gYHBvc2l0aW9uOiBzdGlja3lgIHBvbHlmaWxsc1xuICBAdmVyc2lvbiB2My4yLjNcbiAgQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2RvbGxhcnNoYXZlY2x1Yi9zdGlja3liaXRzI3JlYWRtZVxuICBAYXV0aG9yIEplZmYgV2FpbndyaWdodCA8eW93YWlud3JpZ2h0QGdtYWlsLmNvbT4gKGh0dHBzOi8vamVmZnJ5LmluKVxuICBAbGljZW5zZSBNSVRcbioqL1xuLypcbiAgU1RJQ0tZQklUUyDwn5KJXG4gIC0tLS0tLS0tXG4gID4gYSBsaWdodHdlaWdodCBhbHRlcm5hdGl2ZSB0byBgcG9zaXRpb246IHN0aWNreWAgcG9seWZpbGxzIPCfjaxcbiAgLS0tLS0tLS1cbiAgLSBlYWNoIG1ldGhvZCBpcyBkb2N1bWVudGVkIGFib3ZlIGl0IG91ciB2aWV3IHRoZSByZWFkbWVcbiAgLSBTdGlja3liaXRzIGRvZXMgbm90IG1hbmFnZSBwb2x5bW9ycGhpYyBmdW5jdGlvbmFsaXR5IChwb3NpdGlvbiBsaWtlIHByb3BlcnRpZXMpXG4gICogcG9seW1vcnBoaWMgZnVuY3Rpb25hbGl0eTogKGluIHRoZSBjb250ZXh0IG9mIGRlc2NyaWJpbmcgU3RpY2t5Yml0cylcbiAgICBtZWFucyBtYWtpbmcgdGhpbmdzIGxpa2UgYHBvc2l0aW9uOiBzdGlja3lgIGJlIGxvb3NlbHkgc3VwcG9ydGVkIHdpdGggcG9zaXRpb24gZml4ZWQuXG4gICAgSXQgYWxzbyBtZWFucyB0aGF0IGZlYXR1cmVzIGxpa2UgYHVzZVN0aWNreUNsYXNzZXNgIHRha2VzIG9uIHN0eWxlcyBsaWtlIGBwb3NpdGlvbjogZml4ZWRgLlxuICAtLS0tLS0tLVxuICBkZWZhdWx0cyDwn5SMXG4gIC0tLS0tLS0tXG4gIC0gdmVyc2lvbiA9IGBwYWNrYWdlLmpzb25gIHZlcnNpb25cbiAgLSB1c2VyQWdlbnQgPSB2aWV3ZXIgYnJvd3NlciBhZ2VudFxuICAtIHRhcmdldCA9IERPTSBlbGVtZW50IHNlbGVjdG9yXG4gIC0gbm9TdHlsZXMgPSBib29sZWFuXG4gIC0gb2Zmc2V0ID0gbnVtYmVyXG4gIC0gcGFyZW50Q2xhc3MgPSAnc3RyaW5nJ1xuICAtIHNjcm9sbEVsID0gd2luZG93IHx8IERPTSBlbGVtZW50IHNlbGVjdG9yXG4gIC0gc3RpY2t5Q2xhc3MgPSAnc3RyaW5nJ1xuICAtIHN0dWNrQ2xhc3MgPSAnc3RyaW5nJ1xuICAtIHVzZVN0aWNreUNsYXNzZXMgPSBib29sZWFuXG4gIC0gdmVydGljYWxQb3NpdGlvbiA9ICdzdHJpbmcnXG4gIC0tLS0tLS0tXG4gIHByb3Bz8J+UjFxuICAtLS0tLS0tLVxuICAtIHAgPSBwcm9wcyB7b2JqZWN0fVxuICAtLS0tLS0tLVxuICBpbnN0YW5jZSBub3RlXG4gIC0tLS0tLS0tXG4gIC0gc3RpY2t5Yml0cyBwYXJlbnQgbWV0aG9kcyByZXR1cm4gdGhpc1xuICAtIHN0aWNreWJpdHMgaW5zdGFuY2UgbWV0aG9kcyByZXR1cm4gYW4gaW5zdGFuY2UgaXRlbVxuICAtLS0tLS0tLVxuICBub21lbmNsYXR1cmVcbiAgLS0tLS0tLS1cbiAgLSB0YXJnZXQgPT4gZWwgPT4gZVxuICAtIHByb3BzID0+IG8gfHwgcFxuICAtIGluc3RhbmNlID0+IGl0ZW0gPT4gaXRcbiAgLS0tLS0tLS1cbiAgbWV0aG9kc1xuICAtLS0tLS0tLVxuICAtIC5kZWZpbmVQb3NpdGlvbiA9IGRlZmluZXMgc3RpY2t5IG9yIGZpeGVkXG4gIC0gLmFkZEluc3RhbmNlID0gYW4gYXJyYXkgb2Ygb2JqZWN0cyBmb3IgZWFjaCBTdGlja3liaXRzIFRhcmdldFxuICAtIC5nZXRDbG9zZXN0UGFyZW50ID0gZ2V0cyB0aGUgcGFyZW50IGZvciBub24td2luZG93IHNjcm9sbFxuICAtIC5jb21wdXRlU2Nyb2xsT2Zmc2V0cyA9IGNvbXB1dGVzIHNjcm9sbCBwb3NpdGlvblxuICAtIC50b2dnbGVDbGFzc2VzID0gb2xkZXIgYnJvd3NlciB0b2dnbGVyXG4gIC0gLm1hbmFnZVN0YXRlID0gbWFuYWdlcyBzdGlja3kgc3RhdGVcbiAgLSAucmVtb3ZlQ2xhc3MgPSBvbGRlciBicm93c2VyIHN1cHBvcnQgY2xhc3MgcmVtb3ZlclxuICAtIC5yZW1vdmVJbnN0YW5jZSA9IHJlbW92ZXMgYW4gaW5zdGFuY2VcbiAgLSAuY2xlYW51cCA9IHJlbW92ZXMgYWxsIFN0aWNreWJpdHMgaW5zdGFuY2VzIGFuZCBjbGVhbnMgdXAgZG9tIGZyb20gc3RpY2t5Yml0c1xuKi9cbmZ1bmN0aW9uIFN0aWNreWJpdHModGFyZ2V0LCBvYmopIHtcbiAgdmFyIG8gPSB0eXBlb2Ygb2JqICE9PSAndW5kZWZpbmVkJyA/IG9iaiA6IHt9O1xuICB0aGlzLnZlcnNpb24gPSAnMy4yLjMnO1xuICB0aGlzLnVzZXJBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50IHx8ICdubyBgdXNlckFnZW50YCBwcm92aWRlZCBieSB0aGUgYnJvd3Nlcic7XG4gIHRoaXMucHJvcHMgPSB7XG4gICAgY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyOiBvLmN1c3RvbVN0aWNreUNoYW5nZU51bWJlciB8fCBudWxsLFxuICAgIG5vU3R5bGVzOiBvLm5vU3R5bGVzIHx8IGZhbHNlLFxuICAgIHN0aWNreUJpdFN0aWNreU9mZnNldDogby5zdGlja3lCaXRTdGlja3lPZmZzZXQgfHwgMCxcbiAgICBwYXJlbnRDbGFzczogby5wYXJlbnRDbGFzcyB8fCAnanMtc3RpY2t5Yml0LXBhcmVudCcsXG4gICAgc2Nyb2xsRWw6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioby5zY3JvbGxFbCkgfHwgd2luZG93LFxuICAgIHN0aWNreUNsYXNzOiBvLnN0aWNreUNsYXNzIHx8ICdqcy1pcy1zdGlja3knLFxuICAgIHN0dWNrQ2xhc3M6IG8uc3R1Y2tDbGFzcyB8fCAnanMtaXMtc3R1Y2snLFxuICAgIHN0aWNreUNoYW5nZUNsYXNzOiBvLnN0aWNreUNoYW5nZUNsYXNzIHx8ICdqcy1pcy1zdGlja3ktLWNoYW5nZScsXG4gICAgdXNlU3RpY2t5Q2xhc3Nlczogby51c2VTdGlja3lDbGFzc2VzIHx8IGZhbHNlLFxuICAgIHZlcnRpY2FsUG9zaXRpb246IG8udmVydGljYWxQb3NpdGlvbiB8fCAndG9wJ1xuICB9O1xuICB2YXIgcCA9IHRoaXMucHJvcHM7XG4gIC8qXG4gICAgZGVmaW5lIHBvc2l0aW9uVmFsXG4gICAgLS0tLVxuICAgIC0gIHVzZXMgYSBjb21wdXRlZCAoYC5kZWZpbmVQb3NpdGlvbigpYClcbiAgICAtICBkZWZpbmVkIHRoZSBwb3NpdGlvblxuICAqL1xuXG4gIHAucG9zaXRpb25WYWwgPSB0aGlzLmRlZmluZVBvc2l0aW9uKCkgfHwgJ2ZpeGVkJztcbiAgdmFyIHZwID0gcC52ZXJ0aWNhbFBvc2l0aW9uO1xuICB2YXIgbnMgPSBwLm5vU3R5bGVzO1xuICB2YXIgcHYgPSBwLnBvc2l0aW9uVmFsO1xuICB0aGlzLmVscyA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0YXJnZXQpIDogdGFyZ2V0O1xuICBpZiAoISgnbGVuZ3RoJyBpbiB0aGlzLmVscykpIHRoaXMuZWxzID0gW3RoaXMuZWxzXTtcbiAgdGhpcy5pbnN0YW5jZXMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZWxzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGVsID0gdGhpcy5lbHNbaV07XG4gICAgdmFyIHN0eWxlcyA9IGVsLnN0eWxlOyAvLyBzZXQgdmVydGljYWwgcG9zaXRpb25cblxuICAgIHN0eWxlc1t2cF0gPSB2cCA9PT0gJ3RvcCcgJiYgIW5zID8gcC5zdGlja3lCaXRTdGlja3lPZmZzZXQgKyBcInB4XCIgOiAnJztcbiAgICBzdHlsZXMucG9zaXRpb24gPSBwdiAhPT0gJ2ZpeGVkJyA/IHB2IDogJyc7XG5cbiAgICBpZiAocHYgPT09ICdmaXhlZCcgfHwgcC51c2VTdGlja3lDbGFzc2VzKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmFkZEluc3RhbmNlKGVsLCBwKTsgLy8gaW5zdGFuY2VzIGFyZSBhbiBhcnJheSBvZiBvYmplY3RzXG5cbiAgICAgIHRoaXMuaW5zdGFuY2VzLnB1c2goaW5zdGFuY2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufVxuLypcbiAgc2V0U3RpY2t5UG9zaXRpb24g4pyU77iPXG4gIC0tLS0tLS0tXG4gIOKAlCAgbW9zdCBiYXNpYyB0aGluZyBzdGlja3liaXRzIGRvZXNcbiAgPT4gY2hlY2tzIHRvIHNlZSBpZiBwb3NpdGlvbiBzdGlja3kgaXMgc3VwcG9ydGVkXG4gID0+IGRlZmluZWQgdGhlIHBvc2l0aW9uIHRvIGJlIHVzZWRcbiAgPT4gc3RpY2t5Yml0cyB3b3JrcyBhY2NvcmRpbmdseVxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5kZWZpbmVQb3NpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHByZWZpeCA9IFsnJywgJy1vLScsICctd2Via2l0LScsICctbW96LScsICctbXMtJ107XG4gIHZhciB0ZXN0ID0gZG9jdW1lbnQuaGVhZC5zdHlsZTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHByZWZpeC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIHRlc3QucG9zaXRpb24gPSBwcmVmaXhbaV0gKyBcInN0aWNreVwiO1xuICB9XG5cbiAgdmFyIHN0aWNreVByb3AgPSB0ZXN0LnBvc2l0aW9uID8gdGVzdC5wb3NpdGlvbiA6ICdmaXhlZCc7XG4gIHRlc3QucG9zaXRpb24gPSAnJztcbiAgcmV0dXJuIHN0aWNreVByb3A7XG59O1xuLypcbiAgYWRkSW5zdGFuY2Ug4pyU77iPXG4gIC0tLS0tLS0tXG4gIOKAlCBtYW5hZ2VzIGluc3RhbmNlcyBvZiBpdGVtc1xuICAtIHRha2VzIGluIGFuIGVsIGFuZCBwcm9wc1xuICAtIHJldHVybnMgYW4gaXRlbSBvYmplY3RcbiAgLS0tXG4gIC0gdGFyZ2V0ID0gZWxcbiAgLSBvID0ge29iamVjdH0gPSBwcm9wc1xuICAgIC0gc2Nyb2xsRWwgPSAnc3RyaW5nJ1xuICAgIC0gdmVydGljYWxQb3NpdGlvbiA9IG51bWJlclxuICAgIC0gb2ZmID0gYm9vbGVhblxuICAgIC0gcGFyZW50Q2xhc3MgPSAnc3RyaW5nJ1xuICAgIC0gc3RpY2t5Q2xhc3MgPSAnc3RyaW5nJ1xuICAgIC0gc3R1Y2tDbGFzcyA9ICdzdHJpbmcnXG4gIC0tLVxuICAtIGRlZmluZWQgbGF0ZXJcbiAgICAtIHBhcmVudCA9IGRvbSBlbGVtZW50XG4gICAgLSBzdGF0ZSA9ICdzdHJpbmcnXG4gICAgLSBvZmZzZXQgPSBudW1iZXJcbiAgICAtIHN0aWNreVN0YXJ0ID0gbnVtYmVyXG4gICAgLSBzdGlja3lTdG9wID0gbnVtYmVyXG4gIC0gcmV0dXJucyBhbiBpbnN0YW5jZSBvYmplY3RcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuYWRkSW5zdGFuY2UgPSBmdW5jdGlvbiBhZGRJbnN0YW5jZShlbCwgcHJvcHMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcblxuICB2YXIgaXRlbSA9IHtcbiAgICBlbDogZWwsXG4gICAgcGFyZW50OiBlbC5wYXJlbnROb2RlLFxuICAgIHByb3BzOiBwcm9wc1xuICB9O1xuICB0aGlzLmlzV2luID0gdGhpcy5wcm9wcy5zY3JvbGxFbCA9PT0gd2luZG93O1xuICB2YXIgc2UgPSB0aGlzLmlzV2luID8gd2luZG93IDogdGhpcy5nZXRDbG9zZXN0UGFyZW50KGl0ZW0uZWwsIGl0ZW0ucHJvcHMuc2Nyb2xsRWwpO1xuICB0aGlzLmNvbXB1dGVTY3JvbGxPZmZzZXRzKGl0ZW0pO1xuICBpdGVtLnBhcmVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBwcm9wcy5wYXJlbnRDbGFzcztcbiAgaXRlbS5zdGF0ZSA9ICdkZWZhdWx0JztcblxuICBpdGVtLnN0YXRlQ29udGFpbmVyID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBfdGhpcy5tYW5hZ2VTdGF0ZShpdGVtKTtcbiAgfTtcblxuICBzZS5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpdGVtLnN0YXRlQ29udGFpbmVyKTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuLypcbiAgLS0tLS0tLS1cbiAgZ2V0UGFyZW50IPCfkajigI1cbiAgLS0tLS0tLS1cbiAgLSBhIGhlbHBlciBmdW5jdGlvbiB0aGF0IGdldHMgdGhlIHRhcmdldCBlbGVtZW50J3MgcGFyZW50IHNlbGVjdGVkIGVsXG4gIC0gb25seSB1c2VkIGZvciBub24gYHdpbmRvd2Agc2Nyb2xsIGVsZW1lbnRzXG4gIC0gc3VwcG9ydHMgb2xkZXIgYnJvd3NlcnNcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuZ2V0Q2xvc2VzdFBhcmVudCA9IGZ1bmN0aW9uIChlbCwgbWF0Y2gpIHtcbiAgLy8gcCA9IHBhcmVudCBlbGVtZW50XG4gIHZhciBwID0gbWF0Y2g7XG4gIHZhciBlID0gZWw7XG4gIGlmIChlLnBhcmVudEVsZW1lbnQgPT09IHApIHJldHVybiBwOyAvLyB0cmF2ZXJzZSB1cCB0aGUgZG9tIHRyZWUgdW50aWwgd2UgZ2V0IHRvIHRoZSBwYXJlbnRcblxuICB3aGlsZSAoZS5wYXJlbnRFbGVtZW50ICE9PSBwKSB7XG4gICAgZSA9IGUucGFyZW50RWxlbWVudDtcbiAgfSAvLyByZXR1cm4gcGFyZW50IGVsZW1lbnRcblxuXG4gIHJldHVybiBwO1xufTtcbi8qXG4gIGNvbXB1dGVTY3JvbGxPZmZzZXRzIPCfk4pcbiAgLS0tXG4gIGNvbXB1dGVTY3JvbGxPZmZzZXRzIGZvciBTdGlja3liaXRzXG4gIC0gZGVmaW5lc1xuICAgIC0gb2Zmc2V0XG4gICAgLSBzdGFydFxuICAgIC0gc3RvcFxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5jb21wdXRlU2Nyb2xsT2Zmc2V0cyA9IGZ1bmN0aW9uIGNvbXB1dGVTY3JvbGxPZmZzZXRzKGl0ZW0pIHtcbiAgdmFyIGl0ID0gaXRlbTtcbiAgdmFyIHAgPSBpdC5wcm9wcztcbiAgdmFyIGVsID0gaXQuZWw7XG4gIHZhciBwYXJlbnQgPSBpdC5wYXJlbnQ7XG4gIHZhciBpc0N1c3RvbSA9ICF0aGlzLmlzV2luICYmIHAucG9zaXRpb25WYWwgPT09ICdmaXhlZCc7XG4gIHZhciBpc0JvdHRvbSA9IHAudmVydGljYWxQb3NpdGlvbiAhPT0gJ2JvdHRvbSc7XG4gIHZhciBzY3JvbGxFbE9mZnNldCA9IGlzQ3VzdG9tID8gcC5zY3JvbGxFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgOiAwO1xuICB2YXIgc3RpY2t5U3RhcnQgPSBpc0N1c3RvbSA/IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBzY3JvbGxFbE9mZnNldCA6IHBhcmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gIHZhciBzdGlja3lDaGFuZ2VPZmZzZXQgPSBwLmN1c3RvbVN0aWNreUNoYW5nZU51bWJlciAhPT0gbnVsbCA/IHAuY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyIDogZWwub2Zmc2V0SGVpZ2h0O1xuICBpdC5vZmZzZXQgPSBzY3JvbGxFbE9mZnNldCArIHAuc3RpY2t5Qml0U3RpY2t5T2Zmc2V0O1xuICBpdC5zdGlja3lTdGFydCA9IGlzQm90dG9tID8gc3RpY2t5U3RhcnQgLSBpdC5vZmZzZXQgOiAwO1xuICBpdC5zdGlja3lDaGFuZ2UgPSBpdC5zdGlja3lTdGFydCArIHN0aWNreUNoYW5nZU9mZnNldDtcbiAgaXQuc3RpY2t5U3RvcCA9IGlzQm90dG9tID8gc3RpY2t5U3RhcnQgKyBwYXJlbnQub2Zmc2V0SGVpZ2h0IC0gKGl0LmVsLm9mZnNldEhlaWdodCArIGl0Lm9mZnNldCkgOiBzdGlja3lTdGFydCArIHBhcmVudC5vZmZzZXRIZWlnaHQ7XG4gIHJldHVybiBpdDtcbn07XG4vKlxuICB0b2dnbGVDbGFzc2VzIOKalu+4j1xuICAtLS1cbiAgdG9nZ2xlcyBjbGFzc2VzIChmb3Igb2xkZXIgYnJvd3NlciBzdXBwb3J0KVxuICByID0gcmVtb3ZlZCBjbGFzc1xuICBhID0gYWRkZWQgY2xhc3NcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUudG9nZ2xlQ2xhc3NlcyA9IGZ1bmN0aW9uIChlbCwgciwgYSkge1xuICB2YXIgZSA9IGVsO1xuICB2YXIgY0FycmF5ID0gZS5jbGFzc05hbWUuc3BsaXQoJyAnKTtcbiAgaWYgKGEgJiYgY0FycmF5LmluZGV4T2YoYSkgPT09IC0xKSBjQXJyYXkucHVzaChhKTtcbiAgdmFyIHJJdGVtID0gY0FycmF5LmluZGV4T2Yocik7XG4gIGlmIChySXRlbSAhPT0gLTEpIGNBcnJheS5zcGxpY2Uockl0ZW0sIDEpO1xuICBlLmNsYXNzTmFtZSA9IGNBcnJheS5qb2luKCcgJyk7XG59O1xuLypcbiAgbWFuYWdlU3RhdGUg8J+TnVxuICAtLS1cbiAgLSBkZWZpbmVzIHRoZSBzdGF0ZVxuICAgIC0gbm9ybWFsXG4gICAgLSBzdGlja3lcbiAgICAtIHN0dWNrXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLm1hbmFnZVN0YXRlID0gZnVuY3Rpb24gbWFuYWdlU3RhdGUoaXRlbSkge1xuICAvLyBjYWNoZSBvYmplY3RcbiAgdmFyIGl0ID0gaXRlbTtcbiAgdmFyIGUgPSBpdC5lbDtcbiAgdmFyIHAgPSBpdC5wcm9wcztcbiAgdmFyIHN0YXRlID0gaXQuc3RhdGU7XG4gIHZhciBzdGFydCA9IGl0LnN0aWNreVN0YXJ0O1xuICB2YXIgY2hhbmdlID0gaXQuc3RpY2t5Q2hhbmdlO1xuICB2YXIgc3RvcCA9IGl0LnN0aWNreVN0b3A7XG4gIHZhciBzdGwgPSBlLnN0eWxlOyAvLyBjYWNoZSBwcm9wc1xuXG4gIHZhciBucyA9IHAubm9TdHlsZXM7XG4gIHZhciBwdiA9IHAucG9zaXRpb25WYWw7XG4gIHZhciBzZSA9IHAuc2Nyb2xsRWw7XG4gIHZhciBzdGlja3kgPSBwLnN0aWNreUNsYXNzO1xuICB2YXIgc3RpY2t5Q2hhbmdlID0gcC5zdGlja3lDaGFuZ2VDbGFzcztcbiAgdmFyIHN0dWNrID0gcC5zdHVja0NsYXNzO1xuICB2YXIgdnAgPSBwLnZlcnRpY2FsUG9zaXRpb247XG4gIC8qXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgLS0tXG4gICAgLSB1c2UgckFGXG4gICAgLSBvciBzdHViIHJBRlxuICAqL1xuXG4gIHZhciByQUZTdHViID0gZnVuY3Rpb24gckFGRHVtbXkoZikge1xuICAgIGYoKTtcbiAgfTtcblxuICB2YXIgckFGID0gIXRoaXMuaXNXaW4gPyByQUZTdHViIDogd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHJBRlN0dWI7XG4gIC8qXG4gICAgZGVmaW5lIHNjcm9sbCB2YXJzXG4gICAgLS0tXG4gICAgLSBzY3JvbGxcbiAgICAtIG5vdFN0aWNreVxuICAgIC0gaXNTdGlja3lcbiAgICAtIGlzU3R1Y2tcbiAgKi9cblxuICB2YXIgdEMgPSB0aGlzLnRvZ2dsZUNsYXNzZXM7XG4gIHZhciBzY3JvbGwgPSB0aGlzLmlzV2luID8gd2luZG93LnNjcm9sbFkgfHwgd2luZG93LnBhZ2VZT2Zmc2V0IDogc2Uuc2Nyb2xsVG9wO1xuICB2YXIgbm90U3RpY2t5ID0gc2Nyb2xsID4gc3RhcnQgJiYgc2Nyb2xsIDwgc3RvcCAmJiAoc3RhdGUgPT09ICdkZWZhdWx0JyB8fCBzdGF0ZSA9PT0gJ3N0dWNrJyk7XG4gIHZhciBpc1N0aWNreSA9IHNjcm9sbCA8PSBzdGFydCAmJiBzdGF0ZSA9PT0gJ3N0aWNreSc7XG4gIHZhciBpc1N0dWNrID0gc2Nyb2xsID49IHN0b3AgJiYgc3RhdGUgPT09ICdzdGlja3knO1xuICAvKlxuICAgIFVubmFtZWQgYXJyb3cgZnVuY3Rpb25zIHdpdGhpbiB0aGlzIGJsb2NrXG4gICAgLS0tXG4gICAgLSBoZWxwIHdhbnRlZCBvciBkaXNjdXNzaW9uXG4gICAgLSB2aWV3IHRlc3Quc3RpY2t5Yml0cy5qc1xuICAgICAgLSBgc3RpY2t5Yml0cyAubWFuYWdlU3RhdGUgIGBwb3NpdGlvbjogZml4ZWRgIGludGVyZmFjZWAgZm9yIG1vcmUgYXdhcmVuZXNzIPCfkYBcbiAgKi9cblxuICBpZiAobm90U3RpY2t5KSB7XG4gICAgaXQuc3RhdGUgPSAnc3RpY2t5JztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3R1Y2ssIHN0aWNreSk7XG4gICAgICBzdGwucG9zaXRpb24gPSBwdjtcbiAgICAgIGlmIChucykgcmV0dXJuO1xuICAgICAgc3RsLmJvdHRvbSA9ICcnO1xuICAgICAgc3RsW3ZwXSA9IHAuc3RpY2t5Qml0U3RpY2t5T2Zmc2V0ICsgXCJweFwiO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzU3RpY2t5KSB7XG4gICAgaXQuc3RhdGUgPSAnZGVmYXVsdCc7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0aWNreSk7XG4gICAgICBpZiAocHYgPT09ICdmaXhlZCcpIHN0bC5wb3NpdGlvbiA9ICcnO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzU3R1Y2spIHtcbiAgICBpdC5zdGF0ZSA9ICdzdHVjayc7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0aWNreSwgc3R1Y2spO1xuICAgICAgaWYgKHB2ICE9PSAnZml4ZWQnIHx8IG5zKSByZXR1cm47XG4gICAgICBzdGwudG9wID0gJyc7XG4gICAgICBzdGwuYm90dG9tID0gJzAnO1xuICAgICAgc3RsLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBpc1N0aWNreUNoYW5nZSA9IHNjcm9sbCA+PSBjaGFuZ2UgJiYgc2Nyb2xsIDw9IHN0b3A7XG4gIHZhciBpc05vdFN0aWNreUNoYW5nZSA9IHNjcm9sbCA8IGNoYW5nZSB8fCBzY3JvbGwgPiBzdG9wO1xuICB2YXIgc3R1YiA9ICdzdHViJzsgLy8gYSBzdHViIGNzcyBjbGFzcyB0byByZW1vdmVcblxuICBpZiAoaXNOb3RTdGlja3lDaGFuZ2UpIHtcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5Q2hhbmdlKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChpc1N0aWNreUNoYW5nZSkge1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdHViLCBzdGlja3lDaGFuZ2UpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGl0O1xufTtcbi8qXG4gIHJlbW92ZXMgYW4gaW5zdGFuY2Ug8J+Ri1xuICAtLS0tLS0tLVxuICAtIGNsZWFudXAgaW5zdGFuY2VcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbiByZW1vdmVJbnN0YW5jZShpbnN0YW5jZSkge1xuICB2YXIgZSA9IGluc3RhbmNlLmVsO1xuICB2YXIgcCA9IGluc3RhbmNlLnByb3BzO1xuICB2YXIgdEMgPSB0aGlzLnRvZ2dsZUNsYXNzZXM7XG4gIGUuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgZS5zdHlsZVtwLnZlcnRpY2FsUG9zaXRpb25dID0gJyc7XG4gIHRDKGUsIHAuc3RpY2t5Q2xhc3MpO1xuICB0QyhlLCBwLnN0dWNrQ2xhc3MpO1xuICB0QyhlLnBhcmVudE5vZGUsIHAucGFyZW50Q2xhc3MpO1xufTtcbi8qXG4gIGNsZWFudXAg8J+bgVxuICAtLS0tLS0tLVxuICAtIGNsZWFucyB1cCBlYWNoIGluc3RhbmNlXG4gIC0gY2xlYXJzIGluc3RhbmNlXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UucHJvcHMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2Uuc3RhdGVDb250YWluZXIpO1xuICAgIHRoaXMucmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UpO1xuICB9XG5cbiAgdGhpcy5tYW5hZ2VTdGF0ZSA9IGZhbHNlO1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xufTtcbi8qXG4gIGV4cG9ydFxuICAtLS0tLS0tLVxuICBleHBvcnRzIFN0aWNrQml0cyB0byBiZSB1c2VkIPCfj4FcbiovXG5cblxuZnVuY3Rpb24gc3RpY2t5Yml0cyh0YXJnZXQsIG8pIHtcbiAgcmV0dXJuIG5ldyBTdGlja3liaXRzKHRhcmdldCwgbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreWJpdHM7XG4iLCIvKiEgZ3Vtc2hvZWpzIHYzLjUuMCB8IChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGkgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly9naXRodWIuY29tL2NmZXJkaW5hbmRpL2d1bXNob2UgKi9cbiEoZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQoZSkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoZSk6ZS5ndW1zaG9lPXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzLndpbmRvd3x8dGhpcy5nbG9iYWwsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0LG4sbyxyLGEsYyxpLGw9e30scz1cInF1ZXJ5U2VsZWN0b3JcImluIGRvY3VtZW50JiZcImFkZEV2ZW50TGlzdGVuZXJcImluIGUmJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSx1PVtdLGY9e3NlbGVjdG9yOlwiW2RhdGEtZ3Vtc2hvZV0gYVwiLHNlbGVjdG9ySGVhZGVyOlwiW2RhdGEtZ3Vtc2hvZS1oZWFkZXJdXCIsY29udGFpbmVyOmUsb2Zmc2V0OjAsYWN0aXZlQ2xhc3M6XCJhY3RpdmVcIixzY3JvbGxEZWxheTohMSxjYWxsYmFjazpmdW5jdGlvbigpe319LGQ9ZnVuY3Rpb24oZSx0LG4pe2lmKFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJnQuY2FsbChuLGVbb10sbyxlKTtlbHNlIGZvcih2YXIgcj0wLGE9ZS5sZW5ndGg7cjxhO3IrKyl0LmNhbGwobixlW3JdLHIsZSl9LHY9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PSExLG49MCxvPWFyZ3VtZW50cy5sZW5ndGg7XCJbb2JqZWN0IEJvb2xlYW5dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSYmKHQ9YXJndW1lbnRzWzBdLG4rKyk7Zm9yKDtuPG87bisrKXt2YXIgcj1hcmd1bWVudHNbbl07IShmdW5jdGlvbihuKXtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobltvXSk/ZVtvXT12KCEwLGVbb10sbltvXSk6ZVtvXT1uW29dKX0pKHIpfXJldHVybiBlfSxtPWZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLm1heChlLnNjcm9sbEhlaWdodCxlLm9mZnNldEhlaWdodCxlLmNsaWVudEhlaWdodCl9LGc9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpfSxoPWZ1bmN0aW9uKGUpe3ZhciBuPTA7aWYoZS5vZmZzZXRQYXJlbnQpZG97bis9ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudH13aGlsZShlKTtlbHNlIG49ZS5vZmZzZXRUb3A7cmV0dXJuIG49bi1hLXQub2Zmc2V0LG4+PTA/bjowfSxwPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIG4udG9wPj0wJiZuLmxlZnQ+PTAmJm4uYm90dG9tPD0oZS5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkmJm4ucmlnaHQ8PShlLmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCl9LHk9ZnVuY3Rpb24oKXt1LnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZGlzdGFuY2U+dC5kaXN0YW5jZT8tMTplLmRpc3RhbmNlPHQuZGlzdGFuY2U/MTowfSkpfTtsLnNldERpc3RhbmNlcz1mdW5jdGlvbigpe289ZygpLGE9cj9tKHIpK2gocik6MCxkKHUsKGZ1bmN0aW9uKGUpe2UuZGlzdGFuY2U9aChlLnRhcmdldCl9KSkseSgpfTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodC5zZWxlY3Rvcik7ZChlLChmdW5jdGlvbihlKXtpZihlLmhhc2gpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5oYXNoKTt0JiZ1LnB1c2goe25hdjplLHRhcmdldDp0LHBhcmVudDpcImxpXCI9PT1lLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2UucGFyZW50Tm9kZTpudWxsLGRpc3RhbmNlOjB9KX19KSl9LEg9ZnVuY3Rpb24oKXtjJiYoYy5uYXYuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSxjLnBhcmVudCYmYy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSl9LEM9ZnVuY3Rpb24oZSl7SCgpLGUubmF2LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksZS5wYXJlbnQmJmUucGFyZW50LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksdC5jYWxsYmFjayhlKSxjPXtuYXY6ZS5uYXYscGFyZW50OmUucGFyZW50fX07bC5nZXRDdXJyZW50TmF2PWZ1bmN0aW9uKCl7dmFyIG49ZS5wYWdlWU9mZnNldDtpZihlLmlubmVySGVpZ2h0K24+PW8mJnAodVswXS50YXJnZXQpKXJldHVybiBDKHVbMF0pLHVbMF07Zm9yKHZhciByPTAsYT11Lmxlbmd0aDtyPGE7cisrKXt2YXIgYz11W3JdO2lmKGMuZGlzdGFuY2U8PW4pcmV0dXJuIEMoYyksY31IKCksdC5jYWxsYmFjaygpfTt2YXIgTD1mdW5jdGlvbigpe2QodSwoZnVuY3Rpb24oZSl7ZS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHQuYWN0aXZlQ2xhc3MpJiYoYz17bmF2OmUubmF2LHBhcmVudDplLnBhcmVudH0pfSkpfTtsLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0JiYodC5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSx1PVtdLHQ9bnVsbCxuPW51bGwsbz1udWxsLHI9bnVsbCxhPW51bGwsYz1udWxsLGk9bnVsbCl9O3ZhciBFPWZ1bmN0aW9uKGUpe3dpbmRvdy5jbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2wuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCl9KSw2Nil9LGo9ZnVuY3Rpb24oZSl7bnx8KG49c2V0VGltZW91dCgoZnVuY3Rpb24oKXtuPW51bGwsXCJzY3JvbGxcIj09PWUudHlwZSYmbC5nZXRDdXJyZW50TmF2KCksXCJyZXNpemVcIj09PWUudHlwZSYmKGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCkpfSksNjYpKX07cmV0dXJuIGwuaW5pdD1mdW5jdGlvbihlKXtzJiYobC5kZXN0cm95KCksdD12KGYsZXx8e30pLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0LnNlbGVjdG9ySGVhZGVyKSxiKCksMCE9PXUubGVuZ3RoJiYoTCgpLGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCksdC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuc2Nyb2xsRGVsYXk/dC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLEUsITEpOnQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSkpfSxsfSkpOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmV4cG9ydCBjb25zdCB0b2dnbGVFeHBhbmRhYmxlID0gKFxuICB0b2dnbGVFbGVtZW50LFxuICB7XG4gICAgY29udGV4dCA9IGRvY3VtZW50LFxuICAgIGZvcmNlQ2xvc2UgPSBmYWxzZSxcbiAgICBjbG9zZVNpYmxpbmdzID0gZmFsc2UsXG4gICAgc2libGluZ3NTZWxlY3RvciA9ICdbYXJpYS1jb250cm9sc11bYXJpYS1leHBhbmRlZF0nLFxuICB9ID0ge31cbikgPT4ge1xuICBpZiAoIXRvZ2dsZUVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBHZXQgdGFyZ2V0IGVsZW1lbnRcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICApO1xuXG4gIC8vIEV4aXQgaWYgbm8gdGFyZ2V0IGZvdW5kXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IGN1cnJlbnQgc3RhdHVzXG4gIGNvbnN0IGlzRXhwYW5kZWQgPVxuICAgIGZvcmNlQ2xvc2UgPT09IHRydWUgfHxcbiAgICB0b2dnbGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG5cbiAgLy8gVG9nZ2xlIHRoZSBleHBhbmRhYmxlL2NvbGxhcHNpYmxlXG4gIHRvZ2dsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgIWlzRXhwYW5kZWQpO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGlzRXhwYW5kZWQpO1xuXG4gIC8vIFRvZ2dsZSBsYWJlbCBpZiBwb3NzaWJsZVxuICBpZiAoIWlzRXhwYW5kZWQgJiYgdG9nZ2xlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtZXhwYW5kZWQnKSkge1xuICAgIHRvZ2dsZUVsZW1lbnQuaW5uZXJIVE1MID0gdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtZXhwYW5kZWQnKTtcbiAgfSBlbHNlIGlmIChpc0V4cGFuZGVkICYmIHRvZ2dsZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsLWNvbGxhcHNlZCcpKSB7XG4gICAgdG9nZ2xlRWxlbWVudC5pbm5lckhUTUwgPSB0b2dnbGVFbGVtZW50LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLWxhYmVsLWNvbGxhcHNlZCdcbiAgICApO1xuICB9XG5cbiAgLy8gQ2xvc2Ugc2libGluZ3MgaWYgcmVxdWVzdGVkXG4gIGlmIChjbG9zZVNpYmxpbmdzID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2libGluZ3NBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgLmNhbGwoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNpYmxpbmdzU2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcihzaWJsaW5nID0+IHNpYmxpbmcgIT09IHRvZ2dsZUVsZW1lbnQpO1xuXG4gICAgc2libGluZ3NBcnJheS5mb3JFYWNoKHNpYmxpbmcgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZShzaWJsaW5nLCB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmNlQ2xvc2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gSGVscGVyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRoZSBleHBhbmRhYmxlcyBvbiBwYWdlIGxvYWRcbmV4cG9ydCBjb25zdCBpbml0RXhwYW5kYWJsZXMgPSAoXG4gIHNlbGVjdG9yID0gJ1thcmlhLWNvbnRyb2xzXVthcmlhLWV4cGFuZGVkXScsXG4gIGNvbnRleHQgPSBkb2N1bWVudFxuKSA9PiB7XG4gIGNvbnN0IG5vZGVzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICk7XG5cbiAgbm9kZXNBcnJheS5mb3JFYWNoKG5vZGUgPT5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKG5vZGUsIHsgY29udGV4dCB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICApO1xufTtcbiIsIi8qKlxuICogTmF2aWdhdGlvbiBpbnBhZ2UgcmVsYXRlZCBiZWhhdmlvcnMuXG4gKi9cblxuaW1wb3J0IHN0aWNreWJpdHMgZnJvbSAnc3RpY2t5Yml0cyc7XG5pbXBvcnQgZ3Vtc2hvZSBmcm9tICdndW1zaG9lanMnO1xuaW1wb3J0IHsgdG9nZ2xlRXhwYW5kYWJsZSB9IGZyb20gJ0BlY2wvZ2VuZXJpYy1jb21wb25lbnQtZXhwYW5kYWJsZSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JbnBhZ2VzID0gKHtcbiAgc3RpY2t5U2VsZWN0b3I6IHN0aWNreVNlbGVjdG9yID0gJy5lY2wtaW5wYWdlLW5hdmlnYXRpb24nLFxuICBzdGlja3lPZmZzZXQ6IHN0aWNreU9mZnNldCA9IDAsXG4gIHNweVNlbGVjdG9yOiBzcHlTZWxlY3RvciA9ICcuZWNsLWlucGFnZS1uYXZpZ2F0aW9uX19saW5rJyxcbiAgc3B5Q2xhc3M6IHNweUNsYXNzID0gJ2VjbC1pbnBhZ2UtbmF2aWdhdGlvbl9fbGluay0taXMtYWN0aXZlJyxcbiAgc3B5VHJpZ2dlcjogc3B5VHJpZ2dlciA9ICcuZWNsLWlucGFnZS1uYXZpZ2F0aW9uX190cmlnZ2VyJyxcbiAgc3B5T2Zmc2V0OiBzcHlPZmZzZXQgPSAyMCxcbiAgdG9nZ2xlU2VsZWN0b3I6IHRvZ2dsZVNlbGVjdG9yID0gJy5lY2wtaW5wYWdlLW5hdmlnYXRpb25fX3RyaWdnZXInLFxuICBsaW5rc1NlbGVjdG9yOiBsaW5rc1NlbGVjdG9yID0gJy5lY2wtaW5wYWdlLW5hdmlnYXRpb25fX2xpbmsnLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIGxldCBzdGlja3lJbnN0YW5jZTtcblxuICAvLyBBQ1RJT05TXG4gIGZ1bmN0aW9uIGluaXRTdGlja3koKSB7XG4gICAgc3RpY2t5SW5zdGFuY2UgPSBzdGlja3liaXRzKHN0aWNreVNlbGVjdG9yLCB7XG4gICAgICBzdGlja3lCaXRTdGlja3lPZmZzZXQ6IHN0aWNreU9mZnNldCxcbiAgICAgIHVzZVN0aWNreUNsYXNzZXM6IHRydWUsXG4gICAgICBwYXJlbnRDbGFzczogJ2VjbC1pbnBhZ2UtbmF2aWdhdGlvbl9fcGFyZW50JyxcbiAgICAgIHN0aWNreUNsYXNzOiAnZWNsLWlucGFnZS1uYXZpZ2F0aW9uLS1zdGlja3knLFxuICAgICAgc3R1Y2tDbGFzczogJ2VjbC1pbnBhZ2UtbmF2aWdhdGlvbi0tc3R1Y2snLFxuICAgICAgc3RpY2t5Q2hhbmdlQ2xhc3M6ICdlY2wtaW5wYWdlLW5hdmlnYXRpb24tLWNoYW5nZWQnLFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVN0aWNreSgpIHtcbiAgICBpZiAoc3RpY2t5SW5zdGFuY2UpIHtcbiAgICAgIHN0aWNreUluc3RhbmNlLmNsZWFudXAoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2Nyb2xsU3B5KCkge1xuICAgIGd1bXNob2UuaW5pdCh7XG4gICAgICBzZWxlY3Rvcjogc3B5U2VsZWN0b3IsXG4gICAgICBhY3RpdmVDbGFzczogc3B5Q2xhc3MsXG4gICAgICBvZmZzZXQ6IHNweU9mZnNldCxcbiAgICAgIGNhbGxiYWNrKG5hdikge1xuICAgICAgICBpZiAoIW5hdikgcmV0dXJuO1xuICAgICAgICBjb25zdCBuYXZpZ2F0aW9uVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNweVRyaWdnZXIpO1xuICAgICAgICBuYXZpZ2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gbmF2Lm5hdi5pbm5lckhUTUw7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVzdHJveVNjcm9sbFNweSgpIHtcbiAgICBndW1zaG9lLmRlc3Ryb3koKTtcbiAgfVxuXG4gIC8vIEluaXRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjb25zdCBpbnBhZ2VOYXZFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzdGlja3lTZWxlY3Rvcik7XG4gICAgY29uc3QgdG9nZ2xlRWxlbWVudCA9IGlucGFnZU5hdkVsZW1lbnQucXVlcnlTZWxlY3Rvcih0b2dnbGVTZWxlY3Rvcik7XG4gICAgY29uc3QgbmF2TGlua3MgPSBpbnBhZ2VOYXZFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwobGlua3NTZWxlY3Rvcik7XG5cbiAgICBpbml0U3RpY2t5KCk7XG4gICAgaW5pdFNjcm9sbFNweSgpO1xuXG4gICAgdG9nZ2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZSh0b2dnbGVFbGVtZW50LCB7IGNvbnRleHQ6IGlucGFnZU5hdkVsZW1lbnQgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT5cbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUV4cGFuZGFibGUodG9nZ2xlRWxlbWVudCwge1xuICAgICAgICAgIGNvbnRleHQ6IGlucGFnZU5hdkVsZW1lbnQsXG4gICAgICAgICAgZm9yY2VDbG9zZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBEZXN0cm95XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveVNjcm9sbFNweSgpO1xuICAgIGRlc3Ryb3lTdGlja3koKTtcbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbklucGFnZXM7XG4iLCJpbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlY2wvZ2VuZXJpYy1iYXNlL2hlbHBlcnMvZG9tJztcbmltcG9ydCB7IHRvZ2dsZUV4cGFuZGFibGUgfSBmcm9tICdAZWNsL2dlbmVyaWMtY29tcG9uZW50LWV4cGFuZGFibGUnO1xuXG5jb25zdCBvbkNsaWNrID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBpZiAobm9kZSAmJiBub2RlLmhhc0F0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpKSB7XG4gICAgY29uc3QgaGFzUG9wdXAgPSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpO1xuICAgIGlmIChoYXNQb3B1cCA9PT0gJycgfHwgaGFzUG9wdXAgPT09ICd0cnVlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKG5vZGUsIHtcbiAgICAgICAgY29udGV4dDogbWVudSxcbiAgICAgICAgY2xvc2VTaWJsaW5nczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb25LZXlkb3duID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBjb25zdCBjdXJyZW50VGFiID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBwcmV2aW91c1RhYkl0ZW0gPVxuICAgIGN1cnJlbnRUYWIucHJldmlvdXNFbGVtZW50U2libGluZyB8fFxuICAgIGN1cnJlbnRUYWIucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICBjb25zdCBuZXh0VGFiSXRlbSA9XG4gICAgY3VycmVudFRhYi5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY3VycmVudFRhYi5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIC8vIGRvbid0IGNhdGNoIGtleSBldmVudHMgd2hlbiDijJggb3IgQWx0IG1vZGlmaWVyIGlzIHByZXNlbnRcbiAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSkgcmV0dXJuO1xuXG4gIC8vIGNhdGNoIGxlZnQvcmlnaHQgYW5kIHVwL2Rvd24gYXJyb3cga2V5IGV2ZW50c1xuICAvLyBpZiBuZXcgbmV4dC9wcmV2IHRhYiBhdmFpbGFibGUsIHNob3cgaXQgYnkgcGFzc2luZyB0YWIgYW5jaG9yIHRvIHNob3dUYWIgbWV0aG9kXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgLy8gRU5URVIgb3IgU1BBQ0VcbiAgICBjYXNlIDEzOlxuICAgIGNhc2UgMzI6XG4gICAgICBvbkNsaWNrKGUuY3VycmVudFRhcmdldCwgbWVudSkoZSk7XG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgTEVGVCBhbmQgVVBcbiAgICBjYXNlIDM3OlxuICAgIGNhc2UgMzg6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcmV2aW91c1RhYkl0ZW0ucXVlcnlTZWxlY3RvcignYScpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgUklHSFQgYW5kIERPV05cbiAgICBjYXNlIDM5OlxuICAgIGNhc2UgNDA6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0VGFiSXRlbS5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1lZ2FtZW51ID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51JyxcbiAgdG9nZ2xlU2VsZWN0b3I6IHRvZ2dsZVNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X190b2dnbGUnLFxuICBsaXN0U2VsZWN0b3I6IGxpc3RTZWxlY3RvciA9ICcuZWNsLW5hdmlnYXRpb24tbWVudV9fcm9vdCcsXG4gIGxpbmtTZWxlY3RvcjogbGlua1NlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X19saW5rJyxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBtZWdhbWVudXNBcnJheSA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICBtZWdhbWVudXNBcnJheS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgIC8vIE1ha2UgdGhlIHRvZ2dsZSBleHBhbmRhYmxlXG4gICAgY29uc3QgdG9nZ2xlID0gbWVudS5xdWVyeVNlbGVjdG9yKHRvZ2dsZVNlbGVjdG9yKTtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0b2dnbGVFeHBhbmRhYmxlKHRvZ2dsZSwgeyBjb250ZXh0OiBtZW51IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBsaW5rc1xuICAgIGNvbnN0IGxpc3QgPSBtZW51LnF1ZXJ5U2VsZWN0b3IobGlzdFNlbGVjdG9yKTtcblxuICAgIC8vIEdldCBleHBhbmRhYmxlcyB3aXRoaW4gdGhlIGxpc3RcbiAgICBjb25zdCBub2Rlc0FycmF5ID0gcXVlcnlBbGwobGlua1NlbGVjdG9yLCBsaXN0KTtcblxuICAgIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKG5vZGUsIGxpc3QpKTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bihub2RlLCBsaXN0KSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVnYW1lbnU7XG4iLCIvKipcbiAqIFNpZGUgbmF2aWdhdGlvbiByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG5pbXBvcnQgc3RpY2t5Yml0cyBmcm9tICdzdGlja3liaXRzJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgbmF2aWdhdGlvblNpZGUgPSAoe1xuICBzdGlja3lTZWxlY3Rvcjogc3RpY2t5U2VsZWN0b3IgPSAnLmVjbC1zaWRlLW5hdmlnYXRpb25fX3RvZ2dsZScsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiBpbml0U3RpY2t5KCkge1xuICAgIC8vIGluaXQgc3RpY2t5IG1lbnVcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICBzdGlja3liaXRzKHN0aWNreVNlbGVjdG9yLCB7IHVzZVN0aWNreUNsYXNzZXM6IHRydWUgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBzY3JvbGxUb1RvcCgpIHtcbiAgICBjb25zdCB0b2dnbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFxuICAgICAgc3RpY2t5U2VsZWN0b3Iuc3Vic3RyaW5nKDEpXG4gICAgKVswXTtcblxuICAgIGlmICh0b2dnbGUpIHtcbiAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJykgPT09ICdmYWxzZScpIHtcbiAgICAgICAgICBlLnRhcmdldC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5pdFN0aWNreSgpO1xuICAgIHNjcm9sbFRvVG9wKCk7XG4gIH1cblxuICBpbml0KCk7XG5cbiAgLy8gUkVWRUFMIEFQSVxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvblNpZGU7XG4iLCIvKipcbiAqIFRhYmxlcyByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZWNsVGFibGVzKGVsZW1lbnRzID0gbnVsbCkge1xuICBjb25zdCB0YWJsZXMgPVxuICAgIGVsZW1lbnRzIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VjbC10YWJsZS0tcmVzcG9uc2l2ZScpO1xuICBbXS5mb3JFYWNoLmNhbGwodGFibGVzLCB0YWJsZSA9PiB7XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IFtdO1xuICAgIGxldCB0ZXh0Q29sc3BhbiA9ICcnO1xuICAgIGxldCBjaSA9IDA7XG4gICAgbGV0IGNuID0gW107XG5cbiAgICAvLyBUaGUgcm93cyBpbiBhIHRhYmxlIGJvZHkuXG4gICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcblxuICAgIC8vIFRoZSBoZWFkZXJzIGluIGEgdGFibGUuXG4gICAgY29uc3QgaGVhZGVycyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RoZWFkIHRyIHRoJyk7XG5cbiAgICAvLyBUaGUgbnVtYmVyIG9mIG1haW4gaGVhZGVycy5cbiAgICBjb25zdCBoZWFkRmlyc3QgPVxuICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhlYWQgdHInKVswXS5xdWVyeVNlbGVjdG9yQWxsKCd0aCcpLmxlbmd0aCAtIDE7XG5cbiAgICAvLyBOdW1iZXIgb2YgY2VsbHMgcGVyIHJvdy5cbiAgICBjb25zdCBjZWxsUGVyUm93ID0gdGFibGVcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpWzBdXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgndGQnKS5sZW5ndGg7XG5cbiAgICAvLyBQb3NpdGlvbiBvZiB0aGUgZXZlbnR1YWwgY29sc3BhbiBlbGVtZW50LlxuICAgIGxldCBjb2xzcGFuSW5kZXggPSAtMTtcblxuICAgIC8vIEJ1aWxkIHRoZSBhcnJheSB3aXRoIGFsbCB0aGUgXCJsYWJlbHNcIlxuICAgIC8vIEFsc28gZ2V0IHBvc2l0aW9uIG9mIHRoZSBldmVudHVhbCBjb2xzcGFuIGVsZW1lbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChoZWFkZXJzW2ldLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpKSB7XG4gICAgICAgIGNvbHNwYW5JbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlclRleHRbaV0gPSBbXTtcbiAgICAgIGhlYWRlclRleHRbaV0gPSBoZWFkZXJzW2ldLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYSBjb2xzcGFuLCB3ZSBoYXZlIHRvIHByZXBhcmUgdGhlIGRhdGEgZm9yIGl0LlxuICAgIGlmIChjb2xzcGFuSW5kZXggIT09IC0xKSB7XG4gICAgICB0ZXh0Q29sc3BhbiA9IGhlYWRlclRleHQuc3BsaWNlKGNvbHNwYW5JbmRleCwgMSk7XG4gICAgICBjaSA9IGNvbHNwYW5JbmRleDtcbiAgICAgIGNuID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhbY29sc3Bhbl0nKVswXS5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKTtcblxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjbjsgYyArPSAxKSB7XG4gICAgICAgIGhlYWRlclRleHQuc3BsaWNlKGNpICsgYywgMCwgaGVhZGVyVGV4dFtoZWFkRmlyc3QgKyBjXSk7XG4gICAgICAgIGhlYWRlclRleHQuc3BsaWNlKGhlYWRGaXJzdCArIDEgKyBjLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3IgZXZlcnkgcm93LCBzZXQgdGhlIGF0dHJpYnV0ZXMgd2UgdXNlIHRvIG1ha2UgdGhpcyBoYXBwZW4uXG4gICAgW10uZm9yRWFjaC5jYWxsKHRhYmxlUm93cywgcm93ID0+IHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbFBlclJvdzsgaiArPSAxKSB7XG4gICAgICAgIGlmIChoZWFkZXJUZXh0W2pdID09PSAnJyB8fCBoZWFkZXJUZXh0W2pdID09PSAnXFx1MDBhMCcpIHtcbiAgICAgICAgICByb3dcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpXG4gICAgICAgICAgICBbal0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlY2wtdGFibGVfX2hlYWRpbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKVtqXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGgnLCBoZWFkZXJUZXh0W2pdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xzcGFuSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2NvbHNwYW5JbmRleF07XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VjbC10YWJsZV9fZ3JvdXAtbGFiZWwnKTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10aC1ncm91cCcsIHRleHRDb2xzcGFuKTtcblxuICAgICAgICAgIGZvciAobGV0IGMgPSAxOyBjIDwgY247IGMgKz0gMSkge1xuICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpXG4gICAgICAgICAgICAgIFtjb2xzcGFuSW5kZXggKyBjXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICAnZWNsLXRhYmxlX19ncm91cF9lbGVtZW50J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWNsVGFibGVzO1xuIiwiLy8gSGVhdmlseSBpbnNwaXJlZCBieSB0aGUgdGFiIGNvbXBvbmVudCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVuZC9mcmVuZC5jb1xuXG5pbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlY2wvZXUtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IHRhYnMgPSAoe1xuICBzZWxlY3Rvcjogc2VsZWN0b3IgPSAnLmVjbC10YWJzJyxcbiAgdGFibGlzdFNlbGVjdG9yOiB0YWJsaXN0U2VsZWN0b3IgPSAnLmVjbC10YWJzX190YWJsaXN0JyxcbiAgdGFicGFuZWxTZWxlY3RvcjogdGFicGFuZWxTZWxlY3RvciA9ICcuZWNsLXRhYnNfX3RhYnBhbmVsJyxcbiAgdGFiZWxlbWVudHNTZWxlY3RvcjogdGFiZWxlbWVudHNTZWxlY3RvciA9IGAke3RhYmxpc3RTZWxlY3Rvcn0gbGlgLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIC8vIFNFVFVQXG4gIC8vIHNldCB0YWIgZWxlbWVudCBOb2RlTGlzdFxuICBjb25zdCB0YWJDb250YWluZXJzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuXG4gIC8vIEFDVElPTlNcbiAgZnVuY3Rpb24gc2hvd1RhYih0YXJnZXQsIGdpdmVGb2N1cyA9IHRydWUpIHtcbiAgICBjb25zdCBzaWJsaW5nVGFicyA9IHF1ZXJ5QWxsKFxuICAgICAgYCR7dGFibGlzdFNlbGVjdG9yfSBsaWAsXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgKTtcbiAgICBjb25zdCBzaWJsaW5nVGFicGFuZWxzID0gcXVlcnlBbGwoXG4gICAgICB0YWJwYW5lbFNlbGVjdG9yLFxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICk7XG5cbiAgICAvLyBzZXQgaW5hY3RpdmVzXG4gICAgc2libGluZ1RhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgdGFiLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XG4gICAgICB0YWIucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJyk7XG4gICAgfSk7XG5cbiAgICBzaWJsaW5nVGFicGFuZWxzLmZvckVhY2godGFicGFuZWwgPT4ge1xuICAgICAgdGFicGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfSk7XG5cbiAgICAvLyBzZXQgYWN0aXZlcyBhbmQgZm9jdXNcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAndHJ1ZScpO1xuICAgIGlmIChnaXZlRm9jdXMpIHRhcmdldC5mb2N1cygpO1xuICAgIGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpKVxuICAgICAgLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgfVxuXG4gIC8vIEVWRU5UU1xuICBmdW5jdGlvbiBldmVudFRhYkNsaWNrKGUpIHtcbiAgICBzaG93VGFiKGUuY3VycmVudFRhcmdldCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBsb29rIGludG8gcmVtb3ZlIGlkL3NldHRpbWVvdXQvcmVpbnN0YXRlIGlkIGFzIGFuIGFsdGVybmF0aXZlIHRvIHByZXZlbnREZWZhdWx0XG4gIH1cblxuICBmdW5jdGlvbiBldmVudFRhYktleWRvd24oZSkge1xuICAgIC8vIGNvbGxlY3QgdGFiIHRhcmdldHMsIGFuZCB0aGVpciBwYXJlbnRzJyBwcmV2L25leHQgKG9yIGZpcnN0L2xhc3QpXG4gICAgY29uc3QgY3VycmVudFRhYiA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBwcmV2aW91c1RhYkl0ZW0gPVxuICAgICAgY3VycmVudFRhYi5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8XG4gICAgICBjdXJyZW50VGFiLnBhcmVudEVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICBjb25zdCBuZXh0VGFiSXRlbSA9XG4gICAgICBjdXJyZW50VGFiLm5leHRFbGVtZW50U2libGluZyB8fFxuICAgICAgY3VycmVudFRhYi5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gICAgLy8gZG9uJ3QgY2F0Y2gga2V5IGV2ZW50cyB3aGVuIOKMmCBvciBBbHQgbW9kaWZpZXIgaXMgcHJlc2VudFxuICAgIGlmIChlLm1ldGFLZXkgfHwgZS5hbHRLZXkpIHJldHVybjtcblxuICAgIC8vIGNhdGNoIGxlZnQvcmlnaHQgYW5kIHVwL2Rvd24gYXJyb3cga2V5IGV2ZW50c1xuICAgIC8vIGlmIG5ldyBuZXh0L3ByZXYgdGFiIGF2YWlsYWJsZSwgc2hvdyBpdCBieSBwYXNzaW5nIHRhYiBhbmNob3IgdG8gc2hvd1RhYiBtZXRob2RcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6XG4gICAgICAgIHNob3dUYWIocHJldmlvdXNUYWJJdGVtKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzk6XG4gICAgICBjYXNlIDQwOlxuICAgICAgICBzaG93VGFiKG5leHRUYWJJdGVtKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIEJJTkRJTkdTXG4gIGZ1bmN0aW9uIGJpbmRUYWJzRXZlbnRzKHRhYkNvbnRhaW5lcikge1xuICAgIGNvbnN0IHRhYnNFbGVtZW50cyA9IHF1ZXJ5QWxsKHRhYmVsZW1lbnRzU2VsZWN0b3IsIHRhYkNvbnRhaW5lcik7XG4gICAgLy8gYmluZCBhbGwgdGFiIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIHRhYnNFbGVtZW50cy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudFRhYkNsaWNrKTtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnRUYWJLZXlkb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVuYmluZFRhYnNFdmVudHModGFiQ29udGFpbmVyKSB7XG4gICAgY29uc3QgdGFic0VsZW1lbnRzID0gcXVlcnlBbGwodGFiZWxlbWVudHNTZWxlY3RvciwgdGFiQ29udGFpbmVyKTtcbiAgICAvLyB1bmJpbmQgYWxsIHRhYiBjbGljayBhbmQga2V5ZG93biBldmVudHNcbiAgICB0YWJzRWxlbWVudHMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRUYWJDbGljayk7XG4gICAgICB0YWIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50VGFiS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBERVNUUk9ZXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgdGFiQ29udGFpbmVycy5mb3JFYWNoKHVuYmluZFRhYnNFdmVudHMpO1xuICB9XG5cbiAgLy8gSU5JVFxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIHRhYkNvbnRhaW5lcnMuZm9yRWFjaChiaW5kVGFic0V2ZW50cyk7XG4gIH1cblxuICAvLyBBdXRvbWF0aWNhbGx5IGluaXRcbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgdGFicztcbiIsIi8qKlxuICogVGltZWxpbmVcbiAqL1xuXG5jb25zdCBleHBhbmRUaW1lbGluZSA9IChcbiAgdGltZWxpbmUsXG4gIGJ1dHRvbixcbiAge1xuICAgIGNsYXNzVG9SZW1vdmUgPSAnZWNsLXRpbWVsaW5lX19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgICBoaWRkZW5FbGVtZW50c1NlbGVjdG9yID0gJy5lY2wtdGltZWxpbmVfX2l0ZW0tLW92ZXItbGltaXQnLFxuICB9ID0ge31cbikgPT4ge1xuICBpZiAoIXRpbWVsaW5lKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICB0aW1lbGluZS5xdWVyeVNlbGVjdG9yQWxsKGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IpXG4gICk7XG5cbiAgLy8gUmVtb3ZlIGV4dHJhIGNsYXNzXG4gIGhpZGRlbkVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzVG9SZW1vdmUpO1xuICB9KTtcblxuICAvLyBSZW1vdmUgYnV0dHRvblxuICBidXR0b24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChidXR0b24pO1xufTtcblxuLy8gSGVscGVyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRoZSBleHBhbmRhYmxlcyBvbiBwYWdlIGxvYWRcbmV4cG9ydCBjb25zdCB0aW1lbGluZXMgPSAoe1xuICBzZWxlY3RvciA9ICcuZWNsLXRpbWVsaW5lJyxcbiAgYnV0dG9uU2VsZWN0b3IgPSAnLmVjbC10aW1lbGluZV9fYnV0dG9uJyxcbiAgaGlkZGVuRWxlbWVudHNTZWxlY3RvciA9ICcuZWNsLXRpbWVsaW5lX19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgY2xhc3NUb1JlbW92ZSA9ICdlY2wtdGltZWxpbmVfX2l0ZW0tLW92ZXItbGltaXQnLFxuICBjb250ZXh0ID0gZG9jdW1lbnQsXG59ID0ge30pID0+IHtcbiAgY29uc3Qgbm9kZXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgKTtcblxuICBub2Rlc0FycmF5LmZvckVhY2gobm9kZSA9PiB7XG4gICAgY29uc3QgYnV0dG9uID0gY29udGV4dC5xdWVyeVNlbGVjdG9yKGJ1dHRvblNlbGVjdG9yKTtcblxuICAgIGlmIChidXR0b24pIHtcbiAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICAgIGV4cGFuZFRpbWVsaW5lKG5vZGUsIGJ1dHRvbiwgeyBjbGFzc1RvUmVtb3ZlLCBoaWRkZW5FbGVtZW50c1NlbGVjdG9yIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0aW1lbGluZXM7XG4iLCIvKipcbiAqIFRpbWVsaW5lXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnQGVjbC9nZW5lcmljLWNvbXBvbmVudC10aW1lbGluZSc7XG4iLCIvLyBFeHBvcnQgY29tcG9uZW50c1xuXG5leHBvcnQgKiBmcm9tICdAZWNsL2V1LWNvbXBvbmVudC1hY2NvcmRpb24nO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtY2Fyb3VzZWwnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtY29udGV4dC1uYXYnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtZHJvcGRvd24nO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtZGlhbG9nJztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZXUtY29tcG9uZW50LWV4cGFuZGFibGUnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtZm9ybS1maWxlLXVwbG9hZCc7XG5leHBvcnQgKiBmcm9tICdAZWNsL2V1LWNvbXBvbmVudC1sYW5nLXNlbGVjdC1wYWdlJztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZXUtY29tcG9uZW50LW1lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtaW5wYWdlLW5hdmlnYXRpb24nO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtbmF2aWdhdGlvbi1tZW51JztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZXUtY29tcG9uZW50LXNpZGUtbmF2aWdhdGlvbic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2V1LWNvbXBvbmVudC10YWJsZSc7XG5leHBvcnQgKiBmcm9tICdAZWNsL2V1LWNvbXBvbmVudC10YWInO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1jb21wb25lbnQtdGltZWxpbmUnO1xuIiwiLy8gRXhwb3J0IGNvbXBvbmVudHNcblxuZXhwb3J0ICogZnJvbSAnQGVjbC9ldS1wcmVzZXQtZnVsbCc7XG4iXSwibmFtZXMiOlsicXVlcnlBbGwiLCJzZWxlY3RvciIsImNvbnRleHQiLCJkb2N1bWVudCIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY2NvcmRpb25zIiwiaGVhZGVyU2VsZWN0b3IiLCJ3aW5kb3ciLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhY2NvcmRpb25Db250YWluZXJzIiwiaGlkZVBhbmVsIiwidGFyZ2V0IiwiYWN0aXZlUGFuZWwiLCJnZXRFbGVtZW50QnlJZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInNob3dQYW5lbCIsInRvZ2dsZVBhbmVsIiwiZ2l2ZUhlYWRlckZvY3VzIiwiaGVhZGVyU2V0IiwiaSIsImZvY3VzIiwiZXZlbnRIZWFkZXJDbGljayIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZXZlbnRIZWFkZXJLZXlkb3duIiwiY3VycmVudEhlYWRlciIsImlzTW9kaWZpZXJLZXkiLCJtZXRhS2V5IiwiYWx0S2V5IiwidGhpc0NvbnRhaW5lciIsInBhcmVudE5vZGUiLCJ0aGVzZUhlYWRlcnMiLCJjdXJyZW50SGVhZGVySW5kZXgiLCJpbmRleE9mIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwicHJldmlvdXNIZWFkZXJJbmRleCIsImxlbmd0aCIsIm5leHRIZWFkZXJJbmRleCIsImJpbmRBY2NvcmRpb25FdmVudHMiLCJhY2NvcmRpb25Db250YWluZXIiLCJhY2NvcmRpb25IZWFkZXJzIiwiZm9yRWFjaCIsImFjY29yZGlvbkhlYWRlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ1bmJpbmRBY2NvcmRpb25FdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGVzdHJveSIsImluaXQiLCJGVU5DX0VSUk9SX1RFWFQiLCJOQU4iLCJzeW1ib2xUYWciLCJyZVRyaW0iLCJyZUlzQmFkSGV4IiwicmVJc0JpbmFyeSIsInJlSXNPY3RhbCIsImZyZWVQYXJzZUludCIsInBhcnNlSW50IiwiZnJlZUdsb2JhbCIsImJhYmVsSGVscGVycy50eXBlb2YiLCJnbG9iYWwiLCJPYmplY3QiLCJmcmVlU2VsZiIsInNlbGYiLCJyb290IiwiRnVuY3Rpb24iLCJvYmplY3RQcm90byIsInByb3RvdHlwZSIsIm9iamVjdFRvU3RyaW5nIiwidG9TdHJpbmciLCJuYXRpdmVNYXgiLCJNYXRoIiwibWF4IiwibmF0aXZlTWluIiwibWluIiwibm93IiwiRGF0ZSIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJvcHRpb25zIiwibGFzdEFyZ3MiLCJsYXN0VGhpcyIsIm1heFdhaXQiLCJyZXN1bHQiLCJ0aW1lcklkIiwibGFzdENhbGxUaW1lIiwibGFzdEludm9rZVRpbWUiLCJsZWFkaW5nIiwibWF4aW5nIiwidHJhaWxpbmciLCJUeXBlRXJyb3IiLCJ0b051bWJlciIsImlzT2JqZWN0IiwiaW52b2tlRnVuYyIsInRpbWUiLCJhcmdzIiwidGhpc0FyZyIsInVuZGVmaW5lZCIsImFwcGx5IiwibGVhZGluZ0VkZ2UiLCJzZXRUaW1lb3V0IiwidGltZXJFeHBpcmVkIiwicmVtYWluaW5nV2FpdCIsInRpbWVTaW5jZUxhc3RDYWxsIiwidGltZVNpbmNlTGFzdEludm9rZSIsInNob3VsZEludm9rZSIsInRyYWlsaW5nRWRnZSIsImNhbmNlbCIsImNsZWFyVGltZW91dCIsImZsdXNoIiwiZGVib3VuY2VkIiwiaXNJbnZva2luZyIsImFyZ3VtZW50cyIsInZhbHVlIiwidHlwZSIsImlzT2JqZWN0TGlrZSIsImlzU3ltYm9sIiwib3RoZXIiLCJ2YWx1ZU9mIiwicmVwbGFjZSIsImlzQmluYXJ5IiwidGVzdCIsImNhcm91c2VscyIsInNlbGVjdG9ySWQiLCJjdXJyZW50U2xpZGUiLCJjYXJvdXNlbCIsInNsaWRlcyIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0TGlzdEl0ZW1XaWR0aCIsIm9mZnNldFdpZHRoIiwiZ29Ub1NsaWRlIiwibiIsInJlbW92ZSIsImFkZCIsInNldE9mZnNldCIsIml0ZW1XaWR0aCIsInRyIiwic3R5bGUiLCJNb3pUcmFuc2Zvcm0iLCJtc1RyYW5zZm9ybSIsIk9UcmFuc2Zvcm0iLCJXZWJraXRUcmFuc2Zvcm0iLCJ0cmFuc2Zvcm0iLCJhbm5vdW5jZUN1cnJlbnRTbGlkZSIsInRleHRDb250ZW50Iiwic2hvd0ltYWdlSW5mb3JtYXRpb24iLCJpbmZvQXJlYXMiLCJhcmVhIiwiZGlzcGxheSIsInByZXZpb3VzU2xpZGUiLCJuZXh0U2xpZGUiLCJhZGRDYXJvdXNlbENvbnRyb2xzIiwibmF2Q29udHJvbHMiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJyZW1vdmVDYXJvdXNlbENvbnRyb2xzIiwiY29udHJvbHMiLCJyZW1vdmVDaGlsZCIsImFkZExpdmVSZWdpb24iLCJsaXZlUmVnaW9uIiwicmVtb3ZlTGl2ZVJlZ2lvbiIsImRlYm91bmNlQ2IiLCJleHBhbmRDb250ZXh0dWFsTmF2IiwiY29udGV4dHVhbE5hdiIsImJ1dHRvbiIsImNsYXNzVG9SZW1vdmUiLCJoaWRkZW5FbGVtZW50c1NlbGVjdG9yIiwiaGlkZGVuRWxlbWVudHMiLCJlbGVtZW50IiwiY29udGV4dHVhbE5hdnMiLCJidXR0b25TZWxlY3RvciIsIm5vZGVzQXJyYXkiLCJub2RlIiwiY29udGFpbnMiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImRyb3Bkb3duIiwiZHJvcGRvd25zQXJyYXkiLCJBcnJheSIsImlzSW5zaWRlIiwiZHJvcGRvd25TZWxlY3Rpb24iLCJldmVudCIsImRyb3Bkb3duQnV0dG9uIiwiZHJvcGRvd25Cb2R5IiwiZGlhbG9ncyIsInRyaWdnZXJFbGVtZW50c1NlbGVjdG9yIiwiZGlhbG9nV2luZG93SWQiLCJkaWFsb2dPdmVybGF5SWQiLCJ0cmlnZ2VyRWxlbWVudHMiLCJkaWFsb2dXaW5kb3ciLCJkaWFsb2dPdmVybGF5IiwiYm9keSIsImZvY3VzYWJsZUVsZW1lbnRzIiwiZm9jdXNlZEVsQmVmb3JlT3BlbiIsImZpcnN0Rm9jdXNhYmxlRWxlbWVudCIsImxhc3RGb2N1c2FibGVFbGVtZW50IiwiY2xvc2UiLCJoYW5kbGVLZXlEb3duIiwiS0VZX1RBQiIsIktFWV9FU0MiLCJoYW5kbGVCYWNrd2FyZFRhYiIsImFjdGl2ZUVsZW1lbnQiLCJoYW5kbGVGb3J3YXJkVGFiIiwic2hpZnRLZXkiLCJvcGVuIiwiYmluZERpYWxvZ0V2ZW50cyIsImVsZW1lbnRzIiwidW5iaW5kRGlhbG9nRXZlbnRzIiwidG9nZ2xlRXhwYW5kYWJsZSIsInRvZ2dsZUVsZW1lbnQiLCJmb3JjZUNsb3NlIiwiY2xvc2VTaWJsaW5ncyIsInNpYmxpbmdzU2VsZWN0b3IiLCJpc0V4cGFuZGVkIiwiaGFzQXR0cmlidXRlIiwic2libGluZ3NBcnJheSIsImZpbHRlciIsInNpYmxpbmciLCJpbml0RXhwYW5kYWJsZXMiLCJmaWxlVXBsb2FkcyIsImlucHV0U2VsZWN0b3IiLCJ2YWx1ZVNlbGVjdG9yIiwiYnJvd3NlU2VsZWN0b3IiLCJmaWxlVXBsb2FkQ29udGFpbmVycyIsInVwZGF0ZUZpbGVOYW1lIiwiZmlsZXMiLCJmaWxlbmFtZSIsImZpbGUiLCJuYW1lIiwibWVzc2FnZUVsZW1lbnQiLCJldmVudFZhbHVlQ2hhbmdlIiwiZmlsZVVwbG9hZEVsZW1lbnRzIiwiZmlsZVVwbG9hZEVsZW1lbnQiLCJldmVudEJyb3dzZUtleWRvd24iLCJpbnB1dEVsZW1lbnRzIiwiaW5wdXRFbGVtZW50IiwiY2xpY2siLCJiaW5kRmlsZVVwbG9hZEV2ZW50cyIsImZpbGVVcGxvYWRDb250YWluZXIiLCJmaWxlVXBsb2FkSW5wdXRzIiwiZmlsZVVwbG9hZElucHV0IiwiZmlsZVVwbG9hZEJyb3dzZXMiLCJmaWxlVXBsb2FkQnJvd3NlIiwidW5iaW5kRmlsZVVwbG9hZEV2ZW50cyIsImVjbExhbmdTZWxlY3RQYWdlcyIsInRvZ2dsZUNsYXNzIiwibGlzdFNlbGVjdG9yIiwiZHJvcGRvd25TZWxlY3RvciIsImRyb3Bkb3duT25DaGFuZ2UiLCJsYW5nU2VsZWN0UGFnZXNDb250YWluZXJzIiwidG9nZ2xlIiwibHNwIiwib2Zmc2V0TGVmdCIsImRpc21pc3NNZXNzYWdlIiwibWVzc2FnZSIsImluaXRNZXNzYWdlcyIsInNlbGVjdG9yQ2xhc3MiLCJtZXNzYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwYXJlbnRFbGVtZW50IiwiU3RpY2t5Yml0cyIsIm9iaiIsIm8iLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwicHJvcHMiLCJjdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIiLCJub1N0eWxlcyIsInN0aWNreUJpdFN0aWNreU9mZnNldCIsInBhcmVudENsYXNzIiwic2Nyb2xsRWwiLCJzdGlja3lDbGFzcyIsInN0dWNrQ2xhc3MiLCJzdGlja3lDaGFuZ2VDbGFzcyIsInVzZVN0aWNreUNsYXNzZXMiLCJ2ZXJ0aWNhbFBvc2l0aW9uIiwicCIsInBvc2l0aW9uVmFsIiwiZGVmaW5lUG9zaXRpb24iLCJ2cCIsIm5zIiwicHYiLCJlbHMiLCJpbnN0YW5jZXMiLCJlbCIsInN0eWxlcyIsInBvc2l0aW9uIiwiaW5zdGFuY2UiLCJhZGRJbnN0YW5jZSIsInB1c2giLCJwcmVmaXgiLCJoZWFkIiwic3RpY2t5UHJvcCIsIl90aGlzIiwiaXRlbSIsInBhcmVudCIsImlzV2luIiwic2UiLCJnZXRDbG9zZXN0UGFyZW50IiwiY29tcHV0ZVNjcm9sbE9mZnNldHMiLCJzdGF0ZSIsInN0YXRlQ29udGFpbmVyIiwibWFuYWdlU3RhdGUiLCJtYXRjaCIsIml0IiwiaXNDdXN0b20iLCJpc0JvdHRvbSIsInNjcm9sbEVsT2Zmc2V0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwic3RpY2t5U3RhcnQiLCJzdGlja3lDaGFuZ2VPZmZzZXQiLCJvZmZzZXRIZWlnaHQiLCJvZmZzZXQiLCJzdGlja3lDaGFuZ2UiLCJzdGlja3lTdG9wIiwidG9nZ2xlQ2xhc3NlcyIsInIiLCJhIiwiY0FycmF5Iiwic3BsaXQiLCJySXRlbSIsInNwbGljZSIsImpvaW4iLCJzdGFydCIsImNoYW5nZSIsInN0b3AiLCJzdGwiLCJzdGlja3kiLCJzdHVjayIsInJBRlN0dWIiLCJyQUZEdW1teSIsImYiLCJyQUYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInRDIiwic2Nyb2xsIiwic2Nyb2xsWSIsInBhZ2VZT2Zmc2V0Iiwic2Nyb2xsVG9wIiwibm90U3RpY2t5IiwiaXNTdGlja3kiLCJpc1N0dWNrIiwiYm90dG9tIiwiaXNTdGlja3lDaGFuZ2UiLCJpc05vdFN0aWNreUNoYW5nZSIsInN0dWIiLCJyZW1vdmVJbnN0YW5jZSIsImNsZWFudXAiLCJzdGlja3liaXRzIiwidCIsImRlZmluZSIsImFtZCIsIm1vZHVsZSIsInRoaXMiLCJjIiwibCIsInMiLCJ1Iiwic2VsZWN0b3JIZWFkZXIiLCJjb250YWluZXIiLCJhY3RpdmVDbGFzcyIsInNjcm9sbERlbGF5IiwiY2FsbGJhY2siLCJkIiwiaGFzT3duUHJvcGVydHkiLCJ2IiwibSIsInNjcm9sbEhlaWdodCIsImNsaWVudEhlaWdodCIsImciLCJoIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0VG9wIiwibGVmdCIsImlubmVySGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ5Iiwic29ydCIsImRpc3RhbmNlIiwic2V0RGlzdGFuY2VzIiwiYiIsImhhc2giLCJuYXYiLCJ0YWdOYW1lIiwidG9Mb3dlckNhc2UiLCJIIiwiQyIsImdldEN1cnJlbnROYXYiLCJMIiwiaiIsIkUiLCJuYXZpZ2F0aW9uSW5wYWdlcyIsInN0aWNreVNlbGVjdG9yIiwic3RpY2t5T2Zmc2V0Iiwic3B5U2VsZWN0b3IiLCJzcHlDbGFzcyIsInNweVRyaWdnZXIiLCJzcHlPZmZzZXQiLCJ0b2dnbGVTZWxlY3RvciIsImxpbmtzU2VsZWN0b3IiLCJzdGlja3lJbnN0YW5jZSIsImluaXRTdGlja3kiLCJkZXN0cm95U3RpY2t5IiwiaW5pdFNjcm9sbFNweSIsImd1bXNob2UiLCJuYXZpZ2F0aW9uVGl0bGUiLCJkZXN0cm95U2Nyb2xsU3B5IiwiaW5wYWdlTmF2RWxlbWVudCIsIm5hdkxpbmtzIiwibGluayIsIm9uQ2xpY2siLCJtZW51IiwiaGFzUG9wdXAiLCJvbktleWRvd24iLCJjdXJyZW50VGFiIiwicHJldmlvdXNUYWJJdGVtIiwicHJldmlvdXNFbGVtZW50U2libGluZyIsImxhc3RFbGVtZW50Q2hpbGQiLCJuZXh0VGFiSXRlbSIsIm5leHRFbGVtZW50U2libGluZyIsImZpcnN0RWxlbWVudENoaWxkIiwibWVnYW1lbnUiLCJsaW5rU2VsZWN0b3IiLCJtZWdhbWVudXNBcnJheSIsIm5hdmlnYXRpb25TaWRlIiwic2Nyb2xsVG9Ub3AiLCJzdWJzdHJpbmciLCJzY3JvbGxJbnRvVmlldyIsImVjbFRhYmxlcyIsInRhYmxlcyIsImhlYWRlclRleHQiLCJ0ZXh0Q29sc3BhbiIsImNpIiwiY24iLCJ0YWJsZVJvd3MiLCJ0YWJsZSIsImhlYWRlcnMiLCJoZWFkRmlyc3QiLCJjZWxsUGVyUm93IiwiY29sc3BhbkluZGV4Iiwicm93IiwiY2VsbCIsInRhYnMiLCJ0YWJsaXN0U2VsZWN0b3IiLCJ0YWJwYW5lbFNlbGVjdG9yIiwidGFiZWxlbWVudHNTZWxlY3RvciIsInRhYkNvbnRhaW5lcnMiLCJzaG93VGFiIiwiZ2l2ZUZvY3VzIiwic2libGluZ1RhYnMiLCJzaWJsaW5nVGFicGFuZWxzIiwidGFiIiwicmVtb3ZlQXR0cmlidXRlIiwidGFicGFuZWwiLCJldmVudFRhYkNsaWNrIiwiZXZlbnRUYWJLZXlkb3duIiwiYmluZFRhYnNFdmVudHMiLCJ0YWJDb250YWluZXIiLCJ0YWJzRWxlbWVudHMiLCJ1bmJpbmRUYWJzRXZlbnRzIiwiZXhwYW5kVGltZWxpbmUiLCJ0aW1lbGluZSIsInRpbWVsaW5lcyJdLCJtYXBwaW5ncyI6Ijs7O0VBQUE7QUFDQSxFQUFPLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxDQUFDQyxRQUFEO0VBQUEsTUFBV0MsT0FBWCx1RUFBcUJDLFFBQXJCO0VBQUEsU0FDdEIsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNILFFBQVFJLGdCQUFSLENBQXlCTCxRQUF6QixDQUFkLENBRHNCO0VBQUEsQ0FBakI7O0VDRFA7O0VBSUE7OztBQUdBLE1BQWFNLGFBQWEsU0FBYkEsVUFBYSxHQUdmO0VBQUEsaUZBQVAsRUFBTztFQUFBLDJCQUZUTixRQUVTO0VBQUEsTUFGQ0EsUUFFRCxpQ0FGWSxnQkFFWjtFQUFBLGlDQURUTyxjQUNTO0VBQUEsTUFET0EsY0FDUCx1Q0FEd0Isd0JBQ3hCOztFQUNUO0VBQ0EsTUFDRSxFQUFFLG1CQUFtQkwsUUFBckIsS0FDQSxFQUFFLHNCQUFzQk0sTUFBeEIsQ0FEQSxJQUVBLENBQUNOLFNBQVNPLGVBQVQsQ0FBeUJDLFNBSDVCLEVBS0UsT0FBTyxJQUFQOztFQUVGO0VBQ0E7RUFDQSxNQUFNQyxzQkFBc0JaLFNBQVNDLFFBQVQsQ0FBNUI7O0VBRUE7RUFDQSxXQUFTWSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtFQUN6QjtFQUNBLFFBQU1DLGNBQWNaLFNBQVNhLGNBQVQsQ0FDbEJGLE9BQU9HLFlBQVAsQ0FBb0IsZUFBcEIsQ0FEa0IsQ0FBcEI7O0VBSUFILFdBQU9JLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsT0FBckM7O0VBRUE7RUFDQUgsZ0JBQVlHLFlBQVosQ0FBeUIsYUFBekIsRUFBd0MsTUFBeEM7RUFDRDs7RUFFRCxXQUFTQyxTQUFULENBQW1CTCxNQUFuQixFQUEyQjtFQUN6QjtFQUNBLFFBQU1DLGNBQWNaLFNBQVNhLGNBQVQsQ0FDbEJGLE9BQU9HLFlBQVAsQ0FBb0IsZUFBcEIsQ0FEa0IsQ0FBcEI7O0VBSUE7RUFDQUgsV0FBT0ksWUFBUCxDQUFvQixVQUFwQixFQUFnQyxDQUFoQztFQUNBSixXQUFPSSxZQUFQLENBQW9CLGVBQXBCLEVBQXFDLE1BQXJDOztFQUVBO0VBQ0FILGdCQUFZRyxZQUFaLENBQXlCLGFBQXpCLEVBQXdDLE9BQXhDO0VBQ0Q7O0VBRUQsV0FBU0UsV0FBVCxDQUFxQk4sTUFBckIsRUFBNkI7RUFDM0I7RUFDQSxRQUFJQSxPQUFPRyxZQUFQLENBQW9CLGVBQXBCLE1BQXlDLE1BQTdDLEVBQXFEO0VBQ25ESixnQkFBVUMsTUFBVjtFQUNBO0VBQ0Q7O0VBRURLLGNBQVVMLE1BQVY7RUFDRDs7RUFFRCxXQUFTTyxlQUFULENBQXlCQyxTQUF6QixFQUFvQ0MsQ0FBcEMsRUFBdUM7RUFDckM7RUFDQUQsY0FBVUMsQ0FBVixFQUFhQyxLQUFiO0VBQ0Q7O0VBRUQ7RUFDQSxXQUFTQyxnQkFBVCxDQUEwQkMsQ0FBMUIsRUFBNkI7RUFDM0JOLGdCQUFZTSxFQUFFQyxhQUFkO0VBQ0Q7O0VBRUQsV0FBU0Msa0JBQVQsQ0FBNEJGLENBQTVCLEVBQStCO0VBQzdCO0VBQ0EsUUFBTUcsZ0JBQWdCSCxFQUFFQyxhQUF4QjtFQUNBLFFBQU1HLGdCQUFnQkosRUFBRUssT0FBRixJQUFhTCxFQUFFTSxNQUFyQztFQUNBO0VBQ0EsUUFBTUMsZ0JBQWdCSixjQUFjSyxVQUFkLENBQXlCQSxVQUEvQztFQUNBLFFBQU1DLGVBQWVuQyxTQUFTUSxjQUFULEVBQXlCeUIsYUFBekIsQ0FBckI7RUFDQSxRQUFNRyxxQkFBcUIsR0FBR0MsT0FBSCxDQUFXaEMsSUFBWCxDQUFnQjhCLFlBQWhCLEVBQThCTixhQUE5QixDQUEzQjs7RUFFQTtFQUNBLFFBQUlDLGFBQUosRUFBbUI7O0VBRW5CO0VBQ0E7RUFDQSxZQUFRSixFQUFFWSxPQUFWO0VBQ0UsV0FBSyxFQUFMO0VBQ0EsV0FBSyxFQUFMO0VBQ0VsQixvQkFBWVMsYUFBWjtFQUNBSCxVQUFFYSxjQUFGO0VBQ0E7RUFDRixXQUFLLEVBQUw7RUFDQSxXQUFLLEVBQUw7RUFBUztFQUNQLGNBQU1DLHNCQUNKSix1QkFBdUIsQ0FBdkIsR0FDSUQsYUFBYU0sTUFBYixHQUFzQixDQUQxQixHQUVJTCxxQkFBcUIsQ0FIM0I7RUFJQWYsMEJBQWdCYyxZQUFoQixFQUE4QkssbUJBQTlCO0VBQ0FkLFlBQUVhLGNBQUY7RUFDQTtFQUNEO0VBQ0QsV0FBSyxFQUFMO0VBQ0EsV0FBSyxFQUFMO0VBQVM7RUFDUCxjQUFNRyxrQkFDSk4scUJBQXFCRCxhQUFhTSxNQUFiLEdBQXNCLENBQTNDLEdBQ0lMLHFCQUFxQixDQUR6QixHQUVJLENBSE47RUFJQWYsMEJBQWdCYyxZQUFoQixFQUE4Qk8sZUFBOUI7RUFDQWhCLFlBQUVhLGNBQUY7RUFDQTtFQUNEO0VBQ0Q7RUFDRTtFQTNCSjtFQTZCRDs7RUFFRDtFQUNBLFdBQVNJLG1CQUFULENBQTZCQyxrQkFBN0IsRUFBaUQ7RUFDL0MsUUFBTUMsbUJBQW1CN0MsU0FBU1EsY0FBVCxFQUF5Qm9DLGtCQUF6QixDQUF6QjtFQUNBO0VBQ0FDLHFCQUFpQkMsT0FBakIsQ0FBeUIsMkJBQW1CO0VBQzFDQyxzQkFBZ0JDLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQ3ZCLGdCQUExQztFQUNBc0Isc0JBQWdCQyxnQkFBaEIsQ0FBaUMsU0FBakMsRUFBNENwQixrQkFBNUM7RUFDRCxLQUhEO0VBSUQ7O0VBRUQ7RUFDQSxXQUFTcUIscUJBQVQsQ0FBK0JMLGtCQUEvQixFQUFtRDtFQUNqRCxRQUFNQyxtQkFBbUI3QyxTQUFTUSxjQUFULEVBQXlCb0Msa0JBQXpCLENBQXpCO0VBQ0E7RUFDQUMscUJBQWlCQyxPQUFqQixDQUF5QiwyQkFBbUI7RUFDMUNDLHNCQUFnQkcsbUJBQWhCLENBQW9DLE9BQXBDLEVBQTZDekIsZ0JBQTdDO0VBQ0FzQixzQkFBZ0JHLG1CQUFoQixDQUFvQyxTQUFwQyxFQUErQ3RCLGtCQUEvQztFQUNELEtBSEQ7RUFJRDs7RUFFRDtFQUNBLFdBQVN1QixPQUFULEdBQW1CO0VBQ2pCdkMsd0JBQW9Ca0MsT0FBcEIsQ0FBNEIsOEJBQXNCO0VBQ2hERyw0QkFBc0JMLGtCQUF0QjtFQUNELEtBRkQ7RUFHRDs7RUFFRDtFQUNBLFdBQVNRLElBQVQsR0FBZ0I7RUFDZCxRQUFJeEMsb0JBQW9CNkIsTUFBeEIsRUFBZ0M7RUFDOUI3QiwwQkFBb0JrQyxPQUFwQixDQUE0Qiw4QkFBc0I7RUFDaERILDRCQUFvQkMsa0JBQXBCO0VBQ0QsT0FGRDtFQUdEO0VBQ0Y7O0VBRURROztFQUVBO0VBQ0EsU0FBTztFQUNMQSxjQURLO0VBRUxEO0VBRkssR0FBUDtFQUlELENBdkpNOzs7Ozs7Ozs7Ozs7OztFQ1BQOzs7Ozs7Ozs7O0VBVUEsSUFBSUUsa0JBQWtCLHFCQUF0Qjs7O0VBR0EsSUFBSUMsTUFBTSxJQUFJLENBQWQ7OztFQUdBLElBQUlDLFlBQVksaUJBQWhCOzs7RUFHQSxJQUFJQyxTQUFTLFlBQWI7OztFQUdBLElBQUlDLGFBQWEsb0JBQWpCOzs7RUFHQSxJQUFJQyxhQUFhLFlBQWpCOzs7RUFHQSxJQUFJQyxZQUFZLGFBQWhCOzs7RUFHQSxJQUFJQyxlQUFlQyxRQUFuQjs7O0VBR0EsSUFBSUMsYUFBYUMsUUFBT0MsY0FBUCxLQUFpQixRQUFqQixJQUE2QkEsY0FBN0IsSUFBdUNBLGNBQUFBLENBQU9DLE1BQVBELEtBQWtCQyxNQUF6RCxJQUFtRUQsY0FBcEY7OztFQUdBLElBQUlFLFdBQVcsUUFBT0MsSUFBUCx5Q0FBT0EsSUFBUCxNQUFlLFFBQWYsSUFBMkJBLElBQTNCLElBQW1DQSxLQUFLRixNQUFMLEtBQWdCQSxNQUFuRCxJQUE2REUsSUFBNUU7OztFQUdBLElBQUlDLE9BQU9OLGNBQWNJLFFBQWQsSUFBMEJHLFNBQVMsYUFBVCxHQUFyQzs7O0VBR0EsSUFBSUMsY0FBY0wsT0FBT00sU0FBekI7Ozs7Ozs7RUFPQSxJQUFJQyxpQkFBaUJGLFlBQVlHLFFBQWpDOzs7RUFHQSxJQUFJQyxZQUFZQyxLQUFLQyxHQUFyQjtFQUFBLElBQ0lDLFlBQVlGLEtBQUtHLEdBRHJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQkEsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLEdBQVc7RUFDbkIsU0FBT1gsS0FBS1ksSUFBTCxDQUFVRCxHQUFWLEVBQVA7RUFDRCxDQUZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTBEQSxTQUFTRSxRQUFULENBQWtCQyxJQUFsQixFQUF3QkMsSUFBeEIsRUFBOEJDLE9BQTlCLEVBQXVDO0VBQ3JDLE1BQUlDLFFBQUo7RUFBQSxNQUNJQyxRQURKO0VBQUEsTUFFSUMsT0FGSjtFQUFBLE1BR0lDLE1BSEo7RUFBQSxNQUlJQyxPQUpKO0VBQUEsTUFLSUMsWUFMSjtFQUFBLE1BTUlDLGlCQUFpQixDQU5yQjtFQUFBLE1BT0lDLFVBQVUsS0FQZDtFQUFBLE1BUUlDLFNBQVMsS0FSYjtFQUFBLE1BU0lDLFdBQVcsSUFUZjs7RUFXQSxNQUFJLE9BQU9aLElBQVAsSUFBZSxVQUFuQixFQUErQjtFQUM3QixVQUFNLElBQUlhLFNBQUosQ0FBYzFDLGVBQWQsQ0FBTjtFQUNEO0VBQ0Q4QixTQUFPYSxTQUFTYixJQUFULEtBQWtCLENBQXpCO0VBQ0EsTUFBSWMsU0FBU2IsT0FBVCxDQUFKLEVBQXVCO0VBQ3JCUSxjQUFVLENBQUMsQ0FBQ1IsUUFBUVEsT0FBcEI7RUFDQUMsYUFBUyxhQUFhVCxPQUF0QjtFQUNBRyxjQUFVTSxTQUFTbkIsVUFBVXNCLFNBQVNaLFFBQVFHLE9BQWpCLEtBQTZCLENBQXZDLEVBQTBDSixJQUExQyxDQUFULEdBQTJESSxPQUFyRTtFQUNBTyxlQUFXLGNBQWNWLE9BQWQsR0FBd0IsQ0FBQyxDQUFDQSxRQUFRVSxRQUFsQyxHQUE2Q0EsUUFBeEQ7RUFDRDs7RUFFRCxXQUFTSSxVQUFULENBQW9CQyxJQUFwQixFQUEwQjtFQUN4QixRQUFJQyxPQUFPZixRQUFYO0VBQUEsUUFDSWdCLFVBQVVmLFFBRGQ7O0VBR0FELGVBQVdDLFdBQVdnQixTQUF0QjtFQUNBWCxxQkFBaUJRLElBQWpCO0VBQ0FYLGFBQVNOLEtBQUtxQixLQUFMLENBQVdGLE9BQVgsRUFBb0JELElBQXBCLENBQVQ7RUFDQSxXQUFPWixNQUFQO0VBQ0Q7O0VBRUQsV0FBU2dCLFdBQVQsQ0FBcUJMLElBQXJCLEVBQTJCOztFQUV6QlIscUJBQWlCUSxJQUFqQjs7RUFFQVYsY0FBVWdCLFdBQVdDLFlBQVgsRUFBeUJ2QixJQUF6QixDQUFWOztFQUVBLFdBQU9TLFVBQVVNLFdBQVdDLElBQVgsQ0FBVixHQUE2QlgsTUFBcEM7RUFDRDs7RUFFRCxXQUFTbUIsYUFBVCxDQUF1QlIsSUFBdkIsRUFBNkI7RUFDM0IsUUFBSVMsb0JBQW9CVCxPQUFPVCxZQUEvQjtFQUFBLFFBQ0ltQixzQkFBc0JWLE9BQU9SLGNBRGpDO0VBQUEsUUFFSUgsU0FBU0wsT0FBT3lCLGlCQUZwQjs7RUFJQSxXQUFPZixTQUFTaEIsVUFBVVcsTUFBVixFQUFrQkQsVUFBVXNCLG1CQUE1QixDQUFULEdBQTREckIsTUFBbkU7RUFDRDs7RUFFRCxXQUFTc0IsWUFBVCxDQUFzQlgsSUFBdEIsRUFBNEI7RUFDMUIsUUFBSVMsb0JBQW9CVCxPQUFPVCxZQUEvQjtFQUFBLFFBQ0ltQixzQkFBc0JWLE9BQU9SLGNBRGpDOzs7OztFQU1BLFdBQVFELGlCQUFpQlksU0FBakIsSUFBK0JNLHFCQUFxQnpCLElBQXBELElBQ0x5QixvQkFBb0IsQ0FEZixJQUNzQmYsVUFBVWdCLHVCQUF1QnRCLE9BRC9EO0VBRUQ7O0VBRUQsV0FBU21CLFlBQVQsR0FBd0I7RUFDdEIsUUFBSVAsT0FBT3BCLEtBQVg7RUFDQSxRQUFJK0IsYUFBYVgsSUFBYixDQUFKLEVBQXdCO0VBQ3RCLGFBQU9ZLGFBQWFaLElBQWIsQ0FBUDtFQUNEOztFQUVEVixjQUFVZ0IsV0FBV0MsWUFBWCxFQUF5QkMsY0FBY1IsSUFBZCxDQUF6QixDQUFWO0VBQ0Q7O0VBRUQsV0FBU1ksWUFBVCxDQUFzQlosSUFBdEIsRUFBNEI7RUFDMUJWLGNBQVVhLFNBQVY7Ozs7RUFJQSxRQUFJUixZQUFZVCxRQUFoQixFQUEwQjtFQUN4QixhQUFPYSxXQUFXQyxJQUFYLENBQVA7RUFDRDtFQUNEZCxlQUFXQyxXQUFXZ0IsU0FBdEI7RUFDQSxXQUFPZCxNQUFQO0VBQ0Q7O0VBRUQsV0FBU3dCLE1BQVQsR0FBa0I7RUFDaEIsUUFBSXZCLFlBQVlhLFNBQWhCLEVBQTJCO0VBQ3pCVyxtQkFBYXhCLE9BQWI7RUFDRDtFQUNERSxxQkFBaUIsQ0FBakI7RUFDQU4sZUFBV0ssZUFBZUosV0FBV0csVUFBVWEsU0FBL0M7RUFDRDs7RUFFRCxXQUFTWSxLQUFULEdBQWlCO0VBQ2YsV0FBT3pCLFlBQVlhLFNBQVosR0FBd0JkLE1BQXhCLEdBQWlDdUIsYUFBYWhDLEtBQWIsQ0FBeEM7RUFDRDs7RUFFRCxXQUFTb0MsU0FBVCxHQUFxQjtFQUNuQixRQUFJaEIsT0FBT3BCLEtBQVg7RUFBQSxRQUNJcUMsYUFBYU4sYUFBYVgsSUFBYixDQURqQjs7RUFHQWQsZUFBV2dDLFNBQVg7RUFDQS9CLGVBQVcsSUFBWDtFQUNBSSxtQkFBZVMsSUFBZjs7RUFFQSxRQUFJaUIsVUFBSixFQUFnQjtFQUNkLFVBQUkzQixZQUFZYSxTQUFoQixFQUEyQjtFQUN6QixlQUFPRSxZQUFZZCxZQUFaLENBQVA7RUFDRDtFQUNELFVBQUlHLE1BQUosRUFBWTs7RUFFVkosa0JBQVVnQixXQUFXQyxZQUFYLEVBQXlCdkIsSUFBekIsQ0FBVjtFQUNBLGVBQU9lLFdBQVdSLFlBQVgsQ0FBUDtFQUNEO0VBQ0Y7RUFDRCxRQUFJRCxZQUFZYSxTQUFoQixFQUEyQjtFQUN6QmIsZ0JBQVVnQixXQUFXQyxZQUFYLEVBQXlCdkIsSUFBekIsQ0FBVjtFQUNEO0VBQ0QsV0FBT0ssTUFBUDtFQUNEO0VBQ0QyQixZQUFVSCxNQUFWLEdBQW1CQSxNQUFuQjtFQUNBRyxZQUFVRCxLQUFWLEdBQWtCQSxLQUFsQjtFQUNBLFNBQU9DLFNBQVA7RUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMkJELFNBQVNsQixRQUFULENBQWtCcUIsS0FBbEIsRUFBeUI7RUFDdkIsTUFBSUMsY0FBY0QsS0FBZCx5Q0FBY0EsS0FBZCxDQUFKO0VBQ0EsU0FBTyxDQUFDLENBQUNBLEtBQUYsS0FBWUMsUUFBUSxRQUFSLElBQW9CQSxRQUFRLFVBQXhDLENBQVA7RUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQkQsU0FBU0MsWUFBVCxDQUFzQkYsS0FBdEIsRUFBNkI7RUFDM0IsU0FBTyxDQUFDLENBQUNBLEtBQUYsSUFBVyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWxDO0VBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFtQkQsU0FBU0csUUFBVCxDQUFrQkgsS0FBbEIsRUFBeUI7RUFDdkIsU0FBTyxRQUFPQSxLQUFQLHlDQUFPQSxLQUFQLE1BQWdCLFFBQWhCLElBQ0pFLGFBQWFGLEtBQWIsS0FBdUI5QyxlQUFlbkUsSUFBZixDQUFvQmlILEtBQXBCLEtBQThCL0QsU0FEeEQ7RUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXlCRCxTQUFTeUMsUUFBVCxDQUFrQnNCLEtBQWxCLEVBQXlCO0VBQ3ZCLE1BQUksT0FBT0EsS0FBUCxJQUFnQixRQUFwQixFQUE4QjtFQUM1QixXQUFPQSxLQUFQO0VBQ0Q7RUFDRCxNQUFJRyxTQUFTSCxLQUFULENBQUosRUFBcUI7RUFDbkIsV0FBT2hFLEdBQVA7RUFDRDtFQUNELE1BQUkyQyxTQUFTcUIsS0FBVCxDQUFKLEVBQXFCO0VBQ25CLFFBQUlJLFFBQVEsT0FBT0osTUFBTUssT0FBYixJQUF3QixVQUF4QixHQUFxQ0wsTUFBTUssT0FBTixFQUFyQyxHQUF1REwsS0FBbkU7RUFDQUEsWUFBUXJCLFNBQVN5QixLQUFULElBQW1CQSxRQUFRLEVBQTNCLEdBQWlDQSxLQUF6QztFQUNEO0VBQ0QsTUFBSSxPQUFPSixLQUFQLElBQWdCLFFBQXBCLEVBQThCO0VBQzVCLFdBQU9BLFVBQVUsQ0FBVixHQUFjQSxLQUFkLEdBQXNCLENBQUNBLEtBQTlCO0VBQ0Q7RUFDREEsVUFBUUEsTUFBTU0sT0FBTixDQUFjcEUsTUFBZCxFQUFzQixFQUF0QixDQUFSO0VBQ0EsTUFBSXFFLFdBQVduRSxXQUFXb0UsSUFBWCxDQUFnQlIsS0FBaEIsQ0FBZjtFQUNBLFNBQVFPLFlBQVlsRSxVQUFVbUUsSUFBVixDQUFlUixLQUFmLENBQWIsR0FDSDFELGFBQWEwRCxNQUFNbEgsS0FBTixDQUFZLENBQVosQ0FBYixFQUE2QnlILFdBQVcsQ0FBWCxHQUFlLENBQTVDLENBREcsR0FFRnBFLFdBQVdxRSxJQUFYLENBQWdCUixLQUFoQixJQUF5QmhFLEdBQXpCLEdBQStCLENBQUNnRSxLQUZyQztFQUdEOztFQUVELHNCQUFpQnJDLFFBQWpCOztFQ3JYQTs7O0FBR0EsTUFBYThDLFlBQVksU0FBWkEsU0FBWSxHQUFzRDtFQUFBLGlGQUFQLEVBQU87RUFBQSw2QkFBbkRDLFVBQW1EO0VBQUEsTUFBdkNBLFVBQXVDLG1DQUExQixjQUEwQjs7RUFDN0U7RUFDQSxNQUFJLEVBQUUsbUJBQW1CN0gsUUFBckIsS0FBa0MsRUFBRSxzQkFBc0JNLE1BQXhCLENBQXRDLEVBQXVFO0VBQ3JFLFdBQU8sSUFBUDtFQUNEOztFQUVEO0VBQ0EsTUFBSXdILGVBQWUsQ0FBbkI7RUFDQSxNQUFNQyxXQUFXL0gsU0FBU2EsY0FBVCxDQUF3QmdILFVBQXhCLENBQWpCO0VBQ0EsTUFBTUcsU0FBU25JLFNBQVMscUJBQVQsRUFBZ0NrSSxRQUFoQyxDQUFmO0VBQ0EsTUFBTUUsT0FBT0YsU0FBU0csYUFBVCxDQUF1QixxQkFBdkIsQ0FBYjs7RUFFQSxXQUFTQyxnQkFBVCxHQUE0QjtFQUMxQixXQUFPSixTQUFTRyxhQUFULENBQXVCLHFCQUF2QixFQUE4Q0UsV0FBckQ7RUFDRDs7RUFFRCxXQUFTQyxTQUFULENBQW1CQyxDQUFuQixFQUFzQjtFQUNwQk4sV0FBT0YsWUFBUCxFQUFxQnRILFNBQXJCLENBQStCK0gsTUFBL0IsQ0FBc0MsNkJBQXRDO0VBQ0FULG1CQUFlLENBQUNRLElBQUlOLE9BQU8xRixNQUFaLElBQXNCMEYsT0FBTzFGLE1BQTVDO0VBQ0EwRixXQUFPRixZQUFQLEVBQXFCdEgsU0FBckIsQ0FBK0JnSSxHQUEvQixDQUFtQyw2QkFBbkM7RUFDRDs7RUFFRCxXQUFTQyxTQUFULEdBQXFCO0VBQ25CLFFBQU1DLFlBQVlQLGtCQUFsQjtFQUNBLFFBQU1RLHNCQUFvQixDQUFDYixZQUFELEdBQWdCWSxTQUFwQyxjQUFOOztFQUVBVCxTQUFLVyxLQUFMLENBQVdDLFlBQVgsR0FBMEJGLEVBQTFCLENBSm1CO0VBS25CVixTQUFLVyxLQUFMLENBQVdFLFdBQVgsR0FBeUJILEVBQXpCLENBTG1CO0VBTW5CVixTQUFLVyxLQUFMLENBQVdHLFVBQVgsR0FBd0JKLEVBQXhCLENBTm1CO0VBT25CVixTQUFLVyxLQUFMLENBQVdJLGVBQVgsR0FBNkJMLEVBQTdCLENBUG1CO0VBUW5CVixTQUFLVyxLQUFMLENBQVdLLFNBQVgsR0FBdUJOLEVBQXZCO0VBQ0Q7O0VBRUQsV0FBU08sb0JBQVQsR0FBZ0M7RUFDOUJuQixhQUFTRyxhQUFULENBQ0UsMkJBREYsRUFFRWlCLFdBRkYsR0FFbUJyQixlQUFlLENBRmxDLFdBRXlDRSxPQUFPMUYsTUFGaEQ7RUFHRDs7RUFFRCxXQUFTOEcsb0JBQVQsR0FBZ0M7RUFDOUI7RUFDQSxRQUFNQyxZQUFZeEosU0FBUyxjQUFULENBQWxCO0VBQ0E7RUFDQSxRQUFJd0osU0FBSixFQUFlO0VBQ2I7RUFDQUEsZ0JBQVUxRyxPQUFWLENBQWtCO0VBQUEsZUFBUzJHLEtBQUtWLEtBQUwsQ0FBV1csT0FBWCxHQUFxQixNQUE5QjtFQUFBLE9BQWxCO0VBQ0Q7O0VBRUR4QixhQUFTRyxhQUFULG1CQUF1Q0osWUFBdkMsU0FBeURjLEtBQXpELENBQStEVyxPQUEvRCxHQUNFLE9BREY7RUFFRDs7RUFFRCxXQUFTQyxhQUFULEdBQXlCO0VBQ3ZCbkIsY0FBVVAsZUFBZSxDQUF6QjtFQUNBVztFQUNBUztFQUNBRTtFQUNEOztFQUVELFdBQVNLLFNBQVQsR0FBcUI7RUFDbkJwQixjQUFVUCxlQUFlLENBQXpCO0VBQ0FXO0VBQ0FTO0VBQ0FFO0VBQ0Q7O0VBRUQ7RUFDQSxXQUFTTSxtQkFBVCxHQUErQjtFQUM3QixRQUFNQyxjQUFjM0osU0FBUzRKLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBcEI7O0VBRUFELGdCQUFZRSxTQUFaLEdBQXdCLDJDQUF4Qjs7RUFFQUYsZ0JBQVlHLFNBQVo7O0VBWUFILGdCQUNHekIsYUFESCxDQUVJLGlDQUZKLEVBR0kseUJBSEosRUFLR3JGLGdCQUxILENBS29CLE9BTHBCLEVBSzZCMkcsYUFMN0I7O0VBT0FHLGdCQUNHekIsYUFESCxDQUNpQiw2QkFEakIsRUFDZ0QseUJBRGhELEVBRUdyRixnQkFGSCxDQUVvQixPQUZwQixFQUU2QjRHLFNBRjdCOztFQUlBMUIsYUFDR0csYUFESCxDQUNpQiw2QkFEakIsRUFFRzZCLFdBRkgsQ0FFZUosV0FGZjtFQUdEOztFQUVELFdBQVNLLHNCQUFULEdBQWtDO0VBQ2hDLFFBQU1DLFdBQVdsQyxTQUFTRyxhQUFULENBQXVCLHlCQUF2QixDQUFqQjtFQUNBSCxhQUFTRyxhQUFULENBQXVCLDZCQUF2QixFQUFzRGdDLFdBQXRELENBQWtFRCxRQUFsRTtFQUNEOztFQUVELFdBQVNFLGFBQVQsR0FBeUI7RUFDdkIsUUFBTUMsYUFBYXBLLFNBQVM0SixhQUFULENBQXVCLEtBQXZCLENBQW5CO0VBQ0FRLGVBQVdySixZQUFYLENBQXdCLFdBQXhCLEVBQXFDLFFBQXJDO0VBQ0FxSixlQUFXckosWUFBWCxDQUF3QixhQUF4QixFQUF1QyxNQUF2QztFQUNBcUosZUFBVzVKLFNBQVgsQ0FBcUJnSSxHQUFyQixDQUF5QiwwQkFBekI7RUFDQVQsYUFDR0csYUFESCxDQUNpQiw0QkFEakIsRUFFRzZCLFdBRkgsQ0FFZUssVUFGZjtFQUdEOztFQUVELFdBQVNDLGdCQUFULEdBQTRCO0VBQzFCLFFBQU1ELGFBQWFyQyxTQUFTRyxhQUFULENBQXVCLDJCQUF2QixDQUFuQjtFQUNBSCxhQUNHRyxhQURILENBQ2lCLDRCQURqQixFQUVHZ0MsV0FGSCxDQUVlRSxVQUZmO0VBR0Q7O0VBRUQsTUFBTUUsYUFBYSxTQUFiQSxVQUFhO0VBQUEsV0FDakJ4RixnQkFDRSxZQUFNO0VBQ0oyRDtFQUNELEtBSEgsRUFJRSxHQUpGLEVBS0UsRUFBRXJELFNBQVMsR0FBWCxFQUxGLEdBRGlCO0VBQUEsR0FBbkI7O0VBU0E7RUFDQSxXQUFTbkMsSUFBVCxHQUFnQjtFQUNkeUc7RUFDQVM7RUFDQTlCLGNBQVUsQ0FBVjtFQUNBYTtFQUNBRTs7RUFFQTtFQUNBOUksV0FBT3VDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDeUgsVUFBbEM7RUFDRDs7RUFFRDtFQUNBLFdBQVN0SCxPQUFULEdBQW1CO0VBQ2pCZ0g7RUFDQUs7RUFDQS9KLFdBQU95QyxtQkFBUCxDQUEyQixRQUEzQixFQUFxQ3VILFVBQXJDO0VBQ0Q7O0VBRURySDs7RUFFQTtFQUNBLFNBQU87RUFDTEEsY0FESztFQUVMRDtFQUZLLEdBQVA7RUFJRCxDQTdKTTs7RUNOUDs7OztFQU1BLElBQU11SCxzQkFBc0IsU0FBdEJBLG1CQUFzQixDQUMxQkMsYUFEMEIsRUFFMUJDLE1BRjBCLEVBUXZCO0VBQUEsaUZBREMsRUFDRDtFQUFBLGdDQUpEQyxhQUlDO0VBQUEsTUFKREEsYUFJQyxzQ0FKZSxtQ0FJZjtFQUFBLG1DQUhEQyxzQkFHQztFQUFBLE1BSERBLHNCQUdDLHlDQUh3QixvQ0FHeEI7RUFBQSwwQkFGRDVLLE9BRUM7RUFBQSxNQUZEQSxPQUVDLGdDQUZTQyxRQUVUOztFQUNILE1BQUksQ0FBQ3dLLGFBQUwsRUFBb0I7RUFDbEI7RUFDRDs7RUFFRCxNQUFNSSxpQkFBaUIvSyxTQUFTOEssc0JBQVQsRUFBaUM1SyxPQUFqQyxDQUF2Qjs7RUFFQTtFQUNBNkssaUJBQWVqSSxPQUFmLENBQXVCLG1CQUFXO0VBQ2hDa0ksWUFBUXJLLFNBQVIsQ0FBa0IrSCxNQUFsQixDQUF5Qm1DLGFBQXpCO0VBQ0QsR0FGRDs7RUFJQTtFQUNBRCxTQUFPMUksVUFBUCxDQUFrQm1JLFdBQWxCLENBQThCTyxNQUE5QjtFQUNELENBdEJEOztFQXdCQTtBQUNBLE1BQWFLLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FNbkI7RUFBQSxrRkFBUCxFQUFPO0VBQUEsNkJBTFRoTCxRQUtTO0VBQUEsTUFMVEEsUUFLUyxrQ0FMRSxrQkFLRjtFQUFBLG1DQUpUaUwsY0FJUztFQUFBLE1BSlRBLGNBSVMsd0NBSlEsd0JBSVI7RUFBQSxvQ0FIVEosc0JBR1M7RUFBQSxNQUhUQSxzQkFHUyx5Q0FIZ0Isb0NBR2hCO0VBQUEsa0NBRlRELGFBRVM7RUFBQSxNQUZUQSxhQUVTLHVDQUZPLG1DQUVQO0VBQUEsNEJBRFQzSyxPQUNTO0VBQUEsTUFEVEEsT0FDUyxpQ0FEQ0MsUUFDRDs7RUFDVCxNQUFNZ0wsYUFBYW5MLFNBQVNDLFFBQVQsRUFBbUJDLE9BQW5CLENBQW5COztFQUVBaUwsYUFBV3JJLE9BQVgsQ0FBbUIsZ0JBQVE7RUFDekIsUUFBTThILFNBQVMxSyxRQUFRbUksYUFBUixDQUFzQjZDLGNBQXRCLENBQWY7O0VBRUEsUUFBSU4sTUFBSixFQUFZO0VBQ1ZBLGFBQU81SCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQztFQUFBLGVBQy9CMEgsb0JBQW9CVSxJQUFwQixFQUEwQlIsTUFBMUIsRUFBa0M7RUFDaENDLHNDQURnQztFQUVoQ0M7RUFGZ0MsU0FBbEMsQ0FEK0I7RUFBQSxPQUFqQztFQU1EO0VBQ0YsR0FYRDtFQVlELENBckJNOztFQy9CUDs7Ozs7Ozs7Ozs7RUFXQSxTQUFTTyxRQUFULENBQWtCRCxJQUFsQixFQUF3QjFELEtBQXhCLEVBQStCO0VBQzdCO0VBQ0EsU0FBTzBELFNBQVMxRCxLQUFULElBQWtCLENBQUMsRUFBRTBELEtBQUtFLHVCQUFMLENBQTZCNUQsS0FBN0IsSUFBc0MsRUFBeEMsQ0FBMUI7RUFDRDs7QUFFRCxNQUFhNkQsV0FBVyxTQUFYQSxRQUFXLFdBQVk7RUFDbEMsTUFBTUMsaUJBQWlCQyxNQUFNbEgsU0FBTixDQUFnQm5FLEtBQWhCLENBQXNCQyxJQUF0QixDQUNyQkYsU0FBU0csZ0JBQVQsQ0FBMEJMLFFBQTFCLENBRHFCLENBQXZCOztFQUlBRSxXQUFTNkMsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsaUJBQVM7RUFDMUN3SSxtQkFBZTFJLE9BQWYsQ0FBdUIsNkJBQXFCO0VBQzFDLFVBQU00SSxXQUFXTCxTQUFTTSxpQkFBVCxFQUE0QkMsTUFBTTlLLE1BQWxDLENBQWpCOztFQUVBLFVBQUksQ0FBQzRLLFFBQUwsRUFBZTtFQUNiLFlBQU1HLGlCQUFpQjFMLFNBQVNrSSxhQUFULENBQ2xCcEksUUFEa0IsNkJBQXZCO0VBR0EsWUFBTTZMLGVBQWUzTCxTQUFTa0ksYUFBVCxDQUNoQnBJLFFBRGdCLDRCQUFyQjtFQUdBO0VBQ0EsWUFBSTZMLFlBQUosRUFBa0I7RUFDaEJELHlCQUFlM0ssWUFBZixDQUE0QixlQUE1QixFQUE2QyxLQUE3QztFQUNBNEssdUJBQWE1SyxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLElBQXpDO0VBQ0Q7RUFDRjtFQUNGLEtBaEJEO0VBaUJELEdBbEJEO0VBbUJELENBeEJNOztFQ2RQOzs7Ozs7Ozs7Ozs7QUFZQSxNQUFhNkssVUFBVSxTQUFWQSxPQUFVLEdBSVo7RUFBQSxpRkFBUCxFQUFPO0VBQUEsbUNBSFRDLHVCQUdTO0VBQUEsTUFIZ0JBLHVCQUdoQix5Q0FIMEMsbUJBRzFDO0VBQUEsaUNBRlRDLGNBRVM7RUFBQSxNQUZPQSxjQUVQLHVDQUZ3QixZQUV4QjtFQUFBLGtDQURUQyxlQUNTO0VBQUEsTUFEUUEsZUFDUix3Q0FEMEIsYUFDMUI7O0VBQ1Q7RUFDQSxNQUFJLEVBQUUsbUJBQW1CL0wsUUFBckIsS0FBa0MsRUFBRSxzQkFBc0JNLE1BQXhCLENBQXRDLEVBQXVFO0VBQ3JFLFdBQU8sSUFBUDtFQUNEOztFQUVEO0VBQ0EsTUFBTTBMLGtCQUFrQm5NLFNBQVNnTSx1QkFBVCxDQUF4QjtFQUNBLE1BQU1JLGVBQWVqTSxTQUFTYSxjQUFULENBQXdCaUwsY0FBeEIsQ0FBckI7RUFDQSxNQUFJSSxnQkFBZ0JsTSxTQUFTYSxjQUFULENBQXdCa0wsZUFBeEIsQ0FBcEI7O0VBRUE7RUFDQSxNQUFJLENBQUNHLGFBQUwsRUFBb0I7RUFDbEIsUUFBTXJCLFVBQVU3SyxTQUFTNEosYUFBVCxDQUF1QixLQUF2QixDQUFoQjtFQUNBaUIsWUFBUTlKLFlBQVIsQ0FBcUIsSUFBckIsRUFBMkIsYUFBM0I7RUFDQThKLFlBQVE5SixZQUFSLENBQXFCLE9BQXJCLEVBQThCLHFCQUE5QjtFQUNBOEosWUFBUTlKLFlBQVIsQ0FBcUIsYUFBckIsRUFBb0MsTUFBcEM7RUFDQWYsYUFBU21NLElBQVQsQ0FBY3BDLFdBQWQsQ0FBMEJjLE9BQTFCO0VBQ0FxQixvQkFBZ0JyQixPQUFoQjtFQUNEOztFQUVEO0VBQ0EsTUFBTXVCLG9CQUFvQixHQUFHbk0sS0FBSCxDQUFTQyxJQUFULENBQ3hCTCx5TkFVRW9NLFlBVkYsQ0FEd0IsQ0FBMUI7O0VBZUE7RUFDQSxNQUFJSSxzQkFBc0IsSUFBMUI7O0VBRUE7RUFDQSxNQUFNQyx3QkFBd0JGLGtCQUFrQixDQUFsQixDQUE5QjtFQUNBLE1BQU1HLHVCQUF1Qkgsa0JBQWtCQSxrQkFBa0I5SixNQUFsQixHQUEyQixDQUE3QyxDQUE3Qjs7RUFFQTtFQUNBO0VBQ0EsV0FBU2tLLEtBQVQsQ0FBZWYsS0FBZixFQUFzQjtFQUNwQkEsVUFBTXJKLGNBQU47RUFDQTZKLGlCQUFhbEwsWUFBYixDQUEwQixhQUExQixFQUF5QyxJQUF6QztFQUNBbUwsa0JBQWNuTCxZQUFkLENBQTJCLGFBQTNCLEVBQTBDLElBQTFDOztFQUVBLFFBQUlzTCxtQkFBSixFQUF5QjtFQUN2QkEsMEJBQW9CaEwsS0FBcEI7RUFDRDs7RUFFRHJCLGFBQVNrSSxhQUFULENBQXVCLE1BQXZCLEVBQStCMUgsU0FBL0IsQ0FBeUMrSCxNQUF6QyxDQUFnRCxxQkFBaEQ7RUFDRDs7RUFFRDtFQUNBLFdBQVNrRSxhQUFULENBQXVCbEwsQ0FBdkIsRUFBMEI7RUFDeEIsUUFBTW1MLFVBQVUsQ0FBaEI7RUFDQSxRQUFNQyxVQUFVLEVBQWhCOztFQUVBLGFBQVNDLGlCQUFULEdBQTZCO0VBQzNCLFVBQUk1TSxTQUFTNk0sYUFBVCxLQUEyQlAscUJBQS9CLEVBQXNEO0VBQ3BEL0ssVUFBRWEsY0FBRjtFQUNBbUssNkJBQXFCbEwsS0FBckI7RUFDRDtFQUNGOztFQUVELGFBQVN5TCxnQkFBVCxHQUE0QjtFQUMxQixVQUFJOU0sU0FBUzZNLGFBQVQsS0FBMkJOLG9CQUEvQixFQUFxRDtFQUNuRGhMLFVBQUVhLGNBQUY7RUFDQWtLLDhCQUFzQmpMLEtBQXRCO0VBQ0Q7RUFDRjs7RUFFRCxZQUFRRSxFQUFFWSxPQUFWO0VBQ0U7RUFDQSxXQUFLdUssT0FBTDtFQUNFLFlBQUlOLGtCQUFrQjlKLE1BQWxCLEtBQTZCLENBQWpDLEVBQW9DO0VBQ2xDZixZQUFFYSxjQUFGO0VBQ0E7RUFDRDtFQUNELFlBQUliLEVBQUV3TCxRQUFOLEVBQWdCO0VBQ2RIO0VBQ0QsU0FGRCxNQUVPO0VBQ0xFO0VBQ0Q7RUFDRDtFQUNGLFdBQUtILE9BQUw7RUFDRUg7RUFDQTtFQUNGO0VBQ0U7RUFqQko7RUFtQkQ7O0VBRUQ7RUFDQSxXQUFTUSxJQUFULENBQWN2QixLQUFkLEVBQXFCO0VBQ25CQSxVQUFNckosY0FBTjtFQUNBNkosaUJBQWFsTCxZQUFiLENBQTBCLGFBQTFCLEVBQXlDLEtBQXpDO0VBQ0FtTCxrQkFBY25MLFlBQWQsQ0FBMkIsYUFBM0IsRUFBMEMsS0FBMUM7O0VBRUE7RUFDQTtFQUNBc0wsMEJBQXNCck0sU0FBUzZNLGFBQS9COztFQUVBO0VBQ0FQLDBCQUFzQmpMLEtBQXRCOztFQUVBO0VBQ0E2SyxrQkFBY3JKLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDMkosS0FBeEM7O0VBRUE7RUFDQVAsaUJBQWFwSixnQkFBYixDQUE4QixTQUE5QixFQUF5QzRKLGFBQXpDOztFQUVBek0sYUFBU2tJLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0IxSCxTQUEvQixDQUF5Q2dJLEdBQXpDLENBQTZDLHFCQUE3QztFQUNEOztFQUVEO0VBQ0EsV0FBU3lFLGdCQUFULENBQTBCQyxRQUExQixFQUFvQztFQUNsQ0EsYUFBU3ZLLE9BQVQsQ0FBaUI7RUFBQSxhQUFXa0ksUUFBUWhJLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDbUssSUFBbEMsQ0FBWDtFQUFBLEtBQWpCOztFQUVBO0VBQ0FuTixhQUFTLHVCQUFULEVBQWtDOEMsT0FBbEMsQ0FBMEMsa0JBQVU7RUFDbEQ4SCxhQUFPNUgsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMySixLQUFqQztFQUNELEtBRkQ7RUFHRDs7RUFFRDtFQUNBLFdBQVNXLGtCQUFULENBQTRCRCxRQUE1QixFQUFzQztFQUNwQ0EsYUFBU3ZLLE9BQVQsQ0FBaUI7RUFBQSxhQUFXa0ksUUFBUTlILG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDaUssSUFBckMsQ0FBWDtFQUFBLEtBQWpCOztFQUVBO0VBQ0FuTixhQUFTLHVCQUFULEVBQWtDOEMsT0FBbEMsQ0FBMEMsa0JBQVU7RUFDbEQ4SCxhQUFPMUgsbUJBQVAsQ0FBMkIsT0FBM0IsRUFBb0N5SixLQUFwQztFQUNELEtBRkQ7RUFHRDs7RUFFRDtFQUNBLFdBQVN4SixPQUFULEdBQW1CO0VBQ2pCbUssdUJBQW1CbkIsZUFBbkI7RUFDRDs7RUFFRDtFQUNBLFdBQVMvSSxJQUFULEdBQWdCO0VBQ2QsUUFBSStJLGdCQUFnQjFKLE1BQXBCLEVBQTRCO0VBQzFCMkssdUJBQWlCakIsZUFBakI7RUFDRDtFQUNGOztFQUVEL0k7O0VBRUE7RUFDQSxTQUFPO0VBQ0xBLGNBREs7RUFFTEQ7RUFGSyxHQUFQO0VBSUQsQ0FuS007O0VDZFA7O0FBRUEsTUFBYW9LLG1CQUFtQixTQUFuQkEsZ0JBQW1CLENBQzlCQyxhQUQ4QixFQVEzQjtFQUFBLGlGQURDLEVBQ0Q7RUFBQSwwQkFMRHROLE9BS0M7RUFBQSxNQUxEQSxPQUtDLGdDQUxTQyxRQUtUO0VBQUEsNkJBSkRzTixVQUlDO0VBQUEsTUFKREEsVUFJQyxtQ0FKWSxLQUlaO0VBQUEsZ0NBSERDLGFBR0M7RUFBQSxNQUhEQSxhQUdDLHNDQUhlLEtBR2Y7RUFBQSxtQ0FGREMsZ0JBRUM7RUFBQSxNQUZEQSxnQkFFQyx5Q0FGa0IsZ0NBRWxCOztFQUNILE1BQUksQ0FBQ0gsYUFBTCxFQUFvQjtFQUNsQjtFQUNEOztFQUVEO0VBQ0EsTUFBTTFNLFNBQVNYLFNBQVNhLGNBQVQsQ0FDYndNLGNBQWN2TSxZQUFkLENBQTJCLGVBQTNCLENBRGEsQ0FBZjs7RUFJQTtFQUNBLE1BQUksQ0FBQ0gsTUFBTCxFQUFhO0VBQ1g7RUFDRDs7RUFFRDtFQUNBLE1BQU04TSxhQUNKSCxlQUFlLElBQWYsSUFDQUQsY0FBY3ZNLFlBQWQsQ0FBMkIsZUFBM0IsTUFBZ0QsTUFGbEQ7O0VBSUE7RUFDQXVNLGdCQUFjdE0sWUFBZCxDQUEyQixlQUEzQixFQUE0QyxDQUFDME0sVUFBN0M7RUFDQTlNLFNBQU9JLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUMwTSxVQUFuQzs7RUFFQTtFQUNBLE1BQUksQ0FBQ0EsVUFBRCxJQUFlSixjQUFjSyxZQUFkLENBQTJCLHFCQUEzQixDQUFuQixFQUFzRTtFQUNwRUwsa0JBQWN2RCxTQUFkLEdBQTBCdUQsY0FBY3ZNLFlBQWQsQ0FBMkIscUJBQTNCLENBQTFCO0VBQ0QsR0FGRCxNQUVPLElBQUkyTSxjQUFjSixjQUFjSyxZQUFkLENBQTJCLHNCQUEzQixDQUFsQixFQUFzRTtFQUMzRUwsa0JBQWN2RCxTQUFkLEdBQTBCdUQsY0FBY3ZNLFlBQWQsQ0FDeEIsc0JBRHdCLENBQTFCO0VBR0Q7O0VBRUQ7RUFDQSxNQUFJeU0sa0JBQWtCLElBQXRCLEVBQTRCO0VBQzFCLFFBQU1JLGdCQUFnQnJDLE1BQU1sSCxTQUFOLENBQWdCbkUsS0FBaEIsQ0FDbkJDLElBRG1CLENBQ2RILFFBQVFJLGdCQUFSLENBQXlCcU4sZ0JBQXpCLENBRGMsRUFFbkJJLE1BRm1CLENBRVo7RUFBQSxhQUFXQyxZQUFZUixhQUF2QjtFQUFBLEtBRlksQ0FBdEI7O0VBSUFNLGtCQUFjaEwsT0FBZCxDQUFzQixtQkFBVztFQUMvQnlLLHVCQUFpQlMsT0FBakIsRUFBMEI7RUFDeEI5Tix3QkFEd0I7RUFFeEJ1TixvQkFBWTtFQUZZLE9BQTFCO0VBSUQsS0FMRDtFQU1EO0VBQ0YsQ0F0RE07O0VBd0RQO0FBQ0EsTUFBYVEsa0JBQWtCLFNBQWxCQSxlQUFrQixHQUcxQjtFQUFBLE1BRkhoTyxRQUVHLHVFQUZRLGdDQUVSO0VBQUEsTUFESEMsT0FDRyx1RUFET0MsUUFDUDs7RUFDSCxNQUFNZ0wsYUFBYU0sTUFBTWxILFNBQU4sQ0FBZ0JuRSxLQUFoQixDQUFzQkMsSUFBdEIsQ0FDakJILFFBQVFJLGdCQUFSLENBQXlCTCxRQUF6QixDQURpQixDQUFuQjs7RUFJQWtMLGFBQVdySSxPQUFYLENBQW1CO0VBQUEsV0FDakJzSSxLQUFLcEksZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsYUFBSztFQUNsQ3VLLHVCQUFpQm5DLElBQWpCLEVBQXVCLEVBQUVsTCxnQkFBRixFQUF2QjtFQUNBd0IsUUFBRWEsY0FBRjtFQUNELEtBSEQsQ0FEaUI7RUFBQSxHQUFuQjtFQU1ELENBZE07O0VDM0RQOzs7O0VBTUE7OztBQUdBLE1BQWEyTCxjQUFjLFNBQWRBLFdBQWMsR0FLaEI7RUFBQSxpRkFBUCxFQUFPO0VBQUEsMkJBSlRqTyxRQUlTO0VBQUEsTUFKQ0EsUUFJRCxpQ0FKWSxrQkFJWjtFQUFBLGdDQUhUa08sYUFHUztFQUFBLE1BSE1BLGFBR04sc0NBSHNCLHlCQUd0QjtFQUFBLGdDQUZUQyxhQUVTO0VBQUEsTUFGTUEsYUFFTixzQ0FGc0IseUJBRXRCO0VBQUEsaUNBRFRDLGNBQ1M7RUFBQSxNQURPQSxjQUNQLHVDQUR3QiwwQkFDeEI7O0VBQ1Q7RUFDQSxNQUNFLEVBQUUsbUJBQW1CbE8sUUFBckIsS0FDQSxFQUFFLHNCQUFzQk0sTUFBeEIsQ0FEQSxJQUVBLENBQUNOLFNBQVNPLGVBQVQsQ0FBeUJDLFNBSDVCLEVBS0UsT0FBTyxJQUFQOztFQUVGO0VBQ0E7RUFDQSxNQUFNMk4sdUJBQXVCdE8sU0FBU0MsUUFBVCxDQUE3Qjs7RUFFQTtFQUNBLFdBQVNzTyxjQUFULENBQXdCdkQsT0FBeEIsRUFBaUN3RCxLQUFqQyxFQUF3QztFQUN0QyxRQUFJQSxNQUFNL0wsTUFBTixLQUFpQixDQUFyQixFQUF3Qjs7RUFFeEIsUUFBSWdNLFdBQVcsRUFBZjs7RUFFQSxTQUFLLElBQUlsTixJQUFJLENBQWIsRUFBZ0JBLElBQUlpTixNQUFNL0wsTUFBMUIsRUFBa0NsQixLQUFLLENBQXZDLEVBQTBDO0VBQ3hDLFVBQU1tTixPQUFPRixNQUFNak4sQ0FBTixDQUFiO0VBQ0EsVUFBSSxVQUFVbU4sSUFBZCxFQUFvQjtFQUNsQixZQUFJbk4sSUFBSSxDQUFSLEVBQVc7RUFDVGtOLHNCQUFZLElBQVo7RUFDRDtFQUNEQSxvQkFBWUMsS0FBS0MsSUFBakI7RUFDRDtFQUNGOztFQUVEO0VBQ0EsUUFBTUMsaUJBQWlCNUQsT0FBdkI7RUFDQTRELG1CQUFlM0UsU0FBZixHQUEyQndFLFFBQTNCO0VBQ0Q7O0VBRUQ7RUFDQSxXQUFTSSxnQkFBVCxDQUEwQm5OLENBQTFCLEVBQTZCO0VBQzNCLFFBQUksV0FBV0EsRUFBRVosTUFBakIsRUFBeUI7RUFDdkIsVUFBTWdPLHFCQUFxQjlPLFNBQVNvTyxhQUFULEVBQXdCMU0sRUFBRVosTUFBRixDQUFTb0IsVUFBakMsQ0FBM0I7O0VBRUE0TSx5QkFBbUJoTSxPQUFuQixDQUEyQiw2QkFBcUI7RUFDOUN5TCx1QkFBZVEsaUJBQWYsRUFBa0NyTixFQUFFWixNQUFGLENBQVMwTixLQUEzQztFQUNELE9BRkQ7RUFHRDtFQUNGOztFQUVELFdBQVNRLGtCQUFULENBQTRCdE4sQ0FBNUIsRUFBK0I7RUFDN0I7RUFDQSxRQUFNSSxnQkFBZ0JKLEVBQUVLLE9BQUYsSUFBYUwsRUFBRU0sTUFBckM7O0VBRUEsUUFBTWlOLGdCQUFnQmpQLFNBQVNtTyxhQUFULEVBQXdCek0sRUFBRVosTUFBRixDQUFTb0IsVUFBakMsQ0FBdEI7O0VBRUErTSxrQkFBY25NLE9BQWQsQ0FBc0Isd0JBQWdCO0VBQ3BDO0VBQ0EsVUFBSWhCLGFBQUosRUFBbUI7O0VBRW5CO0VBQ0E7RUFDQSxjQUFRSixFQUFFWSxPQUFWO0VBQ0UsYUFBSyxFQUFMO0VBQ0EsYUFBSyxFQUFMO0VBQ0VaLFlBQUVhLGNBQUY7RUFDQTJNLHVCQUFhQyxLQUFiO0VBQ0E7RUFDRjtFQUNFO0VBUEo7RUFTRCxLQWZEO0VBZ0JEOztFQUVEO0VBQ0EsV0FBU0Msb0JBQVQsQ0FBOEJDLG1CQUE5QixFQUFtRDtFQUNqRDtFQUNBLFFBQU1DLG1CQUFtQnRQLFNBQVNtTyxhQUFULEVBQXdCa0IsbUJBQXhCLENBQXpCO0VBQ0FDLHFCQUFpQnhNLE9BQWpCLENBQXlCLDJCQUFtQjtFQUMxQ3lNLHNCQUFnQnZNLGdCQUFoQixDQUFpQyxRQUFqQyxFQUEyQzZMLGdCQUEzQztFQUNELEtBRkQ7O0VBSUE7RUFDQSxRQUFNVyxvQkFBb0J4UCxTQUFTcU8sY0FBVCxFQUF5QmdCLG1CQUF6QixDQUExQjtFQUNBRyxzQkFBa0IxTSxPQUFsQixDQUEwQiw0QkFBb0I7RUFDNUMyTSx1QkFBaUJ6TSxnQkFBakIsQ0FBa0MsU0FBbEMsRUFBNkNnTSxrQkFBN0M7RUFDRCxLQUZEO0VBR0Q7O0VBRUQ7RUFDQSxXQUFTVSxzQkFBVCxDQUFnQ0wsbUJBQWhDLEVBQXFEO0VBQ25ELFFBQU1DLG1CQUFtQnRQLFNBQVNtTyxhQUFULEVBQXdCa0IsbUJBQXhCLENBQXpCO0VBQ0E7RUFDQUMscUJBQWlCeE0sT0FBakIsQ0FBeUIsMkJBQW1CO0VBQzFDeU0sc0JBQWdCck0sbUJBQWhCLENBQW9DLFFBQXBDLEVBQThDMkwsZ0JBQTlDO0VBQ0QsS0FGRDs7RUFJQSxRQUFNVyxvQkFBb0J4UCxTQUFTcU8sY0FBVCxFQUF5QmdCLG1CQUF6QixDQUExQjtFQUNBO0VBQ0FHLHNCQUFrQjFNLE9BQWxCLENBQTBCLDRCQUFvQjtFQUM1QzJNLHVCQUFpQnZNLG1CQUFqQixDQUFxQyxTQUFyQyxFQUFnRDhMLGtCQUFoRDtFQUNELEtBRkQ7RUFHRDs7RUFFRDtFQUNBLFdBQVM3TCxPQUFULEdBQW1CO0VBQ2pCbUwseUJBQXFCeEwsT0FBckIsQ0FBNkIsK0JBQXVCO0VBQ2xENE0sNkJBQXVCTCxtQkFBdkI7RUFDRCxLQUZEO0VBR0Q7O0VBRUQ7RUFDQSxXQUFTak0sSUFBVCxHQUFnQjtFQUNkLFFBQUlrTCxxQkFBcUI3TCxNQUF6QixFQUFpQztFQUMvQjZMLDJCQUFxQnhMLE9BQXJCLENBQTZCLCtCQUF1QjtFQUNsRHNNLDZCQUFxQkMsbUJBQXJCO0VBQ0QsT0FGRDtFQUdEO0VBQ0Y7O0VBRURqTTs7RUFFQTtFQUNBLFNBQU87RUFDTEEsY0FESztFQUVMRDtFQUZLLEdBQVA7RUFJRCxDQS9ITTs7TUNOTXdNLHFCQUFxQixTQUFyQkEsa0JBQXFCLEdBTXZCO0VBQUEsaUZBQVAsRUFBTztFQUFBLDJCQUxUMVAsUUFLUztFQUFBLE1BTENBLFFBS0QsaUNBTFksdUJBS1o7RUFBQSw4QkFKVDJQLFdBSVM7RUFBQSxNQUpJQSxXQUlKLG9DQUprQixnQ0FJbEI7RUFBQSwrQkFIVEMsWUFHUztFQUFBLE1BSEtBLFlBR0wscUNBSG9CLDZCQUdwQjtFQUFBLG1DQUZUQyxnQkFFUztFQUFBLE1BRlNBLGdCQUVULHlDQUY0QixpQ0FFNUI7RUFBQSxtQ0FEVEMsZ0JBQ1M7RUFBQSxNQURTQSxnQkFDVCx5Q0FENEJ6SixTQUM1Qjs7RUFDVDtFQUNBLE1BQ0UsRUFBRSxtQkFBbUJuRyxRQUFyQixLQUNBLEVBQUUsc0JBQXNCTSxNQUF4QixDQURBLElBRUEsQ0FBQ04sU0FBU08sZUFBVCxDQUF5QkMsU0FINUIsRUFLRSxPQUFPLElBQVA7O0VBRUYsTUFBTXFQLDRCQUE0QmhRLFNBQVNDLFFBQVQsQ0FBbEM7O0VBRUEsV0FBU2dRLE1BQVQsQ0FBZ0JDLEdBQWhCLEVBQXFCO0VBQ25CLFFBQUksQ0FBQ0EsR0FBTCxFQUFVLE9BQU8sSUFBUDs7RUFFVixRQUFNOUgsT0FBT3BJLFNBQVM2UCxZQUFULEVBQXVCSyxHQUF2QixFQUE0QixDQUE1QixDQUFiOztFQUVBLFFBQUksQ0FBQ0EsSUFBSXZQLFNBQUosQ0FBYzBLLFFBQWQsQ0FBdUJ1RSxXQUF2QixDQUFMLEVBQTBDO0VBQ3hDLFVBQUl4SCxRQUFRQSxLQUFLK0gsVUFBTCxHQUFrQi9ILEtBQUtHLFdBQXZCLEdBQXFDMkgsSUFBSTNILFdBQXJELEVBQWtFO0VBQ2hFMkgsWUFBSXZQLFNBQUosQ0FBY2dJLEdBQWQsQ0FBa0JpSCxXQUFsQjtFQUNEO0VBQ0YsS0FKRCxNQUlPO0VBQ0wsVUFBTXJFLFdBQVd2TCxTQUFTOFAsZ0JBQVQsRUFBMkJJLEdBQTNCLEVBQWdDLENBQWhDLENBQWpCO0VBQ0EsVUFBSTNFLFNBQVM0RSxVQUFULEdBQXNCL0gsS0FBS0csV0FBM0IsR0FBeUMySCxJQUFJM0gsV0FBakQsRUFBOEQ7RUFDNUQySCxZQUFJdlAsU0FBSixDQUFjK0gsTUFBZCxDQUFxQmtILFdBQXJCO0VBQ0Q7RUFDRjs7RUFFRCxXQUFPLElBQVA7RUFDRDs7RUFFRCxXQUFTeE0sSUFBVCxHQUFnQjtFQUNkO0VBQ0E0TSw4QkFBMEJsTixPQUExQixDQUFrQyxlQUFPO0VBQ3ZDbU4sYUFBT0MsR0FBUDs7RUFFQSxVQUFJSCxnQkFBSixFQUFzQjtFQUNwQixZQUFNeEUsV0FBV3ZMLFNBQVM4UCxnQkFBVCxFQUEyQkksR0FBM0IsRUFBZ0MsQ0FBaEMsQ0FBakI7O0VBRUEsWUFBSTNFLFFBQUosRUFBYztFQUNaQSxtQkFBU3ZJLGdCQUFULENBQTBCLFFBQTFCLEVBQW9DK00sZ0JBQXBDO0VBQ0Q7RUFDRjtFQUNGLEtBVkQ7O0VBWUF0UCxXQUFPdUMsZ0JBQVAsQ0FDRSxRQURGLEVBRUVpQyxnQkFDRSxZQUFNO0VBQ0orSyxnQ0FBMEJsTixPQUExQixDQUFrQ21OLE1BQWxDO0VBQ0QsS0FISCxFQUlFLEdBSkYsRUFLRSxFQUFFMUssU0FBUyxHQUFYLEVBTEYsQ0FGRjtFQVVEOztFQUVELFNBQU9uQyxNQUFQO0VBQ0QsQ0EvRE07O0VDSFA7Ozs7RUFJQTtFQUNBLFNBQVNnTixjQUFULENBQXdCQyxPQUF4QixFQUFpQztFQUMvQixNQUFJQSxXQUFXQSxRQUFRbk8sVUFBUixLQUF1QixJQUF0QyxFQUE0QztFQUMxQ21PLFlBQVFuTyxVQUFSLENBQW1CbUksV0FBbkIsQ0FBK0JnRyxPQUEvQjtFQUNEO0VBQ0Y7O0VBRUQ7QUFDQSxFQUFPLFNBQVNDLFlBQVQsR0FBd0I7RUFDN0IsTUFBTUMsZ0JBQWdCLHNCQUF0Qjs7RUFFQSxNQUFNQyxXQUFXL0UsTUFBTWxILFNBQU4sQ0FBZ0JuRSxLQUFoQixDQUFzQkMsSUFBdEIsQ0FDZkYsU0FBU3NRLHNCQUFULENBQWdDRixhQUFoQyxDQURlLENBQWpCOztFQUlBQyxXQUFTMU4sT0FBVCxDQUFpQjtFQUFBLFdBQ2Z1TixRQUFRck4sZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0M7RUFBQSxhQUNoQ29OLGVBQWVDLFFBQVFLLGFBQXZCLENBRGdDO0VBQUEsS0FBbEMsQ0FEZTtFQUFBLEdBQWpCO0VBS0Q7O0VDeEJEOzs7O0VDQUE7Ozs7Ozs7RUFPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQW9EQSxTQUFTQyxVQUFULENBQW9CN1AsTUFBcEIsRUFBNEI4UCxHQUE1QixFQUFpQztFQUMvQixNQUFJQyxJQUFJLE9BQU9ELEdBQVAsS0FBZSxXQUFmLEdBQTZCQSxHQUE3QixHQUFtQyxFQUEzQztFQUNBLE9BQUtFLE9BQUwsR0FBZSxPQUFmO0VBQ0EsT0FBS0MsU0FBTCxHQUFpQnRRLE9BQU91USxTQUFQLENBQWlCRCxTQUFqQixJQUE4Qix3Q0FBL0M7RUFDQSxPQUFLRSxLQUFMLEdBQWE7RUFDWEMsOEJBQTBCTCxFQUFFSyx3QkFBRixJQUE4QixJQUQ3QztFQUVYQyxjQUFVTixFQUFFTSxRQUFGLElBQWMsS0FGYjtFQUdYQywyQkFBdUJQLEVBQUVPLHFCQUFGLElBQTJCLENBSHZDO0VBSVhDLGlCQUFhUixFQUFFUSxXQUFGLElBQWlCLHFCQUpuQjtFQUtYQyxjQUFVblIsU0FBU2tJLGFBQVQsQ0FBdUJ3SSxFQUFFUyxRQUF6QixLQUFzQzdRLE1BTHJDO0VBTVg4USxpQkFBYVYsRUFBRVUsV0FBRixJQUFpQixjQU5uQjtFQU9YQyxnQkFBWVgsRUFBRVcsVUFBRixJQUFnQixhQVBqQjtFQVFYQyx1QkFBbUJaLEVBQUVZLGlCQUFGLElBQXVCLHNCQVIvQjtFQVNYQyxzQkFBa0JiLEVBQUVhLGdCQUFGLElBQXNCLEtBVDdCO0VBVVhDLHNCQUFrQmQsRUFBRWMsZ0JBQUYsSUFBc0I7RUFWN0IsR0FBYjtFQVlBLE1BQUlDLElBQUksS0FBS1gsS0FBYjtFQUNBOzs7Ozs7O0VBT0FXLElBQUVDLFdBQUYsR0FBZ0IsS0FBS0MsY0FBTCxNQUF5QixPQUF6QztFQUNBLE1BQUlDLEtBQUtILEVBQUVELGdCQUFYO0VBQ0EsTUFBSUssS0FBS0osRUFBRVQsUUFBWDtFQUNBLE1BQUljLEtBQUtMLEVBQUVDLFdBQVg7RUFDQSxPQUFLSyxHQUFMLEdBQVcsT0FBT3BSLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJYLFNBQVNHLGdCQUFULENBQTBCUSxNQUExQixDQUE3QixHQUFpRUEsTUFBNUU7RUFDQSxNQUFJLEVBQUUsWUFBWSxLQUFLb1IsR0FBbkIsQ0FBSixFQUE2QixLQUFLQSxHQUFMLEdBQVcsQ0FBQyxLQUFLQSxHQUFOLENBQVg7RUFDN0IsT0FBS0MsU0FBTCxHQUFpQixFQUFqQjs7RUFFQSxPQUFLLElBQUk1USxJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzJRLEdBQUwsQ0FBU3pQLE1BQTdCLEVBQXFDbEIsS0FBSyxDQUExQyxFQUE2QztFQUMzQyxRQUFJNlEsS0FBSyxLQUFLRixHQUFMLENBQVMzUSxDQUFULENBQVQ7RUFDQSxRQUFJOFEsU0FBU0QsR0FBR3JKLEtBQWhCLENBRjJDOztFQUkzQ3NKLFdBQU9OLEVBQVAsSUFBYUEsT0FBTyxLQUFQLElBQWdCLENBQUNDLEVBQWpCLEdBQXNCSixFQUFFUixxQkFBRixHQUEwQixJQUFoRCxHQUF1RCxFQUFwRTtFQUNBaUIsV0FBT0MsUUFBUCxHQUFrQkwsT0FBTyxPQUFQLEdBQWlCQSxFQUFqQixHQUFzQixFQUF4Qzs7RUFFQSxRQUFJQSxPQUFPLE9BQVAsSUFBa0JMLEVBQUVGLGdCQUF4QixFQUEwQztFQUN4QyxVQUFJYSxXQUFXLEtBQUtDLFdBQUwsQ0FBaUJKLEVBQWpCLEVBQXFCUixDQUFyQixDQUFmLENBRHdDOztFQUd4QyxXQUFLTyxTQUFMLENBQWVNLElBQWYsQ0FBb0JGLFFBQXBCO0VBQ0Q7RUFDRjs7RUFFRCxTQUFPLElBQVA7RUFDRDtFQUNEOzs7Ozs7Ozs7RUFVQTVCLFdBQVdwTSxTQUFYLENBQXFCdU4sY0FBckIsR0FBc0MsWUFBWTtFQUNoRCxNQUFJWSxTQUFTLENBQUMsRUFBRCxFQUFLLEtBQUwsRUFBWSxVQUFaLEVBQXdCLE9BQXhCLEVBQWlDLE1BQWpDLENBQWI7RUFDQSxNQUFJNUssT0FBTzNILFNBQVN3UyxJQUFULENBQWM1SixLQUF6Qjs7RUFFQSxPQUFLLElBQUl4SCxJQUFJLENBQWIsRUFBZ0JBLElBQUltUixPQUFPalEsTUFBM0IsRUFBbUNsQixLQUFLLENBQXhDLEVBQTJDO0VBQ3pDdUcsU0FBS3dLLFFBQUwsR0FBZ0JJLE9BQU9uUixDQUFQLElBQVksUUFBNUI7RUFDRDs7RUFFRCxNQUFJcVIsYUFBYTlLLEtBQUt3SyxRQUFMLEdBQWdCeEssS0FBS3dLLFFBQXJCLEdBQWdDLE9BQWpEO0VBQ0F4SyxPQUFLd0ssUUFBTCxHQUFnQixFQUFoQjtFQUNBLFNBQU9NLFVBQVA7RUFDRCxDQVhEO0VBWUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEwQkFqQyxXQUFXcE0sU0FBWCxDQUFxQmlPLFdBQXJCLEdBQW1DLFNBQVNBLFdBQVQsQ0FBcUJKLEVBQXJCLEVBQXlCbkIsS0FBekIsRUFBZ0M7RUFDakUsTUFBSTRCLFFBQVEsSUFBWjs7RUFFQSxNQUFJQyxPQUFPO0VBQ1RWLFFBQUlBLEVBREs7RUFFVFcsWUFBUVgsR0FBR2xRLFVBRkY7RUFHVCtPLFdBQU9BO0VBSEUsR0FBWDtFQUtBLE9BQUsrQixLQUFMLEdBQWEsS0FBSy9CLEtBQUwsQ0FBV0ssUUFBWCxLQUF3QjdRLE1BQXJDO0VBQ0EsTUFBSXdTLEtBQUssS0FBS0QsS0FBTCxHQUFhdlMsTUFBYixHQUFzQixLQUFLeVMsZ0JBQUwsQ0FBc0JKLEtBQUtWLEVBQTNCLEVBQStCVSxLQUFLN0IsS0FBTCxDQUFXSyxRQUExQyxDQUEvQjtFQUNBLE9BQUs2QixvQkFBTCxDQUEwQkwsSUFBMUI7RUFDQUEsT0FBS0MsTUFBTCxDQUFZL0ksU0FBWixJQUF5QixNQUFNaUgsTUFBTUksV0FBckM7RUFDQXlCLE9BQUtNLEtBQUwsR0FBYSxTQUFiOztFQUVBTixPQUFLTyxjQUFMLEdBQXNCLFlBQVk7RUFDaEMsV0FBT1IsTUFBTVMsV0FBTixDQUFrQlIsSUFBbEIsQ0FBUDtFQUNELEdBRkQ7O0VBSUFHLEtBQUdqUSxnQkFBSCxDQUFvQixRQUFwQixFQUE4QjhQLEtBQUtPLGNBQW5DO0VBQ0EsU0FBT1AsSUFBUDtFQUNELENBcEJEO0VBcUJBOzs7Ozs7Ozs7RUFVQW5DLFdBQVdwTSxTQUFYLENBQXFCMk8sZ0JBQXJCLEdBQXdDLFVBQVVkLEVBQVYsRUFBY21CLEtBQWQsRUFBcUI7RUFDM0Q7RUFDQSxNQUFJM0IsSUFBSTJCLEtBQVI7RUFDQSxNQUFJN1IsSUFBSTBRLEVBQVI7RUFDQSxNQUFJMVEsRUFBRWdQLGFBQUYsS0FBb0JrQixDQUF4QixFQUEyQixPQUFPQSxDQUFQLENBSmdDOztFQU0zRCxTQUFPbFEsRUFBRWdQLGFBQUYsS0FBb0JrQixDQUEzQixFQUE4QjtFQUM1QmxRLFFBQUlBLEVBQUVnUCxhQUFOO0VBQ0QsR0FSMEQ7OztFQVczRCxTQUFPa0IsQ0FBUDtFQUNELENBWkQ7RUFhQTs7Ozs7Ozs7OztFQVdBakIsV0FBV3BNLFNBQVgsQ0FBcUI0TyxvQkFBckIsR0FBNEMsU0FBU0Esb0JBQVQsQ0FBOEJMLElBQTlCLEVBQW9DO0VBQzlFLE1BQUlVLEtBQUtWLElBQVQ7RUFDQSxNQUFJbEIsSUFBSTRCLEdBQUd2QyxLQUFYO0VBQ0EsTUFBSW1CLEtBQUtvQixHQUFHcEIsRUFBWjtFQUNBLE1BQUlXLFNBQVNTLEdBQUdULE1BQWhCO0VBQ0EsTUFBSVUsV0FBVyxDQUFDLEtBQUtULEtBQU4sSUFBZXBCLEVBQUVDLFdBQUYsS0FBa0IsT0FBaEQ7RUFDQSxNQUFJNkIsV0FBVzlCLEVBQUVELGdCQUFGLEtBQXVCLFFBQXRDO0VBQ0EsTUFBSWdDLGlCQUFpQkYsV0FBVzdCLEVBQUVOLFFBQUYsQ0FBV3NDLHFCQUFYLEdBQW1DQyxHQUE5QyxHQUFvRCxDQUF6RTtFQUNBLE1BQUlDLGNBQWNMLFdBQVdWLE9BQU9hLHFCQUFQLEdBQStCQyxHQUEvQixHQUFxQ0YsY0FBaEQsR0FBaUVaLE9BQU9hLHFCQUFQLEdBQStCQyxHQUFsSDtFQUNBLE1BQUlFLHFCQUFxQm5DLEVBQUVWLHdCQUFGLEtBQStCLElBQS9CLEdBQXNDVSxFQUFFVix3QkFBeEMsR0FBbUVrQixHQUFHNEIsWUFBL0Y7RUFDQVIsS0FBR1MsTUFBSCxHQUFZTixpQkFBaUIvQixFQUFFUixxQkFBL0I7RUFDQW9DLEtBQUdNLFdBQUgsR0FBaUJKLFdBQVdJLGNBQWNOLEdBQUdTLE1BQTVCLEdBQXFDLENBQXREO0VBQ0FULEtBQUdVLFlBQUgsR0FBa0JWLEdBQUdNLFdBQUgsR0FBaUJDLGtCQUFuQztFQUNBUCxLQUFHVyxVQUFILEdBQWdCVCxXQUFXSSxjQUFjZixPQUFPaUIsWUFBckIsSUFBcUNSLEdBQUdwQixFQUFILENBQU00QixZQUFOLEdBQXFCUixHQUFHUyxNQUE3RCxDQUFYLEdBQWtGSCxjQUFjZixPQUFPaUIsWUFBdkg7RUFDQSxTQUFPUixFQUFQO0VBQ0QsQ0FmRDtFQWdCQTs7Ozs7Ozs7RUFTQTdDLFdBQVdwTSxTQUFYLENBQXFCNlAsYUFBckIsR0FBcUMsVUFBVWhDLEVBQVYsRUFBY2lDLENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0VBQ3ZELE1BQUk1UyxJQUFJMFEsRUFBUjtFQUNBLE1BQUltQyxTQUFTN1MsRUFBRXNJLFNBQUYsQ0FBWXdLLEtBQVosQ0FBa0IsR0FBbEIsQ0FBYjtFQUNBLE1BQUlGLEtBQUtDLE9BQU9sUyxPQUFQLENBQWVpUyxDQUFmLE1BQXNCLENBQUMsQ0FBaEMsRUFBbUNDLE9BQU85QixJQUFQLENBQVk2QixDQUFaO0VBQ25DLE1BQUlHLFFBQVFGLE9BQU9sUyxPQUFQLENBQWVnUyxDQUFmLENBQVo7RUFDQSxNQUFJSSxVQUFVLENBQUMsQ0FBZixFQUFrQkYsT0FBT0csTUFBUCxDQUFjRCxLQUFkLEVBQXFCLENBQXJCO0VBQ2xCL1MsSUFBRXNJLFNBQUYsR0FBY3VLLE9BQU9JLElBQVAsQ0FBWSxHQUFaLENBQWQ7RUFDRCxDQVBEO0VBUUE7Ozs7Ozs7OztFQVVBaEUsV0FBV3BNLFNBQVgsQ0FBcUIrTyxXQUFyQixHQUFtQyxTQUFTQSxXQUFULENBQXFCUixJQUFyQixFQUEyQjtFQUM1RDtFQUNBLE1BQUlVLEtBQUtWLElBQVQ7RUFDQSxNQUFJcFIsSUFBSThSLEdBQUdwQixFQUFYO0VBQ0EsTUFBSVIsSUFBSTRCLEdBQUd2QyxLQUFYO0VBQ0EsTUFBSW1DLFFBQVFJLEdBQUdKLEtBQWY7RUFDQSxNQUFJd0IsUUFBUXBCLEdBQUdNLFdBQWY7RUFDQSxNQUFJZSxTQUFTckIsR0FBR1UsWUFBaEI7RUFDQSxNQUFJWSxPQUFPdEIsR0FBR1csVUFBZDtFQUNBLE1BQUlZLE1BQU1yVCxFQUFFcUgsS0FBWixDQVQ0RDs7RUFXNUQsTUFBSWlKLEtBQUtKLEVBQUVULFFBQVg7RUFDQSxNQUFJYyxLQUFLTCxFQUFFQyxXQUFYO0VBQ0EsTUFBSW9CLEtBQUtyQixFQUFFTixRQUFYO0VBQ0EsTUFBSTBELFNBQVNwRCxFQUFFTCxXQUFmO0VBQ0EsTUFBSTJDLGVBQWV0QyxFQUFFSCxpQkFBckI7RUFDQSxNQUFJd0QsUUFBUXJELEVBQUVKLFVBQWQ7RUFDQSxNQUFJTyxLQUFLSCxFQUFFRCxnQkFBWDtFQUNBOzs7Ozs7O0VBT0EsTUFBSXVELFVBQVUsU0FBU0MsUUFBVCxDQUFrQkMsQ0FBbEIsRUFBcUI7RUFDakNBO0VBQ0QsR0FGRDs7RUFJQSxNQUFJQyxNQUFNLENBQUMsS0FBS3JDLEtBQU4sR0FBY2tDLE9BQWQsR0FBd0J6VSxPQUFPNlUscUJBQVAsSUFBZ0M3VSxPQUFPOFUsd0JBQXZDLElBQW1FOVUsT0FBTytVLDJCQUExRSxJQUF5Ry9VLE9BQU9nVix1QkFBaEgsSUFBMklQLE9BQTdLO0VBQ0E7Ozs7Ozs7OztFQVNBLE1BQUlRLEtBQUssS0FBS3RCLGFBQWQ7RUFDQSxNQUFJdUIsU0FBUyxLQUFLM0MsS0FBTCxHQUFhdlMsT0FBT21WLE9BQVAsSUFBa0JuVixPQUFPb1YsV0FBdEMsR0FBb0Q1QyxHQUFHNkMsU0FBcEU7RUFDQSxNQUFJQyxZQUFZSixTQUFTZixLQUFULElBQWtCZSxTQUFTYixJQUEzQixLQUFvQzFCLFVBQVUsU0FBVixJQUF1QkEsVUFBVSxPQUFyRSxDQUFoQjtFQUNBLE1BQUk0QyxXQUFXTCxVQUFVZixLQUFWLElBQW1CeEIsVUFBVSxRQUE1QztFQUNBLE1BQUk2QyxVQUFVTixVQUFVYixJQUFWLElBQWtCMUIsVUFBVSxRQUExQztFQUNBOzs7Ozs7OztFQVFBLE1BQUkyQyxTQUFKLEVBQWU7RUFDYnZDLE9BQUdKLEtBQUgsR0FBVyxRQUFYO0VBQ0FpQyxRQUFJLFlBQVk7RUFDZEssU0FBR2hVLENBQUgsRUFBTXVULEtBQU4sRUFBYUQsTUFBYjtFQUNBRCxVQUFJekMsUUFBSixHQUFlTCxFQUFmO0VBQ0EsVUFBSUQsRUFBSixFQUFRO0VBQ1IrQyxVQUFJbUIsTUFBSixHQUFhLEVBQWI7RUFDQW5CLFVBQUloRCxFQUFKLElBQVVILEVBQUVSLHFCQUFGLEdBQTBCLElBQXBDO0VBQ0QsS0FORDtFQU9ELEdBVEQsTUFTTyxJQUFJNEUsUUFBSixFQUFjO0VBQ25CeEMsT0FBR0osS0FBSCxHQUFXLFNBQVg7RUFDQWlDLFFBQUksWUFBWTtFQUNkSyxTQUFHaFUsQ0FBSCxFQUFNc1QsTUFBTjtFQUNBLFVBQUkvQyxPQUFPLE9BQVgsRUFBb0I4QyxJQUFJekMsUUFBSixHQUFlLEVBQWY7RUFDckIsS0FIRDtFQUlELEdBTk0sTUFNQSxJQUFJMkQsT0FBSixFQUFhO0VBQ2xCekMsT0FBR0osS0FBSCxHQUFXLE9BQVg7RUFDQWlDLFFBQUksWUFBWTtFQUNkSyxTQUFHaFUsQ0FBSCxFQUFNc1QsTUFBTixFQUFjQyxLQUFkO0VBQ0EsVUFBSWhELE9BQU8sT0FBUCxJQUFrQkQsRUFBdEIsRUFBMEI7RUFDMUIrQyxVQUFJbEIsR0FBSixHQUFVLEVBQVY7RUFDQWtCLFVBQUltQixNQUFKLEdBQWEsR0FBYjtFQUNBbkIsVUFBSXpDLFFBQUosR0FBZSxVQUFmO0VBQ0QsS0FORDtFQU9EOztFQUVELE1BQUk2RCxpQkFBaUJSLFVBQVVkLE1BQVYsSUFBb0JjLFVBQVViLElBQW5EO0VBQ0EsTUFBSXNCLG9CQUFvQlQsU0FBU2QsTUFBVCxJQUFtQmMsU0FBU2IsSUFBcEQ7RUFDQSxNQUFJdUIsT0FBTyxNQUFYLENBaEY0RDs7RUFrRjVELE1BQUlELGlCQUFKLEVBQXVCO0VBQ3JCZixRQUFJLFlBQVk7RUFDZEssU0FBR2hVLENBQUgsRUFBTXdTLFlBQU47RUFDRCxLQUZEO0VBR0QsR0FKRCxNQUlPLElBQUlpQyxjQUFKLEVBQW9CO0VBQ3pCZCxRQUFJLFlBQVk7RUFDZEssU0FBR2hVLENBQUgsRUFBTTJVLElBQU4sRUFBWW5DLFlBQVo7RUFDRCxLQUZEO0VBR0Q7O0VBRUQsU0FBT1YsRUFBUDtFQUNELENBN0ZEO0VBOEZBOzs7Ozs7RUFPQTdDLFdBQVdwTSxTQUFYLENBQXFCK1IsY0FBckIsR0FBc0MsU0FBU0EsY0FBVCxDQUF3Qi9ELFFBQXhCLEVBQWtDO0VBQ3RFLE1BQUk3USxJQUFJNlEsU0FBU0gsRUFBakI7RUFDQSxNQUFJUixJQUFJVyxTQUFTdEIsS0FBakI7RUFDQSxNQUFJeUUsS0FBSyxLQUFLdEIsYUFBZDtFQUNBMVMsSUFBRXFILEtBQUYsQ0FBUXVKLFFBQVIsR0FBbUIsRUFBbkI7RUFDQTVRLElBQUVxSCxLQUFGLENBQVE2SSxFQUFFRCxnQkFBVixJQUE4QixFQUE5QjtFQUNBK0QsS0FBR2hVLENBQUgsRUFBTWtRLEVBQUVMLFdBQVI7RUFDQW1FLEtBQUdoVSxDQUFILEVBQU1rUSxFQUFFSixVQUFSO0VBQ0FrRSxLQUFHaFUsRUFBRVEsVUFBTCxFQUFpQjBQLEVBQUVQLFdBQW5CO0VBQ0QsQ0FURDtFQVVBOzs7Ozs7O0VBUUFWLFdBQVdwTSxTQUFYLENBQXFCZ1MsT0FBckIsR0FBK0IsU0FBU0EsT0FBVCxHQUFtQjtFQUNoRCxPQUFLLElBQUloVixJQUFJLENBQWIsRUFBZ0JBLElBQUksS0FBSzRRLFNBQUwsQ0FBZTFQLE1BQW5DLEVBQTJDbEIsS0FBSyxDQUFoRCxFQUFtRDtFQUNqRCxRQUFJZ1IsV0FBVyxLQUFLSixTQUFMLENBQWU1USxDQUFmLENBQWY7RUFDQWdSLGFBQVN0QixLQUFULENBQWVLLFFBQWYsQ0FBd0JwTyxtQkFBeEIsQ0FBNEMsUUFBNUMsRUFBc0RxUCxTQUFTYyxjQUEvRDtFQUNBLFNBQUtpRCxjQUFMLENBQW9CL0QsUUFBcEI7RUFDRDs7RUFFRCxPQUFLZSxXQUFMLEdBQW1CLEtBQW5CO0VBQ0EsT0FBS25CLFNBQUwsR0FBaUIsRUFBakI7RUFDRCxDQVREO0VBVUE7Ozs7OztFQU9BLFNBQVNxRSxVQUFULENBQW9CMVYsTUFBcEIsRUFBNEIrUCxDQUE1QixFQUErQjtFQUM3QixTQUFPLElBQUlGLFVBQUosQ0FBZTdQLE1BQWYsRUFBdUIrUCxDQUF2QixDQUFQO0VBQ0Q7OztFQ3ZZRDtFQUNBLEdBQUUsVUFBU25QLENBQVQsRUFBVytVLENBQVgsRUFBYTtFQUFDLGtCQUFZLE9BQU9DLFNBQW5CLElBQTJCQSxVQUFPQyxHQUFsQyxHQUFzQ0QsVUFBTyxFQUFQQSxFQUFVRCxFQUFFL1UsQ0FBRixDQUFWZ1YsQ0FBdEMsR0FBc0QsQUFBeUJFLGNBQUEsR0FBZUgsRUFBRS9VLENBQUYsQ0FBeEMsQUFBdEQ7RUFBa0gsR0FBakksQ0FBbUksZUFBYSxPQUFPc0MsY0FBcEIsR0FBMkJBLGNBQTNCLEdBQWtDNlMsY0FBQUEsQ0FBS3BXLE1BQUxvVyxJQUFhQSxjQUFBQSxDQUFLN1MsTUFBdkwsRUFBK0wsVUFBU3RDLENBQVQsRUFBVztBQUFDLEVBQWEsUUFBSStVLENBQUo7RUFBQSxRQUFNaE8sQ0FBTjtFQUFBLFFBQVFvSSxDQUFSO0VBQUEsUUFBVXdELENBQVY7RUFBQSxRQUFZQyxDQUFaO0VBQUEsUUFBY3dDLENBQWQ7RUFBQSxRQUFnQnZWLENBQWhCO0VBQUEsUUFBa0J3VixJQUFFLEVBQXBCO0VBQUEsUUFBdUJDLElBQUUsbUJBQWtCN1csUUFBbEIsSUFBNEIsc0JBQXFCdUIsQ0FBakQsSUFBb0QsZUFBY3ZCLFNBQVM0SixhQUFULENBQXVCLEdBQXZCLENBQTNGO0VBQUEsUUFBdUhrTixJQUFFLEVBQXpIO0VBQUEsUUFBNEg3QixJQUFFLEVBQUNuVixVQUFTLGtCQUFWLEVBQTZCaVgsZ0JBQWUsdUJBQTVDLEVBQW9FQyxXQUFVelYsQ0FBOUUsRUFBZ0Z1UyxRQUFPLENBQXZGLEVBQXlGbUQsYUFBWSxRQUFyRyxFQUE4R0MsYUFBWSxDQUFDLENBQTNILEVBQTZIQyxVQUFTLG9CQUFVLEVBQWhKLEVBQTlIO0VBQUEsUUFBa1JDLElBQUUsU0FBRkEsQ0FBRSxDQUFTN1YsQ0FBVCxFQUFXK1UsQ0FBWCxFQUFhaE8sQ0FBYixFQUFlO0VBQUMsVUFBRyxzQkFBb0J4RSxPQUFPTSxTQUFQLENBQWlCRSxRQUFqQixDQUEwQnBFLElBQTFCLENBQStCcUIsQ0FBL0IsQ0FBdkIsRUFBeUQsS0FBSSxJQUFJbVAsQ0FBUixJQUFhblAsQ0FBYjtFQUFldUMsZUFBT00sU0FBUCxDQUFpQmlULGNBQWpCLENBQWdDblgsSUFBaEMsQ0FBcUNxQixDQUFyQyxFQUF1Q21QLENBQXZDLEtBQTJDNEYsRUFBRXBXLElBQUYsQ0FBT29JLENBQVAsRUFBUy9HLEVBQUVtUCxDQUFGLENBQVQsRUFBY0EsQ0FBZCxFQUFnQm5QLENBQWhCLENBQTNDO0VBQWYsT0FBekQsTUFBMkksS0FBSSxJQUFJMlMsSUFBRSxDQUFOLEVBQVFDLElBQUU1UyxFQUFFZSxNQUFoQixFQUF1QjRSLElBQUVDLENBQXpCLEVBQTJCRCxHQUEzQjtFQUErQm9DLFVBQUVwVyxJQUFGLENBQU9vSSxDQUFQLEVBQVMvRyxFQUFFMlMsQ0FBRixDQUFULEVBQWNBLENBQWQsRUFBZ0IzUyxDQUFoQjtFQUEvQjtFQUFrRCxLQUFqZTtFQUFBLFFBQWtlK1YsSUFBRSxTQUFGQSxDQUFFLEdBQVU7RUFBQyxVQUFJL1YsSUFBRSxFQUFOO0VBQUEsVUFBUytVLElBQUUsQ0FBQyxDQUFaO0VBQUEsVUFBY2hPLElBQUUsQ0FBaEI7RUFBQSxVQUFrQm9JLElBQUV4SixVQUFVNUUsTUFBOUIsQ0FBcUMsdUJBQXFCd0IsT0FBT00sU0FBUCxDQUFpQkUsUUFBakIsQ0FBMEJwRSxJQUExQixDQUErQmdILFVBQVUsQ0FBVixDQUEvQixDQUFyQixLQUFvRW9QLElBQUVwUCxVQUFVLENBQVYsQ0FBRixFQUFlb0IsR0FBbkYsRUFBd0YsT0FBS0EsSUFBRW9JLENBQVAsRUFBU3BJLEdBQVQsRUFBYTtFQUFDLFlBQUk0TCxJQUFFaE4sVUFBVW9CLENBQVYsQ0FBTixDQUFtQixDQUFFLFVBQVNBLENBQVQsRUFBVztFQUFDLGVBQUksSUFBSW9JLENBQVIsSUFBYXBJLENBQWI7RUFBZXhFLG1CQUFPTSxTQUFQLENBQWlCaVQsY0FBakIsQ0FBZ0NuWCxJQUFoQyxDQUFxQ29JLENBQXJDLEVBQXVDb0ksQ0FBdkMsTUFBNEM0RixLQUFHLHNCQUFvQnhTLE9BQU9NLFNBQVAsQ0FBaUJFLFFBQWpCLENBQTBCcEUsSUFBMUIsQ0FBK0JvSSxFQUFFb0ksQ0FBRixDQUEvQixDQUF2QixHQUE0RG5QLEVBQUVtUCxDQUFGLElBQUs0RyxFQUFFLENBQUMsQ0FBSCxFQUFLL1YsRUFBRW1QLENBQUYsQ0FBTCxFQUFVcEksRUFBRW9JLENBQUYsQ0FBVixDQUFqRSxHQUFpRm5QLEVBQUVtUCxDQUFGLElBQUtwSSxFQUFFb0ksQ0FBRixDQUFsSTtFQUFmO0VBQXVKLFNBQXBLLENBQXNLd0QsQ0FBdEssQ0FBRDtFQUEwSyxjQUFPM1MsQ0FBUDtFQUFTLEtBQWgwQjtFQUFBLFFBQWkwQmdXLElBQUUsU0FBRkEsQ0FBRSxDQUFTaFcsQ0FBVCxFQUFXO0VBQUMsYUFBT2lELEtBQUtDLEdBQUwsQ0FBU2xELEVBQUVpVyxZQUFYLEVBQXdCalcsRUFBRXNTLFlBQTFCLEVBQXVDdFMsRUFBRWtXLFlBQXpDLENBQVA7RUFBOEQsS0FBNzRCO0VBQUEsUUFBODRCQyxJQUFFLFNBQUZBLENBQUUsR0FBVTtFQUFDLGFBQU9sVCxLQUFLQyxHQUFMLENBQVN6RSxTQUFTbU0sSUFBVCxDQUFjcUwsWUFBdkIsRUFBb0N4WCxTQUFTTyxlQUFULENBQXlCaVgsWUFBN0QsRUFBMEV4WCxTQUFTbU0sSUFBVCxDQUFjMEgsWUFBeEYsRUFBcUc3VCxTQUFTTyxlQUFULENBQXlCc1QsWUFBOUgsRUFBMkk3VCxTQUFTbU0sSUFBVCxDQUFjc0wsWUFBekosRUFBc0t6WCxTQUFTTyxlQUFULENBQXlCa1gsWUFBL0wsQ0FBUDtFQUFvTixLQUEvbUM7RUFBQSxRQUFnbkNFLElBQUUsU0FBRkEsQ0FBRSxDQUFTcFcsQ0FBVCxFQUFXO0VBQUMsVUFBSStHLElBQUUsQ0FBTixDQUFRLElBQUcvRyxFQUFFcVcsWUFBTCxFQUFrQixHQUFFO0VBQUN0UCxhQUFHL0csRUFBRXNXLFNBQUwsRUFBZXRXLElBQUVBLEVBQUVxVyxZQUFuQjtFQUFnQyxPQUFuQyxRQUF5Q3JXLENBQXpDLEVBQWxCLEtBQW1FK0csSUFBRS9HLEVBQUVzVyxTQUFKLENBQWMsT0FBT3ZQLElBQUVBLElBQUU2TCxDQUFGLEdBQUltQyxFQUFFeEMsTUFBUixFQUFleEwsS0FBRyxDQUFILEdBQUtBLENBQUwsR0FBTyxDQUE3QjtFQUErQixLQUF0dkM7RUFBQSxRQUF1dkNtSixJQUFFLFNBQUZBLENBQUUsQ0FBUzZFLENBQVQsRUFBVztFQUFDLFVBQUloTyxJQUFFZ08sRUFBRTdDLHFCQUFGLEVBQU4sQ0FBZ0MsT0FBT25MLEVBQUVvTCxHQUFGLElBQU8sQ0FBUCxJQUFVcEwsRUFBRXdQLElBQUYsSUFBUSxDQUFsQixJQUFxQnhQLEVBQUV5TixNQUFGLEtBQVd4VSxFQUFFd1csV0FBRixJQUFlL1gsU0FBU08sZUFBVCxDQUF5QmtYLFlBQW5ELENBQXJCLElBQXVGblAsRUFBRTBQLEtBQUYsS0FBVXpXLEVBQUUwVyxVQUFGLElBQWNqWSxTQUFTTyxlQUFULENBQXlCMlgsV0FBakQsQ0FBOUY7RUFBNEosS0FBajhDO0VBQUEsUUFBazhDQyxJQUFFLFNBQUZBLENBQUUsR0FBVTtFQUFDckIsUUFBRXNCLElBQUYsQ0FBUSxVQUFTN1csQ0FBVCxFQUFXK1UsQ0FBWCxFQUFhO0VBQUMsZUFBTy9VLEVBQUU4VyxRQUFGLEdBQVcvQixFQUFFK0IsUUFBYixHQUFzQixDQUFDLENBQXZCLEdBQXlCOVcsRUFBRThXLFFBQUYsR0FBVy9CLEVBQUUrQixRQUFiLEdBQXNCLENBQXRCLEdBQXdCLENBQXhEO0VBQTBELE9BQWhGO0VBQW1GLEtBQWxpRCxDQUFtaUR6QixFQUFFMEIsWUFBRixHQUFlLFlBQVU7RUFBQzVILFVBQUVnSCxHQUFGLEVBQU12RCxJQUFFRCxJQUFFcUQsRUFBRXJELENBQUYsSUFBS3lELEVBQUV6RCxDQUFGLENBQVAsR0FBWSxDQUFwQixFQUFzQmtELEVBQUVOLENBQUYsRUFBSyxVQUFTdlYsQ0FBVCxFQUFXO0VBQUNBLFVBQUU4VyxRQUFGLEdBQVdWLEVBQUVwVyxFQUFFWixNQUFKLENBQVg7RUFBdUIsT0FBeEMsQ0FBdEIsRUFBaUV3WCxHQUFqRTtFQUFxRSxLQUEvRixDQUFnRyxJQUFJSSxJQUFFLFNBQUZBLENBQUUsR0FBVTtFQUFDLFVBQUloWCxJQUFFdkIsU0FBU0csZ0JBQVQsQ0FBMEJtVyxFQUFFeFcsUUFBNUIsQ0FBTixDQUE0Q3NYLEVBQUU3VixDQUFGLEVBQUssVUFBU0EsQ0FBVCxFQUFXO0VBQUMsWUFBR0EsRUFBRWlYLElBQUwsRUFBVTtFQUFDLGNBQUlsQyxJQUFFdFcsU0FBU2tJLGFBQVQsQ0FBdUIzRyxFQUFFaVgsSUFBekIsQ0FBTixDQUFxQ2xDLEtBQUdRLEVBQUV4RSxJQUFGLENBQU8sRUFBQ21HLEtBQUlsWCxDQUFMLEVBQU9aLFFBQU8yVixDQUFkLEVBQWdCMUQsUUFBTyxTQUFPclIsRUFBRVEsVUFBRixDQUFhMlcsT0FBYixDQUFxQkMsV0FBckIsRUFBUCxHQUEwQ3BYLEVBQUVRLFVBQTVDLEdBQXVELElBQTlFLEVBQW1Gc1csVUFBUyxDQUE1RixFQUFQLENBQUg7RUFBMEc7RUFBQyxPQUE1SztFQUErSyxLQUE1TztFQUFBLFFBQTZPTyxJQUFFLFNBQUZBLENBQUUsR0FBVTtFQUFDakMsWUFBSUEsRUFBRThCLEdBQUYsQ0FBTWpZLFNBQU4sQ0FBZ0IrSCxNQUFoQixDQUF1QitOLEVBQUVXLFdBQXpCLEdBQXNDTixFQUFFL0QsTUFBRixJQUFVK0QsRUFBRS9ELE1BQUYsQ0FBU3BTLFNBQVQsQ0FBbUIrSCxNQUFuQixDQUEwQitOLEVBQUVXLFdBQTVCLENBQXBEO0VBQThGLEtBQXhWO0VBQUEsUUFBeVY0QixJQUFFLFNBQUZBLENBQUUsQ0FBU3RYLENBQVQsRUFBVztFQUFDcVgsV0FBSXJYLEVBQUVrWCxHQUFGLENBQU1qWSxTQUFOLENBQWdCZ0ksR0FBaEIsQ0FBb0I4TixFQUFFVyxXQUF0QixDQUFKLEVBQXVDMVYsRUFBRXFSLE1BQUYsSUFBVXJSLEVBQUVxUixNQUFGLENBQVNwUyxTQUFULENBQW1CZ0ksR0FBbkIsQ0FBdUI4TixFQUFFVyxXQUF6QixDQUFqRCxFQUF1RlgsRUFBRWEsUUFBRixDQUFXNVYsQ0FBWCxDQUF2RixFQUFxR29WLElBQUUsRUFBQzhCLEtBQUlsWCxFQUFFa1gsR0FBUCxFQUFXN0YsUUFBT3JSLEVBQUVxUixNQUFwQixFQUF2RztFQUFtSSxLQUExZSxDQUEyZWdFLEVBQUVrQyxhQUFGLEdBQWdCLFlBQVU7RUFBQyxVQUFJeFEsSUFBRS9HLEVBQUVtVSxXQUFSLENBQW9CLElBQUduVSxFQUFFd1csV0FBRixHQUFjelAsQ0FBZCxJQUFpQm9JLENBQWpCLElBQW9CZSxFQUFFcUYsRUFBRSxDQUFGLEVBQUtuVyxNQUFQLENBQXZCLEVBQXNDLE9BQU9rWSxFQUFFL0IsRUFBRSxDQUFGLENBQUYsR0FBUUEsRUFBRSxDQUFGLENBQWYsQ0FBb0IsS0FBSSxJQUFJNUMsSUFBRSxDQUFOLEVBQVFDLElBQUUyQyxFQUFFeFUsTUFBaEIsRUFBdUI0UixJQUFFQyxDQUF6QixFQUEyQkQsR0FBM0IsRUFBK0I7RUFBQyxZQUFJeUMsSUFBRUcsRUFBRTVDLENBQUYsQ0FBTixDQUFXLElBQUd5QyxFQUFFMEIsUUFBRixJQUFZL1AsQ0FBZixFQUFpQixPQUFPdVEsRUFBRWxDLENBQUYsR0FBS0EsQ0FBWjtFQUFjLFlBQUlMLEVBQUVhLFFBQUYsRUFBSjtFQUFpQixLQUFwTSxDQUFxTSxJQUFJNEIsSUFBRSxTQUFGQSxDQUFFLEdBQVU7RUFBQzNCLFFBQUVOLENBQUYsRUFBSyxVQUFTdlYsQ0FBVCxFQUFXO0VBQUNBLFVBQUVrWCxHQUFGLENBQU1qWSxTQUFOLENBQWdCMEssUUFBaEIsQ0FBeUJvTCxFQUFFVyxXQUEzQixNQUEwQ04sSUFBRSxFQUFDOEIsS0FBSWxYLEVBQUVrWCxHQUFQLEVBQVc3RixRQUFPclIsRUFBRXFSLE1BQXBCLEVBQTVDO0VBQXlFLE9BQTFGO0VBQTZGLEtBQTlHLENBQStHZ0UsRUFBRTVULE9BQUYsR0FBVSxZQUFVO0VBQUNzVCxZQUFJQSxFQUFFVSxTQUFGLENBQVlqVSxtQkFBWixDQUFnQyxRQUFoQyxFQUF5Q2lXLENBQXpDLEVBQTJDLENBQUMsQ0FBNUMsR0FBK0MxQyxFQUFFVSxTQUFGLENBQVlqVSxtQkFBWixDQUFnQyxRQUFoQyxFQUF5Q2lXLENBQXpDLEVBQTJDLENBQUMsQ0FBNUMsQ0FBL0MsRUFBOEZsQyxJQUFFLEVBQWhHLEVBQW1HUixJQUFFLElBQXJHLEVBQTBHaE8sSUFBRSxJQUE1RyxFQUFpSG9JLElBQUUsSUFBbkgsRUFBd0h3RCxJQUFFLElBQTFILEVBQStIQyxJQUFFLElBQWpJLEVBQXNJd0MsSUFBRSxJQUF4SSxFQUE2SXZWLElBQUUsSUFBbko7RUFBeUosS0FBOUssQ0FBK0ssSUFBSTZYLElBQUUsU0FBRkEsQ0FBRSxDQUFTMVgsQ0FBVCxFQUFXO0VBQUNqQixhQUFPd0csWUFBUCxDQUFvQndCLENBQXBCLEdBQXVCQSxJQUFFaEMsV0FBWSxZQUFVO0VBQUNzUSxVQUFFMEIsWUFBRixJQUFpQjFCLEVBQUVrQyxhQUFGLEVBQWpCO0VBQW1DLE9BQTFELEVBQTRELEVBQTVELENBQXpCO0VBQXlGLEtBQTNHO0VBQUEsUUFBNEdFLElBQUUsU0FBRkEsQ0FBRSxDQUFTelgsQ0FBVCxFQUFXO0VBQUMrRyxZQUFJQSxJQUFFaEMsV0FBWSxZQUFVO0VBQUNnQyxZQUFFLElBQUYsRUFBTyxhQUFXL0csRUFBRTZGLElBQWIsSUFBbUJ3UCxFQUFFa0MsYUFBRixFQUExQixFQUE0QyxhQUFXdlgsRUFBRTZGLElBQWIsS0FBb0J3UCxFQUFFMEIsWUFBRixJQUFpQjFCLEVBQUVrQyxhQUFGLEVBQXJDLENBQTVDO0VBQW9HLE9BQTNILEVBQTZILEVBQTdILENBQU47RUFBd0ksS0FBbFEsQ0FBbVEsT0FBT2xDLEVBQUUzVCxJQUFGLEdBQU8sVUFBUzFCLENBQVQsRUFBVztFQUFDc1YsWUFBSUQsRUFBRTVULE9BQUYsSUFBWXNULElBQUVnQixFQUFFckMsQ0FBRixFQUFJMVQsS0FBRyxFQUFQLENBQWQsRUFBeUIyUyxJQUFFbFUsU0FBU2tJLGFBQVQsQ0FBdUJvTyxFQUFFUyxjQUF6QixDQUEzQixFQUFvRXdCLEdBQXBFLEVBQXdFLE1BQUl6QixFQUFFeFUsTUFBTixLQUFleVcsS0FBSW5DLEVBQUUwQixZQUFGLEVBQUosRUFBcUIxQixFQUFFa0MsYUFBRixFQUFyQixFQUF1Q3hDLEVBQUVVLFNBQUYsQ0FBWW5VLGdCQUFaLENBQTZCLFFBQTdCLEVBQXNDbVcsQ0FBdEMsRUFBd0MsQ0FBQyxDQUF6QyxDQUF2QyxFQUFtRjFDLEVBQUVZLFdBQUYsR0FBY1osRUFBRVUsU0FBRixDQUFZblUsZ0JBQVosQ0FBNkIsUUFBN0IsRUFBc0NvVyxDQUF0QyxFQUF3QyxDQUFDLENBQXpDLENBQWQsR0FBMEQzQyxFQUFFVSxTQUFGLENBQVluVSxnQkFBWixDQUE2QixRQUE3QixFQUFzQ21XLENBQXRDLEVBQXdDLENBQUMsQ0FBekMsQ0FBNUosQ0FBNUU7RUFBc1IsS0FBelMsRUFBMFNwQyxDQUFqVDtFQUFtVCxHQUEvMUcsQ0FBRDs7O0VDREE7O0FBRUEsRUFBTyxJQUFNeEoscUJBQW1CLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLGFBRDhCLEVBUTNCO0VBQUEsaUZBREMsRUFDRDtFQUFBLDBCQUxEdE4sT0FLQztFQUFBLE1BTERBLE9BS0MsZ0NBTFNDLFFBS1Q7RUFBQSw2QkFKRHNOLFVBSUM7RUFBQSxNQUpEQSxVQUlDLG1DQUpZLEtBSVo7RUFBQSxnQ0FIREMsYUFHQztFQUFBLE1BSERBLGFBR0Msc0NBSGUsS0FHZjtFQUFBLG1DQUZEQyxnQkFFQztFQUFBLE1BRkRBLGdCQUVDLHlDQUZrQixnQ0FFbEI7O0VBQ0gsTUFBSSxDQUFDSCxhQUFMLEVBQW9CO0VBQ2xCO0VBQ0Q7O0VBRUQ7RUFDQSxNQUFNMU0sU0FBU1gsU0FBU2EsY0FBVCxDQUNid00sY0FBY3ZNLFlBQWQsQ0FBMkIsZUFBM0IsQ0FEYSxDQUFmOztFQUlBO0VBQ0EsTUFBSSxDQUFDSCxNQUFMLEVBQWE7RUFDWDtFQUNEOztFQUVEO0VBQ0EsTUFBTThNLGFBQ0pILGVBQWUsSUFBZixJQUNBRCxjQUFjdk0sWUFBZCxDQUEyQixlQUEzQixNQUFnRCxNQUZsRDs7RUFJQTtFQUNBdU0sZ0JBQWN0TSxZQUFkLENBQTJCLGVBQTNCLEVBQTRDLENBQUMwTSxVQUE3QztFQUNBOU0sU0FBT0ksWUFBUCxDQUFvQixhQUFwQixFQUFtQzBNLFVBQW5DOztFQUVBO0VBQ0EsTUFBSSxDQUFDQSxVQUFELElBQWVKLGNBQWNLLFlBQWQsQ0FBMkIscUJBQTNCLENBQW5CLEVBQXNFO0VBQ3BFTCxrQkFBY3ZELFNBQWQsR0FBMEJ1RCxjQUFjdk0sWUFBZCxDQUEyQixxQkFBM0IsQ0FBMUI7RUFDRCxHQUZELE1BRU8sSUFBSTJNLGNBQWNKLGNBQWNLLFlBQWQsQ0FBMkIsc0JBQTNCLENBQWxCLEVBQXNFO0VBQzNFTCxrQkFBY3ZELFNBQWQsR0FBMEJ1RCxjQUFjdk0sWUFBZCxDQUN4QixzQkFEd0IsQ0FBMUI7RUFHRDs7RUFFRDtFQUNBLE1BQUl5TSxrQkFBa0IsSUFBdEIsRUFBNEI7RUFDMUIsUUFBTUksZ0JBQWdCckMsTUFBTWxILFNBQU4sQ0FBZ0JuRSxLQUFoQixDQUNuQkMsSUFEbUIsQ0FDZEgsUUFBUUksZ0JBQVIsQ0FBeUJxTixnQkFBekIsQ0FEYyxFQUVuQkksTUFGbUIsQ0FFWjtFQUFBLGFBQVdDLFlBQVlSLGFBQXZCO0VBQUEsS0FGWSxDQUF0Qjs7RUFJQU0sa0JBQWNoTCxPQUFkLENBQXNCLG1CQUFXO0VBQy9CeUssdUJBQWlCUyxPQUFqQixFQUEwQjtFQUN4QjlOLHdCQUR3QjtFQUV4QnVOLG9CQUFZO0VBRlksT0FBMUI7RUFJRCxLQUxEO0VBTUQ7RUFDRixDQXRETTs7RUNGUDs7OztFQVFBOzs7QUFHQSxNQUFhNEwsb0JBQW9CLFNBQXBCQSxpQkFBb0IsR0FTdEI7RUFBQSxpRkFBUCxFQUFPO0VBQUEsaUNBUlRDLGNBUVM7RUFBQSxNQVJPQSxjQVFQLHVDQVJ3Qix3QkFReEI7RUFBQSwrQkFQVEMsWUFPUztFQUFBLE1BUEtBLFlBT0wscUNBUG9CLENBT3BCO0VBQUEsOEJBTlRDLFdBTVM7RUFBQSxNQU5JQSxXQU1KLG9DQU5rQiw4QkFNbEI7RUFBQSwyQkFMVEMsUUFLUztFQUFBLE1BTENBLFFBS0QsaUNBTFksd0NBS1o7RUFBQSw2QkFKVEMsVUFJUztFQUFBLE1BSkdBLFVBSUgsbUNBSmdCLGlDQUloQjtFQUFBLDRCQUhUQyxTQUdTO0VBQUEsTUFIRUEsU0FHRixrQ0FIYyxFQUdkO0VBQUEsaUNBRlRDLGNBRVM7RUFBQSxNQUZPQSxjQUVQLHVDQUZ3QixpQ0FFeEI7RUFBQSxnQ0FEVEMsYUFDUztFQUFBLE1BRE1BLGFBQ04sc0NBRHNCLDhCQUN0Qjs7RUFDVDtFQUNBLE1BQ0UsRUFBRSxtQkFBbUIxWixRQUFyQixLQUNBLEVBQUUsc0JBQXNCTSxNQUF4QixDQURBLElBRUEsQ0FBQ04sU0FBU08sZUFBVCxDQUF5QkMsU0FINUIsRUFLRSxPQUFPLElBQVA7O0VBRUYsTUFBSW1aLHVCQUFKOztFQUVBO0VBQ0EsV0FBU0MsVUFBVCxHQUFzQjtFQUNwQkQscUJBQWlCdEQsV0FBVzhDLGNBQVgsRUFBMkI7RUFDMUNsSSw2QkFBdUJtSSxZQURtQjtFQUUxQzdILHdCQUFrQixJQUZ3QjtFQUcxQ0wsbUJBQWEsK0JBSDZCO0VBSTFDRSxtQkFBYSwrQkFKNkI7RUFLMUNDLGtCQUFZLDhCQUw4QjtFQU0xQ0MseUJBQW1CO0VBTnVCLEtBQTNCLENBQWpCO0VBUUQ7O0VBRUQsV0FBU3VJLGFBQVQsR0FBeUI7RUFDdkIsUUFBSUYsY0FBSixFQUFvQjtFQUNsQkEscUJBQWV2RCxPQUFmO0VBQ0Q7RUFDRjs7RUFFRCxXQUFTMEQsYUFBVCxHQUF5QjtFQUN2QkMsZ0JBQVE5VyxJQUFSLENBQWE7RUFDWG5ELGdCQUFVdVosV0FEQztFQUVYcEMsbUJBQWFxQyxRQUZGO0VBR1h4RixjQUFRMEYsU0FIRztFQUlYckMsY0FKVyxvQkFJRnNCLEdBSkUsRUFJRztFQUNaLFlBQUksQ0FBQ0EsR0FBTCxFQUFVO0VBQ1YsWUFBTXVCLGtCQUFrQmhhLFNBQVNrSSxhQUFULENBQXVCcVIsVUFBdkIsQ0FBeEI7RUFDQVMsd0JBQWdCbFEsU0FBaEIsR0FBNEIyTyxJQUFJQSxHQUFKLENBQVEzTyxTQUFwQztFQUNEO0VBUlUsS0FBYjtFQVVEOztFQUVELFdBQVNtUSxnQkFBVCxHQUE0QjtFQUMxQkYsZ0JBQVEvVyxPQUFSO0VBQ0Q7O0VBRUQ7RUFDQSxXQUFTQyxJQUFULEdBQWdCO0VBQ2QsUUFBTWlYLG1CQUFtQmxhLFNBQVNrSSxhQUFULENBQXVCaVIsY0FBdkIsQ0FBekI7RUFDQSxRQUFNOUwsZ0JBQWdCNk0saUJBQWlCaFMsYUFBakIsQ0FBK0J1UixjQUEvQixDQUF0QjtFQUNBLFFBQU1VLFdBQVdELGlCQUFpQi9aLGdCQUFqQixDQUFrQ3VaLGFBQWxDLENBQWpCOztFQUVBRTtFQUNBRTs7RUFFQXpNLGtCQUFjeEssZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsYUFBSztFQUMzQ3VLLHlCQUFpQkMsYUFBakIsRUFBZ0MsRUFBRXROLFNBQVNtYSxnQkFBWCxFQUFoQztFQUNBM1ksUUFBRWEsY0FBRjtFQUNELEtBSEQ7O0VBS0ErWCxhQUFTeFgsT0FBVCxDQUFpQjtFQUFBLGFBQ2Z5WCxLQUFLdlgsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtFQUNuQ3VLLDJCQUFpQkMsYUFBakIsRUFBZ0M7RUFDOUJ0TixtQkFBU21hLGdCQURxQjtFQUU5QjVNLHNCQUFZO0VBRmtCLFNBQWhDO0VBSUQsT0FMRCxDQURlO0VBQUEsS0FBakI7RUFRRDs7RUFFRDtFQUNBLFdBQVN0SyxPQUFULEdBQW1CO0VBQ2pCaVg7RUFDQUo7RUFDRDs7RUFFRDVXOztFQUVBO0VBQ0EsU0FBTztFQUNMQSxjQURLO0VBRUxEO0VBRkssR0FBUDtFQUlELENBNUZNOztFQ1JQLElBQU1xWCxVQUFVLFNBQVZBLE9BQVUsQ0FBQ3BQLElBQUQsRUFBT3FQLElBQVA7RUFBQSxTQUFnQixhQUFLO0VBQ25DLFFBQUlyUCxRQUFRQSxLQUFLeUMsWUFBTCxDQUFrQixlQUFsQixDQUFaLEVBQWdEO0VBQzlDLFVBQU02TSxXQUFXdFAsS0FBS25LLFlBQUwsQ0FBa0IsZUFBbEIsQ0FBakI7RUFDQSxVQUFJeVosYUFBYSxFQUFiLElBQW1CQSxhQUFhLE1BQXBDLEVBQTRDO0VBQzFDaFosVUFBRWEsY0FBRjs7RUFFQWdMLDJCQUFpQm5DLElBQWpCLEVBQXVCO0VBQ3JCbEwsbUJBQVN1YSxJQURZO0VBRXJCL00seUJBQWU7RUFGTSxTQUF2QjtFQUlEO0VBQ0Y7RUFDRixHQVplO0VBQUEsQ0FBaEI7O0VBY0EsSUFBTWlOLFlBQVksU0FBWkEsU0FBWSxDQUFDdlAsSUFBRCxFQUFPcVAsSUFBUDtFQUFBLFNBQWdCLGFBQUs7RUFDckMsUUFBTUcsYUFBYXhQLEtBQUtzRixhQUF4QjtFQUNBLFFBQU1tSyxrQkFDSkQsV0FBV0Usc0JBQVgsSUFDQUYsV0FBV2xLLGFBQVgsQ0FBeUJxSyxnQkFGM0I7RUFHQSxRQUFNQyxjQUNKSixXQUFXSyxrQkFBWCxJQUFpQ0wsV0FBV2xLLGFBQVgsQ0FBeUJ3SyxpQkFENUQ7O0VBR0E7RUFDQSxRQUFJeFosRUFBRUssT0FBRixJQUFhTCxFQUFFTSxNQUFuQixFQUEyQjs7RUFFM0I7RUFDQTtFQUNBLFlBQVFOLEVBQUVZLE9BQVY7RUFDRTtFQUNBLFdBQUssRUFBTDtFQUNBLFdBQUssRUFBTDtFQUNFa1ksZ0JBQVE5WSxFQUFFQyxhQUFWLEVBQXlCOFksSUFBekIsRUFBK0IvWSxDQUEvQjtFQUNBO0VBQ0Y7RUFDQSxXQUFLLEVBQUw7RUFDQSxXQUFLLEVBQUw7RUFDRUEsVUFBRWEsY0FBRjtFQUNBc1ksd0JBQWdCeFMsYUFBaEIsQ0FBOEIsR0FBOUIsRUFBbUM3RyxLQUFuQztFQUNBO0VBQ0Y7RUFDQSxXQUFLLEVBQUw7RUFDQSxXQUFLLEVBQUw7RUFDRUUsVUFBRWEsY0FBRjtFQUNBeVksb0JBQVkzUyxhQUFaLENBQTBCLEdBQTFCLEVBQStCN0csS0FBL0I7RUFDQTtFQUNGO0VBQ0U7RUFuQko7RUFxQkQsR0FsQ2lCO0VBQUEsQ0FBbEI7O0FBb0NBLE1BQWEyWixXQUFXLFNBQVhBLFFBQVcsR0FLYjtFQUFBLGlGQUFQLEVBQU87RUFBQSwyQkFKVGxiLFFBSVM7RUFBQSxNQUpDQSxRQUlELGlDQUpZLHNCQUlaO0VBQUEsaUNBSFQyWixjQUdTO0VBQUEsTUFIT0EsY0FHUCx1Q0FId0IsOEJBR3hCO0VBQUEsK0JBRlQvSixZQUVTO0VBQUEsTUFGS0EsWUFFTCxxQ0FGb0IsNEJBRXBCO0VBQUEsK0JBRFR1TCxZQUNTO0VBQUEsTUFES0EsWUFDTCxxQ0FEb0IsNEJBQ3BCOztFQUNULE1BQU1DLGlCQUFpQnJiLFNBQVNDLFFBQVQsQ0FBdkI7O0VBRUFvYixpQkFBZXZZLE9BQWYsQ0FBdUIsZ0JBQVE7RUFDN0I7RUFDQSxRQUFNbU4sU0FBU3dLLEtBQUtwUyxhQUFMLENBQW1CdVIsY0FBbkIsQ0FBZjtFQUNBLFFBQUkzSixNQUFKLEVBQVk7RUFDVkEsYUFBT2pOLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDO0VBQUEsZUFDL0J1SyxtQkFBaUIwQyxNQUFqQixFQUF5QixFQUFFL1AsU0FBU3VhLElBQVgsRUFBekIsQ0FEK0I7RUFBQSxPQUFqQztFQUdEOztFQUVEO0VBQ0EsUUFBTXJTLE9BQU9xUyxLQUFLcFMsYUFBTCxDQUFtQndILFlBQW5CLENBQWI7O0VBRUE7RUFDQSxRQUFNMUUsYUFBYW5MLFNBQVNvYixZQUFULEVBQXVCaFQsSUFBdkIsQ0FBbkI7O0VBRUErQyxlQUFXckksT0FBWCxDQUFtQixnQkFBUTtFQUN6QnNJLFdBQUtwSSxnQkFBTCxDQUFzQixPQUF0QixFQUErQndYLFFBQVFwUCxJQUFSLEVBQWNoRCxJQUFkLENBQS9CO0VBQ0FnRCxXQUFLcEksZ0JBQUwsQ0FBc0IsU0FBdEIsRUFBaUMyWCxVQUFVdlAsSUFBVixFQUFnQmhELElBQWhCLENBQWpDO0VBQ0QsS0FIRDtFQUlELEdBbkJEO0VBb0JELENBNUJNOztFQ3JEUDs7OztFQU1BOzs7QUFHQSxNQUFha1QsaUJBQWlCLFNBQWpCQSxjQUFpQixHQUVuQjtFQUFBLGlGQUFQLEVBQU87RUFBQSxpQ0FEVGhDLGNBQ1M7RUFBQSxNQURPQSxjQUNQLHVDQUR3Qiw4QkFDeEI7O0VBQ1Q7RUFDQSxNQUNFLEVBQUUsbUJBQW1CblosUUFBckIsS0FDQSxFQUFFLHNCQUFzQk0sTUFBeEIsQ0FEQSxJQUVBLENBQUNOLFNBQVNPLGVBQVQsQ0FBeUJDLFNBSDVCLEVBS0UsT0FBTyxJQUFQOztFQUVGO0VBQ0EsV0FBU29aLFVBQVQsR0FBc0I7RUFDcEI7RUFDQTtFQUNBdkQsZUFBVzhDLGNBQVgsRUFBMkIsRUFBRTVILGtCQUFrQixJQUFwQixFQUEzQjtFQUNEOztFQUVELFdBQVM2SixXQUFULEdBQXVCO0VBQ3JCLFFBQU10TCxTQUFTOVAsU0FBU3NRLHNCQUFULENBQ2I2SSxlQUFla0MsU0FBZixDQUF5QixDQUF6QixDQURhLEVBRWIsQ0FGYSxDQUFmOztFQUlBLFFBQUl2TCxNQUFKLEVBQVk7RUFDVkEsYUFBT2pOLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLGFBQUs7RUFDcEMsWUFBSXRCLEVBQUVaLE1BQUYsQ0FBU0csWUFBVCxDQUFzQixlQUF0QixNQUEyQyxPQUEvQyxFQUF3RDtFQUN0RFMsWUFBRVosTUFBRixDQUFTMmEsY0FBVDtFQUNEO0VBQ0YsT0FKRDtFQUtEO0VBQ0Y7O0VBRUQ7RUFDQSxXQUFTclksSUFBVCxHQUFnQjtFQUNkMlc7RUFDQXdCO0VBQ0Q7O0VBRURuWTs7RUFFQTtFQUNBLFNBQU87RUFDTEE7RUFESyxHQUFQO0VBR0QsQ0E1Q007O0VDVFA7Ozs7RUFJQTs7QUFFQSxFQUFPLFNBQVNzWSxTQUFULEdBQW9DO0VBQUEsTUFBakJyTyxRQUFpQix1RUFBTixJQUFNOztFQUN6QyxNQUFNc08sU0FDSnRPLFlBQVlsTixTQUFTc1Esc0JBQVQsQ0FBZ0MsdUJBQWhDLENBRGQ7RUFFQSxLQUFHM04sT0FBSCxDQUFXekMsSUFBWCxDQUFnQnNiLE1BQWhCLEVBQXdCLGlCQUFTO0VBQy9CLFFBQU1DLGFBQWEsRUFBbkI7RUFDQSxRQUFJQyxjQUFjLEVBQWxCO0VBQ0EsUUFBSUMsS0FBSyxDQUFUO0VBQ0EsUUFBSUMsS0FBSyxFQUFUOztFQUVBO0VBQ0EsUUFBTUMsWUFBWUMsTUFBTTNiLGdCQUFOLENBQXVCLFVBQXZCLENBQWxCOztFQUVBO0VBQ0EsUUFBTTRiLFVBQVVELE1BQU0zYixnQkFBTixDQUF1QixhQUF2QixDQUFoQjs7RUFFQTtFQUNBLFFBQU02YixZQUNKRixNQUFNM2IsZ0JBQU4sQ0FBdUIsVUFBdkIsRUFBbUMsQ0FBbkMsRUFBc0NBLGdCQUF0QyxDQUF1RCxJQUF2RCxFQUE2RG1DLE1BQTdELEdBQXNFLENBRHhFOztFQUdBO0VBQ0EsUUFBTTJaLGFBQWFILE1BQ2hCM2IsZ0JBRGdCLENBQ0MsVUFERCxFQUNhLENBRGIsRUFFaEJBLGdCQUZnQixDQUVDLElBRkQsRUFFT21DLE1BRjFCOztFQUlBO0VBQ0EsUUFBSTRaLGVBQWUsQ0FBQyxDQUFwQjs7RUFFQTtFQUNBO0VBQ0EsU0FBSyxJQUFJOWEsSUFBSSxDQUFiLEVBQWdCQSxJQUFJMmEsUUFBUXpaLE1BQTVCLEVBQW9DbEIsS0FBSyxDQUF6QyxFQUE0QztFQUMxQyxVQUFJMmEsUUFBUTNhLENBQVIsRUFBV04sWUFBWCxDQUF3QixTQUF4QixDQUFKLEVBQXdDO0VBQ3RDb2IsdUJBQWU5YSxDQUFmO0VBQ0Q7O0VBRURxYSxpQkFBV3JhLENBQVgsSUFBZ0IsRUFBaEI7RUFDQXFhLGlCQUFXcmEsQ0FBWCxJQUFnQjJhLFFBQVEzYSxDQUFSLEVBQVcrSCxXQUEzQjtFQUNEOztFQUVEO0VBQ0EsUUFBSStTLGlCQUFpQixDQUFDLENBQXRCLEVBQXlCO0VBQ3ZCUixvQkFBY0QsV0FBV2xILE1BQVgsQ0FBa0IySCxZQUFsQixFQUFnQyxDQUFoQyxDQUFkO0VBQ0FQLFdBQUtPLFlBQUw7RUFDQU4sV0FBS0UsTUFBTTNiLGdCQUFOLENBQXVCLGFBQXZCLEVBQXNDLENBQXRDLEVBQXlDVyxZQUF6QyxDQUFzRCxTQUF0RCxDQUFMOztFQUVBLFdBQUssSUFBSTZWLElBQUksQ0FBYixFQUFnQkEsSUFBSWlGLEVBQXBCLEVBQXdCakYsS0FBSyxDQUE3QixFQUFnQztFQUM5QjhFLG1CQUFXbEgsTUFBWCxDQUFrQm9ILEtBQUtoRixDQUF2QixFQUEwQixDQUExQixFQUE2QjhFLFdBQVdPLFlBQVlyRixDQUF2QixDQUE3QjtFQUNBOEUsbUJBQVdsSCxNQUFYLENBQWtCeUgsWUFBWSxDQUFaLEdBQWdCckYsQ0FBbEMsRUFBcUMsQ0FBckM7RUFDRDtFQUNGOztFQUVEO0VBQ0EsT0FBR2hVLE9BQUgsQ0FBV3pDLElBQVgsQ0FBZ0IyYixTQUFoQixFQUEyQixlQUFPO0VBQ2hDLFdBQUssSUFBSTdDLElBQUksQ0FBYixFQUFnQkEsSUFBSWlELFVBQXBCLEVBQWdDakQsS0FBSyxDQUFyQyxFQUF3QztFQUN0QyxZQUFJeUMsV0FBV3pDLENBQVgsTUFBa0IsRUFBbEIsSUFBd0J5QyxXQUFXekMsQ0FBWCxNQUFrQixNQUE5QyxFQUF3RDtFQUN0RG1ELGNBQ0doYyxnQkFESCxDQUNvQixJQURwQixFQUVHNlksQ0FGSCxFQUVNalksWUFGTixDQUVtQixPQUZuQixFQUU0QixvQkFGNUI7RUFHRCxTQUpELE1BSU87RUFDTG9iLGNBQUloYyxnQkFBSixDQUFxQixJQUFyQixFQUEyQjZZLENBQTNCLEVBQThCalksWUFBOUIsQ0FBMkMsU0FBM0MsRUFBc0QwYSxXQUFXekMsQ0FBWCxDQUF0RDtFQUNEOztFQUVELFlBQUlrRCxpQkFBaUIsQ0FBQyxDQUF0QixFQUF5QjtFQUN2QixjQUFNRSxPQUFPRCxJQUFJaGMsZ0JBQUosQ0FBcUIsSUFBckIsRUFBMkIrYixZQUEzQixDQUFiO0VBQ0FFLGVBQUtyYixZQUFMLENBQWtCLE9BQWxCLEVBQTJCLHdCQUEzQjtFQUNBcWIsZUFBS3JiLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUMyYSxXQUFuQzs7RUFFQSxlQUFLLElBQUkvRSxLQUFJLENBQWIsRUFBZ0JBLEtBQUlpRixFQUFwQixFQUF3QmpGLE1BQUssQ0FBN0IsRUFBZ0M7RUFDOUJ3RixnQkFDR2hjLGdCQURILENBQ29CLElBRHBCLEVBRUcrYixlQUFldkYsRUFGbEIsRUFFcUI1VixZQUZyQixDQUdJLE9BSEosRUFJSSwwQkFKSjtFQU1EO0VBQ0Y7RUFDRjtFQUNGLEtBekJEO0VBMEJELEdBMUVEO0VBMkVEOztFQ3BGRDs7RUFJQTs7O0FBR0EsTUFBYXNiLE9BQU8sU0FBUEEsSUFBTyxHQUtUO0VBQUEsaUZBQVAsRUFBTztFQUFBLDJCQUpUdmMsUUFJUztFQUFBLE1BSkNBLFFBSUQsaUNBSlksV0FJWjtFQUFBLGtDQUhUd2MsZUFHUztFQUFBLE1BSFFBLGVBR1Isd0NBSDBCLG9CQUcxQjtFQUFBLG1DQUZUQyxnQkFFUztFQUFBLE1BRlNBLGdCQUVULHlDQUY0QixxQkFFNUI7RUFBQSxtQ0FEVEMsbUJBQ1M7RUFBQSxNQURZQSxtQkFDWix5Q0FEcUNGLGVBQ3JDOztFQUNUO0VBQ0EsTUFDRSxFQUFFLG1CQUFtQnRjLFFBQXJCLEtBQ0EsRUFBRSxzQkFBc0JNLE1BQXhCLENBREEsSUFFQSxDQUFDTixTQUFTTyxlQUFULENBQXlCQyxTQUg1QixFQUtFLE9BQU8sSUFBUDs7RUFFRjtFQUNBO0VBQ0EsTUFBTWljLGdCQUFnQjVjLFNBQVNDLFFBQVQsQ0FBdEI7O0VBRUE7RUFDQSxXQUFTNGMsT0FBVCxDQUFpQi9iLE1BQWpCLEVBQTJDO0VBQUEsUUFBbEJnYyxTQUFrQix1RUFBTixJQUFNOztFQUN6QyxRQUFNQyxjQUFjL2MsU0FDZnljLGVBRGUsVUFFbEIzYixPQUFPNFAsYUFBUCxDQUFxQkEsYUFGSCxDQUFwQjtFQUlBLFFBQU1zTSxtQkFBbUJoZCxTQUN2QjBjLGdCQUR1QixFQUV2QjViLE9BQU80UCxhQUFQLENBQXFCQSxhQUZFLENBQXpCOztFQUtBO0VBQ0FxTSxnQkFBWWphLE9BQVosQ0FBb0IsZUFBTztFQUN6Qm1hLFVBQUkvYixZQUFKLENBQWlCLFVBQWpCLEVBQTZCLENBQUMsQ0FBOUI7RUFDQStiLFVBQUlDLGVBQUosQ0FBb0IsZUFBcEI7RUFDRCxLQUhEOztFQUtBRixxQkFBaUJsYSxPQUFqQixDQUF5QixvQkFBWTtFQUNuQ3FhLGVBQVNqYyxZQUFULENBQXNCLGFBQXRCLEVBQXFDLE1BQXJDO0VBQ0QsS0FGRDs7RUFJQTtFQUNBSixXQUFPSSxZQUFQLENBQW9CLFVBQXBCLEVBQWdDLENBQWhDO0VBQ0FKLFdBQU9JLFlBQVAsQ0FBb0IsZUFBcEIsRUFBcUMsTUFBckM7RUFDQSxRQUFJNGIsU0FBSixFQUFlaGMsT0FBT1UsS0FBUDtFQUNmckIsYUFDR2EsY0FESCxDQUNrQkYsT0FBT0csWUFBUCxDQUFvQixlQUFwQixDQURsQixFQUVHaWMsZUFGSCxDQUVtQixhQUZuQjtFQUdEOztFQUVEO0VBQ0EsV0FBU0UsYUFBVCxDQUF1QjFiLENBQXZCLEVBQTBCO0VBQ3hCbWIsWUFBUW5iLEVBQUVDLGFBQVY7RUFDQUQsTUFBRWEsY0FBRixHQUZ3QjtFQUd6Qjs7RUFFRCxXQUFTOGEsZUFBVCxDQUF5QjNiLENBQXpCLEVBQTRCO0VBQzFCO0VBQ0EsUUFBTWtaLGFBQWFsWixFQUFFQyxhQUFyQjtFQUNBLFFBQU1rWixrQkFDSkQsV0FBV0Usc0JBQVgsSUFDQUYsV0FBV2xLLGFBQVgsQ0FBeUJxSyxnQkFGM0I7RUFHQSxRQUFNQyxjQUNKSixXQUFXSyxrQkFBWCxJQUNBTCxXQUFXbEssYUFBWCxDQUF5QndLLGlCQUYzQjs7RUFJQTtFQUNBLFFBQUl4WixFQUFFSyxPQUFGLElBQWFMLEVBQUVNLE1BQW5CLEVBQTJCOztFQUUzQjtFQUNBO0VBQ0EsWUFBUU4sRUFBRVksT0FBVjtFQUNFLFdBQUssRUFBTDtFQUNBLFdBQUssRUFBTDtFQUNFdWEsZ0JBQVFoQyxlQUFSO0VBQ0FuWixVQUFFYSxjQUFGO0VBQ0E7RUFDRixXQUFLLEVBQUw7RUFDQSxXQUFLLEVBQUw7RUFDRXNhLGdCQUFRN0IsV0FBUjtFQUNBdFosVUFBRWEsY0FBRjtFQUNBO0VBQ0Y7RUFDRTtFQVpKO0VBY0Q7O0VBRUQ7RUFDQSxXQUFTK2EsY0FBVCxDQUF3QkMsWUFBeEIsRUFBc0M7RUFDcEMsUUFBTUMsZUFBZXhkLFNBQVMyYyxtQkFBVCxFQUE4QlksWUFBOUIsQ0FBckI7RUFDQTtFQUNBQyxpQkFBYTFhLE9BQWIsQ0FBcUIsZUFBTztFQUMxQm1hLFVBQUlqYSxnQkFBSixDQUFxQixPQUFyQixFQUE4Qm9hLGFBQTlCO0VBQ0FILFVBQUlqYSxnQkFBSixDQUFxQixTQUFyQixFQUFnQ3FhLGVBQWhDO0VBQ0QsS0FIRDtFQUlEOztFQUVELFdBQVNJLGdCQUFULENBQTBCRixZQUExQixFQUF3QztFQUN0QyxRQUFNQyxlQUFleGQsU0FBUzJjLG1CQUFULEVBQThCWSxZQUE5QixDQUFyQjtFQUNBO0VBQ0FDLGlCQUFhMWEsT0FBYixDQUFxQixlQUFPO0VBQzFCbWEsVUFBSS9aLG1CQUFKLENBQXdCLE9BQXhCLEVBQWlDa2EsYUFBakM7RUFDQUgsVUFBSS9aLG1CQUFKLENBQXdCLFNBQXhCLEVBQW1DbWEsZUFBbkM7RUFDRCxLQUhEO0VBSUQ7O0VBRUQ7RUFDQSxXQUFTbGEsT0FBVCxHQUFtQjtFQUNqQnlaLGtCQUFjOVosT0FBZCxDQUFzQjJhLGdCQUF0QjtFQUNEOztFQUVEO0VBQ0EsV0FBU3JhLElBQVQsR0FBZ0I7RUFDZHdaLGtCQUFjOVosT0FBZCxDQUFzQndhLGNBQXRCO0VBQ0Q7O0VBRUQ7RUFDQWxhOztFQUVBO0VBQ0EsU0FBTztFQUNMQSxjQURLO0VBRUxEO0VBRkssR0FBUDtFQUlELENBMUhNOztFQ1BQOzs7O0VBSUEsSUFBTXVhLGlCQUFpQixTQUFqQkEsY0FBaUIsQ0FDckJDLFFBRHFCLEVBRXJCL1MsTUFGcUIsRUFPbEI7RUFBQSxpRkFEQyxFQUNEO0VBQUEsZ0NBSERDLGFBR0M7RUFBQSxNQUhEQSxhQUdDLHNDQUhlLGdDQUdmO0VBQUEsbUNBRkRDLHNCQUVDO0VBQUEsTUFGREEsc0JBRUMseUNBRndCLGlDQUV4Qjs7RUFDSCxNQUFJLENBQUM2UyxRQUFMLEVBQWU7RUFDYjtFQUNEOztFQUVELE1BQU01UyxpQkFBaUJVLE1BQU1sSCxTQUFOLENBQWdCbkUsS0FBaEIsQ0FBc0JDLElBQXRCLENBQ3JCc2QsU0FBU3JkLGdCQUFULENBQTBCd0ssc0JBQTFCLENBRHFCLENBQXZCOztFQUlBO0VBQ0FDLGlCQUFlakksT0FBZixDQUF1QixtQkFBVztFQUNoQ2tJLFlBQVFySyxTQUFSLENBQWtCK0gsTUFBbEIsQ0FBeUJtQyxhQUF6QjtFQUNELEdBRkQ7O0VBSUE7RUFDQUQsU0FBTzFJLFVBQVAsQ0FBa0JtSSxXQUFsQixDQUE4Qk8sTUFBOUI7RUFDRCxDQXZCRDs7RUF5QkE7QUFDQSxNQUFhZ1QsWUFBWSxTQUFaQSxTQUFZLEdBTWQ7RUFBQSxrRkFBUCxFQUFPO0VBQUEsNkJBTFQzZCxRQUtTO0VBQUEsTUFMVEEsUUFLUyxrQ0FMRSxlQUtGO0VBQUEsbUNBSlRpTCxjQUlTO0VBQUEsTUFKVEEsY0FJUyx3Q0FKUSx1QkFJUjtFQUFBLG9DQUhUSixzQkFHUztFQUFBLE1BSFRBLHNCQUdTLHlDQUhnQixpQ0FHaEI7RUFBQSxrQ0FGVEQsYUFFUztFQUFBLE1BRlRBLGFBRVMsdUNBRk8sZ0NBRVA7RUFBQSw0QkFEVDNLLE9BQ1M7RUFBQSxNQURUQSxPQUNTLGlDQURDQyxRQUNEOztFQUNULE1BQU1nTCxhQUFhTSxNQUFNbEgsU0FBTixDQUFnQm5FLEtBQWhCLENBQXNCQyxJQUF0QixDQUNqQkgsUUFBUUksZ0JBQVIsQ0FBeUJMLFFBQXpCLENBRGlCLENBQW5COztFQUlBa0wsYUFBV3JJLE9BQVgsQ0FBbUIsZ0JBQVE7RUFDekIsUUFBTThILFNBQVMxSyxRQUFRbUksYUFBUixDQUFzQjZDLGNBQXRCLENBQWY7O0VBRUEsUUFBSU4sTUFBSixFQUFZO0VBQ1ZBLGFBQU81SCxnQkFBUCxDQUF3QixPQUF4QixFQUFpQztFQUFBLGVBQy9CMGEsZUFBZXRTLElBQWYsRUFBcUJSLE1BQXJCLEVBQTZCLEVBQUVDLDRCQUFGLEVBQWlCQyw4Q0FBakIsRUFBN0IsQ0FEK0I7RUFBQSxPQUFqQztFQUdEO0VBQ0YsR0FSRDtFQVNELENBcEJNOztFQzlCUDs7OztFQ0FBOztFQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9
