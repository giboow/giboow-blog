"use strict";

var _react = require("react");

var _react2 = _interopRequireDefault2(_react);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _layout = require("../components/layout");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  return _react2.default.createElement(_layout2.default, { title: "hello" }, _react2.default.createElement("div", { className: "grid" }, _react2.default.createElement("div", { className: "grid__column grid__column--6 grid__column--#--sm " }, "..."), _react2.default.createElement("div", { className: "grid__column grid__column--6 grid__column--#--md " }, "..."), _react2.default.createElement("div", { className: "grid__column grid__column--12 grid__column--#--lg " }, "..."), _react2.default.createElement("div", { className: "grid__column grid__column--12 grid__column--#--xl " }, "...")));
};