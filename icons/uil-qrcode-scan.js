import React from 'react';
import PropTypes from 'prop-types';

const UilQrcodeScan = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,21H4a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v4a3,3,0,0,0,3,3H8a1,1,0,0,0,0-2Zm14-6a1,1,0,0,0-1,1v4a1,1,0,0,1-1,1H16a1,1,0,0,0,0,2h4a3,3,0,0,0,3-3V16A1,1,0,0,0,22,15ZM20,1H16a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1V8a1,1,0,0,0,2,0V4A3,3,0,0,0,20,1ZM2,9A1,1,0,0,0,3,8V4A1,1,0,0,1,4,3H8A1,1,0,0,0,8,1H4A3,3,0,0,0,1,4V8A1,1,0,0,0,2,9Zm8-4H6A1,1,0,0,0,5,6v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V6A1,1,0,0,0,10,5ZM9,9H7V7H9Zm5,2h4a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1H14a1,1,0,0,0-1,1v4A1,1,0,0,0,14,11Zm1-4h2V9H15Zm-5,6H6a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,17H7V15H9Zm5-1a1,1,0,0,0,1-1,1,1,0,0,0,0-2H14a1,1,0,0,0-1,1v1A1,1,0,0,0,14,16Zm4-3a1,1,0,0,0-1,1v3a1,1,0,0,0,0,2h1a1,1,0,0,0,1-1V14A1,1,0,0,0,18,13Zm-4,4a1,1,0,1,0,1,1A1,1,0,0,0,14,17Z'
  }));
};

UilQrcodeScan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilQrcodeScan.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilQrcodeScan;