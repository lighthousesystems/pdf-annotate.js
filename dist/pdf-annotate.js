(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PDFAnnotate"] = factory();
	else
		root["PDFAnnotate"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/PDFJSAnnotate.js":
/*!******************************!*\
  !*** ./src/PDFJSAnnotate.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adapter/StoreAdapter */ "./src/adapter/StoreAdapter.js");
/* harmony import */ var _adapter_LocalStoreAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adapter/LocalStoreAdapter */ "./src/adapter/LocalStoreAdapter.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render/index.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UI */ "./src/UI/index.js");




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  /**
   * Abstract class that needs to be defined so PDFJSAnnotate
   * knows how to communicate with your server.
   */
  StoreAdapter: _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__["default"],

  /**
   * Implementation of StoreAdapter that stores annotation data to localStorage.
   */
  LocalStoreAdapter: _adapter_LocalStoreAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],

  /**
   * Abstract instance of StoreAdapter
   */
  __storeAdapter: new _adapter_StoreAdapter__WEBPACK_IMPORTED_MODULE_0__["default"](),

  /**
   * Getter for the underlying StoreAdapter property
   *
   * @return {StoreAdapter}
   */
  getStoreAdapter: function getStoreAdapter() {
    return this.__storeAdapter;
  },

  /**
   * Setter for the underlying StoreAdapter property
   *
   * @param {StoreAdapter} adapter The StoreAdapter implementation to be used.
   */
  setStoreAdapter: function setStoreAdapter(adapter) {
    // TODO this throws an error when bundled
    // if (!(adapter instanceof StoreAdapter)) {
    //   throw new Error('adapter must be an instance of StoreAdapter');
    // }
    this.__storeAdapter = adapter;
  },

  /**
   * UI is a helper for instrumenting UI interactions for creating,
   * editing, and deleting annotations in the browser.
   */
  UI: _UI__WEBPACK_IMPORTED_MODULE_3__["default"],

  /**
   * Render the annotations for a page in the PDF Document
   *
   * @param {SVGElement} svg The SVG element that annotations should be rendered to
   * @param {PageViewport} viewport The PDFPage.getViewport data
   * @param {Object} data The StoreAdapter.getAnnotations data
   * @return {Promise}
   */
  render: _render__WEBPACK_IMPORTED_MODULE_2__["default"],

  /**
   * Convenience method for getting annotation data
   *
   * @alias StoreAdapter.getAnnotations
   * @param {String} documentId The ID of the document
   * @param {String} pageNumber The page number
   * @return {Promise}
   */
  getAnnotations: function getAnnotations(documentId, pageNumber) {
    var _this$getStoreAdapter;

    return (_this$getStoreAdapter = this.getStoreAdapter()).getAnnotations.apply(_this$getStoreAdapter, arguments);
  }
});

/***/ }),

/***/ "./src/UI/edit.js":
/*!************************!*\
  !*** ./src/UI/edit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "selectAnnotationFromId": () => (/* binding */ selectAnnotationFromId),
/* harmony export */   "deleteAnnotationFromId": () => (/* binding */ deleteAnnotationFromId),
/* harmony export */   "clearAll": () => (/* binding */ clearAll),
/* harmony export */   "enableEdit": () => (/* binding */ enableEdit),
/* harmony export */   "disableEdit": () => (/* binding */ disableEdit)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./event */ "./src/UI/event.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }





var _enabled = false;
var isDragging = false,
    overlay;
var dragOffsetX, dragOffsetY, dragStartX, dragStartY;
var OVERLAY_BORDER_SIZE = 3;
/**
 * Create an overlay for editing an annotation.
 *
 * @param {Element} target The annotation element to apply overlay for
 */

function createEditOverlay(target) {
  destroyEditOverlay();
  overlay = document.createElement("div");
  var anchor = document.createElement("a");
  var parentNode = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGContainer)(target).parentNode;
  var id = target.getAttribute("data-pdf-annotate-id");
  var rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAnnotationRect)(target);
  showOverlay(rect, id, anchor, parentNode);
}
/**
 * Show the overlay.
 * @param {any} rect The rect.
 * @param {any} id The Id.
 * @param {any} anchor The anchor.
 * @param {any} parentNode The parent node.
 */


function showOverlay(rect, id, anchor, parentNode) {
  var styleLeft = rect.left - OVERLAY_BORDER_SIZE;
  var styleTop = rect.top - OVERLAY_BORDER_SIZE;
  overlay.setAttribute("id", "pdf-annotate-edit-overlay");
  overlay.setAttribute("data-target-id", id);
  overlay.style.boxSizing = "content-box";
  overlay.style.position = "absolute";
  overlay.style.top = "".concat(styleTop, "px");
  overlay.style.left = "".concat(styleLeft, "px");
  overlay.style.width = "".concat(rect.width, "px");
  overlay.style.height = "".concat(rect.height, "px");
  overlay.style.border = "".concat(OVERLAY_BORDER_SIZE, "px solid ").concat(_utils__WEBPACK_IMPORTED_MODULE_3__.BORDER_COLOR);
  overlay.style.borderRadius = "".concat(OVERLAY_BORDER_SIZE, "px");
  anchor.innerHTML = "×";
  anchor.setAttribute("href", "javascript://");
  anchor.style.background = "#fff";
  anchor.style.borderRadius = "20px";
  anchor.style.border = "1px solid #bbb";
  anchor.style.color = "#bbb";
  anchor.style.fontSize = "16px";
  anchor.style.padding = "2px";
  anchor.style.textAlign = "center";
  anchor.style.textDecoration = "none";
  anchor.style.position = "absolute";
  anchor.style.top = "-13px";
  anchor.style.right = "-13px";
  anchor.style.width = "25px";
  anchor.style.height = "25px";
  overlay.appendChild(anchor);
  parentNode.appendChild(overlay);
  document.addEventListener("click", handleDocumentClick);
  document.addEventListener("keyup", handleDocumentKeyup);
  document.addEventListener("mousedown", handleDocumentMousedown);
  anchor.addEventListener("click", deleteAnnotation);
  anchor.addEventListener("mouseover", function () {
    anchor.style.color = "#35A4DC";
    anchor.style.borderColor = "#999";
    anchor.style.boxShadow = "0 1px 1px #ccc";
  });
  anchor.addEventListener("mouseout", function () {
    anchor.style.color = "#bbb";
    anchor.style.borderColor = "#bbb";
    anchor.style.boxShadow = "";
  });
  overlay.addEventListener("mouseover", function () {
    if (!isDragging) {
      anchor.style.display = "";
    }
  });
  overlay.addEventListener("mouseout", function () {
    anchor.style.display = "none";
  }); // Create and dispatch an event that can be listened to outside of pdf-annotate.

  var event = new Event("annotation:select");
  document.dispatchEvent(event);
}
/**
 * Destroy the edit overlay if it exists.
 */


function destroyEditOverlay() {
  if (overlay) {
    overlay.parentNode.removeChild(overlay);
    overlay = null;
  }

  document.removeEventListener("click", handleDocumentClick);
  document.removeEventListener("keyup", handleDocumentKeyup);
  document.removeEventListener("mousedown", handleDocumentMousedown);
  document.removeEventListener("mousemove", handleDocumentMousemove);
  document.removeEventListener("mouseup", handleDocumentMouseup); // Create and dispatch an event that can be listened to outside of pdf-annotate.

  var event = new Event("annotation:deselect");
  document.dispatchEvent(event);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.enableUserSelect)();
}
/**
 * Delete currently selected annotation
 */


function deleteAnnotation() {
  if (!overlay) {
    return;
  }

  var annotationId = overlay.getAttribute("data-target-id");
  var nodes = document.querySelectorAll("[data-pdf-annotate-id=\"".concat(annotationId, "\"]"));
  var svg = overlay.parentNode.querySelector("svg.drawingLayer");

  var _getMetadata = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg),
      documentId = _getMetadata.documentId;

  _toConsumableArray(nodes).forEach(function (n) {
    n.parentNode.removeChild(n);
  });

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().deleteAnnotation(documentId, annotationId); // Create and dispatch an event that can be listened to outside of pdf-annotate.

  var event = new Event("annotation:delete");
  document.dispatchEvent(event);
  destroyEditOverlay();
}
/**
 * Handle document.click event
 *
 * @param {Event} e The DOM event that needs to be handled
 */


function handleDocumentClick(e) {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  } // Remove current overlay


  var overlay = document.getElementById("pdf-annotate-edit-overlay");

  if (overlay) {
    if (isDragging || e.target === overlay) {
      return;
    }

    destroyEditOverlay();
  }
}
/**
 * Handle document.keyup event
 *
 * @param {Event} e The DOM event that needs to be handled
 */


function handleDocumentKeyup(e) {
  if (overlay && e.keyCode === 46 && e.target.nodeName.toLowerCase() !== "textarea" && e.target.nodeName.toLowerCase() !== "input") {
    deleteAnnotation();
  }
}
/**
 * Handle document.mousedown event
 *
 * @param {Event} e The DOM event that needs to be handled
 */


function handleDocumentMousedown(e) {
  if (e.target !== overlay) {
    return;
  } // Highlight and strikeout annotations are bound to text within the document.
  // It doesn't make sense to allow repositioning these types of annotations.


  var annotationId = overlay.getAttribute("data-target-id");
  var target = document.querySelector("[data-pdf-annotate-id=\"".concat(annotationId, "\"]"));
  var type = target.getAttribute("data-pdf-annotate-type");

  if (type === "highlight" || type === "strikeout") {
    return;
  }

  isDragging = true;
  dragOffsetX = e.clientX;
  dragOffsetY = e.clientY;
  dragStartX = overlay.offsetLeft;
  dragStartY = overlay.offsetTop;
  overlay.style.background = "rgba(255, 255, 255, 0.7)";
  overlay.style.cursor = "move";
  overlay.querySelector("a").style.display = "none";
  document.addEventListener("mousemove", handleDocumentMousemove);
  document.addEventListener("mouseup", handleDocumentMouseup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.disableUserSelect)();
}
/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event that needs to be handled
 */


function handleDocumentMousemove(e) {
  var annotationId = overlay.getAttribute("data-target-id");
  var parentNode = overlay.parentNode;
  var rect = parentNode.getBoundingClientRect();
  var y = dragStartY + (e.clientY - dragOffsetY);
  var x = dragStartX + (e.clientX - dragOffsetX);
  var minY = 0;
  var maxY = rect.height;
  var minX = 0;
  var maxX = rect.width;

  if (y > minY && y + overlay.offsetHeight < maxY) {
    overlay.style.top = "".concat(y, "px");
  }

  if (x > minX && x + overlay.offsetWidth < maxX) {
    overlay.style.left = "".concat(x, "px");
  }
}
/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event that needs to be handled
 */


function handleDocumentMouseup(e) {
  var annotationId = overlay.getAttribute("data-target-id");
  var target = document.querySelectorAll("[data-pdf-annotate-id=\"".concat(annotationId, "\"]"));
  var type = target[0].getAttribute("data-pdf-annotate-type");
  var svg = overlay.parentNode.querySelector("svg.drawingLayer");

  var _getMetadata2 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg),
      documentId = _getMetadata2.documentId;

  overlay.querySelector("a").style.display = "";

  function getDelta(propX, propY) {
    return calcDelta(parseInt(target[0].getAttribute(propX), 10), parseInt(target[0].getAttribute(propY), 10));
  }

  function calcDelta(x, y) {
    return {
      deltaX: OVERLAY_BORDER_SIZE + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleDown)(svg, {
        x: overlay.offsetLeft
      }).x - x,
      deltaY: OVERLAY_BORDER_SIZE + (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleDown)(svg, {
        y: overlay.offsetTop
      }).y - y
    };
  }

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotation(documentId, annotationId).then(function (annotation) {
    if (["area", "highlight", "point", "textbox"].indexOf(type) > -1) {
      var _getDelta = getDelta("x", "y"),
          deltaX = _getDelta.deltaX,
          deltaY = _getDelta.deltaY;

      _toConsumableArray(target).forEach(function (t, i) {
        if (deltaY !== 0) {
          var modelY = parseInt(t.getAttribute("y"), 10) + deltaY;
          var viewY = modelY;

          if (type === "point") {
            viewY = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleUp)(svg, {
              viewY: viewY
            }).viewY;
          }

          t.setAttribute("y", viewY);

          if (annotation.rectangles) {
            annotation.rectangles[i].y = modelY;
          } else if (annotation.y) {
            annotation.y = modelY;
          }
        }

        if (deltaX !== 0) {
          var modelX = parseInt(t.getAttribute("x"), 10) + deltaX;
          var viewX = modelX;

          if (type === "point") {
            viewX = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleUp)(svg, {
              viewX: viewX
            }).viewX;
          }

          t.setAttribute("x", viewX);

          if (annotation.rectangles) {
            annotation.rectangles[i].x = modelX;
          } else if (annotation.x) {
            annotation.x = modelX;

            if (type === "textbox") {
              Array.from(t.children).forEach(function (child) {
                return child.setAttribute("x", modelX);
              });
            }
          }
        }
      }); // } else if (type === 'strikeout') {
      //   let { deltaX, deltaY } = getDelta('x1', 'y1');
      //   [...target].forEach(target, (t, i) => {
      //     if (deltaY !== 0) {
      //       t.setAttribute('y1', parseInt(t.getAttribute('y1'), 10) + deltaY);
      //       t.setAttribute('y2', parseInt(t.getAttribute('y2'), 10) + deltaY);
      //       annotation.rectangles[i].y = parseInt(t.getAttribute('y1'), 10);
      //     }
      //     if (deltaX !== 0) {
      //       t.setAttribute('x1', parseInt(t.getAttribute('x1'), 10) + deltaX);
      //       t.setAttribute('x2', parseInt(t.getAttribute('x2'), 10) + deltaX);
      //       annotation.rectangles[i].x = parseInt(t.getAttribute('x1'), 10);
      //     }
      //   });

    } else if (type === "drawing") {
      var rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleDown)(svg, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAnnotationRect)(target[0]));

      var _annotation$lines$ = _slicedToArray(annotation.lines[0], 2),
          originX = _annotation$lines$[0],
          originY = _annotation$lines$[1];

      var _calcDelta = calcDelta(originX, originY),
          _deltaX = _calcDelta.deltaX,
          _deltaY = _calcDelta.deltaY; // origin isn't necessarily at 0/0 in relation to overlay x/y
      // adjust the difference between overlay and drawing coords


      _deltaY += originY - rect.top;
      _deltaX += originX - rect.left;
      annotation.lines.forEach(function (line, i) {
        var _annotation$lines$i = _slicedToArray(annotation.lines[i], 2),
            x = _annotation$lines$i[0],
            y = _annotation$lines$i[1];

        annotation.lines[i][0] = x + _deltaX;
        annotation.lines[i][1] = y + _deltaY;
      });
      target[0].parentNode.removeChild(target[0]);
      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, annotation);
    }

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().editAnnotation(documentId, annotationId, annotation);
  });
  setTimeout(function () {
    isDragging = false;
  }, 0);
  overlay.style.background = "";
  overlay.style.cursor = "";
  document.removeEventListener("mousemove", handleDocumentMousemove);
  document.removeEventListener("mouseup", handleDocumentMouseup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_3__.enableUserSelect)();
}
/**
 * Handle annotation.click event
 *
 * @param {Element} e The annotation element that was clicked
 */


function handleAnnotationClick(target) {
  createEditOverlay(target);
}
/**
 * Select an annotation from an id.
 * @param {Number} id The annotation Id.
 */


function selectAnnotationFromId(id) {
  destroyEditOverlay();
  overlay = document.createElement("div");
  var anchor = document.createElement("a");
  var parentNode = document.querySelector("svg.drawingLayer").parentNode;
  var target = document.querySelector("[data-pdf-annotate-id=\"".concat(id, "\"]"));
  var rect = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getAnnotationRect)(target);
  showOverlay(rect, id, anchor, parentNode);
}
/**
 * Delete an annotation via its Id.
 * @param {Number} annotationId The annotation Id to delete.
 */

function deleteAnnotationFromId(annotationId) {
  var nodes = document.querySelectorAll("[data-pdf-annotate-id=\"".concat(annotationId, "\"]"));
  var svg = document.querySelector("svg.drawingLayer");

  var _getMetadata3 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg),
      documentId = _getMetadata3.documentId;

  _toConsumableArray(nodes).forEach(function (n) {
    n.parentNode.removeChild(n);
  });

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().deleteAnnotation(documentId, annotationId);
}
/**
 * Function to clear all annotations.
 */

function clearAll() {
  var svg = document.querySelector("svg.drawingLayer");

  var _getMetadata4 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg),
      documentId = _getMetadata4.documentId,
      pageNumber = _getMetadata4.pageNumber;

  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotations(documentId, pageNumber).then(function (annotations) {
    annotations.annotations.forEach(function (annotation) {
      return _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().deleteAnnotation(documentId, annotation.annotationId);
    });
  });
}
/**
 * Enable edit mode behavior.
 */

function enableEdit() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  (0,_event__WEBPACK_IMPORTED_MODULE_2__.addEventListener)("annotation:click", handleAnnotationClick);
}
/**
 * Disable edit mode behavior.
 */

function disableEdit() {
  destroyEditOverlay();

  if (!_enabled) {
    return;
  }

  _enabled = false;
  (0,_event__WEBPACK_IMPORTED_MODULE_2__.removeEventListener)("annotation:click", handleAnnotationClick);
}

/***/ }),

/***/ "./src/UI/event.js":
/*!*************************!*\
  !*** ./src/UI/event.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fireEvent": () => (/* binding */ fireEvent),
/* harmony export */   "addEventListener": () => (/* binding */ addEventListener),
/* harmony export */   "removeEventListener": () => (/* binding */ removeEventListener)
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");


var emitter = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
var clickNode;
/**
 * Handle document.click event
 *
 * @param {Event} e The DOM event to be handled
 */

document.addEventListener('click', function handleDocumentClick(e) {
  if (!(0,_utils__WEBPACK_IMPORTED_MODULE_1__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  var target = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.findAnnotationAtPoint)(e.clientX, e.clientY); // Emit annotation:blur if clickNode is no longer clicked

  if (clickNode && clickNode !== target) {
    emitter.emit('annotation:blur', clickNode);
  } // Emit annotation:click if target was clicked


  if (target) {
    emitter.emit('annotation:click', target);
  }

  clickNode = target;
}); // let mouseOverNode;
// document.addEventListener('mousemove', function handleDocumentMousemove(e) {
//   let target = findAnnotationAtPoint(e.clientX, e.clientY);
//
//   // Emit annotation:mouseout if target was mouseout'd
//   if (mouseOverNode && !target) {
//     emitter.emit('annotation:mouseout', mouseOverNode);
//   }
//
//   // Emit annotation:mouseover if target was mouseover'd
//   if (target && mouseOverNode !== target) {
//     emitter.emit('annotation:mouseover', target);
//   }
//
//   mouseOverNode = target;
// });

function fireEvent() {
  emitter.emit.apply(emitter, arguments);
}
;
function addEventListener() {
  emitter.on.apply(emitter, arguments);
}
;
function removeEventListener() {
  emitter.removeListener.apply(emitter, arguments);
}
;

/***/ }),

/***/ "./src/UI/index.js":
/*!*************************!*\
  !*** ./src/UI/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/UI/event.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/UI/edit.js");
/* harmony import */ var _pen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pen */ "./src/UI/pen.js");
/* harmony import */ var _point__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./point */ "./src/UI/point.js");
/* harmony import */ var _rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rect */ "./src/UI/rect.js");
/* harmony import */ var _text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./text */ "./src/UI/text.js");
/* harmony import */ var _page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page */ "./src/UI/page.js");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  addEventListener: _event__WEBPACK_IMPORTED_MODULE_0__.addEventListener,
  removeEventListener: _event__WEBPACK_IMPORTED_MODULE_0__.removeEventListener,
  fireEvent: _event__WEBPACK_IMPORTED_MODULE_0__.fireEvent,
  disableEdit: _edit__WEBPACK_IMPORTED_MODULE_1__.disableEdit,
  enableEdit: _edit__WEBPACK_IMPORTED_MODULE_1__.enableEdit,
  disablePen: _pen__WEBPACK_IMPORTED_MODULE_2__.disablePen,
  enablePen: _pen__WEBPACK_IMPORTED_MODULE_2__.enablePen,
  deleteAnnotationFromId: _edit__WEBPACK_IMPORTED_MODULE_1__.deleteAnnotationFromId,
  clearAll: _edit__WEBPACK_IMPORTED_MODULE_1__.clearAll,
  selectAnnotationFromId: _edit__WEBPACK_IMPORTED_MODULE_1__.selectAnnotationFromId,
  setPen: _pen__WEBPACK_IMPORTED_MODULE_2__.setPen,
  disablePoint: _point__WEBPACK_IMPORTED_MODULE_3__.disablePoint,
  enablePoint: _point__WEBPACK_IMPORTED_MODULE_3__.enablePoint,
  disableRect: _rect__WEBPACK_IMPORTED_MODULE_4__.disableRect,
  enableRect: _rect__WEBPACK_IMPORTED_MODULE_4__.enableRect,
  highlightText: _rect__WEBPACK_IMPORTED_MODULE_4__.highlightText,
  editRect: _rect__WEBPACK_IMPORTED_MODULE_4__.editRect,
  disableText: _text__WEBPACK_IMPORTED_MODULE_5__.disableText,
  enableText: _text__WEBPACK_IMPORTED_MODULE_5__.enableText,
  setText: _text__WEBPACK_IMPORTED_MODULE_5__.setText,
  openTextInput: _text__WEBPACK_IMPORTED_MODULE_5__.openTextInput,
  editText: _text__WEBPACK_IMPORTED_MODULE_5__.editText,
  createPage: _page__WEBPACK_IMPORTED_MODULE_6__.createPage,
  renderPage: _page__WEBPACK_IMPORTED_MODULE_6__.renderPage
});

/***/ }),

/***/ "./src/UI/page.js":
/*!************************!*\
  !*** ./src/UI/page.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPage": () => (/* binding */ createPage),
/* harmony export */   "renderPage": () => (/* binding */ renderPage)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _a11y_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../a11y/renderScreenReaderHints */ "./src/a11y/renderScreenReaderHints.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


 // Template for creating a new page

var PAGE_TEMPLATE = "\n  <div style=\"visibility: hidden;\" class=\"page\" data-loaded=\"false\">\n    <div class=\"canvasWrapper\">\n      <canvas></canvas>\n    </div>\n    <svg class=\"drawingLayer\"></svg>\n    <div class=\"textLayer\"></div>\n    <div class=\"annotationLayer\"></div>\n  </div>\n";
/**
 * Create a new page to be appended to the DOM.
 *
 * @param {Number} pageNumber The page number that is being created
 * @return {HTMLElement}
 */

function createPage(pageNumber) {
  var temp = document.createElement("div");
  temp.innerHTML = PAGE_TEMPLATE;
  var page = temp.children[0];
  var canvas = page.querySelector("canvas");
  page.setAttribute("id", "pageContainer".concat(pageNumber));
  page.setAttribute("data-page-number", pageNumber);
  canvas.mozOpaque = true;
  canvas.setAttribute("id", "page".concat(pageNumber));
  return page;
}
/**
 * Render a page that has already been created.
 *
 * @param {Number} pageNumber The page number to be rendered
 * @param {Object} renderOptions The options for rendering
 * @return {Promise} Settled once rendering has completed
 *  A settled Promise will be either:
 *    - fulfilled: [pdfPage, annotations]
 *    - rejected: Error
 */

function renderPage(pageNumber, renderOptions) {
  var documentId = renderOptions.documentId,
      pdfDocument = renderOptions.pdfDocument,
      scale = renderOptions.scale,
      rotate = renderOptions.rotate;
  var eventBus = new pdfjsViewer.EventBus(); // Load the page and annotations

  return Promise.all([pdfDocument.getPage(pageNumber), _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getAnnotations(documentId, pageNumber)]).then(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        pdfPage = _ref2[0],
        annotations = _ref2[1];

    var page = document.getElementById("pageContainer".concat(pageNumber));
    var svg = page.querySelector(".drawingLayer");
    var canvas = page.querySelector(".canvasWrapper canvas");
    var canvasContext = canvas.getContext("2d", {
      alpha: false
    });
    var viewport = pdfPage.getViewport({
      scale: scale,
      rotation: rotate
    });
    var transform = scalePage(pageNumber, viewport, canvasContext); // Render the page

    return Promise.all([pdfPage.render({
      canvasContext: canvasContext,
      viewport: viewport,
      transform: transform,
      renderInteractiveForms: true
    }), _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].render(svg, viewport, annotations)]).then(function () {
      // Text content is needed for a11y, but is also necessary for creating
      // highlight and strikeout annotations which require selecting text.
      return pdfPage.getTextContent({
        normalizeWhitespace: true
      }).then(function (textContent) {
        return new Promise(function (resolve, reject) {
          // Render text layer for a11y of text content
          var textLayer = page.querySelector(".textLayer");
          var textLayerFactory = new pdfjsViewer.DefaultTextLayerFactory();
          var textLayerBuilder = textLayerFactory.createTextLayerBuilder(textLayer, pageNumber - 1, viewport, false, eventBus);
          textLayerBuilder.setTextContent(textContent);
          textLayerBuilder.render();
          var annotationLayer = page.querySelector(".annotationLayer");
          var annotationLayerFactory = new pdfjsViewer.DefaultAnnotationLayerFactory();
          var annotationLayerBuilder = annotationLayerFactory.createAnnotationLayerBuilder(annotationLayer, pdfPage);
          annotationLayerBuilder.render(viewport); // Enable a11y for annotations
          // Timeout is needed to wait for `textLayerBuilder.render`

          setTimeout(function () {
            try {
              (0,_a11y_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_1__["default"])(annotations.annotations);
              resolve();
            } catch (e) {
              reject(e);
            }
          });
        });
      });
    }).then(function () {
      // Indicate that the page was loaded
      page.setAttribute("data-loaded", "true");
      return [pdfPage, annotations];
    });
  });
}
/**
 * Scale the elements of a page.
 *
 * @param {Number} pageNumber The page number to be scaled
 * @param {Object} viewport The viewport of the PDF page (see pdfPage.getViewport(scale, rotate))
 * @param {Object} context The canvas context that the PDF page is rendered to
 * @return {Array} The transform data for rendering the PDF page
 */

function scalePage(pageNumber, viewport, context) {
  var page = document.getElementById("pageContainer".concat(pageNumber));
  var canvas = page.querySelector(".canvasWrapper canvas");
  var svg = page.querySelector(".drawingLayer");
  var wrapper = page.querySelector(".canvasWrapper");
  var textLayer = page.querySelector(".textLayer");
  var outputScale = getOutputScale(context);
  var transform = !outputScale.scaled ? null : [outputScale.sx, 0, 0, outputScale.sy, 0, 0];
  var sfx = approximateFraction(outputScale.sx);
  var sfy = approximateFraction(outputScale.sy); // Adjust width/height for scale

  page.style.visibility = "";
  canvas.width = roundToDivide(viewport.width * outputScale.sx, sfx[0]);
  canvas.height = roundToDivide(viewport.height * outputScale.sy, sfy[0]);
  canvas.style.width = roundToDivide(viewport.width, sfx[1]) + "px";
  canvas.style.height = roundToDivide(viewport.height, sfx[1]) + "px";
  svg.setAttribute("width", viewport.width);
  svg.setAttribute("height", viewport.height);
  svg.style.width = "".concat(viewport.width, "px");
  svg.style.height = "".concat(viewport.height, "px");
  page.style.width = "".concat(viewport.width, "px");
  page.style.height = "".concat(viewport.height, "px");
  wrapper.style.width = "".concat(viewport.width, "px");
  wrapper.style.height = "".concat(viewport.height, "px");
  textLayer.style.width = "".concat(viewport.width, "px");
  textLayer.style.height = "".concat(viewport.height, "px");
  return transform;
}
/**
 * The following methods are taken from mozilla/pdf.js and as such fall under
 * the Apache License (http://www.apache.org/licenses/).
 *
 * Original source can be found at mozilla/pdf.js:
 * https://github.com/mozilla/pdf.js/blob/master/web/ui_utils.js
 */

/**
 * Approximates a float number as a fraction using Farey sequence (max order
 * of 8).
 *
 * @param {Number} x Positive float number
 * @return {Array} Estimated fraction: the first array item is a numerator,
 *                 the second one is a denominator.
 */


function approximateFraction(x) {
  // Fast path for int numbers or their inversions.
  if (Math.floor(x) === x) {
    return [x, 1];
  }

  var xinv = 1 / x;
  var limit = 8;

  if (xinv > limit) {
    return [1, limit];
  } else if (Math.floor(xinv) === xinv) {
    return [1, xinv];
  }

  var x_ = x > 1 ? xinv : x; // a/b and c/d are neighbours in Farey sequence.

  var a = 0,
      b = 1,
      c = 1,
      d = 1; // Limit search to order 8.

  while (true) {
    // Generating next term in sequence (order of q).
    var p = a + c,
        q = b + d;

    if (q > limit) {
      break;
    }

    if (x_ <= p / q) {
      c = p;
      d = q;
    } else {
      a = p;
      b = q;
    }
  } // Select closest of neighbours to x.


  if (x_ - a / b < c / d - x_) {
    return x_ === x ? [a, b] : [b, a];
  } else {
    return x_ === x ? [c, d] : [d, c];
  }
}

function getOutputScale(ctx) {
  var devicePixelRatio = window.devicePixelRatio || 1;
  var backingStoreRatio = ctx.webkitBackingStorePixelRatio || 1;
  var pixelRatio = devicePixelRatio / backingStoreRatio;
  return {
    sx: pixelRatio,
    sy: pixelRatio,
    scaled: pixelRatio !== 1
  };
}

function roundToDivide(x, div) {
  var r = x % div;
  return r === 0 ? x : Math.round(x - r + div);
}

/***/ }),

/***/ "./src/UI/pen.js":
/*!***********************!*\
  !*** ./src/UI/pen.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setPen": () => (/* binding */ setPen),
/* harmony export */   "enablePen": () => (/* binding */ enablePen),
/* harmony export */   "disablePen": () => (/* binding */ disablePen)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");



var _enabled = false;

var _penSize;

var _penColor;

var path;
var lines;
/**
 * Handle document.mousedown event
 */

function handleDocumentMousedown() {
  path = null;
  lines = [];
  document.addEventListener('mousemove', handleDocumentMousemove);
  document.addEventListener('mouseup', handleDocumentMouseup);
}
/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to be handled
 */


function handleDocumentMouseup(e) {
  var svg;

  if (lines.length > 1 && (svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY))) {
    var _getMetadata = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg),
        documentId = _getMetadata.documentId,
        pageNumber = _getMetadata.pageNumber;

    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, {
      type: 'drawing',
      width: _penSize,
      color: _penColor,
      lines: lines
    }).then(function (annotation) {
      if (path) {
        svg.removeChild(path);
      }

      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, annotation);
    });
  }

  document.removeEventListener('mousemove', handleDocumentMousemove);
  document.removeEventListener('mouseup', handleDocumentMouseup);
}
/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event to be handled
 */


function handleDocumentMousemove(e) {
  savePoint(e.clientX, e.clientY);
}
/**
 * Handle document.keyup event
 *
 * @param {Event} e The DOM event to be handled
 */


function handleDocumentKeyup(e) {
  // Cancel rect if Esc is pressed
  if (e.keyCode === 27) {
    lines = null;
    path.parentNode.removeChild(path);
    document.removeEventListener('mousemove', handleDocumentMousemove);
    document.removeEventListener('mouseup', handleDocumentMouseup);
  }
}
/**
 * Save a point to the line being drawn.
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 */


function savePoint(x, y) {
  var svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(x, y);

  if (!svg) {
    return;
  }

  var rect = svg.getBoundingClientRect();
  var point = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scaleDown)(svg, {
    x: x - rect.left,
    y: y - rect.top
  });
  lines.push([point.x, point.y]);

  if (lines.length <= 1) {
    return;
  }

  if (path) {
    svg.removeChild(path);
  }

  path = (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, {
    type: 'drawing',
    color: _penColor,
    width: _penSize,
    lines: lines
  });
}
/**
 * Set the attributes of the pen.
 *
 * @param {Number} penSize The size of the lines drawn by the pen
 * @param {String} penColor The color of the lines drawn by the pen
 */


function setPen() {
  var penSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var penColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '000000';
  _penSize = parseInt(penSize, 10);
  _penColor = penColor;
}
/**
 * Enable the pen behavior
 */

function enablePen() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener('mousedown', handleDocumentMousedown);
  document.addEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.disableUserSelect)();
}
/**
 * Disable the pen behavior
 */

function disablePen() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener('mousedown', handleDocumentMousedown);
  document.removeEventListener('keyup', handleDocumentKeyup);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.enableUserSelect)();
}

/***/ }),

/***/ "./src/UI/point.js":
/*!*************************!*\
  !*** ./src/UI/point.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enablePoint": () => (/* binding */ enablePoint),
/* harmony export */   "disablePoint": () => (/* binding */ disablePoint)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");



var _enabled = false;
var input;
/**
 * Handle document.mouseup event
 *
 * @param {Event} The DOM event to be handled
 */

function handleDocumentMouseup(e) {
  if (input || !(0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  input = document.createElement("input");
  input.setAttribute("id", "pdf-annotate-point-input");
  input.setAttribute("placeholder", "Enter comment");
  input.style.border = "3px solid ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR);
  input.style.borderRadius = "3px";
  input.style.position = "fixed";
  input.style.top = "".concat(e.clientY, "px");
  input.style.left = "".concat(e.clientX, "px");
  input.addEventListener("blur", handleInputBlur);
  input.addEventListener("keyup", handleInputKeyup);
  document.getElementById("content-wrapper").appendChild(input);
  input.focus();
}
/**
 * Handle input.blur event
 */


function handleInputBlur() {
  savePoint();
}
/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */


function handleInputKeyup(e) {
  if (e.keyCode === 27) {
    closeInput();
  } else if (e.keyCode === 13) {
    savePoint();
  }
}
/**
 * Save a new point annotation from input
 */


function savePoint() {
  if (input.value.trim().length > 0) {
    var clientX = parseInt(input.style.left, 10);
    var clientY = parseInt(input.style.top, 10);
    var content = input.value.trim();
    var svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(clientX, clientY);

    if (!svg) {
      return;
    }

    var rect = svg.getBoundingClientRect();

    var _getMetadata = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg),
        documentId = _getMetadata.documentId,
        pageNumber = _getMetadata.pageNumber;

    var annotation = Object.assign({
      type: "point"
    }, (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scaleDown)(svg, {
      x: clientX - rect.left,
      y: clientY - rect.top
    }));
    _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (annotation) {
      _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addComment(documentId, annotation.uuid, content);
      (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, annotation);
    });
  }

  closeInput();
}
/**
 * Close the input element
 */


function closeInput() {
  input.removeEventListener("blur", handleInputBlur);
  input.removeEventListener("keyup", handleInputKeyup);
  document.getElementById("content-wrapper").removeChild(input);
  input = null;
}
/**
 * Enable point annotation behavior
 */


function enablePoint() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener("mouseup", handleDocumentMouseup);
}
/**
 * Disable point annotation behavior
 */

function disablePoint() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener("mouseup", handleDocumentMouseup);
}

/***/ }),

/***/ "./src/UI/rect.js":
/*!************************!*\
  !*** ./src/UI/rect.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableRect": () => (/* binding */ enableRect),
/* harmony export */   "disableRect": () => (/* binding */ disableRect),
/* harmony export */   "highlightText": () => (/* binding */ highlightText),
/* harmony export */   "editRect": () => (/* binding */ editRect)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var _enabled = false;

var _type;

var overlay;
var originY;
var originX;
/**
 * Get the current window selection as rects
 *
 * @return {Array} An Array of rects
 */

function getSelectionRects() {
  try {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var rects = range.getClientRects();

    if (rects.length > 0 && rects[0].width > 0 && rects[0].height > 0) {
      return rects;
    }
  } catch (e) {}

  return null;
}
/**
 * Handle document.mousedown event
 *
 * @param {Event} e The DOM event to handle
 */


function handleDocumentMousedown(e) {
  var svg;

  if (_type !== "area" || !(svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(e.clientX, e.clientY))) {
    return;
  }

  var rect = svg.getBoundingClientRect();
  originY = e.clientY;
  originX = e.clientX;
  overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "".concat(originY - rect.top, "px");
  overlay.style.left = "".concat(originX - rect.left, "px");
  overlay.style.border = "3px solid ".concat(_utils__WEBPACK_IMPORTED_MODULE_2__.BORDER_COLOR);
  overlay.style.borderRadius = "3px";
  svg.parentNode.appendChild(overlay);
  document.addEventListener("mousemove", handleDocumentMousemove);
  (0,_utils__WEBPACK_IMPORTED_MODULE_2__.disableUserSelect)();
}
/**
 * Handle document.mousemove event
 *
 * @param {Event} e The DOM event to handle
 */


function handleDocumentMousemove(e) {
  var svg = overlay.parentNode.querySelector("svg.drawingLayer");
  var rect = svg.getBoundingClientRect();

  if (originX + (e.clientX - originX) < rect.right) {
    overlay.style.width = "".concat(e.clientX - originX, "px");
  }

  if (originY + (e.clientY - originY) < rect.bottom) {
    overlay.style.height = "".concat(e.clientY - originY, "px");
  }
}
/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */


function handleDocumentMouseup(e) {
  var rects;
  var annotation;

  if (_type !== "area" && (rects = getSelectionRects())) {
    var svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(rects[0].left, rects[0].top);
    annotation = saveRect(_type, _toConsumableArray(rects).map(function (r) {
      return {
        top: r.top,
        left: r.left,
        width: r.width,
        height: r.height
      };
    }));
  } else if (_type === "area" && overlay) {
    var _svg = overlay.parentNode.querySelector("svg.drawingLayer");

    var rect = _svg.getBoundingClientRect();

    annotation = saveRect(_type, [{
      top: parseInt(overlay.style.top, 10) + rect.top,
      left: parseInt(overlay.style.left, 10) + rect.left,
      width: parseInt(overlay.style.width, 10),
      height: parseInt(overlay.style.height, 10)
    }]);
    overlay.parentNode.removeChild(overlay);
    overlay = null;
    document.removeEventListener("mousemove", handleDocumentMousemove);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.enableUserSelect)();
  }

  return annotation;
}
/**
 * Handle document.keyup event
 *
 * @param {Event} e The DOM event to handle
 */


function handleDocumentKeyup(e) {
  // Cancel rect if Esc is pressed
  if (e.keyCode === 27) {
    var selection = window.getSelection();
    selection.removeAllRanges();

    if (overlay && overlay.parentNode) {
      overlay.parentNode.removeChild(overlay);
      overlay = null;
      document.removeEventListener("mousemove", handleDocumentMousemove);
    }
  }
}
/**
 * Save a rect annotation
 *
 * @param {String} type The type of rect (area, highlight, strikeout)
 * @param {Array} rects The rects to use for annotation
 * @param {String} color The color of the rects
 */


function saveRect(type, rects, color) {
  var svg = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.findSVGAtPoint)(rects[0].left, rects[0].top);
  var node;
  var annotation;

  if (!svg) {
    return;
  }

  var boundingRect = svg.getBoundingClientRect();

  if (!color) {
    if (type === "highlight") {
      color = "FFFF00";
    } else if (type === "strikeout") {
      color = "FF0000";
    }
  } // Initialize the annotation


  annotation = {
    type: type,
    color: color,
    rectangles: _toConsumableArray(rects).map(function (r) {
      var offset = 0;

      if (type === "strikeout") {
        offset = r.height / 2;
      }

      return (0,_utils__WEBPACK_IMPORTED_MODULE_2__.scaleDown)(svg, {
        y: r.top + offset - boundingRect.top,
        x: r.left - boundingRect.left,
        width: r.width,
        height: r.height
      });
    }).filter(function (r) {
      return r.width > 0 && r.height > 0 && r.x > -1 && r.y > -1;
    })
  }; // Short circuit if no rectangles exist

  if (annotation.rectangles.length === 0) {
    return;
  } // Special treatment for area as it only supports a single rect


  if (type === "area") {
    var rect = annotation.rectangles[0];
    delete annotation.rectangles;
    annotation.x = rect.x;
    annotation.y = rect.y;
    annotation.width = rect.width;
    annotation.height = rect.height;
  }

  var _getMetadata = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getMetadata)(svg),
      documentId = _getMetadata.documentId,
      pageNumber = _getMetadata.pageNumber; // Add the annotation


  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (newAnnotation) {
    annotation = newAnnotation;
    (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, newAnnotation);
  });
  return annotation;
}
/**
 * Enable rect behavior
 */


function enableRect(type) {
  _type = type;

  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener("mouseup", handleDocumentMouseup);
  document.addEventListener("mousedown", handleDocumentMousedown);
  document.addEventListener("keyup", handleDocumentKeyup);
}
/**
 * Disable rect behavior
 */

function disableRect() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener("mouseup", handleDocumentMouseup);
  document.removeEventListener("mousedown", handleDocumentMousedown);
  document.removeEventListener("keyup", handleDocumentKeyup);
}
/**
 * Highlight the selected text.
 * @param {string} type The type of selection.
 * @param {Event} event The event.
 */

function highlightText(type, event) {
  // Set the tool as enabled and set the type.
  _enabled = true;
  _type = type; // Perform the select.

  var annotation = handleDocumentMouseup(event); // Clear the selected text.

  var selection = window.getSelection();
  selection.removeAllRanges();
  _enabled = false;
  return annotation;
}
function editRect(_x, _x2, _x3) {
  return _editRect.apply(this, arguments);
}

function _editRect() {
  _editRect = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(type, annotationId, attributes) {
    var annotation;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotation("", annotationId);

          case 2:
            annotation = _context.sent;
            annotation.color = attributes.color || annotation.color;
            annotation.stroke = "#".concat(attributes.stroke);
            annotation.opacity = attributes.opacity || annotation.opacity;
            annotation.strokeWidth = attributes.strokeWidth || annotation.strokeWidth;
            _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().editAnnotation("", annotationId, annotation);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _editRect.apply(this, arguments);
}

/***/ }),

/***/ "./src/UI/text.js":
/*!************************!*\
  !*** ./src/UI/text.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setText": () => (/* binding */ setText),
/* harmony export */   "enableText": () => (/* binding */ enableText),
/* harmony export */   "disableText": () => (/* binding */ disableText),
/* harmony export */   "openTextInput": () => (/* binding */ openTextInput),
/* harmony export */   "editText": () => (/* binding */ editText)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _render_appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../render/appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _render_renderText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render/renderText */ "./src/render/renderText.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ "./src/UI/utils.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }





var _enabled = false;
var textArea;

var _textSize;

var _textColor;
/**
 * Handle document.mouseup event
 *
 * @param {Event} e The DOM event to handle
 */


function handleDocumentMouseup(e) {
  if (textArea || !(0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(e.clientX, e.clientY)) {
    return;
  }

  textArea = document.createElement("textarea");
  textArea.setAttribute("id", "pdf-annotate-text-input");
  textArea.style.border = "3px solid ".concat(_utils__WEBPACK_IMPORTED_MODULE_3__.BORDER_COLOR);
  textArea.style.borderRadius = "3px";
  textArea.style.position = "fixed";
  textArea.style.top = "".concat(e.clientY, "px");
  textArea.style.left = "".concat(e.clientX, "px");
  textArea.style.fontSize = "".concat(_textSize, "px");
  textArea.style.background = "transparent";
  textArea.style.whiteSpace = "pre-line";
  textArea.addEventListener("blur", handleInputBlur);
  textArea.addEventListener("keyup", handleInputKeyup);
  document.getElementById("content-wrapper").appendChild(textArea);
  textArea.focus();
}
/**
 * Handle input.blur event
 */


function handleInputBlur() {
  saveText();
}
/**
 * Handle input.keyup event
 *
 * @param {Event} e The DOM event to handle
 */


function handleInputKeyup(e) {
  if (e.keyCode === 27) {
    closeInput();
  }
}
/**
 * Save a text annotation from input
 */


function saveText() {
  var clientX = parseInt(textArea.style.left, 10);
  var clientY = parseInt(textArea.style.top, 10);
  var svg = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.findSVGAtPoint)(clientX, clientY);

  if (!svg) {
    return;
  }

  var _getMetadata = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg),
      documentId = _getMetadata.documentId,
      pageNumber = _getMetadata.pageNumber;

  var rect = svg.getBoundingClientRect();
  var annotation = Object.assign({
    type: "textbox",
    size: _textSize,
    color: _textColor,
    content: textArea.value.trim()
  }, (0,_utils__WEBPACK_IMPORTED_MODULE_3__.scaleDown)(svg, {
    x: clientX - rect.left,
    y: clientY - rect.top,
    width: textArea.offsetWidth,
    height: textArea.offsetHeight
  }));
  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().addAnnotation(documentId, pageNumber, annotation).then(function (annotation) {
    (0,_render_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, annotation); // Create and dispatch an event that can be listened to outside of pdf-annotate.

    var event = new CustomEvent("text:saved", {
      detail: {
        uuid: annotation.uuid,
        content: annotation.content
      }
    });
    document.dispatchEvent(event);
  });
  closeInput();
}
/**
 * Close the input
 */


function closeInput() {
  if (textArea) {
    textArea.removeEventListener("blur", handleInputBlur);
    textArea.removeEventListener("keyup", handleInputKeyup);
    document.getElementById("content-wrapper").removeChild(textArea);
    textArea = null;
    disableText();
  }
}
/**
 * Set the text attributes
 *
 * @param {Number} textSize The size of the text
 * @param {String} textColor The color of the text
 */


function setText() {
  var textSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 12;
  var textColor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "000000";
  _textSize = parseInt(textSize, 10);
  _textColor = textColor;
}
/**
 * Enable text behavior
 */

function enableText() {
  if (_enabled) {
    return;
  }

  _enabled = true;
  document.addEventListener("mouseup", handleDocumentMouseup);
}
/**
 * Disable text behavior
 */

function disableText() {
  if (!_enabled) {
    return;
  }

  _enabled = false;
  document.removeEventListener("mouseup", handleDocumentMouseup);
}
function openTextInput(_x) {
  return _openTextInput.apply(this, arguments);
}
/**
 * Edit the text for a text annotation.
 * @param {Number} annotationId The annotation id.
 * @param {String} newText The new text to set
 */

function _openTextInput() {
  _openTextInput = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(e) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            handleDocumentMouseup(e);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _openTextInput.apply(this, arguments);
}

function editText(_x2, _x3) {
  return _editText.apply(this, arguments);
}

function _editText() {
  _editText = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(annotationId, newText) {
    var svg, nodes, _getMetadata2, documentId, annotation;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            svg = document.querySelector("svg.drawingLayer");
            nodes = document.querySelector("[data-pdf-annotate-id=\"".concat(annotationId, "\"]"));
            _getMetadata2 = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.getMetadata)(svg), documentId = _getMetadata2.documentId;
            _context2.next = 5;
            return _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getAnnotation(documentId, annotationId);

          case 5:
            annotation = _context2.sent;
            annotation.content = newText;
            nodes.innerHTML = (0,_render_renderText__WEBPACK_IMPORTED_MODULE_2__.processTextContent)(annotation);
            _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().editAnnotation(documentId, annotationId, annotation);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _editText.apply(this, arguments);
}

/***/ }),

/***/ "./src/UI/utils.js":
/*!*************************!*\
  !*** ./src/UI/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BORDER_COLOR": () => (/* binding */ BORDER_COLOR),
/* harmony export */   "findSVGContainer": () => (/* binding */ findSVGContainer),
/* harmony export */   "findSVGAtPoint": () => (/* binding */ findSVGAtPoint),
/* harmony export */   "findAnnotationAtPoint": () => (/* binding */ findAnnotationAtPoint),
/* harmony export */   "pointIntersectsRect": () => (/* binding */ pointIntersectsRect),
/* harmony export */   "getOffsetAnnotationRect": () => (/* binding */ getOffsetAnnotationRect),
/* harmony export */   "getAnnotationRect": () => (/* binding */ getAnnotationRect),
/* harmony export */   "scaleUp": () => (/* binding */ scaleUp),
/* harmony export */   "scaleDown": () => (/* binding */ scaleDown),
/* harmony export */   "getScroll": () => (/* binding */ getScroll),
/* harmony export */   "getOffset": () => (/* binding */ getOffset),
/* harmony export */   "disableUserSelect": () => (/* binding */ disableUserSelect),
/* harmony export */   "enableUserSelect": () => (/* binding */ enableUserSelect),
/* harmony export */   "getMetadata": () => (/* binding */ getMetadata)
/* harmony export */ });
/* harmony import */ var create_stylesheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! create-stylesheet */ "./node_modules/create-stylesheet/index.js");
/* harmony import */ var create_stylesheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(create_stylesheet__WEBPACK_IMPORTED_MODULE_0__);

var BORDER_COLOR = "#00BFFF";
var userSelectStyleSheet = create_stylesheet__WEBPACK_IMPORTED_MODULE_0___default()({
  body: {
    "-webkit-user-select": "none",
    "-moz-user-select": "none",
    "-ms-user-select": "none",
    "user-select": "none"
  }
});
userSelectStyleSheet.setAttribute("data-pdf-annotate-user-select", "true");
/**
 * Find the SVGElement that contains all the annotations for a page
 *
 * @param {Element} node An annotation within that container
 * @return {SVGElement} The container SVG or null if it can't be found
 */

function findSVGContainer(node) {
  var parentNode = node;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    if (parentNode.nodeName.toUpperCase() === "SVG" && parentNode.getAttribute("data-pdf-annotate-container") === "true") {
      return parentNode;
    }
  }

  return null;
}
/**
 * Find an SVGElement container at a given point
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @return {SVGElement} The container SVG or null if one can't be found
 */

function findSVGAtPoint(x, y) {
  var elements = document.querySelectorAll('svg[data-pdf-annotate-container="true"]');

  for (var i = 0, l = elements.length; i < l; i++) {
    var el = elements[i];
    var rect = el.getBoundingClientRect();

    if (pointIntersectsRect(x, y, rect)) {
      return el;
    }
  }

  return null;
}
/**
 * Find an Element that represents an annotation at a given point
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @return {Element} The annotation element or null if one can't be found
 */

function findAnnotationAtPoint(x, y) {
  var svg = findSVGAtPoint(x, y);

  if (!svg) {
    return;
  }

  var elements = svg.querySelectorAll("[data-pdf-annotate-type]"); // Find a target element within SVG

  for (var i = 0, l = elements.length; i < l; i++) {
    var el = elements[i];

    if (pointIntersectsRect(x, y, getOffsetAnnotationRect(el))) {
      return el;
    }
  }

  return null;
}
/**
 * Determine if a point intersects a rect
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Object} rect The points of a rect (likely from getBoundingClientRect)
 * @return {Boolean} True if a collision occurs, otherwise false
 */

function pointIntersectsRect(x, y, rect) {
  return y >= rect.top && y <= rect.bottom && x >= rect.left && x <= rect.right;
}
/**
 * Get the rect of an annotation element accounting for offset.
 *
 * @param {Element} el The element to get the rect of
 * @return {Object} The dimensions of the element
 */

function getOffsetAnnotationRect(el) {
  var rect = getAnnotationRect(el);

  var _getOffset = getOffset(el),
      offsetLeft = _getOffset.offsetLeft,
      offsetTop = _getOffset.offsetTop;

  return {
    top: rect.top + offsetTop,
    left: rect.left + offsetLeft,
    right: rect.right + offsetLeft,
    bottom: rect.bottom + offsetTop
  };
}
/**
 * Get the rect of an annotation element.
 *
 * @param {Element} el The element to get the rect of
 * @return {Object} The dimensions of the element
 */

function getAnnotationRect(el) {
  var h = 0,
      w = 0,
      x = 0,
      y = 0;
  var rect = el.getBoundingClientRect(); // TODO this should be calculated somehow

  var LINE_OFFSET = 16;

  switch (el.nodeName.toLowerCase()) {
    case "path":
      var minX, maxX, minY, maxY;
      el.getAttribute("d").replace(/Z/, "").split("M").splice(1).forEach(function (p) {
        var s = p.split(" ").map(function (i) {
          return parseInt(i, 10);
        });

        if (typeof minX === "undefined" || s[0] < minX) {
          minX = s[0];
        }

        if (typeof maxX === "undefined" || s[2] > maxX) {
          maxX = s[2];
        }

        if (typeof minY === "undefined" || s[1] < minY) {
          minY = s[1];
        }

        if (typeof maxY === "undefined" || s[3] > maxY) {
          maxY = s[3];
        }
      });
      h = maxY - minY;
      w = maxX - minX;
      x = minX;
      y = minY;
      break;

    case "line":
      h = parseInt(el.getAttribute("y2"), 10) - parseInt(el.getAttribute("y1"), 10);
      w = parseInt(el.getAttribute("x2"), 10) - parseInt(el.getAttribute("x1"), 10);
      x = parseInt(el.getAttribute("x1"), 10);
      y = parseInt(el.getAttribute("y1"), 10);

      if (h === 0) {
        h += LINE_OFFSET;
        y -= LINE_OFFSET / 2;
      }

      break;

    case "text":
      h = rect.height;
      w = rect.width;
      x = parseInt(el.getAttribute("x"), 10);
      y = parseInt(el.getAttribute("y"), 10);
      break;

    case "g":
      var _getOffset2 = getOffset(el),
          offsetLeft = _getOffset2.offsetLeft,
          offsetTop = _getOffset2.offsetTop;

      h = rect.height;
      w = rect.width;
      x = rect.left - offsetLeft;
      y = rect.top - offsetTop;

      if (el.getAttribute("data-pdf-annotate-type") === "strikeout") {
        h += LINE_OFFSET;
        y -= LINE_OFFSET / 2;
      }

      break;

    case "rect":
    case "svg":
      h = parseInt(el.getAttribute("height"), 10);
      w = parseInt(el.getAttribute("width"), 10);
      x = parseInt(el.getAttribute("x"), 10);
      y = parseInt(el.getAttribute("y"), 10);
      break;
  } // Result provides same properties as getBoundingClientRect


  var result = {
    top: y,
    left: x,
    width: w,
    height: h,
    right: x + w,
    bottom: y + h
  }; // For the case of nested SVG (point annotations) and grouped
  // lines or rects no adjustment needs to be made for scale.
  // I assume that the scale is already being handled
  // natively by virtue of the `transform` attribute.

  if (!["svg", "g"].includes(el.nodeName.toLowerCase())) {
    result = scaleUp(findSVGAtPoint(rect.left, rect.top), result);
  }

  return result;
}
/**
 * Adjust scale from normalized scale (100%) to rendered scale.
 *
 * @param {SVGElement} svg The SVG to gather metadata from
 * @param {Object} rect A map of numeric values to scale
 * @return {Object} A copy of `rect` with values scaled up
 */

function scaleUp(svg, rect) {
  var result = {};

  var _getMetadata = getMetadata(svg),
      viewport = _getMetadata.viewport;

  Object.keys(rect).forEach(function (key) {
    result[key] = rect[key] * viewport.scale;
  });
  return result;
}
/**
 * Adjust scale from rendered scale to a normalized scale (100%).
 *
 * @param {SVGElement} svg The SVG to gather metadata from
 * @param {Object} rect A map of numeric values to scale
 * @return {Object} A copy of `rect` with values scaled down
 */

function scaleDown(svg, rect) {
  var result = {};

  var _getMetadata2 = getMetadata(svg),
      viewport = _getMetadata2.viewport;

  Object.keys(rect).forEach(function (key) {
    result[key] = rect[key] / viewport.scale;
  });
  return result;
}
/**
 * Get the scroll position of an element, accounting for parent elements
 *
 * @param {Element} el The element to get the scroll position for
 * @return {Object} The scrollTop and scrollLeft position
 */

function getScroll(el) {
  var scrollTop = 0;
  var scrollLeft = 0;
  var parentNode = el;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    scrollTop += parentNode.scrollTop;
    scrollLeft += parentNode.scrollLeft;
  }

  return {
    scrollTop: scrollTop,
    scrollLeft: scrollLeft
  };
}
/**
 * Get the offset position of an element, accounting for parent elements
 *
 * @param {Element} el The element to get the offset position for
 * @return {Object} The offsetTop and offsetLeft position
 */

function getOffset(el) {
  var parentNode = el;

  while ((parentNode = parentNode.parentNode) && parentNode !== document) {
    if (parentNode.nodeName.toUpperCase() === "SVG") {
      break;
    }
  }

  var rect = parentNode.getBoundingClientRect();
  return {
    offsetLeft: rect.left,
    offsetTop: rect.top
  };
}
/**
 * Disable user ability to select text on page
 */

function disableUserSelect() {
  if (!userSelectStyleSheet.parentNode) {
    document.head.appendChild(userSelectStyleSheet);
  }
}
/**
 * Enable user ability to select text on page
 */

function enableUserSelect() {
  if (userSelectStyleSheet.parentNode) {
    userSelectStyleSheet.parentNode.removeChild(userSelectStyleSheet);
  }
}
/**
 * Get the metadata for a SVG container
 *
 * @param {SVGElement} svg The SVG container to get metadata for
 */

function getMetadata(svg) {
  return {
    documentId: svg.getAttribute("data-pdf-annotate-document"),
    pageNumber: parseInt(svg.getAttribute("data-pdf-annotate-page"), 10),
    viewport: JSON.parse(svg.getAttribute("data-pdf-annotate-viewport"))
  };
}

/***/ }),

/***/ "./src/a11y/createScreenReaderOnly.js":
/*!********************************************!*\
  !*** ./src/a11y/createScreenReaderOnly.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createScreenReaderOnly)
/* harmony export */ });
/**
 * Create a node that is only visible to screen readers
 *
 * @param {String} content The text content that should be read by screen reader
 * @param {String} [annotationId] The ID of the annotation assocaited
 * @return {Element} An Element that is only visible to screen readers
 */
function createScreenReaderOnly(content, annotationId) {
  var node = document.createElement('div');
  var text = document.createTextNode(content);
  node.appendChild(text);
  node.setAttribute('id', "pdf-annotate-screenreader-".concat(annotationId));
  node.style.position = 'absolute';
  node.style.left = '-10000px';
  node.style.top = 'auto';
  node.style.width = '1px';
  node.style.height = '1px';
  node.style.overflow = 'hidden';
  return node;
}

/***/ }),

/***/ "./src/a11y/initEventHandlers.js":
/*!***************************************!*\
  !*** ./src/a11y/initEventHandlers.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ initEventHandlers)
/* harmony export */ });
/* harmony import */ var _insertScreenReaderHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertScreenReaderHint */ "./src/a11y/insertScreenReaderHint.js");
/* harmony import */ var _renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderScreenReaderHints */ "./src/a11y/renderScreenReaderHints.js");
/* harmony import */ var _insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertScreenReaderComment */ "./src/a11y/insertScreenReaderComment.js");
/* harmony import */ var _renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderScreenReaderComments */ "./src/a11y/renderScreenReaderComments.js");
/* harmony import */ var _UI_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/event */ "./src/UI/event.js");
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");






/**
 * Initialize the event handlers for keeping screen reader hints synced with data
 */

function initEventHandlers() {
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_4__.addEventListener)('annotation:add', function (documentId, pageNumber, annotation) {
    reorderAnnotationsByType(documentId, pageNumber, annotation.type);
  });
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_4__.addEventListener)('annotation:edit', function (documentId, annotationId, annotation) {
    reorderAnnotationsByType(documentId, annotation.page, annotation.type);
  });
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_4__.addEventListener)('annotation:delete', removeAnnotation);
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_4__.addEventListener)('comment:add', insertComment);
  (0,_UI_event__WEBPACK_IMPORTED_MODULE_4__.addEventListener)('comment:delete', removeComment);
}
/**
 * Reorder the annotation numbers by annotation type
 *
 * @param {String} documentId The ID of the document
 * @param {Number} pageNumber The page number of the annotations
 * @param {Strig} type The annotation type
 */

function reorderAnnotationsByType(documentId, pageNumber, type) {
  _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_5__["default"].getStoreAdapter().getAnnotations(documentId, pageNumber).then(function (annotations) {
    return annotations.annotations.filter(function (a) {
      return a.type === type;
    });
  }).then(function (annotations) {
    annotations.forEach(function (a) {
      removeAnnotation(documentId, a.uuid);
    });
    return annotations;
  }).then(_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_1__["default"]);
}
/**
 * Remove the screen reader hint for an annotation
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The Id of the annotation
 */


function removeAnnotation(documentId, annotationId) {
  removeElementById("pdf-annotate-screenreader-".concat(annotationId));
  removeElementById("pdf-annotate-screenreader-".concat(annotationId, "-end"));
}
/**
 * Insert a screen reader hint for a comment
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The ID of tha assocated annotation
 * @param {Object} comment The comment to insert a hint for
 */


function insertComment(documentId, annotationId, comment) {
  var list = document.querySelector("pdf-annotate-screenreader-comment-list-".concat(annotationId));
  var promise;

  if (!list) {
    promise = (0,_renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__["default"])(documentId, annotationId, []).then(function () {
      list = document.querySelector("pdf-annotate-screenreader-comment-list-".concat(annotationId));
      return true;
    });
  } else {
    promise = Promise.resolve(true);
  }

  promise.then(function () {
    (0,_insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_2__["default"])(comment);
  });
}
/**
 * Remove a screen reader hint for a comment
 *
 * @param {String} documentId The ID of the document
 * @param {String} commentId The ID of the comment
 */


function removeComment(documentId, commentId) {
  removeElementById("pdf-annotate-screenreader-comment-".concat(commentId));
}
/**
 * Remove an element from the DOM by it's ID if it exists
 *
 * @param {String} elementID The ID of the element to be removed
 */


function removeElementById(elementId) {
  var el = document.getElementById(elementId);

  if (el) {
    el.parentNode.removeChild(el);
  }
}

/***/ }),

/***/ "./src/a11y/insertElementWithinChildren.js":
/*!*************************************************!*\
  !*** ./src/a11y/insertElementWithinChildren.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertElementWithinChildren)
/* harmony export */ });
/* harmony import */ var _insertElementWithinElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertElementWithinElement */ "./src/a11y/insertElementWithinElement.js");
/* harmony import */ var _UI_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/utils */ "./src/UI/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Insert an element at a point within the document.
 * This algorithm will try to insert between elements if possible.
 * It will however use `insertElementWithinElement` if it is more accurate.
 *
 * @param {Element} el The element to be inserted
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page number to limit elements to
 * @return {Boolean} True if element was able to be inserted, otherwise false
 */

function insertElementWithinChildren(el, x, y, pageNumber) {
  // Try and use most accurate method of inserting within an element
  if ((0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_0__["default"])(el, x, y, pageNumber, true)) {
    return true;
  } // Fall back to inserting between elements


  var svg = document.querySelector("svg[data-pdf-annotate-page=\"".concat(pageNumber, "\"]"));
  var rect = svg.getBoundingClientRect();

  var nodes = _toConsumableArray(svg.parentNode.querySelectorAll('.textLayer > div'));

  y = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleUp)(svg, {
    y: y
  }).y + rect.top;
  x = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.scaleUp)(svg, {
    x: x
  }).x + rect.left; // Find the best node to insert before

  for (var i = 0, l = nodes.length; i < l; i++) {
    var n = nodes[i];
    var r = n.getBoundingClientRect();

    if (y <= r.top) {
      n.parentNode.insertBefore(el, n);
      return true;
    }
  } // If all else fails try to append to the bottom


  var textLayer = svg.parentNode.querySelector('.textLayer');

  if (textLayer) {
    var textRect = textLayer.getBoundingClientRect();

    if ((0,_UI_utils__WEBPACK_IMPORTED_MODULE_1__.pointIntersectsRect)(x, y, textRect)) {
      textLayer.appendChild(el);
      return true;
    }
  }

  return false;
}

/***/ }),

/***/ "./src/a11y/insertElementWithinElement.js":
/*!************************************************!*\
  !*** ./src/a11y/insertElementWithinElement.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertElementWithinElement)
/* harmony export */ });
/* harmony import */ var _UI_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../UI/utils */ "./src/UI/utils.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * Insert an element at a point within the document.
 * This algorithm will only insert within an element amidst it's text content.
 *
 * @param {Element} el The element to be inserted
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page number to limit elements to
 * @param {Boolean} insertBefore Whether the element is to be inserted before or after x
 * @return {Boolean} True if element was able to be inserted, otherwise false
 */

function insertElementWithinElement(el, x, y, pageNumber, insertBefore) {
  var OFFSET_ADJUST = 2; // If inserting before adjust `x` by looking for element a few px to the right
  // Otherwise adjust a few px to the left
  // This is to allow a little tolerance by searching within the box, instead
  // of getting a false negative by testing right on the border.

  x = Math.max(x + OFFSET_ADJUST * (insertBefore ? 1 : -1), 0);
  var node = textLayerElementFromPoint(x, y + OFFSET_ADJUST, pageNumber);

  if (!node) {
    return false;
  } // Now that node has been found inverse the adjustment for `x`.
  // This is done to accomodate tolerance by cutting off on the outside of the
  // text boundary, instead of missing a character by cutting off within.


  x = x + OFFSET_ADJUST * (insertBefore ? -1 : 1);
  var svg = document.querySelector("svg[data-pdf-annotate-page=\"".concat(pageNumber, "\"]"));
  var left = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_0__.scaleDown)(svg, {
    left: node.getBoundingClientRect().left
  }).left - svg.getBoundingClientRect().left;
  var temp = node.cloneNode(true);
  var head = temp.innerHTML.split('');
  var tail = []; // Insert temp off screen

  temp.style.position = 'absolute';
  temp.style.top = '-10000px';
  temp.style.left = '-10000px';
  document.body.appendChild(temp);

  while (head.length) {
    // Don't insert within HTML tags
    if (head[head.length - 1] === '>') {
      while (head.length) {
        tail.unshift(head.pop());

        if (tail[0] === '<') {
          break;
        }
      }
    } // Check if width of temp based on current head value satisfies x


    temp.innerHTML = head.join('');
    var width = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_0__.scaleDown)(svg, {
      width: temp.getBoundingClientRect().width
    }).width;

    if (left + width <= x) {
      break;
    }

    tail.unshift(head.pop());
  } // Update original node with new markup, including element to be inserted


  node.innerHTML = head.join('') + el.outerHTML + tail.join('');
  temp.parentNode.removeChild(temp);
  return true;
}
/**
 * Get a text layer element at a given point on a page
 *
 * @param {Number} x The x coordinate of the point
 * @param {Number} y The y coordinate of the point
 * @param {Number} pageNumber The page to limit elements to
 * @return {Element} First text layer element found at the point
 */

function textLayerElementFromPoint(x, y, pageNumber) {
  var svg = document.querySelector("svg[data-pdf-annotate-page=\"".concat(pageNumber, "\"]"));
  var rect = svg.getBoundingClientRect();
  y = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_0__.scaleUp)(svg, {
    y: y
  }).y + rect.top;
  x = (0,_UI_utils__WEBPACK_IMPORTED_MODULE_0__.scaleUp)(svg, {
    x: x
  }).x + rect.left;
  return _toConsumableArray(svg.parentNode.querySelectorAll('.textLayer [data-canvas-width]')).filter(function (el) {
    return (0,_UI_utils__WEBPACK_IMPORTED_MODULE_0__.pointIntersectsRect)(x, y, el.getBoundingClientRect());
  })[0];
}

/***/ }),

/***/ "./src/a11y/insertScreenReaderComment.js":
/*!***********************************************!*\
  !*** ./src/a11y/insertScreenReaderComment.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertScreenReaderComment)
/* harmony export */ });
/**
 * Insert a comment into the DOM to be available by screen reader
 *
 * @param {Object} comment The comment to be inserted
 */
function insertScreenReaderComment(comment) {
  if (!comment) {
    return;
  }

  var list = document.querySelector("#pdf-annotate-screenreader-".concat(comment.annotation, " ol"));

  if (list) {
    var item = document.createElement('li');
    item.setAttribute('id', "pdf-annotate-screenreader-comment-".concat(comment.uuid));
    item.appendChild(document.createTextNode("".concat(comment.content)));
    list.appendChild(item);
  }
}

/***/ }),

/***/ "./src/a11y/insertScreenReaderHint.js":
/*!********************************************!*\
  !*** ./src/a11y/insertScreenReaderHint.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ insertScreenReaderHint)
/* harmony export */ });
/* harmony import */ var _createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createScreenReaderOnly */ "./src/a11y/createScreenReaderOnly.js");
/* harmony import */ var _insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertElementWithinChildren */ "./src/a11y/insertElementWithinChildren.js");
/* harmony import */ var _insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./insertElementWithinElement */ "./src/a11y/insertElementWithinElement.js");
/* harmony import */ var _renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderScreenReaderComments */ "./src/a11y/renderScreenReaderComments.js");



 // Annotation types that support comments

var COMMENT_TYPES = ['highlight', 'point', 'area'];
/**
 * Insert a hint into the DOM for screen readers for a specific annotation.
 *
 * @param {Object} annotation The annotation to insert a hint for
 * @param {Number} num The number of the annotation out of all annotations of the same type
 */

function insertScreenReaderHint(annotation) {
  var num = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  switch (annotation.type) {
    case 'highlight':
    case 'strikeout':
      var rects = annotation.rectangles;
      var first = rects[0];
      var last = rects[rects.length - 1];
      (0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])("Begin ".concat(annotation.type, " annotation ").concat(num), annotation.uuid), first.x, first.y, annotation.page, true);
      (0,_insertElementWithinElement__WEBPACK_IMPORTED_MODULE_2__["default"])((0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])("End ".concat(annotation.type, " annotation ").concat(num), "".concat(annotation.uuid, "-end")), last.x + last.width, last.y, annotation.page, false);
      break;

    case 'textbox':
    case 'point':
      var text = annotation.type === 'textbox' ? " (content: ".concat(annotation.content, ")") : '';
      (0,_insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])("".concat(annotation.type, " annotation ").concat(num).concat(text), annotation.uuid), annotation.x, annotation.y, annotation.page);
      break;

    case 'drawing':
    case 'area':
      var x = typeof annotation.x !== 'undefined' ? annotation.x : annotation.lines[0][0];
      var y = typeof annotation.y !== 'undefined' ? annotation.y : annotation.lines[0][1];
      (0,_insertElementWithinChildren__WEBPACK_IMPORTED_MODULE_1__["default"])((0,_createScreenReaderOnly__WEBPACK_IMPORTED_MODULE_0__["default"])("Unlabeled drawing", annotation.uuid), x, y, annotation.page);
      break;
  } // Include comments in screen reader hint


  if (COMMENT_TYPES.includes(annotation.type)) {
    (0,_renderScreenReaderComments__WEBPACK_IMPORTED_MODULE_3__["default"])(annotation.documentId, annotation.uuid);
  }
}

/***/ }),

/***/ "./src/a11y/renderScreenReaderComments.js":
/*!************************************************!*\
  !*** ./src/a11y/renderScreenReaderComments.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderScreenReaderComments)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insertScreenReaderComment */ "./src/a11y/insertScreenReaderComment.js");


/**
 * Insert the comments into the DOM to be available by screen reader
 *
 * Example output:
 *   <div class="screenReaderOnly">
 *    <div>Begin highlight 1</div>
 *    <ol aria-label="Comments">
 *      <li>Foo</li>
 *      <li>Bar</li>
 *      <li>Baz</li>
 *      <li>Qux</li>
 *    </ol>
 *  </div>
 *  <div>Some highlighted text goes here...</div>
 *  <div class="screenReaderOnly">End highlight 1</div>
 *
 * NOTE: `screenReaderOnly` is not a real class, just used for brevity
 *
 * @param {String} documentId The ID of the document
 * @param {String} annotationId The ID of the annotation
 * @param {Array} [comments] Optionally preloaded comments to be rendered
 * @return {Promise}
 */

function renderScreenReaderComments(documentId, annotationId, comments) {
  var promise;

  if (Array.isArray(comments)) {
    promise = Promise.resolve(comments);
  } else {
    promise = _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"].getStoreAdapter().getComments(documentId, annotationId);
  }

  return promise.then(function (comments) {
    // Node needs to be found by querying DOM as it may have been inserted as innerHTML
    // leaving `screenReaderNode` as an invalid reference (see `insertElementWithinElement`).
    var node = document.getElementById("pdf-annotate-screenreader-".concat(annotationId));

    if (node) {
      var list = document.createElement('ol');
      list.setAttribute('id', "pdf-annotate-screenreader-comment-list-".concat(annotationId));
      list.setAttribute('aria-label', 'Comments');
      node.appendChild(list);
      comments.forEach(_insertScreenReaderComment__WEBPACK_IMPORTED_MODULE_1__["default"]);
    }
  });
}

/***/ }),

/***/ "./src/a11y/renderScreenReaderHints.js":
/*!*********************************************!*\
  !*** ./src/a11y/renderScreenReaderHints.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderScreenReaderHints)
/* harmony export */ });
/* harmony import */ var _insertScreenReaderHint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./insertScreenReaderHint */ "./src/a11y/insertScreenReaderHint.js");
/* harmony import */ var _initEventHandlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initEventHandlers */ "./src/a11y/initEventHandlers.js");

 // TODO This is not the right place for this to live

(0,_initEventHandlers__WEBPACK_IMPORTED_MODULE_1__["default"])();
/**
 * Insert hints into the DOM for screen readers.
 *
 * @param {Array} annotations The annotations that hints are inserted for
 */

function renderScreenReaderHints(annotations) {
  annotations = Array.isArray(annotations) ? annotations : []; // Insert hints for each type

  Object.keys(SORT_TYPES).forEach(function (type) {
    var sortBy = SORT_TYPES[type];
    annotations.filter(function (a) {
      return a.type === type;
    }).sort(sortBy).forEach(function (a, i) {
      return (0,_insertScreenReaderHint__WEBPACK_IMPORTED_MODULE_0__["default"])(a, i + 1);
    });
  });
} // Sort annotations first by y, then by x.
// This allows hints to be injected in the order they appear,
// which makes numbering them easier.

function sortByPoint(a, b) {
  if (a.y < b.y) {
    return a.x - b.x;
  } else {
    return 1;
  }
} // Sort annotation by it's first rectangle


function sortByRectPoint(a, b) {
  return sortByPoint(a.rectangles[0], b.rectangles[0]);
} // Sort annotation by it's first line


function sortByLinePoint(a, b) {
  var lineA = a.lines[0];
  var lineB = b.lines[0];
  return sortByPoint({
    x: lineA[0],
    y: lineA[1]
  }, {
    x: lineB[0],
    y: lineB[1]
  });
} // Arrange supported types and associated sort methods


var SORT_TYPES = {
  'highlight': sortByRectPoint,
  'strikeout': sortByRectPoint,
  'drawing': sortByLinePoint,
  'textbox': sortByPoint,
  'point': sortByPoint,
  'area': sortByPoint
};

/***/ }),

/***/ "./src/adapter/LocalStoreAdapter.js":
/*!******************************************!*\
  !*** ./src/adapter/LocalStoreAdapter.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocalStoreAdapter)
/* harmony export */ });
/* harmony import */ var _utils_uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuid */ "./src/utils/uuid.js");
/* harmony import */ var _StoreAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StoreAdapter */ "./src/adapter/StoreAdapter.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


 // StoreAdapter for working with localStorage
// This is ideal for testing, examples, and prototyping

var LocalStoreAdapter = /*#__PURE__*/function (_StoreAdapter) {
  _inherits(LocalStoreAdapter, _StoreAdapter);

  var _super = _createSuper(LocalStoreAdapter);

  function LocalStoreAdapter() {
    _classCallCheck(this, LocalStoreAdapter);

    return _super.call(this, {
      getAnnotations: function getAnnotations(documentId, pageNumber) {
        return new Promise(function (resolve, reject) {
          var annotations = _getAnnotations(documentId).filter(function (i) {
            return i.page === pageNumber && i["class"] === 'Annotation';
          });

          resolve({
            documentId: documentId,
            pageNumber: pageNumber,
            annotations: annotations
          });
        });
      },
      getAnnotation: function getAnnotation(documentId, annotationId) {
        return Promise.resolve(_getAnnotations(documentId)[findAnnotation(documentId, annotationId)]);
      },
      addAnnotation: function addAnnotation(documentId, pageNumber, annotation) {
        return new Promise(function (resolve, reject) {
          annotation["class"] = 'Annotation';
          annotation.uuid = (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])();
          annotation.page = pageNumber;

          var annotations = _getAnnotations(documentId);

          annotations.push(annotation);
          updateAnnotations(documentId, annotations);
          resolve(annotation);
        });
      },
      editAnnotation: function editAnnotation(documentId, annotationId, annotation) {
        return new Promise(function (resolve, reject) {
          var annotations = _getAnnotations(documentId);

          annotations[findAnnotation(documentId, annotationId)] = annotation;
          updateAnnotations(documentId, annotations);
          resolve(annotation);
        });
      },
      deleteAnnotation: function deleteAnnotation(documentId, annotationId) {
        return new Promise(function (resolve, reject) {
          var index = findAnnotation(documentId, annotationId);

          if (index > -1) {
            var annotations = _getAnnotations(documentId);

            annotations.splice(index, 1);
            updateAnnotations(documentId, annotations);
          }

          resolve(true);
        });
      },
      getComments: function getComments(documentId, annotationId) {
        return new Promise(function (resolve, reject) {
          resolve(_getAnnotations(documentId).filter(function (i) {
            return i["class"] === 'Comment' && i.annotation === annotationId;
          }));
        });
      },
      addComment: function addComment(documentId, annotationId, content) {
        return new Promise(function (resolve, reject) {
          var comment = {
            "class": 'Comment',
            uuid: (0,_utils_uuid__WEBPACK_IMPORTED_MODULE_0__["default"])(),
            annotation: annotationId,
            content: content
          };

          var annotations = _getAnnotations(documentId);

          annotations.push(comment);
          updateAnnotations(documentId, annotations);
          resolve(comment);
        });
      },
      deleteComment: function deleteComment(documentId, commentId) {
        return new Promise(function (resolve, reject) {
          _getAnnotations(documentId);

          var index = -1;

          var annotations = _getAnnotations(documentId);

          for (var i = 0, l = annotations.length; i < l; i++) {
            if (annotations[i].uuid === commentId) {
              index = i;
              break;
            }
          }

          if (index > -1) {
            annotations.splice(index, 1);
            updateAnnotations(documentId, annotations);
          }

          resolve(true);
        });
      }
    });
  }

  return LocalStoreAdapter;
}(_StoreAdapter__WEBPACK_IMPORTED_MODULE_1__["default"]);



function _getAnnotations(documentId) {
  return JSON.parse(localStorage.getItem("".concat(documentId, "/annotations"))) || [];
}

function updateAnnotations(documentId, annotations) {
  localStorage.setItem("".concat(documentId, "/annotations"), JSON.stringify(annotations));
}

function findAnnotation(documentId, annotationId) {
  var index = -1;

  var annotations = _getAnnotations(documentId);

  for (var i = 0, l = annotations.length; i < l; i++) {
    if (annotations[i].uuid === annotationId) {
      index = i;
      break;
    }
  }

  return index;
}

/***/ }),

/***/ "./src/adapter/StoreAdapter.js":
/*!*************************************!*\
  !*** ./src/adapter/StoreAdapter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StoreAdapter)
/* harmony export */ });
/* harmony import */ var _utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/abstractFunction */ "./src/utils/abstractFunction.js");
/* harmony import */ var _UI_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UI/event */ "./src/UI/event.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // Adapter should never be invoked publicly

var StoreAdapter = /*#__PURE__*/function () {
  /**
   * Create a new StoreAdapter instance
   *
   * @param {Object} [definition] The definition to use for overriding abstract methods
   */
  function StoreAdapter() {
    var _this = this;

    var definition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, StoreAdapter);

    // Copy each function from definition if it is a function we know about
    Object.keys(definition).forEach(function (key) {
      if (typeof definition[key] === 'function' && typeof _this[key] === 'function') {
        _this[key] = definition[key];
      }
    });
  }
  /**
   * Get all the annotations for a given document and page number.
   *
   * @param {String} documentId The ID for the document the annotations belong to
   * @param {Number} pageNumber The number of the page the annotations belong to
   * @return {Promise}
   */


  _createClass(StoreAdapter, [{
    key: "__getAnnotations",
    value: function __getAnnotations(documentId, pageNumber) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getAnnotations');
    }
  }, {
    key: "getAnnotations",
    get: function get() {
      return this.__getAnnotations;
    },
    set: function set(fn) {
      this.__getAnnotations = function getAnnotations(documentId, pageNumber) {
        return fn.apply(void 0, arguments).then(function (annotations) {
          // TODO may be best to have this happen on the server
          if (annotations.annotations) {
            annotations.annotations.forEach(function (a) {
              a.documentId = documentId;
            });
          }

          return annotations;
        });
      };
    }
    /**
     * Get the definition for a specific annotation.
     *
     * @param {String} documentId The ID for the document the annotation belongs to
     * @param {String} annotationId The ID for the annotation
     * @return {Promise}
     */

  }, {
    key: "getAnnotation",
    value: function getAnnotation(documentId, annotationId) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getAnnotation');
    }
    /**
     * Add an annotation
     *
     * @param {String} documentId The ID for the document to add the annotation to
     * @param {String} pageNumber The page number to add the annotation to
     * @param {Object} annotation The definition for the new annotation
     * @return {Promise}
     */

  }, {
    key: "__addAnnotation",
    value: function __addAnnotation(documentId, pageNumber, annotation) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('addAnnotation');
    }
  }, {
    key: "addAnnotation",
    get: function get() {
      return this.__addAnnotation;
    },
    set: function set(fn) {
      this.__addAnnotation = function addAnnotation(documentId, pageNumber, annotation) {
        return fn.apply(void 0, arguments).then(function (annotation) {
          (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:add', documentId, pageNumber, annotation);
          return annotation;
        });
      };
    }
    /**
     * Edit an annotation
     *
     * @param {String} documentId The ID for the document
     * @param {String} pageNumber the page number of the annotation
     * @param {Object} annotation The definition of the modified annotation
     * @return {Promise}
     */

  }, {
    key: "__editAnnotation",
    value: function __editAnnotation(documentId, pageNumber, annotation) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('editAnnotation');
    }
  }, {
    key: "editAnnotation",
    get: function get() {
      return this.__editAnnotation;
    },
    set: function set(fn) {
      this.__editAnnotation = function editAnnotation(documentId, annotationId, annotation) {
        return fn.apply(void 0, arguments).then(function (annotation) {
          (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:edit', documentId, annotationId, annotation);
          return annotation;
        });
      };
    }
    /**
     * Delete an annotation
     *
     * @param {String} documentId The ID for the document
     * @param {String} annotationId The ID for the annotation
     * @return {Promise}
     */

  }, {
    key: "__deleteAnnotation",
    value: function __deleteAnnotation(documentId, annotationId) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('deleteAnnotation');
    }
  }, {
    key: "deleteAnnotation",
    get: function get() {
      return this.__deleteAnnotation;
    },
    set: function set(fn) {
      this.__deleteAnnotation = function deleteAnnotation(documentId, annotationId) {
        return fn.apply(void 0, arguments).then(function (success) {
          if (success) {
            (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('annotation:delete', documentId, annotationId);
          }

          return success;
        });
      };
    }
    /**
     * Get all the comments for an annotation
     *
     * @param {String} documentId The ID for the document
     * @param {String} annotationId The ID for the annotation
     * @return {Promise}
     */

  }, {
    key: "getComments",
    value: function getComments(documentId, annotationId) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('getComments');
    }
    /**
     * Add a new comment
     *
     * @param {String} documentId The ID for the document
     * @param {String} annotationId The ID for the annotation
     * @param {Object} content The definition of the comment
     * @return {Promise}
     */

  }, {
    key: "__addComment",
    value: function __addComment(documentId, annotationId, content) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('addComment');
    }
  }, {
    key: "addComment",
    get: function get() {
      return this.__addComment;
    },
    set: function set(fn) {
      this.__addComment = function addComment(documentId, annotationId, content) {
        return fn.apply(void 0, arguments).then(function (comment) {
          (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('comment:add', documentId, annotationId, comment);
          return comment;
        });
      };
    }
    /**
     * Delete a comment
     *
     * @param {String} documentId The ID for the document
     * @param {String} commentId The ID for the comment
     * @return {Promise}
     */

  }, {
    key: "__deleteComment",
    value: function __deleteComment(documentId, commentId) {
      (0,_utils_abstractFunction__WEBPACK_IMPORTED_MODULE_0__["default"])('deleteComment');
    }
  }, {
    key: "deleteComment",
    get: function get() {
      return this.__deleteComment;
    },
    set: function set(fn) {
      this.__deleteComment = function deleteComment(documentId, commentId) {
        return fn.apply(void 0, arguments).then(function (success) {
          if (success) {
            (0,_UI_event__WEBPACK_IMPORTED_MODULE_1__.fireEvent)('comment:delete', documentId, commentId);
          }

          return success;
        });
      };
    }
  }]);

  return StoreAdapter;
}();



/***/ }),

/***/ "./src/render/appendChild.js":
/*!***********************************!*\
  !*** ./src/render/appendChild.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ appendChild)
/* harmony export */ });
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");
/* harmony import */ var object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _renderLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderLine */ "./src/render/renderLine.js");
/* harmony import */ var _renderPath__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderPath */ "./src/render/renderPath.js");
/* harmony import */ var _renderPoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderPoint */ "./src/render/renderPoint.js");
/* harmony import */ var _renderRect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./renderRect */ "./src/render/renderRect.js");
/* harmony import */ var _renderText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderText */ "./src/render/renderText.js");






var isFirefox = /firefox/i.test(navigator.userAgent);
/**
 * Get the x/y translation to be used for transforming the annotations
 * based on the rotation of the viewport.
 *
 * @param {Object} viewport The viewport data from the page
 * @return {Object}
 */

function getTranslation(viewport) {
  var x;
  var y; // Modulus 360 on the rotation so that we only
  // have to worry about four possible values.

  switch (viewport.rotation % 360) {
    case 0:
      x = y = 0;
      break;

    case 90:
      x = 0;
      y = viewport.width / viewport.scale * -1;
      break;

    case 180:
      x = viewport.width / viewport.scale * -1;
      y = viewport.height / viewport.scale * -1;
      break;

    case 270:
      x = viewport.height / viewport.scale * -1;
      y = 0;
      break;
  }

  return {
    x: x,
    y: y
  };
}
/**
 * Transform the rotation and scale of a node using SVG's native transform attribute.
 *
 * @param {Node} node The node to be transformed
 * @param {Object} viewport The page's viewport data
 * @return {Node}
 */


function transform(node, viewport) {
  var trans = getTranslation(viewport); // Let SVG natively transform the element

  node.setAttribute('transform', "scale(".concat(viewport.scale, ") rotate(").concat(viewport.rotation, ") translate(").concat(trans.x, ", ").concat(trans.y, ")")); // Manually adjust x/y for nested SVG nodes

  if (!isFirefox && node.nodeName.toLowerCase() === 'svg') {
    node.setAttribute('x', parseInt(node.getAttribute('x'), 10) * viewport.scale);
    node.setAttribute('y', parseInt(node.getAttribute('y'), 10) * viewport.scale);
    var x = parseInt(node.getAttribute('x', 10));
    var y = parseInt(node.getAttribute('y', 10));
    var width = parseInt(node.getAttribute('width'), 10);
    var height = parseInt(node.getAttribute('height'), 10);
    var path = node.querySelector('path');
    var svg = path.parentNode; // Scale width/height

    [node, svg, path, node.querySelector('rect')].forEach(function (n) {
      n.setAttribute('width', parseInt(n.getAttribute('width'), 10) * viewport.scale);
      n.setAttribute('height', parseInt(n.getAttribute('height'), 10) * viewport.scale);
    }); // Transform path but keep scale at 100% since it will be handled natively

    transform(path, object_assign__WEBPACK_IMPORTED_MODULE_0___default()({}, viewport, {
      scale: 1
    }));

    switch (viewport.rotation % 360) {
      case 90:
        node.setAttribute('x', viewport.width - y - width);
        node.setAttribute('y', x);
        svg.setAttribute('x', 1);
        svg.setAttribute('y', 0);
        break;

      case 180:
        node.setAttribute('x', viewport.width - x - width);
        node.setAttribute('y', viewport.height - y - height);
        svg.setAttribute('y', 2);
        break;

      case 270:
        node.setAttribute('x', y);
        node.setAttribute('y', viewport.height - x - height);
        svg.setAttribute('x', -1);
        svg.setAttribute('y', 0);
        break;
    }
  }

  return node;
}
/**
 * Append an annotation as a child of an SVG.
 *
 * @param {SVGElement} svg The SVG element to append the annotation to
 * @param {Object} annotation The annotation definition to render and append
 * @param {Object} viewport The page's viewport data
 * @return {SVGElement} A node that was created and appended by this function
 */


function appendChild(svg, annotation, viewport) {
  if (!viewport) {
    viewport = JSON.parse(svg.getAttribute('data-pdf-annotate-viewport'));
  }

  var child;

  switch (annotation.type) {
    case 'area':
    case 'highlight':
      child = (0,_renderRect__WEBPACK_IMPORTED_MODULE_4__["default"])(annotation);
      break;

    case 'strikeout':
      child = (0,_renderLine__WEBPACK_IMPORTED_MODULE_1__["default"])(annotation);
      break;

    case 'point':
      child = (0,_renderPoint__WEBPACK_IMPORTED_MODULE_3__["default"])(annotation);
      break;

    case 'textbox':
      child = (0,_renderText__WEBPACK_IMPORTED_MODULE_5__["default"])(annotation);
      break;

    case 'drawing':
      child = (0,_renderPath__WEBPACK_IMPORTED_MODULE_2__["default"])(annotation);
      break;
  } // If no type was provided for an annotation it will result in node being null.
  // Skip appending/transforming if node doesn't exist.


  if (child) {
    // Set attributes
    child.setAttribute('data-pdf-annotate-id', annotation.uuid);
    child.setAttribute('data-pdf-annotate-type', annotation.type);
    child.setAttribute('aria-hidden', true);
    svg.appendChild(transform(child, viewport));
  }

  return child;
}

/***/ }),

/***/ "./src/render/index.js":
/*!*****************************!*\
  !*** ./src/render/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PDFJSAnnotate */ "./src/PDFJSAnnotate.js");
/* harmony import */ var _appendChild__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appendChild */ "./src/render/appendChild.js");
/* harmony import */ var _a11y_renderScreenReaderHints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../a11y/renderScreenReaderHints */ "./src/a11y/renderScreenReaderHints.js");



/**
 * Render the response from PDFJSAnnotate.getStoreAdapter().getAnnotations to SVG
 *
 * @param {SVGElement} svg The SVG element to render the annotations to
 * @param {Object} viewport The page viewport data
 * @param {Object} data The response from PDFJSAnnotate.getStoreAdapter().getAnnotations
 * @return {Promise} Settled once rendering has completed
 *  A settled Promise will be either:
 *    - fulfilled: SVGElement
 *    - rejected: Error
 */

function render(svg, viewport, data) {
  return new Promise(function (resolve, reject) {
    // Reset the content of the SVG
    svg.innerHTML = '';
    svg.setAttribute('data-pdf-annotate-container', true);
    svg.setAttribute('data-pdf-annotate-viewport', JSON.stringify(viewport));
    svg.removeAttribute('data-pdf-annotate-document');
    svg.removeAttribute('data-pdf-annotate-page'); // If there's no data nothing can be done

    if (!data) {
      return resolve(svg);
    }

    svg.setAttribute('data-pdf-annotate-document', data.documentId);
    svg.setAttribute('data-pdf-annotate-page', data.pageNumber); // Make sure annotations is an array

    if (!Array.isArray(data.annotations) || data.annotations.length === 0) {
      return resolve(svg);
    } // Append annotation to svg


    data.annotations.forEach(function (a) {
      (0,_appendChild__WEBPACK_IMPORTED_MODULE_1__["default"])(svg, a, viewport);
    });
    resolve(svg);
  });
}

/***/ }),

/***/ "./src/render/renderLine.js":
/*!**********************************!*\
  !*** ./src/render/renderLine.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderLine)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setAttributes */ "./src/utils/setAttributes.js");
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalizeColor */ "./src/utils/normalizeColor.js");


/**
 * Create SVGLineElements from an annotation definition.
 * This is used for anntations of type `strikeout`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGGElement} A group of all lines to be rendered
 */

function renderLine(a) {
  var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(group, {
    stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || "#f00"),
    strokeWidth: a.strokeWidth || 1,
    opacity: a.opacity || 1,
    color: a.color
  });
  a.rectangles.forEach(function (r) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(line, {
      x1: r.x,
      y1: r.y,
      x2: r.x + r.width,
      y2: r.y
    });
    group.appendChild(line);
  });
  return group;
}

/***/ }),

/***/ "./src/render/renderPath.js":
/*!**********************************!*\
  !*** ./src/render/renderPath.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPath)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setAttributes */ "./src/utils/setAttributes.js");
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalizeColor */ "./src/utils/normalizeColor.js");


/**
 * Create SVGPathElement from an annotation definition.
 * This is used for anntations of type `drawing`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGPathElement} The path to be rendered
 */

function renderPath(a) {
  var d = [];
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

  for (var i = 0, l = a.lines.length; i < l; i++) {
    var p1 = a.lines[i];
    var p2 = a.lines[i + 1];

    if (p2) {
      d.push("M".concat(p1[0], " ").concat(p1[1], " ").concat(p2[0], " ").concat(p2[1]));
    }
  }

  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(path, {
    d: "".concat(d.join(' '), "Z"),
    stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || '#000'),
    strokeWidth: a.width || 1,
    fill: 'none'
  });
  return path;
}

/***/ }),

/***/ "./src/render/renderPoint.js":
/*!***********************************!*\
  !*** ./src/render/renderPoint.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderPoint)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setAttributes */ "./src/utils/setAttributes.js");

var SIZE = 25;
var D = 'M499.968 214.336q-113.832 0 -212.877 38.781t-157.356 104.625 -58.311 142.29q0 62.496 39.897 119.133t112.437 97.929l48.546 27.9 -15.066 53.568q-13.392 50.778 -39.06 95.976 84.816 -35.154 153.45 -95.418l23.994 -21.204 31.806 3.348q38.502 4.464 72.54 4.464 113.832 0 212.877 -38.781t157.356 -104.625 58.311 -142.29 -58.311 -142.29 -157.356 -104.625 -212.877 -38.781z';
/**
 * Create SVGElement from an annotation definition.
 * This is used for anntations of type `comment`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGElement} A svg to be rendered
 */

function renderPoint(a) {
  var outerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var innerSVG = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(outerSVG, {
    width: SIZE,
    height: SIZE,
    x: a.x,
    y: a.y
  });
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(innerSVG, {
    width: SIZE,
    height: SIZE,
    x: 0,
    y: SIZE * 0.05 * -1,
    viewBox: '0 0 1000 1000'
  });
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
    width: SIZE,
    height: SIZE,
    stroke: '#000',
    fill: '#ff0'
  });
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(path, {
    d: D,
    strokeWidth: 50,
    stroke: '#000',
    fill: '#fff'
  });
  innerSVG.appendChild(path);
  outerSVG.appendChild(rect);
  outerSVG.appendChild(innerSVG);
  return outerSVG;
}

/***/ }),

/***/ "./src/render/renderRect.js":
/*!**********************************!*\
  !*** ./src/render/renderRect.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderRect)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setAttributes */ "./src/utils/setAttributes.js");
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalizeColor */ "./src/utils/normalizeColor.js");


/**
 * Create SVGRectElements from an annotation definition.
 * This is used for anntations of type `area` and `highlight`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGGElement|SVGRectElement} A group of all rects to be rendered
 */

function renderRect(a) {
  if (a.type === "highlight") {
    var group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(group, {
      fill: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || "#ff0"),
      fillOpacity: 0.2
    });
    a.rectangles.forEach(function (r) {
      group.appendChild(createRect(r));
    });
    return group;
  } else {
    var rect = createRect(a);
    (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
      stroke: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || "#f00"),
      fill: "none"
    });
    return rect;
  }
}

function createRect(r) {
  var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(rect, {
    x: r.x,
    y: r.y,
    width: r.width,
    height: r.height
  });
  return rect;
}

/***/ }),

/***/ "./src/render/renderText.js":
/*!**********************************!*\
  !*** ./src/render/renderText.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderText),
/* harmony export */   "processTextContent": () => (/* binding */ processTextContent)
/* harmony export */ });
/* harmony import */ var _utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/setAttributes */ "./src/utils/setAttributes.js");
/* harmony import */ var _utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/normalizeColor */ "./src/utils/normalizeColor.js");


/**
 * Create SVGTextElement from an annotation definition.
 * This is used for anntations of type `textbox`.
 *
 * @param {Object} a The annotation definition
 * @return {SVGTextElement} A text to be rendered
 */

function renderText(a) {
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  (0,_utils_setAttributes__WEBPACK_IMPORTED_MODULE_0__["default"])(text, {
    x: a.x,
    y: a.y + parseInt(a.size, 10),
    fill: (0,_utils_normalizeColor__WEBPACK_IMPORTED_MODULE_1__["default"])(a.color || "#000"),
    fontSize: a.size
  });
  text.innerHTML = processTextContent(a);
  return text;
}
/**
 * Process the content of the annotation to convert to html.
 * @param {*} comment The comment annotation.
 * @returns The processes annotation.
 */

function processTextContent(comment) {
  var lines = comment.content.split("\n");
  var tspans = []; // If we only have 1 line, we don't need to split anything up into smaller tspans.

  if (lines.length === 1) {
    return "<tspan x=\"".concat(comment.x, "\" dy=\"1em\">").concat(comment.content, "</tspan>");
  }

  for (var index = 0; index < lines.length; index++) {
    var line = lines[index];

    if (line == " " || line == "") {
      tspans.push("<tspan x=\"".concat(comment.x, "\" visibility=\"hidden\" dy=\"1em\">.</tspan>"));
    } else {
      tspans.push("<tspan x=\"".concat(comment.x, "\" dy=\"1em\">").concat(line, "</tspan>"));
    }
  }

  return tspans.join("");
}

/***/ }),

/***/ "./src/utils/abstractFunction.js":
/*!***************************************!*\
  !*** ./src/utils/abstractFunction.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ abstractFunction)
/* harmony export */ });
/**
 * Throw an Error for an abstract function that hasn't been implemented.
 *
 * @param {String} name The name of the abstract function
 */
function abstractFunction(name) {
  throw new Error(name + ' is not implemented');
}

/***/ }),

/***/ "./src/utils/normalizeColor.js":
/*!*************************************!*\
  !*** ./src/utils/normalizeColor.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeColor)
/* harmony export */ });
var REGEX_HASHLESS_HEX = /^([a-f0-9]{6}|[a-f0-9]{3})$/i;
/**
 * Normalize a color value
 *
 * @param {String} color The color to normalize
 * @return {String}
 */

function normalizeColor(color) {
  if (REGEX_HASHLESS_HEX.test(color)) {
    color = "#".concat(color);
  }

  return color;
}

/***/ }),

/***/ "./src/utils/setAttributes.js":
/*!************************************!*\
  !*** ./src/utils/setAttributes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ setAttributes)
/* harmony export */ });
var UPPER_REGEX = /[A-Z]/g; // Don't convert these attributes from camelCase to hyphenated-attributes

var BLACKLIST = ['viewBox'];

var keyCase = function keyCase(key) {
  if (BLACKLIST.indexOf(key) === -1) {
    key = key.replace(UPPER_REGEX, function (match) {
      return '-' + match.toLowerCase();
    });
  }

  return key;
};
/**
 * Set attributes for a node from a map
 *
 * @param {Node} node The node to set attributes on
 * @param {Object} attributes The map of key/value pairs to use for attributes
 */


function setAttributes(node, attributes) {
  Object.keys(attributes).forEach(function (key) {
    node.setAttribute(keyCase(key), attributes[key]);
  });
}

/***/ }),

/***/ "./src/utils/uuid.js":
/*!***************************!*\
  !*** ./src/utils/uuid.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ uuid)
/* harmony export */ });
var REGEXP = /[xy]/g;
var PATTERN = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';

function replacement(c) {
  var r = Math.random() * 16 | 0;
  var v = c == 'x' ? r : r & 0x3 | 0x8;
  return v.toString(16);
}
/**
 * Generate a univierally unique identifier
 *
 * @return {String}
 */


function uuid() {
  return PATTERN.replace(REGEXP, replacement);
}

/***/ }),

/***/ "./node_modules/create-stylesheet/index.js":
/*!*************************************************!*\
  !*** ./node_modules/create-stylesheet/index.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function createStyleSheet(blocks) {
  var style = document.createElement('style');
  var text = Object.keys(blocks).map(function (selector) {
    return processRuleSet(selector, blocks[selector]);
  }).join('\n');
  
  style.setAttribute('type', 'text/css');
  style.appendChild(document.createTextNode(text));

  return style;
}

function processRuleSet(selector, block) {
  return selector + ' {\n' + processDeclarationBlock(block) + '\n}';
}

function processDeclarationBlock(block) {
  return Object.keys(block).map(function (prop) {
    return processDeclaration(prop, block[prop]);
  }).join('\n');
}

function processDeclaration(prop, value) {
  if (!isNaN(value) && value != 0) {
    value = value + 'px';
  }

  return hyphenate(prop) + ': ' + value + ';';
}

function hyphenate(prop) {
  return prop.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  });
}


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _src_PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/PDFJSAnnotate */ "./src/PDFJSAnnotate.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_src_PDFJSAnnotate__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=pdf-annotate.js.map