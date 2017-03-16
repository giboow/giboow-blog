'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _index = require('./index.scss');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Layout = function (_Component) {
  (0, _inherits3.default)(Layout, _Component);

  function Layout() {
    (0, _classCallCheck3.default)(this, Layout);
    return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
  }

  (0, _createClass3.default)(Layout, [{
    key: 'render',
    value: function render() {
      var links = [{ name: 'Home', link: '/' }, { name: 'About', link: '/about' }, { name: 'Contact', link: '/contact' }];

      var _props = this.props,
          title = _props.title,
          children = _props.children;

      return _react2.default.createElement('div', null, _react2.default.createElement(_head2.default, null, _react2.default.createElement('title', null, title)), _react2.default.createElement('header', { className: 'masthead bg-color-primary padding-y padding-xxs padding-null' }, _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'grid grid--bottom' }, _react2.default.createElement('div', { className: 'grid__column grid__column--12 grid__column--3--md' }), _react2.default.createElement('div', { className: 'grid__column grid__column--12 grid__column--9--md type-right' }, _react2.default.createElement('ul', { className: 'masthead__nav list--inline margin-null' }, links.map(function (item, index) {
        return _react2.default.createElement('li', { key: index, className: 'list__item margin-xs margin-x padding-null type-bold' }, _react2.default.createElement(_link2.default, { href: item.link }, _react2.default.createElement('a', { className: 'color-light' }, item.name)));
      })))))), _react2.default.createElement('main', { className: 'mastcontent' }, children), _react2.default.createElement('footer', { className: 'mastfoot' }, 'I`m here to stay'));
    }
  }]);
  return Layout;
}(_react.Component);

Layout.propTypes = {
  title: _react.PropTypes.string.isRequired,
  children: _react.PropTypes.element.isRequired
};
exports.default = Layout;