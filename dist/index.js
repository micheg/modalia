"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactDom = require("react-dom");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
var Modalia = function Modalia(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    title = _ref.title,
    children = _ref.children,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "small" : _ref$size;
  (0, _react.useEffect)(function () {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return function () {
      document.body.style.overflow = "";
    };
  }, [isOpen]);
  if (!isOpen) return null;
  var getSize = function getSize() {
    switch (size) {
      case "medium":
        return "60vw";
      case "large":
        return "80vw";
      case "xl":
        return "90vw";
      default:
        return "40vw";
      // Default to small
    }
  };
  return /*#__PURE__*/(0, _reactDom.createPortal)(/*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-backdrop"
  }, /*#__PURE__*/_react["default"].createElement("dialog", {
    open: true,
    className: "modal-dialog",
    style: {
      width: getSize()
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "modal-title"
  }, title), /*#__PURE__*/_react["default"].createElement("button", {
    className: "close-button",
    onClick: onClose
  }, "\xD7")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "content"
  }, children))), document.body);
};
var _default = exports["default"] = Modalia;