import React from 'react';
import PropTypes from 'prop-types';

const UilAdobe = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9.07,17.28h2.78l1.75,3.44h2.54L12,9.87ZM2,3V21L9.42,3ZM14.48,3,22,20.81V3Z'
  }));
};

UilAdobe.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAdobe.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAdobe;