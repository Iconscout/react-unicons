import React from 'react';
import PropTypes from 'prop-types';

const UilDiceFive = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,2H7A5,5,0,0,0,2,7V17a5,5,0,0,0,5,5H17a5,5,0,0,0,5-5V7A5,5,0,0,0,17,2Zm3,15a3,3,0,0,1-3,3H7a3,3,0,0,1-3-3V7A3,3,0,0,1,7,4H17a3,3,0,0,1,3,3ZM8,15a1,1,0,1,0,1,1A1,1,0,0,0,8,15Zm4-4a1,1,0,1,0,1,1A1,1,0,0,0,12,11ZM8,7A1,1,0,1,0,9,8,1,1,0,0,0,8,7Zm8,8a1,1,0,1,0,1,1A1,1,0,0,0,16,15Zm0-8a1,1,0,1,0,1,1A1,1,0,0,0,16,7Z'
  }));
};

UilDiceFive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDiceFive.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDiceFive;