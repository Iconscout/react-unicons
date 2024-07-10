import React from 'react';
import PropTypes from 'prop-types';

const UilBowlingBall = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7.9917,8.00171a1,1,0,1,0,1,1A1,1,0,0,0,7.9917,8.00171ZM11.99121,2.002a10,10,0,1,0,10,10A10.01177,10.01177,0,0,0,11.99121,2.002Zm0,18a8,8,0,1,1,8-8A8.00916,8.00916,0,0,1,11.99121,20.002ZM10.9917,10.00171a1,1,0,1,0,1,1A1,1,0,0,0,10.9917,10.00171Zm0-4a1,1,0,1,0,1,1A1,1,0,0,0,10.9917,6.00171Z'
  }));
};

UilBowlingBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilBowlingBall;