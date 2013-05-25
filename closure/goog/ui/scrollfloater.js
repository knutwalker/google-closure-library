// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @fileoverview  Class for making an element detach and float to remain
 * visible when otherwise it would have scrolled up out of view.
 * <p>
 * The element remains at its normal position in the layout until scrolling
 * would cause its top edge to scroll off the top of the viewport; at that
 * point, the element is replaced with an invisible placeholder (to keep the
 * layout stable), reattached in the dom tree to a new parent (the body element
 * by default), and set to "fixed" positioning (emulated for IE < 7) so that it
 * remains at its original X position while staying fixed to the top of the
 * viewport in the Y dimension.
 * <p>
 * When the window is scrolled up past the point where the original element
 * would be fully visible again, the element snaps back into place, replacing
 * the placeholder.
 *
 * @see ../demos/scrollfloater.html
 *
 * Adapted from http://go/elementfloater.js
 */


goog.provide('goog.ui.ScrollFloater');
goog.provide('goog.ui.ScrollFloater.EventType');

goog.require('goog.array');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.events.EventType');
goog.require('goog.style');
goog.require('goog.ui.Component');
goog.require('goog.userAgent');



/**
 * Creates a ScrollFloater; see file overview for details.
 *
 * @param {Element=} opt_parentElement Where to attach the element when it's
 *     floating.  Default is the document body.  If the floating element
 *     contains form inputs, it will be necessary to attach it to the
 *     corresponding form element, or to an element in the DOM subtree under
 *     the form element.
 * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
 * @constructor
 * @extends {goog.ui.Component}
 */
goog.ui.ScrollFloater = function(opt_parentElement, opt_domHelper) {
  // If a parentElement is supplied, we want to use its domHelper,
  // ignoring the caller-supplied one.
  var domHelper = opt_parentElement ?
      goog.dom.getDomHelper(opt_parentElement) : opt_domHelper;

<<<<<<< HEAD
  goog.ui.Component.call(this, domHelper);
=======
  goog.base(this, domHelper);
>>>>>>> newgitrepo

  /**
   * The element to which the scroll-floated element will be attached
   * when it is floating.
   * @type {Element}
   * @private
   */
  this.parentElement_ =
      opt_parentElement || this.getDomHelper().getDocument().body;

  /**
   * The original styles applied to the element before it began floating;
   * used to restore those styles when the element stops floating.
   * @type {Object}
   * @private
   */
  this.originalStyles_ = {};
<<<<<<< HEAD
=======

  /**
   * A vertical offset from which to start floating the element.  This is
   * useful in cases when there are 'position:fixed' elements covering up
   * part of the viewport.
   * @type {number}
   * @private
   */
  this.viewportTopOffset_ = 0;

  /**
   * An element used to define the boundaries within which the floater can
   * be positioned.
   * @type {Element}
   * @private
   */
  this.containerElement_ = null;

  /**
   * Container element's bounding rectangle.
   * @type {goog.math.Rect}
   * @private
   */
  this.containerBounds_ = null;

  /**
   * Element's original bounding rectangle.
   * @type {goog.math.Rect}
   * @private
   */
  this.originalBounds_ = null;

  /**
   * The placeholder element dropped in to hold the layout for
   * the floated element.
   * @type {Element}
   * @private
   */
  this.placeholder_ = null;

  /**
   * Whether scrolling is enabled for this element; true by default.
   * The {@link #setScrollingEnabled} method can be used to change this value.
   * @type {boolean}
   * @private
   */
  this.scrollingEnabled_ = true;

  /**
   * A flag indicating whether this instance is currently pinned to the bottom
   * of the container element.
   * @type {boolean}
   * @private
   */
  this.pinned_ = false;

  /**
   * A flag indicating whether this instance is currently floating.
   * @type {boolean}
   * @private
   */
  this.floating_ = false;
>>>>>>> newgitrepo
};
goog.inherits(goog.ui.ScrollFloater, goog.ui.Component);


/**
 * Events dispatched by this component.
 * @enum {string}
 */
goog.ui.ScrollFloater.EventType = {
  /**
   * Dispatched when the component starts floating. The event is
   * cancellable.
   */
  FLOAT: 'float',

  /**
<<<<<<< HEAD
   * Dispatched when the component stops floating and returns to its
   * original state. The event is cancellable.
   */
  DOCK: 'dock'
};


/**
 * The placeholder element dropped in to hold the layout for
 * the floated element.
 * @type {Element}
 * @private
 */
goog.ui.ScrollFloater.prototype.placeholder_;


/**
 * Whether scrolling is enabled for this element; true by default.
 * The {@link #setScrollingEnabled} method can be used to change this value.
 * @type {boolean}
 * @private
 */
goog.ui.ScrollFloater.prototype.scrollingEnabled_ = true;


/**
 * A flag indicating whether this instance is currently floating.
 * @type {boolean}
 * @private
 */
goog.ui.ScrollFloater.prototype.floating_ = false;


/**
 * The original vertical page offset at which the top of the element
 * was rendered.
 * @type {number}
 * @private
 */
goog.ui.ScrollFloater.prototype.originalOffset_;
=======
   * Dispatched when the component returns to its original state.
   * The event is cancellable.
   */
  DOCK: 'dock',

  /**
   * Dispatched when the component gets pinned to the bottom of the
   * container element.  This event is cancellable.
   */
  PIN: 'pin'
};
>>>>>>> newgitrepo


/**
 * The style properties which are stored when we float an element, so they
 * can be restored when it 'docks' again.
 * @type {Array.<string>}
 * @private
 */
goog.ui.ScrollFloater.STORED_STYLE_PROPS_ = [
  'position', 'top', 'left', 'width', 'cssFloat'];


/**
 * The style elements managed for the placeholder object.
 * @type {Array.<string>}
 * @private
 */
goog.ui.ScrollFloater.PLACEHOLDER_STYLE_PROPS_ = [
  'position', 'top', 'left', 'display', 'cssFloat',
  'marginTop', 'marginLeft', 'marginRight', 'marginBottom'];


/**
 * The class name applied to the floating element.
 * @type {string}
 * @private
 */
goog.ui.ScrollFloater.CSS_CLASS_ = goog.getCssName('goog-scrollfloater');


/**
 * Delegates dom creation to superclass, then constructs and
 * decorates required DOM elements.
 * @override
 */
goog.ui.ScrollFloater.prototype.createDom = function() {
<<<<<<< HEAD
  goog.ui.ScrollFloater.superClass_.createDom.call(this);
=======
  goog.base(this, 'createDom');
>>>>>>> newgitrepo

  this.decorateInternal(this.getElement());
};


/**
 * Decorates the floated element with the standard ScrollFloater CSS class.
 * @param {Element} element The element to decorate.
 * @override
 */
goog.ui.ScrollFloater.prototype.decorateInternal = function(element) {
<<<<<<< HEAD
  goog.ui.ScrollFloater.superClass_.decorateInternal.call(this, element);
=======
  goog.base(this, 'decorateInternal', element);
>>>>>>> newgitrepo

  goog.dom.classes.add(element, goog.ui.ScrollFloater.CSS_CLASS_);
};


/** @override */
goog.ui.ScrollFloater.prototype.enterDocument = function() {
<<<<<<< HEAD
  goog.ui.ScrollFloater.superClass_.enterDocument.call(this);
=======
  goog.base(this, 'enterDocument');
>>>>>>> newgitrepo

  if (!this.placeholder_) {
    this.placeholder_ =
        this.getDomHelper().createDom('div', {'style': 'visibility:hidden'});
  }

<<<<<<< HEAD
  this.originalOffset_ = goog.style.getPageOffsetTop(this.getElement());
  this.setScrollingEnabled(this.scrollingEnabled_);
  var win = this.getDomHelper().getWindow();
  this.getHandler().
      listen(win, goog.events.EventType.SCROLL, this.update_).
      listen(win, goog.events.EventType.RESIZE, this.handleResize_);
=======
  this.update();

  this.setScrollingEnabled(this.scrollingEnabled_);
  var win = this.getDomHelper().getWindow();
  this.getHandler().
      listen(win, goog.events.EventType.SCROLL, this.handleScroll_).
      listen(win, goog.events.EventType.RESIZE, this.update);
};


/**
 * Forces the component to update the cached element positions and sizes and
 * to re-evaluate whether the the component should be docked, floated or
 * pinned.
 */
goog.ui.ScrollFloater.prototype.update = function() {
  if (!this.isInDocument()) {
    return;
  }

  // These values can only be calculated when the element is in its original
  // state, so we dock first, and then re-evaluate.
  this.dock_();
  if (this.containerElement_) {
    this.containerBounds_ = goog.style.getBounds(this.containerElement_);
  }
  this.originalBounds_ = goog.style.getBounds(this.getElement());
  this.handleScroll_();
>>>>>>> newgitrepo
};


/** @override */
goog.ui.ScrollFloater.prototype.disposeInternal = function() {
<<<<<<< HEAD
  goog.ui.ScrollFloater.superClass_.disposeInternal.call(this);

  delete this.placeholder_;
=======
  goog.base(this, 'disposeInternal');

  this.placeholder_ = null;
>>>>>>> newgitrepo
};


/**
 * Sets whether the element should be floated if it scrolls out of view.
 * @param {boolean} enable Whether floating is enabled for this element.
 */
goog.ui.ScrollFloater.prototype.setScrollingEnabled = function(enable) {
  this.scrollingEnabled_ = enable;

  if (enable) {
    this.applyIeBgHack_();
<<<<<<< HEAD
    this.update_();
  } else {
    this.stopFloating_();
=======
    this.handleScroll_();
  } else {
    this.dock_();
>>>>>>> newgitrepo
  }
};


/**
 * @return {boolean} Whether the component is enabled for scroll-floating.
 */
goog.ui.ScrollFloater.prototype.isScrollingEnabled = function() {
  return this.scrollingEnabled_;
};


/**
 * @return {boolean} Whether the component is currently scroll-floating.
 */
goog.ui.ScrollFloater.prototype.isFloating = function() {
  return this.floating_;
};


/**
<<<<<<< HEAD
=======
 * @return {boolean} Whether the component is currently pinned to the bottom
 *     of the container.
 */
goog.ui.ScrollFloater.prototype.isPinned = function() {
  return this.pinned_;
};


/**
 * @param {number} offset A vertical offset from the top of the viewport, from
 *    which to start floating the element. Default is 0. This is useful in cases
 *    when there are 'position:fixed' elements covering up part of the viewport.
 */
goog.ui.ScrollFloater.prototype.setViewportTopOffset = function(offset) {
  this.viewportTopOffset_ = offset;
  this.update();
};


/**
 * @param {Element} container An element used to define the boundaries within
 *     which the floater can be positioned. If not specified, scrolling the page
 *     down far enough may result in the floated element extending past the
 *     containing element as it is being scrolled out of the viewport. In some
 *     cases, such as a list with a sticky header, this may be undesirable. If
 *     the container element is specified and the floated element extends past
 *     the bottom of the container, the element will be pinned to the bottom of
 *     the container.
 */
goog.ui.ScrollFloater.prototype.setContainerElement = function(container) {
  this.containerElement_ = container;
  this.update();
};


/**
>>>>>>> newgitrepo
 * When a scroll event occurs, compares the element's position to the current
 * document scroll position, and stops or starts floating behavior if needed.
 * @param {goog.events.Event=} opt_e The event, which is ignored.
 * @private
 */
<<<<<<< HEAD
goog.ui.ScrollFloater.prototype.update_ = function(opt_e) {
  if (this.scrollingEnabled_) {
    var doc = this.getDomHelper().getDocument();
    var currentScrollTop = this.getDomHelper().getDocumentScroll().y;

    if (currentScrollTop > this.originalOffset_) {
      this.startFloating_();
    } else {
      this.stopFloating_();
    }
  }
=======
goog.ui.ScrollFloater.prototype.handleScroll_ = function(opt_e) {
  if (this.scrollingEnabled_) {
    var scrollTop = this.getDomHelper().getDocumentScroll().y;

    if (this.originalBounds_.top - scrollTop >= this.viewportTopOffset_) {
      this.dock_();
      return;
    }

    // If the element extends past the container, we need to pin it instead.
    if (this.containerElement_) {
      var containerBottom = this.containerBounds_.top +
          this.containerBounds_.height;
      var effectiveElementHeight = this.originalBounds_.height +
          this.viewportTopOffset_;

      if (scrollTop > containerBottom - effectiveElementHeight) {
        this.pin_();
        return;
      }
    }

    this.float_();
  }
};


/**
 * Pins the element to the bottom of the container, making as much of the
 * element visible as possible without extending past it.
 * @private
 */
goog.ui.ScrollFloater.prototype.pin_ = function() {
  if (this.floating_ && !this.dock_()) {
    return;
  }

  // Ignore if the component is pinned or the PIN event is cancelled.
  if (this.pinned_ ||
      !this.dispatchEvent(goog.ui.ScrollFloater.EventType.PIN)) {
    return;
  }

  var elem = this.getElement();

  this.storeOriginalStyles_();

  elem.style.position = 'relative';
  elem.style.top = this.containerBounds_.height - this.originalBounds_.height -
      this.originalBounds_.top + this.containerBounds_.top + 'px';

  this.pinned_ = true;
>>>>>>> newgitrepo
};


/**
 * Begins floating behavior, making the element position:fixed (or IE hacked
 * equivalent) and inserting a placeholder where it used to be to keep the
 * layout from shifting around.
 * @private
 */
<<<<<<< HEAD
goog.ui.ScrollFloater.prototype.startFloating_ = function() {
=======
goog.ui.ScrollFloater.prototype.float_ = function() {
  if (this.pinned_ && !this.dock_()) {
    return;
  }

>>>>>>> newgitrepo
  // Ignore if the component is floating or the FLOAT event is cancelled.
  if (this.floating_ ||
      !this.dispatchEvent(goog.ui.ScrollFloater.EventType.FLOAT)) {
    return;
  }

  var elem = this.getElement();
  var doc = this.getDomHelper().getDocument();

  // Read properties of element before modifying it.
  var originalLeft_ = goog.style.getPageOffsetLeft(elem);
  var originalWidth_ = goog.style.getContentBoxSize(elem).width;

<<<<<<< HEAD
  this.originalStyles_ = {};

  // Store styles while not floating so we can restore them when the
  // element stops floating.
  goog.array.forEach(goog.ui.ScrollFloater.STORED_STYLE_PROPS_,
                     function(property) {
                       this.originalStyles_[property] = elem.style[property];
                     },
                     this);

  // Copy relevant styles to placeholder so it will be layed out the same
  // as the element that's about to be floated.
  goog.array.forEach(goog.ui.ScrollFloater.PLACEHOLDER_STYLE_PROPS_,
                     function(property) {
                       this.placeholder_.style[property] =
                           elem.style[property] ||
                               goog.style.getCascadedStyle(elem, property) ||
                               goog.style.getComputedStyle(elem, property);
                     },
                     this);
=======
  this.storeOriginalStyles_();
>>>>>>> newgitrepo

  goog.style.setSize(this.placeholder_, elem.offsetWidth, elem.offsetHeight);

  // Make element float.
<<<<<<< HEAD

=======
>>>>>>> newgitrepo
  goog.style.setStyle(elem, {
    'left': originalLeft_ + 'px',
    'width': originalWidth_ + 'px',
    'cssFloat': 'none'
  });

  // If parents are the same, avoid detaching and reattaching elem.
  // This prevents Flash embeds from being reloaded, for example.
  if (elem.parentNode == this.parentElement_) {
    elem.parentNode.insertBefore(this.placeholder_, elem);
  } else {
    elem.parentNode.replaceChild(this.placeholder_, elem);
    this.parentElement_.appendChild(elem);
  }

  // Versions of IE below 7-in-standards-mode don't handle 'position: fixed',
  // so we must emulate it using an IE-specific idiom for JS-based calculated
  // style values.
<<<<<<< HEAD

=======
>>>>>>> newgitrepo
  if (this.needsIePositionHack_()) {
    elem.style.position = 'absolute';
    elem.style.setExpression('top',
        'document.compatMode=="CSS1Compat"?' +
        'documentElement.scrollTop:document.body.scrollTop');
  } else {
    elem.style.position = 'fixed';
<<<<<<< HEAD
    elem.style.top = '0';
=======
    elem.style.top = this.viewportTopOffset_ + 'px';
>>>>>>> newgitrepo
  }

  this.floating_ = true;
};


/**
 * Stops floating behavior, returning element to its original state.
<<<<<<< HEAD
 * @private
 */
goog.ui.ScrollFloater.prototype.stopFloating_ = function() {
  // Ignore if the component is docked or the DOCK event is cancelled.
  if (!this.floating_ ||
      !this.dispatchEvent(goog.ui.ScrollFloater.EventType.DOCK)) {
    return;
=======
 * @return {boolean} True if the the element has been docked.  False if the
 *     element is already docked or the event was cancelled.
 * @private
 */
goog.ui.ScrollFloater.prototype.dock_ = function() {
  // Ignore if the component is docked or the DOCK event is cancelled.
  if (!(this.floating_ || this.pinned_) ||
      !this.dispatchEvent(goog.ui.ScrollFloater.EventType.DOCK)) {
    return false;
>>>>>>> newgitrepo
  }

  var elem = this.getElement();

<<<<<<< HEAD
  for (var prop in this.originalStyles_) {
    elem.style[prop] = this.originalStyles_[prop];
  }

  if (this.needsIePositionHack_()) {
    elem.style.removeExpression('top');
  }

  // If placeholder_ was inserted and didn't replace elem then elem has
  // the right parent already, no need to replace (which removes elem before
  // inserting it).
  if (this.placeholder_.parentNode == this.parentElement_) {
    this.placeholder_.parentNode.removeChild(this.placeholder_);
  } else {
    this.placeholder_.parentNode.replaceChild(elem, this.placeholder_);
  }
  this.floating_ = false;
=======
  if (this.floating_) {
    this.restoreOriginalStyles_();

    if (this.needsIePositionHack_()) {
      elem.style.removeExpression('top');
    }

    // If placeholder_ was inserted and didn't replace elem then elem has
    // the right parent already, no need to replace (which removes elem before
    // inserting it).
    if (this.placeholder_.parentNode == this.parentElement_) {
      this.placeholder_.parentNode.removeChild(this.placeholder_);
    } else {
      this.placeholder_.parentNode.replaceChild(elem, this.placeholder_);
    }
  }

  if (this.pinned_) {
    this.restoreOriginalStyles_();
  }

  this.floating_ = this.pinned_ = false;

  return true;
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Responds to window resize events by snapping the floater back to the new
 * version of its original position, then allowing it to float again if
 * appropriate.
 * @private
 */
goog.ui.ScrollFloater.prototype.handleResize_ = function() {
  this.stopFloating_();
  this.originalOffset_ = goog.style.getPageOffsetTop(this.getElement());
  this.update_();
=======
 * @private
 */
goog.ui.ScrollFloater.prototype.storeOriginalStyles_ = function() {
  var elem = this.getElement();
  this.originalStyles_ = {};

  // Store styles while not floating so we can restore them when the
  // element stops floating.
  goog.array.forEach(goog.ui.ScrollFloater.STORED_STYLE_PROPS_,
                     function(property) {
                       this.originalStyles_[property] = elem.style[property];
                     },
                     this);

  // Copy relevant styles to placeholder so it will be layed out the same
  // as the element that's about to be floated.
  goog.array.forEach(goog.ui.ScrollFloater.PLACEHOLDER_STYLE_PROPS_,
                     function(property) {
                       this.placeholder_.style[property] =
                           elem.style[property] ||
                               goog.style.getCascadedStyle(elem, property) ||
                               goog.style.getComputedStyle(elem, property);
                     },
                     this);
};


/**
 * @private
 */
goog.ui.ScrollFloater.prototype.restoreOriginalStyles_ = function() {
  var elem = this.getElement();
  for (var prop in this.originalStyles_) {
    elem.style[prop] = this.originalStyles_[prop];
  }
>>>>>>> newgitrepo
};


/**
 * Determines whether we need to apply the position hack to emulated position:
 * fixed on this browser.
 * @return {boolean} Whether the current browser needs the position hack.
 * @private
 */
goog.ui.ScrollFloater.prototype.needsIePositionHack_ = function() {
  return goog.userAgent.IE &&
<<<<<<< HEAD
      !(goog.userAgent.isVersion('7') &&
=======
      !(goog.userAgent.isVersionOrHigher('7') &&
>>>>>>> newgitrepo
          this.getDomHelper().isCss1CompatMode());
};


/**
 * Sets some magic CSS properties that make float-scrolling work smoothly
 * in IE6 (and IE7 in quirks mode). Without this hack, the floating element
 * will appear jumpy when you scroll the document. This involves modifying
 * the background of the HTML element (or BODY in quirks mode). If there's
 * already a background image in use this is not required.
 * For further reading, see
 * http://annevankesteren.nl/2005/01/position-fixed-in-ie
 * @private
 */
goog.ui.ScrollFloater.prototype.applyIeBgHack_ = function() {
  if (this.needsIePositionHack_()) {
    var doc = this.getDomHelper().getDocument();
    var topLevelElement = goog.style.getClientViewportElement(doc);

    if (topLevelElement.currentStyle.backgroundImage == 'none') {
      // Using an https URL if the current windowbp is https avoids an IE
      // "This page contains a mix of secure and nonsecure items" warning.
      topLevelElement.style.backgroundImage =
          this.getDomHelper().getWindow().location.protocol == 'https:' ?
              'url(https:///)' : 'url(about:blank)';
      topLevelElement.style.backgroundAttachment = 'fixed';
    }
  }
};
