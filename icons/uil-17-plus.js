import React from 'react';
import PropTypes from 'prop-types';

const Uil17Plus = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,7V9a1,1,0,0,0,2,0V8h2.78L14,16.8A1,1,0,0,0,14.8,18l.2,0a1,1,0,0,0,1-.8l2-10a1,1,0,0,0-.21-.83A1,1,0,0,0,17,6H12A1,1,0,0,0,11,7Zm7-2h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2ZM7,7V17a1,1,0,0,0,2,0V7A1,1,0,0,0,7,7ZM21.6,9a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9Z'
  }));
};

Uil17Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Uil17Plus;