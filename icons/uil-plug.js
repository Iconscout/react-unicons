import React from 'react';
import PropTypes from 'prop-types';

const UilPlug = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,6H16V3a1,1,0,0,0-2,0V6H10V3A1,1,0,0,0,8,3V6H5A1,1,0,0,0,5,8H6v5a1,1,0,0,0,.29.71L9,16.41V21a1,1,0,0,0,2,0V17h2v4a1,1,0,0,0,2,0V16.41l2.71-2.7A1,1,0,0,0,18,13V8h1a1,1,0,0,0,0-2Zm-3,6.59L13.59,15H10.41L8,12.59V8h8ZM11,13h2a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Z'
  }));
};

UilPlug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilPlug;