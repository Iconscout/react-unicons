import React from 'react';
import PropTypes from 'prop-types';

const UilAlignLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,7H21a1,1,0,0,0,0-2H3A1,1,0,0,0,3,7Zm0,4H17a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-4,4H3a1,1,0,0,0,0,2H17a1,1,0,0,0,0-2Z'
  }));
};

UilAlignLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignLeft;