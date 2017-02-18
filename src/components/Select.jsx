import React from 'react';

import '../style/Select.styl';

class Select extends React.PureComponent {
  render() {
    const {
      children,
      disabled,
      onChange,
      placeholder,
      value,
    } = this.props;

    const classes = `custom-select ${disabled ? 'disabled' : ''}`;

    return <div className={classes}>
      <select
        disabled={disabled}
        onChange={onChange}
        value={value}
      >
        <option disabled>{ placeholder }</option>
        { children }
      </select>
    </div>;
  }
}

Select.propTypes = {
  children: React.PropTypes.node.isRequired,
  disabled: React.PropTypes.bool.isRequired,
  onChange: React.PropTypes.func,
  placeholder: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
};

Select.defaultProps = {
  disabled: false,
  placeholder: 'Select a value',
};

export default Select;
