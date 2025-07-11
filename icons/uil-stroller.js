import React from 'react';
import PropTypes from 'prop-types';

const UilStroller = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,16a3,3,0,1,0,3,3A3,3,0,0,0,19,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,19,20ZM9,16a3,3,0,1,0,3,3A3,3,0,0,0,9,16Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,9,20ZM22,8.5A6.51,6.51,0,0,0,15.5,2H15a1,1,0,0,0-1,1V8H7.52L6.27,4.65A1,1,0,0,0,5.33,4H3A1,1,0,0,0,3,6H4.64L5.89,9.37l0,0,.51,1.37,0,.09A6.44,6.44,0,0,0,12.5,15h3A6.49,6.49,0,0,0,22,8.5Zm-3.32,3.18A4.47,4.47,0,0,1,15.5,13h-3a4.47,4.47,0,0,1-4.16-2.8.14.14,0,0,1,0-.06L8.26,10H19.74A4.32,4.32,0,0,1,18.68,11.68ZM16,8V4A4.49,4.49,0,0,1,20,8Z'
  }));
};

UilStroller.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStroller.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStroller;