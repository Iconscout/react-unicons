import React from 'react';
import PropTypes from 'prop-types';

const UilXAdd = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.71 7.29a1 1 0 0 0-1.42 0L11 9.59l-2.29-2.3a1 1 0 1 0-1.42 1.42L9.59 11l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l2.29-2.3 2.29 2.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42L12.41 11l2.3-2.29a1 1 0 0 0 0-1.42ZM7 18a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5 5 0 0 0-5 5v8a5 5 0 0 0 5 5 1 1 0 0 0 0-2ZM18 7v6a1 1 0 0 0 2 0V7a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3Zm3 11h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Z'
  }));
};

UilXAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilXAdd;