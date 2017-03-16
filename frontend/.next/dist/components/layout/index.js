'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Volumes/Optimus/Users/philippe/git/baigneur/frontend/components/layout/index.js';

exports.default = function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? 'This is the default title' : _ref$title;
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement('title', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, title)), _react2.default.createElement('header', { className: 'masthead bg-color-darker padding-y padding-xxs padding-null', __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, _react2.default.createElement('div', { className: 'container', __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement('div', { className: 'grid grid--bottom', __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, _react2.default.createElement('div', { className: 'grid__column grid__column--12 grid__column--3--md', __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), _react2.default.createElement('div', { className: 'grid__column grid__column--12 grid__column--9--md type-right', __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement('ul', { className: 'masthead__nav list--inline margin-null', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('li', { className: 'list__item margin-xs margin-x padding-null', __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('a', { className: 'color-light', __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, 'Home'))), _react2.default.createElement('li', { className: 'list__item margin-xs margin-x padding-null', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, _react2.default.createElement('a', { className: 'color-light', __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About'))), _react2.default.createElement('li', { className: 'list__item margin-xs margin-x padding-null', __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement(_link2.default, { href: '/contact', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, _react2.default.createElement('a', { className: 'color-light', __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Contact')))))))), _react2.default.createElement('main', { className: 'mastcontent', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, children), _react2.default.createElement('footer', { className: 'mastfoot', __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'I`m here to stay'));
};