'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('./styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Shnyaga = function (_React$Component) {
  _inherits(Shnyaga, _React$Component);

  function Shnyaga(props) {
    _classCallCheck(this, Shnyaga);

    var _this = _possibleConstructorReturn(this, (Shnyaga.__proto__ || Object.getPrototypeOf(Shnyaga)).call(this, props));

    _this.state = { checked: _this.props.checked };
    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Shnyaga, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({ checked: nextProps.checked });
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      e.preventDefault();
      if (!this.props.disabled) {
        console.log(this.state);
        this.props.onClick();
        this.setState({ checked: !this.state.checked });
      }
    }
  }, {
    key: 'render',
    value: function render() {

      var className = ['shnyaga', this.props.className, 'shnyaga--' + this.props.size, this.state.checked ? 'shnyaga--checked' : '', this.props.disabled ? 'shnyaga--disabled' : ''].join(' ').replace(/\s{2,}/g, ' ').trim();

      var bgColor = this.state.checked ? { backgroundColor: this.props.onColor } : { backgroundColor: this.props.offColor };

      return _react2.default.createElement('div', { style: bgColor, className: className, onClick: this.handleClick });
    }
  }]);

  return Shnyaga;
}(_react2.default.Component);

Shnyaga.defaultProps = {
  checked: false,
  onClick: function onClick() {},
  disabled: false,
  className: '',
  offColor: '#e6e6e6',
  onColor: '#468cff',
  size: 'normal'
};
Shnyaga.propTypes = {
  checked: _react2.default.PropTypes.bool,
  onClick: _react2.default.PropTypes.func,
  disabled: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  offColor: _react2.default.PropTypes.string,
  onColor: _react2.default.PropTypes.string,
  size: _react2.default.PropTypes.string
};
exports.default = Shnyaga;
