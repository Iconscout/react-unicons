import React from 'react';
import PropTypes from 'prop-types';

const UilMinusSquareFull = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,13h6a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2ZM21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,20H4V4H20Z'
  }));
};

UilMinusSquareFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMinusSquareFull.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMinusSquareFull;