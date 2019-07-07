import React from 'react';
import PropTypes from 'prop-types';

const UilWindowGrid = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM8,20H4V4H8Zm12,0H10V13H20Zm0-9H10V4H20Z'
  }));
};

UilWindowGrid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindowGrid.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindowGrid;