import React from 'react';
import PropTypes from 'prop-types';

const UilMedkit = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,17h1v1a1,1,0,0,0,2,0V17h1a1,1,0,0,0,0-2H13V14a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2ZM19,6H17V5a3,3,0,0,0-3-3H10A3,3,0,0,0,7,5V6H5A3,3,0,0,0,2,9V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM9,5a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1V6H9ZM20,19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12H20Zm0-9H4V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z'
  }));
};

UilMedkit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilMedkit;