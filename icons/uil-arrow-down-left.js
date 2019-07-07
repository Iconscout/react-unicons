import React from 'react';
import PropTypes from 'prop-types';

const UilArrowDownLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,16H9.41l8.3-8.29a1,1,0,1,0-1.42-1.42L8,14.59V7A1,1,0,0,0,6,7V17a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,7,18H17a1,1,0,0,0,0-2Z'
  }));
};

UilArrowDownLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowDownLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowDownLeft;