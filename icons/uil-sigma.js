import React from 'react';
import PropTypes from 'prop-types';

const UilSigma = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,16H10.41l3.3-3.29a1,1,0,0,0,0-1.42L10.41,8H16a1,1,0,0,0,0-2H8a1,1,0,0,0-.92.62,1,1,0,0,0,.21,1.09L11.59,12l-4.3,4.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,8,18h8a1,1,0,0,0,0-2Z'
  }));
};

UilSigma.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSigma.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSigma;