// Copyright 2007 The Closure Library Authors. All Rights Reserved.
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

<<<<<<< HEAD
/**
 * @fileoverview Utilities for adding, removing and setting ARIA roles
 * as defined by W3C ARIA Working Draft:
 *     http://www.w3.org/TR/2010/WD-wai-aria-20100916/
=======

/**
 * @fileoverview Utilities for adding, removing and setting ARIA roles and
 * states as defined by W3C ARIA standard: http://www.w3.org/TR/wai-aria/
>>>>>>> newgitrepo
 * All modern browsers have some form of ARIA support, so no browser checks are
 * performed when adding ARIA to components.
 *
 */
<<<<<<< HEAD
goog.provide('goog.a11y.aria');
goog.provide('goog.a11y.aria.LivePriority');
goog.provide('goog.a11y.aria.Role');
goog.provide('goog.a11y.aria.State');

goog.require('goog.dom');


/**
 * Enumeration of ARIA states and properties.
 * @enum {string}
 */
goog.a11y.aria.State = {
  // ARIA property for setting the currently active descendant of an element,
  // for example the selected item in a list box. Value: ID of an element.
  ACTIVEDESCENDANT: 'activedescendant',

  // ARIA property that, if true, indicates that all of a changed region should
  // be presented, instead of only parts. Value: one of {true, false}.
  ATOMIC: 'atomic',

  // ARIA property to specify that input completion is provided. Value:
  // one of {'inline', 'list', 'both', 'none'}.
  AUTOCOMPLETE: 'autocomplete',

  // ARIA state to indicate that an element and its subtree are being updated.
  // Value: one of {true, false}.
  BUSY: 'busy',

  // ARIA state for a checked item. Value: one of {'true', 'false', 'mixed',
  // undefined}.
  CHECKED: 'checked',

  // ARIA property that identifies the element or elements whose contents or
  // presence are controlled by this element. Value: space-separated IDs of
  // other elements.
  CONTROLS: 'controls',

  // ARIA property that identifies the element or elements that describe
  // this element. Value: space-separated IDs of other elements.
  DESCRIBEDBY: 'describedby',

  // ARIA state for a disabled item. Value: one of {true, false}.
  DISABLED: 'disabled',

  // ARIA property that indicates what functions can be performed when a
  // dragged object is released on the drop target.  Value: one of
  // {'copy', 'move', 'link', 'execute', 'popup', 'none'}.
  DROPEFFECT: 'dropeffect',

  // ARIA state for setting whether the element like a tree node is expanded.
  // Value: one of {true, false, undefined}.
  EXPANDED: 'expanded',

  // ARIA property that identifies the next element (or elements) in the
  // recommended reading order of content. Value: space-separated ids of
  // elements to flow to.
  FLOWTO: 'flowto',

  // ARIA state that indicates an element's "grabbed" state in drag-and-drop.
  // Value: one of {true, false, undefined}.
  GRABBED: 'grabbed',

  // ARIA property indicating whether the element has a popup. Value: one of
  // {true, false}.
  HASPOPUP: 'haspopup',

  // ARIA state indicating that the element is not visible or perceivable
  // to any user. Value: one of {true, false}.
  HIDDEN: 'hidden',

  // ARIA state indicating that the entered value does not conform. Value:
  // one of {false, true, 'grammar', 'spelling'}
  INVALID: 'invalid',

  // ARIA property that provides a label to override any other text, value, or
  // contents used to describe this element. Value: string.
  LABEL: 'label',

  // ARIA property for setting the element which labels another element.
  // Value: space-separated IDs of elements.
  LABELLEDBY: 'labelledby',

  // ARIA property for setting the level of an element in the hierarchy.
  // Value: integer.
  LEVEL: 'level',

  // ARIA property indicating that an element will be updated, and
  // describes the types of updates the user agents, assistive technologies,
  // and user can expect from the live region. Value: one of {'off', 'polite',
  // 'assertive'}.
  LIVE: 'live',

  // ARIA property indicating whether a text box can accept multiline input.
  // Value: one of {true, false}.
  MULTILINE: 'multiline',

  // ARIA property indicating if the user may select more than one item.
  // Value: one of {true, false}.
  MULTISELECTABLE: 'multiselectable',

  // ARIA property indicating if the element is horizontal or vertical.
  // Value: one of {'vertical', 'horizontal'}.
  ORIENTATION: 'orientation',

  // ARIA property creating a visual, functional, or contextual parent/child
  // relationship when the DOM hierarchy can't be used to represent it.
  // Value: Space-separated IDs of elements.
  OWNS: 'owns',

  // ARIA property that defines an element's number of position in a list.
  // Value: integer.
  POSINSET: 'posinset',

  // ARIA state for a pressed item. Value: one of {true, false, undefined,
  // 'mixed'}.
  PRESSED: 'pressed',

  // ARIA property indicating that an element is not editable.  Value:
  // one of {true, false}.
  READONLY: 'readonly',

  // ARIA property indicating that change notifications within this subtree
  // of a live region should be announced. Value: one of {'additions',
  // 'removals', 'text', 'all', 'additions text'}.
  RELEVANT: 'relevant',

  // ARIA property indicating that user input is required on this element
  // before a form may be submitted. Value: one of {true, false}.
  REQUIRED: 'required',

  // ARIA state for setting the currently selected item in the list.
  // Value: one of {true, false, undefined}.
  SELECTED: 'selected',

  // ARIA property defining the number of items in a list. Value: integer.
  SETSIZE: 'setsize',

  // ARIA property indicating if items are sorted. Value: one of {'ascending',
  // 'descending', 'none', 'other'}.
  SORT: 'sort',

  // ARIA property for slider maximum value. Value: number.
  VALUEMAX: 'valuemax',

  // ARIA property for slider minimum value. Value: number.
  VALUEMIN: 'valuemin',

  // ARIA property for slider active value. Value: number.
  VALUENOW: 'valuenow',

  // ARIA property for slider active value represented as text. Value: string.
  VALUETEXT: 'valuetext'
=======

goog.provide('goog.a11y.aria');

goog.require('goog.a11y.aria.Role');
goog.require('goog.a11y.aria.State');
goog.require('goog.a11y.aria.datatables');
goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.dom');
goog.require('goog.dom.TagName');
goog.require('goog.object');
goog.require('goog.string');


/**
 * ARIA states/properties prefix.
 * @private
 */
goog.a11y.aria.ARIA_PREFIX_ = 'aria-';


/**
 * ARIA role attribute.
 * @private
 */
goog.a11y.aria.ROLE_ATTRIBUTE_ = 'role';


/**
 * A list of tag names for which we don't need to set ARIA role and states
 * because they have well supported semantics for screen readers or because
 * they don't contain content to be made accessible.
 * @private
 */
goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_ = [
  goog.dom.TagName.A,
  goog.dom.TagName.AREA,
  goog.dom.TagName.BUTTON,
  goog.dom.TagName.HEAD,
  goog.dom.TagName.INPUT,
  goog.dom.TagName.LINK,
  goog.dom.TagName.MENU,
  goog.dom.TagName.META,
  goog.dom.TagName.OPTGROUP,
  goog.dom.TagName.OPTION,
  goog.dom.TagName.PROGRESS,
  goog.dom.TagName.STYLE,
  goog.dom.TagName.SELECT,
  goog.dom.TagName.SOURCE,
  goog.dom.TagName.TEXTAREA,
  goog.dom.TagName.TITLE,
  goog.dom.TagName.TRACK
];


/**
 * Sets the role of an element. If the roleName is
 * empty string or null, the role for the element is removed.
 * We encourage clients to call the goog.a11y.aria.removeRole
 * method instead of setting null and empty string values.
 * Special handling for this case is added to ensure
 * backword compatibility with existing code.
 *
 * @param {!Element} element DOM node to set role of.
 * @param {!goog.a11y.aria.Role|string} roleName role name(s).
 */
goog.a11y.aria.setRole = function(element, roleName) {
  if (!roleName) {
    // Setting the ARIA role to empty string is not allowed
    // by the ARIA standard.
    goog.a11y.aria.removeRole(element);
  } else {
    if (goog.asserts.ENABLE_ASSERTS) {
      goog.asserts.assert(goog.object.containsValue(
          goog.a11y.aria.Role, roleName), 'No such ARIA role ' + roleName);
    }
    element.setAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_, roleName);
  }
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Enumeration of ARIA roles.
 * @enum {string}
 */
goog.a11y.aria.Role = {
  // ARIA role for an alert element that doesn't need to be explicitly closed.
  ALERT: 'alert',

  // ARIA role for an alert dialog element that takes focus and must be closed.
  ALERTDIALOG: 'alertdialog',

  // ARIA role for an application that implements its own keyboard navigation.
  APPLICATION: 'application',

  // ARIA role for an article.
  ARTICLE: 'article',

  // ARIA role for a banner containing mostly site content, not page content.
  BANNER: 'banner',

  // ARIA role for a button element.
  BUTTON: 'button',

  // ARIA role for a checkbox button element; use with the CHECKED state.
  CHECKBOX: 'checkbox',

  // ARIA role for a column header of a table or grid.
  COLUMNHEADER: 'columnheader',

  // ARIA role for a combo box element.
  COMBOBOX: 'combobox',

  // ARIA role for a supporting section of the document.
  COMPLEMENTARY: 'complementary',

  // ARIA role for a dialog, some descendant must take initial focus.
  DIALOG: 'dialog',

  // ARIA role for a directory, like a table of contents.
  DIRECTORY: 'directory',

  // ARIA role for a part of a page that's a document, not a web application.
  DOCUMENT: 'document',

  // ARIA role for a landmark region logically considered one form.
  FORM: 'form',

  // ARIA role for an interactive control of tabular data.
  GRID: 'grid',

  // ARIA role for a cell in a grid.
  GRIDCELL: 'gridcell',

  // ARIA role for a group of related elements like tree item siblings.
  GROUP: 'group',

  // ARIA role for a heading element.
  HEADING: 'heading',

  // ARIA role for a container of elements that together comprise one image.
  IMG: 'img',

  // ARIA role for a link.
  LINK: 'link',

  // ARIA role for a list of non-interactive list items.
  LIST: 'list',

  // ARIA role for a listbox.
  LISTBOX: 'listbox',

  // ARIA role for a list item.
  LISTITEM: 'listitem',

  // ARIA role for a live region where new information is added.
  LOG: 'log',

  // ARIA landmark role for the main content in a document. Use only once.
  MAIN: 'main',

  // ARIA role for a live region of non-essential information that changes.
  MARQUEE: 'marquee',

  // ARIA role for a mathematical expression.
  MATH: 'math',

  // ARIA role for a popup menu.
  MENU: 'menu',

  // ARIA role for a menubar element containing menu elements.
  MENUBAR: 'menubar',

  // ARIA role for menu item elements.
  MENU_ITEM: 'menuitem',

  // ARIA role for a checkbox box element inside a menu.
  MENU_ITEM_CHECKBOX: 'menuitemcheckbox',

  // ARIA role for a radio button element inside a menu.
  MENU_ITEM_RADIO: 'menuitemradio',

  // ARIA landmark role for a collection of navigation links.
  NAVIGATION: 'navigation',

  // ARIA role for a section ancillary to the main content.
  NOTE: 'note',

  // ARIA role for option items that are  children of combobox, listbox, menu,
  // radiogroup, or tree elements.
  OPTION: 'option',

  // ARIA role for ignorable cosmetic elements with no semantic significance.
  PRESENTATION: 'presentation',

  // ARIA role for a progress bar element.
  PROGRESSBAR: 'progressbar',

  // ARIA role for a radio button element.
  RADIO: 'radio',

  // ARIA role for a group of connected radio button elements.
  RADIOGROUP: 'radiogroup',

  // ARIA role for an important region of the page.
  REGION: 'region',

  // ARIA role for a row of cells in a grid.
  ROW: 'row',

  // ARIA role for a group of one or more rows in a grid.
  ROWGROUP: 'rowgroup',

  // ARIA role for a row header of a table or grid.
  ROWHEADER: 'rowheader',

  // ARIA role for a scrollbar element.
  SCROLLBAR: 'scrollbar',

  // ARIA landmark role for a part of the page providing search functionality.
  SEARCH: 'search',

  // ARIA role for a menu separator.
  SEPARATOR: 'separator',

  // ARIA role for a slider.
  SLIDER: 'slider',

  // ARIA role for a spin button.
  SPINBUTTON: 'spinbutton',

  // ARIA role for a live region with advisory info less severe than an alert.
  STATUS: 'status',

  // ARIA role for a tab button.
  TAB: 'tab',

  // ARIA role for a tab bar (i.e. a list of tab buttons).
  TAB_LIST: 'tablist',

  // ARIA role for a tab page (i.e. the element holding tab contents).
  TAB_PANEL: 'tabpanel',

  // ARIA role for a textbox element.
  TEXTBOX: 'textbox',

  // ARIA role for an element displaying elapsed time or time remaining.
  TIMER: 'timer',

  // ARIA role for a toolbar element.
  TOOLBAR: 'toolbar',

  // ARIA role for a tooltip element.
  TOOLTIP: 'tooltip',

  // ARIA role for a tree.
  TREE: 'tree',

  // ARIA role for a grid whose rows can be expanded and collapsed like a tree.
  TREEGRID: 'treegrid',

  // ARIA role for a tree item that sometimes may be expanded or collapsed.
  TREEITEM: 'treeitem'
=======
 * Gets role of an element.
 * @param {!Element} element DOM element to get role of.
 * @return {?goog.a11y.aria.Role} ARIA Role name.
 */
goog.a11y.aria.getRole = function(element) {
  var role = element.getAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_);
  return /** @type {goog.a11y.aria.Role} */ (role) || null;
};


/**
 * Removes role of an element.
 * @param {!Element} element DOM element to remove the role from.
 */
goog.a11y.aria.removeRole = function(element) {
  element.removeAttribute(goog.a11y.aria.ROLE_ATTRIBUTE_);
};


/**
 * Sets the state or property of an element.
 * @param {!Element} element DOM node where we set state.
 * @param {!(goog.a11y.aria.State|string)} stateName State attribute being set.
 *     Automatically adds prefix 'aria-' to the state name if the attribute is
 *     not an extra attribute.
 * @param {string|boolean|number|!goog.array.ArrayLike.<string>} value Value
 * for the state attribute.
 */
goog.a11y.aria.setState = function(element, stateName, value) {
  if (goog.isArrayLike(value)) {
    var array = /** @type {!goog.array.ArrayLike.<string>} */ (value);
    value = array.join(' ');
  }
  var attrStateName = goog.a11y.aria.getAriaAttributeName_(stateName);
  if (value === '' || value == undefined) {
    var defaultValueMap = goog.a11y.aria.datatables.getDefaultValuesMap();
    // Work around for browsers that don't properly support ARIA.
    // According to the ARIA W3C standard, user agents should allow
    // setting empty value which results in setting the default value
    // for the ARIA state if such exists. The exact text from the ARIA W3C
    // standard (http://www.w3.org/TR/wai-aria/states_and_properties):
    // "When a value is indicated as the default, the user agent
    // MUST follow the behavior prescribed by this value when the state or
    // property is empty or undefined."
    // The defaultValueMap contains the default values for the ARIA states
    // and has as a key the goog.a11y.aria.State constant for the state.
    if (stateName in defaultValueMap) {
      element.setAttribute(attrStateName, defaultValueMap[stateName]);
    } else {
      element.removeAttribute(attrStateName);
    }
  } else {
    element.setAttribute(attrStateName, value);
  }
};


/**
 * Remove the state or property for the element.
 * @param {!Element} element DOM node where we set state.
 * @param {!goog.a11y.aria.State} stateName State name.
 */
goog.a11y.aria.removeState = function(element, stateName) {
  element.removeAttribute(goog.a11y.aria.getAriaAttributeName_(stateName));
};


/**
 * Gets value of specified state or property.
 * @param {!Element} element DOM node to get state from.
 * @param {!goog.a11y.aria.State|string} stateName State name.
 * @return {string} Value of the state attribute.
 */
goog.a11y.aria.getState = function(element, stateName) {
  // TODO(user): return properly typed value result --
  // boolean, number, string, null. We should be able to chain
  // getState(...) and setState(...) methods.

  var attr =
      /** @type {string|number|boolean} */ (element.getAttribute(
      goog.a11y.aria.getAriaAttributeName_(stateName)));
  var isNullOrUndefined = attr == null || attr == undefined;
  return isNullOrUndefined ? '' : String(attr);
};


/**
 * Returns the activedescendant element for the input element by
 * using the activedescendant ARIA property of the given element.
 * @param {!Element} element DOM node to get activedescendant
 *     element for.
 * @return {?Element} DOM node of the activedescendant, if found.
 */
goog.a11y.aria.getActiveDescendant = function(element) {
  var id = goog.a11y.aria.getState(
      element, goog.a11y.aria.State.ACTIVEDESCENDANT);
  return goog.dom.getOwnerDocument(element).getElementById(id);
};


/**
 * Sets the activedescendant ARIA property value for an element.
 * If the activeElement is not null, it should have an id set.
 * @param {!Element} element DOM node to set activedescendant ARIA property to.
 * @param {?Element} activeElement DOM node being set as activedescendant.
 */
goog.a11y.aria.setActiveDescendant = function(element, activeElement) {
  var id = '';
  if (activeElement) {
    id = activeElement.id;
    goog.asserts.assert(id, 'The active element should have an id.');
  }

  goog.a11y.aria.setState(element, goog.a11y.aria.State.ACTIVEDESCENDANT, id);
};


/**
 * Gets the label of the given element.
 * @param {!Element} element DOM node to get label from.
 * @return {string} label The label.
 */
goog.a11y.aria.getLabel = function(element) {
  return goog.a11y.aria.getState(element, goog.a11y.aria.State.LABEL);
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Enumeration of ARIA state values for live regions.
 *
 * See http://www.w3.org/TR/wai-aria/states_and_properties#aria-live
 * for more information.
 * @enum {string}
 */
goog.a11y.aria.LivePriority = {
  /**
   * Default value.  Used for live regions that should never be spoken.
   */
  OFF: 'off',
  /**
   * Spoke only when the user is idle.  Best option in most cases.
   */
  POLITE: 'polite',
  /**
   * Spoken as soon as possible, which means that the information has a
   * higher priority than normal, but does not necessarily interrupt
   * immediately.
   */
  ASSERTIVE: 'assertive'
=======
 * Sets the label of the given element.
 * @param {!Element} element DOM node to set label to.
 * @param {string} label The label to set.
 */
goog.a11y.aria.setLabel = function(element, label) {
  goog.a11y.aria.setState(element, goog.a11y.aria.State.LABEL, label);
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Sets the role of an element.
 * @param {!Element} element DOM node to set role of.
 * @param {!goog.a11y.aria.Role|string} roleName role name(s).
 */
goog.a11y.aria.setRole = function(element, roleName) {
  element.setAttribute('role', roleName);
=======
 * Asserts that the element has a role set if it's not an HTML element whose
 * semantics is well supported by most screen readers.
 * Only to be used internally by the ARIA library in goog.a11y.aria.*.
 * @param {!Element} element The element to assert an ARIA role set.
 * @param {!goog.array.ArrayLike.<string>} allowedRoles The child roles of
 * the roles.
 */
goog.a11y.aria.assertRoleIsSetInternalUtil = function(element, allowedRoles) {
  if (goog.array.contains(goog.a11y.aria.TAGS_WITH_ASSUMED_ROLES_,
      element.tagName)) {
    return;
  }
  var elementRole = /** @type {string}*/ (goog.a11y.aria.getRole(element));
  goog.asserts.assert(elementRole != null,
      'The element ARIA role cannot be null.');

  goog.asserts.assert(goog.array.contains(allowedRoles, elementRole),
      'Non existing or incorrect role set for element.' +
      'The role set is "' + elementRole +
      '". The role should be any of "' + allowedRoles +
      '". Check the ARIA specification for more details ' +
      'http://www.w3.org/TR/wai-aria/roles.');
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Gets role of an element.
 * @param {!Element} element DOM node to get role of.
 * @return {!goog.a11y.aria.Role|string} rolename.
 */
goog.a11y.aria.getRole = function(element) {
  return /** @type {goog.a11y.aria.Role} */ (
      element.getAttribute('role')) || '';
=======
 * Gets the boolean value of an ARIA state/property.
 * Only to be used internally by the ARIA library in goog.a11y.aria.*.
 * @param {!Element} element The element to get the ARIA state for.
 * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
 * @return {?boolean} Boolean value for the ARIA state value or null if
 *     the state value is not 'true' or 'false'.
 */
goog.a11y.aria.getBooleanStateInternalUtil = function(element, stateName) {
  var stringValue = goog.a11y.aria.getState(element, stateName);
  if (stringValue == 'true') {
    return true;
  }
  if (stringValue == 'false') {
    return false;
  }
  return null;
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Sets the state or property of an element.
 * @param {!Element} element DOM node where we set state.
 * @param {!goog.a11y.aria.State|string} state State attribute being set.
 * Automatically adds prefix 'aria-' to the state name.
 * @param {string|boolean|number} value Value for the state attribute.
 */
goog.a11y.aria.setState = function(element, state, value) {
  element.setAttribute('aria-' + state, value);
=======
 * Gets the number value of an ARIA state/property.
 * Only to be used internally by the ARIA library in goog.a11y.aria.*.
 * @param {!Element} element The element to get the ARIA state for.
 * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
 * @return {?number} Number value for the ARIA state value or null if
 *     the state value is not a number.
 */
goog.a11y.aria.getNumberStateInternalUtil = function(element, stateName) {
  var stringValue = goog.a11y.aria.getState(element, stateName);
  if (goog.string.isNumeric(stringValue)) {
    return goog.string.toNumber(stringValue);
  }
  return null;
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Gets value of specified state or property.
 * @param {!Element} element DOM node to get state from.
 * @param {!goog.a11y.aria.State|string} stateName State name.
 * @return {string} Value of the state attribute.
 */
goog.a11y.aria.getState = function(element, stateName) {
  var attrb = /** @type {string|number|boolean} */ (
      element.getAttribute('aria-' + stateName));
  // Check for multiple representations -  attrb might
  // be a boolean or a string
  if ((attrb === true) || (attrb === false)) {
    return attrb ? 'true' : 'false';
  } else if (!attrb) {
    return '';
  } else {
    return String(attrb);
  }
=======
 * Gets array of strings value of the specified state or
 * property for the element.
 * Only to be used internally by the ARIA library in goog.a11y.aria.*.
 * @param {!Element} element DOM node to get state from.
 * @param {!goog.a11y.aria.State} stateName State name.
 * @return {!goog.array.ArrayLike.<string>} string Array
 *     value of the state attribute.
 */
goog.a11y.aria.getStringArrayStateInternalUtil = function(element, stateName) {
  var attrValue = element.getAttribute(
      goog.a11y.aria.getAriaAttributeName_(stateName));
  return goog.a11y.aria.splitStringOnWhitespace_(attrValue);
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Gets the activedescendant of the given element.
 * @param {!Element} element DOM node to get activedescendant from.
 * @return {Element} DOM node of the activedescendant.
 */
goog.a11y.aria.getActiveDescendant = function(element) {
  var id = goog.a11y.aria.getState(
      element, goog.a11y.aria.State.ACTIVEDESCENDANT);
  return goog.dom.getOwnerDocument(element).getElementById(id);
=======
 * Gets the string value of an ARIA state/property.
 * Only to be used internally by the ARIA library in goog.a11y.aria.*.
 * @param {!Element} element The element to get the ARIA state for.
 * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
 * @return {?string} String value for the ARIA state value or null if
 *     the state value is empty string.
 */
goog.a11y.aria.getStringStateInternalUtil = function(element, stateName) {
  var stringValue = goog.a11y.aria.getState(element, stateName);
  return stringValue || null;
>>>>>>> newgitrepo
};


/**
<<<<<<< HEAD
 * Sets the activedescendant value for an element.
 * @param {!Element} element DOM node to set activedescendant to.
 * @param {Element} activeElement DOM node being set as activedescendant.
 */
goog.a11y.aria.setActiveDescendant = function(element, activeElement) {
  goog.a11y.aria.setState(element, goog.a11y.aria.State.ACTIVEDESCENDANT,
      activeElement ? activeElement.id : '');
};

=======
 * Splits the input stringValue on whitespace.
 * @param {string} stringValue The value of the string to split.
 * @return {!goog.array.ArrayLike.<string>} string Array
 *     value as result of the split.
 * @private
 */
goog.a11y.aria.splitStringOnWhitespace_ = function(stringValue) {
  return stringValue ? stringValue.split(/\s+/) : [];
};


/**
 * Adds the 'aria-' prefix to ariaName.
 * @param {string} ariaName ARIA state/property name.
 * @private
 * @return {string} The ARIA attribute name with added 'aria-' prefix.
 * @throws {Error} If no such attribute exists.
 */
goog.a11y.aria.getAriaAttributeName_ = function(ariaName) {
  if (goog.asserts.ENABLE_ASSERTS) {
    goog.asserts.assert(ariaName, 'ARIA attribute cannot be empty.');
    goog.asserts.assert(goog.object.containsValue(
        goog.a11y.aria.State, ariaName),
        'No such ARIA attribute ' + ariaName);
  }
  return goog.a11y.aria.ARIA_PREFIX_ + ariaName;
};
>>>>>>> newgitrepo
