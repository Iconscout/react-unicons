import React from 'react';
import PropTypes from 'prop-types';

const UilCoffee = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,17h4a5,5,0,0,0,5-5V11h1a3,3,0,0,0,0-6H18V4a1,1,0,0,0-1-1H5A1,1,0,0,0,4,4v8A5,5,0,0,0,9,17ZM18,7h1a1,1,0,0,1,0,2H18ZM6,5H16v7a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3ZM21,19H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilCoffee.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCoffee.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCoffee;