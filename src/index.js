import React from 'react'

import './styles.css'

export default class Shnyaga extends React.Component {

  constructor(props) {
    super(props);
    this.state = {checked: this.props.checked};
  }

  componentWillReceiveProps(nextProps) {
    this.setState({checked: nextProps.checked});
  }

  handleClick(e) => {
    e.preventDefault();
    if(!this.props.disabled) {
      console.log(this.state);
      this.props.onClick();
      this.setState({checked: !this.state.checked});
    }
  };

  render() {

    const className = [
      'shnyaga',
      this.props.className,
      'shnyaga--' + this.props.size,
      this.state.checked ? 'shnyaga--checked' : '',
      this.props.disabled ? 'shnyaga--disabled' : ''
    ].join(' ').replace(/\s{2,}/g,' ').trim();

    const bgColor = this.props.onColor && this.state.checked ? {backgroundColor: this.props.onColor} : {backgroundColor: this.props.offColor};

    return (
      <div style={ bgColor } className={ className } onClick={ this.handleClick }></div>
    );
  }

  static defaultProps = {
    checked: false,
    onClick: (function() {}),
    disabled: false,
    className: '',
    offColor: '#e6e6e6',
    onColor: '#468cff',
    size: 'normal'
  }

  static propTypes = {
    checked: React.PropTypes.bool,
    onClick: React.PropTypes.func,
    disabled: React.PropTypes.bool,
    className: React.PropTypes.string,
    offColor: React.PropTypes.string,
    onColor: React.PropTypes.string,
    size: React.PropTypes.string
  }

}
