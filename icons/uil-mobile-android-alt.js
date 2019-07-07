import React from 'react';
import PropTypes from 'prop-types';

const UilMobileAndroidAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,2H8A3,3,0,0,0,5,5V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V5A3,3,0,0,0,16,2Zm1,17a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V18H17Zm0-3H7V5A1,1,0,0,1,8,4h8a1,1,0,0,1,1,1Z'
  }));
};

UilMobileAndroidAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMobileAndroidAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMobileAndroidAlt;