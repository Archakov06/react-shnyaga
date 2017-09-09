import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Shnyaga extends Component {

  constructor(props) {
    super(props);
    this.state = { checked: this.props.checked };
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ checked: nextProps.checked });
  }

  handleClick() {
    if (!this.props.disabled) {
      this.props.onClick();
      this.setState({ checked: !this.state.checked });
    }
  };

  render() {

    const className = [
      'shnyaga',
      this.props.className,
      'shnyaga--' + this.props.size,
      this.state.checked ? 'shnyaga--checked' : '',
      this.props.disabled ? 'shnyaga--disabled' : '',
    ].join(' ').replace(/\s{2,}/g, ' ').trim();

    const bgColor = { backgroundColor: this.props[this.state.checked ? 'onColor' : 'offColor'] };

    return (
      <div style={ bgColor } className={ className } onClick={ this.handleClick }></div>
    );
  }

  static defaultProps = {
    checked: false,
    onClick: () => ({}),
    disabled: false,
    className: '',
    offColor: '#e6e6e6',
    onColor: '#468cff',
    size: 'normal',
  };

  static propTypes = {
    checked: PropTypes.bool,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
    offColor: PropTypes.string,
    onColor: PropTypes.string,
    size: PropTypes.string,
  };

}
