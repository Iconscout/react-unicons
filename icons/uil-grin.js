import React from 'react';
import PropTypes from 'prop-types';

const UilGrin = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm3-9A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm3-7H9a1,1,0,0,0-1,1,4,4,0,0,0,8,0A1,1,0,0,0,15,13Zm-3,3a2,2,0,0,1-1.73-1h3.46A2,2,0,0,1,12,16Zm3-7a1,1,0,1,0,1,1A1,1,0,0,0,15,9Z'
  }));
};

UilGrin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilGrin.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilGrin;