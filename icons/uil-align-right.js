import React from 'react';
import PropTypes from 'prop-types';

const UilAlignRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM21,17H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-8H7a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignRight;