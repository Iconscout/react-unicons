import React from 'react';
import PropTypes from 'prop-types';

const UilSuitcase = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,6.5H16v-1a3,3,0,0,0-3-3H11a3,3,0,0,0-3,3v1H5a3,3,0,0,0-3,3v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3v-9A3,3,0,0,0,19,6.5Zm-9-1a1,1,0,0,1,1-1h2a1,1,0,0,1,1,1v1H10Zm10,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13.45H7V14.5a1,1,0,0,0,2,0V13.45h6V14.5a1,1,0,0,0,2,0V13.45h3Zm0-7H4V9.5a1,1,0,0,1,1-1H19a1,1,0,0,1,1,1Z'
  }));
};

UilSuitcase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSuitcase.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSuitcase;