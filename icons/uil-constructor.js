import React from 'react';
import PropTypes from 'prop-types';

const UilConstructor = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,9.67V9.5a7.95,7.95,0,0,0-5.59-7.62l-.06,0a8.32,8.32,0,0,0-2.59-.36A8.21,8.21,0,0,0,4,9.67a3,3,0,0,0,0,5.66,8,8,0,0,0,8,7.17h.23a8.13,8.13,0,0,0,7.68-7.16A3,3,0,0,0,20,9.67ZM12.18,20.5a6,6,0,0,1-6.09-5H17.86A6.09,6.09,0,0,1,12.18,20.5Zm6.82-7H5a1,1,0,0,1,0-2H7a1,1,0,0,0,0-2H6A6.4,6.4,0,0,1,9,4.35V7.5a1,1,0,0,0,2,0V3.59a7.34,7.34,0,0,1,.82-.09H12a6.64,6.64,0,0,1,1,.09V7.5a1,1,0,0,0,2,0V4.32a6.65,6.65,0,0,1,1.18.87A6,6,0,0,1,18,9.5H17a1,1,0,0,0,0,2h2a1,1,0,0,1,0,2Z'
  }));
};

UilConstructor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilConstructor;