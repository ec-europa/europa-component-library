var fractal = (function (exports,$) {
  'use strict';

  $ = $ && $.hasOwnProperty('default') ? $['default'] : $;

  // Query helper

  // Heavily inspired by the accordion component from https://github.com/frend/frend.co

  var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = _typeof(commonjsGlobal) == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

  /** Detect free variable `self`. */
  var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /**
   * Contextual navigation scripts
   */

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

  /* eslint-disable no-param-reassign */

  var toggleExpandable = function toggleExpandable(toggleElement) {
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$context = _ref.context,
        context = _ref$context === undefined ? document : _ref$context,
        _ref$forceClose = _ref.forceClose,
        forceClose = _ref$forceClose === undefined ? false : _ref$forceClose,
        _ref$closeSiblings = _ref.closeSiblings,
        closeSiblings = _ref$closeSiblings === undefined ? false : _ref$closeSiblings,
        _ref$siblingsSelector = _ref.siblingsSelector,
        siblingsSelector = _ref$siblingsSelector === undefined ? '[aria-controls][aria-expanded]' : _ref$siblingsSelector;

    if (!toggleElement) {
      return;
    }

    // Get target element
    var target = document.getElementById(toggleElement.getAttribute('aria-controls'));

    // Exit if no target found
    if (!target) {
      return;
    }

    // Get current status
    var isExpanded = forceClose === true || toggleElement.getAttribute('aria-expanded') === 'true';

    // Toggle the expandable/collapsible
    toggleElement.setAttribute('aria-expanded', !isExpanded);
    target.setAttribute('aria-hidden', isExpanded);

    // Toggle label if possible
    if (!isExpanded && toggleElement.hasAttribute('data-label-expanded')) {
      toggleElement.innerHTML = toggleElement.getAttribute('data-label-expanded');
    } else if (isExpanded && toggleElement.hasAttribute('data-label-collapsed')) {
      toggleElement.innerHTML = toggleElement.getAttribute('data-label-collapsed');
    }

    // Close siblings if requested
    if (closeSiblings === true) {
      var siblingsArray = Array.prototype.slice.call(context.querySelectorAll(siblingsSelector)).filter(function (sibling) {
        return sibling !== toggleElement;
      });

      siblingsArray.forEach(function (sibling) {
        toggleExpandable(sibling, {
          context: context,
          forceClose: true
        });
      });
    }
  };

  // Helper method to automatically attach the event listener to all the expandables on page load
  var initExpandables = function initExpandables(selector) {
    var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;

    // Exit if no selector was provided
    if (!selector) return;

    var nodesArray = Array.prototype.slice.call(context.querySelectorAll(selector));

    nodesArray.forEach(function (node) {
      return node.addEventListener('click', function (e) {
        toggleExpandable(node, { context: context });
        e.preventDefault();
      });
    });
  };

  /**
   * File uploads related behaviors.
   */

  /*
   * Messages behavior
   */

  /*
   * Messages behavior
   */

  var stickyfill = createCommonjsModule(function (module) {
  (function (window, document) {

          /*
           * 1. Check if the browser supports `position: sticky` natively or is too old to run the polyfill.
           *    If either of these is the case set `seppuku` flag. It will be checked later to disable key features
           *    of the polyfill, but the API will remain functional to avoid breaking things.
           */

          var _createClass = function () {
              function defineProperties(target, props) {
                  for (var i = 0; i < props.length; i++) {
                      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                  }
              }return function (Constructor, protoProps, staticProps) {
                  if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
              };
          }();

          function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                  throw new TypeError("Cannot call a class as a function");
              }
          }

          var seppuku = false;

          var isWindowDefined = typeof window !== 'undefined';

          // The polyfill can’t function properly without `window` or `window.getComputedStyle`.
          if (!isWindowDefined || !window.getComputedStyle) seppuku = true;
          // Dont’t get in a way if the browser supports `position: sticky` natively.
          else {
                  (function () {
                      var testNode = document.createElement('div');

                      if (['', '-webkit-', '-moz-', '-ms-'].some(function (prefix) {
                          try {
                              testNode.style.position = prefix + 'sticky';
                          } catch (e) {}

                          return testNode.style.position != '';
                      })) seppuku = true;
                  })();
              }

          /*
           * 2. “Global” vars used across the polyfill
           */
          var isInitialized = false;

          // Check if Shadow Root constructor exists to make further checks simpler
          var shadowRootExists = typeof ShadowRoot !== 'undefined';

          // Last saved scroll position
          var scroll = {
              top: null,
              left: null
          };

          // Array of created Sticky instances
          var stickies = [];

          /*
           * 3. Utility functions
           */
          function extend(targetObj, sourceObject) {
              for (var key in sourceObject) {
                  if (sourceObject.hasOwnProperty(key)) {
                      targetObj[key] = sourceObject[key];
                  }
              }
          }

          function parseNumeric(val) {
              return parseFloat(val) || 0;
          }

          function getDocOffsetTop(node) {
              var docOffsetTop = 0;

              while (node) {
                  docOffsetTop += node.offsetTop;
                  node = node.offsetParent;
              }

              return docOffsetTop;
          }

          /*
           * 4. Sticky class
           */

          var Sticky = function () {
              function Sticky(node) {
                  _classCallCheck(this, Sticky);

                  if (!(node instanceof HTMLElement)) throw new Error('First argument must be HTMLElement');
                  if (stickies.some(function (sticky) {
                      return sticky._node === node;
                  })) throw new Error('Stickyfill is already applied to this node');

                  this._node = node;
                  this._stickyMode = null;
                  this._active = false;

                  stickies.push(this);

                  this.refresh();
              }

              _createClass(Sticky, [{
                  key: 'refresh',
                  value: function refresh() {
                      if (seppuku || this._removed) return;
                      if (this._active) this._deactivate();

                      var node = this._node;

                      /*
                       * 1. Save node computed props
                       */
                      var nodeComputedStyle = getComputedStyle(node);
                      var nodeComputedProps = {
                          position: nodeComputedStyle.position,
                          top: nodeComputedStyle.top,
                          display: nodeComputedStyle.display,
                          marginTop: nodeComputedStyle.marginTop,
                          marginBottom: nodeComputedStyle.marginBottom,
                          marginLeft: nodeComputedStyle.marginLeft,
                          marginRight: nodeComputedStyle.marginRight,
                          cssFloat: nodeComputedStyle.cssFloat
                      };

                      /*
                       * 2. Check if the node can be activated
                       */
                      if (isNaN(parseFloat(nodeComputedProps.top)) || nodeComputedProps.display == 'table-cell' || nodeComputedProps.display == 'none') return;

                      this._active = true;

                      /*
                       * 3. Check if the current node position is `sticky`. If it is, it means that the browser supports sticky positioning,
                       *    but the polyfill was force-enabled. We set the node’s position to `static` before continuing, so that the node
                       *    is in it’s initial position when we gather its params.
                       */
                      var originalPosition = node.style.position;
                      if (nodeComputedStyle.position == 'sticky' || nodeComputedStyle.position == '-webkit-sticky') node.style.position = 'static';

                      /*
                       * 4. Get necessary node parameters
                       */
                      var referenceNode = node.parentNode;
                      var parentNode = shadowRootExists && referenceNode instanceof ShadowRoot ? referenceNode.host : referenceNode;
                      var nodeWinOffset = node.getBoundingClientRect();
                      var parentWinOffset = parentNode.getBoundingClientRect();
                      var parentComputedStyle = getComputedStyle(parentNode);

                      this._parent = {
                          node: parentNode,
                          styles: {
                              position: parentNode.style.position
                          },
                          offsetHeight: parentNode.offsetHeight
                      };
                      this._offsetToWindow = {
                          left: nodeWinOffset.left,
                          right: document.documentElement.clientWidth - nodeWinOffset.right
                      };
                      this._offsetToParent = {
                          top: nodeWinOffset.top - parentWinOffset.top - parseNumeric(parentComputedStyle.borderTopWidth),
                          left: nodeWinOffset.left - parentWinOffset.left - parseNumeric(parentComputedStyle.borderLeftWidth),
                          right: -nodeWinOffset.right + parentWinOffset.right - parseNumeric(parentComputedStyle.borderRightWidth)
                      };
                      this._styles = {
                          position: originalPosition,
                          top: node.style.top,
                          bottom: node.style.bottom,
                          left: node.style.left,
                          right: node.style.right,
                          width: node.style.width,
                          marginTop: node.style.marginTop,
                          marginLeft: node.style.marginLeft,
                          marginRight: node.style.marginRight
                      };

                      var nodeTopValue = parseNumeric(nodeComputedProps.top);
                      this._limits = {
                          start: nodeWinOffset.top + window.pageYOffset - nodeTopValue,
                          end: parentWinOffset.top + window.pageYOffset + parentNode.offsetHeight - parseNumeric(parentComputedStyle.borderBottomWidth) - node.offsetHeight - nodeTopValue - parseNumeric(nodeComputedProps.marginBottom)
                      };

                      /*
                       * 5. Ensure that the node will be positioned relatively to the parent node
                       */
                      var parentPosition = parentComputedStyle.position;

                      if (parentPosition != 'absolute' && parentPosition != 'relative') {
                          parentNode.style.position = 'relative';
                      }

                      /*
                       * 6. Recalc node position.
                       *    It’s important to do this before clone injection to avoid scrolling bug in Chrome.
                       */
                      this._recalcPosition();

                      /*
                       * 7. Create a clone
                       */
                      var clone = this._clone = {};
                      clone.node = document.createElement('div');

                      // Apply styles to the clone
                      extend(clone.node.style, {
                          width: nodeWinOffset.right - nodeWinOffset.left + 'px',
                          height: nodeWinOffset.bottom - nodeWinOffset.top + 'px',
                          marginTop: nodeComputedProps.marginTop,
                          marginBottom: nodeComputedProps.marginBottom,
                          marginLeft: nodeComputedProps.marginLeft,
                          marginRight: nodeComputedProps.marginRight,
                          cssFloat: nodeComputedProps.cssFloat,
                          padding: 0,
                          border: 0,
                          borderSpacing: 0,
                          fontSize: '1em',
                          position: 'static'
                      });

                      referenceNode.insertBefore(clone.node, node);
                      clone.docOffsetTop = getDocOffsetTop(clone.node);
                  }
              }, {
                  key: '_recalcPosition',
                  value: function _recalcPosition() {
                      if (!this._active || this._removed) return;

                      var stickyMode = scroll.top <= this._limits.start ? 'start' : scroll.top >= this._limits.end ? 'end' : 'middle';

                      if (this._stickyMode == stickyMode) return;

                      switch (stickyMode) {
                          case 'start':
                              extend(this._node.style, {
                                  position: 'absolute',
                                  left: this._offsetToParent.left + 'px',
                                  right: this._offsetToParent.right + 'px',
                                  top: this._offsetToParent.top + 'px',
                                  bottom: 'auto',
                                  width: 'auto',
                                  marginLeft: 0,
                                  marginRight: 0,
                                  marginTop: 0
                              });
                              break;

                          case 'middle':
                              extend(this._node.style, {
                                  position: 'fixed',
                                  left: this._offsetToWindow.left + 'px',
                                  right: this._offsetToWindow.right + 'px',
                                  top: this._styles.top,
                                  bottom: 'auto',
                                  width: 'auto',
                                  marginLeft: 0,
                                  marginRight: 0,
                                  marginTop: 0
                              });
                              break;

                          case 'end':
                              extend(this._node.style, {
                                  position: 'absolute',
                                  left: this._offsetToParent.left + 'px',
                                  right: this._offsetToParent.right + 'px',
                                  top: 'auto',
                                  bottom: 0,
                                  width: 'auto',
                                  marginLeft: 0,
                                  marginRight: 0
                              });
                              break;
                      }

                      this._stickyMode = stickyMode;
                  }
              }, {
                  key: '_fastCheck',
                  value: function _fastCheck() {
                      if (!this._active || this._removed) return;

                      if (Math.abs(getDocOffsetTop(this._clone.node) - this._clone.docOffsetTop) > 1 || Math.abs(this._parent.node.offsetHeight - this._parent.offsetHeight) > 1) this.refresh();
                  }
              }, {
                  key: '_deactivate',
                  value: function _deactivate() {
                      var _this = this;

                      if (!this._active || this._removed) return;

                      this._clone.node.parentNode.removeChild(this._clone.node);
                      delete this._clone;

                      extend(this._node.style, this._styles);
                      delete this._styles;

                      // Check whether element’s parent node is used by other stickies.
                      // If not, restore parent node’s styles.
                      if (!stickies.some(function (sticky) {
                          return sticky !== _this && sticky._parent && sticky._parent.node === _this._parent.node;
                      })) {
                          extend(this._parent.node.style, this._parent.styles);
                      }
                      delete this._parent;

                      this._stickyMode = null;
                      this._active = false;

                      delete this._offsetToWindow;
                      delete this._offsetToParent;
                      delete this._limits;
                  }
              }, {
                  key: 'remove',
                  value: function remove() {
                      var _this2 = this;

                      this._deactivate();

                      stickies.some(function (sticky, index) {
                          if (sticky._node === _this2._node) {
                              stickies.splice(index, 1);
                              return true;
                          }
                      });

                      this._removed = true;
                  }
              }]);

              return Sticky;
          }();

          /*
           * 5. Stickyfill API
           */

          var Stickyfill = {
              stickies: stickies,
              Sticky: Sticky,

              forceSticky: function forceSticky() {
                  seppuku = false;
                  init();

                  this.refreshAll();
              },
              addOne: function addOne(node) {
                  // Check whether it’s a node
                  if (!(node instanceof HTMLElement)) {
                      // Maybe it’s a node list of some sort?
                      // Take first node from the list then
                      if (node.length && node[0]) node = node[0];else return;
                  }

                  // Check if Stickyfill is already applied to the node
                  // and return existing sticky
                  for (var i = 0; i < stickies.length; i++) {
                      if (stickies[i]._node === node) return stickies[i];
                  }

                  // Create and return new sticky
                  return new Sticky(node);
              },
              add: function add(nodeList) {
                  // If it’s a node make an array of one node
                  if (nodeList instanceof HTMLElement) nodeList = [nodeList];
                  // Check if the argument is an iterable of some sort
                  if (!nodeList.length) return;

                  // Add every element as a sticky and return an array of created Sticky instances
                  var addedStickies = [];

                  var _loop = function _loop(i) {
                      var node = nodeList[i];

                      // If it’s not an HTMLElement – create an empty element to preserve 1-to-1
                      // correlation with input list
                      if (!(node instanceof HTMLElement)) {
                          addedStickies.push(void 0);
                          return 'continue';
                      }

                      // If Stickyfill is already applied to the node
                      // add existing sticky
                      if (stickies.some(function (sticky) {
                          if (sticky._node === node) {
                              addedStickies.push(sticky);
                              return true;
                          }
                      })) return 'continue';

                      // Create and add new sticky
                      addedStickies.push(new Sticky(node));
                  };

                  for (var i = 0; i < nodeList.length; i++) {
                      var _ret2 = _loop(i);

                      if (_ret2 === 'continue') continue;
                  }

                  return addedStickies;
              },
              refreshAll: function refreshAll() {
                  stickies.forEach(function (sticky) {
                      return sticky.refresh();
                  });
              },
              removeOne: function removeOne(node) {
                  // Check whether it’s a node
                  if (!(node instanceof HTMLElement)) {
                      // Maybe it’s a node list of some sort?
                      // Take first node from the list then
                      if (node.length && node[0]) node = node[0];else return;
                  }

                  // Remove the stickies bound to the nodes in the list
                  stickies.some(function (sticky) {
                      if (sticky._node === node) {
                          sticky.remove();
                          return true;
                      }
                  });
              },
              remove: function remove(nodeList) {
                  // If it’s a node make an array of one node
                  if (nodeList instanceof HTMLElement) nodeList = [nodeList];
                  // Check if the argument is an iterable of some sort
                  if (!nodeList.length) return;

                  // Remove the stickies bound to the nodes in the list

                  var _loop2 = function _loop2(i) {
                      var node = nodeList[i];

                      stickies.some(function (sticky) {
                          if (sticky._node === node) {
                              sticky.remove();
                              return true;
                          }
                      });
                  };

                  for (var i = 0; i < nodeList.length; i++) {
                      _loop2(i);
                  }
              },
              removeAll: function removeAll() {
                  while (stickies.length) {
                      stickies[0].remove();
                  }
              }
          };

          /*
           * 6. Setup events (unless the polyfill was disabled)
           */
          function init() {
              if (isInitialized) {
                  return;
              }

              isInitialized = true;

              // Watch for scroll position changes and trigger recalc/refresh if needed
              function checkScroll() {
                  if (window.pageXOffset != scroll.left) {
                      scroll.top = window.pageYOffset;
                      scroll.left = window.pageXOffset;

                      Stickyfill.refreshAll();
                  } else if (window.pageYOffset != scroll.top) {
                      scroll.top = window.pageYOffset;
                      scroll.left = window.pageXOffset;

                      // recalc position for all stickies
                      stickies.forEach(function (sticky) {
                          return sticky._recalcPosition();
                      });
                  }
              }

              checkScroll();
              window.addEventListener('scroll', checkScroll);

              // Watch for window resizes and device orientation changes and trigger refresh
              window.addEventListener('resize', Stickyfill.refreshAll);
              window.addEventListener('orientationchange', Stickyfill.refreshAll);

              //Fast dirty check for layout changes every 500ms
              var fastCheckTimer = void 0;

              function startFastCheckTimer() {
                  fastCheckTimer = setInterval(function () {
                      stickies.forEach(function (sticky) {
                          return sticky._fastCheck();
                      });
                  }, 500);
              }

              function stopFastCheckTimer() {
                  clearInterval(fastCheckTimer);
              }

              var docHiddenKey = void 0;
              var visibilityChangeEventName = void 0;

              if ('hidden' in document) {
                  docHiddenKey = 'hidden';
                  visibilityChangeEventName = 'visibilitychange';
              } else if ('webkitHidden' in document) {
                  docHiddenKey = 'webkitHidden';
                  visibilityChangeEventName = 'webkitvisibilitychange';
              }

              if (visibilityChangeEventName) {
                  if (!document[docHiddenKey]) startFastCheckTimer();

                  document.addEventListener(visibilityChangeEventName, function () {
                      if (document[docHiddenKey]) {
                          stopFastCheckTimer();
                      } else {
                          startFastCheckTimer();
                      }
                  });
              } else startFastCheckTimer();
          }

          if (!seppuku) init();

          /*
           * 7. Expose Stickyfill
           */
          if ('object' != 'undefined' && module.exports) {
              module.exports = Stickyfill;
          } else if (isWindowDefined) {
              window.Stickyfill = Stickyfill;
          }
      })(window, document);
  });

  var gumshoe_min = createCommonjsModule(function (module, exports) {
    /*! gumshoejs v3.5.0 | (c) 2017 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/gumshoe */
    !function (e, t) {
      "function" == typeof undefined && undefined.amd ? undefined([], t(e)) : module.exports = t(e);
    }("undefined" != typeof commonjsGlobal ? commonjsGlobal : commonjsGlobal.window || commonjsGlobal.global, function (e) {
      var t,
          n,
          o,
          r,
          a,
          c,
          i,
          l = {},
          s = "querySelector" in document && "addEventListener" in e && "classList" in document.createElement("_"),
          u = [],
          f = { selector: "[data-gumshoe] a", selectorHeader: "[data-gumshoe-header]", container: e, offset: 0, activeClass: "active", scrollDelay: !1, callback: function callback() {} },
          d = function d(e, t, n) {
        if ("[object Object]" === Object.prototype.toString.call(e)) for (var o in e) {
          Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
        } else for (var r = 0, a = e.length; r < a; r++) {
          t.call(n, e[r], r, e);
        }
      },
          v = function v() {
        var e = {},
            t = !1,
            n = 0,
            o = arguments.length;"[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], n++);for (; n < o; n++) {
          var r = arguments[n];!function (n) {
            for (var o in n) {
              Object.prototype.hasOwnProperty.call(n, o) && (t && "[object Object]" === Object.prototype.toString.call(n[o]) ? e[o] = v(!0, e[o], n[o]) : e[o] = n[o]);
            }
          }(r);
        }return e;
      },
          m = function m(e) {
        return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight);
      },
          g = function g() {
        return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
      },
          h = function h(e) {
        var n = 0;if (e.offsetParent) do {
          n += e.offsetTop, e = e.offsetParent;
        } while (e);else n = e.offsetTop;return n = n - a - t.offset, n >= 0 ? n : 0;
      },
          p = function p(t) {
        var n = t.getBoundingClientRect();return n.top >= 0 && n.left >= 0 && n.bottom <= (e.innerHeight || document.documentElement.clientHeight) && n.right <= (e.innerWidth || document.documentElement.clientWidth);
      },
          y = function y() {
        u.sort(function (e, t) {
          return e.distance > t.distance ? -1 : e.distance < t.distance ? 1 : 0;
        });
      };l.setDistances = function () {
        o = g(), a = r ? m(r) + h(r) : 0, d(u, function (e) {
          e.distance = h(e.target);
        }), y();
      };var b = function b() {
        var e = document.querySelectorAll(t.selector);d(e, function (e) {
          if (e.hash) {
            var t = document.querySelector(e.hash);t && u.push({ nav: e, target: t, parent: "li" === e.parentNode.tagName.toLowerCase() ? e.parentNode : null, distance: 0 });
          }
        });
      },
          H = function H() {
        c && (c.nav.classList.remove(t.activeClass), c.parent && c.parent.classList.remove(t.activeClass));
      },
          C = function C(e) {
        H(), e.nav.classList.add(t.activeClass), e.parent && e.parent.classList.add(t.activeClass), t.callback(e), c = { nav: e.nav, parent: e.parent };
      };l.getCurrentNav = function () {
        var n = e.pageYOffset;if (e.innerHeight + n >= o && p(u[0].target)) return C(u[0]), u[0];for (var r = 0, a = u.length; r < a; r++) {
          var c = u[r];if (c.distance <= n) return C(c), c;
        }H(), t.callback();
      };var L = function L() {
        d(u, function (e) {
          e.nav.classList.contains(t.activeClass) && (c = { nav: e.nav, parent: e.parent });
        });
      };l.destroy = function () {
        t && (t.container.removeEventListener("resize", j, !1), t.container.removeEventListener("scroll", j, !1), u = [], t = null, n = null, o = null, r = null, a = null, c = null, i = null);
      };var E = function E(e) {
        window.clearTimeout(n), n = setTimeout(function () {
          l.setDistances(), l.getCurrentNav();
        }, 66);
      },
          j = function j(e) {
        n || (n = setTimeout(function () {
          n = null, "scroll" === e.type && l.getCurrentNav(), "resize" === e.type && (l.setDistances(), l.getCurrentNav());
        }, 66));
      };return l.init = function (e) {
        s && (l.destroy(), t = v(f, e || {}), r = document.querySelector(t.selectorHeader), b(), 0 !== u.length && (L(), l.setDistances(), l.getCurrentNav(), t.container.addEventListener("resize", j, !1), t.scrollDelay ? t.container.addEventListener("scroll", E, !1) : t.container.addEventListener("scroll", j, !1)));
      }, l;
    });
  });

  /* eslint-disable no-param-reassign */

  /**
   * Navigation inpage related behaviors.
   */

  /**
    stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
    @version v3.6.5
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
    - scrollEl = window || DOM element selector || DOM element
    - stickyClass = 'string'
    - stuckClass = 'string'
    - useStickyClasses = boolean
    - useFixed = boolean
    - useGetBoundingClientRect = boolean
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
    - .getTopPosition = gets the element top pixel position from the viewport
    - .computeScrollOffsets = computes scroll position
    - .toggleClasses = older browser toggler
    - .manageState = manages sticky state
    - .removeClass = older browser support class remover
    - .removeInstance = removes an instance
    - .cleanup = removes all Stickybits instances and cleans up dom from stickybits
  */
  var Stickybits =
  /*#__PURE__*/
  function () {
    function Stickybits(target, obj) {
      var o = typeof obj !== 'undefined' ? obj : {};
      this.version = '3.6.5';
      this.userAgent = window.navigator.userAgent || 'no `userAgent` provided by the browser';
      this.props = {
        customStickyChangeNumber: o.customStickyChangeNumber || null,
        noStyles: o.noStyles || false,
        stickyBitStickyOffset: o.stickyBitStickyOffset || 0,
        parentClass: o.parentClass || 'js-stickybit-parent',
        scrollEl: typeof o.scrollEl === 'string' ? document.querySelector(o.scrollEl) : o.scrollEl || window,
        stickyClass: o.stickyClass || 'js-is-sticky',
        stuckClass: o.stuckClass || 'js-is-stuck',
        stickyChangeClass: o.stickyChangeClass || 'js-is-sticky--change',
        useStickyClasses: o.useStickyClasses || false,
        useFixed: o.useFixed || false,
        useGetBoundingClientRect: o.useGetBoundingClientRect || false,
        verticalPosition: o.verticalPosition || 'top'
        /*
          define positionVal
          ----
          -  uses a computed (`.definePosition()`)
          -  defined the position
        */

      };
      this.props.positionVal = this.definePosition() || 'fixed';
      this.instances = [];
      var _this$props = this.props,
          positionVal = _this$props.positionVal,
          verticalPosition = _this$props.verticalPosition,
          noStyles = _this$props.noStyles,
          stickyBitStickyOffset = _this$props.stickyBitStickyOffset,
          useStickyClasses = _this$props.useStickyClasses;
      var verticalPositionStyle = verticalPosition === 'top' && !noStyles ? stickyBitStickyOffset + "px" : '';
      var positionStyle = positionVal !== 'fixed' ? positionVal : '';
      this.els = typeof target === 'string' ? document.querySelectorAll(target) : target;
      if (!('length' in this.els)) this.els = [this.els];

      for (var i = 0; i < this.els.length; i++) {
        var el = this.els[i]; // set vertical position

        el.style[verticalPosition] = verticalPositionStyle;
        el.style.position = positionStyle;

        if (positionVal === 'fixed' || useStickyClasses) {
          // instances are an array of objects
          this.instances.push(this.addInstance(el, this.props));
        }
      }
    }
    /*
      setStickyPosition ✔️
      --------
      —  most basic thing stickybits does
      => checks to see if position sticky is supported
      => defined the position to be used
      => stickybits works accordingly
    */

    var _proto = Stickybits.prototype;

    _proto.definePosition = function definePosition() {
      var stickyProp;

      if (this.props.useFixed) {
        stickyProp = 'fixed';
      } else {
        var prefix = ['', '-o-', '-webkit-', '-moz-', '-ms-'];
        var test = document.head.style;

        for (var i = 0; i < prefix.length; i += 1) {
          test.position = prefix[i] + "sticky";
        }

        stickyProp = test.position ? test.position : 'fixed';
        test.position = '';
      }

      return stickyProp;
    }
    /*
      addInstance ✔️
      --------
      — manages instances of items
      - takes in an el and props
      - returns an item object
      ---
      - target = el
      - o = {object} = props
        - scrollEl = 'string' | object
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
    ;

    _proto.addInstance = function addInstance(el, props) {
      var _this = this;

      var item = {
        el: el,
        parent: el.parentNode,
        props: props
      };
      this.isWin = this.props.scrollEl === window;
      var se = this.isWin ? window : this.getClosestParent(item.el, item.props.scrollEl);
      this.computeScrollOffsets(item);
      item.parent.className += " " + props.parentClass;
      item.state = 'default';

      item.stateContainer = function () {
        return _this.manageState(item);
      };

      se.addEventListener('scroll', item.stateContainer);
      return item;
    }
    /*
      --------
      getParent 👨‍
      --------
      - a helper function that gets the target element's parent selected el
      - only used for non `window` scroll elements
      - supports older browsers
    */
    ;

    _proto.getClosestParent = function getClosestParent(el, match) {
      // p = parent element
      var p = match;
      var e = el;
      if (e.parentElement === p) return p; // traverse up the dom tree until we get to the parent

      while (e.parentElement !== p) {
        e = e.parentElement;
      } // return parent element


      return p;
    }
    /*
      --------
      getTopPosition
      --------
      - a helper function that gets the topPosition of a Stickybit element
      - from the top level of the DOM
    */
    ;

    _proto.getTopPosition = function getTopPosition(el) {
      if (this.props.useGetBoundingClientRect) {
        return el.getBoundingClientRect().top + (this.props.scrollEl.pageYOffset || document.documentElement.scrollTop);
      }

      var topPosition = 0;

      do {
        topPosition = el.offsetTop + topPosition;
      } while (el = el.offsetParent);

      return topPosition;
    }
    /*
      computeScrollOffsets 📊
      ---
      computeScrollOffsets for Stickybits
      - defines
        - offset
        - start
        - stop
    */
    ;

    _proto.computeScrollOffsets = function computeScrollOffsets(item) {
      var it = item;
      var p = it.props;
      var el = it.el;
      var parent = it.parent;
      var isCustom = !this.isWin && p.positionVal === 'fixed';
      var isTop = p.verticalPosition !== 'bottom';
      var scrollElOffset = isCustom ? this.getTopPosition(p.scrollEl) : 0;
      var stickyStart = isCustom ? this.getTopPosition(parent) - scrollElOffset : this.getTopPosition(parent);
      var stickyChangeOffset = p.customStickyChangeNumber !== null ? p.customStickyChangeNumber : el.offsetHeight;
      var parentBottom = stickyStart + parent.offsetHeight;
      it.offset = scrollElOffset + p.stickyBitStickyOffset;
      it.stickyStart = isTop ? stickyStart - it.offset : 0;
      it.stickyChange = it.stickyStart + stickyChangeOffset;
      it.stickyStop = isTop ? parentBottom - (el.offsetHeight + it.offset) : parentBottom - window.innerHeight;
    }
    /*
      toggleClasses ⚖️
      ---
      toggles classes (for older browser support)
      r = removed class
      a = added class
    */
    ;

    _proto.toggleClasses = function toggleClasses(el, r, a) {
      var e = el;
      var cArray = e.className.split(' ');
      if (a && cArray.indexOf(a) === -1) cArray.push(a);
      var rItem = cArray.indexOf(r);
      if (rItem !== -1) cArray.splice(rItem, 1);
      e.className = cArray.join(' ');
    }
    /*
      manageState 📝
      ---
      - defines the state
        - normal
        - sticky
        - stuck
    */
    ;

    _proto.manageState = function manageState(item) {
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
      var isTop = vp !== 'bottom';
      /*
        requestAnimationFrame
        ---
        - use rAF
        - or stub rAF
      */

      var rAFStub = function rAFDummy(f) {
        f();
      };

      var rAF = !this.isWin ? rAFStub : window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || rAFStub;
      /*
        define scroll vars
        ---
        - scroll
        - notSticky
        - isSticky
        - isStuck
      */

      var tC = this.toggleClasses;
      var scroll = this.isWin ? window.scrollY || window.pageYOffset : se.scrollTop;
      var notSticky = scroll > start && scroll < stop && (state === 'default' || state === 'stuck');
      var isSticky = isTop && scroll <= start && (state === 'sticky' || state === 'stuck');
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
        rAF(function () {
          tC(e, stuck, sticky);
          stl.position = pv;
          if (ns) return;
          stl.bottom = '';
          stl[vp] = p.stickyBitStickyOffset + "px";
        });
      } else if (isSticky) {
        it.state = 'default';
        rAF(function () {
          tC(e, sticky);
          tC(e, stuck);
          if (pv === 'fixed') stl.position = '';
        });
      } else if (isStuck) {
        it.state = 'stuck';
        rAF(function () {
          tC(e, sticky, stuck);
          if (pv !== 'fixed' || ns) return;
          stl.top = '';
          stl.bottom = '0';
          stl.position = 'absolute';
        });
      }

      var isStickyChange = scroll >= change && scroll <= stop;
      var isNotStickyChange = scroll < change / 2 || scroll > stop;
      var stub = 'stub'; // a stub css class to remove

      if (isNotStickyChange) {
        rAF(function () {
          tC(e, stickyChange);
        });
      } else if (isStickyChange) {
        rAF(function () {
          tC(e, stub, stickyChange);
        });
      }
    };

    _proto.update = function update(updatedProps) {
      if (updatedProps === void 0) {
        updatedProps = null;
      }

      for (var i = 0; i < this.instances.length; i += 1) {
        var instance = this.instances[i];
        this.computeScrollOffsets(instance);

        if (updatedProps) {
          for (var updatedProp in updatedProps) {
            instance.props[updatedProp] = updatedProps[updatedProp];
          }
        }
      }

      return this;
    }
    /*
      removes an instance 👋
      --------
      - cleanup instance
    */
    ;

    _proto.removeInstance = function removeInstance(instance) {
      var e = instance.el;
      var p = instance.props;
      var tC = this.toggleClasses;
      e.style.position = '';
      e.style[p.verticalPosition] = '';
      tC(e, p.stickyClass);
      tC(e, p.stuckClass);
      tC(e.parentNode, p.parentClass);
    }
    /*
      cleanup 🛁
      --------
      - cleans up each instance
      - clears instance
    */
    ;

    _proto.cleanup = function cleanup() {
      for (var i = 0; i < this.instances.length; i += 1) {
        var instance = this.instances[i];
        instance.props.scrollEl.removeEventListener('scroll', instance.stateContainer);
        this.removeInstance(instance);
      }

      this.manageState = false;
      this.instances = [];
    };

    return Stickybits;
  }();
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
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$stickySelector = _ref.stickySelector,
        stickySelector = _ref$stickySelector === undefined ? '.ecl-side-navigation__toggle' : _ref$stickySelector,
        _ref$activeSelector = _ref.activeSelector,
        activeSelector = _ref$activeSelector === undefined ? '.ecl-side-navigation__link--active' : _ref$activeSelector;

    // SUPPORTS
    if (!('querySelector' in document) || !('addEventListener' in window) || !document.documentElement.classList) return null;

    // ACTIONS
    function initSticky() {
      // init sticky menu
      // eslint-disable-next-line no-undef
      stickybits(stickySelector, { useStickyClasses: true });
    }

    function scrollToTop() {
      var toggle = document.getElementsByClassName(stickySelector.substring(1))[0];

      if (toggle) {
        toggle.addEventListener('click', function (e) {
          if (e.target.getAttribute('aria-expanded') === 'false') {
            e.target.scrollIntoView();
          }
        });
      }
    }

    function unfoldToActive() {
      var active = document.getElementsByClassName(activeSelector.substring(1))[0];

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
      init: init
    };
  };

  /**
   * Tables related behaviors.
   */

  // Heavily inspired by the tab component from https://github.com/frend/frend.co

  /**
   * Timeline
   */

  /**
   * Timeline
   */

  // Export components

  var storage = {
    get: function get(name, fallback) {
      var result = localStorage.getItem(name);
      return result ? JSON.parse(result) : fallback;
    },
    set: function set(name, value) {
      localStorage.setItem(name, JSON.stringify(value));
    }
  };

  /* eslint-disable import/no-extraneous-dependencies */

  var events = $({});

  /* eslint-disable import/no-extraneous-dependencies */

  var Preview = function () {
    function Preview(el) {
      classCallCheck(this, Preview);

      this._el = $(el);
      this._id = this._el[0].id;
      this._handle = this._el.find('[data-role="resize-handle"]');
      this._iframe = this._el.children('[data-role="window"]');
      this._resizer = this._el.children('[data-role="resizer"]');
      this._init();
    }

    Preview.prototype._init = function _init() {
      var _this = this;

      var dir = $('html').attr('dir');
      var initialWidth = storage.get('preview.width', this._resizer.outerWidth());
      var handleClicks = 0;

      if (initialWidth === this._el.outerWidth()) {
        this._resizer.css('width', '100%');
      } else {
        this._resizer.outerWidth(initialWidth);
      }

      this._handle.on('mousedown', function () {
        handleClicks += 1;

        setTimeout(function () {
          handleClicks = 0;
        }, 400);

        if (handleClicks === 2) {
          _this._resizer.css('width', 'calc(100% + 0.75rem)');
          return false;
        }

        return true;
      });

      this._resizer.resizable({
        handleSelector: this._handle,
        resizeHeight: false,
        onDragStart: function onDragStart() {
          _this._el.addClass('is-resizing');
          _this.disableEvents();
          events.trigger('start-dragging');
        },
        onDragEnd: function onDragEnd() {
          if (_this._resizer.outerWidth() === _this._el.outerWidth()) {
            _this._resizer.css('width', '100%');
          }
          storage.set('preview.width', _this._resizer.outerWidth());
          _this._el.removeClass('is-resizing');
          _this.enableEvents();
          events.trigger('end-dragging');
        },
        resizeWidthFrom: dir === 'rtl' ? 'left' : 'right'
      });
    };

    Preview.prototype.disableEvents = function disableEvents() {
      this._el.addClass('is-disabled');
    };

    Preview.prototype.enableEvents = function enableEvents() {
      this._el.removeClass('is-disabled');
    };

    return Preview;
  }();

  /* eslint-disable import/no-extraneous-dependencies */

  var Browser = function () {
    function Browser(el) {
      classCallCheck(this, Browser);

      var self = this;

      this._el = $(el);
      this._tabs = this._el.find('[data-role="tab"]');
      this._tabPanels = this._el.find('[data-role="tab-panel"]');
      this._fileSwitcher = this._el.find('[data-role="switcher"]');
      this._codeViews = this._el.find('[data-role="code"]');
      this._resourcePreview = this._el.find('[data-role="resource-preview"]');
      this._activeClass = 'is-active';
      this._initTabs();

      $('.FileBrowser-select').select2({ minimumResultsForSearch: Infinity }).on('change', function handleChange() {
        $(this).closest('.FileBrowser').find('[data-role="resource-preview"]').removeClass(self._activeClass);
        $('#' + this.value).addClass(self._activeClass);
      });

      this._initFileSwitcher();
    }

    Browser.prototype._initTabs = function _initTabs() {
      var _this = this;

      var ac = this._activeClass;
      var tabs = this._tabs;
      var selectedIndex = Math.min(tabs.length - 1, storage.get('browser.selectedTabIndex', 0));
      tabs.on('click', function (e) {
        var link = $(e.target).closest('a');
        var tab = link.parent();
        tabs.removeClass(ac);
        storage.set('browser.selectedTabIndex', tabs.index(tab));
        tab.addClass(ac);
        _this._tabPanels.removeClass(ac);
        _this._tabPanels.filter(link.attr('href')).addClass(ac);
        return false;
      });
      tabs.removeClass('is-active');
      tabs.eq(selectedIndex).find('a').trigger('click');
    };

    Browser.prototype._initFileSwitcher = function _initFileSwitcher() {}; // eslint-disable-line class-methods-use-this


    return Browser;
  }();

  /* eslint-disable import/no-extraneous-dependencies */

  var Pen = function () {
    function Pen(el) {
      classCallCheck(this, Pen);

      this._el = $(el);
      this._id = this._el[0].id;
      this._previewPanel = this._el.find('[data-behaviour="preview"]');
      this._browser = this._el.find('[data-behaviour="browser"]');
      this._handle = this._el.children('[data-role="resize-handle"]');
      this._init();
    }

    Pen.prototype._init = function _init() {
      var _this = this;

      var initialHeight = storage.get('pen.previewHeight', this._el.outerHeight() / 2);

      var preview = new Preview(this._previewPanel);
      var browser = new Browser(this._browser); // eslint-disable-line no-unused-vars
      var state = storage.get('pen.previewState', 'open');
      var handleClicks = 0;
      var dblClick = false;

      if (state === 'open') {
        this._previewPanel.outerHeight(initialHeight);
        storage.set('pen.previewHeight', initialHeight);
      } else {
        this._previewPanel.css('height', '100%');
      }

      this._handle.on('mousedown', function () {
        dblClick = false;
        handleClicks += 1;

        setTimeout(function () {
          handleClicks = 0;
        }, 400);

        if (handleClicks === 2) {
          dblClick = true;
          handleClicks = 0;
          return false;
        }

        return true;
      });

      this._previewPanel.resizable({
        handleSelector: this._handle,
        resizeWidth: false,
        onDragStart: function onDragStart() {
          _this._el.addClass('is-resizing');
          preview.disableEvents();
          events.trigger('start-dragging');
        },
        onDragEnd: function onDragEnd() {
          _this._el.removeClass('is-resizing');
          preview.enableEvents();
          events.trigger('end-dragging');
          if (dblClick) {
            if (state === 'closed') {
              _this._previewPanel.css('height', storage.get('pen.onClosedHeight', initialHeight));
              state = 'open';
              storage.set('pen.previewState', 'open');
            } else {
              storage.set('pen.onClosedHeight', _this._previewPanel.outerHeight());
              _this._previewPanel.css({
                height: '100%',
                transition: '.3s ease all'
              });
              state = 'closed';
              storage.set('pen.previewState', 'closed');
            }
          } else if (state !== 'closed') {
            storage.set('pen.previewHeight', _this._previewPanel.outerHeight());
          } else {
            setTimeout(function () {
              if (!dblClick) {
                state = 'open';
                storage.set('pen.previewState', 'open');
                storage.set('pen.previewHeight', _this._previewPanel.outerHeight());
              }
            }, 400);
          }
        }
      });
    };

    return Pen;
  }();

  var lunr = createCommonjsModule(function (module, exports) {
  (function () {

      /**
       * Convenience function for instantiating a new lunr index and configuring it
       * with the default pipeline functions and the passed config function.
       *
       * When using this convenience function a new index will be created with the
       * following functions already in the pipeline:
       *
       * lunr.StopWordFilter - filters out any stop words before they enter the
       * index
       *
       * lunr.stemmer - stems the tokens before entering the index.
       *
       * Example:
       *
       *     var idx = lunr(function () {
       *       this.field('title', 10)
       *       this.field('tags', 100)
       *       this.field('body')
       *       
       *       this.ref('cid')
       *       
       *       this.pipeline.add(function () {
       *         // some custom pipeline function
       *       })
       *       
       *     })
       *
       * @param {Function} config A function that will be called with the new instance
       * of the lunr.Index as both its context and first parameter. It can be used to
       * customize the instance of new lunr.Index.
       * @namespace
       * @module
       * @returns {lunr.Index}
       *
       */
      var lunr = function lunr(config) {
        var idx = new lunr.Index();

        idx.pipeline.add(lunr.trimmer, lunr.stopWordFilter, lunr.stemmer);

        if (config) config.call(idx, idx);

        return idx;
      };

      lunr.version = "1.0.0";
      /*!
       * lunr.utils
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * A namespace containing utils for the rest of the lunr library
       */
      lunr.utils = {};

      /**
       * Print a warning message to the console.
       *
       * @param {String} message The message to be printed.
       * @memberOf Utils
       */
      lunr.utils.warn = function (global) {
        return function (message) {
          if (global.console && console.warn) {
            console.warn(message);
          }
        };
      }(this);

      /**
       * Convert an object to a string.
       *
       * In the case of `null` and `undefined` the function returns
       * the empty string, in all other cases the result of calling
       * `toString` on the passed object is returned.
       *
       * @param {Any} obj The object to convert to a string.
       * @return {String} string representation of the passed object.
       * @memberOf Utils
       */
      lunr.utils.asString = function (obj) {
        if (obj === void 0 || obj === null) {
          return "";
        } else {
          return obj.toString();
        }
      };
      /*!
       * lunr.EventEmitter
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.EventEmitter is an event emitter for lunr. It manages adding and removing event handlers and triggering events and their handlers.
       *
       * @constructor
       */
      lunr.EventEmitter = function () {
        this.events = {};
      };

      /**
       * Binds a handler function to a specific event(s).
       *
       * Can bind a single function to many different events in one call.
       *
       * @param {String} [eventName] The name(s) of events to bind this function to.
       * @param {Function} fn The function to call when an event is fired.
       * @memberOf EventEmitter
       */
      lunr.EventEmitter.prototype.addListener = function () {
        var args = Array.prototype.slice.call(arguments),
            fn = args.pop(),
            names = args;

        if (typeof fn !== "function") throw new TypeError("last argument must be a function");

        names.forEach(function (name) {
          if (!this.hasHandler(name)) this.events[name] = [];
          this.events[name].push(fn);
        }, this);
      };

      /**
       * Removes a handler function from a specific event.
       *
       * @param {String} eventName The name of the event to remove this function from.
       * @param {Function} fn The function to remove from an event.
       * @memberOf EventEmitter
       */
      lunr.EventEmitter.prototype.removeListener = function (name, fn) {
        if (!this.hasHandler(name)) return;

        var fnIndex = this.events[name].indexOf(fn);
        this.events[name].splice(fnIndex, 1);

        if (!this.events[name].length) delete this.events[name];
      };

      /**
       * Calls all functions bound to the given event.
       *
       * Additional data can be passed to the event handler as arguments to `emit`
       * after the event name.
       *
       * @param {String} eventName The name of the event to emit.
       * @memberOf EventEmitter
       */
      lunr.EventEmitter.prototype.emit = function (name) {
        if (!this.hasHandler(name)) return;

        var args = Array.prototype.slice.call(arguments, 1);

        this.events[name].forEach(function (fn) {
          fn.apply(undefined, args);
        });
      };

      /**
       * Checks whether a handler has ever been stored against an event.
       *
       * @param {String} eventName The name of the event to check.
       * @private
       * @memberOf EventEmitter
       */
      lunr.EventEmitter.prototype.hasHandler = function (name) {
        return name in this.events;
      };

      /*!
       * lunr.tokenizer
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * A function for splitting a string into tokens ready to be inserted into
       * the search index. Uses `lunr.tokenizer.separator` to split strings, change
       * the value of this property to change how strings are split into tokens.
       *
       * @module
       * @param {String} obj The string to convert into tokens
       * @see lunr.tokenizer.separator
       * @returns {Array}
       */
      lunr.tokenizer = function (obj) {
        if (!arguments.length || obj == null || obj == undefined) return [];
        if (Array.isArray(obj)) return obj.map(function (t) {
          return lunr.utils.asString(t).toLowerCase();
        });

        return obj.toString().trim().toLowerCase().split(lunr.tokenizer.separator);
      };

      /**
       * The sperator used to split a string into tokens. Override this property to change the behaviour of
       * `lunr.tokenizer` behaviour when tokenizing strings. By default this splits on whitespace and hyphens.
       *
       * @static
       * @see lunr.tokenizer
       */
      lunr.tokenizer.separator = /[\s\-]+/;

      /**
       * Loads a previously serialised tokenizer.
       *
       * A tokenizer function to be loaded must already be registered with lunr.tokenizer.
       * If the serialised tokenizer has not been registered then an error will be thrown.
       *
       * @param {String} label The label of the serialised tokenizer.
       * @returns {Function}
       * @memberOf tokenizer
       */
      lunr.tokenizer.load = function (label) {
        var fn = this.registeredFunctions[label];

        if (!fn) {
          throw new Error('Cannot load un-registered function: ' + label);
        }

        return fn;
      };

      lunr.tokenizer.label = 'default';

      lunr.tokenizer.registeredFunctions = {
        'default': lunr.tokenizer

        /**
         * Register a tokenizer function.
         *
         * Functions that are used as tokenizers should be registered if they are to be used with a serialised index.
         *
         * Registering a function does not add it to an index, functions must still be associated with a specific index for them to be used when indexing and searching documents.
         *
         * @param {Function} fn The function to register.
         * @param {String} label The label to register this function with
         * @memberOf tokenizer
         */
      };lunr.tokenizer.registerFunction = function (fn, label) {
        if (label in this.registeredFunctions) {
          lunr.utils.warn('Overwriting existing tokenizer: ' + label);
        }

        fn.label = label;
        this.registeredFunctions[label] = fn;
      };
      /*!
       * lunr.Pipeline
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.Pipelines maintain an ordered list of functions to be applied to all
       * tokens in documents entering the search index and queries being ran against
       * the index.
       *
       * An instance of lunr.Index created with the lunr shortcut will contain a
       * pipeline with a stop word filter and an English language stemmer. Extra
       * functions can be added before or after either of these functions or these
       * default functions can be removed.
       *
       * When run the pipeline will call each function in turn, passing a token, the
       * index of that token in the original list of all tokens and finally a list of
       * all the original tokens.
       *
       * The output of functions in the pipeline will be passed to the next function
       * in the pipeline. To exclude a token from entering the index the function
       * should return undefined, the rest of the pipeline will not be called with
       * this token.
       *
       * For serialisation of pipelines to work, all functions used in an instance of
       * a pipeline should be registered with lunr.Pipeline. Registered functions can
       * then be loaded. If trying to load a serialised pipeline that uses functions
       * that are not registered an error will be thrown.
       *
       * If not planning on serialising the pipeline then registering pipeline functions
       * is not necessary.
       *
       * @constructor
       */
      lunr.Pipeline = function () {
        this._stack = [];
      };

      lunr.Pipeline.registeredFunctions = {};

      /**
       * Register a function with the pipeline.
       *
       * Functions that are used in the pipeline should be registered if the pipeline
       * needs to be serialised, or a serialised pipeline needs to be loaded.
       *
       * Registering a function does not add it to a pipeline, functions must still be
       * added to instances of the pipeline for them to be used when running a pipeline.
       *
       * @param {Function} fn The function to check for.
       * @param {String} label The label to register this function with
       * @memberOf Pipeline
       */
      lunr.Pipeline.registerFunction = function (fn, label) {
        if (label in this.registeredFunctions) {
          lunr.utils.warn('Overwriting existing registered function: ' + label);
        }

        fn.label = label;
        lunr.Pipeline.registeredFunctions[fn.label] = fn;
      };

      /**
       * Warns if the function is not registered as a Pipeline function.
       *
       * @param {Function} fn The function to check for.
       * @private
       * @memberOf Pipeline
       */
      lunr.Pipeline.warnIfFunctionNotRegistered = function (fn) {
        var isRegistered = fn.label && fn.label in this.registeredFunctions;

        if (!isRegistered) {
          lunr.utils.warn('Function is not registered with pipeline. This may cause problems when serialising the index.\n', fn);
        }
      };

      /**
       * Loads a previously serialised pipeline.
       *
       * All functions to be loaded must already be registered with lunr.Pipeline.
       * If any function from the serialised data has not been registered then an
       * error will be thrown.
       *
       * @param {Object} serialised The serialised pipeline to load.
       * @returns {lunr.Pipeline}
       * @memberOf Pipeline
       */
      lunr.Pipeline.load = function (serialised) {
        var pipeline = new lunr.Pipeline();

        serialised.forEach(function (fnName) {
          var fn = lunr.Pipeline.registeredFunctions[fnName];

          if (fn) {
            pipeline.add(fn);
          } else {
            throw new Error('Cannot load un-registered function: ' + fnName);
          }
        });

        return pipeline;
      };

      /**
       * Adds new functions to the end of the pipeline.
       *
       * Logs a warning if the function has not been registered.
       *
       * @param {Function} functions Any number of functions to add to the pipeline.
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.add = function () {
        var fns = Array.prototype.slice.call(arguments);

        fns.forEach(function (fn) {
          lunr.Pipeline.warnIfFunctionNotRegistered(fn);
          this._stack.push(fn);
        }, this);
      };

      /**
       * Adds a single function after a function that already exists in the
       * pipeline.
       *
       * Logs a warning if the function has not been registered.
       *
       * @param {Function} existingFn A function that already exists in the pipeline.
       * @param {Function} newFn The new function to add to the pipeline.
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.after = function (existingFn, newFn) {
        lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

        var pos = this._stack.indexOf(existingFn);
        if (pos == -1) {
          throw new Error('Cannot find existingFn');
        }

        pos = pos + 1;
        this._stack.splice(pos, 0, newFn);
      };

      /**
       * Adds a single function before a function that already exists in the
       * pipeline.
       *
       * Logs a warning if the function has not been registered.
       *
       * @param {Function} existingFn A function that already exists in the pipeline.
       * @param {Function} newFn The new function to add to the pipeline.
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.before = function (existingFn, newFn) {
        lunr.Pipeline.warnIfFunctionNotRegistered(newFn);

        var pos = this._stack.indexOf(existingFn);
        if (pos == -1) {
          throw new Error('Cannot find existingFn');
        }

        this._stack.splice(pos, 0, newFn);
      };

      /**
       * Removes a function from the pipeline.
       *
       * @param {Function} fn The function to remove from the pipeline.
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.remove = function (fn) {
        var pos = this._stack.indexOf(fn);
        if (pos == -1) {
          return;
        }

        this._stack.splice(pos, 1);
      };

      /**
       * Runs the current list of functions that make up the pipeline against the
       * passed tokens.
       *
       * @param {Array} tokens The tokens to run through the pipeline.
       * @returns {Array}
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.run = function (tokens) {
        var out = [],
            tokenLength = tokens.length,
            stackLength = this._stack.length;

        for (var i = 0; i < tokenLength; i++) {
          var token = tokens[i];

          for (var j = 0; j < stackLength; j++) {
            token = this._stack[j](token, i, tokens);
            if (token === void 0 || token === '') break;
          }
          if (token !== void 0 && token !== '') out.push(token);
        }
        return out;
      };

      /**
       * Resets the pipeline by removing any existing processors.
       *
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.reset = function () {
        this._stack = [];
      };

      /**
       * Returns a representation of the pipeline ready for serialisation.
       *
       * Logs a warning if the function has not been registered.
       *
       * @returns {Array}
       * @memberOf Pipeline
       */
      lunr.Pipeline.prototype.toJSON = function () {
        return this._stack.map(function (fn) {
          lunr.Pipeline.warnIfFunctionNotRegistered(fn);

          return fn.label;
        });
      };
      /*!
       * lunr.Vector
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.Vectors implement vector related operations for
       * a series of elements.
       *
       * @constructor
       */
      lunr.Vector = function () {
        this._magnitude = null;
        this.list = undefined;
        this.length = 0;
      };

      /**
       * lunr.Vector.Node is a simple struct for each node
       * in a lunr.Vector.
       *
       * @private
       * @param {Number} The index of the node in the vector.
       * @param {Object} The data at this node in the vector.
       * @param {lunr.Vector.Node} The node directly after this node in the vector.
       * @constructor
       * @memberOf Vector
       */
      lunr.Vector.Node = function (idx, val, next) {
        this.idx = idx;
        this.val = val;
        this.next = next;
      };

      /**
       * Inserts a new value at a position in a vector.
       *
       * @param {Number} The index at which to insert a value.
       * @param {Object} The object to insert in the vector.
       * @memberOf Vector.
       */
      lunr.Vector.prototype.insert = function (idx, val) {
        this._magnitude = undefined;
        var list = this.list;

        if (!list) {
          this.list = new lunr.Vector.Node(idx, val, list);
          return this.length++;
        }

        if (idx < list.idx) {
          this.list = new lunr.Vector.Node(idx, val, list);
          return this.length++;
        }

        var prev = list,
            next = list.next;

        while (next != undefined) {
          if (idx < next.idx) {
            prev.next = new lunr.Vector.Node(idx, val, next);
            return this.length++;
          }

          prev = next, next = next.next;
        }

        prev.next = new lunr.Vector.Node(idx, val, next);
        return this.length++;
      };

      /**
       * Calculates the magnitude of this vector.
       *
       * @returns {Number}
       * @memberOf Vector
       */
      lunr.Vector.prototype.magnitude = function () {
        if (this._magnitude) return this._magnitude;
        var node = this.list,
            sumOfSquares = 0,
            val;

        while (node) {
          val = node.val;
          sumOfSquares += val * val;
          node = node.next;
        }

        return this._magnitude = Math.sqrt(sumOfSquares);
      };

      /**
       * Calculates the dot product of this vector and another vector.
       *
       * @param {lunr.Vector} otherVector The vector to compute the dot product with.
       * @returns {Number}
       * @memberOf Vector
       */
      lunr.Vector.prototype.dot = function (otherVector) {
        var node = this.list,
            otherNode = otherVector.list,
            dotProduct = 0;

        while (node && otherNode) {
          if (node.idx < otherNode.idx) {
            node = node.next;
          } else if (node.idx > otherNode.idx) {
            otherNode = otherNode.next;
          } else {
            dotProduct += node.val * otherNode.val;
            node = node.next;
            otherNode = otherNode.next;
          }
        }

        return dotProduct;
      };

      /**
       * Calculates the cosine similarity between this vector and another
       * vector.
       *
       * @param {lunr.Vector} otherVector The other vector to calculate the
       * similarity with.
       * @returns {Number}
       * @memberOf Vector
       */
      lunr.Vector.prototype.similarity = function (otherVector) {
        return this.dot(otherVector) / (this.magnitude() * otherVector.magnitude());
      };
      /*!
       * lunr.SortedSet
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.SortedSets are used to maintain an array of uniq values in a sorted
       * order.
       *
       * @constructor
       */
      lunr.SortedSet = function () {
        this.length = 0;
        this.elements = [];
      };

      /**
       * Loads a previously serialised sorted set.
       *
       * @param {Array} serialisedData The serialised set to load.
       * @returns {lunr.SortedSet}
       * @memberOf SortedSet
       */
      lunr.SortedSet.load = function (serialisedData) {
        var set = new this();

        set.elements = serialisedData;
        set.length = serialisedData.length;

        return set;
      };

      /**
       * Inserts new items into the set in the correct position to maintain the
       * order.
       *
       * @param {Object} The objects to add to this set.
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.add = function () {
        var i, element;

        for (i = 0; i < arguments.length; i++) {
          element = arguments[i];
          if (~this.indexOf(element)) continue;
          this.elements.splice(this.locationFor(element), 0, element);
        }

        this.length = this.elements.length;
      };

      /**
       * Converts this sorted set into an array.
       *
       * @returns {Array}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.toArray = function () {
        return this.elements.slice();
      };

      /**
       * Creates a new array with the results of calling a provided function on every
       * element in this sorted set.
       *
       * Delegates to Array.prototype.map and has the same signature.
       *
       * @param {Function} fn The function that is called on each element of the
       * set.
       * @param {Object} ctx An optional object that can be used as the context
       * for the function fn.
       * @returns {Array}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.map = function (fn, ctx) {
        return this.elements.map(fn, ctx);
      };

      /**
       * Executes a provided function once per sorted set element.
       *
       * Delegates to Array.prototype.forEach and has the same signature.
       *
       * @param {Function} fn The function that is called on each element of the
       * set.
       * @param {Object} ctx An optional object that can be used as the context
       * @memberOf SortedSet
       * for the function fn.
       */
      lunr.SortedSet.prototype.forEach = function (fn, ctx) {
        return this.elements.forEach(fn, ctx);
      };

      /**
       * Returns the index at which a given element can be found in the
       * sorted set, or -1 if it is not present.
       *
       * @param {Object} elem The object to locate in the sorted set.
       * @returns {Number}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.indexOf = function (elem) {
        var start = 0,
            end = this.elements.length,
            sectionLength = end - start,
            pivot = start + Math.floor(sectionLength / 2),
            pivotElem = this.elements[pivot];

        while (sectionLength > 1) {
          if (pivotElem === elem) return pivot;

          if (pivotElem < elem) start = pivot;
          if (pivotElem > elem) end = pivot;

          sectionLength = end - start;
          pivot = start + Math.floor(sectionLength / 2);
          pivotElem = this.elements[pivot];
        }

        if (pivotElem === elem) return pivot;

        return -1;
      };

      /**
       * Returns the position within the sorted set that an element should be
       * inserted at to maintain the current order of the set.
       *
       * This function assumes that the element to search for does not already exist
       * in the sorted set.
       *
       * @param {Object} elem The elem to find the position for in the set
       * @returns {Number}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.locationFor = function (elem) {
        var start = 0,
            end = this.elements.length,
            sectionLength = end - start,
            pivot = start + Math.floor(sectionLength / 2),
            pivotElem = this.elements[pivot];

        while (sectionLength > 1) {
          if (pivotElem < elem) start = pivot;
          if (pivotElem > elem) end = pivot;

          sectionLength = end - start;
          pivot = start + Math.floor(sectionLength / 2);
          pivotElem = this.elements[pivot];
        }

        if (pivotElem > elem) return pivot;
        if (pivotElem < elem) return pivot + 1;
      };

      /**
       * Creates a new lunr.SortedSet that contains the elements in the intersection
       * of this set and the passed set.
       *
       * @param {lunr.SortedSet} otherSet The set to intersect with this set.
       * @returns {lunr.SortedSet}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.intersect = function (otherSet) {
        var intersectSet = new lunr.SortedSet(),
            i = 0,
            j = 0,
            a_len = this.length,
            b_len = otherSet.length,
            a = this.elements,
            b = otherSet.elements;

        while (true) {
          if (i > a_len - 1 || j > b_len - 1) break;

          if (a[i] === b[j]) {
            intersectSet.add(a[i]);
            i++, j++;
            continue;
          }

          if (a[i] < b[j]) {
            i++;
            continue;
          }

          if (a[i] > b[j]) {
            j++;
            continue;
          }
        }
        return intersectSet;
      };

      /**
       * Makes a copy of this set
       *
       * @returns {lunr.SortedSet}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.clone = function () {
        var clone = new lunr.SortedSet();

        clone.elements = this.toArray();
        clone.length = clone.elements.length;

        return clone;
      };

      /**
       * Creates a new lunr.SortedSet that contains the elements in the union
       * of this set and the passed set.
       *
       * @param {lunr.SortedSet} otherSet The set to union with this set.
       * @returns {lunr.SortedSet}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.union = function (otherSet) {
        var longSet, shortSet, unionSet;

        if (this.length >= otherSet.length) {
          longSet = this, shortSet = otherSet;
        } else {
          longSet = otherSet, shortSet = this;
        }

        unionSet = longSet.clone();

        for (var i = 0, shortSetElements = shortSet.toArray(); i < shortSetElements.length; i++) {
          unionSet.add(shortSetElements[i]);
        }

        return unionSet;
      };

      /**
       * Returns a representation of the sorted set ready for serialisation.
       *
       * @returns {Array}
       * @memberOf SortedSet
       */
      lunr.SortedSet.prototype.toJSON = function () {
        return this.toArray();
      };
      /*!
       * lunr.Index
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.Index is object that manages a search index.  It contains the indexes
       * and stores all the tokens and document lookups.  It also provides the main
       * user facing API for the library.
       *
       * @constructor
       */
      lunr.Index = function () {
        this._fields = [];
        this._ref = 'id';
        this.pipeline = new lunr.Pipeline();
        this.documentStore = new lunr.Store();
        this.tokenStore = new lunr.TokenStore();
        this.corpusTokens = new lunr.SortedSet();
        this.eventEmitter = new lunr.EventEmitter();
        this.tokenizerFn = lunr.tokenizer;

        this._idfCache = {};

        this.on('add', 'remove', 'update', function () {
          this._idfCache = {};
        }.bind(this));
      };

      /**
       * Bind a handler to events being emitted by the index.
       *
       * The handler can be bound to many events at the same time.
       *
       * @param {String} [eventName] The name(s) of events to bind the function to.
       * @param {Function} fn The serialised set to load.
       * @memberOf Index
       */
      lunr.Index.prototype.on = function () {
        var args = Array.prototype.slice.call(arguments);
        return this.eventEmitter.addListener.apply(this.eventEmitter, args);
      };

      /**
       * Removes a handler from an event being emitted by the index.
       *
       * @param {String} eventName The name of events to remove the function from.
       * @param {Function} fn The serialised set to load.
       * @memberOf Index
       */
      lunr.Index.prototype.off = function (name, fn) {
        return this.eventEmitter.removeListener(name, fn);
      };

      /**
       * Loads a previously serialised index.
       *
       * Issues a warning if the index being imported was serialised
       * by a different version of lunr.
       *
       * @param {Object} serialisedData The serialised set to load.
       * @returns {lunr.Index}
       * @memberOf Index
       */
      lunr.Index.load = function (serialisedData) {
        if (serialisedData.version !== lunr.version) {
          lunr.utils.warn('version mismatch: current ' + lunr.version + ' importing ' + serialisedData.version);
        }

        var idx = new this();

        idx._fields = serialisedData.fields;
        idx._ref = serialisedData.ref;

        idx.tokenizer(lunr.tokenizer.load(serialisedData.tokenizer));
        idx.documentStore = lunr.Store.load(serialisedData.documentStore);
        idx.tokenStore = lunr.TokenStore.load(serialisedData.tokenStore);
        idx.corpusTokens = lunr.SortedSet.load(serialisedData.corpusTokens);
        idx.pipeline = lunr.Pipeline.load(serialisedData.pipeline);

        return idx;
      };

      /**
       * Adds a field to the list of fields that will be searchable within documents
       * in the index.
       *
       * An optional boost param can be passed to affect how much tokens in this field
       * rank in search results, by default the boost value is 1.
       *
       * Fields should be added before any documents are added to the index, fields
       * that are added after documents are added to the index will only apply to new
       * documents added to the index.
       *
       * @param {String} fieldName The name of the field within the document that
       * should be indexed
       * @param {Number} boost An optional boost that can be applied to terms in this
       * field.
       * @returns {lunr.Index}
       * @memberOf Index
       */
      lunr.Index.prototype.field = function (fieldName, opts) {
        var opts = opts || {},
            field = { name: fieldName, boost: opts.boost || 1 };

        this._fields.push(field);
        return this;
      };

      /**
       * Sets the property used to uniquely identify documents added to the index,
       * by default this property is 'id'.
       *
       * This should only be changed before adding documents to the index, changing
       * the ref property without resetting the index can lead to unexpected results.
       *
       * The value of ref can be of any type but it _must_ be stably comparable and
       * orderable.
       *
       * @param {String} refName The property to use to uniquely identify the
       * documents in the index.
       * @param {Boolean} emitEvent Whether to emit add events, defaults to true
       * @returns {lunr.Index}
       * @memberOf Index
       */
      lunr.Index.prototype.ref = function (refName) {
        this._ref = refName;
        return this;
      };

      /**
       * Sets the tokenizer used for this index.
       *
       * By default the index will use the default tokenizer, lunr.tokenizer. The tokenizer
       * should only be changed before adding documents to the index. Changing the tokenizer
       * without re-building the index can lead to unexpected results.
       *
       * @param {Function} fn The function to use as a tokenizer.
       * @returns {lunr.Index}
       * @memberOf Index
       */
      lunr.Index.prototype.tokenizer = function (fn) {
        var isRegistered = fn.label && fn.label in lunr.tokenizer.registeredFunctions;

        if (!isRegistered) {
          lunr.utils.warn('Function is not a registered tokenizer. This may cause problems when serialising the index');
        }

        this.tokenizerFn = fn;
        return this;
      };

      /**
       * Add a document to the index.
       *
       * This is the way new documents enter the index, this function will run the
       * fields from the document through the index's pipeline and then add it to
       * the index, it will then show up in search results.
       *
       * An 'add' event is emitted with the document that has been added and the index
       * the document has been added to. This event can be silenced by passing false
       * as the second argument to add.
       *
       * @param {Object} doc The document to add to the index.
       * @param {Boolean} emitEvent Whether or not to emit events, default true.
       * @memberOf Index
       */
      lunr.Index.prototype.add = function (doc, emitEvent) {
        var docTokens = {},
            allDocumentTokens = new lunr.SortedSet(),
            docRef = doc[this._ref],
            emitEvent = emitEvent === undefined ? true : emitEvent;

        this._fields.forEach(function (field) {
          var fieldTokens = this.pipeline.run(this.tokenizerFn(doc[field.name]));

          docTokens[field.name] = fieldTokens;

          for (var i = 0; i < fieldTokens.length; i++) {
            var token = fieldTokens[i];
            allDocumentTokens.add(token);
            this.corpusTokens.add(token);
          }
        }, this);

        this.documentStore.set(docRef, allDocumentTokens);

        for (var i = 0; i < allDocumentTokens.length; i++) {
          var token = allDocumentTokens.elements[i];
          var tf = 0;

          for (var j = 0; j < this._fields.length; j++) {
            var field = this._fields[j];
            var fieldTokens = docTokens[field.name];
            var fieldLength = fieldTokens.length;

            if (!fieldLength) continue;

            var tokenCount = 0;
            for (var k = 0; k < fieldLength; k++) {
              if (fieldTokens[k] === token) {
                tokenCount++;
              }
            }

            tf += tokenCount / fieldLength * field.boost;
          }

          this.tokenStore.add(token, { ref: docRef, tf: tf });
        }
        if (emitEvent) this.eventEmitter.emit('add', doc, this);
      };

      /**
       * Removes a document from the index.
       *
       * To make sure documents no longer show up in search results they can be
       * removed from the index using this method.
       *
       * The document passed only needs to have the same ref property value as the
       * document that was added to the index, they could be completely different
       * objects.
       *
       * A 'remove' event is emitted with the document that has been removed and the index
       * the document has been removed from. This event can be silenced by passing false
       * as the second argument to remove.
       *
       * @param {Object} doc The document to remove from the index.
       * @param {Boolean} emitEvent Whether to emit remove events, defaults to true
       * @memberOf Index
       */
      lunr.Index.prototype.remove = function (doc, emitEvent) {
        var docRef = doc[this._ref],
            emitEvent = emitEvent === undefined ? true : emitEvent;

        if (!this.documentStore.has(docRef)) return;

        var docTokens = this.documentStore.get(docRef);

        this.documentStore.remove(docRef);

        docTokens.forEach(function (token) {
          this.tokenStore.remove(token, docRef);
        }, this);

        if (emitEvent) this.eventEmitter.emit('remove', doc, this);
      };

      /**
       * Updates a document in the index.
       *
       * When a document contained within the index gets updated, fields changed,
       * added or removed, to make sure it correctly matched against search queries,
       * it should be updated in the index.
       *
       * This method is just a wrapper around `remove` and `add`
       *
       * An 'update' event is emitted with the document that has been updated and the index.
       * This event can be silenced by passing false as the second argument to update. Only
       * an update event will be fired, the 'add' and 'remove' events of the underlying calls
       * are silenced.
       *
       * @param {Object} doc The document to update in the index.
       * @param {Boolean} emitEvent Whether to emit update events, defaults to true
       * @see Index.prototype.remove
       * @see Index.prototype.add
       * @memberOf Index
       */
      lunr.Index.prototype.update = function (doc, emitEvent) {
        var emitEvent = emitEvent === undefined ? true : emitEvent;

        this.remove(doc, false);
        this.add(doc, false);

        if (emitEvent) this.eventEmitter.emit('update', doc, this);
      };

      /**
       * Calculates the inverse document frequency for a token within the index.
       *
       * @param {String} token The token to calculate the idf of.
       * @see Index.prototype.idf
       * @private
       * @memberOf Index
       */
      lunr.Index.prototype.idf = function (term) {
        var cacheKey = "@" + term;
        if (Object.prototype.hasOwnProperty.call(this._idfCache, cacheKey)) return this._idfCache[cacheKey];

        var documentFrequency = this.tokenStore.count(term),
            idf = 1;

        if (documentFrequency > 0) {
          idf = 1 + Math.log(this.documentStore.length / documentFrequency);
        }

        return this._idfCache[cacheKey] = idf;
      };

      /**
       * Searches the index using the passed query.
       *
       * Queries should be a string, multiple words are allowed and will lead to an
       * AND based query, e.g. `idx.search('foo bar')` will run a search for
       * documents containing both 'foo' and 'bar'.
       *
       * All query tokens are passed through the same pipeline that document tokens
       * are passed through, so any language processing involved will be run on every
       * query term.
       *
       * Each query term is expanded, so that the term 'he' might be expanded to
       * 'hello' and 'help' if those terms were already included in the index.
       *
       * Matching documents are returned as an array of objects, each object contains
       * the matching document ref, as set for this index, and the similarity score
       * for this document against the query.
       *
       * @param {String} query The query to search the index with.
       * @returns {Object}
       * @see Index.prototype.idf
       * @see Index.prototype.documentVector
       * @memberOf Index
       */
      lunr.Index.prototype.search = function (query) {
        var queryTokens = this.pipeline.run(this.tokenizerFn(query)),
            queryVector = new lunr.Vector(),
            documentSets = [],
            fieldBoosts = this._fields.reduce(function (memo, f) {
          return memo + f.boost;
        }, 0);

        var hasSomeToken = queryTokens.some(function (token) {
          return this.tokenStore.has(token);
        }, this);

        if (!hasSomeToken) return [];

        queryTokens.forEach(function (token, i, tokens) {
          var tf = 1 / tokens.length * this._fields.length * fieldBoosts,
              self = this;

          var set = this.tokenStore.expand(token).reduce(function (memo, key) {
            var pos = self.corpusTokens.indexOf(key),
                idf = self.idf(key),
                similarityBoost = 1,
                set = new lunr.SortedSet();

            // if the expanded key is not an exact match to the token then
            // penalise the score for this key by how different the key is
            // to the token.
            if (key !== token) {
              var diff = Math.max(3, key.length - token.length);
              similarityBoost = 1 / Math.log(diff);
            }

            // calculate the query tf-idf score for this token
            // applying an similarityBoost to ensure exact matches
            // these rank higher than expanded terms
            if (pos > -1) queryVector.insert(pos, tf * idf * similarityBoost);

            // add all the documents that have this key into a set
            // ensuring that the type of key is preserved
            var matchingDocuments = self.tokenStore.get(key),
                refs = Object.keys(matchingDocuments),
                refsLen = refs.length;

            for (var i = 0; i < refsLen; i++) {
              set.add(matchingDocuments[refs[i]].ref);
            }

            return memo.union(set);
          }, new lunr.SortedSet());

          documentSets.push(set);
        }, this);

        var documentSet = documentSets.reduce(function (memo, set) {
          return memo.intersect(set);
        });

        return documentSet.map(function (ref) {
          return { ref: ref, score: queryVector.similarity(this.documentVector(ref)) };
        }, this).sort(function (a, b) {
          return b.score - a.score;
        });
      };

      /**
       * Generates a vector containing all the tokens in the document matching the
       * passed documentRef.
       *
       * The vector contains the tf-idf score for each token contained in the
       * document with the passed documentRef.  The vector will contain an element
       * for every token in the indexes corpus, if the document does not contain that
       * token the element will be 0.
       *
       * @param {Object} documentRef The ref to find the document with.
       * @returns {lunr.Vector}
       * @private
       * @memberOf Index
       */
      lunr.Index.prototype.documentVector = function (documentRef) {
        var documentTokens = this.documentStore.get(documentRef),
            documentTokensLength = documentTokens.length,
            documentVector = new lunr.Vector();

        for (var i = 0; i < documentTokensLength; i++) {
          var token = documentTokens.elements[i],
              tf = this.tokenStore.get(token)[documentRef].tf,
              idf = this.idf(token);

          documentVector.insert(this.corpusTokens.indexOf(token), tf * idf);
        }
        return documentVector;
      };

      /**
       * Returns a representation of the index ready for serialisation.
       *
       * @returns {Object}
       * @memberOf Index
       */
      lunr.Index.prototype.toJSON = function () {
        return {
          version: lunr.version,
          fields: this._fields,
          ref: this._ref,
          tokenizer: this.tokenizerFn.label,
          documentStore: this.documentStore.toJSON(),
          tokenStore: this.tokenStore.toJSON(),
          corpusTokens: this.corpusTokens.toJSON(),
          pipeline: this.pipeline.toJSON()
        };
      };

      /**
       * Applies a plugin to the current index.
       *
       * A plugin is a function that is called with the index as its context.
       * Plugins can be used to customise or extend the behaviour the index
       * in some way. A plugin is just a function, that encapsulated the custom
       * behaviour that should be applied to the index.
       *
       * The plugin function will be called with the index as its argument, additional
       * arguments can also be passed when calling use. The function will be called
       * with the index as its context.
       *
       * Example:
       *
       *     var myPlugin = function (idx, arg1, arg2) {
       *       // `this` is the index to be extended
       *       // apply any extensions etc here.
       *     }
       *
       *     var idx = lunr(function () {
       *       this.use(myPlugin, 'arg1', 'arg2')
       *     })
       *
       * @param {Function} plugin The plugin to apply.
       * @memberOf Index
       */
      lunr.Index.prototype.use = function (plugin) {
        var args = Array.prototype.slice.call(arguments, 1);
        args.unshift(this);
        plugin.apply(this, args);
      };
      /*!
       * lunr.Store
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.Store is a simple key-value store used for storing sets of tokens for
       * documents stored in index.
       *
       * @constructor
       * @module
       */
      lunr.Store = function () {
        this.store = {};
        this.length = 0;
      };

      /**
       * Loads a previously serialised store
       *
       * @param {Object} serialisedData The serialised store to load.
       * @returns {lunr.Store}
       * @memberOf Store
       */
      lunr.Store.load = function (serialisedData) {
        var store = new this();

        store.length = serialisedData.length;
        store.store = Object.keys(serialisedData.store).reduce(function (memo, key) {
          memo[key] = lunr.SortedSet.load(serialisedData.store[key]);
          return memo;
        }, {});

        return store;
      };

      /**
       * Stores the given tokens in the store against the given id.
       *
       * @param {Object} id The key used to store the tokens against.
       * @param {Object} tokens The tokens to store against the key.
       * @memberOf Store
       */
      lunr.Store.prototype.set = function (id, tokens) {
        if (!this.has(id)) this.length++;
        this.store[id] = tokens;
      };

      /**
       * Retrieves the tokens from the store for a given key.
       *
       * @param {Object} id The key to lookup and retrieve from the store.
       * @returns {Object}
       * @memberOf Store
       */
      lunr.Store.prototype.get = function (id) {
        return this.store[id];
      };

      /**
       * Checks whether the store contains a key.
       *
       * @param {Object} id The id to look up in the store.
       * @returns {Boolean}
       * @memberOf Store
       */
      lunr.Store.prototype.has = function (id) {
        return id in this.store;
      };

      /**
       * Removes the value for a key in the store.
       *
       * @param {Object} id The id to remove from the store.
       * @memberOf Store
       */
      lunr.Store.prototype.remove = function (id) {
        if (!this.has(id)) return;

        delete this.store[id];
        this.length--;
      };

      /**
       * Returns a representation of the store ready for serialisation.
       *
       * @returns {Object}
       * @memberOf Store
       */
      lunr.Store.prototype.toJSON = function () {
        return {
          store: this.store,
          length: this.length
        };
      };

      /*!
       * lunr.stemmer
       * Copyright (C) 2017 Oliver Nightingale
       * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
       */

      /**
       * lunr.stemmer is an english language stemmer, this is a JavaScript
       * implementation of the PorterStemmer taken from http://tartarus.org/~martin
       *
       * @module
       * @param {String} str The string to stem
       * @returns {String}
       * @see lunr.Pipeline
       */
      lunr.stemmer = function () {
        var step2list = {
          "ational": "ate",
          "tional": "tion",
          "enci": "ence",
          "anci": "ance",
          "izer": "ize",
          "bli": "ble",
          "alli": "al",
          "entli": "ent",
          "eli": "e",
          "ousli": "ous",
          "ization": "ize",
          "ation": "ate",
          "ator": "ate",
          "alism": "al",
          "iveness": "ive",
          "fulness": "ful",
          "ousness": "ous",
          "aliti": "al",
          "iviti": "ive",
          "biliti": "ble",
          "logi": "log"
        },
            step3list = {
          "icate": "ic",
          "ative": "",
          "alize": "al",
          "iciti": "ic",
          "ical": "ic",
          "ful": "",
          "ness": ""
        },
            c = "[^aeiou]",
            // consonant
        v = "[aeiouy]",
            // vowel
        C = c + "[^aeiouy]*",
            // consonant sequence
        V = v + "[aeiou]*",
            // vowel sequence

        mgr0 = "^(" + C + ")?" + V + C,
            // [C]VC... is m>0
        meq1 = "^(" + C + ")?" + V + C + "(" + V + ")?$",
            // [C]VC[V] is m=1
        mgr1 = "^(" + C + ")?" + V + C + V + C,
            // [C]VCVC... is m>1
        s_v = "^(" + C + ")?" + v; // vowel in stem

        var re_mgr0 = new RegExp(mgr0);
        var re_mgr1 = new RegExp(mgr1);
        var re_meq1 = new RegExp(meq1);
        var re_s_v = new RegExp(s_v);

        var re_1a = /^(.+?)(ss|i)es$/;
        var re2_1a = /^(.+?)([^s])s$/;
        var re_1b = /^(.+?)eed$/;
        var re2_1b = /^(.+?)(ed|ing)$/;
        var re_1b_2 = /.$/;
        var re2_1b_2 = /(at|bl|iz)$/;
        var re3_1b_2 = new RegExp("([^aeiouylsz])\\1$");
        var re4_1b_2 = new RegExp("^" + C + v + "[^aeiouwxy]$");

        var re_1c = /^(.+?[^aeiou])y$/;
        var re_2 = /^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$/;

        var re_3 = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/;

        var re_4 = /^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$/;
        var re2_4 = /^(.+?)(s|t)(ion)$/;

        var re_5 = /^(.+?)e$/;
        var re_5_1 = /ll$/;
        var re3_5 = new RegExp("^" + C + v + "[^aeiouwxy]$");

        var porterStemmer = function porterStemmer(w) {
          var stem, suffix, firstch, re, re2, re3, re4;

          if (w.length < 3) {
            return w;
          }

          firstch = w.substr(0, 1);
          if (firstch == "y") {
            w = firstch.toUpperCase() + w.substr(1);
          }

          // Step 1a
          re = re_1a;
          re2 = re2_1a;

          if (re.test(w)) {
            w = w.replace(re, "$1$2");
          } else if (re2.test(w)) {
            w = w.replace(re2, "$1$2");
          }

          // Step 1b
          re = re_1b;
          re2 = re2_1b;
          if (re.test(w)) {
            var fp = re.exec(w);
            re = re_mgr0;
            if (re.test(fp[1])) {
              re = re_1b_2;
              w = w.replace(re, "");
            }
          } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1];
            re2 = re_s_v;
            if (re2.test(stem)) {
              w = stem;
              re2 = re2_1b_2;
              re3 = re3_1b_2;
              re4 = re4_1b_2;
              if (re2.test(w)) {
                w = w + "e";
              } else if (re3.test(w)) {
                re = re_1b_2;w = w.replace(re, "");
              } else if (re4.test(w)) {
                w = w + "e";
              }
            }
          }

          // Step 1c - replace suffix y or Y by i if preceded by a non-vowel which is not the first letter of the word (so cry -> cri, by -> by, say -> say)
          re = re_1c;
          if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            w = stem + "i";
          }

          // Step 2
          re = re_2;
          if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = re_mgr0;
            if (re.test(stem)) {
              w = stem + step2list[suffix];
            }
          }

          // Step 3
          re = re_3;
          if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            suffix = fp[2];
            re = re_mgr0;
            if (re.test(stem)) {
              w = stem + step3list[suffix];
            }
          }

          // Step 4
          re = re_4;
          re2 = re2_4;
          if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = re_mgr1;
            if (re.test(stem)) {
              w = stem;
            }
          } else if (re2.test(w)) {
            var fp = re2.exec(w);
            stem = fp[1] + fp[2];
            re2 = re_mgr1;
            if (re2.test(stem)) {
              w = stem;
            }
          }

          // Step 5
          re = re_5;
          if (re.test(w)) {
            var fp = re.exec(w);
            stem = fp[1];
            re = re_mgr1;
            re2 = re_meq1;
            re3 = re3_5;
            if (re.test(stem) || re2.test(stem) && !re3.test(stem)) {
              w = stem;
            }
          }

          re = re_5_1;
          re2 = re_mgr1;
          if (re.test(w) && re2.test(w)) {
            re = re_1b_2;
            w = w.replace(re, "");
          }

          // and turn initial Y back to y

          if (firstch == "y") {
            w = firstch.toLowerCase() + w.substr(1);
          }

          return w;
        };

        return porterStemmer;
      }();

      lunr.Pipeline.registerFunction(lunr.stemmer, 'stemmer');
      /*!
       * lunr.stopWordFilter
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.generateStopWordFilter builds a stopWordFilter function from the provided
       * list of stop words.
       *
       * The built in lunr.stopWordFilter is built using this generator and can be used
       * to generate custom stopWordFilters for applications or non English languages.
       *
       * @module
       * @param {Array} token The token to pass through the filter
       * @returns {Function}
       * @see lunr.Pipeline
       * @see lunr.stopWordFilter
       */
      lunr.generateStopWordFilter = function (stopWords) {
        var words = stopWords.reduce(function (memo, stopWord) {
          memo[stopWord] = stopWord;
          return memo;
        }, {});

        return function (token) {
          if (token && words[token] !== token) return token;
        };
      };

      /**
       * lunr.stopWordFilter is an English language stop word list filter, any words
       * contained in the list will not be passed through the filter.
       *
       * This is intended to be used in the Pipeline. If the token does not pass the
       * filter then undefined will be returned.
       *
       * @module
       * @param {String} token The token to pass through the filter
       * @returns {String}
       * @see lunr.Pipeline
       */
      lunr.stopWordFilter = lunr.generateStopWordFilter(['a', 'able', 'about', 'across', 'after', 'all', 'almost', 'also', 'am', 'among', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'but', 'by', 'can', 'cannot', 'could', 'dear', 'did', 'do', 'does', 'either', 'else', 'ever', 'every', 'for', 'from', 'get', 'got', 'had', 'has', 'have', 'he', 'her', 'hers', 'him', 'his', 'how', 'however', 'i', 'if', 'in', 'into', 'is', 'it', 'its', 'just', 'least', 'let', 'like', 'likely', 'may', 'me', 'might', 'most', 'must', 'my', 'neither', 'no', 'nor', 'not', 'of', 'off', 'often', 'on', 'only', 'or', 'other', 'our', 'own', 'rather', 'said', 'say', 'says', 'she', 'should', 'since', 'so', 'some', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'tis', 'to', 'too', 'twas', 'us', 'wants', 'was', 'we', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'whom', 'why', 'will', 'with', 'would', 'yet', 'you', 'your']);

      lunr.Pipeline.registerFunction(lunr.stopWordFilter, 'stopWordFilter');
      /*!
       * lunr.trimmer
       * Copyright (C) 2017 Oliver Nightingale
       */

      /**
       * lunr.trimmer is a pipeline function for trimming non word
       * characters from the begining and end of tokens before they
       * enter the index.
       *
       * This implementation may not work correctly for non latin
       * characters and should either be removed or adapted for use
       * with languages with non-latin characters.
       *
       * @module
       * @param {String} token The token to pass through the filter
       * @returns {String}
       * @see lunr.Pipeline
       */
      lunr.trimmer = function (token) {
        return token.replace(/^\W+/, '').replace(/\W+$/, '');
      };

      lunr.Pipeline.registerFunction(lunr.trimmer, 'trimmer');
      /*!
       * lunr.stemmer
       * Copyright (C) 2017 Oliver Nightingale
       * Includes code from - http://tartarus.org/~martin/PorterStemmer/js.txt
       */

      /**
       * lunr.TokenStore is used for efficient storing and lookup of the reverse
       * index of token to document ref.
       *
       * @constructor
       */
      lunr.TokenStore = function () {
        this.root = { docs: {} };
        this.length = 0;
      };

      /**
       * Loads a previously serialised token store
       *
       * @param {Object} serialisedData The serialised token store to load.
       * @returns {lunr.TokenStore}
       * @memberOf TokenStore
       */
      lunr.TokenStore.load = function (serialisedData) {
        var store = new this();

        store.root = serialisedData.root;
        store.length = serialisedData.length;

        return store;
      };

      /**
       * Adds a new token doc pair to the store.
       *
       * By default this function starts at the root of the current store, however
       * it can start at any node of any token store if required.
       *
       * @param {String} token The token to store the doc under
       * @param {Object} doc The doc to store against the token
       * @param {Object} root An optional node at which to start looking for the
       * correct place to enter the doc, by default the root of this lunr.TokenStore
       * is used.
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.add = function (token, doc, root) {
        var root = root || this.root,
            key = token.charAt(0),
            rest = token.slice(1);

        if (!(key in root)) root[key] = { docs: {} };

        if (rest.length === 0) {
          root[key].docs[doc.ref] = doc;
          this.length += 1;
          return;
        } else {
          return this.add(rest, doc, root[key]);
        }
      };

      /**
       * Checks whether this key is contained within this lunr.TokenStore.
       *
       * By default this function starts at the root of the current store, however
       * it can start at any node of any token store if required.
       *
       * @param {String} token The token to check for
       * @param {Object} root An optional node at which to start
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.has = function (token) {
        if (!token) return false;

        var node = this.root;

        for (var i = 0; i < token.length; i++) {
          if (!node[token.charAt(i)]) return false;

          node = node[token.charAt(i)];
        }

        return true;
      };

      /**
       * Retrieve a node from the token store for a given token.
       *
       * By default this function starts at the root of the current store, however
       * it can start at any node of any token store if required.
       *
       * @param {String} token The token to get the node for.
       * @param {Object} root An optional node at which to start.
       * @returns {Object}
       * @see TokenStore.prototype.get
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.getNode = function (token) {
        if (!token) return {};

        var node = this.root;

        for (var i = 0; i < token.length; i++) {
          if (!node[token.charAt(i)]) return {};

          node = node[token.charAt(i)];
        }

        return node;
      };

      /**
       * Retrieve the documents for a node for the given token.
       *
       * By default this function starts at the root of the current store, however
       * it can start at any node of any token store if required.
       *
       * @param {String} token The token to get the documents for.
       * @param {Object} root An optional node at which to start.
       * @returns {Object}
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.get = function (token, root) {
        return this.getNode(token, root).docs || {};
      };

      lunr.TokenStore.prototype.count = function (token, root) {
        return Object.keys(this.get(token, root)).length;
      };

      /**
       * Remove the document identified by ref from the token in the store.
       *
       * By default this function starts at the root of the current store, however
       * it can start at any node of any token store if required.
       *
       * @param {String} token The token to get the documents for.
       * @param {String} ref The ref of the document to remove from this token.
       * @param {Object} root An optional node at which to start.
       * @returns {Object}
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.remove = function (token, ref) {
        if (!token) return;
        var node = this.root;

        for (var i = 0; i < token.length; i++) {
          if (!(token.charAt(i) in node)) return;
          node = node[token.charAt(i)];
        }

        delete node.docs[ref];
      };

      /**
       * Find all the possible suffixes of the passed token using tokens
       * currently in the store.
       *
       * @param {String} token The token to expand.
       * @returns {Array}
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.expand = function (token, memo) {
        var root = this.getNode(token),
            docs = root.docs || {},
            memo = memo || [];

        if (Object.keys(docs).length) memo.push(token);

        Object.keys(root).forEach(function (key) {
          if (key === 'docs') return;

          memo.concat(this.expand(token + key, memo));
        }, this);

        return memo;
      };

      /**
       * Returns a representation of the token store ready for serialisation.
       *
       * @returns {Object}
       * @memberOf TokenStore
       */
      lunr.TokenStore.prototype.toJSON = function () {
        return {
          root: this.root,
          length: this.length
        };
      }

      /**
       * export the module via AMD, CommonJS or as a browser global
       * Export code from https://github.com/umdjs/umd/blob/master/returnExports.js
       */
      ;(function (root, factory) {
        if (typeof undefined === 'function' && undefined.amd) {
          // AMD. Register as an anonymous module.
          undefined(factory);
        } else {
          /**
           * Node. Does not work with strict CommonJS, but
           * only CommonJS-like enviroments that support module.exports,
           * like Node.
           */
          module.exports = factory();
        }
      })(this, function () {
        /**
         * Just return a value to define the module export.
         * This example returns an object, but the module
         * can return a function as the exported value.
         */
        return lunr;
      });
    })();
  });

  /* eslint-disable import/no-extraneous-dependencies */

  var search = (function () {
    if (!document.getElementById('searchIndexPath')) {
      return;
    }

    var searchIndexPath = JSON.parse($('#searchIndexPath').html());

    $.getJSON(searchIndexPath.path, function (searchIndexJson) {
      var $searchInput = $('#search-components');
      var $navigationMenu = $('.ecl-navigation-menu');
      var $resultsArea = $('.page-content');

      var initialContent = $resultsArea.html();

      var store = searchIndexJson.store;

      var index = lunr.Index.load(searchIndexJson.index);

      $searchInput.keyup(function () {
        var query = $searchInput.val();
        $navigationMenu.find('[aria-expanded]').attr('aria-expanded', false);
        // Empty search box: initial and cleared states.
        if (query === '') {
          $resultsArea.html(initialContent);
          return;
        }

        // Perform lunr search.
        var results = index.search(query);

        // Clear area for results to prepare for results.
        $resultsArea.empty();

        var prefix = '';
        if (window.location.href.indexOf('components/detail/') <= 0) {
          prefix = 'components/detail/';
        }

        if (window.location.href.indexOf('docs/') >= 0) {
          prefix = '../components/detail/';
        }

        if (results.length) {
          $resultsArea.append($('\n              <div class="Document">\n                <div class="Document-header">\n                  <h1 class="Document-title">Search results</h1>\n                </div>\n                <div class="Document-content">\n                  <div class="Prose">\n                    <ul class="ecl-list">\n                      ' + results.map(function (result) {
            return '\n                          <li>\n                            <h4 class="ecl-heading ecl-heading--h4 ecl-u-mb-none">\n                              <a class="ecl-link" href="' + (prefix + store[result.ref].handle) + '">' + store[result.ref].title + '\n                              </a>\n                            </h4>\n                          </li>\n                          ';
          }).join('') + '\n                    </ul>\n                  </div>\n                </div>\n              </div>\n            '));
        } else {
          $resultsArea.append($('\n            <div class="Document">\n              <div class="Document-header">\n                <h1 class="Document-title">Search results</h1>\n              </div>\n              <div class="Document-content">\n                <div class="Prose">\n                  <h4>No components found</h4>\n                </div>\n              </div>\n            </div>\n          '));
        }
      });
    });
  });

  /* eslint-disable import/no-extraneous-dependencies, import/first */

  document.addEventListener('DOMContentLoaded', function () {
    $.map($('[data-behaviour="pen"]'), function (p) {
      return new Pen(p);
    });
    search();

    initExpandables('.ecl-side-navigation__link.ecl-expandable__button');
    initExpandables('.ecl-side-navigation__toggle');
    navigationSide();
  });

  exports.default = events;

  return exports;

}({},jQuery));
