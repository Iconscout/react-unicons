import React from 'react';
import PropTypes from 'prop-types';

const UilShieldPlus = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm5.63-7.35a1.007 1.007 0 0 0-.835-.203 7.98 7.98 0 0 1-6.223-1.267.999.999 0 0 0-1.144 0 7.976 7.976 0 0 1-6.223 1.267A1 1 0 0 0 4 4.427v7.456a9.019 9.019 0 0 0 3.769 7.324l3.65 2.607a1 1 0 0 0 1.162 0l3.65-2.607A9.017 9.017 0 0 0 20 11.883V4.426a1.001 1.001 0 0 0-.37-.776ZM18 11.883a7.016 7.016 0 0 1-2.93 5.696L12 19.771 8.93 17.58A7.017 7.017 0 0 1 6 11.883v-6.3a9.955 9.955 0 0 0 6-1.391 9.955 9.955 0 0 0 6 1.391Z'
  }));
};

UilShieldPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilShieldPlus;