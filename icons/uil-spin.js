import React from 'react';
import PropTypes from 'prop-types';

const UilSpin = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13,3a7,7,0,0,0,0,14A5,5,0,0,0,13,7a3,3,0,0,0,0,6,1,1,0,0,0,0-2,1,1,0,0,1,0-2,3,3,0,0,1,0,6A5,5,0,0,1,13,5a7,7,0,0,1,0,14,9,9,0,0,1-9-9,1,1,0,0,0-2,0A11,11,0,0,0,13,21,9,9,0,0,0,13,3Z'
  }));
};

UilSpin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSpin.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSpin;