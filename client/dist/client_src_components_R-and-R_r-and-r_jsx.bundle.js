(self["webpackChunkproject_catwalk_fec"] = self["webpackChunkproject_catwalk_fec"] || []).push([["client_src_components_R-and-R_r-and-r_jsx"],{

/***/ "./client/src/components/R-and-R/components/breakdown/overall-rating.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/breakdown/overall-rating.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var OverallRating = function OverallRating(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState2 = _slicedToArray(_useState, 1),
      rating = _useState2[0].rating;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-inline-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "overall-rating-average"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    style: {
      fontSize: '60px',
      marginRight: '15px'
    }
  }, rating / 4)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    },
    id: "overall-rating-star"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    start: 0,
    stop: 20,
    step: 4,
    fractions: 4,
    initialRating: rating,
    emptySymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star"
    }),
    fullSymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star-fill"
    }),
    readonly: "true"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverallRating);

/***/ }),

/***/ "./client/src/components/R-and-R/components/breakdown/review-spread.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/breakdown/review-spread.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ReviewSpread = function ReviewSpread(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState2 = _slicedToArray(_useState, 1),
      ratingBreakdown = _useState2[0].ratingBreakdown;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState4 = _slicedToArray(_useState3, 1),
      recommendation = _useState4[0].recommendation;

  var populateBar = function populateBar() {
    var arr = [];

    for (var i = 1; i < 6; i += 1) {
      var emptyBar = {
        marginLeft: '20px',
        marginTop: '7px',
        height: 10,
        width: '70%',
        backgroundColor: '#959595'
      };
      var FillerBar = styled_components__WEBPACK_IMPORTED_MODULE_1__.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n        height: 100%;\n        background-color: #454545;\n        width: ", "%;\n        &:hover {\n          background-color: green;\n          width: ", "%;\n        }\n      "])), ratingBreakdown[i] * 20, ratingBreakdown[i] * 20 + 2);
      arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        key: i,
        style: {
          display: 'flex',
          marginTop: '30px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          position: 'relative',
          fontSize: '15px'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, i, ' ', "Stars")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: emptyBar
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(FillerBar, null))));
    }

    return arr;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '100%'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    style: {
      fontSize: '15px'
    }
  }, recommendation, "% of reviews recommend this product")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      height: '80%',
      width: '100%'
    }
  }, populateBar()));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewSpread);

/***/ }),

/***/ "./client/src/components/R-and-R/components/review-list/response-form.jsx":
/*!********************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/review-list/response-form.jsx ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var _review_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./review-form */ "./client/src/components/R-and-R/components/review-list/review-form.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ResponseForm = function ResponseForm(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
      _useState2 = _slicedToArray(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState4 = _slicedToArray(_useState3, 1),
      product = _useState4[0].product;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState6 = _slicedToArray(_useState5, 1),
      productId = _useState6[0].productId;

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      show = _useState8[0],
      setShow = _useState8[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "responseForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    onClick: handleShow,
    id: "review-button"
  }, "ADD A REVIEW +"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "review-form"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    show: show,
    onHide: handleClose,
    backdrop: "static",
    keyboard: false,
    dialogClassName: "modal-90w",
    "aria-labelledby": "example-custom-modal-styling-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Header, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Title, null, "Write your review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default.Body, {
    className: "show-grid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h5", null, "About the", " ".concat(product)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    start: 0,
    stop: 20,
    step: 4,
    fractions: 4,
    initialRating: rating,
    emptySymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star"
    }),
    fullSymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star-fill"
    }),
    onClick: function onClick(e) {
      return setRating(e);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_review_form__WEBPACK_IMPORTED_MODULE_2__.default, {
    productId: productId,
    handleClose: handleClose
  })))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseForm);

/***/ }),

/***/ "./client/src/components/R-and-R/components/review-list/review-form.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/review-list/review-form.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Form.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Col.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _review_tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./review-tile */ "./client/src/components/R-and-R/components/review-list/review-tile.jsx");
/* harmony import */ var _firebase_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../firebase/index */ "./firebase/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var ReviewForm = function ReviewForm(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(20),
      _useState2 = _slicedToArray(_useState, 2),
      rating = _useState2[0],
      setRating = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      name = _useState4[0],
      setName = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      summary = _useState6[0],
      setSummary = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      body = _useState8[0],
      setBody = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      email = _useState10[0],
      setEmail = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      recommend = _useState12[0],
      setRecommend = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState14 = _slicedToArray(_useState13, 1),
      productId = _useState14[0].productId;

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      photos = _useState16[0],
      setPhotos = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      bodyCounter = _useState18[0],
      setBodyCounter = _useState18[1];

  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState20 = _slicedToArray(_useState19, 2),
      errors = _useState20[0],
      setErrors = _useState20[1];

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState22 = _slicedToArray(_useState21, 1),
      handleClose = _useState22[0].handleClose;

  var validateEmail = function validateEmail() {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  var findFormErrors = function findFormErrors() {
    var newErrors = {};
    if (!name || name === '') newErrors.name = 'invalid name!';
    if (!email || !validateEmail()) newErrors.email = 'invalid email!';
    if (!summary || summary === '' || summary.length > 60) newErrors.summary = 'invalid summary!';
    if (!body || body === '' || body.length < 49) newErrors.body = 'invalid body!';
    return newErrors;
  };

  var checkError = function checkError(field) {
    if (errors[field]) {
      setErrors(_objectSpread(_objectSpread({}, errors), {}, _defineProperty({}, field, null)));
      var newErrors = findFormErrors();

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
      }
    }
  };

  var checkChar = function checkChar(str, max, callback, field) {
    callback(str.slice(0, max));
    checkError(field);
  };

  var reset = function reset() {
    setRating(20);
    setName('');
    setSummary('');
    setBody('');
    setEmail('');
    setRecommend(false);
    setPhotos([]);
  };

  var getDate = function getDate(date) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = monthNames[date.getMonth() + 1];
    var day = date.getDate();
    var year = date.getFullYear();
    return "".concat(month, " ").concat(day, ", ").concat(year);
  };

  var renderNewTile = function renderNewTile(formattedPhotos) {
    var newPhotos = formattedPhotos.map(function (image) {
      return {
        url: image
      };
    });
    var tile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_review_tile__WEBPACK_IMPORTED_MODULE_4__.default, {
      key: Math.random().toString(36).substr(2, 9),
      body: body,
      date: getDate(new Date()),
      helpfulness: 0,
      rating: rating,
      photos: newPhotos,
      recommended: recommend,
      reviewerName: name,
      summary: summary,
      yesClicked: false
    });
    var div = document.getElementById('reviews-tiles');
    var id = Math.random();
    var d = document.createElement('div');
    d.id = id;
    div.prepend(d);
    react_dom__WEBPACK_IMPORTED_MODULE_1__.render(tile, document.getElementById(id));
  };

  var submitData = function submitData(formattedPhotos) {
    var params = {
      product_id: productId,
      rating: rating / 4,
      summary: summary,
      body: body,
      recommend: Boolean(recommend),
      name: name,
      email: email,
      photos: formattedPhotos,
      characteristics: {
        53846: 5,
        53847: 5,
        53848: 3,
        53849: 3
      }
    };
    renderNewTile(formattedPhotos);
    axios__WEBPACK_IMPORTED_MODULE_3___default().post('reviews', params).then(function () {
      reset();
      handleClose();
    })["catch"](function (err) {
      throw err;
    });
  };

  var uploadImage = function uploadImage() {
    var promises = [];
    var newPhotos = [];

    var _loop = function _loop(i) {
      var uploadTask = _firebase_index__WEBPACK_IMPORTED_MODULE_5__.storage.ref("images/".concat(photos[i].file.name)).put(photos[i].file);
      promises.push(new Promise(function (resolve, reject) {
        uploadTask.on('state_changed', function () {}, function (error) {
          reject(error);
        }, function () {
          _firebase_index__WEBPACK_IMPORTED_MODULE_5__.storage.ref('images').child(photos[i].file.name).getDownloadURL().then(function (url) {
            newPhotos.push(url);
            resolve(url);
          });
        });
      }));
    };

    for (var i = 0; i < photos.length; i += 1) {
      _loop(i);
    }

    Promise.all(promises).then(function () {
      submitData(newPhotos);
    })["catch"](function (err) {
      throw err;
    });
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    var newErrors = findFormErrors();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      uploadImage();
    }
  };

  var renderBodyCount = function renderBodyCount() {
    if (body.length >= 50) {
      setBodyCounter('Minimum reached');
    } else {
      setBodyCounter("Minimum required characters left: ".concat(50 - body.length));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return renderBodyCount();
  }, [body]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Check, {
    type: "checkbox",
    id: "default-checkbox",
    label: "I recommend this item",
    value: recommend,
    onChange: function onChange() {
      return setRecommend(!recommend);
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Row, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default,
    controlId: "formGridName"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, "Name")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
    placeholder: "jackson11!",
    value: name,
    onChange: function onChange(e) {
      return checkChar(e.target.value, 60, setName, 'name');
    },
    type: "name",
    isInvalid: !!errors.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control.Feedback, {
    type: "invalid"
  }, errors.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Text, {
    id: "summaryHelpBlock",
    muted: true
  }, "For privacy reasons, do not use your full name or email address")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default,
    controlId: "formGridEmail"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, "Email")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
    placeholder: "jackson11@email.com",
    value: email,
    onChange: function onChange(e) {
      return checkChar(e.target.value, 60, setEmail, 'email');
    },
    type: "email",
    isInvalid: !!errors.email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control.Feedback, {
    type: "invalid"
  }, errors.email), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Text, {
    id: "summaryHelpBlock",
    muted: true
  }, "For authentication reasons, you will not be emailed"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
    controlId: "formGridSummary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, "Summary")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
    placeholder: "Example: Best purchase ever!",
    onChange: function onChange(e) {
      return checkChar(e.target.value, 60, setSummary, 'summary');
    },
    value: summary,
    isInvalid: !!errors.summary
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control.Feedback, {
    type: "invalid"
  }, errors.summary), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Text, {
    id: "summaryHelpBlock",
    muted: true
  }, "Your summary must be 1-60 characters long.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Group, {
    controlId: "formGridBody"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Label, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginTop: '20px'
    }
  }, "Review")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control, {
    as: "textarea",
    placeholder: "Why did you like the product or not?",
    onChange: function onChange(e) {
      return checkChar(e.target.value, 1000, setBody, 'body');
    },
    value: body,
    isInvalid: !!errors.body
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Control.Feedback, {
    type: "invalid"
  }, errors.body), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Text, {
    id: "bodyHelpBlock",
    muted: true
  }, bodyCounter)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Group, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_2__.DropzoneAreaBase, {
    acceptedFiles: ['image/*'],
    filesLimit: 5,
    fileObjects: photos,
    onAdd: function onAdd(photo) {
      setPhotos(photo);
    },
    onDelete: function onDelete(photo) {
      setPhotos(photos.filter(function (item) {
        return item.data !== photo.data;
      }));
    },
    dropzoneText: "Upload up to (5) images",
    showFileNames: true
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "button",
    id: "review-button",
    onClick: handleClose
  }, "Close"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    type: "submit",
    onClick: handleSubmit,
    id: "review-button"
  }, "Submit Review"));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewForm);

/***/ }),

/***/ "./client/src/components/R-and-R/components/review-list/review-tile.jsx":
/*!******************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/review-list/review-tile.jsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Image.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Container.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Collapse.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Button.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/Modal.js");
/* harmony import */ var react_rating__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-rating */ "./node_modules/react-rating/lib/react-rating.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable jsx-a11y/anchor-is-valid */





var ReviewTile = function ReviewTile(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState2 = _slicedToArray(_useState, 1),
      body = _useState2[0].body; // review card body text


  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState4 = _slicedToArray(_useState3, 1),
      date = _useState4[0].date; // date reviewed


  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState6 = _slicedToArray(_useState5, 1),
      helpfulness = _useState6[0].helpfulness; // # of positive reviews (Yes (#))


  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(helpfulness),
      _useState8 = _slicedToArray(_useState7, 2),
      helpful = _useState8[0],
      setHelpful = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState10 = _slicedToArray(_useState9, 1),
      photos = _useState10[0].photos;

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState12 = _slicedToArray(_useState11, 1),
      rating = _useState12[0].rating; // initial rating


  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {
    return Math.floor(rating * 4);
  }),
      _useState14 = _slicedToArray(_useState13, 1),
      ratingsRounded = _useState14[0]; // rounding to nearest .25


  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState16 = _slicedToArray(_useState15, 1),
      recommend = _useState16[0].recommend;

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState18 = _slicedToArray(_useState17, 1),
      response = _useState18[0].response; // eslint-disable-next-line no-unused-vars


  var _useState19 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState20 = _slicedToArray(_useState19, 1),
      reviewId = _useState20[0].reviewId;

  var _useState21 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState22 = _slicedToArray(_useState21, 1),
      reviewerName = _useState22[0].reviewerName;

  var _useState23 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState24 = _slicedToArray(_useState23, 1),
      summary = _useState24[0].summary; // review card summary


  var _useState25 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState26 = _slicedToArray(_useState25, 2),
      yesClicked = _useState26[0],
      setYesClicked = _useState26[1]; // if the user clicked Yes -> disable


  var _useState27 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState28 = _slicedToArray(_useState27, 2),
      reportClicked = _useState28[0],
      setReportClicked = _useState28[1]; // ^^ disable report


  var _useState29 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState30 = _slicedToArray(_useState29, 1),
      purchased = _useState30[0];

  var _useState31 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
      _useState32 = _slicedToArray(_useState31, 2),
      show = _useState32[0],
      setShow = _useState32[1];

  var _useState33 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
      _useState34 = _slicedToArray(_useState33, 2),
      thumbnailModal = _useState34[0],
      setThumbnailModal = _useState34[1];

  var handleClose = function handleClose() {
    return setShow(false);
  };

  var handleShow = function handleShow() {
    return setShow(true);
  };

  var handleThumbnailClick = function handleThumbnailClick(image) {
    handleShow();
    setThumbnailModal(image);
  };

  var renderThumbnails = function renderThumbnails() {
    if (photos.length > 0) {
      var _thumbnails = photos.map(function (image) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: function onClick() {
            return handleThumbnailClick(image.url);
          },
          style: {
            width: '100px',
            height: 'auto',
            marginTop: '10px'
          },
          src: image.url,
          rounded: true,
          thumbnail: "true"
        });
      });

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__.default, {
        style: {
          height: '150px'
        },
        className: "d-flex bd-highlight mb-3"
      }, _thumbnails);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var _useState35 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(renderThumbnails()),
      _useState36 = _slicedToArray(_useState35, 1),
      thumbnails = _useState36[0];

  var handleHelpfulClick = function handleHelpfulClick() {
    if (!yesClicked) {
      setHelpful(helpful + 1);
      setYesClicked(true);
      var params = {
        reviewId: reviewId
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('reviews/helpfulness', {
        params: params
      }).then(function () {})["catch"](function (err) {
        throw err;
      });
    }
  };

  var handleReport = function handleReport() {
    if (!reportClicked) {
      var params = {
        reviewId: reviewId
      };
      axios__WEBPACK_IMPORTED_MODULE_2___default().get('reviews/report', {
        params: params
      }).then(function () {})["catch"](function (err) {
        throw err;
      });
      setReportClicked(true);
    }
  };

  var getStrings = function getStrings(text, max) {
    var textStr = text.substring(0, max);
    var newIndex;
    var valid = [' ', '!', '.', '?'];

    for (var i = textStr.length; i >= 0; i -= 1) {
      if (valid.includes(textStr[i])) {
        newIndex = i;
        textStr = textStr.substring(0, i);
        break;
      }
    }

    var remainingStr = text.substring(newIndex);
    return [textStr, remainingStr];
  };

  var validateSummary = function validateSummary() {
    if (summary.length > 60) {
      var _getStrings = getStrings(summary, 59),
          _getStrings2 = _slicedToArray(_getStrings, 2),
          summaryStr = _getStrings2[0],
          remainingStr = _getStrings2[1];

      var sub = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "".concat(summaryStr, "..."));
      var remaining = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          color: '#949494',
          fontSize: '12px',
          marginTop: '10px',
          marginBottom: '20px'
        }
      }, "...".concat(remainingStr));
      return [sub, remaining];
    }

    return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, summary))];
  };

  var validateBody = function validateBody() {
    var _useState37 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
        _useState38 = _slicedToArray(_useState37, 2),
        open = _useState38[0],
        setOpen = _useState38[1];

    if (body.length >= 250) {
      var _getStrings3 = getStrings(body, 249),
          _getStrings4 = _slicedToArray(_getStrings3, 2),
          bodyStr = _getStrings4[0],
          remainingStr = _getStrings4[1];

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          color: '#949494'
        }
      }, "".concat(bodyStr, "...")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_5__.default, {
        "in": open
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Text, {
        id: "collapse-text",
        style: {
          color: '#949494'
        }
      }, remainingStr))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__.default, {
        block: "true",
        size: "sm",
        style: {
          color: '#949494'
        },
        variant: "link",
        onClick: function onClick() {
          return setOpen(!open);
        },
        "aria-controls": "collapse-text",
        "aria-expanded": open
      }, "Show More"));
    }

    return body;
  };

  var validateRecommend = function validateRecommend() {
    if (recommend) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "recommends"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        id: "recommend-icon",
        className: "bi bi-check2"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ml-2"
      }, "I recommend this product"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var verifiedPurchaser = function verifiedPurchaser() {
    if (purchased) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        id: "verified-purchaser"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
        id: "verified-icon",
        className: "bi bi-check-circle-fill"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "ml-2"
      }, "Verified Purchaser"));
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var validateResponse = function validateResponse() {
    var res = [];

    if (response) {
      res.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt2",
        style: {
          backgroundColor: '#ebebeb'
        },
        id: "owner-response"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        style: {
          color: '#454545'
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Response:")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
        className: "mt-2",
        style: {
          fontSize: '15px'
        }
      }, response)));
    }

    return res;
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "review-tile"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__.default, {
    show: show,
    onHide: handleClose,
    backdrop: "static",
    keyboard: false,
    dialogClassName: "modal-90w",
    "aria-labelledby": "example-custom-modal-styling-title"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__.default, {
    style: {
      width: '100%',
      height: 'auto'
    },
    src: thumbnailModal,
    rounded: true,
    thumbnail: "true"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
    style: {
      marginTop: '2%',
      marginLeft: '5%',
      width: '90%',
      height: 'auto'
    },
    type: "button",
    onClick: handleClose,
    id: "review-button"
  }, "Close"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default, {
    style: {
      color: '#525252'
    },
    border: "0"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "star"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_rating__WEBPACK_IMPORTED_MODULE_1__.default, {
    stop: 20,
    step: 4,
    fractions: 4,
    initialRating: ratingsRounded,
    readonly: "true",
    quiet: "false",
    emptySymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star"
    }),
    fullSymbol: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("i", {
      id: "star-icon",
      className: "bi bi-star-fill"
    })
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "user-container",
    className: "d-inline-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "user-container-item",
    className: "ml-3"
  }, reviewerName), ",", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "user-container-item",
    className: "ml-3"
  }, date), verifiedPurchaser()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-3",
    id: "review-text-container",
    key: JSON.stringify(photos)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__.default.Title, null, validateSummary()), validateBody()), validateResponse(), validateRecommend(), thumbnails, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      color: '#949494'
    },
    className: "d-inline-flex"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, "Was this helpful?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: {
      color: '#949494'
    },
    id: "helpful-yes",
    className: "ml-auto p-2",
    onClick: handleHelpfulClick,
    "aria-hidden": "true"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, "Yes")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "mt-2"
  }, "(", helpful, ")"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "ml-auto p-2"
  }, "|"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    style: {
      color: '#949494'
    },
    id: "helpful-yes",
    className: "ml-auto p-2",
    "aria-hidden": "true",
    onClick: handleReport
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("u", null, "Report")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", {
    style: {
      border: '1px solid black'
    }
  }));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewTile);

/***/ }),

/***/ "./client/src/components/R-and-R/components/review-list/reviews-list.jsx":
/*!*******************************************************************************!*\
  !*** ./client/src/components/R-and-R/components/review-list/reviews-list.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _review_tile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./review-tile */ "./client/src/components/R-and-R/components/review-list/review-tile.jsx");
/* harmony import */ var _response_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-form */ "./client/src/components/R-and-R/components/review-list/response-form.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var ReviewsList = function ReviewsList(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState2 = _slicedToArray(_useState, 1),
      reviews = _useState2[0].reviews;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState4 = _slicedToArray(_useState3, 1),
      product = _useState4[0].product;

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState6 = _slicedToArray(_useState5, 1),
      productId = _useState6[0].productId;

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      currentRender = _useState8[0],
      setCurrentRender = _useState8[1];

  var getDate = function getDate(date) {
    var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var month = monthNames[date.getMonth() + 1];
    var day = date.getDate();
    var year = date.getFullYear();
    return "".concat(month, " ").concat(day, ", ").concat(year);
  };

  var getTiles = function getTiles() {
    var arr = [];

    if (reviews.length >= currentRender.length) {
      for (var i = currentRender.length; i < currentRender.length + 2; i += 1) {
        if (reviews[i]) {
          arr.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_review_tile__WEBPACK_IMPORTED_MODULE_1__.default, {
            key: Math.random().toString(36).substr(2, 9),
            body: reviews[i].body,
            date: getDate(new Date(reviews[i].date)),
            helpfulness: reviews[i].helpfulness,
            photos: reviews[i].photos,
            rating: reviews[i].rating,
            recommended: reviews[i].recommended,
            response: reviews[i].response,
            reviewId: reviews[i].review_id,
            reviewerName: reviews[i].reviewer_name,
            summary: reviews[i].summary,
            yesClicked: false
          }));
        }
      }

      setCurrentRender(currentRender.concat(arr));
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    return getTiles();
  }, []);

  var showMoreButton = function showMoreButton() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
      href: "#review-button",
      onClick: function onClick() {
        return getTiles();
      },
      id: "review-button"
    }, "SHOW MORE"));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "reviews-list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "reviews-tiles"
  }, currentRender), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-inline-flex mt-5"
  }, showMoreButton(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_response_form__WEBPACK_IMPORTED_MODULE_2__.default, {
    product: product,
    productId: productId,
    getDate: getDate
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReviewsList);

/***/ }),

/***/ "./client/src/components/R-and-R/r-and-r.jsx":
/*!***************************************************!*\
  !*** ./client/src/components/R-and-R/r-and-r.jsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_widgets_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-widgets/styles.css */ "./node_modules/react-widgets/styles.css");
/* harmony import */ var react_widgets_DropdownList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-widgets/DropdownList */ "./node_modules/react-widgets/esm/DropdownList.js");
/* harmony import */ var _components_review_list_reviews_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/review-list/reviews-list */ "./client/src/components/R-and-R/components/review-list/reviews-list.jsx");
/* harmony import */ var _components_breakdown_overall_rating__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/breakdown/overall-rating */ "./client/src/components/R-and-R/components/breakdown/overall-rating.jsx");
/* harmony import */ var _components_breakdown_review_spread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/breakdown/review-spread */ "./client/src/components/R-and-R/components/breakdown/review-spread.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* eslint-disable no-unused-vars */








var Review = function Review(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(5),
      _useState2 = _slicedToArray(_useState, 2),
      count = _useState2[0],
      setCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      page = _useState4[0],
      setPage = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('relevant'),
      _useState6 = _slicedToArray(_useState5, 2),
      sort = _useState6[0],
      setSort = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props),
      _useState8 = _slicedToArray(_useState7, 1),
      productId = _useState8[0].productId;

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      reviews = _useState10[0],
      setReviews = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
      _useState12 = _slicedToArray(_useState11, 2),
      product = _useState12[0],
      setProduct = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0
  }),
      _useState14 = _slicedToArray(_useState13, 2),
      ratings = _useState14[0],
      setRatings = _useState14[1];

  var _useState15 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState16 = _slicedToArray(_useState15, 2),
      percentRecommend = _useState16[0],
      setPercentRecommend = _useState16[1];

  var _useState17 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState18 = _slicedToArray(_useState17, 2),
      totalRatings = _useState18[0],
      setTotalRatings = _useState18[1];

  var mounted = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);

  var handleRecommendation = function handleRecommendation() {
    var recommend = 0;
    reviews.forEach(function (review) {
      if (review.recommend) recommend += 1;
    });
    setPercentRecommend(recommend / reviews.length * 100);
  };

  var getReviews = function getReviews() {
    var params = {
      page: page,
      count: count,
      sort: sort,
      product_id: productId
    };
    axios__WEBPACK_IMPORTED_MODULE_1___default().get('reviews', {
      params: params
    }).then(function (_ref) {
      var data = _ref.data;
      setCount(data.response.count);
      setReviews(_toConsumableArray(data.response.results));
    })["catch"](function (err) {
      if (mounted.current) {
        throw err;
      }
    });
  };

  var validate = function validate() {
    if (reviews.length > 0) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_review_list_reviews_list__WEBPACK_IMPORTED_MODULE_4__.default, {
        key: JSON.stringify(reviews),
        reviews: reviews,
        product: product,
        productId: productId
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null);
  };

  var compileRatings = function compileRatings() {
    var nextRatings = {
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0
    };
    var nextTotal = 0;
    reviews.forEach(function (item) {
      nextRatings[item.rating] += 1;
      nextTotal += item.rating;
    });
    setRatings(_objectSpread(_objectSpread({}, ratings), nextRatings));
    setTotalRatings(nextTotal);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    getReviews();
    return function () {
      mounted.current = false;
    };
  }, [sort]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (reviews.length > 0) {
      compileRatings();
      handleRecommendation();
    }
  }, [reviews]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "d-inline-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginLeft: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      margin: '5px auto'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_breakdown_overall_rating__WEBPACK_IMPORTED_MODULE_5__.default, {
    key: totalRatings,
    rating: Math.floor(totalRatings / reviews.length * 4)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      width: '350px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_breakdown_review_spread__WEBPACK_IMPORTED_MODULE_6__.default, {
    key: JSON.stringify(ratings),
    ratingBreakdown: ratings,
    recommendation: percentRecommend
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    style: {
      marginLeft: '50px',
      width: '70%',
      marginTop: '20px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "review-sort",
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", {
    style: {
      marginTop: '5px',
      marginLeft: '5px'
    }
  }, reviews.length, ' ', "reviews, sorted by"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "dropdown-list",
    style: {
      marginLeft: '5px',
      marginBottom: '10px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_widgets_DropdownList__WEBPACK_IMPORTED_MODULE_3__.default, {
    defaultValue: "Relevant",
    data: ['Helpful', 'Newest', 'Relevant'],
    onChange: function onChange(val) {
      return setSort(val.toLowerCase());
    }
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    id: "reviews-list"
  }, validate()))));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Review);

/***/ }),

/***/ "./firebase/index.js":
/*!***************************!*\
  !*** ./firebase/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "storage": () => (/* binding */ storage),
/* harmony export */   "default": () => (/* reexport safe */ firebase_app__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/storage */ "./node_modules/firebase/storage/dist/index.esm.js");


var firebaseConfig = {
  apiKey: 'AIzaSyBocgHVX-9CU6E3CG5_w2DAKs0UmxSb1_s',
  authDomain: 'frontend--capstone.firebaseapp.com',
  projectId: 'frontend--capstone',
  storageBucket: 'frontend--capstone.appspot.com',
  messagingSenderId: '363443525448',
  appId: '1:363443525448:web:7e33f4f2034b8f1319c57d',
  measurementId: 'G-06CQSHMVCB'
};
firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.initializeApp(firebaseConfig);
var storage = firebase_app__WEBPACK_IMPORTED_MODULE_0__.default.storage();


/***/ })

}]);
//# sourceMappingURL=client_src_components_R-and-R_r-and-r_jsx.bundle.js.map