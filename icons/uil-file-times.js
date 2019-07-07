import React from 'react';
import PropTypes from 'prop-types';

const UilFileTimes = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M14.71,12.29a1,1,0,0,0-1.42,0L12,13.59l-1.29-1.3a1,1,0,0,0-1.42,1.42L10.59,15l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,16.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L13.41,15l1.3-1.29A1,1,0,0,0,14.71,12.29ZM20,8.94a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19l-.1,0A1.1,1.1,0,0,0,13.06,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V9S20,9,20,8.94ZM14,5.41,16.59,8H15a1,1,0,0,1-1-1ZM18,19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V5A1,1,0,0,1,7,4h5V7a3,3,0,0,0,3,3h3Z'
  }));
};

UilFileTimes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilFileTimes.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilFileTimes;