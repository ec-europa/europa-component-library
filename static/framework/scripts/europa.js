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
        : typeof self !== 'undefined' ? self : {};

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
      : reIsBadHex.test(value) ? NAN : +value;
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
    message.setAttribute('aria-hidden', true);
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

  /**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.1.1
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
    this.version = '"3.1.1"';
    this.userAgent =
      window.navigator.userAgent || 'no `userAgent` provided by the browser';
    this.props = {
      noStyles: o.noStyles || false,
      stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
      parentClass: o.parentClass || 'js-stickybit-parent',
      scrollEl: document.querySelector(o.scrollEl) || window,
      stickyClass: o.stickyClass || 'js-is-sticky',
      stuckClass: o.stuckClass || 'js-is-stuck',
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
    var parent = it.parent;
    var isCustom = !this.isWin && p.positionVal === 'fixed';
    var isBottom = p.verticalPosition !== 'bottom';
    var scrollElOffset = isCustom ? p.scrollEl.getBoundingClientRect().top : 0;
    var stickyStart = isCustom
      ? parent.getBoundingClientRect().top - scrollElOffset
      : parent.getBoundingClientRect().top;
    it.offset = scrollElOffset + p.stickyBitStickyOffset;
    it.stickyStart = isBottom ? stickyStart - it.offset : 0;
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
    var stop = it.stickyStop;
    var stl = e.style; // cache props

    var ns = p.noStyles;
    var pv = p.positionVal;
    var se = p.scrollEl;
    var sticky = p.stickyClass;
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
    var scroll =
      this.isWin || se.getBoundingClientRect().top
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
                : e.distance < t.distance ? 1 : 0;
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
          ? '.ecl-navigation-inpage'
          : _ref$stickySelector,
      _ref$spySelector = _ref.spySelector,
      spySelector =
        _ref$spySelector === undefined
          ? '.ecl-navigation-inpage__link'
          : _ref$spySelector,
      _ref$spyClass = _ref.spyClass,
      spyClass =
        _ref$spyClass === undefined
          ? 'ecl-navigation-inpage__link--is-active'
          : _ref$spyClass,
      _ref$spyTrigger = _ref.spyTrigger,
      spyTrigger =
        _ref$spyTrigger === undefined
          ? '.ecl-navigation-inpage__trigger'
          : _ref$spyTrigger,
      _ref$spyOffset = _ref.spyOffset,
      spyOffset = _ref$spyOffset === undefined ? 20 : _ref$spyOffset;

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

    function initScrollSpy() {
      // init scrollspy
      // eslint-disable-next-line no-undef
      gumshoe_min.init({
        selector: spySelector,
        activeClass: spyClass,
        offset: spyOffset,
        callback: function callback(nav) {
          // eslint-disable-line
          if (!nav) return;
          var navigationTitle = document.querySelector(spyTrigger);
          navigationTitle.innerHTML = nav.nav.innerHTML;
        },
      });
    }

    // INIT
    function init() {
      initSticky();
      initScrollSpy();
    }

    init();

    // REVEAL API
    return {
      init: init,
    };
  };

  var onClick = function onClick(node, menu) {
    return function(e) {
      if (node && node.hasAttribute('aria-haspopup')) {
        var hasPopup = node.getAttribute('aria-haspopup');
        if (hasPopup === '' || hasPopup === 'true') {
          e.preventDefault();

          toggleExpandable(node, {
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
          /* e.preventDefault();
        toggleExpandable(e.currentTarget, {
          context: menu,
          closeSiblings: true,
        }); */
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
          return toggleExpandable(toggle, { context: menu });
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
  exports.eclTables = eclTables;
  exports.tabs = tabs;
  exports.timelines = timelines;

  return exports;
})({});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXVyb3BhLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcmFtZXdvcmsvYmFzZS9oZWxwZXJzL2RvbS5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC1hY2NvcmRpb25zL2FjY29yZGlvbnMuanMiLCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudHMvZWNsLWNhcm91c2Vscy9jYXJvdXNlbHMuanMiLCIuLi8uLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50cy9lY2wtY29udGV4dC1uYXZzL2VjbC1jb250ZXh0LW5hdnMuanMiLCIuLi8uLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50cy9lY2wtZHJvcGRvd25zL2VjbC1kcm9wZG93bnMuanMiLCIuLi8uLi8uLi9mcmFtZXdvcmsvY29tcG9uZW50cy9lY2wtZGlhbG9ncy9kaWFsb2dzLmpzIiwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudHMvZWNsLWV4cGFuZGFibGVzL2V4cGFuZGFibGVzLmpzIiwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudHMvZWNsLWZvcm1zL2VjbC1mb3Jtcy1maWxlLXVwbG9hZHMvZWNsLWZvcm1zLWZpbGUtdXBsb2Fkcy5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC1sYW5nLXNlbGVjdC1wYWdlcy9sYW5nLXNlbGVjdC1wYWdlcy5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC1tZXNzYWdlcy9tZXNzYWdlcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdGlja3liaXRzL2Rpc3Qvc3RpY2t5Yml0cy5lcy5qcyIsIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndW1zaG9lanMvZGlzdC9qcy9ndW1zaG9lLm1pbi5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC1uYXZpZ2F0aW9uL2VjbC1uYXZpZ2F0aW9uLWlucGFnZXMvZWNsLW5hdmlnYXRpb24taW5wYWdlcy5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC1uYXZpZ2F0aW9uL2VjbC1uYXZpZ2F0aW9uLW1lbnVzL21lZ2FtZW51LmpzIiwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudHMvZWNsLXRhYmxlcy9lY2wtdGFibGVzLmpzIiwiLi4vLi4vLi4vZnJhbWV3b3JrL2NvbXBvbmVudHMvZWNsLXRhYnMvdGFicy5qcyIsIi4uLy4uLy4uL2ZyYW1ld29yay9jb21wb25lbnRzL2VjbC10aW1lbGluZXMvdGltZWxpbmVzLmpzIiwiLi4vLi4vLi4vcGFja2FnZXMvcHJlc2V0cy9lY2wtcHJlc2V0LWZ1bGwvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgaGVscGVyXG5leHBvcnQgY29uc3QgcXVlcnlBbGwgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT5cbiAgW10uc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvLyBIZWF2aWx5IGluc3BpcmVkIGJ5IHRoZSBhY2NvcmRpb24gY29tcG9uZW50IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZyZW5kL2ZyZW5kLmNvXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IGFjY29yZGlvbnMgPSAoe1xuICBzZWxlY3Rvcjogc2VsZWN0b3IgPSAnLmVjbC1hY2NvcmRpb24nLFxuICBoZWFkZXJTZWxlY3RvcjogaGVhZGVyU2VsZWN0b3IgPSAnLmVjbC1hY2NvcmRpb25fX2hlYWRlcicsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgLy8gU0VUVVBcbiAgLy8gc2V0IGFjY29yZGlvbiBlbGVtZW50IE5vZGVMaXN0c1xuICBjb25zdCBhY2NvcmRpb25Db250YWluZXJzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuXG4gIC8vIEFDVElPTlNcbiAgZnVuY3Rpb24gaGlkZVBhbmVsKHRhcmdldCkge1xuICAgIC8vIGdldCBwYW5lbFxuICAgIGNvbnN0IGFjdGl2ZVBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICB0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgICApO1xuXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICdmYWxzZScpO1xuXG4gICAgLy8gdG9nZ2xlIGFyaWEtaGlkZGVuXG4gICAgYWN0aXZlUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH1cblxuICBmdW5jdGlvbiBzaG93UGFuZWwodGFyZ2V0KSB7XG4gICAgLy8gZ2V0IHBhbmVsXG4gICAgY29uc3QgYWN0aXZlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICAgICk7XG5cbiAgICAvLyBzZXQgYXR0cmlidXRlcyBvbiBoZWFkZXJcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpO1xuXG4gICAgLy8gdG9nZ2xlIGFyaWEtaGlkZGVuIGFuZCBzZXQgaGVpZ2h0IG9uIHBhbmVsXG4gICAgYWN0aXZlUGFuZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICdmYWxzZScpO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlUGFuZWwodGFyZ2V0KSB7XG4gICAgLy8gY2xvc2UgdGFyZ2V0IHBhbmVsIGlmIGFscmVhZHkgYWN0aXZlXG4gICAgaWYgKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnKSB7XG4gICAgICBoaWRlUGFuZWwodGFyZ2V0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93UGFuZWwodGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdpdmVIZWFkZXJGb2N1cyhoZWFkZXJTZXQsIGkpIHtcbiAgICAvLyBzZXQgYWN0aXZlIGZvY3VzXG4gICAgaGVhZGVyU2V0W2ldLmZvY3VzKCk7XG4gIH1cblxuICAvLyBFVkVOVFNcbiAgZnVuY3Rpb24gZXZlbnRIZWFkZXJDbGljayhlKSB7XG4gICAgdG9nZ2xlUGFuZWwoZS5jdXJyZW50VGFyZ2V0KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50SGVhZGVyS2V5ZG93bihlKSB7XG4gICAgLy8gY29sbGVjdCBoZWFkZXIgdGFyZ2V0cywgYW5kIHRoZWlyIHByZXYvbmV4dFxuICAgIGNvbnN0IGN1cnJlbnRIZWFkZXIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgaXNNb2RpZmllcktleSA9IGUubWV0YUtleSB8fCBlLmFsdEtleTtcbiAgICAvLyBnZXQgY29udGV4dCBvZiBhY2NvcmRpb24gY29udGFpbmVyIGFuZCBpdHMgY2hpbGRyZW5cbiAgICBjb25zdCB0aGlzQ29udGFpbmVyID0gY3VycmVudEhlYWRlci5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdGhlc2VIZWFkZXJzID0gcXVlcnlBbGwoaGVhZGVyU2VsZWN0b3IsIHRoaXNDb250YWluZXIpO1xuICAgIGNvbnN0IGN1cnJlbnRIZWFkZXJJbmRleCA9IFtdLmluZGV4T2YuY2FsbCh0aGVzZUhlYWRlcnMsIGN1cnJlbnRIZWFkZXIpO1xuXG4gICAgLy8gZG9uJ3QgY2F0Y2gga2V5IGV2ZW50cyB3aGVuIOKMmCBvciBBbHQgbW9kaWZpZXIgaXMgcHJlc2VudFxuICAgIGlmIChpc01vZGlmaWVyS2V5KSByZXR1cm47XG5cbiAgICAvLyBjYXRjaCBlbnRlci9zcGFjZSwgbGVmdC9yaWdodCBhbmQgdXAvZG93biBhcnJvdyBrZXkgZXZlbnRzXG4gICAgLy8gaWYgbmV3IHBhbmVsIHNob3cgaXQsIGlmIG5leHQvcHJldiBtb3ZlIGZvY3VzXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMTM6XG4gICAgICBjYXNlIDMyOlxuICAgICAgICB0b2dnbGVQYW5lbChjdXJyZW50SGVhZGVyKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMzc6XG4gICAgICBjYXNlIDM4OiB7XG4gICAgICAgIGNvbnN0IHByZXZpb3VzSGVhZGVySW5kZXggPVxuICAgICAgICAgIGN1cnJlbnRIZWFkZXJJbmRleCA9PT0gMFxuICAgICAgICAgICAgPyB0aGVzZUhlYWRlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgOiBjdXJyZW50SGVhZGVySW5kZXggLSAxO1xuICAgICAgICBnaXZlSGVhZGVyRm9jdXModGhlc2VIZWFkZXJzLCBwcmV2aW91c0hlYWRlckluZGV4KTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgMzk6XG4gICAgICBjYXNlIDQwOiB7XG4gICAgICAgIGNvbnN0IG5leHRIZWFkZXJJbmRleCA9XG4gICAgICAgICAgY3VycmVudEhlYWRlckluZGV4IDwgdGhlc2VIZWFkZXJzLmxlbmd0aCAtIDFcbiAgICAgICAgICAgID8gY3VycmVudEhlYWRlckluZGV4ICsgMVxuICAgICAgICAgICAgOiAwO1xuICAgICAgICBnaXZlSGVhZGVyRm9jdXModGhlc2VIZWFkZXJzLCBuZXh0SGVhZGVySW5kZXgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQklORCBFVkVOVFNcbiAgZnVuY3Rpb24gYmluZEFjY29yZGlvbkV2ZW50cyhhY2NvcmRpb25Db250YWluZXIpIHtcbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gcXVlcnlBbGwoaGVhZGVyU2VsZWN0b3IsIGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgLy8gYmluZCBhbGwgYWNjb3JkaW9uIGhlYWRlciBjbGljayBhbmQga2V5ZG93biBldmVudHNcbiAgICBhY2NvcmRpb25IZWFkZXJzLmZvckVhY2goYWNjb3JkaW9uSGVhZGVyID0+IHtcbiAgICAgIGFjY29yZGlvbkhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGVhZGVyQ2xpY2spO1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudEhlYWRlcktleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVU5CSU5EIEVWRU5UU1xuICBmdW5jdGlvbiB1bmJpbmRBY2NvcmRpb25FdmVudHMoYWNjb3JkaW9uQ29udGFpbmVyKSB7XG4gICAgY29uc3QgYWNjb3JkaW9uSGVhZGVycyA9IHF1ZXJ5QWxsKGhlYWRlclNlbGVjdG9yLCBhY2NvcmRpb25Db250YWluZXIpO1xuICAgIC8vIHVuYmluZCBhbGwgYWNjb3JkaW9uIGhlYWRlciBjbGljayBhbmQga2V5ZG93biBldmVudHNcbiAgICBhY2NvcmRpb25IZWFkZXJzLmZvckVhY2goYWNjb3JkaW9uSGVhZGVyID0+IHtcbiAgICAgIGFjY29yZGlvbkhlYWRlci5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50SGVhZGVyQ2xpY2spO1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudEhlYWRlcktleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGFjY29yZGlvbkNvbnRhaW5lcnMuZm9yRWFjaChhY2NvcmRpb25Db250YWluZXIgPT4ge1xuICAgICAgdW5iaW5kQWNjb3JkaW9uRXZlbnRzKGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaWYgKGFjY29yZGlvbkNvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICBhY2NvcmRpb25Db250YWluZXJzLmZvckVhY2goYWNjb3JkaW9uQ29udGFpbmVyID0+IHtcbiAgICAgICAgYmluZEFjY29yZGlvbkV2ZW50cyhhY2NvcmRpb25Db250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgYWNjb3JkaW9ucztcbiIsIi8qKlxuICogbG9kYXNoIChDdXN0b20gQnVpbGQpIDxodHRwczovL2xvZGFzaC5jb20vPlxuICogQnVpbGQ6IGBsb2Rhc2ggbW9kdWxhcml6ZSBleHBvcnRzPVwibnBtXCIgLW8gLi9gXG4gKiBDb3B5cmlnaHQgalF1ZXJ5IEZvdW5kYXRpb24gYW5kIG90aGVyIGNvbnRyaWJ1dG9ycyA8aHR0cHM6Ly9qcXVlcnkub3JnLz5cbiAqIFJlbGVhc2VkIHVuZGVyIE1JVCBsaWNlbnNlIDxodHRwczovL2xvZGFzaC5jb20vbGljZW5zZT5cbiAqIEJhc2VkIG9uIFVuZGVyc2NvcmUuanMgMS44LjMgPGh0dHA6Ly91bmRlcnNjb3JlanMub3JnL0xJQ0VOU0U+XG4gKiBDb3B5cmlnaHQgSmVyZW15IEFzaGtlbmFzLCBEb2N1bWVudENsb3VkIGFuZCBJbnZlc3RpZ2F0aXZlIFJlcG9ydGVycyAmIEVkaXRvcnNcbiAqL1xuXG4vKiogVXNlZCBhcyB0aGUgYFR5cGVFcnJvcmAgbWVzc2FnZSBmb3IgXCJGdW5jdGlvbnNcIiBtZXRob2RzLiAqL1xudmFyIEZVTkNfRVJST1JfVEVYVCA9ICdFeHBlY3RlZCBhIGZ1bmN0aW9uJztcblxuLyoqIFVzZWQgYXMgcmVmZXJlbmNlcyBmb3IgdmFyaW91cyBgTnVtYmVyYCBjb25zdGFudHMuICovXG52YXIgTkFOID0gMCAvIDA7XG5cbi8qKiBgT2JqZWN0I3RvU3RyaW5nYCByZXN1bHQgcmVmZXJlbmNlcy4gKi9cbnZhciBzeW1ib2xUYWcgPSAnW29iamVjdCBTeW1ib2xdJztcblxuLyoqIFVzZWQgdG8gbWF0Y2ggbGVhZGluZyBhbmQgdHJhaWxpbmcgd2hpdGVzcGFjZS4gKi9cbnZhciByZVRyaW0gPSAvXlxccyt8XFxzKyQvZztcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJhZCBzaWduZWQgaGV4YWRlY2ltYWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmFkSGV4ID0gL15bLStdMHhbMC05YS1mXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBiaW5hcnkgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzQmluYXJ5ID0gL14wYlswMV0rJC9pO1xuXG4vKiogVXNlZCB0byBkZXRlY3Qgb2N0YWwgc3RyaW5nIHZhbHVlcy4gKi9cbnZhciByZUlzT2N0YWwgPSAvXjBvWzAtN10rJC9pO1xuXG4vKiogQnVpbHQtaW4gbWV0aG9kIHJlZmVyZW5jZXMgd2l0aG91dCBhIGRlcGVuZGVuY3kgb24gYHJvb3RgLiAqL1xudmFyIGZyZWVQYXJzZUludCA9IHBhcnNlSW50O1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYGdsb2JhbGAgZnJvbSBOb2RlLmpzLiAqL1xudmFyIGZyZWVHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsID09ICdvYmplY3QnICYmIGdsb2JhbCAmJiBnbG9iYWwuT2JqZWN0ID09PSBPYmplY3QgJiYgZ2xvYmFsO1xuXG4vKiogRGV0ZWN0IGZyZWUgdmFyaWFibGUgYHNlbGZgLiAqL1xudmFyIGZyZWVTZWxmID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgJiYgc2VsZiAmJiBzZWxmLk9iamVjdCA9PT0gT2JqZWN0ICYmIHNlbGY7XG5cbi8qKiBVc2VkIGFzIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWwgb2JqZWN0LiAqL1xudmFyIHJvb3QgPSBmcmVlR2xvYmFsIHx8IGZyZWVTZWxmIHx8IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbi8qKiBVc2VkIGZvciBidWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcy4gKi9cbnZhciBvYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8qKlxuICogVXNlZCB0byByZXNvbHZlIHRoZVxuICogW2B0b1N0cmluZ1RhZ2BdKGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLW9iamVjdC5wcm90b3R5cGUudG9zdHJpbmcpXG4gKiBvZiB2YWx1ZXMuXG4gKi9cbnZhciBvYmplY3RUb1N0cmluZyA9IG9iamVjdFByb3RvLnRvU3RyaW5nO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXgsXG4gICAgbmF0aXZlTWluID0gTWF0aC5taW47XG5cbi8qKlxuICogR2V0cyB0aGUgdGltZXN0YW1wIG9mIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoYXQgaGF2ZSBlbGFwc2VkIHNpbmNlXG4gKiB0aGUgVW5peCBlcG9jaCAoMSBKYW51YXJ5IDE5NzAgMDA6MDA6MDAgVVRDKS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDIuNC4wXG4gKiBAY2F0ZWdvcnkgRGF0ZVxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgdGltZXN0YW1wLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmRlZmVyKGZ1bmN0aW9uKHN0YW1wKSB7XG4gKiAgIGNvbnNvbGUubG9nKF8ubm93KCkgLSBzdGFtcCk7XG4gKiB9LCBfLm5vdygpKTtcbiAqIC8vID0+IExvZ3MgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaXQgdG9vayBmb3IgdGhlIGRlZmVycmVkIGludm9jYXRpb24uXG4gKi9cbnZhciBub3cgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHJvb3QuRGF0ZS5ub3coKTtcbn07XG5cbi8qKlxuICogQ3JlYXRlcyBhIGRlYm91bmNlZCBmdW5jdGlvbiB0aGF0IGRlbGF5cyBpbnZva2luZyBgZnVuY2AgdW50aWwgYWZ0ZXIgYHdhaXRgXG4gKiBtaWxsaXNlY29uZHMgaGF2ZSBlbGFwc2VkIHNpbmNlIHRoZSBsYXN0IHRpbWUgdGhlIGRlYm91bmNlZCBmdW5jdGlvbiB3YXNcbiAqIGludm9rZWQuIFRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gY29tZXMgd2l0aCBhIGBjYW5jZWxgIG1ldGhvZCB0byBjYW5jZWxcbiAqIGRlbGF5ZWQgYGZ1bmNgIGludm9jYXRpb25zIGFuZCBhIGBmbHVzaGAgbWV0aG9kIHRvIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLlxuICogUHJvdmlkZSBgb3B0aW9uc2AgdG8gaW5kaWNhdGUgd2hldGhlciBgZnVuY2Agc2hvdWxkIGJlIGludm9rZWQgb24gdGhlXG4gKiBsZWFkaW5nIGFuZC9vciB0cmFpbGluZyBlZGdlIG9mIHRoZSBgd2FpdGAgdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkXG4gKiB3aXRoIHRoZSBsYXN0IGFyZ3VtZW50cyBwcm92aWRlZCB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50XG4gKiBjYWxscyB0byB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHJldHVybiB0aGUgcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYFxuICogaW52b2NhdGlvbi5cbiAqXG4gKiAqKk5vdGU6KiogSWYgYGxlYWRpbmdgIGFuZCBgdHJhaWxpbmdgIG9wdGlvbnMgYXJlIGB0cnVlYCwgYGZ1bmNgIGlzXG4gKiBpbnZva2VkIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0IG9ubHkgaWYgdGhlIGRlYm91bmNlZCBmdW5jdGlvblxuICogaXMgaW52b2tlZCBtb3JlIHRoYW4gb25jZSBkdXJpbmcgdGhlIGB3YWl0YCB0aW1lb3V0LlxuICpcbiAqIElmIGB3YWl0YCBpcyBgMGAgYW5kIGBsZWFkaW5nYCBpcyBgZmFsc2VgLCBgZnVuY2AgaW52b2NhdGlvbiBpcyBkZWZlcnJlZFxuICogdW50aWwgdG8gdGhlIG5leHQgdGljaywgc2ltaWxhciB0byBgc2V0VGltZW91dGAgd2l0aCBhIHRpbWVvdXQgb2YgYDBgLlxuICpcbiAqIFNlZSBbRGF2aWQgQ29yYmFjaG8ncyBhcnRpY2xlXShodHRwczovL2Nzcy10cmlja3MuY29tL2RlYm91bmNpbmctdGhyb3R0bGluZy1leHBsYWluZWQtZXhhbXBsZXMvKVxuICogZm9yIGRldGFpbHMgb3ZlciB0aGUgZGlmZmVyZW5jZXMgYmV0d2VlbiBgXy5kZWJvdW5jZWAgYW5kIGBfLnRocm90dGxlYC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGRlYm91bmNlLlxuICogQHBhcmFtIHtudW1iZXJ9IFt3YWl0PTBdIFRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIGRlbGF5LlxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zPXt9XSBUaGUgb3B0aW9ucyBvYmplY3QuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmxlYWRpbmc9ZmFsc2VdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgbGVhZGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLm1heFdhaXRdXG4gKiAgVGhlIG1heGltdW0gdGltZSBgZnVuY2AgaXMgYWxsb3dlZCB0byBiZSBkZWxheWVkIGJlZm9yZSBpdCdzIGludm9rZWQuXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRyYWlsaW5nPXRydWVdXG4gKiAgU3BlY2lmeSBpbnZva2luZyBvbiB0aGUgdHJhaWxpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGRlYm91bmNlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogLy8gQXZvaWQgY29zdGx5IGNhbGN1bGF0aW9ucyB3aGlsZSB0aGUgd2luZG93IHNpemUgaXMgaW4gZmx1eC5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdyZXNpemUnLCBfLmRlYm91bmNlKGNhbGN1bGF0ZUxheW91dCwgMTUwKSk7XG4gKlxuICogLy8gSW52b2tlIGBzZW5kTWFpbGAgd2hlbiBjbGlja2VkLCBkZWJvdW5jaW5nIHN1YnNlcXVlbnQgY2FsbHMuXG4gKiBqUXVlcnkoZWxlbWVudCkub24oJ2NsaWNrJywgXy5kZWJvdW5jZShzZW5kTWFpbCwgMzAwLCB7XG4gKiAgICdsZWFkaW5nJzogdHJ1ZSxcbiAqICAgJ3RyYWlsaW5nJzogZmFsc2VcbiAqIH0pKTtcbiAqXG4gKiAvLyBFbnN1cmUgYGJhdGNoTG9nYCBpcyBpbnZva2VkIG9uY2UgYWZ0ZXIgMSBzZWNvbmQgb2YgZGVib3VuY2VkIGNhbGxzLlxuICogdmFyIGRlYm91bmNlZCA9IF8uZGVib3VuY2UoYmF0Y2hMb2csIDI1MCwgeyAnbWF4V2FpdCc6IDEwMDAgfSk7XG4gKiB2YXIgc291cmNlID0gbmV3IEV2ZW50U291cmNlKCcvc3RyZWFtJyk7XG4gKiBqUXVlcnkoc291cmNlKS5vbignbWVzc2FnZScsIGRlYm91bmNlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyBkZWJvdW5jZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIGRlYm91bmNlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsYXN0QXJncyxcbiAgICAgIGxhc3RUaGlzLFxuICAgICAgbWF4V2FpdCxcbiAgICAgIHJlc3VsdCxcbiAgICAgIHRpbWVySWQsXG4gICAgICBsYXN0Q2FsbFRpbWUsXG4gICAgICBsYXN0SW52b2tlVGltZSA9IDAsXG4gICAgICBsZWFkaW5nID0gZmFsc2UsXG4gICAgICBtYXhpbmcgPSBmYWxzZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICB3YWl0ID0gdG9OdW1iZXIod2FpdCkgfHwgMDtcbiAgaWYgKGlzT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgbGVhZGluZyA9ICEhb3B0aW9ucy5sZWFkaW5nO1xuICAgIG1heGluZyA9ICdtYXhXYWl0JyBpbiBvcHRpb25zO1xuICAgIG1heFdhaXQgPSBtYXhpbmcgPyBuYXRpdmVNYXgodG9OdW1iZXIob3B0aW9ucy5tYXhXYWl0KSB8fCAwLCB3YWl0KSA6IG1heFdhaXQ7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuXG4gIGZ1bmN0aW9uIGludm9rZUZ1bmModGltZSkge1xuICAgIHZhciBhcmdzID0gbGFzdEFyZ3MsXG4gICAgICAgIHRoaXNBcmcgPSBsYXN0VGhpcztcblxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIHJlc3VsdCA9IGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxlYWRpbmdFZGdlKHRpbWUpIHtcbiAgICAvLyBSZXNldCBhbnkgYG1heFdhaXRgIHRpbWVyLlxuICAgIGxhc3RJbnZva2VUaW1lID0gdGltZTtcbiAgICAvLyBTdGFydCB0aGUgdGltZXIgZm9yIHRoZSB0cmFpbGluZyBlZGdlLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgLy8gSW52b2tlIHRoZSBsZWFkaW5nIGVkZ2UuXG4gICAgcmV0dXJuIGxlYWRpbmcgPyBpbnZva2VGdW5jKHRpbWUpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVtYWluaW5nV2FpdCh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZSxcbiAgICAgICAgcmVzdWx0ID0gd2FpdCAtIHRpbWVTaW5jZUxhc3RDYWxsO1xuXG4gICAgcmV0dXJuIG1heGluZyA/IG5hdGl2ZU1pbihyZXN1bHQsIG1heFdhaXQgLSB0aW1lU2luY2VMYXN0SW52b2tlKSA6IHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3VsZEludm9rZSh0aW1lKSB7XG4gICAgdmFyIHRpbWVTaW5jZUxhc3RDYWxsID0gdGltZSAtIGxhc3RDYWxsVGltZSxcbiAgICAgICAgdGltZVNpbmNlTGFzdEludm9rZSA9IHRpbWUgLSBsYXN0SW52b2tlVGltZTtcblxuICAgIC8vIEVpdGhlciB0aGlzIGlzIHRoZSBmaXJzdCBjYWxsLCBhY3Rpdml0eSBoYXMgc3RvcHBlZCBhbmQgd2UncmUgYXQgdGhlXG4gICAgLy8gdHJhaWxpbmcgZWRnZSwgdGhlIHN5c3RlbSB0aW1lIGhhcyBnb25lIGJhY2t3YXJkcyBhbmQgd2UncmUgdHJlYXRpbmdcbiAgICAvLyBpdCBhcyB0aGUgdHJhaWxpbmcgZWRnZSwgb3Igd2UndmUgaGl0IHRoZSBgbWF4V2FpdGAgbGltaXQuXG4gICAgcmV0dXJuIChsYXN0Q2FsbFRpbWUgPT09IHVuZGVmaW5lZCB8fCAodGltZVNpbmNlTGFzdENhbGwgPj0gd2FpdCkgfHxcbiAgICAgICh0aW1lU2luY2VMYXN0Q2FsbCA8IDApIHx8IChtYXhpbmcgJiYgdGltZVNpbmNlTGFzdEludm9rZSA+PSBtYXhXYWl0KSk7XG4gIH1cblxuICBmdW5jdGlvbiB0aW1lckV4cGlyZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKTtcbiAgICBpZiAoc2hvdWxkSW52b2tlKHRpbWUpKSB7XG4gICAgICByZXR1cm4gdHJhaWxpbmdFZGdlKHRpbWUpO1xuICAgIH1cbiAgICAvLyBSZXN0YXJ0IHRoZSB0aW1lci5cbiAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHJlbWFpbmluZ1dhaXQodGltZSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHJhaWxpbmdFZGdlKHRpbWUpIHtcbiAgICB0aW1lcklkID0gdW5kZWZpbmVkO1xuXG4gICAgLy8gT25seSBpbnZva2UgaWYgd2UgaGF2ZSBgbGFzdEFyZ3NgIHdoaWNoIG1lYW5zIGBmdW5jYCBoYXMgYmVlblxuICAgIC8vIGRlYm91bmNlZCBhdCBsZWFzdCBvbmNlLlxuICAgIGlmICh0cmFpbGluZyAmJiBsYXN0QXJncykge1xuICAgICAgcmV0dXJuIGludm9rZUZ1bmModGltZSk7XG4gICAgfVxuICAgIGxhc3RBcmdzID0gbGFzdFRoaXMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNhbmNlbCgpIHtcbiAgICBpZiAodGltZXJJZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJJZCk7XG4gICAgfVxuICAgIGxhc3RJbnZva2VUaW1lID0gMDtcbiAgICBsYXN0QXJncyA9IGxhc3RDYWxsVGltZSA9IGxhc3RUaGlzID0gdGltZXJJZCA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgIHJldHVybiB0aW1lcklkID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiB0cmFpbGluZ0VkZ2Uobm93KCkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZGVib3VuY2VkKCkge1xuICAgIHZhciB0aW1lID0gbm93KCksXG4gICAgICAgIGlzSW52b2tpbmcgPSBzaG91bGRJbnZva2UodGltZSk7XG5cbiAgICBsYXN0QXJncyA9IGFyZ3VtZW50cztcbiAgICBsYXN0VGhpcyA9IHRoaXM7XG4gICAgbGFzdENhbGxUaW1lID0gdGltZTtcblxuICAgIGlmIChpc0ludm9raW5nKSB7XG4gICAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBsZWFkaW5nRWRnZShsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgICAgaWYgKG1heGluZykge1xuICAgICAgICAvLyBIYW5kbGUgaW52b2NhdGlvbnMgaW4gYSB0aWdodCBsb29wLlxuICAgICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgICAgICByZXR1cm4gaW52b2tlRnVuYyhsYXN0Q2FsbFRpbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGltZXJJZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aW1lcklkID0gc2V0VGltZW91dCh0aW1lckV4cGlyZWQsIHdhaXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGRlYm91bmNlZC5jYW5jZWwgPSBjYW5jZWw7XG4gIGRlYm91bmNlZC5mbHVzaCA9IGZsdXNoO1xuICByZXR1cm4gZGVib3VuY2VkO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIHRoZVxuICogW2xhbmd1YWdlIHR5cGVdKGh0dHA6Ly93d3cuZWNtYS1pbnRlcm5hdGlvbmFsLm9yZy9lY21hLTI2Mi83LjAvI3NlYy1lY21hc2NyaXB0LWxhbmd1YWdlLXR5cGVzKVxuICogb2YgYE9iamVjdGAuIChlLmcuIGFycmF5cywgZnVuY3Rpb25zLCBvYmplY3RzLCByZWdleGVzLCBgbmV3IE51bWJlcigwKWAsIGFuZCBgbmV3IFN0cmluZygnJylgKVxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIGFuIG9iamVjdCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0KHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KFsxLCAyLCAzXSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChfLm5vb3ApO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QobnVsbCk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcbiAgcmV0dXJuICEhdmFsdWUgJiYgKHR5cGUgPT0gJ29iamVjdCcgfHwgdHlwZSA9PSAnZnVuY3Rpb24nKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZS4gQSB2YWx1ZSBpcyBvYmplY3QtbGlrZSBpZiBpdCdzIG5vdCBgbnVsbGBcbiAqIGFuZCBoYXMgYSBgdHlwZW9mYCByZXN1bHQgb2YgXCJvYmplY3RcIi5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBvYmplY3QtbGlrZSwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZSh7fSk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdExpa2UoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShfLm5vb3ApO1xuICogLy8gPT4gZmFsc2VcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0TGlrZSh2YWx1ZSkge1xuICByZXR1cm4gISF2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCc7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgY2xhc3NpZmllZCBhcyBhIGBTeW1ib2xgIHByaW1pdGl2ZSBvciBvYmplY3QuXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSA0LjAuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYSBzeW1ib2wsIGVsc2UgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy5pc1N5bWJvbChTeW1ib2wuaXRlcmF0b3IpO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNTeW1ib2woJ2FiYycpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNTeW1ib2wodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PSAnc3ltYm9sJyB8fFxuICAgIChpc09iamVjdExpa2UodmFsdWUpICYmIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsdWUpID09IHN5bWJvbFRhZyk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYHZhbHVlYCB0byBhIG51bWJlci5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gcHJvY2Vzcy5cbiAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgdGhlIG51bWJlci5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50b051bWJlcigzLjIpO1xuICogLy8gPT4gMy4yXG4gKlxuICogXy50b051bWJlcihOdW1iZXIuTUlOX1ZBTFVFKTtcbiAqIC8vID0+IDVlLTMyNFxuICpcbiAqIF8udG9OdW1iZXIoSW5maW5pdHkpO1xuICogLy8gPT4gSW5maW5pdHlcbiAqXG4gKiBfLnRvTnVtYmVyKCczLjInKTtcbiAqIC8vID0+IDMuMlxuICovXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG4gIGlmIChpc1N5bWJvbCh2YWx1ZSkpIHtcbiAgICByZXR1cm4gTkFOO1xuICB9XG4gIGlmIChpc09iamVjdCh2YWx1ZSkpIHtcbiAgICB2YXIgb3RoZXIgPSB0eXBlb2YgdmFsdWUudmFsdWVPZiA9PSAnZnVuY3Rpb24nID8gdmFsdWUudmFsdWVPZigpIDogdmFsdWU7XG4gICAgdmFsdWUgPSBpc09iamVjdChvdGhlcikgPyAob3RoZXIgKyAnJykgOiBvdGhlcjtcbiAgfVxuICBpZiAodHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHZhbHVlID09PSAwID8gdmFsdWUgOiArdmFsdWU7XG4gIH1cbiAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKHJlVHJpbSwgJycpO1xuICB2YXIgaXNCaW5hcnkgPSByZUlzQmluYXJ5LnRlc3QodmFsdWUpO1xuICByZXR1cm4gKGlzQmluYXJ5IHx8IHJlSXNPY3RhbC50ZXN0KHZhbHVlKSlcbiAgICA/IGZyZWVQYXJzZUludCh2YWx1ZS5zbGljZSgyKSwgaXNCaW5hcnkgPyAyIDogOClcbiAgICA6IChyZUlzQmFkSGV4LnRlc3QodmFsdWUpID8gTkFOIDogK3ZhbHVlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkZWJvdW5jZTtcbiIsImltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgY2Fyb3VzZWxzID0gKHsgc2VsZWN0b3JJZDogc2VsZWN0b3JJZCA9ICdlY2wtY2Fyb3VzZWwnIH0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8ICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNFVFVQXG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ySWQpO1xuICBjb25zdCBzbGlkZXMgPSBxdWVyeUFsbCgnLmVjbC1jYXJvdXNlbF9faXRlbScsIGNhcm91c2VsKTtcbiAgY29uc3QgbGlzdCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpc3QnKTtcblxuICBmdW5jdGlvbiBnZXRMaXN0SXRlbVdpZHRoKCkge1xuICAgIHJldHVybiBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvU2xpZGUobikge1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICAgIGN1cnJlbnRTbGlkZSA9IChuICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGdldExpc3RJdGVtV2lkdGgoKTtcbiAgICBjb25zdCB0ciA9IGB0cmFuc2xhdGUzZCgkey1jdXJyZW50U2xpZGUgKiBpdGVtV2lkdGh9cHgsIDAsIDApYDtcblxuICAgIGxpc3Quc3R5bGUuTW96VHJhbnNmb3JtID0gdHI7IC8qIEZGICovXG4gICAgbGlzdC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyOyAvKiBJRSAoOSspICovXG4gICAgbGlzdC5zdHlsZS5PVHJhbnNmb3JtID0gdHI7IC8qIE9wZXJhICovXG4gICAgbGlzdC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0cjsgLyogU2FmYXJpICsgQ2hyb21lICovXG4gICAgbGlzdC5zdHlsZS50cmFuc2Zvcm0gPSB0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFubm91bmNlQ3VycmVudFNsaWRlKCkge1xuICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmVjbC1jYXJvdXNlbF9fbWV0YS1zbGlkZSdcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFNsaWRlICsgMX0gLyAke3NsaWRlcy5sZW5ndGh9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJbWFnZUluZm9ybWF0aW9uKCkge1xuICAgIC8vIFJlc2V0L0hpZGUgYWxsLlxuICAgIGNvbnN0IGluZm9BcmVhcyA9IHF1ZXJ5QWxsKCdbZGF0YS1pbWFnZV0nKTtcbiAgICAvLyBJZiBhbnl0aGluZyBpcyB2aXNpYmxlLlxuICAgIGlmIChpbmZvQXJlYXMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaW5mb0FyZWFzLmZvckVhY2goYXJlYSA9PiAoYXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSk7XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihgW2RhdGEtaW1hZ2U9XCIke2N1cnJlbnRTbGlkZX1cIl1gKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICBzZXRPZmZzZXQoKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgIHNldE9mZnNldCgpO1xuICAgIGFubm91bmNlQ3VycmVudFNsaWRlKCk7XG4gICAgc2hvd0ltYWdlSW5mb3JtYXRpb24oKTtcbiAgfVxuXG4gIC8vIEF0dGFjaCBjb250cm9scyB0byBhIGNhcm91c2VsLlxuICBmdW5jdGlvbiBhZGRDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IG5hdkNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIG5hdkNvbnRyb2xzLmNsYXNzTmFtZSA9ICdlY2wtY2Fyb3VzZWxfX2NvbnRyb2xzIGVjbC1saXN0LS11bnN0eWxlZCc7XG5cbiAgICBuYXZDb250cm9scy5pbm5lckhUTUwgPSBgXG4gICAgICA8bGk+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWNsLWljb24gZWNsLWljb24tLWxlZnQgZWNsLWNhcm91c2VsX19idXR0b24gZWNsLWNhcm91c2VsX19idXR0b24tLXByZXZpb3VzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJlY2wtdS1zci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVjbC1pY29uIGVjbC1pY29uLS1yaWdodCBlY2wtY2Fyb3VzZWxfX2J1dHRvbiBlY2wtY2Fyb3VzZWxfX2J1dHRvbi0tbmV4dFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWNsLXUtc3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmVjbC1jYXJvdXNlbF9fYnV0dG9uLS1wcmV2aW91cycsXG4gICAgICAgICcuZWNsLWNhcm91c2VsX19jb250cm9scydcbiAgICAgIClcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZpb3VzU2xpZGUpO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19idXR0b24tLW5leHQnLCAnLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgIGNhcm91c2VsXG4gICAgICAucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fbGlzdC13cmFwcGVyJylcbiAgICAgIC5hcHBlbmRDaGlsZChuYXZDb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKTtcbiAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19saXN0LXdyYXBwZXInKS5yZW1vdmVDaGlsZChjb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXZlUmVnaW9uKCkge1xuICAgIGNvbnN0IGxpdmVSZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXZlUmVnaW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gICAgbGl2ZVJlZ2lvbi5jbGFzc0xpc3QuYWRkKCdlY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5hcHBlbmRDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpdmVSZWdpb24oKSB7XG4gICAgY29uc3QgbGl2ZVJlZ2lvbiA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5yZW1vdmVDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGNvbnN0IGRlYm91bmNlQ2IgPSAoKSA9PlxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRPZmZzZXQoKTtcbiAgICAgIH0sXG4gICAgICAxMDAsXG4gICAgICB7IG1heFdhaXQ6IDMwMCB9XG4gICAgKSgpO1xuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRDYXJvdXNlbENvbnRyb2xzKCk7XG4gICAgYWRkTGl2ZVJlZ2lvbigpO1xuICAgIGdvVG9TbGlkZSgwKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG5cbiAgICAvLyBSZS1hbGlnbiBvbiByZXNpemUuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUNhcm91c2VsQ29udHJvbHMoKTtcbiAgICByZW1vdmVMaXZlUmVnaW9uKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxzO1xuIiwiLyoqXG4gKiBDb250ZXh0dWFsIG5hdmlnYXRpb24gc2NyaXB0c1xuICovXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbmNvbnN0IGV4cGFuZENvbnRleHR1YWxOYXYgPSAoXG4gIGNvbnRleHR1YWxOYXYsXG4gIGJ1dHRvbixcbiAge1xuICAgIGNsYXNzVG9SZW1vdmUgPSAnZWNsLWNvbnRleHQtbmF2X19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgICBoaWRkZW5FbGVtZW50c1NlbGVjdG9yID0gJy5lY2wtY29udGV4dC1uYXZfX2l0ZW0tLW92ZXItbGltaXQnLFxuICAgIGNvbnRleHQgPSBkb2N1bWVudCxcbiAgfSA9IHt9XG4pID0+IHtcbiAgaWYgKCFjb250ZXh0dWFsTmF2KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgaGlkZGVuRWxlbWVudHMgPSBxdWVyeUFsbChoaWRkZW5FbGVtZW50c1NlbGVjdG9yLCBjb250ZXh0KTtcblxuICAvLyBSZW1vdmUgZXh0cmEgY2xhc3NcbiAgaGlkZGVuRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb1JlbW92ZSk7XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSBidXR0dG9uXG4gIGJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG59O1xuXG4vLyBIZWxwZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0byBhbGwgdGhlIGV4cGFuZGFibGVzIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGNvbnN0IGNvbnRleHR1YWxOYXZzID0gKHtcbiAgc2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdicsXG4gIGJ1dHRvblNlbGVjdG9yID0gJy5lY2wtY29udGV4dC1uYXZfX21vcmUnLFxuICBoaWRkZW5FbGVtZW50c1NlbGVjdG9yID0gJy5lY2wtY29udGV4dC1uYXZfX2l0ZW0tLW92ZXItbGltaXQnLFxuICBjbGFzc1RvUmVtb3ZlID0gJ2VjbC1jb250ZXh0LW5hdl9faXRlbS0tb3Zlci1saW1pdCcsXG4gIGNvbnRleHQgPSBkb2N1bWVudCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBub2Rlc0FycmF5ID0gcXVlcnlBbGwoc2VsZWN0b3IsIGNvbnRleHQpO1xuXG4gIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgZXhwYW5kQ29udGV4dHVhbE5hdihub2RlLCBidXR0b24sIHtcbiAgICAgICAgICBjbGFzc1RvUmVtb3ZlLFxuICAgICAgICAgIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IsXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZXh0dWFsTmF2cztcbiIsIi8qKlxuICogYE5vZGUjY29udGFpbnMoKWAgcG9seWZpbGwuXG4gKlxuICogU2VlOiBodHRwOi8vY29tcGF0aWJpbGl0eS5zaHd1cHMtY21zLmNoL2VuL3BvbHlmaWxscy8/JmlkPTFcbiAqXG4gKiBAcGFyYW0ge05vZGV9IG5vZGVcbiAqIEBwYXJhbSB7Tm9kZX0gb3RoZXJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAcHVibGljXG4gKi9cblxuZnVuY3Rpb24gY29udGFpbnMobm9kZSwgb3RoZXIpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgcmV0dXJuIG5vZGUgPT09IG90aGVyIHx8ICEhKG5vZGUuY29tcGFyZURvY3VtZW50UG9zaXRpb24ob3RoZXIpICYgMTYpO1xufVxuXG5leHBvcnQgY29uc3QgZHJvcGRvd24gPSBzZWxlY3RvciA9PiB7XG4gIGNvbnN0IGRyb3Bkb3duc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgKTtcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICBkcm9wZG93bnNBcnJheS5mb3JFYWNoKGRyb3Bkb3duU2VsZWN0aW9uID0+IHtcbiAgICAgIGNvbnN0IGlzSW5zaWRlID0gY29udGFpbnMoZHJvcGRvd25TZWxlY3Rpb24sIGV2ZW50LnRhcmdldCk7XG5cbiAgICAgIGlmICghaXNJbnNpZGUpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd25CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAke3NlbGVjdG9yfSA+IFthcmlhLWV4cGFuZGVkPXRydWVdYFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBkcm9wZG93bkJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIGAke3NlbGVjdG9yfSA+IFthcmlhLWhpZGRlbj1mYWxzZV1gXG4gICAgICAgICk7XG4gICAgICAgIC8vIElmIHRoZSBib2R5IG9mIHRoZSBkcm9wZG93biBpcyB2aXNpYmxlLCB0aGVuIHRvZ2dsZS5cbiAgICAgICAgaWYgKGRyb3Bkb3duQm9keSkge1xuICAgICAgICAgIGRyb3Bkb3duQnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsIGZhbHNlKTtcbiAgICAgICAgICBkcm9wZG93bkJvZHkuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJvcGRvd247XG4iLCJpbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlYy1ldXJvcGEvZWNsLWJhc2UvaGVscGVycy9kb20nO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKlxuICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gKiAtIG9wdGlvbnMudHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IgLSBhbnkgc2VsZWN0b3IgdG8gd2hpY2ggZXZlbnQgbGlzdGVuZXJzXG4gKiBhcmUgYXR0YWNoZWQuIFdoZW4gY2xpY2tlZCBvbiBhbnkgZWxlbWVudCB3aXRoIHN1Y2ggYSBzZWxlY3RvciwgYSBkaWFsb2cgb3BlbnMuXG4gKlxuICogLSBvcHRpb25zLmRpYWxvZ1dpbmRvd0lkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtZGlhbG9nYC5cbiAqXG4gKiAtIG9wdGlvbnMuZGlhbG9nT3ZlcmxheUlkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtb3ZlcmxheWAuXG4gKiBPdmVybGF5IGVsZW1lbnQgaXMgY3JlYXRlZCBpbiB0aGUgZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgY29uc3QgZGlhbG9ncyA9ICh7XG4gIHRyaWdnZXJFbGVtZW50c1NlbGVjdG9yOiB0cmlnZ2VyRWxlbWVudHNTZWxlY3RvciA9ICdbZGF0YS1lY2wtZGlhbG9nXScsXG4gIGRpYWxvZ1dpbmRvd0lkOiBkaWFsb2dXaW5kb3dJZCA9ICdlY2wtZGlhbG9nJyxcbiAgZGlhbG9nT3ZlcmxheUlkOiBkaWFsb2dPdmVybGF5SWQgPSAnZWNsLW92ZXJsYXknLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmICghKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHwgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU0VUVVBcbiAgY29uc3QgdHJpZ2dlckVsZW1lbnRzID0gcXVlcnlBbGwodHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IpO1xuICBjb25zdCBkaWFsb2dXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dXaW5kb3dJZCk7XG4gIGxldCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nT3ZlcmxheUlkKTtcblxuICAvLyBDcmVhdGUgYW4gb3ZlcmxheSBlbGVtZW50IGlmIHRoZSB1c2VyIGRvZXMgbm90IHN1cHBseSBvbmUuXG4gIGlmICghZGlhbG9nT3ZlcmxheSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWNsLW92ZXJsYXknKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWNsLWRpYWxvZ19fb3ZlcmxheScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBkaWFsb2dPdmVybGF5ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFdoYXQgd2UgY2FuIGZvY3VzIG9uIGluIHRoZSBtb2RhbC5cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKFxuICAgIHF1ZXJ5QWxsKFxuICAgICAgYFxuICAgICAgICBhW2hyZWZdLFxuICAgICAgICBhcmVhW2hyZWZdLFxuICAgICAgICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgW3RhYmluZGV4PVwiMFwiXVxuICAgICAgYCxcbiAgICAgIGRpYWxvZ1dpbmRvd1xuICAgIClcbiAgKTtcblxuICAvLyBVc2UgdGhpcyB2YXJpYWJsZSB0byByZXR1cm4gZm9jdXMgb24gZWxlbWVudCBhZnRlciBkaWFsb2cgYmVpbmcgY2xvc2VkLlxuICBsZXQgZm9jdXNlZEVsQmVmb3JlT3BlbiA9IG51bGw7XG5cbiAgLy8gU3BlY2lmaWMgZWxlbWVudHMgdG8gdGFrZSBjYXJlIHdoZW4gb3Blbm5pbmcgYW5kIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gIGNvbnN0IGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gRVZFTlRTXG4gIC8vIEhpZGUgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBjbG9zZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlhbG9nV2luZG93LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgIGlmIChmb2N1c2VkRWxCZWZvcmVPcGVuKSB7XG4gICAgICBmb2N1c2VkRWxCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEtleWJvYXJkIGJlaGF2aW9ycy5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgY29uc3QgS0VZX1RBQiA9IDk7XG4gICAgY29uc3QgS0VZX0VTQyA9IDI3O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQmFja3dhcmRUYWIoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVGb3J3YXJkVGFiKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIC8vIEtlZXAgdGFiYmluZyBpbiB0aGUgc2NvcGUgb2YgdGhlIGRpYWxvZy5cbiAgICAgIGNhc2UgS0VZX1RBQjpcbiAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGhhbmRsZUJhY2t3YXJkVGFiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlRm9yd2FyZFRhYigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfRVNDOlxuICAgICAgICBjbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBvcGVuKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2dXaW5kb3cuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBlbGVtZW50IHRvIGhhdmUgdGhlIGZvY3VzIGFmdGVyIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgICAvLyBVc3VhbGx5IHRoZSBlbGVtZW50IHdoaWNoIHRyaWdnZXJlZCB0aGUgZGlhbG9nLlxuICAgIGZvY3VzZWRFbEJlZm9yZU9wZW4gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGRpYWxvZy5cbiAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIC8vIENsb3NlIGRpYWxvZyB3aGVuIGNsaWNrZWQgb3V0IG9mIHRoZSBkaWFsb2cgd2luZG93LlxuICAgIGRpYWxvZ092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG5cbiAgICAvLyBIYW5kbGUgdGFiYmluZywgZXNjIGFuZCBrZXlib2FyZCBpbiB0aGUgZGlhbG9nIHdpbmRvdy5cbiAgICBkaWFsb2dXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIGJpbmREaWFsb2dFdmVudHMoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pKTtcblxuICAgIC8vIGNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpO1xuICAgIHF1ZXJ5QWxsKCcuZWNsLW1lc3NhZ2VfX2Rpc21pc3MnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZERpYWxvZ0V2ZW50cyhlbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbikpO1xuXG4gICAgLy8gY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVjbC1tZXNzYWdlX19kaXNtaXNzJyk7XG4gICAgcXVlcnlBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERFU1RST1lcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmREaWFsb2dFdmVudHModHJpZ2dlckVsZW1lbnRzKTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodHJpZ2dlckVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgYmluZERpYWxvZ0V2ZW50cyh0cmlnZ2VyRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuLy8gbW9kdWxlIGV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRXhwYW5kYWJsZSA9IChcbiAgdG9nZ2xlRWxlbWVudCxcbiAge1xuICAgIGNvbnRleHQgPSBkb2N1bWVudCxcbiAgICBmb3JjZUNsb3NlID0gZmFsc2UsXG4gICAgY2xvc2VTaWJsaW5ncyA9IGZhbHNlLFxuICAgIHNpYmxpbmdzU2VsZWN0b3IgPSAnW2FyaWEtY29udHJvbHNdW2FyaWEtZXhwYW5kZWRdJyxcbiAgfSA9IHt9XG4pID0+IHtcbiAgaWYgKCF0b2dnbGVFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IHRhcmdldCBlbGVtZW50XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgKTtcblxuICAvLyBFeGl0IGlmIG5vIHRhcmdldCBmb3VuZFxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEdldCBjdXJyZW50IHN0YXR1c1xuICBjb25zdCBpc0V4cGFuZGVkID1cbiAgICBmb3JjZUNsb3NlID09PSB0cnVlIHx8XG4gICAgdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuXG4gIC8vIFRvZ2dsZSB0aGUgZXhwYW5kYWJsZS9jb2xsYXBzaWJsZVxuICB0b2dnbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFpc0V4cGFuZGVkKTtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBpc0V4cGFuZGVkKTtcblxuICAvLyBUb2dnbGUgbGFiZWwgaWYgcG9zc2libGVcbiAgaWYgKCFpc0V4cGFuZGVkICYmIHRvZ2dsZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJykpIHtcbiAgICB0b2dnbGVFbGVtZW50LmlubmVySFRNTCA9IHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJyk7XG4gIH0gZWxzZSBpZiAoaXNFeHBhbmRlZCAmJiB0b2dnbGVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sYWJlbC1jb2xsYXBzZWQnKSkge1xuICAgIHRvZ2dsZUVsZW1lbnQuaW5uZXJIVE1MID0gdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1sYWJlbC1jb2xsYXBzZWQnXG4gICAgKTtcbiAgfVxuXG4gIC8vIENsb3NlIHNpYmxpbmdzIGlmIHJlcXVlc3RlZFxuICBpZiAoY2xvc2VTaWJsaW5ncyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNpYmxpbmdzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgIC5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzaWJsaW5nc1NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoc2libGluZyA9PiBzaWJsaW5nICE9PSB0b2dnbGVFbGVtZW50KTtcblxuICAgIHNpYmxpbmdzQXJyYXkuZm9yRWFjaChzaWJsaW5nID0+IHtcbiAgICAgIHRvZ2dsZUV4cGFuZGFibGUoc2libGluZywge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JjZUNsb3NlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgaW5pdEV4cGFuZGFibGVzID0gKFxuICBzZWxlY3RvciA9ICdbYXJpYS1jb250cm9sc11bYXJpYS1leHBhbmRlZF0nLFxuICBjb250ZXh0ID0gZG9jdW1lbnRcbikgPT4ge1xuICBjb25zdCBub2Rlc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICApO1xuXG4gIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZShub2RlLCB7IGNvbnRleHQgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSlcbiAgKTtcbn07XG4iLCIvKipcbiAqIEZpbGUgdXBsb2FkcyByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG5pbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlYy1ldXJvcGEvZWNsLWJhc2UvaGVscGVycy9kb20nO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBmaWxlVXBsb2FkcyA9ICh7XG4gIHNlbGVjdG9yOiBzZWxlY3RvciA9ICcuZWNsLWZpbGUtdXBsb2FkJyxcbiAgaW5wdXRTZWxlY3RvcjogaW5wdXRTZWxlY3RvciA9ICcuZWNsLWZpbGUtdXBsb2FkX19pbnB1dCcsXG4gIHZhbHVlU2VsZWN0b3I6IHZhbHVlU2VsZWN0b3IgPSAnLmVjbC1maWxlLXVwbG9hZF9fdmFsdWUnLFxuICBicm93c2VTZWxlY3RvcjogYnJvd3NlU2VsZWN0b3IgPSAnLmVjbC1maWxlLXVwbG9hZF9fYnJvd3NlJyxcbn0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoXG4gICAgISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8XG4gICAgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0XG4gIClcbiAgICByZXR1cm4gbnVsbDtcblxuICAvLyBTRVRVUFxuICAvLyBzZXQgZmlsZSB1cGxvYWQgZWxlbWVudCBOb2RlTGlzdHNcbiAgY29uc3QgZmlsZVVwbG9hZENvbnRhaW5lcnMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiB1cGRhdGVGaWxlTmFtZShlbGVtZW50LCBmaWxlcykge1xuICAgIGlmIChmaWxlcy5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgIGxldCBmaWxlbmFtZSA9ICcnO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgaWYgKCduYW1lJyBpbiBmaWxlKSB7XG4gICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgIGZpbGVuYW1lICs9ICcsICc7XG4gICAgICAgIH1cbiAgICAgICAgZmlsZW5hbWUgKz0gZmlsZS5uYW1lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIHNlbGVjdGVkIGZpbGVuYW1lIGluIHRoZSBmaWVsZC5cbiAgICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgbWVzc2FnZUVsZW1lbnQuaW5uZXJIVE1MID0gZmlsZW5hbWU7XG4gIH1cblxuICAvLyBFVkVOVFNcbiAgZnVuY3Rpb24gZXZlbnRWYWx1ZUNoYW5nZShlKSB7XG4gICAgaWYgKCdmaWxlcycgaW4gZS50YXJnZXQpIHtcbiAgICAgIGNvbnN0IGZpbGVVcGxvYWRFbGVtZW50cyA9IHF1ZXJ5QWxsKHZhbHVlU2VsZWN0b3IsIGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuXG4gICAgICBmaWxlVXBsb2FkRWxlbWVudHMuZm9yRWFjaChmaWxlVXBsb2FkRWxlbWVudCA9PiB7XG4gICAgICAgIHVwZGF0ZUZpbGVOYW1lKGZpbGVVcGxvYWRFbGVtZW50LCBlLnRhcmdldC5maWxlcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBldmVudEJyb3dzZUtleWRvd24oZSkge1xuICAgIC8vIGNvbGxlY3QgaGVhZGVyIHRhcmdldHMsIGFuZCB0aGVpciBwcmV2L25leHRcbiAgICBjb25zdCBpc01vZGlmaWVyS2V5ID0gZS5tZXRhS2V5IHx8IGUuYWx0S2V5O1xuXG4gICAgY29uc3QgaW5wdXRFbGVtZW50cyA9IHF1ZXJ5QWxsKGlucHV0U2VsZWN0b3IsIGUudGFyZ2V0LnBhcmVudE5vZGUpO1xuXG4gICAgaW5wdXRFbGVtZW50cy5mb3JFYWNoKGlucHV0RWxlbWVudCA9PiB7XG4gICAgICAvLyBkb24ndCBjYXRjaCBrZXkgZXZlbnRzIHdoZW4g4oyYIG9yIEFsdCBtb2RpZmllciBpcyBwcmVzZW50XG4gICAgICBpZiAoaXNNb2RpZmllcktleSkgcmV0dXJuO1xuXG4gICAgICAvLyBjYXRjaCBlbnRlci9zcGFjZSwgbGVmdC9yaWdodCBhbmQgdXAvZG93biBhcnJvdyBrZXkgZXZlbnRzXG4gICAgICAvLyBpZiBuZXcgcGFuZWwgc2hvdyBpdCwgaWYgbmV4dC9wcmV2IG1vdmUgZm9jdXNcbiAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgIGNhc2UgMTM6XG4gICAgICAgIGNhc2UgMzI6XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlucHV0RWxlbWVudC5jbGljaygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQklORCBFVkVOVFNcbiAgZnVuY3Rpb24gYmluZEZpbGVVcGxvYWRFdmVudHMoZmlsZVVwbG9hZENvbnRhaW5lcikge1xuICAgIC8vIGJpbmQgYWxsIGZpbGUgdXBsb2FkIGNoYW5nZSBldmVudHNcbiAgICBjb25zdCBmaWxlVXBsb2FkSW5wdXRzID0gcXVlcnlBbGwoaW5wdXRTZWxlY3RvciwgZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgZmlsZVVwbG9hZElucHV0cy5mb3JFYWNoKGZpbGVVcGxvYWRJbnB1dCA9PiB7XG4gICAgICBmaWxlVXBsb2FkSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRWYWx1ZUNoYW5nZSk7XG4gICAgfSk7XG5cbiAgICAvLyBiaW5kIGFsbCBmaWxlIHVwbG9hZCBrZXlkb3duIGV2ZW50c1xuICAgIGNvbnN0IGZpbGVVcGxvYWRCcm93c2VzID0gcXVlcnlBbGwoYnJvd3NlU2VsZWN0b3IsIGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgIGZpbGVVcGxvYWRCcm93c2VzLmZvckVhY2goZmlsZVVwbG9hZEJyb3dzZSA9PiB7XG4gICAgICBmaWxlVXBsb2FkQnJvd3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudEJyb3dzZUtleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gVU5CSU5EIEVWRU5UU1xuICBmdW5jdGlvbiB1bmJpbmRGaWxlVXBsb2FkRXZlbnRzKGZpbGVVcGxvYWRDb250YWluZXIpIHtcbiAgICBjb25zdCBmaWxlVXBsb2FkSW5wdXRzID0gcXVlcnlBbGwoaW5wdXRTZWxlY3RvciwgZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgLy8gdW5iaW5kIGFsbCBmaWxlIHVwbG9hZCBjaGFuZ2UgZXZlbnRzXG4gICAgZmlsZVVwbG9hZElucHV0cy5mb3JFYWNoKGZpbGVVcGxvYWRJbnB1dCA9PiB7XG4gICAgICBmaWxlVXBsb2FkSW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRWYWx1ZUNoYW5nZSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBmaWxlVXBsb2FkQnJvd3NlcyA9IHF1ZXJ5QWxsKGJyb3dzZVNlbGVjdG9yLCBmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICAvLyBiaW5kIGFsbCBmaWxlIHVwbG9hZCBrZXlkb3duIGV2ZW50c1xuICAgIGZpbGVVcGxvYWRCcm93c2VzLmZvckVhY2goZmlsZVVwbG9hZEJyb3dzZSA9PiB7XG4gICAgICBmaWxlVXBsb2FkQnJvd3NlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudEJyb3dzZUtleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGZpbGVVcGxvYWRDb250YWluZXJzLmZvckVhY2goZmlsZVVwbG9hZENvbnRhaW5lciA9PiB7XG4gICAgICB1bmJpbmRGaWxlVXBsb2FkRXZlbnRzKGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gSU5JVFxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGlmIChmaWxlVXBsb2FkQ29udGFpbmVycy5sZW5ndGgpIHtcbiAgICAgIGZpbGVVcGxvYWRDb250YWluZXJzLmZvckVhY2goZmlsZVVwbG9hZENvbnRhaW5lciA9PiB7XG4gICAgICAgIGJpbmRGaWxlVXBsb2FkRXZlbnRzKGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgZmlsZVVwbG9hZHM7XG4iLCJpbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbmV4cG9ydCBjb25zdCBlY2xMYW5nU2VsZWN0UGFnZXMgPSAoe1xuICBzZWxlY3Rvcjogc2VsZWN0b3IgPSAnLmVjbC1sYW5nLXNlbGVjdC1wYWdlJyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzID0gJ2VjbC1sYW5nLXNlbGVjdC1wYWdlLS1kcm9wZG93bicsXG4gIGxpc3RTZWxlY3RvcjogbGlzdFNlbGVjdG9yID0gJy5lY2wtbGFuZy1zZWxlY3QtcGFnZV9fbGlzdCcsXG4gIGRyb3Bkb3duU2VsZWN0b3I6IGRyb3Bkb3duU2VsZWN0b3IgPSAnLmVjbC1sYW5nLXNlbGVjdC1wYWdlX19kcm9wZG93bicsXG4gIGRyb3Bkb3duT25DaGFuZ2U6IGRyb3Bkb3duT25DaGFuZ2UgPSB1bmRlZmluZWQsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbGFuZ1NlbGVjdFBhZ2VzQ29udGFpbmVycyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICBmdW5jdGlvbiB0b2dnbGUobHNwKSB7XG4gICAgaWYgKCFsc3ApIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbGlzdCA9IHF1ZXJ5QWxsKGxpc3RTZWxlY3RvciwgbHNwKVswXTtcblxuICAgIGlmICghbHNwLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGVDbGFzcykpIHtcbiAgICAgIGlmIChsaXN0ICYmIGxpc3Qub2Zmc2V0TGVmdCArIGxpc3Qub2Zmc2V0V2lkdGggPiBsc3Aub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgbHNwLmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHF1ZXJ5QWxsKGRyb3Bkb3duU2VsZWN0b3IsIGxzcClbMF07XG4gICAgICBpZiAoZHJvcGRvd24ub2Zmc2V0TGVmdCArIGxpc3Qub2Zmc2V0V2lkdGggPCBsc3Aub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgbHNwLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBPbiBsb2FkXG4gICAgbGFuZ1NlbGVjdFBhZ2VzQ29udGFpbmVycy5mb3JFYWNoKGxzcCA9PiB7XG4gICAgICB0b2dnbGUobHNwKTtcblxuICAgICAgaWYgKGRyb3Bkb3duT25DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBxdWVyeUFsbChkcm9wZG93blNlbGVjdG9yLCBsc3ApWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRyb3Bkb3duT25DaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdyZXNpemUnLFxuICAgICAgZGVib3VuY2UoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsYW5nU2VsZWN0UGFnZXNDb250YWluZXJzLmZvckVhY2godG9nZ2xlKTtcbiAgICAgICAgfSxcbiAgICAgICAgMTAwLFxuICAgICAgICB7IG1heFdhaXQ6IDMwMCB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBpbml0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlY2xMYW5nU2VsZWN0UGFnZXM7XG4iLCIvKlxuICogTWVzc2FnZXMgYmVoYXZpb3JcbiAqL1xuXG4vLyBEaXNtaXNzIGEgc2VsZWN0ZWQgbWVzc2FnZS5cbmZ1bmN0aW9uIGRpc21pc3NNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgbWVzc2FnZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG59XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgbWVzc2FnZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lc3NhZ2VzKCkge1xuICBjb25zdCBzZWxlY3RvckNsYXNzID0gJ2VjbC1tZXNzYWdlX19kaXNtaXNzJztcblxuICBjb25zdCBtZXNzYWdlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JDbGFzcylcbiAgKTtcblxuICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT5cbiAgICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGRpc21pc3NNZXNzYWdlKG1lc3NhZ2UucGFyZW50RWxlbWVudClcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNZXNzYWdlcztcbiIsIi8qKlxuICBzdGlja3liaXRzIC0gU3RpY2t5Yml0cyBpcyBhIGxpZ2h0d2VpZ2h0IGFsdGVybmF0aXZlIHRvIGBwb3NpdGlvbjogc3RpY2t5YCBwb2x5ZmlsbHNcbiAgQHZlcnNpb24gdjMuMS4xXG4gIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9kb2xsYXJzaGF2ZWNsdWIvc3RpY2t5Yml0cyNyZWFkbWVcbiAgQGF1dGhvciBKZWZmIFdhaW53cmlnaHQgPHlvd2FpbndyaWdodEBnbWFpbC5jb20+IChodHRwczovL2plZmZyeS5pbilcbiAgQGxpY2Vuc2UgTUlUXG4qKi9cbi8qXG4gIFNUSUNLWUJJVFMg8J+SiVxuICAtLS0tLS0tLVxuICA+IGEgbGlnaHR3ZWlnaHQgYWx0ZXJuYXRpdmUgdG8gYHBvc2l0aW9uOiBzdGlja3lgIHBvbHlmaWxscyDwn42sXG4gIC0tLS0tLS0tXG4gIC0gZWFjaCBtZXRob2QgaXMgZG9jdW1lbnRlZCBhYm92ZSBpdCBvdXIgdmlldyB0aGUgcmVhZG1lXG4gIC0gU3RpY2t5Yml0cyBkb2VzIG5vdCBtYW5hZ2UgcG9seW1vcnBoaWMgZnVuY3Rpb25hbGl0eSAocG9zaXRpb24gbGlrZSBwcm9wZXJ0aWVzKVxuICAqIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHk6IChpbiB0aGUgY29udGV4dCBvZiBkZXNjcmliaW5nIFN0aWNreWJpdHMpXG4gICAgbWVhbnMgbWFraW5nIHRoaW5ncyBsaWtlIGBwb3NpdGlvbjogc3RpY2t5YCBiZSBsb29zZWx5IHN1cHBvcnRlZCB3aXRoIHBvc2l0aW9uIGZpeGVkLlxuICAgIEl0IGFsc28gbWVhbnMgdGhhdCBmZWF0dXJlcyBsaWtlIGB1c2VTdGlja3lDbGFzc2VzYCB0YWtlcyBvbiBzdHlsZXMgbGlrZSBgcG9zaXRpb246IGZpeGVkYC5cbiAgLS0tLS0tLS1cbiAgZGVmYXVsdHMg8J+UjFxuICAtLS0tLS0tLVxuICAtIHZlcnNpb24gPSBgcGFja2FnZS5qc29uYCB2ZXJzaW9uXG4gIC0gdXNlckFnZW50ID0gdmlld2VyIGJyb3dzZXIgYWdlbnRcbiAgLSB0YXJnZXQgPSBET00gZWxlbWVudCBzZWxlY3RvclxuICAtIG5vU3R5bGVzID0gYm9vbGVhblxuICAtIG9mZnNldCA9IG51bWJlclxuICAtIHBhcmVudENsYXNzID0gJ3N0cmluZydcbiAgLSBzY3JvbGxFbCA9IHdpbmRvdyB8fCBET00gZWxlbWVudCBzZWxlY3RvclxuICAtIHN0aWNreUNsYXNzID0gJ3N0cmluZydcbiAgLSBzdHVja0NsYXNzID0gJ3N0cmluZydcbiAgLSB1c2VTdGlja3lDbGFzc2VzID0gYm9vbGVhblxuICAtIHZlcnRpY2FsUG9zaXRpb24gPSAnc3RyaW5nJ1xuICAtLS0tLS0tLVxuICBwcm9wc/CflIxcbiAgLS0tLS0tLS1cbiAgLSBwID0gcHJvcHMge29iamVjdH1cbiAgLS0tLS0tLS1cbiAgaW5zdGFuY2Ugbm90ZVxuICAtLS0tLS0tLVxuICAtIHN0aWNreWJpdHMgcGFyZW50IG1ldGhvZHMgcmV0dXJuIHRoaXNcbiAgLSBzdGlja3liaXRzIGluc3RhbmNlIG1ldGhvZHMgcmV0dXJuIGFuIGluc3RhbmNlIGl0ZW1cbiAgLS0tLS0tLS1cbiAgbm9tZW5jbGF0dXJlXG4gIC0tLS0tLS0tXG4gIC0gdGFyZ2V0ID0+IGVsID0+IGVcbiAgLSBwcm9wcyA9PiBvIHx8IHBcbiAgLSBpbnN0YW5jZSA9PiBpdGVtID0+IGl0XG4gIC0tLS0tLS0tXG4gIG1ldGhvZHNcbiAgLS0tLS0tLS1cbiAgLSAuZGVmaW5lUG9zaXRpb24gPSBkZWZpbmVzIHN0aWNreSBvciBmaXhlZFxuICAtIC5hZGRJbnN0YW5jZSA9IGFuIGFycmF5IG9mIG9iamVjdHMgZm9yIGVhY2ggU3RpY2t5Yml0cyBUYXJnZXRcbiAgLSAuZ2V0Q2xvc2VzdFBhcmVudCA9IGdldHMgdGhlIHBhcmVudCBmb3Igbm9uLXdpbmRvdyBzY3JvbGxcbiAgLSAuY29tcHV0ZVNjcm9sbE9mZnNldHMgPSBjb21wdXRlcyBzY3JvbGwgcG9zaXRpb25cbiAgLSAudG9nZ2xlQ2xhc3NlcyA9IG9sZGVyIGJyb3dzZXIgdG9nZ2xlclxuICAtIC5tYW5hZ2VTdGF0ZSA9IG1hbmFnZXMgc3RpY2t5IHN0YXRlXG4gIC0gLnJlbW92ZUNsYXNzID0gb2xkZXIgYnJvd3NlciBzdXBwb3J0IGNsYXNzIHJlbW92ZXJcbiAgLSAucmVtb3ZlSW5zdGFuY2UgPSByZW1vdmVzIGFuIGluc3RhbmNlXG4gIC0gLmNsZWFudXAgPSByZW1vdmVzIGFsbCBTdGlja3liaXRzIGluc3RhbmNlcyBhbmQgY2xlYW5zIHVwIGRvbSBmcm9tIHN0aWNreWJpdHNcbiovXG5mdW5jdGlvbiBTdGlja3liaXRzKHRhcmdldCwgb2JqKSB7XG4gIHZhciBvID0gdHlwZW9mIG9iaiAhPT0gJ3VuZGVmaW5lZCcgPyBvYmogOiB7fTtcbiAgdGhpcy52ZXJzaW9uID0gJ1wiMy4xLjFcIic7XG4gIHRoaXMudXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJ25vIGB1c2VyQWdlbnRgIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyJztcbiAgdGhpcy5wcm9wcyA9IHtcbiAgICBub1N0eWxlczogby5ub1N0eWxlcyB8fCBmYWxzZSxcbiAgICBzdGlja3lCaXRTdGlja3lPZmZzZXQ6IG8uc3RpY2t5Qml0U3RpY2t5T2Zmc2V0IHx8IDAsXG4gICAgcGFyZW50Q2xhc3M6IG8ucGFyZW50Q2xhc3MgfHwgJ2pzLXN0aWNreWJpdC1wYXJlbnQnLFxuICAgIHNjcm9sbEVsOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG8uc2Nyb2xsRWwpIHx8IHdpbmRvdyxcbiAgICBzdGlja3lDbGFzczogby5zdGlja3lDbGFzcyB8fCAnanMtaXMtc3RpY2t5JyxcbiAgICBzdHVja0NsYXNzOiBvLnN0dWNrQ2xhc3MgfHwgJ2pzLWlzLXN0dWNrJyxcbiAgICB1c2VTdGlja3lDbGFzc2VzOiBvLnVzZVN0aWNreUNsYXNzZXMgfHwgZmFsc2UsXG4gICAgdmVydGljYWxQb3NpdGlvbjogby52ZXJ0aWNhbFBvc2l0aW9uIHx8ICd0b3AnXG4gIH07XG4gIHZhciBwID0gdGhpcy5wcm9wcztcbiAgLypcbiAgICBkZWZpbmUgcG9zaXRpb25WYWxcbiAgICAtLS0tXG4gICAgLSAgdXNlcyBhIGNvbXB1dGVkIChgLmRlZmluZVBvc2l0aW9uKClgKVxuICAgIC0gIGRlZmluZWQgdGhlIHBvc2l0aW9uXG4gICovXG5cbiAgcC5wb3NpdGlvblZhbCA9IHRoaXMuZGVmaW5lUG9zaXRpb24oKSB8fCAnZml4ZWQnO1xuICB2YXIgdnAgPSBwLnZlcnRpY2FsUG9zaXRpb247XG4gIHZhciBucyA9IHAubm9TdHlsZXM7XG4gIHZhciBwdiA9IHAucG9zaXRpb25WYWw7XG4gIHRoaXMuZWxzID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkgOiB0YXJnZXQ7XG4gIGlmICghKCdsZW5ndGgnIGluIHRoaXMuZWxzKSkgdGhpcy5lbHMgPSBbdGhpcy5lbHNdO1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsc1tpXTtcbiAgICB2YXIgc3R5bGVzID0gZWwuc3R5bGU7IC8vIHNldCB2ZXJ0aWNhbCBwb3NpdGlvblxuXG4gICAgc3R5bGVzW3ZwXSA9IHZwID09PSAndG9wJyAmJiAhbnMgPyBwLnN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIiA6ICcnO1xuICAgIHN0eWxlcy5wb3NpdGlvbiA9IHB2ICE9PSAnZml4ZWQnID8gcHYgOiAnJztcblxuICAgIGlmIChwdiA9PT0gJ2ZpeGVkJyB8fCBwLnVzZVN0aWNreUNsYXNzZXMpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuYWRkSW5zdGFuY2UoZWwsIHApOyAvLyBpbnN0YW5jZXMgYXJlIGFuIGFycmF5IG9mIG9iamVjdHNcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4vKlxuICBzZXRTdGlja3lQb3NpdGlvbiDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUICBtb3N0IGJhc2ljIHRoaW5nIHN0aWNreWJpdHMgZG9lc1xuICA9PiBjaGVja3MgdG8gc2VlIGlmIHBvc2l0aW9uIHN0aWNreSBpcyBzdXBwb3J0ZWRcbiAgPT4gZGVmaW5lZCB0aGUgcG9zaXRpb24gdG8gYmUgdXNlZFxuICA9PiBzdGlja3liaXRzIHdvcmtzIGFjY29yZGluZ2x5XG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmRlZmluZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ID0gWycnLCAnLW8tJywgJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nXTtcbiAgdmFyIHRlc3QgPSBkb2N1bWVudC5oZWFkLnN0eWxlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGVzdC5wb3NpdGlvbiA9IHByZWZpeFtpXSArIFwic3RpY2t5XCI7XG4gIH1cblxuICB2YXIgc3RpY2t5UHJvcCA9IHRlc3QucG9zaXRpb24gPyB0ZXN0LnBvc2l0aW9uIDogJ2ZpeGVkJztcbiAgdGVzdC5wb3NpdGlvbiA9ICcnO1xuICByZXR1cm4gc3RpY2t5UHJvcDtcbn07XG4vKlxuICBhZGRJbnN0YW5jZSDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUIG1hbmFnZXMgaW5zdGFuY2VzIG9mIGl0ZW1zXG4gIC0gdGFrZXMgaW4gYW4gZWwgYW5kIHByb3BzXG4gIC0gcmV0dXJucyBhbiBpdGVtIG9iamVjdFxuICAtLS1cbiAgLSB0YXJnZXQgPSBlbFxuICAtIG8gPSB7b2JqZWN0fSA9IHByb3BzXG4gICAgLSBzY3JvbGxFbCA9ICdzdHJpbmcnXG4gICAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gbnVtYmVyXG4gICAgLSBvZmYgPSBib29sZWFuXG4gICAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdGlja3lDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdHVja0NsYXNzID0gJ3N0cmluZydcbiAgLS0tXG4gIC0gZGVmaW5lZCBsYXRlclxuICAgIC0gcGFyZW50ID0gZG9tIGVsZW1lbnRcbiAgICAtIHN0YXRlID0gJ3N0cmluZydcbiAgICAtIG9mZnNldCA9IG51bWJlclxuICAgIC0gc3RpY2t5U3RhcnQgPSBudW1iZXJcbiAgICAtIHN0aWNreVN0b3AgPSBudW1iZXJcbiAgLSByZXR1cm5zIGFuIGluc3RhbmNlIG9iamVjdFxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uIGFkZEluc3RhbmNlKGVsLCBwcm9wcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBpdGVtID0ge1xuICAgIGVsOiBlbCxcbiAgICBwYXJlbnQ6IGVsLnBhcmVudE5vZGUsXG4gICAgcHJvcHM6IHByb3BzXG4gIH07XG4gIHRoaXMuaXNXaW4gPSB0aGlzLnByb3BzLnNjcm9sbEVsID09PSB3aW5kb3c7XG4gIHZhciBzZSA9IHRoaXMuaXNXaW4gPyB3aW5kb3cgOiB0aGlzLmdldENsb3Nlc3RQYXJlbnQoaXRlbS5lbCwgaXRlbS5wcm9wcy5zY3JvbGxFbCk7XG4gIHRoaXMuY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSk7XG4gIGl0ZW0ucGFyZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHByb3BzLnBhcmVudENsYXNzO1xuICBpdGVtLnN0YXRlID0gJ2RlZmF1bHQnO1xuXG4gIGl0ZW0uc3RhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLm1hbmFnZVN0YXRlKGl0ZW0pO1xuICB9O1xuXG4gIHNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGl0ZW0uc3RhdGVDb250YWluZXIpO1xuICByZXR1cm4gaXRlbTtcbn07XG4vKlxuICAtLS0tLS0tLVxuICBnZXRQYXJlbnQg8J+RqOKAjVxuICAtLS0tLS0tLVxuICAtIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwYXJlbnQgc2VsZWN0ZWQgZWxcbiAgLSBvbmx5IHVzZWQgZm9yIG5vbiBgd2luZG93YCBzY3JvbGwgZWxlbWVudHNcbiAgLSBzdXBwb3J0cyBvbGRlciBicm93c2Vyc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5nZXRDbG9zZXN0UGFyZW50ID0gZnVuY3Rpb24gKGVsLCBtYXRjaCkge1xuICAvLyBwID0gcGFyZW50IGVsZW1lbnRcbiAgdmFyIHAgPSBtYXRjaDtcbiAgdmFyIGUgPSBlbDtcbiAgaWYgKGUucGFyZW50RWxlbWVudCA9PT0gcCkgcmV0dXJuIHA7IC8vIHRyYXZlcnNlIHVwIHRoZSBkb20gdHJlZSB1bnRpbCB3ZSBnZXQgdG8gdGhlIHBhcmVudFxuXG4gIHdoaWxlIChlLnBhcmVudEVsZW1lbnQgIT09IHApIHtcbiAgICBlID0gZS5wYXJlbnRFbGVtZW50O1xuICB9IC8vIHJldHVybiBwYXJlbnQgZWxlbWVudFxuXG5cbiAgcmV0dXJuIHA7XG59O1xuLypcbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMg8J+TilxuICAtLS1cbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMgZm9yIFN0aWNreWJpdHNcbiAgLSBkZWZpbmVzXG4gICAgLSBvZmZzZXRcbiAgICAtIHN0YXJ0XG4gICAgLSBzdG9wXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gZnVuY3Rpb24gY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSkge1xuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgcGFyZW50ID0gaXQucGFyZW50O1xuICB2YXIgaXNDdXN0b20gPSAhdGhpcy5pc1dpbiAmJiBwLnBvc2l0aW9uVmFsID09PSAnZml4ZWQnO1xuICB2YXIgaXNCb3R0b20gPSBwLnZlcnRpY2FsUG9zaXRpb24gIT09ICdib3R0b20nO1xuICB2YXIgc2Nyb2xsRWxPZmZzZXQgPSBpc0N1c3RvbSA/IHAuc2Nyb2xsRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIDogMDtcbiAgdmFyIHN0aWNreVN0YXJ0ID0gaXNDdXN0b20gPyBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gc2Nyb2xsRWxPZmZzZXQgOiBwYXJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICBpdC5vZmZzZXQgPSBzY3JvbGxFbE9mZnNldCArIHAuc3RpY2t5Qml0U3RpY2t5T2Zmc2V0O1xuICBpdC5zdGlja3lTdGFydCA9IGlzQm90dG9tID8gc3RpY2t5U3RhcnQgLSBpdC5vZmZzZXQgOiAwO1xuICBpdC5zdGlja3lTdG9wID0gaXNCb3R0b20gPyBzdGlja3lTdGFydCArIHBhcmVudC5vZmZzZXRIZWlnaHQgLSAoaXQuZWwub2Zmc2V0SGVpZ2h0ICsgaXQub2Zmc2V0KSA6IHN0aWNreVN0YXJ0ICsgcGFyZW50Lm9mZnNldEhlaWdodDtcbiAgcmV0dXJuIGl0O1xufTtcbi8qXG4gIHRvZ2dsZUNsYXNzZXMg4pqW77iPXG4gIC0tLVxuICB0b2dnbGVzIGNsYXNzZXMgKGZvciBvbGRlciBicm93c2VyIHN1cHBvcnQpXG4gIHIgPSByZW1vdmVkIGNsYXNzXG4gIGEgPSBhZGRlZCBjbGFzc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS50b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gKGVsLCByLCBhKSB7XG4gIHZhciBlID0gZWw7XG4gIHZhciBjQXJyYXkgPSBlLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICBpZiAoYSAmJiBjQXJyYXkuaW5kZXhPZihhKSA9PT0gLTEpIGNBcnJheS5wdXNoKGEpO1xuICB2YXIgckl0ZW0gPSBjQXJyYXkuaW5kZXhPZihyKTtcbiAgaWYgKHJJdGVtICE9PSAtMSkgY0FycmF5LnNwbGljZShySXRlbSwgMSk7XG4gIGUuY2xhc3NOYW1lID0gY0FycmF5LmpvaW4oJyAnKTtcbn07XG4vKlxuICBtYW5hZ2VTdGF0ZSDwn5OdXG4gIC0tLVxuICAtIGRlZmluZXMgdGhlIHN0YXRlXG4gICAgLSBub3JtYWxcbiAgICAtIHN0aWNreVxuICAgIC0gc3R1Y2tcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUubWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShpdGVtKSB7XG4gIC8vIGNhY2hlIG9iamVjdFxuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgZSA9IGl0LmVsO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgc3RhdGUgPSBpdC5zdGF0ZTtcbiAgdmFyIHN0YXJ0ID0gaXQuc3RpY2t5U3RhcnQ7XG4gIHZhciBzdG9wID0gaXQuc3RpY2t5U3RvcDtcbiAgdmFyIHN0bCA9IGUuc3R5bGU7IC8vIGNhY2hlIHByb3BzXG5cbiAgdmFyIG5zID0gcC5ub1N0eWxlcztcbiAgdmFyIHB2ID0gcC5wb3NpdGlvblZhbDtcbiAgdmFyIHNlID0gcC5zY3JvbGxFbDtcbiAgdmFyIHN0aWNreSA9IHAuc3RpY2t5Q2xhc3M7XG4gIHZhciBzdHVjayA9IHAuc3R1Y2tDbGFzcztcbiAgdmFyIHZwID0gcC52ZXJ0aWNhbFBvc2l0aW9uO1xuICAvKlxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZVxuICAgIC0tLVxuICAgIC0gdXNlIHJBRlxuICAgIC0gb3Igc3R1YiByQUZcbiAgKi9cblxuICB2YXIgckFGU3R1YiA9IGZ1bmN0aW9uIHJBRkR1bW15KGYpIHtcbiAgICBmKCk7XG4gIH07XG5cbiAgdmFyIHJBRiA9ICF0aGlzLmlzV2luID8gckFGU3R1YiA6IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByQUZTdHViO1xuICAvKlxuICAgIGRlZmluZSBzY3JvbGwgdmFyc1xuICAgIC0tLVxuICAgIC0gc2Nyb2xsXG4gICAgLSBub3RTdGlja3lcbiAgICAtIGlzU3RpY2t5XG4gICAgLSBpc1N0dWNrXG4gICovXG5cbiAgdmFyIHRDID0gdGhpcy50b2dnbGVDbGFzc2VzO1xuICB2YXIgc2Nyb2xsID0gdGhpcy5pc1dpbiB8fCBzZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgPyB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQgOiBzZS5zY3JvbGxUb3A7XG4gIHZhciBub3RTdGlja3kgPSBzY3JvbGwgPiBzdGFydCAmJiBzY3JvbGwgPCBzdG9wICYmIChzdGF0ZSA9PT0gJ2RlZmF1bHQnIHx8IHN0YXRlID09PSAnc3R1Y2snKTtcbiAgdmFyIGlzU3RpY2t5ID0gc2Nyb2xsIDw9IHN0YXJ0ICYmIHN0YXRlID09PSAnc3RpY2t5JztcbiAgdmFyIGlzU3R1Y2sgPSBzY3JvbGwgPj0gc3RvcCAmJiBzdGF0ZSA9PT0gJ3N0aWNreSc7XG4gIC8qXG4gICAgVW5uYW1lZCBhcnJvdyBmdW5jdGlvbnMgd2l0aGluIHRoaXMgYmxvY2tcbiAgICAtLS1cbiAgICAtIGhlbHAgd2FudGVkIG9yIGRpc2N1c3Npb25cbiAgICAtIHZpZXcgdGVzdC5zdGlja3liaXRzLmpzXG4gICAgICAtIGBzdGlja3liaXRzIC5tYW5hZ2VTdGF0ZSAgYHBvc2l0aW9uOiBmaXhlZGAgaW50ZXJmYWNlYCBmb3IgbW9yZSBhd2FyZW5lc3Mg8J+RgFxuICAqL1xuXG4gIGlmIChub3RTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdzdGlja3knO1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdHVjaywgc3RpY2t5KTtcbiAgICAgIHN0bC5wb3NpdGlvbiA9IHB2O1xuICAgICAgaWYgKG5zKSByZXR1cm47XG4gICAgICBzdGwuYm90dG9tID0gJyc7XG4gICAgICBzdGxbdnBdID0gcC5zdGlja3lCaXRTdGlja3lPZmZzZXQgKyBcInB4XCI7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdkZWZhdWx0JztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5KTtcbiAgICAgIGlmIChwdiA9PT0gJ2ZpeGVkJykgc3RsLnBvc2l0aW9uID0gJyc7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdHVjaykge1xuICAgIGl0LnN0YXRlID0gJ3N0dWNrJztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5LCBzdHVjayk7XG4gICAgICBpZiAocHYgIT09ICdmaXhlZCcgfHwgbnMpIHJldHVybjtcbiAgICAgIHN0bC50b3AgPSAnJztcbiAgICAgIHN0bC5ib3R0b20gPSAnMCc7XG4gICAgICBzdGwucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIGl0O1xufTtcbi8qXG4gIHJlbW92ZXMgYW4gaW5zdGFuY2Ug8J+Ri1xuICAtLS0tLS0tLVxuICAtIGNsZWFudXAgaW5zdGFuY2VcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUucmVtb3ZlSW5zdGFuY2UgPSBmdW5jdGlvbiByZW1vdmVJbnN0YW5jZShpbnN0YW5jZSkge1xuICB2YXIgZSA9IGluc3RhbmNlLmVsO1xuICB2YXIgcCA9IGluc3RhbmNlLnByb3BzO1xuICB2YXIgdEMgPSB0aGlzLnRvZ2dsZUNsYXNzZXM7XG4gIGUuc3R5bGUucG9zaXRpb24gPSAnJztcbiAgZS5zdHlsZVtwLnZlcnRpY2FsUG9zaXRpb25dID0gJyc7XG4gIHRDKGUsIHAuc3RpY2t5Q2xhc3MpO1xuICB0QyhlLCBwLnN0dWNrQ2xhc3MpO1xuICB0QyhlLnBhcmVudE5vZGUsIHAucGFyZW50Q2xhc3MpO1xufTtcbi8qXG4gIGNsZWFudXAg8J+bgVxuICAtLS0tLS0tLVxuICAtIGNsZWFucyB1cCBlYWNoIGluc3RhbmNlXG4gIC0gY2xlYXJzIGluc3RhbmNlXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmNsZWFudXAgPSBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaW5zdGFuY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdmFyIGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXNbaV07XG4gICAgaW5zdGFuY2UucHJvcHMuc2Nyb2xsRWwucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaW5zdGFuY2Uuc3RhdGVDb250YWluZXIpO1xuICAgIHRoaXMucmVtb3ZlSW5zdGFuY2UoaW5zdGFuY2UpO1xuICB9XG5cbiAgdGhpcy5tYW5hZ2VTdGF0ZSA9IGZhbHNlO1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xufTtcbi8qXG4gIGV4cG9ydFxuICAtLS0tLS0tLVxuICBleHBvcnRzIFN0aWNrQml0cyB0byBiZSB1c2VkIPCfj4FcbiovXG5cblxuZnVuY3Rpb24gc3RpY2t5Yml0cyh0YXJnZXQsIG8pIHtcbiAgcmV0dXJuIG5ldyBTdGlja3liaXRzKHRhcmdldCwgbyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHN0aWNreWJpdHM7XG4iLCIvKiEgZ3Vtc2hvZWpzIHYzLjUuMCB8IChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGkgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly9naXRodWIuY29tL2NmZXJkaW5hbmRpL2d1bXNob2UgKi9cbiEoZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQoZSkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoZSk6ZS5ndW1zaG9lPXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzLndpbmRvd3x8dGhpcy5nbG9iYWwsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0LG4sbyxyLGEsYyxpLGw9e30scz1cInF1ZXJ5U2VsZWN0b3JcImluIGRvY3VtZW50JiZcImFkZEV2ZW50TGlzdGVuZXJcImluIGUmJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSx1PVtdLGY9e3NlbGVjdG9yOlwiW2RhdGEtZ3Vtc2hvZV0gYVwiLHNlbGVjdG9ySGVhZGVyOlwiW2RhdGEtZ3Vtc2hvZS1oZWFkZXJdXCIsY29udGFpbmVyOmUsb2Zmc2V0OjAsYWN0aXZlQ2xhc3M6XCJhY3RpdmVcIixzY3JvbGxEZWxheTohMSxjYWxsYmFjazpmdW5jdGlvbigpe319LGQ9ZnVuY3Rpb24oZSx0LG4pe2lmKFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJnQuY2FsbChuLGVbb10sbyxlKTtlbHNlIGZvcih2YXIgcj0wLGE9ZS5sZW5ndGg7cjxhO3IrKyl0LmNhbGwobixlW3JdLHIsZSl9LHY9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PSExLG49MCxvPWFyZ3VtZW50cy5sZW5ndGg7XCJbb2JqZWN0IEJvb2xlYW5dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSYmKHQ9YXJndW1lbnRzWzBdLG4rKyk7Zm9yKDtuPG87bisrKXt2YXIgcj1hcmd1bWVudHNbbl07IShmdW5jdGlvbihuKXtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobltvXSk/ZVtvXT12KCEwLGVbb10sbltvXSk6ZVtvXT1uW29dKX0pKHIpfXJldHVybiBlfSxtPWZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLm1heChlLnNjcm9sbEhlaWdodCxlLm9mZnNldEhlaWdodCxlLmNsaWVudEhlaWdodCl9LGc9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpfSxoPWZ1bmN0aW9uKGUpe3ZhciBuPTA7aWYoZS5vZmZzZXRQYXJlbnQpZG97bis9ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudH13aGlsZShlKTtlbHNlIG49ZS5vZmZzZXRUb3A7cmV0dXJuIG49bi1hLXQub2Zmc2V0LG4+PTA/bjowfSxwPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIG4udG9wPj0wJiZuLmxlZnQ+PTAmJm4uYm90dG9tPD0oZS5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkmJm4ucmlnaHQ8PShlLmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCl9LHk9ZnVuY3Rpb24oKXt1LnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZGlzdGFuY2U+dC5kaXN0YW5jZT8tMTplLmRpc3RhbmNlPHQuZGlzdGFuY2U/MTowfSkpfTtsLnNldERpc3RhbmNlcz1mdW5jdGlvbigpe289ZygpLGE9cj9tKHIpK2gocik6MCxkKHUsKGZ1bmN0aW9uKGUpe2UuZGlzdGFuY2U9aChlLnRhcmdldCl9KSkseSgpfTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodC5zZWxlY3Rvcik7ZChlLChmdW5jdGlvbihlKXtpZihlLmhhc2gpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5oYXNoKTt0JiZ1LnB1c2goe25hdjplLHRhcmdldDp0LHBhcmVudDpcImxpXCI9PT1lLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2UucGFyZW50Tm9kZTpudWxsLGRpc3RhbmNlOjB9KX19KSl9LEg9ZnVuY3Rpb24oKXtjJiYoYy5uYXYuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSxjLnBhcmVudCYmYy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSl9LEM9ZnVuY3Rpb24oZSl7SCgpLGUubmF2LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksZS5wYXJlbnQmJmUucGFyZW50LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksdC5jYWxsYmFjayhlKSxjPXtuYXY6ZS5uYXYscGFyZW50OmUucGFyZW50fX07bC5nZXRDdXJyZW50TmF2PWZ1bmN0aW9uKCl7dmFyIG49ZS5wYWdlWU9mZnNldDtpZihlLmlubmVySGVpZ2h0K24+PW8mJnAodVswXS50YXJnZXQpKXJldHVybiBDKHVbMF0pLHVbMF07Zm9yKHZhciByPTAsYT11Lmxlbmd0aDtyPGE7cisrKXt2YXIgYz11W3JdO2lmKGMuZGlzdGFuY2U8PW4pcmV0dXJuIEMoYyksY31IKCksdC5jYWxsYmFjaygpfTt2YXIgTD1mdW5jdGlvbigpe2QodSwoZnVuY3Rpb24oZSl7ZS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHQuYWN0aXZlQ2xhc3MpJiYoYz17bmF2OmUubmF2LHBhcmVudDplLnBhcmVudH0pfSkpfTtsLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0JiYodC5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSx1PVtdLHQ9bnVsbCxuPW51bGwsbz1udWxsLHI9bnVsbCxhPW51bGwsYz1udWxsLGk9bnVsbCl9O3ZhciBFPWZ1bmN0aW9uKGUpe3dpbmRvdy5jbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2wuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCl9KSw2Nil9LGo9ZnVuY3Rpb24oZSl7bnx8KG49c2V0VGltZW91dCgoZnVuY3Rpb24oKXtuPW51bGwsXCJzY3JvbGxcIj09PWUudHlwZSYmbC5nZXRDdXJyZW50TmF2KCksXCJyZXNpemVcIj09PWUudHlwZSYmKGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCkpfSksNjYpKX07cmV0dXJuIGwuaW5pdD1mdW5jdGlvbihlKXtzJiYobC5kZXN0cm95KCksdD12KGYsZXx8e30pLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0LnNlbGVjdG9ySGVhZGVyKSxiKCksMCE9PXUubGVuZ3RoJiYoTCgpLGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCksdC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuc2Nyb2xsRGVsYXk/dC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLEUsITEpOnQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSkpfSxsfSkpOyIsIi8qKlxuICogTmF2aWdhdGlvbiBpbnBhZ2UgcmVsYXRlZCBiZWhhdmlvcnMuXG4gKi9cblxuaW1wb3J0IHN0aWNreWJpdHMgZnJvbSAnc3RpY2t5Yml0cyc7XG5pbXBvcnQgZ3Vtc2hvZSBmcm9tICdndW1zaG9lanMnO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uSW5wYWdlcyA9ICh7XG4gIHN0aWNreVNlbGVjdG9yOiBzdGlja3lTZWxlY3RvciA9ICcuZWNsLW5hdmlnYXRpb24taW5wYWdlJyxcbiAgc3B5U2VsZWN0b3I6IHNweVNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1pbnBhZ2VfX2xpbmsnLFxuICBzcHlDbGFzczogc3B5Q2xhc3MgPSAnZWNsLW5hdmlnYXRpb24taW5wYWdlX19saW5rLS1pcy1hY3RpdmUnLFxuICBzcHlUcmlnZ2VyOiBzcHlUcmlnZ2VyID0gJy5lY2wtbmF2aWdhdGlvbi1pbnBhZ2VfX3RyaWdnZXInLFxuICBzcHlPZmZzZXQ6IHNweU9mZnNldCA9IDIwLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIC8vIEFDVElPTlNcbiAgZnVuY3Rpb24gaW5pdFN0aWNreSgpIHtcbiAgICAvLyBpbml0IHN0aWNreSBtZW51XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc3RpY2t5Yml0cyhzdGlja3lTZWxlY3RvciwgeyB1c2VTdGlja3lDbGFzc2VzOiB0cnVlIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdFNjcm9sbFNweSgpIHtcbiAgICAvLyBpbml0IHNjcm9sbHNweVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIGd1bXNob2UuaW5pdCh7XG4gICAgICBzZWxlY3Rvcjogc3B5U2VsZWN0b3IsXG4gICAgICBhY3RpdmVDbGFzczogc3B5Q2xhc3MsXG4gICAgICBvZmZzZXQ6IHNweU9mZnNldCxcbiAgICAgIGNhbGxiYWNrKG5hdikge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgICAgIGlmICghbmF2KSByZXR1cm47XG4gICAgICAgIGNvbnN0IG5hdmlnYXRpb25UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc3B5VHJpZ2dlcik7XG4gICAgICAgIG5hdmlnYXRpb25UaXRsZS5pbm5lckhUTUwgPSBuYXYubmF2LmlubmVySFRNTDtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5pdFN0aWNreSgpO1xuICAgIGluaXRTY3JvbGxTcHkoKTtcbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uSW5wYWdlcztcbiIsImltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtYmFzZS9oZWxwZXJzL2RvbSc7XG5pbXBvcnQgeyB0b2dnbGVFeHBhbmRhYmxlIH0gZnJvbSAnQGVjLWV1cm9wYS9lY2wtZXhwYW5kYWJsZXMvZXhwYW5kYWJsZXMnO1xuXG5jb25zdCBvbkNsaWNrID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBpZiAobm9kZSAmJiBub2RlLmhhc0F0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpKSB7XG4gICAgY29uc3QgaGFzUG9wdXAgPSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpO1xuICAgIGlmIChoYXNQb3B1cCA9PT0gJycgfHwgaGFzUG9wdXAgPT09ICd0cnVlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKG5vZGUsIHtcbiAgICAgICAgY29udGV4dDogbWVudSxcbiAgICAgICAgY2xvc2VTaWJsaW5nczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb25LZXlkb3duID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBjb25zdCBjdXJyZW50VGFiID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBwcmV2aW91c1RhYkl0ZW0gPVxuICAgIGN1cnJlbnRUYWIucHJldmlvdXNFbGVtZW50U2libGluZyB8fFxuICAgIGN1cnJlbnRUYWIucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICBjb25zdCBuZXh0VGFiSXRlbSA9XG4gICAgY3VycmVudFRhYi5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY3VycmVudFRhYi5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIC8vIGRvbid0IGNhdGNoIGtleSBldmVudHMgd2hlbiDijJggb3IgQWx0IG1vZGlmaWVyIGlzIHByZXNlbnRcbiAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSkgcmV0dXJuO1xuXG4gIC8vIGNhdGNoIGxlZnQvcmlnaHQgYW5kIHVwL2Rvd24gYXJyb3cga2V5IGV2ZW50c1xuICAvLyBpZiBuZXcgbmV4dC9wcmV2IHRhYiBhdmFpbGFibGUsIHNob3cgaXQgYnkgcGFzc2luZyB0YWIgYW5jaG9yIHRvIHNob3dUYWIgbWV0aG9kXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgLy8gRU5URVIgb3IgU1BBQ0VcbiAgICBjYXNlIDEzOlxuICAgIGNhc2UgMzI6XG4gICAgICBvbkNsaWNrKGUuY3VycmVudFRhcmdldCwgbWVudSkoZSk7XG4gICAgICAvKiBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKGUuY3VycmVudFRhcmdldCwge1xuICAgICAgICBjb250ZXh0OiBtZW51LFxuICAgICAgICBjbG9zZVNpYmxpbmdzOiB0cnVlLFxuICAgICAgfSk7ICovXG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgTEVGVCBhbmQgVVBcbiAgICBjYXNlIDM3OlxuICAgIGNhc2UgMzg6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcmV2aW91c1RhYkl0ZW0ucXVlcnlTZWxlY3RvcignYScpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgUklHSFQgYW5kIERPV05cbiAgICBjYXNlIDM5OlxuICAgIGNhc2UgNDA6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0VGFiSXRlbS5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1lZ2FtZW51ID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51JyxcbiAgdG9nZ2xlU2VsZWN0b3I6IHRvZ2dsZVNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X190b2dnbGUnLFxuICBsaXN0U2VsZWN0b3I6IGxpc3RTZWxlY3RvciA9ICcuZWNsLW5hdmlnYXRpb24tbWVudV9fcm9vdCcsXG4gIGxpbmtTZWxlY3RvcjogbGlua1NlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X19saW5rJyxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBtZWdhbWVudXNBcnJheSA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICBtZWdhbWVudXNBcnJheS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgIC8vIE1ha2UgdGhlIHRvZ2dsZSBleHBhbmRhYmxlXG4gICAgY29uc3QgdG9nZ2xlID0gbWVudS5xdWVyeVNlbGVjdG9yKHRvZ2dsZVNlbGVjdG9yKTtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0b2dnbGVFeHBhbmRhYmxlKHRvZ2dsZSwgeyBjb250ZXh0OiBtZW51IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBsaW5rc1xuICAgIGNvbnN0IGxpc3QgPSBtZW51LnF1ZXJ5U2VsZWN0b3IobGlzdFNlbGVjdG9yKTtcblxuICAgIC8vIEdldCBleHBhbmRhYmxlcyB3aXRoaW4gdGhlIGxpc3RcbiAgICBjb25zdCBub2Rlc0FycmF5ID0gcXVlcnlBbGwobGlua1NlbGVjdG9yLCBsaXN0KTtcblxuICAgIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKG5vZGUsIGxpc3QpKTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bihub2RlLCBsaXN0KSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVnYW1lbnU7XG4iLCIvKipcbiAqIFRhYmxlcyByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby11bmV4cGVjdGVkLW11bHRpbGluZSAqL1xuXG5leHBvcnQgZnVuY3Rpb24gZWNsVGFibGVzKGVsZW1lbnRzID0gbnVsbCkge1xuICBjb25zdCB0YWJsZXMgPVxuICAgIGVsZW1lbnRzIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2VjbC10YWJsZS0tcmVzcG9uc2l2ZScpO1xuICBbXS5mb3JFYWNoLmNhbGwodGFibGVzLCB0YWJsZSA9PiB7XG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IFtdO1xuICAgIGxldCB0ZXh0Q29sc3BhbiA9ICcnO1xuICAgIGxldCBjaSA9IDA7XG4gICAgbGV0IGNuID0gW107XG5cbiAgICAvLyBUaGUgcm93cyBpbiBhIHRhYmxlIGJvZHkuXG4gICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcblxuICAgIC8vIFRoZSBoZWFkZXJzIGluIGEgdGFibGUuXG4gICAgY29uc3QgaGVhZGVycyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RoZWFkIHRyIHRoJyk7XG5cbiAgICAvLyBUaGUgbnVtYmVyIG9mIG1haW4gaGVhZGVycy5cbiAgICBjb25zdCBoZWFkRmlyc3QgPVxuICAgICAgdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhlYWQgdHInKVswXS5xdWVyeVNlbGVjdG9yQWxsKCd0aCcpLmxlbmd0aCAtIDE7XG5cbiAgICAvLyBOdW1iZXIgb2YgY2VsbHMgcGVyIHJvdy5cbiAgICBjb25zdCBjZWxsUGVyUm93ID0gdGFibGVcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpWzBdXG4gICAgICAucXVlcnlTZWxlY3RvckFsbCgndGQnKS5sZW5ndGg7XG5cbiAgICAvLyBQb3NpdGlvbiBvZiB0aGUgZXZlbnR1YWwgY29sc3BhbiBlbGVtZW50LlxuICAgIGxldCBjb2xzcGFuSW5kZXggPSAtMTtcblxuICAgIC8vIEJ1aWxkIHRoZSBhcnJheSB3aXRoIGFsbCB0aGUgXCJsYWJlbHNcIlxuICAgIC8vIEFsc28gZ2V0IHBvc2l0aW9uIG9mIHRoZSBldmVudHVhbCBjb2xzcGFuIGVsZW1lbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhlYWRlcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChoZWFkZXJzW2ldLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpKSB7XG4gICAgICAgIGNvbHNwYW5JbmRleCA9IGk7XG4gICAgICB9XG5cbiAgICAgIGhlYWRlclRleHRbaV0gPSBbXTtcbiAgICAgIGhlYWRlclRleHRbaV0gPSBoZWFkZXJzW2ldLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIC8vIElmIHdlIGhhdmUgYSBjb2xzcGFuLCB3ZSBoYXZlIHRvIHByZXBhcmUgdGhlIGRhdGEgZm9yIGl0LlxuICAgIGlmIChjb2xzcGFuSW5kZXggIT09IC0xKSB7XG4gICAgICB0ZXh0Q29sc3BhbiA9IGhlYWRlclRleHQuc3BsaWNlKGNvbHNwYW5JbmRleCwgMSk7XG4gICAgICBjaSA9IGNvbHNwYW5JbmRleDtcbiAgICAgIGNuID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhbY29sc3Bhbl0nKVswXS5nZXRBdHRyaWJ1dGUoJ2NvbHNwYW4nKTtcblxuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjbjsgYyArPSAxKSB7XG4gICAgICAgIGhlYWRlclRleHQuc3BsaWNlKGNpICsgYywgMCwgaGVhZGVyVGV4dFtoZWFkRmlyc3QgKyBjXSk7XG4gICAgICAgIGhlYWRlclRleHQuc3BsaWNlKGhlYWRGaXJzdCArIDEgKyBjLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBGb3IgZXZlcnkgcm93LCBzZXQgdGhlIGF0dHJpYnV0ZXMgd2UgdXNlIHRvIG1ha2UgdGhpcyBoYXBwZW4uXG4gICAgW10uZm9yRWFjaC5jYWxsKHRhYmxlUm93cywgcm93ID0+IHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY2VsbFBlclJvdzsgaiArPSAxKSB7XG4gICAgICAgIGlmIChoZWFkZXJUZXh0W2pdID09PSAnJyB8fCBoZWFkZXJUZXh0W2pdID09PSAnXFx1MDBhMCcpIHtcbiAgICAgICAgICByb3dcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpXG4gICAgICAgICAgICBbal0uc2V0QXR0cmlidXRlKCdjbGFzcycsICdlY2wtdGFibGVfX2hlYWRpbmcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKVtqXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdGgnLCBoZWFkZXJUZXh0W2pdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb2xzcGFuSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY29uc3QgY2VsbCA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2NvbHNwYW5JbmRleF07XG4gICAgICAgICAgY2VsbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VjbC10YWJsZV9fZ3JvdXAtbGFiZWwnKTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS10aC1ncm91cCcsIHRleHRDb2xzcGFuKTtcblxuICAgICAgICAgIGZvciAobGV0IGMgPSAxOyBjIDwgY247IGMgKz0gMSkge1xuICAgICAgICAgICAgcm93XG4gICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpXG4gICAgICAgICAgICAgIFtjb2xzcGFuSW5kZXggKyBjXS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICAgICAgJ2NsYXNzJyxcbiAgICAgICAgICAgICAgICAnZWNsLXRhYmxlX19ncm91cF9lbGVtZW50J1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZWNsVGFibGVzO1xuIiwiLy8gSGVhdmlseSBpbnNwaXJlZCBieSB0aGUgdGFiIGNvbXBvbmVudCBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9mcmVuZC9mcmVuZC5jb1xuXG5pbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlYy1ldXJvcGEvZWNsLWJhc2UvaGVscGVycy9kb20nO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKi9cbmV4cG9ydCBjb25zdCB0YWJzID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtdGFicycsXG4gIHRhYmxpc3RTZWxlY3RvcjogdGFibGlzdFNlbGVjdG9yID0gJy5lY2wtdGFic19fdGFibGlzdCcsXG4gIHRhYnBhbmVsU2VsZWN0b3I6IHRhYnBhbmVsU2VsZWN0b3IgPSAnLmVjbC10YWJzX190YWJwYW5lbCcsXG4gIHRhYmVsZW1lbnRzU2VsZWN0b3I6IHRhYmVsZW1lbnRzU2VsZWN0b3IgPSBgJHt0YWJsaXN0U2VsZWN0b3J9IGxpYCxcbn0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoXG4gICAgISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8XG4gICAgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0XG4gIClcbiAgICByZXR1cm4gbnVsbDtcblxuICAvLyBTRVRVUFxuICAvLyBzZXQgdGFiIGVsZW1lbnQgTm9kZUxpc3RcbiAgY29uc3QgdGFiQ29udGFpbmVycyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICAvLyBBQ1RJT05TXG4gIGZ1bmN0aW9uIHNob3dUYWIodGFyZ2V0LCBnaXZlRm9jdXMgPSB0cnVlKSB7XG4gICAgY29uc3Qgc2libGluZ1RhYnMgPSBxdWVyeUFsbChcbiAgICAgIGAke3RhYmxpc3RTZWxlY3Rvcn0gbGlgLFxuICAgICAgdGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudFxuICAgICk7XG4gICAgY29uc3Qgc2libGluZ1RhYnBhbmVscyA9IHF1ZXJ5QWxsKFxuICAgICAgdGFicGFuZWxTZWxlY3RvcixcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICApO1xuXG4gICAgLy8gc2V0IGluYWN0aXZlc1xuICAgIHNpYmxpbmdUYWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgIHRhYi5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xuICAgICAgdGFiLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xuICAgIH0pO1xuXG4gICAgc2libGluZ1RhYnBhbmVscy5mb3JFYWNoKHRhYnBhbmVsID0+IHtcbiAgICAgIHRhYnBhbmVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCAndHJ1ZScpO1xuICAgIH0pO1xuXG4gICAgLy8gc2V0IGFjdGl2ZXMgYW5kIGZvY3VzXG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICBpZiAoZ2l2ZUZvY3VzKSB0YXJnZXQuZm9jdXMoKTtcbiAgICBkb2N1bWVudFxuICAgICAgLmdldEVsZW1lbnRCeUlkKHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKSlcbiAgICAgIC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gIH1cblxuICAvLyBFVkVOVFNcbiAgZnVuY3Rpb24gZXZlbnRUYWJDbGljayhlKSB7XG4gICAgc2hvd1RhYihlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gbG9vayBpbnRvIHJlbW92ZSBpZC9zZXR0aW1lb3V0L3JlaW5zdGF0ZSBpZCBhcyBhbiBhbHRlcm5hdGl2ZSB0byBwcmV2ZW50RGVmYXVsdFxuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRUYWJLZXlkb3duKGUpIHtcbiAgICAvLyBjb2xsZWN0IHRhYiB0YXJnZXRzLCBhbmQgdGhlaXIgcGFyZW50cycgcHJldi9uZXh0IChvciBmaXJzdC9sYXN0KVxuICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgY29uc3QgcHJldmlvdXNUYWJJdGVtID1cbiAgICAgIGN1cnJlbnRUYWIucHJldmlvdXNFbGVtZW50U2libGluZyB8fFxuICAgICAgY3VycmVudFRhYi5wYXJlbnRFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgbmV4dFRhYkl0ZW0gPVxuICAgICAgY3VycmVudFRhYi5uZXh0RWxlbWVudFNpYmxpbmcgfHxcbiAgICAgIGN1cnJlbnRUYWIucGFyZW50RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuICAgIC8vIGRvbid0IGNhdGNoIGtleSBldmVudHMgd2hlbiDijJggb3IgQWx0IG1vZGlmaWVyIGlzIHByZXNlbnRcbiAgICBpZiAoZS5tZXRhS2V5IHx8IGUuYWx0S2V5KSByZXR1cm47XG5cbiAgICAvLyBjYXRjaCBsZWZ0L3JpZ2h0IGFuZCB1cC9kb3duIGFycm93IGtleSBldmVudHNcbiAgICAvLyBpZiBuZXcgbmV4dC9wcmV2IHRhYiBhdmFpbGFibGUsIHNob3cgaXQgYnkgcGFzc2luZyB0YWIgYW5jaG9yIHRvIHNob3dUYWIgbWV0aG9kXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIGNhc2UgMzc6XG4gICAgICBjYXNlIDM4OlxuICAgICAgICBzaG93VGFiKHByZXZpb3VzVGFiSXRlbSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM5OlxuICAgICAgY2FzZSA0MDpcbiAgICAgICAgc2hvd1RhYihuZXh0VGFiSXRlbSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBCSU5ESU5HU1xuICBmdW5jdGlvbiBiaW5kVGFic0V2ZW50cyh0YWJDb250YWluZXIpIHtcbiAgICBjb25zdCB0YWJzRWxlbWVudHMgPSBxdWVyeUFsbCh0YWJlbGVtZW50c1NlbGVjdG9yLCB0YWJDb250YWluZXIpO1xuICAgIC8vIGJpbmQgYWxsIHRhYiBjbGljayBhbmQga2V5ZG93biBldmVudHNcbiAgICB0YWJzRWxlbWVudHMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRUYWJDbGljayk7XG4gICAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50VGFiS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB1bmJpbmRUYWJzRXZlbnRzKHRhYkNvbnRhaW5lcikge1xuICAgIGNvbnN0IHRhYnNFbGVtZW50cyA9IHF1ZXJ5QWxsKHRhYmVsZW1lbnRzU2VsZWN0b3IsIHRhYkNvbnRhaW5lcik7XG4gICAgLy8gdW5iaW5kIGFsbCB0YWIgY2xpY2sgYW5kIGtleWRvd24gZXZlbnRzXG4gICAgdGFic0VsZW1lbnRzLmZvckVhY2godGFiID0+IHtcbiAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50VGFiQ2xpY2spO1xuICAgICAgdGFiLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudFRhYktleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHRhYkNvbnRhaW5lcnMuZm9yRWFjaCh1bmJpbmRUYWJzRXZlbnRzKTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB0YWJDb250YWluZXJzLmZvckVhY2goYmluZFRhYnNFdmVudHMpO1xuICB9XG5cbiAgLy8gQXV0b21hdGljYWxseSBpbml0XG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuLy8gbW9kdWxlIGV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IHRhYnM7XG4iLCIvKipcbiAqIFRpbWVsaW5lXG4gKi9cblxuY29uc3QgZXhwYW5kVGltZWxpbmUgPSAoXG4gIHRpbWVsaW5lLFxuICBidXR0b24sXG4gIHtcbiAgICBjbGFzc1RvUmVtb3ZlID0gJ2VjbC10aW1lbGluZV9faXRlbS0tb3Zlci1saW1pdCcsXG4gICAgaGlkZGVuRWxlbWVudHNTZWxlY3RvciA9ICcuZWNsLXRpbWVsaW5lX19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgfSA9IHt9XG4pID0+IHtcbiAgaWYgKCF0aW1lbGluZSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IGhpZGRlbkVsZW1lbnRzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgdGltZWxpbmUucXVlcnlTZWxlY3RvckFsbChoaWRkZW5FbGVtZW50c1NlbGVjdG9yKVxuICApO1xuXG4gIC8vIFJlbW92ZSBleHRyYSBjbGFzc1xuICBoaWRkZW5FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIGJ1dHR0b25cbiAgYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgdGltZWxpbmVzID0gKHtcbiAgc2VsZWN0b3IgPSAnLmVjbC10aW1lbGluZScsXG4gIGJ1dHRvblNlbGVjdG9yID0gJy5lY2wtdGltZWxpbmVfX2J1dHRvbicsXG4gIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC10aW1lbGluZV9faXRlbS0tb3Zlci1saW1pdCcsXG4gIGNsYXNzVG9SZW1vdmUgPSAnZWNsLXRpbWVsaW5lX19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgY29udGV4dCA9IGRvY3VtZW50LFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IG5vZGVzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICk7XG5cbiAgbm9kZXNBcnJheS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRleHQucXVlcnlTZWxlY3RvcihidXR0b25TZWxlY3Rvcik7XG5cbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICBleHBhbmRUaW1lbGluZShub2RlLCBidXR0b24sIHsgY2xhc3NUb1JlbW92ZSwgaGlkZGVuRWxlbWVudHNTZWxlY3RvciB9KVxuICAgICAgKTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGltZWxpbmVzO1xuIiwiLy8gRXhwb3J0IGNvbXBvbmVudHNcblxuZXhwb3J0ICogZnJvbSAnQGVjLWV1cm9wYS9lY2wtYWNjb3JkaW9ucyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC1jYXJvdXNlbHMnO1xuZXhwb3J0ICogZnJvbSAnQGVjLWV1cm9wYS9lY2wtY29udGV4dC1uYXZzJztcbmV4cG9ydCAqIGZyb20gJ0BlYy1ldXJvcGEvZWNsLWRyb3Bkb3ducyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC1kaWFsb2dzJztcbmV4cG9ydCAqIGZyb20gJ0BlYy1ldXJvcGEvZWNsLWV4cGFuZGFibGVzJztcbmV4cG9ydCAqIGZyb20gJ0BlYy1ldXJvcGEvZWNsLWZvcm1zLWZpbGUtdXBsb2Fkcyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC1sYW5nLXNlbGVjdC1wYWdlcyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC1tZXNzYWdlcyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC1uYXZpZ2F0aW9uLWlucGFnZXMnO1xuZXhwb3J0ICogZnJvbSAnQGVjLWV1cm9wYS9lY2wtbmF2aWdhdGlvbi1tZW51cyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC10YWJsZXMnO1xuZXhwb3J0ICogZnJvbSAnQGVjLWV1cm9wYS9lY2wtdGFicyc7XG5leHBvcnQgKiBmcm9tICdAZWMtZXVyb3BhL2VjbC10aW1lbGluZXMnO1xuIl0sIm5hbWVzIjpbInF1ZXJ5QWxsIiwic2VsZWN0b3IiLCJjb250ZXh0IiwiZG9jdW1lbnQiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWNjb3JkaW9ucyIsImhlYWRlclNlbGVjdG9yIiwid2luZG93IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWNjb3JkaW9uQ29udGFpbmVycyIsImhpZGVQYW5lbCIsInRhcmdldCIsImFjdGl2ZVBhbmVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJzaG93UGFuZWwiLCJ0b2dnbGVQYW5lbCIsImdpdmVIZWFkZXJGb2N1cyIsImhlYWRlclNldCIsImkiLCJmb2N1cyIsImV2ZW50SGVhZGVyQ2xpY2siLCJlIiwiY3VycmVudFRhcmdldCIsImV2ZW50SGVhZGVyS2V5ZG93biIsImN1cnJlbnRIZWFkZXIiLCJpc01vZGlmaWVyS2V5IiwibWV0YUtleSIsImFsdEtleSIsInRoaXNDb250YWluZXIiLCJwYXJlbnROb2RlIiwidGhlc2VIZWFkZXJzIiwiY3VycmVudEhlYWRlckluZGV4IiwiaW5kZXhPZiIsImtleUNvZGUiLCJwcmV2ZW50RGVmYXVsdCIsInByZXZpb3VzSGVhZGVySW5kZXgiLCJsZW5ndGgiLCJuZXh0SGVhZGVySW5kZXgiLCJiaW5kQWNjb3JkaW9uRXZlbnRzIiwiYWNjb3JkaW9uQ29udGFpbmVyIiwiYWNjb3JkaW9uSGVhZGVycyIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwidW5iaW5kQWNjb3JkaW9uRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRlc3Ryb3kiLCJpbml0IiwiRlVOQ19FUlJPUl9URVhUIiwiTkFOIiwic3ltYm9sVGFnIiwicmVUcmltIiwicmVJc0JhZEhleCIsInJlSXNCaW5hcnkiLCJyZUlzT2N0YWwiLCJmcmVlUGFyc2VJbnQiLCJwYXJzZUludCIsImZyZWVHbG9iYWwiLCJiYWJlbEhlbHBlcnMudHlwZW9mIiwiZ2xvYmFsIiwiT2JqZWN0IiwiZnJlZVNlbGYiLCJzZWxmIiwicm9vdCIsIkZ1bmN0aW9uIiwib2JqZWN0UHJvdG8iLCJwcm90b3R5cGUiLCJvYmplY3RUb1N0cmluZyIsInRvU3RyaW5nIiwibmF0aXZlTWF4IiwiTWF0aCIsIm1heCIsIm5hdGl2ZU1pbiIsIm1pbiIsIm5vdyIsIkRhdGUiLCJkZWJvdW5jZSIsImZ1bmMiLCJ3YWl0Iiwib3B0aW9ucyIsImxhc3RBcmdzIiwibGFzdFRoaXMiLCJtYXhXYWl0IiwicmVzdWx0IiwidGltZXJJZCIsImxhc3RDYWxsVGltZSIsImxhc3RJbnZva2VUaW1lIiwibGVhZGluZyIsIm1heGluZyIsInRyYWlsaW5nIiwiVHlwZUVycm9yIiwidG9OdW1iZXIiLCJpc09iamVjdCIsImludm9rZUZ1bmMiLCJ0aW1lIiwiYXJncyIsInRoaXNBcmciLCJ1bmRlZmluZWQiLCJhcHBseSIsImxlYWRpbmdFZGdlIiwic2V0VGltZW91dCIsInRpbWVyRXhwaXJlZCIsInJlbWFpbmluZ1dhaXQiLCJ0aW1lU2luY2VMYXN0Q2FsbCIsInRpbWVTaW5jZUxhc3RJbnZva2UiLCJzaG91bGRJbnZva2UiLCJ0cmFpbGluZ0VkZ2UiLCJjYW5jZWwiLCJmbHVzaCIsImRlYm91bmNlZCIsImlzSW52b2tpbmciLCJhcmd1bWVudHMiLCJ2YWx1ZSIsInR5cGUiLCJpc09iamVjdExpa2UiLCJpc1N5bWJvbCIsIm90aGVyIiwidmFsdWVPZiIsInJlcGxhY2UiLCJpc0JpbmFyeSIsInRlc3QiLCJjYXJvdXNlbHMiLCJzZWxlY3RvcklkIiwiY3VycmVudFNsaWRlIiwiY2Fyb3VzZWwiLCJzbGlkZXMiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsImdldExpc3RJdGVtV2lkdGgiLCJvZmZzZXRXaWR0aCIsImdvVG9TbGlkZSIsIm4iLCJyZW1vdmUiLCJhZGQiLCJzZXRPZmZzZXQiLCJpdGVtV2lkdGgiLCJ0ciIsInN0eWxlIiwiTW96VHJhbnNmb3JtIiwibXNUcmFuc2Zvcm0iLCJPVHJhbnNmb3JtIiwiV2Via2l0VHJhbnNmb3JtIiwidHJhbnNmb3JtIiwiYW5ub3VuY2VDdXJyZW50U2xpZGUiLCJ0ZXh0Q29udGVudCIsInNob3dJbWFnZUluZm9ybWF0aW9uIiwiaW5mb0FyZWFzIiwiYXJlYSIsImRpc3BsYXkiLCJwcmV2aW91c1NsaWRlIiwibmV4dFNsaWRlIiwiYWRkQ2Fyb3VzZWxDb250cm9scyIsIm5hdkNvbnRyb2xzIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwicmVtb3ZlQ2Fyb3VzZWxDb250cm9scyIsImNvbnRyb2xzIiwicmVtb3ZlQ2hpbGQiLCJhZGRMaXZlUmVnaW9uIiwibGl2ZVJlZ2lvbiIsInJlbW92ZUxpdmVSZWdpb24iLCJkZWJvdW5jZUNiIiwiZXhwYW5kQ29udGV4dHVhbE5hdiIsImNvbnRleHR1YWxOYXYiLCJidXR0b24iLCJjbGFzc1RvUmVtb3ZlIiwiaGlkZGVuRWxlbWVudHNTZWxlY3RvciIsImhpZGRlbkVsZW1lbnRzIiwiY29udGV4dHVhbE5hdnMiLCJidXR0b25TZWxlY3RvciIsIm5vZGVzQXJyYXkiLCJub2RlIiwiY29udGFpbnMiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImRyb3Bkb3duIiwiZHJvcGRvd25zQXJyYXkiLCJBcnJheSIsImlzSW5zaWRlIiwiZHJvcGRvd25TZWxlY3Rpb24iLCJldmVudCIsImRyb3Bkb3duQnV0dG9uIiwiZHJvcGRvd25Cb2R5IiwiZGlhbG9ncyIsInRyaWdnZXJFbGVtZW50c1NlbGVjdG9yIiwiZGlhbG9nV2luZG93SWQiLCJkaWFsb2dPdmVybGF5SWQiLCJ0cmlnZ2VyRWxlbWVudHMiLCJkaWFsb2dXaW5kb3ciLCJkaWFsb2dPdmVybGF5IiwiZWxlbWVudCIsImJvZHkiLCJmb2N1c2FibGVFbGVtZW50cyIsImZvY3VzZWRFbEJlZm9yZU9wZW4iLCJmaXJzdEZvY3VzYWJsZUVsZW1lbnQiLCJsYXN0Rm9jdXNhYmxlRWxlbWVudCIsImNsb3NlIiwiaGFuZGxlS2V5RG93biIsIktFWV9UQUIiLCJLRVlfRVNDIiwiaGFuZGxlQmFja3dhcmRUYWIiLCJhY3RpdmVFbGVtZW50IiwiaGFuZGxlRm9yd2FyZFRhYiIsInNoaWZ0S2V5Iiwib3BlbiIsImJpbmREaWFsb2dFdmVudHMiLCJlbGVtZW50cyIsInVuYmluZERpYWxvZ0V2ZW50cyIsInRvZ2dsZUV4cGFuZGFibGUiLCJ0b2dnbGVFbGVtZW50IiwiZm9yY2VDbG9zZSIsImNsb3NlU2libGluZ3MiLCJzaWJsaW5nc1NlbGVjdG9yIiwiaXNFeHBhbmRlZCIsImhhc0F0dHJpYnV0ZSIsInNpYmxpbmdzQXJyYXkiLCJmaWx0ZXIiLCJzaWJsaW5nIiwiaW5pdEV4cGFuZGFibGVzIiwiZmlsZVVwbG9hZHMiLCJpbnB1dFNlbGVjdG9yIiwidmFsdWVTZWxlY3RvciIsImJyb3dzZVNlbGVjdG9yIiwiZmlsZVVwbG9hZENvbnRhaW5lcnMiLCJ1cGRhdGVGaWxlTmFtZSIsImZpbGVzIiwiZmlsZW5hbWUiLCJmaWxlIiwibmFtZSIsIm1lc3NhZ2VFbGVtZW50IiwiZXZlbnRWYWx1ZUNoYW5nZSIsImZpbGVVcGxvYWRFbGVtZW50cyIsImZpbGVVcGxvYWRFbGVtZW50IiwiZXZlbnRCcm93c2VLZXlkb3duIiwiaW5wdXRFbGVtZW50cyIsImNsaWNrIiwiYmluZEZpbGVVcGxvYWRFdmVudHMiLCJmaWxlVXBsb2FkQ29udGFpbmVyIiwiZmlsZVVwbG9hZElucHV0cyIsImZpbGVVcGxvYWRCcm93c2VzIiwidW5iaW5kRmlsZVVwbG9hZEV2ZW50cyIsImVjbExhbmdTZWxlY3RQYWdlcyIsInRvZ2dsZUNsYXNzIiwibGlzdFNlbGVjdG9yIiwiZHJvcGRvd25TZWxlY3RvciIsImRyb3Bkb3duT25DaGFuZ2UiLCJsYW5nU2VsZWN0UGFnZXNDb250YWluZXJzIiwidG9nZ2xlIiwibHNwIiwib2Zmc2V0TGVmdCIsImRpc21pc3NNZXNzYWdlIiwibWVzc2FnZSIsImluaXRNZXNzYWdlcyIsInNlbGVjdG9yQ2xhc3MiLCJtZXNzYWdlcyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJwYXJlbnRFbGVtZW50IiwiU3RpY2t5Yml0cyIsIm9iaiIsIm8iLCJ2ZXJzaW9uIiwidXNlckFnZW50IiwibmF2aWdhdG9yIiwicHJvcHMiLCJub1N0eWxlcyIsInN0aWNreUJpdFN0aWNreU9mZnNldCIsInBhcmVudENsYXNzIiwic2Nyb2xsRWwiLCJzdGlja3lDbGFzcyIsInN0dWNrQ2xhc3MiLCJ1c2VTdGlja3lDbGFzc2VzIiwidmVydGljYWxQb3NpdGlvbiIsInAiLCJwb3NpdGlvblZhbCIsImRlZmluZVBvc2l0aW9uIiwidnAiLCJucyIsInB2IiwiZWxzIiwiaW5zdGFuY2VzIiwiZWwiLCJzdHlsZXMiLCJwb3NpdGlvbiIsImluc3RhbmNlIiwiYWRkSW5zdGFuY2UiLCJwdXNoIiwicHJlZml4IiwiaGVhZCIsInN0aWNreVByb3AiLCJfdGhpcyIsIml0ZW0iLCJpc1dpbiIsInNlIiwiZ2V0Q2xvc2VzdFBhcmVudCIsImNvbXB1dGVTY3JvbGxPZmZzZXRzIiwicGFyZW50Iiwic3RhdGUiLCJzdGF0ZUNvbnRhaW5lciIsIm1hbmFnZVN0YXRlIiwibWF0Y2giLCJpdCIsImlzQ3VzdG9tIiwiaXNCb3R0b20iLCJzY3JvbGxFbE9mZnNldCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInN0aWNreVN0YXJ0Iiwib2Zmc2V0Iiwic3RpY2t5U3RvcCIsIm9mZnNldEhlaWdodCIsInRvZ2dsZUNsYXNzZXMiLCJyIiwiYSIsImNBcnJheSIsInNwbGl0Iiwickl0ZW0iLCJzcGxpY2UiLCJqb2luIiwic3RhcnQiLCJzdG9wIiwic3RsIiwic3RpY2t5Iiwic3R1Y2siLCJyQUZTdHViIiwickFGRHVtbXkiLCJmIiwickFGIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ0QyIsInNjcm9sbCIsInNjcm9sbFkiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsIm5vdFN0aWNreSIsImlzU3RpY2t5IiwiaXNTdHVjayIsImJvdHRvbSIsInJlbW92ZUluc3RhbmNlIiwiY2xlYW51cCIsInN0aWNreWJpdHMiLCJ0IiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwidGhpcyIsImMiLCJsIiwicyIsInUiLCJzZWxlY3RvckhlYWRlciIsImNvbnRhaW5lciIsImFjdGl2ZUNsYXNzIiwic2Nyb2xsRGVsYXkiLCJjYWxsYmFjayIsImQiLCJoYXNPd25Qcm9wZXJ0eSIsInYiLCJtIiwic2Nyb2xsSGVpZ2h0IiwiY2xpZW50SGVpZ2h0IiwiZyIsImgiLCJvZmZzZXRQYXJlbnQiLCJvZmZzZXRUb3AiLCJsZWZ0IiwiaW5uZXJIZWlnaHQiLCJyaWdodCIsImlubmVyV2lkdGgiLCJjbGllbnRXaWR0aCIsInkiLCJzb3J0IiwiZGlzdGFuY2UiLCJzZXREaXN0YW5jZXMiLCJiIiwiaGFzaCIsIm5hdiIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIkgiLCJDIiwiZ2V0Q3VycmVudE5hdiIsIkwiLCJqIiwiRSIsImNsZWFyVGltZW91dCIsIm5hdmlnYXRpb25JbnBhZ2VzIiwic3RpY2t5U2VsZWN0b3IiLCJzcHlTZWxlY3RvciIsInNweUNsYXNzIiwic3B5VHJpZ2dlciIsInNweU9mZnNldCIsImluaXRTdGlja3kiLCJpbml0U2Nyb2xsU3B5IiwibmF2aWdhdGlvblRpdGxlIiwib25DbGljayIsIm1lbnUiLCJoYXNQb3B1cCIsIm9uS2V5ZG93biIsImN1cnJlbnRUYWIiLCJwcmV2aW91c1RhYkl0ZW0iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibGFzdEVsZW1lbnRDaGlsZCIsIm5leHRUYWJJdGVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJtZWdhbWVudSIsInRvZ2dsZVNlbGVjdG9yIiwibGlua1NlbGVjdG9yIiwibWVnYW1lbnVzQXJyYXkiLCJlY2xUYWJsZXMiLCJ0YWJsZXMiLCJoZWFkZXJUZXh0IiwidGV4dENvbHNwYW4iLCJjaSIsImNuIiwidGFibGVSb3dzIiwidGFibGUiLCJoZWFkZXJzIiwiaGVhZEZpcnN0IiwiY2VsbFBlclJvdyIsImNvbHNwYW5JbmRleCIsImNlbGwiLCJyb3ciLCJ0YWJzIiwidGFibGlzdFNlbGVjdG9yIiwidGFicGFuZWxTZWxlY3RvciIsInRhYmVsZW1lbnRzU2VsZWN0b3IiLCJ0YWJDb250YWluZXJzIiwic2hvd1RhYiIsImdpdmVGb2N1cyIsInNpYmxpbmdUYWJzIiwic2libGluZ1RhYnBhbmVscyIsInJlbW92ZUF0dHJpYnV0ZSIsImV2ZW50VGFiQ2xpY2siLCJldmVudFRhYktleWRvd24iLCJiaW5kVGFic0V2ZW50cyIsInRhYkNvbnRhaW5lciIsInRhYnNFbGVtZW50cyIsInVuYmluZFRhYnNFdmVudHMiLCJleHBhbmRUaW1lbGluZSIsInRpbWVsaW5lIiwidGltZWxpbmVzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBLEFBQU8sSUFBTUEsV0FBVyxTQUFYQSxRQUFXLENBQUNDLFFBQUQ7TUFBV0MsT0FBWCx1RUFBcUJDLFFBQXJCO1NBQ3RCLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSCxRQUFRSSxnQkFBUixDQUF5QkwsUUFBekIsQ0FBZCxDQURzQjtDQUFqQjs7QUNEUDs7Ozs7QUFPQSxJQUFhTSxhQUFhLFNBQWJBLFVBQWEsR0FHZjtpRkFBUCxFQUFPOzJCQUZUTixRQUVTO01BRkNBLFFBRUQsaUNBRlksZ0JBRVo7aUNBRFRPLGNBQ1M7TUFET0EsY0FDUCx1Q0FEd0Isd0JBQ3hCOzs7TUFHUCxFQUFFLG1CQUFtQkwsUUFBckIsS0FDQSxFQUFFLHNCQUFzQk0sTUFBeEIsQ0FEQSxJQUVBLENBQUNOLFNBQVNPLGVBQVQsQ0FBeUJDLFNBSDVCLEVBS0UsT0FBTyxJQUFQOzs7O01BSUlDLHNCQUFzQlosU0FBU0MsUUFBVCxDQUE1Qjs7O1dBR1NZLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCOztRQUVuQkMsY0FBY1osU0FBU2EsY0FBVCxDQUNsQkYsT0FBT0csWUFBUCxDQUFvQixlQUFwQixDQURrQixDQUFwQjs7V0FJT0MsWUFBUCxDQUFvQixlQUFwQixFQUFxQyxPQUFyQzs7O2dCQUdZQSxZQUFaLENBQXlCLGFBQXpCLEVBQXdDLE1BQXhDOzs7V0FHT0MsU0FBVCxDQUFtQkwsTUFBbkIsRUFBMkI7O1FBRW5CQyxjQUFjWixTQUFTYSxjQUFULENBQ2xCRixPQUFPRyxZQUFQLENBQW9CLGVBQXBCLENBRGtCLENBQXBCOzs7V0FLT0MsWUFBUCxDQUFvQixVQUFwQixFQUFnQyxDQUFoQztXQUNPQSxZQUFQLENBQW9CLGVBQXBCLEVBQXFDLE1BQXJDOzs7Z0JBR1lBLFlBQVosQ0FBeUIsYUFBekIsRUFBd0MsT0FBeEM7OztXQUdPRSxXQUFU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
