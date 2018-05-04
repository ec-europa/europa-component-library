var ECL = (function(exports, Stickyfill) {
  'use strict';

  Stickyfill =
    Stickyfill && Stickyfill.hasOwnProperty('default')
      ? Stickyfill['default']
      : Stickyfill;

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
  var initExpandables = function initExpandables(selector) {
    var context =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : document;

    // Exit if no selector was provided
    if (!selector) return;

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
      _ref$spyActiveContain = _ref.spyActiveContainer,
      spyActiveContainer =
        _ref$spyActiveContain === undefined
          ? 'ecl-inpage-navigation--visible'
          : _ref$spyActiveContain,
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
    function initSticky(element) {
      stickyInstance = new Stickyfill.Sticky(element);
    }

    function destroySticky() {
      if (stickyInstance) {
        stickyInstance.remove();
      }
    }

    function initScrollSpy(inpageNavElement) {
      gumshoe_min.init({
        selector: spySelector,
        activeClass: spyClass,
        offset: spyOffset,
        callback: function callback(nav) {
          var navigationTitle = document.querySelector(spyTrigger);

          if (!nav) {
            inpageNavElement.classList.remove(spyActiveContainer);
            navigationTitle.innerHTML = '';
          } else {
            inpageNavElement.classList.add(spyActiveContainer);
            navigationTitle.innerHTML = nav.nav.innerHTML;
          }
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
      var navLinks = queryAll(linksSelector, inpageNavElement);

      initSticky(inpageNavElement);
      initScrollSpy(inpageNavElement);

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
          : _ref$stickySelector,
      _ref$activeSelector = _ref.activeSelector,
      activeSelector =
        _ref$activeSelector === undefined
          ? '.ecl-side-navigation__link--active'
          : _ref$activeSelector;

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

    function unfoldToActive() {
      var active = document.getElementsByClassName(
        activeSelector.substring(1)
      )[0];

      // Browse parents
      if (active) {
        var node = active;
        while (node) {
          node = node.parentNode;

          // Check if parent is an expandable menu item
          if (node.matches('.ecl-side-navigation__group')) {
            var link = node.previousElementSibling;
            if (link.matches('.ecl-side-navigation__link')) {
              link.setAttribute('aria-expanded', 'true');
            }
          }

          // No need to check outside of menu
          if (node.matches('.ecl-side-navigation')) {
            break;
          }
        }
      }
    }

    // INIT
    function init() {
      initSticky();
      scrollToTop();
      unfoldToActive();
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
})({}, Stickyfill);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWNsLWVjLXByZXNldC13ZWJzaXRlLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtYmFzZS9oZWxwZXJzL2RvbS5qcyIsIi4uLy4uLy4uLy4uL2VjLWNvbXBvbmVudC9lYy1jb21wb25lbnQtYWNjb3JkaW9uL2VjLWNvbXBvbmVudC1hY2NvcmRpb24uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbG9kYXNoLmRlYm91bmNlL2luZGV4LmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9nZW5lcmljLWNvbXBvbmVudC1jYXJvdXNlbC9nZW5lcmljLWNvbXBvbmVudC1jYXJvdXNlbC5qcyIsIi4uLy4uLy4uLy4uL2VjLWNvbXBvbmVudC9lYy1jb21wb25lbnQtY29udGV4dC1uYXYvZWMtY29tcG9uZW50LWNvbnRleHQtbmF2LmpzIiwiLi4vLi4vLi4vLi4vZWMtY29tcG9uZW50L2VjLWNvbXBvbmVudC1kcm9wZG93bi9lYy1jb21wb25lbnQtZHJvcGRvd24uanMiLCIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtY29tcG9uZW50LWRpYWxvZy9nZW5lcmljLWNvbXBvbmVudC1kaWFsb2cuanMiLCIuLi8uLi8uLi8uLi9lYy1jb21wb25lbnQvZWMtY29tcG9uZW50LWV4cGFuZGFibGUvZWMtY29tcG9uZW50LWV4cGFuZGFibGUuanMiLCIuLi8uLi8uLi8uLi9lYy1jb21wb25lbnQvZWMtY29tcG9uZW50LWZvcm0vZWMtY29tcG9uZW50LWZvcm0tZmlsZS11cGxvYWQvZWMtY29tcG9uZW50LWZvcm0tZmlsZS11cGxvYWQuanMiLCIuLi8uLi8uLi8uLi9lYy1jb21wb25lbnQvZWMtY29tcG9uZW50LWxhbmctc2VsZWN0LXBhZ2UvZWMtY29tcG9uZW50LWxhbmctc2VsZWN0LXBhZ2UuanMiLCIuLi8uLi8uLi8uLi8uLi8uLi9nZW5lcmljL2dlbmVyaWMtY29tcG9uZW50LW1lc3NhZ2UvZ2VuZXJpYy1jb21wb25lbnQtbWVzc2FnZS5qcyIsIi4uLy4uLy4uLy4uL2VjLWNvbXBvbmVudC9lYy1jb21wb25lbnQtbWVzc2FnZS9lYy1jb21wb25lbnQtbWVzc2FnZS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9ndW1zaG9lanMvZGlzdC9qcy9ndW1zaG9lLm1pbi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtZXhwYW5kYWJsZS9nZW5lcmljLWNvbXBvbmVudC1leHBhbmRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vLi4vLi4vZ2VuZXJpYy9nZW5lcmljLWNvbXBvbmVudC1pbnBhZ2UtbmF2aWdhdGlvbi9nZW5lcmljLWNvbXBvbmVudC1pbnBhZ2UtbmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtbmF2aWdhdGlvbi1tZW51L2dlbmVyaWMtY29tcG9uZW50LW5hdmlnYXRpb24tbWVudS5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdGlja3liaXRzL2Rpc3Qvc3RpY2t5Yml0cy5lcy5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtc2lkZS1uYXZpZ2F0aW9uL2dlbmVyaWMtY29tcG9uZW50LXNpZGUtbmF2aWdhdGlvbi5qcyIsIi4uLy4uLy4uLy4uL2VjLWNvbXBvbmVudC9lYy1jb21wb25lbnQtdGFibGUvZWMtY29tcG9uZW50LXRhYmxlLmpzIiwiLi4vLi4vLi4vLi4vZWMtY29tcG9uZW50L2VjLWNvbXBvbmVudC10YWIvZWMtY29tcG9uZW50LXRhYi5qcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2dlbmVyaWMvZ2VuZXJpYy1jb21wb25lbnQtdGltZWxpbmUvZ2VuZXJpYy1jb21wb25lbnQtdGltZWxpbmUuanMiLCIuLi8uLi8uLi8uLi9lYy1jb21wb25lbnQvZWMtY29tcG9uZW50LXRpbWVsaW5lL2VjLWNvbXBvbmVudC10aW1lbGluZS5qcyIsIi4uLy4uLy4uL2VjLXByZXNldC1mdWxsL2VjLXByZXNldC1mdWxsLmpzIiwiLi4vLi4vZWMtcHJlc2V0LXdlYnNpdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gUXVlcnkgaGVscGVyXG5leHBvcnQgY29uc3QgcXVlcnlBbGwgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT5cbiAgW10uc2xpY2UuY2FsbChjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpKTtcblxuZXhwb3J0IGRlZmF1bHQgcXVlcnlBbGw7XG4iLCIvLyBIZWF2aWx5IGluc3BpcmVkIGJ5IHRoZSBhY2NvcmRpb24gY29tcG9uZW50IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZyZW5kL2ZyZW5kLmNvXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9lYy1iYXNlL2hlbHBlcnMvZG9tJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgYWNjb3JkaW9ucyA9ICh7XG4gIHNlbGVjdG9yOiBzZWxlY3RvciA9ICcuZWNsLWFjY29yZGlvbicsXG4gIGhlYWRlclNlbGVjdG9yOiBoZWFkZXJTZWxlY3RvciA9ICcuZWNsLWFjY29yZGlvbl9faGVhZGVyJyxcbn0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoXG4gICAgISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8XG4gICAgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0XG4gIClcbiAgICByZXR1cm4gbnVsbDtcblxuICAvLyBTRVRVUFxuICAvLyBzZXQgYWNjb3JkaW9uIGVsZW1lbnQgTm9kZUxpc3RzXG4gIGNvbnN0IGFjY29yZGlvbkNvbnRhaW5lcnMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiBoaWRlUGFuZWwodGFyZ2V0KSB7XG4gICAgLy8gZ2V0IHBhbmVsXG4gICAgY29uc3QgYWN0aXZlUGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIHRhcmdldC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICAgICk7XG5cbiAgICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyk7XG5cbiAgICAvLyB0b2dnbGUgYXJpYS1oaWRkZW5cbiAgICBhY3RpdmVQYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dQYW5lbCh0YXJnZXQpIHtcbiAgICAvLyBnZXQgcGFuZWxcbiAgICBjb25zdCBhY3RpdmVQYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgdGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1jb250cm9scycpXG4gICAgKTtcblxuICAgIC8vIHNldCBhdHRyaWJ1dGVzIG9uIGhlYWRlclxuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICd0cnVlJyk7XG5cbiAgICAvLyB0b2dnbGUgYXJpYS1oaWRkZW4gYW5kIHNldCBoZWlnaHQgb24gcGFuZWxcbiAgICBhY3RpdmVQYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ2ZhbHNlJyk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVQYW5lbCh0YXJnZXQpIHtcbiAgICAvLyBjbG9zZSB0YXJnZXQgcGFuZWwgaWYgYWxyZWFkeSBhY3RpdmVcbiAgICBpZiAodGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZScpIHtcbiAgICAgIGhpZGVQYW5lbCh0YXJnZXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNob3dQYW5lbCh0YXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ2l2ZUhlYWRlckZvY3VzKGhlYWRlclNldCwgaSkge1xuICAgIC8vIHNldCBhY3RpdmUgZm9jdXNcbiAgICBoZWFkZXJTZXRbaV0uZm9jdXMoKTtcbiAgfVxuXG4gIC8vIEVWRU5UU1xuICBmdW5jdGlvbiBldmVudEhlYWRlckNsaWNrKGUpIHtcbiAgICB0b2dnbGVQYW5lbChlLmN1cnJlbnRUYXJnZXQpO1xuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRIZWFkZXJLZXlkb3duKGUpIHtcbiAgICAvLyBjb2xsZWN0IGhlYWRlciB0YXJnZXRzLCBhbmQgdGhlaXIgcHJldi9uZXh0XG4gICAgY29uc3QgY3VycmVudEhlYWRlciA9IGUuY3VycmVudFRhcmdldDtcbiAgICBjb25zdCBpc01vZGlmaWVyS2V5ID0gZS5tZXRhS2V5IHx8IGUuYWx0S2V5O1xuICAgIC8vIGdldCBjb250ZXh0IG9mIGFjY29yZGlvbiBjb250YWluZXIgYW5kIGl0cyBjaGlsZHJlblxuICAgIGNvbnN0IHRoaXNDb250YWluZXIgPSBjdXJyZW50SGVhZGVyLnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0aGVzZUhlYWRlcnMgPSBxdWVyeUFsbChoZWFkZXJTZWxlY3RvciwgdGhpc0NvbnRhaW5lcik7XG4gICAgY29uc3QgY3VycmVudEhlYWRlckluZGV4ID0gW10uaW5kZXhPZi5jYWxsKHRoZXNlSGVhZGVycywgY3VycmVudEhlYWRlcik7XG5cbiAgICAvLyBkb24ndCBjYXRjaCBrZXkgZXZlbnRzIHdoZW4g4oyYIG9yIEFsdCBtb2RpZmllciBpcyBwcmVzZW50XG4gICAgaWYgKGlzTW9kaWZpZXJLZXkpIHJldHVybjtcblxuICAgIC8vIGNhdGNoIGVudGVyL3NwYWNlLCBsZWZ0L3JpZ2h0IGFuZCB1cC9kb3duIGFycm93IGtleSBldmVudHNcbiAgICAvLyBpZiBuZXcgcGFuZWwgc2hvdyBpdCwgaWYgbmV4dC9wcmV2IG1vdmUgZm9jdXNcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAxMzpcbiAgICAgIGNhc2UgMzI6XG4gICAgICAgIHRvZ2dsZVBhbmVsKGN1cnJlbnRIZWFkZXIpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzNzpcbiAgICAgIGNhc2UgMzg6IHtcbiAgICAgICAgY29uc3QgcHJldmlvdXNIZWFkZXJJbmRleCA9XG4gICAgICAgICAgY3VycmVudEhlYWRlckluZGV4ID09PSAwXG4gICAgICAgICAgICA/IHRoZXNlSGVhZGVycy5sZW5ndGggLSAxXG4gICAgICAgICAgICA6IGN1cnJlbnRIZWFkZXJJbmRleCAtIDE7XG4gICAgICAgIGdpdmVIZWFkZXJGb2N1cyh0aGVzZUhlYWRlcnMsIHByZXZpb3VzSGVhZGVySW5kZXgpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDA6IHtcbiAgICAgICAgY29uc3QgbmV4dEhlYWRlckluZGV4ID1cbiAgICAgICAgICBjdXJyZW50SGVhZGVySW5kZXggPCB0aGVzZUhlYWRlcnMubGVuZ3RoIC0gMVxuICAgICAgICAgICAgPyBjdXJyZW50SGVhZGVySW5kZXggKyAxXG4gICAgICAgICAgICA6IDA7XG4gICAgICAgIGdpdmVIZWFkZXJGb2N1cyh0aGVzZUhlYWRlcnMsIG5leHRIZWFkZXJJbmRleCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICAvLyBCSU5EIEVWRU5UU1xuICBmdW5jdGlvbiBiaW5kQWNjb3JkaW9uRXZlbnRzKGFjY29yZGlvbkNvbnRhaW5lcikge1xuICAgIGNvbnN0IGFjY29yZGlvbkhlYWRlcnMgPSBxdWVyeUFsbChoZWFkZXJTZWxlY3RvciwgYWNjb3JkaW9uQ29udGFpbmVyKTtcbiAgICAvLyBiaW5kIGFsbCBhY2NvcmRpb24gaGVhZGVyIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIGFjY29yZGlvbkhlYWRlcnMuZm9yRWFjaChhY2NvcmRpb25IZWFkZXIgPT4ge1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIZWFkZXJDbGljayk7XG4gICAgICBhY2NvcmRpb25IZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50SGVhZGVyS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZEFjY29yZGlvbkV2ZW50cyhhY2NvcmRpb25Db250YWluZXIpIHtcbiAgICBjb25zdCBhY2NvcmRpb25IZWFkZXJzID0gcXVlcnlBbGwoaGVhZGVyU2VsZWN0b3IsIGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgLy8gdW5iaW5kIGFsbCBhY2NvcmRpb24gaGVhZGVyIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIGFjY29yZGlvbkhlYWRlcnMuZm9yRWFjaChhY2NvcmRpb25IZWFkZXIgPT4ge1xuICAgICAgYWNjb3JkaW9uSGVhZGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnRIZWFkZXJDbGljayk7XG4gICAgICBhY2NvcmRpb25IZWFkZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGV2ZW50SGVhZGVyS2V5ZG93bik7XG4gICAgfSk7XG4gIH1cblxuICAvLyBERVNUUk9ZXG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgYWNjb3JkaW9uQ29udGFpbmVycy5mb3JFYWNoKGFjY29yZGlvbkNvbnRhaW5lciA9PiB7XG4gICAgICB1bmJpbmRBY2NvcmRpb25FdmVudHMoYWNjb3JkaW9uQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoYWNjb3JkaW9uQ29udGFpbmVycy5sZW5ndGgpIHtcbiAgICAgIGFjY29yZGlvbkNvbnRhaW5lcnMuZm9yRWFjaChhY2NvcmRpb25Db250YWluZXIgPT4ge1xuICAgICAgICBiaW5kQWNjb3JkaW9uRXZlbnRzKGFjY29yZGlvbkNvbnRhaW5lcik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBpbml0KCk7XG5cbiAgLy8gUkVWRUFMIEFQSVxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZGVzdHJveSxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCBhY2NvcmRpb25zO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiaW1wb3J0IHsgcXVlcnlBbGwgfSBmcm9tICdAZWNsL2dlbmVyaWMtYmFzZS9oZWxwZXJzL2RvbSc7XG5pbXBvcnQgZGVib3VuY2UgZnJvbSAnbG9kYXNoLmRlYm91bmNlJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgY2Fyb3VzZWxzID0gKHsgc2VsZWN0b3JJZDogc2VsZWN0b3JJZCA9ICdlY2wtY2Fyb3VzZWwnIH0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8ICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIFNFVFVQXG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHNlbGVjdG9ySWQpO1xuICBjb25zdCBzbGlkZXMgPSBxdWVyeUFsbCgnLmVjbC1jYXJvdXNlbF9faXRlbScsIGNhcm91c2VsKTtcbiAgY29uc3QgbGlzdCA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpc3QnKTtcblxuICBmdW5jdGlvbiBnZXRMaXN0SXRlbVdpZHRoKCkge1xuICAgIHJldHVybiBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19pdGVtJykub2Zmc2V0V2lkdGg7XG4gIH1cblxuICBmdW5jdGlvbiBnb1RvU2xpZGUobikge1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICAgIGN1cnJlbnRTbGlkZSA9IChuICsgc2xpZGVzLmxlbmd0aCkgJSBzbGlkZXMubGVuZ3RoO1xuICAgIHNsaWRlc1tjdXJyZW50U2xpZGVdLmNsYXNzTGlzdC5hZGQoJ2VjbC1jYXJvdXNlbF9faXRlbS0tc2hvd2luZycpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2V0T2Zmc2V0KCkge1xuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGdldExpc3RJdGVtV2lkdGgoKTtcbiAgICBjb25zdCB0ciA9IGB0cmFuc2xhdGUzZCgkey1jdXJyZW50U2xpZGUgKiBpdGVtV2lkdGh9cHgsIDAsIDApYDtcblxuICAgIGxpc3Quc3R5bGUuTW96VHJhbnNmb3JtID0gdHI7IC8qIEZGICovXG4gICAgbGlzdC5zdHlsZS5tc1RyYW5zZm9ybSA9IHRyOyAvKiBJRSAoOSspICovXG4gICAgbGlzdC5zdHlsZS5PVHJhbnNmb3JtID0gdHI7IC8qIE9wZXJhICovXG4gICAgbGlzdC5zdHlsZS5XZWJraXRUcmFuc2Zvcm0gPSB0cjsgLyogU2FmYXJpICsgQ2hyb21lICovXG4gICAgbGlzdC5zdHlsZS50cmFuc2Zvcm0gPSB0cjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFubm91bmNlQ3VycmVudFNsaWRlKCkge1xuICAgIGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnLmVjbC1jYXJvdXNlbF9fbWV0YS1zbGlkZSdcbiAgICApLnRleHRDb250ZW50ID0gYCR7Y3VycmVudFNsaWRlICsgMX0gLyAke3NsaWRlcy5sZW5ndGh9YDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dJbWFnZUluZm9ybWF0aW9uKCkge1xuICAgIC8vIFJlc2V0L0hpZGUgYWxsLlxuICAgIGNvbnN0IGluZm9BcmVhcyA9IHF1ZXJ5QWxsKCdbZGF0YS1pbWFnZV0nKTtcbiAgICAvLyBJZiBhbnl0aGluZyBpcyB2aXNpYmxlLlxuICAgIGlmIChpbmZvQXJlYXMpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgaW5mb0FyZWFzLmZvckVhY2goYXJlYSA9PiAoYXJlYS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnKSk7XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihgW2RhdGEtaW1hZ2U9XCIke2N1cnJlbnRTbGlkZX1cIl1gKS5zdHlsZS5kaXNwbGF5ID1cbiAgICAgICdibG9jayc7XG4gIH1cblxuICBmdW5jdGlvbiBwcmV2aW91c1NsaWRlKCkge1xuICAgIGdvVG9TbGlkZShjdXJyZW50U2xpZGUgLSAxKTtcbiAgICBzZXRPZmZzZXQoKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG4gIH1cblxuICBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XG4gICAgZ29Ub1NsaWRlKGN1cnJlbnRTbGlkZSArIDEpO1xuICAgIHNldE9mZnNldCgpO1xuICAgIGFubm91bmNlQ3VycmVudFNsaWRlKCk7XG4gICAgc2hvd0ltYWdlSW5mb3JtYXRpb24oKTtcbiAgfVxuXG4gIC8vIEF0dGFjaCBjb250cm9scyB0byBhIGNhcm91c2VsLlxuICBmdW5jdGlvbiBhZGRDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IG5hdkNvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIG5hdkNvbnRyb2xzLmNsYXNzTmFtZSA9ICdlY2wtY2Fyb3VzZWxfX2NvbnRyb2xzIGVjbC1saXN0LS11bnN0eWxlZCc7XG5cbiAgICBuYXZDb250cm9scy5pbm5lckhUTUwgPSBgXG4gICAgICA8bGk+XG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZWNsLWljb24gZWNsLWljb24tLWxlZnQgZWNsLWNhcm91c2VsX19idXR0b24gZWNsLWNhcm91c2VsX19idXR0b24tLXByZXZpb3VzXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJlY2wtdS1zci1vbmx5XCI+UHJldmlvdXM8L3NwYW4+PC9idXR0b24+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImVjbC1pY29uIGVjbC1pY29uLS1yaWdodCBlY2wtY2Fyb3VzZWxfX2J1dHRvbiBlY2wtY2Fyb3VzZWxfX2J1dHRvbi0tbmV4dFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZWNsLXUtc3Itb25seVwiPk5leHQ8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9saT5cbiAgICBgO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAnLmVjbC1jYXJvdXNlbF9fYnV0dG9uLS1wcmV2aW91cycsXG4gICAgICAgICcuZWNsLWNhcm91c2VsX19jb250cm9scydcbiAgICAgIClcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZpb3VzU2xpZGUpO1xuXG4gICAgbmF2Q29udHJvbHNcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19idXR0b24tLW5leHQnLCAnLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFNsaWRlKTtcblxuICAgIGNhcm91c2VsXG4gICAgICAucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fbGlzdC13cmFwcGVyJylcbiAgICAgIC5hcHBlbmRDaGlsZChuYXZDb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiByZW1vdmVDYXJvdXNlbENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGNvbnRyb2xzID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcignLmVjbC1jYXJvdXNlbF9fY29udHJvbHMnKTtcbiAgICBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKCcuZWNsLWNhcm91c2VsX19saXN0LXdyYXBwZXInKS5yZW1vdmVDaGlsZChjb250cm9scyk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGRMaXZlUmVnaW9uKCkge1xuICAgIGNvbnN0IGxpdmVSZWdpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsaXZlUmVnaW9uLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgJ3BvbGl0ZScpO1xuICAgIGxpdmVSZWdpb24uc2V0QXR0cmlidXRlKCdhcmlhLWF0b21pYycsICd0cnVlJyk7XG4gICAgbGl2ZVJlZ2lvbi5jbGFzc0xpc3QuYWRkKCdlY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5hcHBlbmRDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlbW92ZUxpdmVSZWdpb24oKSB7XG4gICAgY29uc3QgbGl2ZVJlZ2lvbiA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX21ldGEtc2xpZGUnKTtcbiAgICBjYXJvdXNlbFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lY2wtY2Fyb3VzZWxfX2xpdmUtcmVnaW9uJylcbiAgICAgIC5yZW1vdmVDaGlsZChsaXZlUmVnaW9uKTtcbiAgfVxuXG4gIGNvbnN0IGRlYm91bmNlQ2IgPSAoKSA9PlxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBzZXRPZmZzZXQoKTtcbiAgICAgIH0sXG4gICAgICAxMDAsXG4gICAgICB7IG1heFdhaXQ6IDMwMCB9XG4gICAgKSgpO1xuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBhZGRDYXJvdXNlbENvbnRyb2xzKCk7XG4gICAgYWRkTGl2ZVJlZ2lvbigpO1xuICAgIGdvVG9TbGlkZSgwKTtcbiAgICBhbm5vdW5jZUN1cnJlbnRTbGlkZSgpO1xuICAgIHNob3dJbWFnZUluZm9ybWF0aW9uKCk7XG5cbiAgICAvLyBSZS1hbGlnbiBvbiByZXNpemUuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgLy8gREVTVFJPWVxuICBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIHJlbW92ZUNhcm91c2VsQ29udHJvbHMoKTtcbiAgICByZW1vdmVMaXZlUmVnaW9uKCk7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGRlYm91bmNlQ2IpO1xuICB9XG5cbiAgaW5pdCgpO1xuXG4gIC8vIFJFVkVBTCBBUElcbiAgcmV0dXJuIHtcbiAgICBpbml0LFxuICAgIGRlc3Ryb3ksXG4gIH07XG59O1xuXG4vLyBtb2R1bGUgZXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY2Fyb3VzZWxzO1xuIiwiLyoqXG4gKiBDb250ZXh0dWFsIG5hdmlnYXRpb24gc2NyaXB0c1xuICovXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9lYy1iYXNlL2hlbHBlcnMvZG9tJztcblxuY29uc3QgZXhwYW5kQ29udGV4dHVhbE5hdiA9IChcbiAgY29udGV4dHVhbE5hdixcbiAgYnV0dG9uLFxuICB7XG4gICAgY2xhc3NUb1JlbW92ZSA9ICdlY2wtY29udGV4dC1uYXZfX2l0ZW0tLW92ZXItbGltaXQnLFxuICAgIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9faXRlbS0tb3Zlci1saW1pdCcsXG4gICAgY29udGV4dCA9IGRvY3VtZW50LFxuICB9ID0ge31cbikgPT4ge1xuICBpZiAoIWNvbnRleHR1YWxOYXYpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IHF1ZXJ5QWxsKGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IsIGNvbnRleHQpO1xuXG4gIC8vIFJlbW92ZSBleHRyYSBjbGFzc1xuICBoaWRkZW5FbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc1RvUmVtb3ZlKTtcbiAgfSk7XG5cbiAgLy8gUmVtb3ZlIGJ1dHR0b25cbiAgYnV0dG9uLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYnV0dG9uKTtcbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgY29udGV4dHVhbE5hdnMgPSAoe1xuICBzZWxlY3RvciA9ICcuZWNsLWNvbnRleHQtbmF2JyxcbiAgYnV0dG9uU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9fbW9yZScsXG4gIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC1jb250ZXh0LW5hdl9faXRlbS0tb3Zlci1saW1pdCcsXG4gIGNsYXNzVG9SZW1vdmUgPSAnZWNsLWNvbnRleHQtbmF2X19pdGVtLS1vdmVyLWxpbWl0JyxcbiAgY29udGV4dCA9IGRvY3VtZW50LFxufSA9IHt9KSA9PiB7XG4gIGNvbnN0IG5vZGVzQXJyYXkgPSBxdWVyeUFsbChzZWxlY3RvciwgY29udGV4dCk7XG5cbiAgbm9kZXNBcnJheS5mb3JFYWNoKG5vZGUgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGNvbnRleHQucXVlcnlTZWxlY3RvcihidXR0b25TZWxlY3Rvcik7XG5cbiAgICBpZiAoYnV0dG9uKSB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICBleHBhbmRDb250ZXh0dWFsTmF2KG5vZGUsIGJ1dHRvbiwge1xuICAgICAgICAgIGNsYXNzVG9SZW1vdmUsXG4gICAgICAgICAgaGlkZGVuRWxlbWVudHNTZWxlY3RvcixcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRleHR1YWxOYXZzO1xuIiwiLyoqXG4gKiBgTm9kZSNjb250YWlucygpYCBwb2x5ZmlsbC5cbiAqXG4gKiBTZWU6IGh0dHA6Ly9jb21wYXRpYmlsaXR5LnNod3Vwcy1jbXMuY2gvZW4vcG9seWZpbGxzLz8maWQ9MVxuICpcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZVxuICogQHBhcmFtIHtOb2RlfSBvdGhlclxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBjb250YWlucyhub2RlLCBvdGhlcikge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICByZXR1cm4gbm9kZSA9PT0gb3RoZXIgfHwgISEobm9kZS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihvdGhlcikgJiAxNik7XG59XG5cbmV4cG9ydCBjb25zdCBkcm9wZG93biA9IHNlbGVjdG9yID0+IHtcbiAgY29uc3QgZHJvcGRvd25zQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICApO1xuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgIGRyb3Bkb3duc0FycmF5LmZvckVhY2goZHJvcGRvd25TZWxlY3Rpb24gPT4ge1xuICAgICAgY29uc3QgaXNJbnNpZGUgPSBjb250YWlucyhkcm9wZG93blNlbGVjdGlvbiwgZXZlbnQudGFyZ2V0KTtcblxuICAgICAgaWYgKCFpc0luc2lkZSkge1xuICAgICAgICBjb25zdCBkcm9wZG93bkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7c2VsZWN0b3J9ID4gW2FyaWEtZXhwYW5kZWQ9dHJ1ZV1gXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgYCR7c2VsZWN0b3J9ID4gW2FyaWEtaGlkZGVuPWZhbHNlXWBcbiAgICAgICAgKTtcbiAgICAgICAgLy8gSWYgdGhlIGJvZHkgb2YgdGhlIGRyb3Bkb3duIGlzIHZpc2libGUsIHRoZW4gdG9nZ2xlLlxuICAgICAgICBpZiAoZHJvcGRvd25Cb2R5KSB7XG4gICAgICAgICAgZHJvcGRvd25CdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpO1xuICAgICAgICAgIGRyb3Bkb3duQm9keS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcm9wZG93bjtcbiIsImltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9nZW5lcmljLWJhc2UvaGVscGVycy9kb20nO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKlxuICogQXZhaWxhYmxlIG9wdGlvbnM6XG4gKiAtIG9wdGlvbnMudHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IgLSBhbnkgc2VsZWN0b3IgdG8gd2hpY2ggZXZlbnQgbGlzdGVuZXJzXG4gKiBhcmUgYXR0YWNoZWQuIFdoZW4gY2xpY2tlZCBvbiBhbnkgZWxlbWVudCB3aXRoIHN1Y2ggYSBzZWxlY3RvciwgYSBkaWFsb2cgb3BlbnMuXG4gKlxuICogLSBvcHRpb25zLmRpYWxvZ1dpbmRvd0lkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtZGlhbG9nYC5cbiAqXG4gKiAtIG9wdGlvbnMuZGlhbG9nT3ZlcmxheUlkIC0gaWQgb2YgdGFyZ2V0IGRpYWxvZyB3aW5kb3cuIERlZmF1bHRzIHRvIGBlY2wtb3ZlcmxheWAuXG4gKiBPdmVybGF5IGVsZW1lbnQgaXMgY3JlYXRlZCBpbiB0aGUgZG9jdW1lbnQgaWYgbm90IHByb3ZpZGVkIGJ5IHRoZSB1c2VyLlxuICovXG5leHBvcnQgY29uc3QgZGlhbG9ncyA9ICh7XG4gIHRyaWdnZXJFbGVtZW50c1NlbGVjdG9yOiB0cmlnZ2VyRWxlbWVudHNTZWxlY3RvciA9ICdbZGF0YS1lY2wtZGlhbG9nXScsXG4gIGRpYWxvZ1dpbmRvd0lkOiBkaWFsb2dXaW5kb3dJZCA9ICdlY2wtZGlhbG9nJyxcbiAgZGlhbG9nT3ZlcmxheUlkOiBkaWFsb2dPdmVybGF5SWQgPSAnZWNsLW92ZXJsYXknLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmICghKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHwgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gU0VUVVBcbiAgY29uc3QgdHJpZ2dlckVsZW1lbnRzID0gcXVlcnlBbGwodHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IpO1xuICBjb25zdCBkaWFsb2dXaW5kb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkaWFsb2dXaW5kb3dJZCk7XG4gIGxldCBkaWFsb2dPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGlhbG9nT3ZlcmxheUlkKTtcblxuICAvLyBDcmVhdGUgYW4gb3ZlcmxheSBlbGVtZW50IGlmIHRoZSB1c2VyIGRvZXMgbm90IHN1cHBseSBvbmUuXG4gIGlmICghZGlhbG9nT3ZlcmxheSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnZWNsLW92ZXJsYXknKTtcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWNsLWRpYWxvZ19fb3ZlcmxheScpO1xuICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICBkaWFsb2dPdmVybGF5ID0gZWxlbWVudDtcbiAgfVxuXG4gIC8vIFdoYXQgd2UgY2FuIGZvY3VzIG9uIGluIHRoZSBtb2RhbC5cbiAgY29uc3QgZm9jdXNhYmxlRWxlbWVudHMgPSBbXS5zbGljZS5jYWxsKFxuICAgIHF1ZXJ5QWxsKFxuICAgICAgYFxuICAgICAgICBhW2hyZWZdLFxuICAgICAgICBhcmVhW2hyZWZdLFxuICAgICAgICBpbnB1dDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksXG4gICAgICAgIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSxcbiAgICAgICAgW3RhYmluZGV4PVwiMFwiXVxuICAgICAgYCxcbiAgICAgIGRpYWxvZ1dpbmRvd1xuICAgIClcbiAgKTtcblxuICAvLyBVc2UgdGhpcyB2YXJpYWJsZSB0byByZXR1cm4gZm9jdXMgb24gZWxlbWVudCBhZnRlciBkaWFsb2cgYmVpbmcgY2xvc2VkLlxuICBsZXQgZm9jdXNlZEVsQmVmb3JlT3BlbiA9IG51bGw7XG5cbiAgLy8gU3BlY2lmaWMgZWxlbWVudHMgdG8gdGFrZSBjYXJlIHdoZW4gb3Blbm5pbmcgYW5kIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgY29uc3QgZmlyc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbMF07XG4gIGNvbnN0IGxhc3RGb2N1c2FibGVFbGVtZW50ID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgLy8gRVZFTlRTXG4gIC8vIEhpZGUgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBjbG9zZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlhbG9nV2luZG93LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCB0cnVlKTtcblxuICAgIGlmIChmb2N1c2VkRWxCZWZvcmVPcGVuKSB7XG4gICAgICBmb2N1c2VkRWxCZWZvcmVPcGVuLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEtleWJvYXJkIGJlaGF2aW9ycy5cbiAgZnVuY3Rpb24gaGFuZGxlS2V5RG93bihlKSB7XG4gICAgY29uc3QgS0VZX1RBQiA9IDk7XG4gICAgY29uc3QgS0VZX0VTQyA9IDI3O1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlQmFja3dhcmRUYWIoKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZmlyc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGFzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVGb3J3YXJkVGFiKCkge1xuICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGxhc3RGb2N1c2FibGVFbGVtZW50KSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmlyc3RGb2N1c2FibGVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgIC8vIEtlZXAgdGFiYmluZyBpbiB0aGUgc2NvcGUgb2YgdGhlIGRpYWxvZy5cbiAgICAgIGNhc2UgS0VZX1RBQjpcbiAgICAgICAgaWYgKGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgIGhhbmRsZUJhY2t3YXJkVGFiKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlRm9yd2FyZFRhYigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBLRVlfRVNDOlxuICAgICAgICBjbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgZGlhbG9nIGFuZCBvdmVybGF5IGVsZW1lbnRzLlxuICBmdW5jdGlvbiBvcGVuKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBkaWFsb2dXaW5kb3cuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGZhbHNlKTtcbiAgICBkaWFsb2dPdmVybGF5LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAvLyBUaGlzIGlzIHRoZSBlbGVtZW50IHRvIGhhdmUgdGhlIGZvY3VzIGFmdGVyIGNsb3NpbmcgdGhlIGRpYWxvZy5cbiAgICAvLyBVc3VhbGx5IHRoZSBlbGVtZW50IHdoaWNoIHRyaWdnZXJlZCB0aGUgZGlhbG9nLlxuICAgIGZvY3VzZWRFbEJlZm9yZU9wZW4gPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXG4gICAgLy8gRm9jdXMgb24gdGhlIGZpcnN0IGVsZW1lbnQgaW4gdGhlIGRpYWxvZy5cbiAgICBmaXJzdEZvY3VzYWJsZUVsZW1lbnQuZm9jdXMoKTtcblxuICAgIC8vIENsb3NlIGRpYWxvZyB3aGVuIGNsaWNrZWQgb3V0IG9mIHRoZSBkaWFsb2cgd2luZG93LlxuICAgIGRpYWxvZ092ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG5cbiAgICAvLyBIYW5kbGUgdGFiYmluZywgZXNjIGFuZCBrZXlib2FyZCBpbiB0aGUgZGlhbG9nIHdpbmRvdy5cbiAgICBkaWFsb2dXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGhhbmRsZUtleURvd24pO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2VjbC11LWRpc2FibGVzY3JvbGwnKTtcbiAgfVxuXG4gIC8vIEJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIGJpbmREaWFsb2dFdmVudHMoZWxlbWVudHMpIHtcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW4pKTtcblxuICAgIC8vIGNvbnN0IGNsb3NlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpO1xuICAgIHF1ZXJ5QWxsKCcuZWNsLW1lc3NhZ2VfX2Rpc21pc3MnKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBVTkJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIHVuYmluZERpYWxvZ0V2ZW50cyhlbGVtZW50cykge1xuICAgIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbikpO1xuXG4gICAgLy8gY29uc3QgY2xvc2VCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVjbC1tZXNzYWdlX19kaXNtaXNzJyk7XG4gICAgcXVlcnlBbGwoJy5lY2wtbWVzc2FnZV9fZGlzbWlzcycpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERFU1RST1lcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB1bmJpbmREaWFsb2dFdmVudHModHJpZ2dlckVsZW1lbnRzKTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAodHJpZ2dlckVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgYmluZERpYWxvZ0V2ZW50cyh0cmlnZ2VyRWxlbWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuLy8gbW9kdWxlIGV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGRpYWxvZ3M7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRXhwYW5kYWJsZSA9IChcbiAgdG9nZ2xlRWxlbWVudCxcbiAge1xuICAgIGNvbnRleHQgPSBkb2N1bWVudCxcbiAgICBmb3JjZUNsb3NlID0gZmFsc2UsXG4gICAgY2xvc2VTaWJsaW5ncyA9IGZhbHNlLFxuICAgIHNpYmxpbmdzU2VsZWN0b3IgPSAnW2FyaWEtY29udHJvbHNdW2FyaWEtZXhwYW5kZWRdJyxcbiAgfSA9IHt9XG4pID0+IHtcbiAgaWYgKCF0b2dnbGVFbGVtZW50KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IHRhcmdldCBlbGVtZW50XG4gIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgIHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJylcbiAgKTtcblxuICAvLyBFeGl0IGlmIG5vIHRhcmdldCBmb3VuZFxuICBpZiAoIXRhcmdldCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIEdldCBjdXJyZW50IHN0YXR1c1xuICBjb25zdCBpc0V4cGFuZGVkID1cbiAgICBmb3JjZUNsb3NlID09PSB0cnVlIHx8XG4gICAgdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnKSA9PT0gJ3RydWUnO1xuXG4gIC8vIFRvZ2dsZSB0aGUgZXhwYW5kYWJsZS9jb2xsYXBzaWJsZVxuICB0b2dnbGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcsICFpc0V4cGFuZGVkKTtcbiAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBpc0V4cGFuZGVkKTtcblxuICAvLyBUb2dnbGUgbGFiZWwgaWYgcG9zc2libGVcbiAgaWYgKCFpc0V4cGFuZGVkICYmIHRvZ2dsZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJykpIHtcbiAgICB0b2dnbGVFbGVtZW50LmlubmVySFRNTCA9IHRvZ2dsZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWxhYmVsLWV4cGFuZGVkJyk7XG4gIH0gZWxzZSBpZiAoaXNFeHBhbmRlZCAmJiB0b2dnbGVFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnZGF0YS1sYWJlbC1jb2xsYXBzZWQnKSkge1xuICAgIHRvZ2dsZUVsZW1lbnQuaW5uZXJIVE1MID0gdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoXG4gICAgICAnZGF0YS1sYWJlbC1jb2xsYXBzZWQnXG4gICAgKTtcbiAgfVxuXG4gIC8vIENsb3NlIHNpYmxpbmdzIGlmIHJlcXVlc3RlZFxuICBpZiAoY2xvc2VTaWJsaW5ncyA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNpYmxpbmdzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAgIC5jYWxsKGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzaWJsaW5nc1NlbGVjdG9yKSlcbiAgICAgIC5maWx0ZXIoc2libGluZyA9PiBzaWJsaW5nICE9PSB0b2dnbGVFbGVtZW50KTtcblxuICAgIHNpYmxpbmdzQXJyYXkuZm9yRWFjaChzaWJsaW5nID0+IHtcbiAgICAgIHRvZ2dsZUV4cGFuZGFibGUoc2libGluZywge1xuICAgICAgICBjb250ZXh0LFxuICAgICAgICBmb3JjZUNsb3NlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgZXhwYW5kYWJsZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgY29uc3QgaW5pdEV4cGFuZGFibGVzID0gKHNlbGVjdG9yLCBjb250ZXh0ID0gZG9jdW1lbnQpID0+IHtcbiAgLy8gRXhpdCBpZiBubyBzZWxlY3RvciB3YXMgcHJvdmlkZWRcbiAgaWYgKCFzZWxlY3RvcikgcmV0dXJuO1xuXG4gIGNvbnN0IG5vZGVzQXJyYXkgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChcbiAgICBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpXG4gICk7XG5cbiAgbm9kZXNBcnJheS5mb3JFYWNoKG5vZGUgPT5cbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKG5vZGUsIHsgY29udGV4dCB9KTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9KVxuICApO1xufTtcbiIsIi8qKlxuICogRmlsZSB1cGxvYWRzIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9lYy1iYXNlL2hlbHBlcnMvZG9tJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgZmlsZVVwbG9hZHMgPSAoe1xuICBzZWxlY3Rvcjogc2VsZWN0b3IgPSAnLmVjbC1maWxlLXVwbG9hZCcsXG4gIGlucHV0U2VsZWN0b3I6IGlucHV0U2VsZWN0b3IgPSAnLmVjbC1maWxlLXVwbG9hZF9faW5wdXQnLFxuICB2YWx1ZVNlbGVjdG9yOiB2YWx1ZVNlbGVjdG9yID0gJy5lY2wtZmlsZS11cGxvYWRfX3ZhbHVlJyxcbiAgYnJvd3NlU2VsZWN0b3I6IGJyb3dzZVNlbGVjdG9yID0gJy5lY2wtZmlsZS11cGxvYWRfX2Jyb3dzZScsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgLy8gU0VUVVBcbiAgLy8gc2V0IGZpbGUgdXBsb2FkIGVsZW1lbnQgTm9kZUxpc3RzXG4gIGNvbnN0IGZpbGVVcGxvYWRDb250YWluZXJzID0gcXVlcnlBbGwoc2VsZWN0b3IpO1xuXG4gIC8vIEFDVElPTlNcbiAgZnVuY3Rpb24gdXBkYXRlRmlsZU5hbWUoZWxlbWVudCwgZmlsZXMpIHtcbiAgICBpZiAoZmlsZXMubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBsZXQgZmlsZW5hbWUgPSAnJztcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIGlmICgnbmFtZScgaW4gZmlsZSkge1xuICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICBmaWxlbmFtZSArPSAnLCAnO1xuICAgICAgICB9XG4gICAgICAgIGZpbGVuYW1lICs9IGZpbGUubmFtZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTaG93IHRoZSBzZWxlY3RlZCBmaWxlbmFtZSBpbiB0aGUgZmllbGQuXG4gICAgY29uc3QgbWVzc2FnZUVsZW1lbnQgPSBlbGVtZW50O1xuICAgIG1lc3NhZ2VFbGVtZW50LmlubmVySFRNTCA9IGZpbGVuYW1lO1xuICB9XG5cbiAgLy8gRVZFTlRTXG4gIGZ1bmN0aW9uIGV2ZW50VmFsdWVDaGFuZ2UoZSkge1xuICAgIGlmICgnZmlsZXMnIGluIGUudGFyZ2V0KSB7XG4gICAgICBjb25zdCBmaWxlVXBsb2FkRWxlbWVudHMgPSBxdWVyeUFsbCh2YWx1ZVNlbGVjdG9yLCBlLnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgICAgZmlsZVVwbG9hZEVsZW1lbnRzLmZvckVhY2goZmlsZVVwbG9hZEVsZW1lbnQgPT4ge1xuICAgICAgICB1cGRhdGVGaWxlTmFtZShmaWxlVXBsb2FkRWxlbWVudCwgZS50YXJnZXQuZmlsZXMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZXZlbnRCcm93c2VLZXlkb3duKGUpIHtcbiAgICAvLyBjb2xsZWN0IGhlYWRlciB0YXJnZXRzLCBhbmQgdGhlaXIgcHJldi9uZXh0XG4gICAgY29uc3QgaXNNb2RpZmllcktleSA9IGUubWV0YUtleSB8fCBlLmFsdEtleTtcblxuICAgIGNvbnN0IGlucHV0RWxlbWVudHMgPSBxdWVyeUFsbChpbnB1dFNlbGVjdG9yLCBlLnRhcmdldC5wYXJlbnROb2RlKTtcblxuICAgIGlucHV0RWxlbWVudHMuZm9yRWFjaChpbnB1dEVsZW1lbnQgPT4ge1xuICAgICAgLy8gZG9uJ3QgY2F0Y2gga2V5IGV2ZW50cyB3aGVuIOKMmCBvciBBbHQgbW9kaWZpZXIgaXMgcHJlc2VudFxuICAgICAgaWYgKGlzTW9kaWZpZXJLZXkpIHJldHVybjtcblxuICAgICAgLy8gY2F0Y2ggZW50ZXIvc3BhY2UsIGxlZnQvcmlnaHQgYW5kIHVwL2Rvd24gYXJyb3cga2V5IGV2ZW50c1xuICAgICAgLy8gaWYgbmV3IHBhbmVsIHNob3cgaXQsIGlmIG5leHQvcHJldiBtb3ZlIGZvY3VzXG4gICAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDEzOlxuICAgICAgICBjYXNlIDMyOlxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpbnB1dEVsZW1lbnQuY2xpY2soKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8vIEJJTkQgRVZFTlRTXG4gIGZ1bmN0aW9uIGJpbmRGaWxlVXBsb2FkRXZlbnRzKGZpbGVVcGxvYWRDb250YWluZXIpIHtcbiAgICAvLyBiaW5kIGFsbCBmaWxlIHVwbG9hZCBjaGFuZ2UgZXZlbnRzXG4gICAgY29uc3QgZmlsZVVwbG9hZElucHV0cyA9IHF1ZXJ5QWxsKGlucHV0U2VsZWN0b3IsIGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgIGZpbGVVcGxvYWRJbnB1dHMuZm9yRWFjaChmaWxlVXBsb2FkSW5wdXQgPT4ge1xuICAgICAgZmlsZVVwbG9hZElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50VmFsdWVDaGFuZ2UpO1xuICAgIH0pO1xuXG4gICAgLy8gYmluZCBhbGwgZmlsZSB1cGxvYWQga2V5ZG93biBldmVudHNcbiAgICBjb25zdCBmaWxlVXBsb2FkQnJvd3NlcyA9IHF1ZXJ5QWxsKGJyb3dzZVNlbGVjdG9yLCBmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICBmaWxlVXBsb2FkQnJvd3Nlcy5mb3JFYWNoKGZpbGVVcGxvYWRCcm93c2UgPT4ge1xuICAgICAgZmlsZVVwbG9hZEJyb3dzZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnRCcm93c2VLZXlkb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFVOQklORCBFVkVOVFNcbiAgZnVuY3Rpb24gdW5iaW5kRmlsZVVwbG9hZEV2ZW50cyhmaWxlVXBsb2FkQ29udGFpbmVyKSB7XG4gICAgY29uc3QgZmlsZVVwbG9hZElucHV0cyA9IHF1ZXJ5QWxsKGlucHV0U2VsZWN0b3IsIGZpbGVVcGxvYWRDb250YWluZXIpO1xuICAgIC8vIHVuYmluZCBhbGwgZmlsZSB1cGxvYWQgY2hhbmdlIGV2ZW50c1xuICAgIGZpbGVVcGxvYWRJbnB1dHMuZm9yRWFjaChmaWxlVXBsb2FkSW5wdXQgPT4ge1xuICAgICAgZmlsZVVwbG9hZElucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50VmFsdWVDaGFuZ2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZmlsZVVwbG9hZEJyb3dzZXMgPSBxdWVyeUFsbChicm93c2VTZWxlY3RvciwgZmlsZVVwbG9hZENvbnRhaW5lcik7XG4gICAgLy8gYmluZCBhbGwgZmlsZSB1cGxvYWQga2V5ZG93biBldmVudHNcbiAgICBmaWxlVXBsb2FkQnJvd3Nlcy5mb3JFYWNoKGZpbGVVcGxvYWRCcm93c2UgPT4ge1xuICAgICAgZmlsZVVwbG9hZEJyb3dzZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnRCcm93c2VLZXlkb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERFU1RST1lcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICBmaWxlVXBsb2FkQ29udGFpbmVycy5mb3JFYWNoKGZpbGVVcGxvYWRDb250YWluZXIgPT4ge1xuICAgICAgdW5iaW5kRmlsZVVwbG9hZEV2ZW50cyhmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIElOSVRcbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBpZiAoZmlsZVVwbG9hZENvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICBmaWxlVXBsb2FkQ29udGFpbmVycy5mb3JFYWNoKGZpbGVVcGxvYWRDb250YWluZXIgPT4ge1xuICAgICAgICBiaW5kRmlsZVVwbG9hZEV2ZW50cyhmaWxlVXBsb2FkQ29udGFpbmVyKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuLy8gbW9kdWxlIGV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGZpbGVVcGxvYWRzO1xuIiwiaW1wb3J0IGRlYm91bmNlIGZyb20gJ2xvZGFzaC5kZWJvdW5jZSc7XG5pbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlY2wvZWMtYmFzZS9oZWxwZXJzL2RvbSc7XG5cbmV4cG9ydCBjb25zdCBlY2xMYW5nU2VsZWN0UGFnZXMgPSAoe1xuICBzZWxlY3Rvcjogc2VsZWN0b3IgPSAnLmVjbC1sYW5nLXNlbGVjdC1wYWdlJyxcbiAgdG9nZ2xlQ2xhc3M6IHRvZ2dsZUNsYXNzID0gJ2VjbC1sYW5nLXNlbGVjdC1wYWdlLS1kcm9wZG93bicsXG4gIGxpc3RTZWxlY3RvcjogbGlzdFNlbGVjdG9yID0gJy5lY2wtbGFuZy1zZWxlY3QtcGFnZV9fbGlzdCcsXG4gIGRyb3Bkb3duU2VsZWN0b3I6IGRyb3Bkb3duU2VsZWN0b3IgPSAnLmVjbC1sYW5nLXNlbGVjdC1wYWdlX19kcm9wZG93bicsXG4gIGRyb3Bkb3duT25DaGFuZ2U6IGRyb3Bkb3duT25DaGFuZ2UgPSB1bmRlZmluZWQsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgbGFuZ1NlbGVjdFBhZ2VzQ29udGFpbmVycyA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICBmdW5jdGlvbiB0b2dnbGUobHNwKSB7XG4gICAgaWYgKCFsc3ApIHJldHVybiBudWxsO1xuXG4gICAgY29uc3QgbGlzdCA9IHF1ZXJ5QWxsKGxpc3RTZWxlY3RvciwgbHNwKVswXTtcblxuICAgIGlmICghbHNwLmNsYXNzTGlzdC5jb250YWlucyh0b2dnbGVDbGFzcykpIHtcbiAgICAgIGlmIChsaXN0ICYmIGxpc3Qub2Zmc2V0TGVmdCArIGxpc3Qub2Zmc2V0V2lkdGggPiBsc3Aub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgbHNwLmNsYXNzTGlzdC5hZGQodG9nZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkcm9wZG93biA9IHF1ZXJ5QWxsKGRyb3Bkb3duU2VsZWN0b3IsIGxzcClbMF07XG4gICAgICBpZiAoZHJvcGRvd24ub2Zmc2V0TGVmdCArIGxpc3Qub2Zmc2V0V2lkdGggPCBsc3Aub2Zmc2V0V2lkdGgpIHtcbiAgICAgICAgbHNwLmNsYXNzTGlzdC5yZW1vdmUodG9nZ2xlQ2xhc3MpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAvLyBPbiBsb2FkXG4gICAgbGFuZ1NlbGVjdFBhZ2VzQ29udGFpbmVycy5mb3JFYWNoKGxzcCA9PiB7XG4gICAgICB0b2dnbGUobHNwKTtcblxuICAgICAgaWYgKGRyb3Bkb3duT25DaGFuZ2UpIHtcbiAgICAgICAgY29uc3QgZHJvcGRvd24gPSBxdWVyeUFsbChkcm9wZG93blNlbGVjdG9yLCBsc3ApWzBdO1xuXG4gICAgICAgIGlmIChkcm9wZG93bikge1xuICAgICAgICAgIGRyb3Bkb3duLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGRyb3Bkb3duT25DaGFuZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICdyZXNpemUnLFxuICAgICAgZGVib3VuY2UoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICBsYW5nU2VsZWN0UGFnZXNDb250YWluZXJzLmZvckVhY2godG9nZ2xlKTtcbiAgICAgICAgfSxcbiAgICAgICAgMTAwLFxuICAgICAgICB7IG1heFdhaXQ6IDMwMCB9XG4gICAgICApXG4gICAgKTtcbiAgfVxuXG4gIHJldHVybiBpbml0KCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBlY2xMYW5nU2VsZWN0UGFnZXM7XG4iLCIvKlxuICogTWVzc2FnZXMgYmVoYXZpb3JcbiAqL1xuXG4vLyBEaXNtaXNzIGEgc2VsZWN0ZWQgbWVzc2FnZS5cbmZ1bmN0aW9uIGRpc21pc3NNZXNzYWdlKG1lc3NhZ2UpIHtcbiAgaWYgKG1lc3NhZ2UgJiYgbWVzc2FnZS5wYXJlbnROb2RlICE9PSBudWxsKSB7XG4gICAgbWVzc2FnZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG1lc3NhZ2UpO1xuICB9XG59XG5cbi8vIEhlbHBlciBtZXRob2QgdG8gYXV0b21hdGljYWxseSBhdHRhY2ggdGhlIGV2ZW50IGxpc3RlbmVyIHRvIGFsbCB0aGUgbWVzc2FnZXMgb24gcGFnZSBsb2FkXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1lc3NhZ2VzKCkge1xuICBjb25zdCBzZWxlY3RvckNsYXNzID0gJ2VjbC1tZXNzYWdlX19kaXNtaXNzJztcblxuICBjb25zdCBtZXNzYWdlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoc2VsZWN0b3JDbGFzcylcbiAgKTtcblxuICBtZXNzYWdlcy5mb3JFYWNoKG1lc3NhZ2UgPT5cbiAgICBtZXNzYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIGRpc21pc3NNZXNzYWdlKG1lc3NhZ2UucGFyZW50RWxlbWVudClcbiAgICApXG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRNZXNzYWdlcztcbiIsIi8qXG4gKiBNZXNzYWdlcyBiZWhhdmlvclxuICovXG5cbmV4cG9ydCAqIGZyb20gJ0BlY2wvZ2VuZXJpYy1jb21wb25lbnQtbWVzc2FnZSc7XG4iLCIvKiEgZ3Vtc2hvZWpzIHYzLjUuMCB8IChjKSAyMDE3IENocmlzIEZlcmRpbmFuZGkgfCBNSVQgTGljZW5zZSB8IGh0dHA6Ly9naXRodWIuY29tL2NmZXJkaW5hbmRpL2d1bXNob2UgKi9cbiEoZnVuY3Rpb24oZSx0KXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQoZSkpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP21vZHVsZS5leHBvcnRzPXQoZSk6ZS5ndW1zaG9lPXQoZSl9KShcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDp0aGlzLndpbmRvd3x8dGhpcy5nbG9iYWwsKGZ1bmN0aW9uKGUpe1widXNlIHN0cmljdFwiO3ZhciB0LG4sbyxyLGEsYyxpLGw9e30scz1cInF1ZXJ5U2VsZWN0b3JcImluIGRvY3VtZW50JiZcImFkZEV2ZW50TGlzdGVuZXJcImluIGUmJlwiY2xhc3NMaXN0XCJpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiX1wiKSx1PVtdLGY9e3NlbGVjdG9yOlwiW2RhdGEtZ3Vtc2hvZV0gYVwiLHNlbGVjdG9ySGVhZGVyOlwiW2RhdGEtZ3Vtc2hvZS1oZWFkZXJdXCIsY29udGFpbmVyOmUsb2Zmc2V0OjAsYWN0aXZlQ2xhc3M6XCJhY3RpdmVcIixzY3JvbGxEZWxheTohMSxjYWxsYmFjazpmdW5jdGlvbigpe319LGQ9ZnVuY3Rpb24oZSx0LG4pe2lmKFwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkpZm9yKHZhciBvIGluIGUpT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsbykmJnQuY2FsbChuLGVbb10sbyxlKTtlbHNlIGZvcih2YXIgcj0wLGE9ZS5sZW5ndGg7cjxhO3IrKyl0LmNhbGwobixlW3JdLHIsZSl9LHY9ZnVuY3Rpb24oKXt2YXIgZT17fSx0PSExLG49MCxvPWFyZ3VtZW50cy5sZW5ndGg7XCJbb2JqZWN0IEJvb2xlYW5dXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzWzBdKSYmKHQ9YXJndW1lbnRzWzBdLG4rKyk7Zm9yKDtuPG87bisrKXt2YXIgcj1hcmd1bWVudHNbbl07IShmdW5jdGlvbihuKXtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHQmJlwiW29iamVjdCBPYmplY3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobltvXSk/ZVtvXT12KCEwLGVbb10sbltvXSk6ZVtvXT1uW29dKX0pKHIpfXJldHVybiBlfSxtPWZ1bmN0aW9uKGUpe3JldHVybiBNYXRoLm1heChlLnNjcm9sbEhlaWdodCxlLm9mZnNldEhlaWdodCxlLmNsaWVudEhlaWdodCl9LGc9ZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5tYXgoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0LGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpfSxoPWZ1bmN0aW9uKGUpe3ZhciBuPTA7aWYoZS5vZmZzZXRQYXJlbnQpZG97bis9ZS5vZmZzZXRUb3AsZT1lLm9mZnNldFBhcmVudH13aGlsZShlKTtlbHNlIG49ZS5vZmZzZXRUb3A7cmV0dXJuIG49bi1hLXQub2Zmc2V0LG4+PTA/bjowfSxwPWZ1bmN0aW9uKHQpe3ZhciBuPXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7cmV0dXJuIG4udG9wPj0wJiZuLmxlZnQ+PTAmJm4uYm90dG9tPD0oZS5pbm5lckhlaWdodHx8ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkmJm4ucmlnaHQ8PShlLmlubmVyV2lkdGh8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCl9LHk9ZnVuY3Rpb24oKXt1LnNvcnQoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuZGlzdGFuY2U+dC5kaXN0YW5jZT8tMTplLmRpc3RhbmNlPHQuZGlzdGFuY2U/MTowfSkpfTtsLnNldERpc3RhbmNlcz1mdW5jdGlvbigpe289ZygpLGE9cj9tKHIpK2gocik6MCxkKHUsKGZ1bmN0aW9uKGUpe2UuZGlzdGFuY2U9aChlLnRhcmdldCl9KSkseSgpfTt2YXIgYj1mdW5jdGlvbigpe3ZhciBlPWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodC5zZWxlY3Rvcik7ZChlLChmdW5jdGlvbihlKXtpZihlLmhhc2gpe3ZhciB0PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoZS5oYXNoKTt0JiZ1LnB1c2goe25hdjplLHRhcmdldDp0LHBhcmVudDpcImxpXCI9PT1lLnBhcmVudE5vZGUudGFnTmFtZS50b0xvd2VyQ2FzZSgpP2UucGFyZW50Tm9kZTpudWxsLGRpc3RhbmNlOjB9KX19KSl9LEg9ZnVuY3Rpb24oKXtjJiYoYy5uYXYuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSxjLnBhcmVudCYmYy5wYXJlbnQuY2xhc3NMaXN0LnJlbW92ZSh0LmFjdGl2ZUNsYXNzKSl9LEM9ZnVuY3Rpb24oZSl7SCgpLGUubmF2LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksZS5wYXJlbnQmJmUucGFyZW50LmNsYXNzTGlzdC5hZGQodC5hY3RpdmVDbGFzcyksdC5jYWxsYmFjayhlKSxjPXtuYXY6ZS5uYXYscGFyZW50OmUucGFyZW50fX07bC5nZXRDdXJyZW50TmF2PWZ1bmN0aW9uKCl7dmFyIG49ZS5wYWdlWU9mZnNldDtpZihlLmlubmVySGVpZ2h0K24+PW8mJnAodVswXS50YXJnZXQpKXJldHVybiBDKHVbMF0pLHVbMF07Zm9yKHZhciByPTAsYT11Lmxlbmd0aDtyPGE7cisrKXt2YXIgYz11W3JdO2lmKGMuZGlzdGFuY2U8PW4pcmV0dXJuIEMoYyksY31IKCksdC5jYWxsYmFjaygpfTt2YXIgTD1mdW5jdGlvbigpe2QodSwoZnVuY3Rpb24oZSl7ZS5uYXYuY2xhc3NMaXN0LmNvbnRhaW5zKHQuYWN0aXZlQ2xhc3MpJiYoYz17bmF2OmUubmF2LHBhcmVudDplLnBhcmVudH0pfSkpfTtsLmRlc3Ryb3k9ZnVuY3Rpb24oKXt0JiYodC5jb250YWluZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuY29udGFpbmVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSx1PVtdLHQ9bnVsbCxuPW51bGwsbz1udWxsLHI9bnVsbCxhPW51bGwsYz1udWxsLGk9bnVsbCl9O3ZhciBFPWZ1bmN0aW9uKGUpe3dpbmRvdy5jbGVhclRpbWVvdXQobiksbj1zZXRUaW1lb3V0KChmdW5jdGlvbigpe2wuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCl9KSw2Nil9LGo9ZnVuY3Rpb24oZSl7bnx8KG49c2V0VGltZW91dCgoZnVuY3Rpb24oKXtuPW51bGwsXCJzY3JvbGxcIj09PWUudHlwZSYmbC5nZXRDdXJyZW50TmF2KCksXCJyZXNpemVcIj09PWUudHlwZSYmKGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCkpfSksNjYpKX07cmV0dXJuIGwuaW5pdD1mdW5jdGlvbihlKXtzJiYobC5kZXN0cm95KCksdD12KGYsZXx8e30pLHI9ZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0LnNlbGVjdG9ySGVhZGVyKSxiKCksMCE9PXUubGVuZ3RoJiYoTCgpLGwuc2V0RGlzdGFuY2VzKCksbC5nZXRDdXJyZW50TmF2KCksdC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLGosITEpLHQuc2Nyb2xsRGVsYXk/dC5jb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLEUsITEpOnQuY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIixqLCExKSkpfSxsfSkpOyIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXBhcmFtLXJlYXNzaWduICovXG5cbmV4cG9ydCBjb25zdCB0b2dnbGVFeHBhbmRhYmxlID0gKFxuICB0b2dnbGVFbGVtZW50LFxuICB7XG4gICAgY29udGV4dCA9IGRvY3VtZW50LFxuICAgIGZvcmNlQ2xvc2UgPSBmYWxzZSxcbiAgICBjbG9zZVNpYmxpbmdzID0gZmFsc2UsXG4gICAgc2libGluZ3NTZWxlY3RvciA9ICdbYXJpYS1jb250cm9sc11bYXJpYS1leHBhbmRlZF0nLFxuICB9ID0ge31cbikgPT4ge1xuICBpZiAoIXRvZ2dsZUVsZW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBHZXQgdGFyZ2V0IGVsZW1lbnRcbiAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtY29udHJvbHMnKVxuICApO1xuXG4gIC8vIEV4aXQgaWYgbm8gdGFyZ2V0IGZvdW5kXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gR2V0IGN1cnJlbnQgc3RhdHVzXG4gIGNvbnN0IGlzRXhwYW5kZWQgPVxuICAgIGZvcmNlQ2xvc2UgPT09IHRydWUgfHxcbiAgICB0b2dnbGVFbGVtZW50LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAndHJ1ZSc7XG5cbiAgLy8gVG9nZ2xlIHRoZSBleHBhbmRhYmxlL2NvbGxhcHNpYmxlXG4gIHRvZ2dsZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgIWlzRXhwYW5kZWQpO1xuICB0YXJnZXQuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGlzRXhwYW5kZWQpO1xuXG4gIC8vIFRvZ2dsZSBsYWJlbCBpZiBwb3NzaWJsZVxuICBpZiAoIWlzRXhwYW5kZWQgJiYgdG9nZ2xlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtZXhwYW5kZWQnKSkge1xuICAgIHRvZ2dsZUVsZW1lbnQuaW5uZXJIVE1MID0gdG9nZ2xlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbGFiZWwtZXhwYW5kZWQnKTtcbiAgfSBlbHNlIGlmIChpc0V4cGFuZGVkICYmIHRvZ2dsZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdkYXRhLWxhYmVsLWNvbGxhcHNlZCcpKSB7XG4gICAgdG9nZ2xlRWxlbWVudC5pbm5lckhUTUwgPSB0b2dnbGVFbGVtZW50LmdldEF0dHJpYnV0ZShcbiAgICAgICdkYXRhLWxhYmVsLWNvbGxhcHNlZCdcbiAgICApO1xuICB9XG5cbiAgLy8gQ2xvc2Ugc2libGluZ3MgaWYgcmVxdWVzdGVkXG4gIGlmIChjbG9zZVNpYmxpbmdzID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2libGluZ3NBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICAgLmNhbGwoY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNpYmxpbmdzU2VsZWN0b3IpKVxuICAgICAgLmZpbHRlcihzaWJsaW5nID0+IHNpYmxpbmcgIT09IHRvZ2dsZUVsZW1lbnQpO1xuXG4gICAgc2libGluZ3NBcnJheS5mb3JFYWNoKHNpYmxpbmcgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZShzaWJsaW5nLCB7XG4gICAgICAgIGNvbnRleHQsXG4gICAgICAgIGZvcmNlQ2xvc2U6IHRydWUsXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufTtcblxuLy8gSGVscGVyIG1ldGhvZCB0byBhdXRvbWF0aWNhbGx5IGF0dGFjaCB0aGUgZXZlbnQgbGlzdGVuZXIgdG8gYWxsIHRoZSBleHBhbmRhYmxlcyBvbiBwYWdlIGxvYWRcbmV4cG9ydCBjb25zdCBpbml0RXhwYW5kYWJsZXMgPSAoc2VsZWN0b3IsIGNvbnRleHQgPSBkb2N1bWVudCkgPT4ge1xuICAvLyBFeGl0IGlmIG5vIHNlbGVjdG9yIHdhcyBwcm92aWRlZFxuICBpZiAoIXNlbGVjdG9yKSByZXR1cm47XG5cbiAgY29uc3Qgbm9kZXNBcnJheSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcilcbiAgKTtcblxuICBub2Rlc0FycmF5LmZvckVhY2gobm9kZSA9PlxuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgIHRvZ2dsZUV4cGFuZGFibGUobm9kZSwgeyBjb250ZXh0IH0pO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pXG4gICk7XG59O1xuIiwiLyoqXG4gKiBOYXZpZ2F0aW9uIGlucGFnZSByZWxhdGVkIGJlaGF2aW9ycy5cbiAqL1xuXG5pbXBvcnQgU3RpY2t5ZmlsbCBmcm9tICdzdGlja3lmaWxsanMnO1xuaW1wb3J0IGd1bXNob2UgZnJvbSAnZ3Vtc2hvZWpzJztcbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9nZW5lcmljLWJhc2UvaGVscGVycy9kb20nO1xuaW1wb3J0IHsgdG9nZ2xlRXhwYW5kYWJsZSB9IGZyb20gJ0BlY2wvZ2VuZXJpYy1jb21wb25lbnQtZXhwYW5kYWJsZSc7XG5cbi8qKlxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT2JqZWN0IGNvbnRhaW5pbmcgY29uZmlndXJhdGlvbiBvdmVycmlkZXNcbiAqL1xuZXhwb3J0IGNvbnN0IG5hdmlnYXRpb25JbnBhZ2VzID0gKHtcbiAgc3RpY2t5U2VsZWN0b3I6IHN0aWNreVNlbGVjdG9yID0gJy5lY2wtaW5wYWdlLW5hdmlnYXRpb24nLFxuICBzcHlTZWxlY3Rvcjogc3B5U2VsZWN0b3IgPSAnLmVjbC1pbnBhZ2UtbmF2aWdhdGlvbl9fbGluaycsXG4gIHNweUNsYXNzOiBzcHlDbGFzcyA9ICdlY2wtaW5wYWdlLW5hdmlnYXRpb25fX2xpbmstLWlzLWFjdGl2ZScsXG4gIHNweUFjdGl2ZUNvbnRhaW5lcjogc3B5QWN0aXZlQ29udGFpbmVyID0gJ2VjbC1pbnBhZ2UtbmF2aWdhdGlvbi0tdmlzaWJsZScsXG4gIHNweVRyaWdnZXI6IHNweVRyaWdnZXIgPSAnLmVjbC1pbnBhZ2UtbmF2aWdhdGlvbl9fdHJpZ2dlcicsXG4gIHNweU9mZnNldDogc3B5T2Zmc2V0ID0gMjAsXG4gIHRvZ2dsZVNlbGVjdG9yOiB0b2dnbGVTZWxlY3RvciA9ICcuZWNsLWlucGFnZS1uYXZpZ2F0aW9uX190cmlnZ2VyJyxcbiAgbGlua3NTZWxlY3RvcjogbGlua3NTZWxlY3RvciA9ICcuZWNsLWlucGFnZS1uYXZpZ2F0aW9uX19saW5rJyxcbn0gPSB7fSkgPT4ge1xuICAvLyBTVVBQT1JUU1xuICBpZiAoXG4gICAgISgncXVlcnlTZWxlY3RvcicgaW4gZG9jdW1lbnQpIHx8XG4gICAgISgnYWRkRXZlbnRMaXN0ZW5lcicgaW4gd2luZG93KSB8fFxuICAgICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0XG4gIClcbiAgICByZXR1cm4gbnVsbDtcblxuICBsZXQgc3RpY2t5SW5zdGFuY2U7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiBpbml0U3RpY2t5KGVsZW1lbnQpIHtcbiAgICBzdGlja3lJbnN0YW5jZSA9IG5ldyBTdGlja3lmaWxsLlN0aWNreShlbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlc3Ryb3lTdGlja3koKSB7XG4gICAgaWYgKHN0aWNreUluc3RhbmNlKSB7XG4gICAgICBzdGlja3lJbnN0YW5jZS5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBpbml0U2Nyb2xsU3B5KGlucGFnZU5hdkVsZW1lbnQpIHtcbiAgICBndW1zaG9lLmluaXQoe1xuICAgICAgc2VsZWN0b3I6IHNweVNlbGVjdG9yLFxuICAgICAgYWN0aXZlQ2xhc3M6IHNweUNsYXNzLFxuICAgICAgb2Zmc2V0OiBzcHlPZmZzZXQsXG4gICAgICBjYWxsYmFjayhuYXYpIHtcbiAgICAgICAgY29uc3QgbmF2aWdhdGlvblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzcHlUcmlnZ2VyKTtcblxuICAgICAgICBpZiAoIW5hdikge1xuICAgICAgICAgIGlucGFnZU5hdkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShzcHlBY3RpdmVDb250YWluZXIpO1xuICAgICAgICAgIG5hdmlnYXRpb25UaXRsZS5pbm5lckhUTUwgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpbnBhZ2VOYXZFbGVtZW50LmNsYXNzTGlzdC5hZGQoc3B5QWN0aXZlQ29udGFpbmVyKTtcbiAgICAgICAgICBuYXZpZ2F0aW9uVGl0bGUuaW5uZXJIVE1MID0gbmF2Lm5hdi5pbm5lckhUTUw7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZXN0cm95U2Nyb2xsU3B5KCkge1xuICAgIGd1bXNob2UuZGVzdHJveSgpO1xuICB9XG5cbiAgLy8gSW5pdFxuICBmdW5jdGlvbiBpbml0KCkge1xuICAgIGNvbnN0IGlucGFnZU5hdkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHN0aWNreVNlbGVjdG9yKTtcbiAgICBjb25zdCB0b2dnbGVFbGVtZW50ID0gaW5wYWdlTmF2RWxlbWVudC5xdWVyeVNlbGVjdG9yKHRvZ2dsZVNlbGVjdG9yKTtcbiAgICBjb25zdCBuYXZMaW5rcyA9IHF1ZXJ5QWxsKGxpbmtzU2VsZWN0b3IsIGlucGFnZU5hdkVsZW1lbnQpO1xuXG4gICAgaW5pdFN0aWNreShpbnBhZ2VOYXZFbGVtZW50KTtcbiAgICBpbml0U2Nyb2xsU3B5KGlucGFnZU5hdkVsZW1lbnQpO1xuXG4gICAgdG9nZ2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgdG9nZ2xlRXhwYW5kYWJsZSh0b2dnbGVFbGVtZW50LCB7IGNvbnRleHQ6IGlucGFnZU5hdkVsZW1lbnQgfSk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG5cbiAgICBuYXZMaW5rcy5mb3JFYWNoKGxpbmsgPT5cbiAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUV4cGFuZGFibGUodG9nZ2xlRWxlbWVudCwge1xuICAgICAgICAgIGNvbnRleHQ6IGlucGFnZU5hdkVsZW1lbnQsXG4gICAgICAgICAgZm9yY2VDbG9zZTogdHJ1ZSxcbiAgICAgICAgfSk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvLyBEZXN0cm95XG4gIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgZGVzdHJveVNjcm9sbFNweSgpO1xuICAgIGRlc3Ryb3lTdGlja3koKTtcbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgICBkZXN0cm95LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmF2aWdhdGlvbklucGFnZXM7XG4iLCJpbXBvcnQgeyBxdWVyeUFsbCB9IGZyb20gJ0BlY2wvZ2VuZXJpYy1iYXNlL2hlbHBlcnMvZG9tJztcbmltcG9ydCB7IHRvZ2dsZUV4cGFuZGFibGUgfSBmcm9tICdAZWNsL2dlbmVyaWMtY29tcG9uZW50LWV4cGFuZGFibGUnO1xuXG5jb25zdCBvbkNsaWNrID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBpZiAobm9kZSAmJiBub2RlLmhhc0F0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpKSB7XG4gICAgY29uc3QgaGFzUG9wdXAgPSBub2RlLmdldEF0dHJpYnV0ZSgnYXJpYS1oYXNwb3B1cCcpO1xuICAgIGlmIChoYXNQb3B1cCA9PT0gJycgfHwgaGFzUG9wdXAgPT09ICd0cnVlJykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0b2dnbGVFeHBhbmRhYmxlKG5vZGUsIHtcbiAgICAgICAgY29udGV4dDogbWVudSxcbiAgICAgICAgY2xvc2VTaWJsaW5nczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgb25LZXlkb3duID0gKG5vZGUsIG1lbnUpID0+IGUgPT4ge1xuICBjb25zdCBjdXJyZW50VGFiID0gbm9kZS5wYXJlbnRFbGVtZW50O1xuICBjb25zdCBwcmV2aW91c1RhYkl0ZW0gPVxuICAgIGN1cnJlbnRUYWIucHJldmlvdXNFbGVtZW50U2libGluZyB8fFxuICAgIGN1cnJlbnRUYWIucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICBjb25zdCBuZXh0VGFiSXRlbSA9XG4gICAgY3VycmVudFRhYi5uZXh0RWxlbWVudFNpYmxpbmcgfHwgY3VycmVudFRhYi5wYXJlbnRFbGVtZW50LmZpcnN0RWxlbWVudENoaWxkO1xuXG4gIC8vIGRvbid0IGNhdGNoIGtleSBldmVudHMgd2hlbiDijJggb3IgQWx0IG1vZGlmaWVyIGlzIHByZXNlbnRcbiAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSkgcmV0dXJuO1xuXG4gIC8vIGNhdGNoIGxlZnQvcmlnaHQgYW5kIHVwL2Rvd24gYXJyb3cga2V5IGV2ZW50c1xuICAvLyBpZiBuZXcgbmV4dC9wcmV2IHRhYiBhdmFpbGFibGUsIHNob3cgaXQgYnkgcGFzc2luZyB0YWIgYW5jaG9yIHRvIHNob3dUYWIgbWV0aG9kXG4gIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgLy8gRU5URVIgb3IgU1BBQ0VcbiAgICBjYXNlIDEzOlxuICAgIGNhc2UgMzI6XG4gICAgICBvbkNsaWNrKGUuY3VycmVudFRhcmdldCwgbWVudSkoZSk7XG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgTEVGVCBhbmQgVVBcbiAgICBjYXNlIDM3OlxuICAgIGNhc2UgMzg6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBwcmV2aW91c1RhYkl0ZW0ucXVlcnlTZWxlY3RvcignYScpLmZvY3VzKCk7XG4gICAgICBicmVhaztcbiAgICAvLyBBUlJPV1MgUklHSFQgYW5kIERPV05cbiAgICBjYXNlIDM5OlxuICAgIGNhc2UgNDA6XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXh0VGFiSXRlbS5xdWVyeVNlbGVjdG9yKCdhJykuZm9jdXMoKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBicmVhaztcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IG1lZ2FtZW51ID0gKHtcbiAgc2VsZWN0b3I6IHNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51JyxcbiAgdG9nZ2xlU2VsZWN0b3I6IHRvZ2dsZVNlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X190b2dnbGUnLFxuICBsaXN0U2VsZWN0b3I6IGxpc3RTZWxlY3RvciA9ICcuZWNsLW5hdmlnYXRpb24tbWVudV9fcm9vdCcsXG4gIGxpbmtTZWxlY3RvcjogbGlua1NlbGVjdG9yID0gJy5lY2wtbmF2aWdhdGlvbi1tZW51X19saW5rJyxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBtZWdhbWVudXNBcnJheSA9IHF1ZXJ5QWxsKHNlbGVjdG9yKTtcblxuICBtZWdhbWVudXNBcnJheS5mb3JFYWNoKG1lbnUgPT4ge1xuICAgIC8vIE1ha2UgdGhlIHRvZ2dsZSBleHBhbmRhYmxlXG4gICAgY29uc3QgdG9nZ2xlID0gbWVudS5xdWVyeVNlbGVjdG9yKHRvZ2dsZVNlbGVjdG9yKTtcbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgICB0b2dnbGVFeHBhbmRhYmxlKHRvZ2dsZSwgeyBjb250ZXh0OiBtZW51IH0pXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIEdldCB0aGUgbGlzdCBvZiBsaW5rc1xuICAgIGNvbnN0IGxpc3QgPSBtZW51LnF1ZXJ5U2VsZWN0b3IobGlzdFNlbGVjdG9yKTtcblxuICAgIC8vIEdldCBleHBhbmRhYmxlcyB3aXRoaW4gdGhlIGxpc3RcbiAgICBjb25zdCBub2Rlc0FycmF5ID0gcXVlcnlBbGwobGlua1NlbGVjdG9yLCBsaXN0KTtcblxuICAgIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbkNsaWNrKG5vZGUsIGxpc3QpKTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIG9uS2V5ZG93bihub2RlLCBsaXN0KSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbWVnYW1lbnU7XG4iLCIvKipcbiAgc3RpY2t5Yml0cyAtIFN0aWNreWJpdHMgaXMgYSBsaWdodHdlaWdodCBhbHRlcm5hdGl2ZSB0byBgcG9zaXRpb246IHN0aWNreWAgcG9seWZpbGxzXG4gIEB2ZXJzaW9uIHYzLjIuM1xuICBAbGluayBodHRwczovL2dpdGh1Yi5jb20vZG9sbGFyc2hhdmVjbHViL3N0aWNreWJpdHMjcmVhZG1lXG4gIEBhdXRob3IgSmVmZiBXYWlud3JpZ2h0IDx5b3dhaW53cmlnaHRAZ21haWwuY29tPiAoaHR0cHM6Ly9qZWZmcnkuaW4pXG4gIEBsaWNlbnNlIE1JVFxuKiovXG4vKlxuICBTVElDS1lCSVRTIPCfkolcbiAgLS0tLS0tLS1cbiAgPiBhIGxpZ2h0d2VpZ2h0IGFsdGVybmF0aXZlIHRvIGBwb3NpdGlvbjogc3RpY2t5YCBwb2x5ZmlsbHMg8J+NrFxuICAtLS0tLS0tLVxuICAtIGVhY2ggbWV0aG9kIGlzIGRvY3VtZW50ZWQgYWJvdmUgaXQgb3VyIHZpZXcgdGhlIHJlYWRtZVxuICAtIFN0aWNreWJpdHMgZG9lcyBub3QgbWFuYWdlIHBvbHltb3JwaGljIGZ1bmN0aW9uYWxpdHkgKHBvc2l0aW9uIGxpa2UgcHJvcGVydGllcylcbiAgKiBwb2x5bW9ycGhpYyBmdW5jdGlvbmFsaXR5OiAoaW4gdGhlIGNvbnRleHQgb2YgZGVzY3JpYmluZyBTdGlja3liaXRzKVxuICAgIG1lYW5zIG1ha2luZyB0aGluZ3MgbGlrZSBgcG9zaXRpb246IHN0aWNreWAgYmUgbG9vc2VseSBzdXBwb3J0ZWQgd2l0aCBwb3NpdGlvbiBmaXhlZC5cbiAgICBJdCBhbHNvIG1lYW5zIHRoYXQgZmVhdHVyZXMgbGlrZSBgdXNlU3RpY2t5Q2xhc3Nlc2AgdGFrZXMgb24gc3R5bGVzIGxpa2UgYHBvc2l0aW9uOiBmaXhlZGAuXG4gIC0tLS0tLS0tXG4gIGRlZmF1bHRzIPCflIxcbiAgLS0tLS0tLS1cbiAgLSB2ZXJzaW9uID0gYHBhY2thZ2UuanNvbmAgdmVyc2lvblxuICAtIHVzZXJBZ2VudCA9IHZpZXdlciBicm93c2VyIGFnZW50XG4gIC0gdGFyZ2V0ID0gRE9NIGVsZW1lbnQgc2VsZWN0b3JcbiAgLSBub1N0eWxlcyA9IGJvb2xlYW5cbiAgLSBvZmZzZXQgPSBudW1iZXJcbiAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gIC0gc2Nyb2xsRWwgPSB3aW5kb3cgfHwgRE9NIGVsZW1lbnQgc2VsZWN0b3JcbiAgLSBzdGlja3lDbGFzcyA9ICdzdHJpbmcnXG4gIC0gc3R1Y2tDbGFzcyA9ICdzdHJpbmcnXG4gIC0gdXNlU3RpY2t5Q2xhc3NlcyA9IGJvb2xlYW5cbiAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gJ3N0cmluZydcbiAgLS0tLS0tLS1cbiAgcHJvcHPwn5SMXG4gIC0tLS0tLS0tXG4gIC0gcCA9IHByb3BzIHtvYmplY3R9XG4gIC0tLS0tLS0tXG4gIGluc3RhbmNlIG5vdGVcbiAgLS0tLS0tLS1cbiAgLSBzdGlja3liaXRzIHBhcmVudCBtZXRob2RzIHJldHVybiB0aGlzXG4gIC0gc3RpY2t5Yml0cyBpbnN0YW5jZSBtZXRob2RzIHJldHVybiBhbiBpbnN0YW5jZSBpdGVtXG4gIC0tLS0tLS0tXG4gIG5vbWVuY2xhdHVyZVxuICAtLS0tLS0tLVxuICAtIHRhcmdldCA9PiBlbCA9PiBlXG4gIC0gcHJvcHMgPT4gbyB8fCBwXG4gIC0gaW5zdGFuY2UgPT4gaXRlbSA9PiBpdFxuICAtLS0tLS0tLVxuICBtZXRob2RzXG4gIC0tLS0tLS0tXG4gIC0gLmRlZmluZVBvc2l0aW9uID0gZGVmaW5lcyBzdGlja3kgb3IgZml4ZWRcbiAgLSAuYWRkSW5zdGFuY2UgPSBhbiBhcnJheSBvZiBvYmplY3RzIGZvciBlYWNoIFN0aWNreWJpdHMgVGFyZ2V0XG4gIC0gLmdldENsb3Nlc3RQYXJlbnQgPSBnZXRzIHRoZSBwYXJlbnQgZm9yIG5vbi13aW5kb3cgc2Nyb2xsXG4gIC0gLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gY29tcHV0ZXMgc2Nyb2xsIHBvc2l0aW9uXG4gIC0gLnRvZ2dsZUNsYXNzZXMgPSBvbGRlciBicm93c2VyIHRvZ2dsZXJcbiAgLSAubWFuYWdlU3RhdGUgPSBtYW5hZ2VzIHN0aWNreSBzdGF0ZVxuICAtIC5yZW1vdmVDbGFzcyA9IG9sZGVyIGJyb3dzZXIgc3VwcG9ydCBjbGFzcyByZW1vdmVyXG4gIC0gLnJlbW92ZUluc3RhbmNlID0gcmVtb3ZlcyBhbiBpbnN0YW5jZVxuICAtIC5jbGVhbnVwID0gcmVtb3ZlcyBhbGwgU3RpY2t5Yml0cyBpbnN0YW5jZXMgYW5kIGNsZWFucyB1cCBkb20gZnJvbSBzdGlja3liaXRzXG4qL1xuZnVuY3Rpb24gU3RpY2t5Yml0cyh0YXJnZXQsIG9iaikge1xuICB2YXIgbyA9IHR5cGVvZiBvYmogIT09ICd1bmRlZmluZWQnID8gb2JqIDoge307XG4gIHRoaXMudmVyc2lvbiA9ICczLjIuMyc7XG4gIHRoaXMudXNlckFnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQgfHwgJ25vIGB1c2VyQWdlbnRgIHByb3ZpZGVkIGJ5IHRoZSBicm93c2VyJztcbiAgdGhpcy5wcm9wcyA9IHtcbiAgICBjdXN0b21TdGlja3lDaGFuZ2VOdW1iZXI6IG8uY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyIHx8IG51bGwsXG4gICAgbm9TdHlsZXM6IG8ubm9TdHlsZXMgfHwgZmFsc2UsXG4gICAgc3RpY2t5Qml0U3RpY2t5T2Zmc2V0OiBvLnN0aWNreUJpdFN0aWNreU9mZnNldCB8fCAwLFxuICAgIHBhcmVudENsYXNzOiBvLnBhcmVudENsYXNzIHx8ICdqcy1zdGlja3liaXQtcGFyZW50JyxcbiAgICBzY3JvbGxFbDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihvLnNjcm9sbEVsKSB8fCB3aW5kb3csXG4gICAgc3RpY2t5Q2xhc3M6IG8uc3RpY2t5Q2xhc3MgfHwgJ2pzLWlzLXN0aWNreScsXG4gICAgc3R1Y2tDbGFzczogby5zdHVja0NsYXNzIHx8ICdqcy1pcy1zdHVjaycsXG4gICAgc3RpY2t5Q2hhbmdlQ2xhc3M6IG8uc3RpY2t5Q2hhbmdlQ2xhc3MgfHwgJ2pzLWlzLXN0aWNreS0tY2hhbmdlJyxcbiAgICB1c2VTdGlja3lDbGFzc2VzOiBvLnVzZVN0aWNreUNsYXNzZXMgfHwgZmFsc2UsXG4gICAgdmVydGljYWxQb3NpdGlvbjogby52ZXJ0aWNhbFBvc2l0aW9uIHx8ICd0b3AnXG4gIH07XG4gIHZhciBwID0gdGhpcy5wcm9wcztcbiAgLypcbiAgICBkZWZpbmUgcG9zaXRpb25WYWxcbiAgICAtLS0tXG4gICAgLSAgdXNlcyBhIGNvbXB1dGVkIChgLmRlZmluZVBvc2l0aW9uKClgKVxuICAgIC0gIGRlZmluZWQgdGhlIHBvc2l0aW9uXG4gICovXG5cbiAgcC5wb3NpdGlvblZhbCA9IHRoaXMuZGVmaW5lUG9zaXRpb24oKSB8fCAnZml4ZWQnO1xuICB2YXIgdnAgPSBwLnZlcnRpY2FsUG9zaXRpb247XG4gIHZhciBucyA9IHAubm9TdHlsZXM7XG4gIHZhciBwdiA9IHAucG9zaXRpb25WYWw7XG4gIHRoaXMuZWxzID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRhcmdldCkgOiB0YXJnZXQ7XG4gIGlmICghKCdsZW5ndGgnIGluIHRoaXMuZWxzKSkgdGhpcy5lbHMgPSBbdGhpcy5lbHNdO1xuICB0aGlzLmluc3RhbmNlcyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5lbHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgZWwgPSB0aGlzLmVsc1tpXTtcbiAgICB2YXIgc3R5bGVzID0gZWwuc3R5bGU7IC8vIHNldCB2ZXJ0aWNhbCBwb3NpdGlvblxuXG4gICAgc3R5bGVzW3ZwXSA9IHZwID09PSAndG9wJyAmJiAhbnMgPyBwLnN0aWNreUJpdFN0aWNreU9mZnNldCArIFwicHhcIiA6ICcnO1xuICAgIHN0eWxlcy5wb3NpdGlvbiA9IHB2ICE9PSAnZml4ZWQnID8gcHYgOiAnJztcblxuICAgIGlmIChwdiA9PT0gJ2ZpeGVkJyB8fCBwLnVzZVN0aWNreUNsYXNzZXMpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuYWRkSW5zdGFuY2UoZWwsIHApOyAvLyBpbnN0YW5jZXMgYXJlIGFuIGFycmF5IG9mIG9iamVjdHNcblxuICAgICAgdGhpcy5pbnN0YW5jZXMucHVzaChpbnN0YW5jZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59XG4vKlxuICBzZXRTdGlja3lQb3NpdGlvbiDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUICBtb3N0IGJhc2ljIHRoaW5nIHN0aWNreWJpdHMgZG9lc1xuICA9PiBjaGVja3MgdG8gc2VlIGlmIHBvc2l0aW9uIHN0aWNreSBpcyBzdXBwb3J0ZWRcbiAgPT4gZGVmaW5lZCB0aGUgcG9zaXRpb24gdG8gYmUgdXNlZFxuICA9PiBzdGlja3liaXRzIHdvcmtzIGFjY29yZGluZ2x5XG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmRlZmluZVBvc2l0aW9uID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcHJlZml4ID0gWycnLCAnLW8tJywgJy13ZWJraXQtJywgJy1tb3otJywgJy1tcy0nXTtcbiAgdmFyIHRlc3QgPSBkb2N1bWVudC5oZWFkLnN0eWxlO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJlZml4Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgdGVzdC5wb3NpdGlvbiA9IHByZWZpeFtpXSArIFwic3RpY2t5XCI7XG4gIH1cblxuICB2YXIgc3RpY2t5UHJvcCA9IHRlc3QucG9zaXRpb24gPyB0ZXN0LnBvc2l0aW9uIDogJ2ZpeGVkJztcbiAgdGVzdC5wb3NpdGlvbiA9ICcnO1xuICByZXR1cm4gc3RpY2t5UHJvcDtcbn07XG4vKlxuICBhZGRJbnN0YW5jZSDinJTvuI9cbiAgLS0tLS0tLS1cbiAg4oCUIG1hbmFnZXMgaW5zdGFuY2VzIG9mIGl0ZW1zXG4gIC0gdGFrZXMgaW4gYW4gZWwgYW5kIHByb3BzXG4gIC0gcmV0dXJucyBhbiBpdGVtIG9iamVjdFxuICAtLS1cbiAgLSB0YXJnZXQgPSBlbFxuICAtIG8gPSB7b2JqZWN0fSA9IHByb3BzXG4gICAgLSBzY3JvbGxFbCA9ICdzdHJpbmcnXG4gICAgLSB2ZXJ0aWNhbFBvc2l0aW9uID0gbnVtYmVyXG4gICAgLSBvZmYgPSBib29sZWFuXG4gICAgLSBwYXJlbnRDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdGlja3lDbGFzcyA9ICdzdHJpbmcnXG4gICAgLSBzdHVja0NsYXNzID0gJ3N0cmluZydcbiAgLS0tXG4gIC0gZGVmaW5lZCBsYXRlclxuICAgIC0gcGFyZW50ID0gZG9tIGVsZW1lbnRcbiAgICAtIHN0YXRlID0gJ3N0cmluZydcbiAgICAtIG9mZnNldCA9IG51bWJlclxuICAgIC0gc3RpY2t5U3RhcnQgPSBudW1iZXJcbiAgICAtIHN0aWNreVN0b3AgPSBudW1iZXJcbiAgLSByZXR1cm5zIGFuIGluc3RhbmNlIG9iamVjdFxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5hZGRJbnN0YW5jZSA9IGZ1bmN0aW9uIGFkZEluc3RhbmNlKGVsLCBwcm9wcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHZhciBpdGVtID0ge1xuICAgIGVsOiBlbCxcbiAgICBwYXJlbnQ6IGVsLnBhcmVudE5vZGUsXG4gICAgcHJvcHM6IHByb3BzXG4gIH07XG4gIHRoaXMuaXNXaW4gPSB0aGlzLnByb3BzLnNjcm9sbEVsID09PSB3aW5kb3c7XG4gIHZhciBzZSA9IHRoaXMuaXNXaW4gPyB3aW5kb3cgOiB0aGlzLmdldENsb3Nlc3RQYXJlbnQoaXRlbS5lbCwgaXRlbS5wcm9wcy5zY3JvbGxFbCk7XG4gIHRoaXMuY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSk7XG4gIGl0ZW0ucGFyZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIHByb3BzLnBhcmVudENsYXNzO1xuICBpdGVtLnN0YXRlID0gJ2RlZmF1bHQnO1xuXG4gIGl0ZW0uc3RhdGVDb250YWluZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIF90aGlzLm1hbmFnZVN0YXRlKGl0ZW0pO1xuICB9O1xuXG4gIHNlLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGl0ZW0uc3RhdGVDb250YWluZXIpO1xuICByZXR1cm4gaXRlbTtcbn07XG4vKlxuICAtLS0tLS0tLVxuICBnZXRQYXJlbnQg8J+RqOKAjVxuICAtLS0tLS0tLVxuICAtIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0aGUgdGFyZ2V0IGVsZW1lbnQncyBwYXJlbnQgc2VsZWN0ZWQgZWxcbiAgLSBvbmx5IHVzZWQgZm9yIG5vbiBgd2luZG93YCBzY3JvbGwgZWxlbWVudHNcbiAgLSBzdXBwb3J0cyBvbGRlciBicm93c2Vyc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5nZXRDbG9zZXN0UGFyZW50ID0gZnVuY3Rpb24gKGVsLCBtYXRjaCkge1xuICAvLyBwID0gcGFyZW50IGVsZW1lbnRcbiAgdmFyIHAgPSBtYXRjaDtcbiAgdmFyIGUgPSBlbDtcbiAgaWYgKGUucGFyZW50RWxlbWVudCA9PT0gcCkgcmV0dXJuIHA7IC8vIHRyYXZlcnNlIHVwIHRoZSBkb20gdHJlZSB1bnRpbCB3ZSBnZXQgdG8gdGhlIHBhcmVudFxuXG4gIHdoaWxlIChlLnBhcmVudEVsZW1lbnQgIT09IHApIHtcbiAgICBlID0gZS5wYXJlbnRFbGVtZW50O1xuICB9IC8vIHJldHVybiBwYXJlbnQgZWxlbWVudFxuXG5cbiAgcmV0dXJuIHA7XG59O1xuLypcbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMg8J+TilxuICAtLS1cbiAgY29tcHV0ZVNjcm9sbE9mZnNldHMgZm9yIFN0aWNreWJpdHNcbiAgLSBkZWZpbmVzXG4gICAgLSBvZmZzZXRcbiAgICAtIHN0YXJ0XG4gICAgLSBzdG9wXG4qL1xuXG5cblN0aWNreWJpdHMucHJvdG90eXBlLmNvbXB1dGVTY3JvbGxPZmZzZXRzID0gZnVuY3Rpb24gY29tcHV0ZVNjcm9sbE9mZnNldHMoaXRlbSkge1xuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgZWwgPSBpdC5lbDtcbiAgdmFyIHBhcmVudCA9IGl0LnBhcmVudDtcbiAgdmFyIGlzQ3VzdG9tID0gIXRoaXMuaXNXaW4gJiYgcC5wb3NpdGlvblZhbCA9PT0gJ2ZpeGVkJztcbiAgdmFyIGlzQm90dG9tID0gcC52ZXJ0aWNhbFBvc2l0aW9uICE9PSAnYm90dG9tJztcbiAgdmFyIHNjcm9sbEVsT2Zmc2V0ID0gaXNDdXN0b20gPyBwLnNjcm9sbEVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCA6IDA7XG4gIHZhciBzdGlja3lTdGFydCA9IGlzQ3VzdG9tID8gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHNjcm9sbEVsT2Zmc2V0IDogcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgdmFyIHN0aWNreUNoYW5nZU9mZnNldCA9IHAuY3VzdG9tU3RpY2t5Q2hhbmdlTnVtYmVyICE9PSBudWxsID8gcC5jdXN0b21TdGlja3lDaGFuZ2VOdW1iZXIgOiBlbC5vZmZzZXRIZWlnaHQ7XG4gIGl0Lm9mZnNldCA9IHNjcm9sbEVsT2Zmc2V0ICsgcC5zdGlja3lCaXRTdGlja3lPZmZzZXQ7XG4gIGl0LnN0aWNreVN0YXJ0ID0gaXNCb3R0b20gPyBzdGlja3lTdGFydCAtIGl0Lm9mZnNldCA6IDA7XG4gIGl0LnN0aWNreUNoYW5nZSA9IGl0LnN0aWNreVN0YXJ0ICsgc3RpY2t5Q2hhbmdlT2Zmc2V0O1xuICBpdC5zdGlja3lTdG9wID0gaXNCb3R0b20gPyBzdGlja3lTdGFydCArIHBhcmVudC5vZmZzZXRIZWlnaHQgLSAoaXQuZWwub2Zmc2V0SGVpZ2h0ICsgaXQub2Zmc2V0KSA6IHN0aWNreVN0YXJ0ICsgcGFyZW50Lm9mZnNldEhlaWdodDtcbiAgcmV0dXJuIGl0O1xufTtcbi8qXG4gIHRvZ2dsZUNsYXNzZXMg4pqW77iPXG4gIC0tLVxuICB0b2dnbGVzIGNsYXNzZXMgKGZvciBvbGRlciBicm93c2VyIHN1cHBvcnQpXG4gIHIgPSByZW1vdmVkIGNsYXNzXG4gIGEgPSBhZGRlZCBjbGFzc1xuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS50b2dnbGVDbGFzc2VzID0gZnVuY3Rpb24gKGVsLCByLCBhKSB7XG4gIHZhciBlID0gZWw7XG4gIHZhciBjQXJyYXkgPSBlLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xuICBpZiAoYSAmJiBjQXJyYXkuaW5kZXhPZihhKSA9PT0gLTEpIGNBcnJheS5wdXNoKGEpO1xuICB2YXIgckl0ZW0gPSBjQXJyYXkuaW5kZXhPZihyKTtcbiAgaWYgKHJJdGVtICE9PSAtMSkgY0FycmF5LnNwbGljZShySXRlbSwgMSk7XG4gIGUuY2xhc3NOYW1lID0gY0FycmF5LmpvaW4oJyAnKTtcbn07XG4vKlxuICBtYW5hZ2VTdGF0ZSDwn5OdXG4gIC0tLVxuICAtIGRlZmluZXMgdGhlIHN0YXRlXG4gICAgLSBub3JtYWxcbiAgICAtIHN0aWNreVxuICAgIC0gc3R1Y2tcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUubWFuYWdlU3RhdGUgPSBmdW5jdGlvbiBtYW5hZ2VTdGF0ZShpdGVtKSB7XG4gIC8vIGNhY2hlIG9iamVjdFxuICB2YXIgaXQgPSBpdGVtO1xuICB2YXIgZSA9IGl0LmVsO1xuICB2YXIgcCA9IGl0LnByb3BzO1xuICB2YXIgc3RhdGUgPSBpdC5zdGF0ZTtcbiAgdmFyIHN0YXJ0ID0gaXQuc3RpY2t5U3RhcnQ7XG4gIHZhciBjaGFuZ2UgPSBpdC5zdGlja3lDaGFuZ2U7XG4gIHZhciBzdG9wID0gaXQuc3RpY2t5U3RvcDtcbiAgdmFyIHN0bCA9IGUuc3R5bGU7IC8vIGNhY2hlIHByb3BzXG5cbiAgdmFyIG5zID0gcC5ub1N0eWxlcztcbiAgdmFyIHB2ID0gcC5wb3NpdGlvblZhbDtcbiAgdmFyIHNlID0gcC5zY3JvbGxFbDtcbiAgdmFyIHN0aWNreSA9IHAuc3RpY2t5Q2xhc3M7XG4gIHZhciBzdGlja3lDaGFuZ2UgPSBwLnN0aWNreUNoYW5nZUNsYXNzO1xuICB2YXIgc3R1Y2sgPSBwLnN0dWNrQ2xhc3M7XG4gIHZhciB2cCA9IHAudmVydGljYWxQb3NpdGlvbjtcbiAgLypcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcbiAgICAtLS1cbiAgICAtIHVzZSByQUZcbiAgICAtIG9yIHN0dWIgckFGXG4gICovXG5cbiAgdmFyIHJBRlN0dWIgPSBmdW5jdGlvbiByQUZEdW1teShmKSB7XG4gICAgZigpO1xuICB9O1xuXG4gIHZhciByQUYgPSAhdGhpcy5pc1dpbiA/IHJBRlN0dWIgOiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgckFGU3R1YjtcbiAgLypcbiAgICBkZWZpbmUgc2Nyb2xsIHZhcnNcbiAgICAtLS1cbiAgICAtIHNjcm9sbFxuICAgIC0gbm90U3RpY2t5XG4gICAgLSBpc1N0aWNreVxuICAgIC0gaXNTdHVja1xuICAqL1xuXG4gIHZhciB0QyA9IHRoaXMudG9nZ2xlQ2xhc3NlcztcbiAgdmFyIHNjcm9sbCA9IHRoaXMuaXNXaW4gPyB3aW5kb3cuc2Nyb2xsWSB8fCB3aW5kb3cucGFnZVlPZmZzZXQgOiBzZS5zY3JvbGxUb3A7XG4gIHZhciBub3RTdGlja3kgPSBzY3JvbGwgPiBzdGFydCAmJiBzY3JvbGwgPCBzdG9wICYmIChzdGF0ZSA9PT0gJ2RlZmF1bHQnIHx8IHN0YXRlID09PSAnc3R1Y2snKTtcbiAgdmFyIGlzU3RpY2t5ID0gc2Nyb2xsIDw9IHN0YXJ0ICYmIHN0YXRlID09PSAnc3RpY2t5JztcbiAgdmFyIGlzU3R1Y2sgPSBzY3JvbGwgPj0gc3RvcCAmJiBzdGF0ZSA9PT0gJ3N0aWNreSc7XG4gIC8qXG4gICAgVW5uYW1lZCBhcnJvdyBmdW5jdGlvbnMgd2l0aGluIHRoaXMgYmxvY2tcbiAgICAtLS1cbiAgICAtIGhlbHAgd2FudGVkIG9yIGRpc2N1c3Npb25cbiAgICAtIHZpZXcgdGVzdC5zdGlja3liaXRzLmpzXG4gICAgICAtIGBzdGlja3liaXRzIC5tYW5hZ2VTdGF0ZSAgYHBvc2l0aW9uOiBmaXhlZGAgaW50ZXJmYWNlYCBmb3IgbW9yZSBhd2FyZW5lc3Mg8J+RgFxuICAqL1xuXG4gIGlmIChub3RTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdzdGlja3knO1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdHVjaywgc3RpY2t5KTtcbiAgICAgIHN0bC5wb3NpdGlvbiA9IHB2O1xuICAgICAgaWYgKG5zKSByZXR1cm47XG4gICAgICBzdGwuYm90dG9tID0gJyc7XG4gICAgICBzdGxbdnBdID0gcC5zdGlja3lCaXRTdGlja3lPZmZzZXQgKyBcInB4XCI7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdGlja3kpIHtcbiAgICBpdC5zdGF0ZSA9ICdkZWZhdWx0JztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5KTtcbiAgICAgIGlmIChwdiA9PT0gJ2ZpeGVkJykgc3RsLnBvc2l0aW9uID0gJyc7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoaXNTdHVjaykge1xuICAgIGl0LnN0YXRlID0gJ3N0dWNrJztcbiAgICByQUYoZnVuY3Rpb24gKCkge1xuICAgICAgdEMoZSwgc3RpY2t5LCBzdHVjayk7XG4gICAgICBpZiAocHYgIT09ICdmaXhlZCcgfHwgbnMpIHJldHVybjtcbiAgICAgIHN0bC50b3AgPSAnJztcbiAgICAgIHN0bC5ib3R0b20gPSAnMCc7XG4gICAgICBzdGwucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIH0pO1xuICB9XG5cbiAgdmFyIGlzU3RpY2t5Q2hhbmdlID0gc2Nyb2xsID49IGNoYW5nZSAmJiBzY3JvbGwgPD0gc3RvcDtcbiAgdmFyIGlzTm90U3RpY2t5Q2hhbmdlID0gc2Nyb2xsIDwgY2hhbmdlIHx8IHNjcm9sbCA+IHN0b3A7XG4gIHZhciBzdHViID0gJ3N0dWInOyAvLyBhIHN0dWIgY3NzIGNsYXNzIHRvIHJlbW92ZVxuXG4gIGlmIChpc05vdFN0aWNreUNoYW5nZSkge1xuICAgIHJBRihmdW5jdGlvbiAoKSB7XG4gICAgICB0QyhlLCBzdGlja3lDaGFuZ2UpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGlzU3RpY2t5Q2hhbmdlKSB7XG4gICAgckFGKGZ1bmN0aW9uICgpIHtcbiAgICAgIHRDKGUsIHN0dWIsIHN0aWNreUNoYW5nZSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gaXQ7XG59O1xuLypcbiAgcmVtb3ZlcyBhbiBpbnN0YW5jZSDwn5GLXG4gIC0tLS0tLS0tXG4gIC0gY2xlYW51cCBpbnN0YW5jZVxuKi9cblxuXG5TdGlja3liaXRzLnByb3RvdHlwZS5yZW1vdmVJbnN0YW5jZSA9IGZ1bmN0aW9uIHJlbW92ZUluc3RhbmNlKGluc3RhbmNlKSB7XG4gIHZhciBlID0gaW5zdGFuY2UuZWw7XG4gIHZhciBwID0gaW5zdGFuY2UucHJvcHM7XG4gIHZhciB0QyA9IHRoaXMudG9nZ2xlQ2xhc3NlcztcbiAgZS5zdHlsZS5wb3NpdGlvbiA9ICcnO1xuICBlLnN0eWxlW3AudmVydGljYWxQb3NpdGlvbl0gPSAnJztcbiAgdEMoZSwgcC5zdGlja3lDbGFzcyk7XG4gIHRDKGUsIHAuc3R1Y2tDbGFzcyk7XG4gIHRDKGUucGFyZW50Tm9kZSwgcC5wYXJlbnRDbGFzcyk7XG59O1xuLypcbiAgY2xlYW51cCDwn5uBXG4gIC0tLS0tLS0tXG4gIC0gY2xlYW5zIHVwIGVhY2ggaW5zdGFuY2VcbiAgLSBjbGVhcnMgaW5zdGFuY2VcbiovXG5cblxuU3RpY2t5Yml0cy5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5pbnN0YW5jZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlc1tpXTtcbiAgICBpbnN0YW5jZS5wcm9wcy5zY3JvbGxFbC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBpbnN0YW5jZS5zdGF0ZUNvbnRhaW5lcik7XG4gICAgdGhpcy5yZW1vdmVJbnN0YW5jZShpbnN0YW5jZSk7XG4gIH1cblxuICB0aGlzLm1hbmFnZVN0YXRlID0gZmFsc2U7XG4gIHRoaXMuaW5zdGFuY2VzID0gW107XG59O1xuLypcbiAgZXhwb3J0XG4gIC0tLS0tLS0tXG4gIGV4cG9ydHMgU3RpY2tCaXRzIHRvIGJlIHVzZWQg8J+PgVxuKi9cblxuXG5mdW5jdGlvbiBzdGlja3liaXRzKHRhcmdldCwgbykge1xuICByZXR1cm4gbmV3IFN0aWNreWJpdHModGFyZ2V0LCBvKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3RpY2t5Yml0cztcbiIsIi8qKlxuICogU2lkZSBuYXZpZ2F0aW9uIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbmltcG9ydCBzdGlja3liaXRzIGZyb20gJ3N0aWNreWJpdHMnO1xuXG4vKipcbiAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9iamVjdCBjb250YWluaW5nIGNvbmZpZ3VyYXRpb24gb3ZlcnJpZGVzXG4gKi9cbmV4cG9ydCBjb25zdCBuYXZpZ2F0aW9uU2lkZSA9ICh7XG4gIHN0aWNreVNlbGVjdG9yOiBzdGlja3lTZWxlY3RvciA9ICcuZWNsLXNpZGUtbmF2aWdhdGlvbl9fdG9nZ2xlJyxcbiAgYWN0aXZlU2VsZWN0b3I6IGFjdGl2ZVNlbGVjdG9yID0gJy5lY2wtc2lkZS1uYXZpZ2F0aW9uX19saW5rLS1hY3RpdmUnLFxufSA9IHt9KSA9PiB7XG4gIC8vIFNVUFBPUlRTXG4gIGlmIChcbiAgICAhKCdxdWVyeVNlbGVjdG9yJyBpbiBkb2N1bWVudCkgfHxcbiAgICAhKCdhZGRFdmVudExpc3RlbmVyJyBpbiB3aW5kb3cpIHx8XG4gICAgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3RcbiAgKVxuICAgIHJldHVybiBudWxsO1xuXG4gIC8vIEFDVElPTlNcbiAgZnVuY3Rpb24gaW5pdFN0aWNreSgpIHtcbiAgICAvLyBpbml0IHN0aWNreSBtZW51XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgc3RpY2t5Yml0cyhzdGlja3lTZWxlY3RvciwgeyB1c2VTdGlja3lDbGFzc2VzOiB0cnVlIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIHN0aWNreVNlbGVjdG9yLnN1YnN0cmluZygxKVxuICAgIClbMF07XG5cbiAgICBpZiAodG9nZ2xlKSB7XG4gICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnYXJpYS1leHBhbmRlZCcpID09PSAnZmFsc2UnKSB7XG4gICAgICAgICAgZS50YXJnZXQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdW5mb2xkVG9BY3RpdmUoKSB7XG4gICAgY29uc3QgYWN0aXZlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgIGFjdGl2ZVNlbGVjdG9yLnN1YnN0cmluZygxKVxuICAgIClbMF07XG5cbiAgICAvLyBCcm93c2UgcGFyZW50c1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGxldCBub2RlID0gYWN0aXZlO1xuICAgICAgY29uc3QgZWxzID0gW107XG4gICAgICB3aGlsZSAobm9kZSkge1xuICAgICAgICBlbHMudW5zaGlmdChub2RlKTtcbiAgICAgICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcblxuICAgICAgICAvLyBDaGVjayBpZiBwYXJlbnQgaXMgYW4gZXhwYW5kYWJsZSBtZW51IGl0ZW1cbiAgICAgICAgaWYgKG5vZGUubWF0Y2hlcygnLmVjbC1zaWRlLW5hdmlnYXRpb25fX2dyb3VwJykpIHtcbiAgICAgICAgICBjb25zdCBsaW5rID0gbm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgIGlmIChsaW5rLm1hdGNoZXMoJy5lY2wtc2lkZS1uYXZpZ2F0aW9uX19saW5rJykpIHtcbiAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBObyBuZWVkIHRvIGNoZWNrIG91dHNpZGUgb2YgbWVudVxuICAgICAgICBpZiAobm9kZS5tYXRjaGVzKCcuZWNsLXNpZGUtbmF2aWdhdGlvbicpKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgaW5pdFN0aWNreSgpO1xuICAgIHNjcm9sbFRvVG9wKCk7XG4gICAgdW5mb2xkVG9BY3RpdmUoKTtcbiAgfVxuXG4gIGluaXQoKTtcblxuICAvLyBSRVZFQUwgQVBJXG4gIHJldHVybiB7XG4gICAgaW5pdCxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCBuYXZpZ2F0aW9uU2lkZTtcbiIsIi8qKlxuICogVGFibGVzIHJlbGF0ZWQgYmVoYXZpb3JzLlxuICovXG5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZXhwZWN0ZWQtbXVsdGlsaW5lICovXG5cbmV4cG9ydCBmdW5jdGlvbiBlY2xUYWJsZXMoZWxlbWVudHMgPSBudWxsKSB7XG4gIGNvbnN0IHRhYmxlcyA9XG4gICAgZWxlbWVudHMgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZWNsLXRhYmxlLS1yZXNwb25zaXZlJyk7XG4gIFtdLmZvckVhY2guY2FsbCh0YWJsZXMsIHRhYmxlID0+IHtcbiAgICBjb25zdCBoZWFkZXJUZXh0ID0gW107XG4gICAgbGV0IHRleHRDb2xzcGFuID0gJyc7XG4gICAgbGV0IGNpID0gMDtcbiAgICBsZXQgY24gPSBbXTtcblxuICAgIC8vIFRoZSByb3dzIGluIGEgdGFibGUgYm9keS5cbiAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgLy8gVGhlIGhlYWRlcnMgaW4gYSB0YWJsZS5cbiAgICBjb25zdCBoZWFkZXJzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGhlYWQgdHIgdGgnKTtcblxuICAgIC8vIFRoZSBudW1iZXIgb2YgbWFpbiBoZWFkZXJzLlxuICAgIGNvbnN0IGhlYWRGaXJzdCA9XG4gICAgICB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aGVhZCB0cicpWzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RoJykubGVuZ3RoIC0gMTtcblxuICAgIC8vIE51bWJlciBvZiBjZWxscyBwZXIgcm93LlxuICAgIGNvbnN0IGNlbGxQZXJSb3cgPSB0YWJsZVxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJylbMF1cbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpLmxlbmd0aDtcblxuICAgIC8vIFBvc2l0aW9uIG9mIHRoZSBldmVudHVhbCBjb2xzcGFuIGVsZW1lbnQuXG4gICAgbGV0IGNvbHNwYW5JbmRleCA9IC0xO1xuXG4gICAgLy8gQnVpbGQgdGhlIGFycmF5IHdpdGggYWxsIHRoZSBcImxhYmVsc1wiXG4gICAgLy8gQWxzbyBnZXQgcG9zaXRpb24gb2YgdGhlIGV2ZW50dWFsIGNvbHNwYW4gZWxlbWVudFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGVhZGVycy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGhlYWRlcnNbaV0uZ2V0QXR0cmlidXRlKCdjb2xzcGFuJykpIHtcbiAgICAgICAgY29sc3BhbkluZGV4ID0gaTtcbiAgICAgIH1cblxuICAgICAgaGVhZGVyVGV4dFtpXSA9IFtdO1xuICAgICAgaGVhZGVyVGV4dFtpXSA9IGhlYWRlcnNbaV0udGV4dENvbnRlbnQ7XG4gICAgfVxuXG4gICAgLy8gSWYgd2UgaGF2ZSBhIGNvbHNwYW4sIHdlIGhhdmUgdG8gcHJlcGFyZSB0aGUgZGF0YSBmb3IgaXQuXG4gICAgaWYgKGNvbHNwYW5JbmRleCAhPT0gLTEpIHtcbiAgICAgIHRleHRDb2xzcGFuID0gaGVhZGVyVGV4dC5zcGxpY2UoY29sc3BhbkluZGV4LCAxKTtcbiAgICAgIGNpID0gY29sc3BhbkluZGV4O1xuICAgICAgY24gPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0aFtjb2xzcGFuXScpWzBdLmdldEF0dHJpYnV0ZSgnY29sc3BhbicpO1xuXG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNuOyBjICs9IDEpIHtcbiAgICAgICAgaGVhZGVyVGV4dC5zcGxpY2UoY2kgKyBjLCAwLCBoZWFkZXJUZXh0W2hlYWRGaXJzdCArIGNdKTtcbiAgICAgICAgaGVhZGVyVGV4dC5zcGxpY2UoaGVhZEZpcnN0ICsgMSArIGMsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvciBldmVyeSByb3csIHNldCB0aGUgYXR0cmlidXRlcyB3ZSB1c2UgdG8gbWFrZSB0aGlzIGhhcHBlbi5cbiAgICBbXS5mb3JFYWNoLmNhbGwodGFibGVSb3dzLCByb3cgPT4ge1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjZWxsUGVyUm93OyBqICs9IDEpIHtcbiAgICAgICAgaWYgKGhlYWRlclRleHRbal0gPT09ICcnIHx8IGhlYWRlclRleHRbal0gPT09ICdcXHUwMGEwJykge1xuICAgICAgICAgIHJvd1xuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylcbiAgICAgICAgICAgIFtqXS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2VjbC10YWJsZV9faGVhZGluZycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpW2pdLnNldEF0dHJpYnV0ZSgnZGF0YS10aCcsIGhlYWRlclRleHRbal0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbHNwYW5JbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICBjb25zdCBjZWxsID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylbY29sc3BhbkluZGV4XTtcbiAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZWNsLXRhYmxlX19ncm91cC1sYWJlbCcpO1xuICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLXRoLWdyb3VwJywgdGV4dENvbHNwYW4pO1xuXG4gICAgICAgICAgZm9yIChsZXQgYyA9IDE7IGMgPCBjbjsgYyArPSAxKSB7XG4gICAgICAgICAgICByb3dcbiAgICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJylcbiAgICAgICAgICAgICAgW2NvbHNwYW5JbmRleCArIGNdLnNldEF0dHJpYnV0ZShcbiAgICAgICAgICAgICAgICAnY2xhc3MnLFxuICAgICAgICAgICAgICAgICdlY2wtdGFibGVfX2dyb3VwX2VsZW1lbnQnXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBlY2xUYWJsZXM7XG4iLCIvLyBIZWF2aWx5IGluc3BpcmVkIGJ5IHRoZSB0YWIgY29tcG9uZW50IGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2ZyZW5kL2ZyZW5kLmNvXG5cbmltcG9ydCB7IHF1ZXJ5QWxsIH0gZnJvbSAnQGVjbC9lYy1iYXNlL2hlbHBlcnMvZG9tJztcblxuLyoqXG4gKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPYmplY3QgY29udGFpbmluZyBjb25maWd1cmF0aW9uIG92ZXJyaWRlc1xuICovXG5leHBvcnQgY29uc3QgdGFicyA9ICh7XG4gIHNlbGVjdG9yOiBzZWxlY3RvciA9ICcuZWNsLXRhYnMnLFxuICB0YWJsaXN0U2VsZWN0b3I6IHRhYmxpc3RTZWxlY3RvciA9ICcuZWNsLXRhYnNfX3RhYmxpc3QnLFxuICB0YWJwYW5lbFNlbGVjdG9yOiB0YWJwYW5lbFNlbGVjdG9yID0gJy5lY2wtdGFic19fdGFicGFuZWwnLFxuICB0YWJlbGVtZW50c1NlbGVjdG9yOiB0YWJlbGVtZW50c1NlbGVjdG9yID0gYCR7dGFibGlzdFNlbGVjdG9yfSBsaWAsXG59ID0ge30pID0+IHtcbiAgLy8gU1VQUE9SVFNcbiAgaWYgKFxuICAgICEoJ3F1ZXJ5U2VsZWN0b3InIGluIGRvY3VtZW50KSB8fFxuICAgICEoJ2FkZEV2ZW50TGlzdGVuZXInIGluIHdpbmRvdykgfHxcbiAgICAhZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdFxuICApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgLy8gU0VUVVBcbiAgLy8gc2V0IHRhYiBlbGVtZW50IE5vZGVMaXN0XG4gIGNvbnN0IHRhYkNvbnRhaW5lcnMgPSBxdWVyeUFsbChzZWxlY3Rvcik7XG5cbiAgLy8gQUNUSU9OU1xuICBmdW5jdGlvbiBzaG93VGFiKHRhcmdldCwgZ2l2ZUZvY3VzID0gdHJ1ZSkge1xuICAgIGNvbnN0IHNpYmxpbmdUYWJzID0gcXVlcnlBbGwoXG4gICAgICBgJHt0YWJsaXN0U2VsZWN0b3J9IGxpYCxcbiAgICAgIHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICApO1xuICAgIGNvbnN0IHNpYmxpbmdUYWJwYW5lbHMgPSBxdWVyeUFsbChcbiAgICAgIHRhYnBhbmVsU2VsZWN0b3IsXG4gICAgICB0YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50XG4gICAgKTtcblxuICAgIC8vIHNldCBpbmFjdGl2ZXNcbiAgICBzaWJsaW5nVGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICB0YWIuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIC0xKTtcbiAgICAgIHRhYi5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnKTtcbiAgICB9KTtcblxuICAgIHNpYmxpbmdUYWJwYW5lbHMuZm9yRWFjaCh0YWJwYW5lbCA9PiB7XG4gICAgICB0YWJwYW5lbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9KTtcblxuICAgIC8vIHNldCBhY3RpdmVzIGFuZCBmb2N1c1xuICAgIHRhcmdldC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgMCk7XG4gICAgdGFyZ2V0LnNldEF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcsICd0cnVlJyk7XG4gICAgaWYgKGdpdmVGb2N1cykgdGFyZ2V0LmZvY3VzKCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5nZXRFbGVtZW50QnlJZCh0YXJnZXQuZ2V0QXR0cmlidXRlKCdhcmlhLWNvbnRyb2xzJykpXG4gICAgICAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICB9XG5cbiAgLy8gRVZFTlRTXG4gIGZ1bmN0aW9uIGV2ZW50VGFiQ2xpY2soZSkge1xuICAgIHNob3dUYWIoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGxvb2sgaW50byByZW1vdmUgaWQvc2V0dGltZW91dC9yZWluc3RhdGUgaWQgYXMgYW4gYWx0ZXJuYXRpdmUgdG8gcHJldmVudERlZmF1bHRcbiAgfVxuXG4gIGZ1bmN0aW9uIGV2ZW50VGFiS2V5ZG93bihlKSB7XG4gICAgLy8gY29sbGVjdCB0YWIgdGFyZ2V0cywgYW5kIHRoZWlyIHBhcmVudHMnIHByZXYvbmV4dCAob3IgZmlyc3QvbGFzdClcbiAgICBjb25zdCBjdXJyZW50VGFiID0gZS5jdXJyZW50VGFyZ2V0O1xuICAgIGNvbnN0IHByZXZpb3VzVGFiSXRlbSA9XG4gICAgICBjdXJyZW50VGFiLnByZXZpb3VzRWxlbWVudFNpYmxpbmcgfHxcbiAgICAgIGN1cnJlbnRUYWIucGFyZW50RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIGNvbnN0IG5leHRUYWJJdGVtID1cbiAgICAgIGN1cnJlbnRUYWIubmV4dEVsZW1lbnRTaWJsaW5nIHx8XG4gICAgICBjdXJyZW50VGFiLnBhcmVudEVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbiAgICAvLyBkb24ndCBjYXRjaCBrZXkgZXZlbnRzIHdoZW4g4oyYIG9yIEFsdCBtb2RpZmllciBpcyBwcmVzZW50XG4gICAgaWYgKGUubWV0YUtleSB8fCBlLmFsdEtleSkgcmV0dXJuO1xuXG4gICAgLy8gY2F0Y2ggbGVmdC9yaWdodCBhbmQgdXAvZG93biBhcnJvdyBrZXkgZXZlbnRzXG4gICAgLy8gaWYgbmV3IG5leHQvcHJldiB0YWIgYXZhaWxhYmxlLCBzaG93IGl0IGJ5IHBhc3NpbmcgdGFiIGFuY2hvciB0byBzaG93VGFiIG1ldGhvZFxuICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICBjYXNlIDM3OlxuICAgICAgY2FzZSAzODpcbiAgICAgICAgc2hvd1RhYihwcmV2aW91c1RhYkl0ZW0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAzOTpcbiAgICAgIGNhc2UgNDA6XG4gICAgICAgIHNob3dUYWIobmV4dFRhYkl0ZW0pO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgLy8gQklORElOR1NcbiAgZnVuY3Rpb24gYmluZFRhYnNFdmVudHModGFiQ29udGFpbmVyKSB7XG4gICAgY29uc3QgdGFic0VsZW1lbnRzID0gcXVlcnlBbGwodGFiZWxlbWVudHNTZWxlY3RvciwgdGFiQ29udGFpbmVyKTtcbiAgICAvLyBiaW5kIGFsbCB0YWIgY2xpY2sgYW5kIGtleWRvd24gZXZlbnRzXG4gICAgdGFic0VsZW1lbnRzLmZvckVhY2godGFiID0+IHtcbiAgICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50VGFiQ2xpY2spO1xuICAgICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBldmVudFRhYktleWRvd24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdW5iaW5kVGFic0V2ZW50cyh0YWJDb250YWluZXIpIHtcbiAgICBjb25zdCB0YWJzRWxlbWVudHMgPSBxdWVyeUFsbCh0YWJlbGVtZW50c1NlbGVjdG9yLCB0YWJDb250YWluZXIpO1xuICAgIC8vIHVuYmluZCBhbGwgdGFiIGNsaWNrIGFuZCBrZXlkb3duIGV2ZW50c1xuICAgIHRhYnNFbGVtZW50cy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICB0YWIucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudFRhYkNsaWNrKTtcbiAgICAgIHRhYi5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZXZlbnRUYWJLZXlkb3duKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIERFU1RST1lcbiAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICB0YWJDb250YWluZXJzLmZvckVhY2godW5iaW5kVGFic0V2ZW50cyk7XG4gIH1cblxuICAvLyBJTklUXG4gIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgdGFiQ29udGFpbmVycy5mb3JFYWNoKGJpbmRUYWJzRXZlbnRzKTtcbiAgfVxuXG4gIC8vIEF1dG9tYXRpY2FsbHkgaW5pdFxuICBpbml0KCk7XG5cbiAgLy8gUkVWRUFMIEFQSVxuICByZXR1cm4ge1xuICAgIGluaXQsXG4gICAgZGVzdHJveSxcbiAgfTtcbn07XG5cbi8vIG1vZHVsZSBleHBvcnRzXG5leHBvcnQgZGVmYXVsdCB0YWJzO1xuIiwiLyoqXG4gKiBUaW1lbGluZVxuICovXG5cbmNvbnN0IGV4cGFuZFRpbWVsaW5lID0gKFxuICB0aW1lbGluZSxcbiAgYnV0dG9uLFxuICB7XG4gICAgY2xhc3NUb1JlbW92ZSA9ICdlY2wtdGltZWxpbmVfX2l0ZW0tLW92ZXItbGltaXQnLFxuICAgIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgPSAnLmVjbC10aW1lbGluZV9faXRlbS0tb3Zlci1saW1pdCcsXG4gIH0gPSB7fVxuKSA9PiB7XG4gIGlmICghdGltZWxpbmUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBoaWRkZW5FbGVtZW50cyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKFxuICAgIHRpbWVsaW5lLnF1ZXJ5U2VsZWN0b3JBbGwoaGlkZGVuRWxlbWVudHNTZWxlY3RvcilcbiAgKTtcblxuICAvLyBSZW1vdmUgZXh0cmEgY2xhc3NcbiAgaGlkZGVuRWxlbWVudHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NUb1JlbW92ZSk7XG4gIH0pO1xuXG4gIC8vIFJlbW92ZSBidXR0dG9uXG4gIGJ1dHRvbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGJ1dHRvbik7XG59O1xuXG4vLyBIZWxwZXIgbWV0aG9kIHRvIGF1dG9tYXRpY2FsbHkgYXR0YWNoIHRoZSBldmVudCBsaXN0ZW5lciB0byBhbGwgdGhlIGV4cGFuZGFibGVzIG9uIHBhZ2UgbG9hZFxuZXhwb3J0IGNvbnN0IHRpbWVsaW5lcyA9ICh7XG4gIHNlbGVjdG9yID0gJy5lY2wtdGltZWxpbmUnLFxuICBidXR0b25TZWxlY3RvciA9ICcuZWNsLXRpbWVsaW5lX19idXR0b24nLFxuICBoaWRkZW5FbGVtZW50c1NlbGVjdG9yID0gJy5lY2wtdGltZWxpbmVfX2l0ZW0tLW92ZXItbGltaXQnLFxuICBjbGFzc1RvUmVtb3ZlID0gJ2VjbC10aW1lbGluZV9faXRlbS0tb3Zlci1saW1pdCcsXG4gIGNvbnRleHQgPSBkb2N1bWVudCxcbn0gPSB7fSkgPT4ge1xuICBjb25zdCBub2Rlc0FycmF5ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoXG4gICAgY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKVxuICApO1xuXG4gIG5vZGVzQXJyYXkuZm9yRWFjaChub2RlID0+IHtcbiAgICBjb25zdCBidXR0b24gPSBjb250ZXh0LnF1ZXJ5U2VsZWN0b3IoYnV0dG9uU2VsZWN0b3IpO1xuXG4gICAgaWYgKGJ1dHRvbikge1xuICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgICAgZXhwYW5kVGltZWxpbmUobm9kZSwgYnV0dG9uLCB7IGNsYXNzVG9SZW1vdmUsIGhpZGRlbkVsZW1lbnRzU2VsZWN0b3IgfSlcbiAgICAgICk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRpbWVsaW5lcztcbiIsIi8qKlxuICogVGltZWxpbmVcbiAqL1xuXG5leHBvcnQgKiBmcm9tICdAZWNsL2dlbmVyaWMtY29tcG9uZW50LXRpbWVsaW5lJztcbiIsIi8vIEV4cG9ydCBjb21wb25lbnRzXG5cbmV4cG9ydCAqIGZyb20gJ0BlY2wvZWMtY29tcG9uZW50LWFjY29yZGlvbic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1jYXJvdXNlbCc7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1jb250ZXh0LW5hdic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1kcm9wZG93bic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1kaWFsb2cnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9lYy1jb21wb25lbnQtZXhwYW5kYWJsZSc7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1mb3JtLWZpbGUtdXBsb2FkJztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZWMtY29tcG9uZW50LWxhbmctc2VsZWN0LXBhZ2UnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9lYy1jb21wb25lbnQtbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1pbnBhZ2UtbmF2aWdhdGlvbic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC1uYXZpZ2F0aW9uLW1lbnUnO1xuZXhwb3J0ICogZnJvbSAnQGVjbC9lYy1jb21wb25lbnQtc2lkZS1uYXZpZ2F0aW9uJztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZWMtY29tcG9uZW50LXRhYmxlJztcbmV4cG9ydCAqIGZyb20gJ0BlY2wvZWMtY29tcG9uZW50LXRhYic7XG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLWNvbXBvbmVudC10aW1lbGluZSc7XG4iLCIvLyBFeHBvcnQgY29tcG9uZW50c1xuXG5leHBvcnQgKiBmcm9tICdAZWNsL2VjLXByZXNldC1mdWxsJztcbiJdLCJuYW1lcyI6WyJxdWVyeUFsbCIsInNlbGVjdG9yIiwiY29udGV4dCIsImRvY3VtZW50Iiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsImFjY29yZGlvbnMiLCJoZWFkZXJTZWxlY3RvciIsIndpbmRvdyIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFjY29yZGlvbkNvbnRhaW5lcnMiLCJoaWRlUGFuZWwiLCJ0YXJnZXQiLCJhY3RpdmVQYW5lbCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwic2hvd1BhbmVsIiwidG9nZ2xlUGFuZWwiLCJnaXZlSGVhZGVyRm9jdXMiLCJoZWFkZXJTZXQiLCJpIiwiZm9jdXMiLCJldmVudEhlYWRlckNsaWNrIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJldmVudEhlYWRlcktleWRvd24iLCJjdXJyZW50SGVhZGVyIiwiaXNNb2RpZmllcktleSIsIm1ldGFLZXkiLCJhbHRLZXkiLCJ0aGlzQ29udGFpbmVyIiwicGFyZW50Tm9kZSIsInRoZXNlSGVhZGVycyIsImN1cnJlbnRIZWFkZXJJbmRleCIsImluZGV4T2YiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJwcmV2aW91c0hlYWRlckluZGV4IiwibGVuZ3RoIiwibmV4dEhlYWRlckluZGV4IiwiYmluZEFjY29yZGlvbkV2ZW50cyIsImFjY29yZGlvbkNvbnRhaW5lciIsImFjY29yZGlvbkhlYWRlcnMiLCJmb3JFYWNoIiwiYWNjb3JkaW9uSGVhZGVyIiwiYWRkRXZlbnRMaXN0ZW5lciIsInVuYmluZEFjY29yZGlvbkV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkZXN0cm95IiwiaW5pdCIsIkZVTkNfRVJST1JfVEVYVCIsIk5BTiIsInN5bWJvbFRhZyIsInJlVHJpbSIsInJlSXNCYWRIZXgiLCJyZUlzQmluYXJ5IiwicmVJc09jdGFsIiwiZnJlZVBhcnNlSW50IiwicGFyc2VJbnQiLCJmcmVlR2xvYmFsIiwiYmFiZWxIZWxwZXJzLnR5cGVvZiIsImdsb2JhbCIsIk9iamVjdCIsImZyZWVTZWxmIiwic2VsZiIsInJvb3QiLCJGdW5jdGlvbiIsIm9iamVjdFByb3RvIiwicHJvdG90eXBlIiwib2JqZWN0VG9TdHJpbmciLCJ0b1N0cmluZyIsIm5hdGl2ZU1heCIsIk1hdGgiLCJtYXgiLCJuYXRpdmVNaW4iLCJtaW4iLCJub3ciLCJEYXRlIiwiZGVib3VuY2UiLCJmdW5jIiwid2FpdCIsIm9wdGlvbnMiLCJsYXN0QXJncyIsImxhc3RUaGlzIiwibWF4V2FpdCIsInJlc3VsdCIsInRpbWVySWQiLCJsYXN0Q2FsbFRpbWUiLCJsYXN0SW52b2tlVGltZSIsImxlYWRpbmciLCJtYXhpbmciLCJ0cmFpbGluZyIsIlR5cGVFcnJvciIsInRvTnVtYmVyIiwiaXNPYmplY3QiLCJpbnZva2VGdW5jIiwidGltZSIsImFyZ3MiLCJ0aGlzQXJnIiwidW5kZWZpbmVkIiwiYXBwbHkiLCJsZWFkaW5nRWRnZSIsInNldFRpbWVvdXQiLCJ0aW1lckV4cGlyZWQiLCJyZW1haW5pbmdXYWl0IiwidGltZVNpbmNlTGFzdENhbGwiLCJ0aW1lU2luY2VMYXN0SW52b2tlIiwic2hvdWxkSW52b2tlIiwidHJhaWxpbmdFZGdlIiwiY2FuY2VsIiwiY2xlYXJUaW1lb3V0IiwiZmx1c2giLCJkZWJvdW5jZWQiLCJpc0ludm9raW5nIiwiYXJndW1lbnRzIiwidmFsdWUiLCJ0eXBlIiwiaXNPYmplY3RMaWtlIiwiaXNTeW1ib2wiLCJvdGhlciIsInZhbHVlT2YiLCJyZXBsYWNlIiwiaXNCaW5hcnkiLCJ0ZXN0IiwiY2Fyb3VzZWxzIiwic2VsZWN0b3JJZCIsImN1cnJlbnRTbGlkZSIsImNhcm91c2VsIiwic2xpZGVzIiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRMaXN0SXRlbVdpZHRoIiwib2Zmc2V0V2lkdGgiLCJnb1RvU2xpZGUiLCJuIiwicmVtb3ZlIiwiYWRkIiwic2V0T2Zmc2V0IiwiaXRlbVdpZHRoIiwidHIiLCJzdHlsZSIsIk1velRyYW5zZm9ybSIsIm1zVHJhbnNmb3JtIiwiT1RyYW5zZm9ybSIsIldlYmtpdFRyYW5zZm9ybSIsInRyYW5zZm9ybSIsImFubm91bmNlQ3VycmVudFNsaWRlIiwidGV4dENvbnRlbnQiLCJzaG93SW1hZ2VJbmZvcm1hdGlvbiIsImluZm9BcmVhcyIsImFyZWEiLCJkaXNwbGF5IiwicHJldmlvdXNTbGlkZSIsIm5leHRTbGlkZSIsImFkZENhcm91c2VsQ29udHJvbHMiLCJuYXZDb250cm9scyIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInJlbW92ZUNhcm91c2VsQ29udHJvbHMiLCJjb250cm9scyIsInJlbW92ZUNoaWxkIiwiYWRkTGl2ZVJlZ2lvbiIsImxpdmVSZWdpb24iLCJyZW1vdmVMaXZlUmVnaW9uIiwiZGVib3VuY2VDYiIsImV4cGFuZENvbnRleHR1YWxOYXYiLCJjb250ZXh0dWFsTmF2IiwiYnV0dG9uIiwiY2xhc3NUb1JlbW92ZSIsImhpZGRlbkVsZW1lbnRzU2VsZWN0b3IiLCJoaWRkZW5FbGVtZW50cyIsImVsZW1lbnQiLCJjb250ZXh0dWFsTmF2cyIsImJ1dHRvblNlbGVjdG9yIiwibm9kZXNBcnJheSIsIm5vZGUiLCJjb250YWlucyIsImNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIiwiZHJvcGRvd24iLCJkcm9wZG93bnNBcnJheSIsIkFycmF5IiwiaXNJbnNpZGUiLCJkcm9wZG93blNlbGVjdGlvbiIsImV2ZW50IiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bkJvZHkiLCJkaWFsb2dzIiwidHJpZ2dlckVsZW1lbnRzU2VsZWN0b3IiLCJkaWFsb2dXaW5kb3dJZCIsImRpYWxvZ092ZXJsYXlJZCIsInRyaWdnZXJFbGVtZW50cyIsImRpYWxvZ1dpbmRvdyIsImRpYWxvZ092ZXJsYXkiLCJib2R5IiwiZm9jdXNhYmxlRWxlbWVudHMiLCJmb2N1c2VkRWxCZWZvcmVPcGVuIiwiZmlyc3RGb2N1c2FibGVFbGVtZW50IiwibGFzdEZvY3VzYWJsZUVsZW1lbnQiLCJjbG9zZSIsImhhbmRsZUtleURvd24iLCJLRVlfVEFCIiwiS0VZX0VTQyIsImhhbmRsZUJhY2t3YXJkVGFiIiwiYWN0aXZlRWxlbWVudCIsImhhbmRsZUZvcndhcmRUYWIiLCJzaGlmdEtleSIsIm9wZW4iLCJiaW5kRGlhbG9nRXZlbnRzIiwiZWxlbWVudHMiLCJ1bmJpbmREaWFsb2dFdmVudHMiLCJ0b2dnbGVFeHBhbmRhYmxlIiwidG9nZ2xlRWxlbWVudCIsImZvcmNlQ2xvc2UiLCJjbG9zZVNpYmxpbmdzIiwic2libGluZ3NTZWxlY3RvciIsImlzRXhwYW5kZWQiLCJoYXNBdHRyaWJ1dGUiLCJzaWJsaW5nc0FycmF5IiwiZmlsdGVyIiwic2libGluZyIsImluaXRFeHBhbmRhYmxlcyIsImZpbGVVcGxvYWRzIiwiaW5wdXRTZWxlY3RvciIsInZhbHVlU2VsZWN0b3IiLCJicm93c2VTZWxlY3RvciIsImZpbGVVcGxvYWRDb250YWluZXJzIiwidXBkYXRlRmlsZU5hbWUiLCJmaWxlcyIsImZpbGVuYW1lIiwiZmlsZSIsIm5hbWUiLCJtZXNzYWdlRWxlbWVudCIsImV2ZW50VmFsdWVDaGFuZ2UiLCJmaWxlVXBsb2FkRWxlbWVudHMiLCJmaWxlVXBsb2FkRWxlbWVudCIsImV2ZW50QnJvd3NlS2V5ZG93biIsImlucHV0RWxlbWVudHMiLCJpbnB1dEVsZW1lbnQiLCJjbGljayIsImJpbmRGaWxlVXBsb2FkRXZlbnRzIiwiZmlsZVVwbG9hZENvbnRhaW5lciIsImZpbGVVcGxvYWRJbnB1dHMiLCJmaWxlVXBsb2FkSW5wdXQiLCJmaWxlVXBsb2FkQnJvd3NlcyIsImZpbGVVcGxvYWRCcm93c2UiLCJ1bmJpbmRGaWxlVXBsb2FkRXZlbnRzIiwiZWNsTGFuZ1NlbGVjdFBhZ2VzIiwidG9nZ2xlQ2xhc3MiLCJsaXN0U2VsZWN0b3IiLCJkcm9wZG93blNlbGVjdG9yIiwiZHJvcGRvd25PbkNoYW5nZSIsImxhbmdTZWxlY3RQYWdlc0NvbnRhaW5lcnMiLCJ0b2dnbGUiLCJsc3AiLCJvZmZzZXRMZWZ0IiwiZGlzbWlzc01lc3NhZ2UiLCJtZXNzYWdlIiwiaW5pdE1lc3NhZ2VzIiwic2VsZWN0b3JDbGFzcyIsIm1lc3NhZ2VzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInBhcmVudEVsZW1lbnQiLCJ0IiwiZGVmaW5lIiwiYW1kIiwibW9kdWxlIiwidGhpcyIsIm8iLCJyIiwiYSIsImMiLCJsIiwicyIsInUiLCJmIiwic2VsZWN0b3JIZWFkZXIiLCJjb250YWluZXIiLCJvZmZzZXQiLCJhY3RpdmVDbGFzcyIsInNjcm9sbERlbGF5IiwiY2FsbGJhY2siLCJkIiwiaGFzT3duUHJvcGVydHkiLCJ2IiwibSIsInNjcm9sbEhlaWdodCIsIm9mZnNldEhlaWdodCIsImNsaWVudEhlaWdodCIsImciLCJoIiwib2Zmc2V0UGFyZW50Iiwib2Zmc2V0VG9wIiwicCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImxlZnQiLCJib3R0b20iLCJpbm5lckhlaWdodCIsInJpZ2h0IiwiaW5uZXJXaWR0aCIsImNsaWVudFdpZHRoIiwieSIsInNvcnQiLCJkaXN0YW5jZSIsInNldERpc3RhbmNlcyIsImIiLCJoYXNoIiwicHVzaCIsIm5hdiIsInBhcmVudCIsInRhZ05hbWUiLCJ0b0xvd2VyQ2FzZSIsIkgiLCJDIiwiZ2V0Q3VycmVudE5hdiIsInBhZ2VZT2Zmc2V0IiwiTCIsImoiLCJFIiwibmF2aWdhdGlvbklucGFnZXMiLCJzdGlja3lTZWxlY3RvciIsInNweVNlbGVjdG9yIiwic3B5Q2xhc3MiLCJzcHlBY3RpdmVDb250YWluZXIiLCJzcHlUcmlnZ2VyIiwic3B5T2Zmc2V0IiwidG9nZ2xlU2VsZWN0b3IiLCJsaW5rc1NlbGVjdG9yIiwic3RpY2t5SW5zdGFuY2UiLCJpbml0U3RpY2t5IiwiU3RpY2t5ZmlsbCIsIlN0aWNreSIsImRlc3Ryb3lTdGlja3kiLCJpbml0U2Nyb2xsU3B5IiwiaW5wYWdlTmF2RWxlbWVudCIsImd1bXNob2UiLCJuYXZpZ2F0aW9uVGl0bGUiLCJkZXN0cm95U2Nyb2xsU3B5IiwibmF2TGlua3MiLCJsaW5rIiwib25DbGljayIsIm1lbnUiLCJoYXNQb3B1cCIsIm9uS2V5ZG93biIsImN1cnJlbnRUYWIiLCJwcmV2aW91c1RhYkl0ZW0iLCJwcmV2aW91c0VsZW1lbnRTaWJsaW5nIiwibGFzdEVsZW1lbnRDaGlsZCIsIm5leHRUYWJJdGVtIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiZmlyc3RFbGVtZW50Q2hpbGQiLCJtZWdhbWVudSIsImxpbmtTZWxlY3RvciIsIm1lZ2FtZW51c0FycmF5IiwiU3RpY2t5Yml0cyIsIm9iaiIsInZlcnNpb24iLCJ1c2VyQWdlbnQiLCJuYXZpZ2F0b3IiLCJwcm9wcyIsImN1c3RvbVN0aWNreUNoYW5nZU51bWJlciIsIm5vU3R5bGVzIiwic3RpY2t5Qml0U3RpY2t5T2Zmc2V0IiwicGFyZW50Q2xhc3MiLCJzY3JvbGxFbCIsInN0aWNreUNsYXNzIiwic3R1Y2tDbGFzcyIsInN0aWNreUNoYW5nZUNsYXNzIiwidXNlU3RpY2t5Q2xhc3NlcyIsInZlcnRpY2FsUG9zaXRpb24iLCJwb3NpdGlvblZhbCIsImRlZmluZVBvc2l0aW9uIiwidnAiLCJucyIsInB2IiwiZWxzIiwiaW5zdGFuY2VzIiwiZWwiLCJzdHlsZXMiLCJwb3NpdGlvbiIsImluc3RhbmNlIiwiYWRkSW5zdGFuY2UiLCJwcmVmaXgiLCJoZWFkIiwic3RpY2t5UHJvcCIsIl90aGlzIiwiaXRlbSIsImlzV2luIiwic2UiLCJnZXRDbG9zZXN0UGFyZW50IiwiY29tcHV0ZVNjcm9sbE9mZnNldHMiLCJzdGF0ZSIsInN0YXRlQ29udGFpbmVyIiwibWFuYWdlU3RhdGUiLCJtYXRjaCIsIml0IiwiaXNDdXN0b20iLCJpc0JvdHRvbSIsInNjcm9sbEVsT2Zmc2V0Iiwic3RpY2t5U3RhcnQiLCJzdGlja3lDaGFuZ2VPZmZzZXQiLCJzdGlja3lDaGFuZ2UiLCJzdGlja3lTdG9wIiwidG9nZ2xlQ2xhc3NlcyIsImNBcnJheSIsInNwbGl0Iiwickl0ZW0iLCJzcGxpY2UiLCJqb2luIiwic3RhcnQiLCJjaGFuZ2UiLCJzdG9wIiwic3RsIiwic3RpY2t5Iiwic3R1Y2siLCJyQUZTdHViIiwickFGRHVtbXkiLCJyQUYiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ3ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtc1JlcXVlc3RBbmltYXRpb25GcmFtZSIsInRDIiwic2Nyb2xsIiwic2Nyb2xsWSIsInNjcm9sbFRvcCIsIm5vdFN0aWNreSIsImlzU3RpY2t5IiwiaXNTdHVjayIsImlzU3RpY2t5Q2hhbmdlIiwiaXNOb3RTdGlja3lDaGFuZ2UiLCJzdHViIiwicmVtb3ZlSW5zdGFuY2UiLCJjbGVhbnVwIiwic3RpY2t5Yml0cyIsIm5hdmlnYXRpb25TaWRlIiwiYWN0aXZlU2VsZWN0b3IiLCJzY3JvbGxUb1RvcCIsInN1YnN0cmluZyIsInNjcm9sbEludG9WaWV3IiwidW5mb2xkVG9BY3RpdmUiLCJhY3RpdmUiLCJtYXRjaGVzIiwiZWNsVGFibGVzIiwidGFibGVzIiwiaGVhZGVyVGV4dCIsInRleHRDb2xzcGFuIiwiY2kiLCJjbiIsInRhYmxlUm93cyIsInRhYmxlIiwiaGVhZGVycyIsImhlYWRGaXJzdCIsImNlbGxQZXJSb3ciLCJjb2xzcGFuSW5kZXgiLCJyb3ciLCJjZWxsIiwidGFicyIsInRhYmxpc3RTZWxlY3RvciIsInRhYnBhbmVsU2VsZWN0b3IiLCJ0YWJlbGVtZW50c1NlbGVjdG9yIiwidGFiQ29udGFpbmVycyIsInNob3dUYWIiLCJnaXZlRm9jdXMiLCJzaWJsaW5nVGFicyIsInNpYmxpbmdUYWJwYW5lbHMiLCJ0YWIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJ0YWJwYW5lbCIsImV2ZW50VGFiQ2xpY2siLCJldmVudFRhYktleWRvd24iLCJiaW5kVGFic0V2ZW50cyIsInRhYkNvbnRhaW5lciIsInRhYnNFbGVtZW50cyIsInVuYmluZFRhYnNFdmVudHMiLCJleHBhbmRUaW1lbGluZSIsInRpbWVsaW5lIiwidGltZWxpbmVzIl0sIm1hcHBpbmdzIjoiOzs7OztFQUFBO0FBQ0EsRUFBTyxJQUFNQSxXQUFXLFNBQVhBLFFBQVcsQ0FBQ0MsUUFBRDtFQUFBLE1BQVdDLE9BQVgsdUVBQXFCQyxRQUFyQjtFQUFBLFNBQ3RCLEdBQUdDLEtBQUgsQ0FBU0MsSUFBVCxDQUFjSCxRQUFRSSxnQkFBUixDQUF5QkwsUUFBekIsQ0FBZCxDQURzQjtFQUFBLENBQWpCOztFQ0RQOztFQUlBOzs7QUFHQSxNQUFhTSxhQUFhLFNBQWJBLFVBQWEsR0FHZjtFQUFBLGlGQUFQLEVBQU87RUFBQSwyQkFGVE4sUUFFUztFQUFBLE1BRkNBLFFBRUQsaUNBRlksZ0JBRVo7RUFBQSxpQ0FEVE8sY0FDUztFQUFBLE1BRE9BLGNBQ1AsdUNBRHdCLHdCQUN4Qjs7RUFDVDtFQUNBLE1BQ0UsRUFBRSxtQkFBbUJMLFFBQXJCLEtBQ0EsRUFBRSxzQkFBc0JNLE1BQXhCLENBREEsSUFFQSxDQUFDTixTQUFTTyxlQUFULENBQXlCQyxTQUg1QixFQUtFLE9BQU8sSUFBUDs7RUFFRjtFQUNBO0VBQ0EsTUFBTUMsc0JBQXNCWixTQUFTQyxRQUFULENBQTVCOztFQUVBO0VBQ0EsV0FBU1ksU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkI7RUFDekI7RUFDQSxRQUFNQyxjQUFjWixTQUFTYSxjQUFULENB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
