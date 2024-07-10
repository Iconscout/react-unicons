import React from 'react';
import PropTypes from 'prop-types';

const UilRopeWay = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,6.5H13V4h4.62a1,1,0,0,0,0-2H6.38a1,1,0,1,0,0,2H11V6.5H5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9.5A3,3,0,0,0,19,6.5ZM11,20H5a1,1,0,0,1-1-1V15.25h7a.5.5,0,0,0,0,.13v4.5A.53.53,0,0,0,11,20Zm9-1a1,1,0,0,1-1,1H13a.53.53,0,0,0,0-.12v-4.5a.5.5,0,0,0,0-.13h7Zm0-5.75H4V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z'
  }));
};

UilRopeWay.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilRopeWay;