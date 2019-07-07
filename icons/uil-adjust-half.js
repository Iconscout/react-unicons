import React from 'react';
import PropTypes from 'prop-types';

const UilAdjustHalf = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.83,7.32h0a10.11,10.11,0,0,0-3.44-3.73l0,0h0A10,10,0,1,0,12,22h.29A10,10,0,0,0,20.83,7.32ZM11,19.93A8,8,0,0,1,11,4.07ZM13,4.07a8.07,8.07,0,0,1,2.49.74L13,9.12Zm0,9L17.17,5.9a8.14,8.14,0,0,1,1.58,1.83L13,17.69Zm1.15,6.58L19.74,10A8.16,8.16,0,0,1,20,12,8,8,0,0,1,14.15,19.7Z'
  }));
};

UilAdjustHalf.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAdjustHalf.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAdjustHalf;