import React from 'react';
import PropTypes from 'prop-types';

const UilDrill = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,4H9A1,1,0,0,0,8,5V7H3A1,1,0,0,0,3,9H8v4a1,1,0,0,0,2,0V12h4v7a1,1,0,0,0,1,1h2a3,3,0,0,0,3-3V11.82A3,3,0,0,0,22,9V7A3,3,0,0,0,19,4ZM18,17a1,1,0,0,1-1,1H16V12h2Zm2-8a1,1,0,0,1-1,1H10V6h6V7a1,1,0,0,0,2,0V6h1a1,1,0,0,1,1,1Z'
  }));
};

UilDrill.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDrill.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDrill;