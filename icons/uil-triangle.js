import React from 'react';
import PropTypes from 'prop-types';

const UilTriangle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.87,19.29l-9-15.58a1,1,0,0,0-1.74,0l-9,15.58a1,1,0,0,0,0,1,1,1,0,0,0,.87.5H21a1,1,0,0,0,.87-.5A1,1,0,0,0,21.87,19.29Zm-17.14-.5L12,6.21l7.27,12.58Z'
  }));
};

UilTriangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTriangle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTriangle;