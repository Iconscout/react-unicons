import React from 'react';
import PropTypes from 'prop-types';

const UilAlignCenter = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7ZM7,9a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Zm14,4H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H7a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z'
  }));
};

UilAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignCenter;