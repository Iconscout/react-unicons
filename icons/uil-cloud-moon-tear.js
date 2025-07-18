import React from 'react';
import PropTypes from 'prop-types';

const UilCloudMoonTear = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.7,7.57a1,1,0,0,0-.93-.26,3.2,3.2,0,0,1-.66.08,3,3,0,0,1-3-3,3,3,0,0,1,.08-.65A1,1,0,0,0,16,2.53a4.93,4.93,0,0,0-3.83,4.21A6.24,6.24,0,0,0,10.5,6.5a6,6,0,0,0-5.94,5.13,3.5,3.5,0,0,0-.46,6.58,1.14,1.14,0,0,0,.4.08,1,1,0,0,0,.4-1.92A1.48,1.48,0,0,1,4,15a1.5,1.5,0,0,1,1.5-1.5,1,1,0,0,0,1-1,4,4,0,0,1,4-4,3.92,3.92,0,0,1,2.18.66h0a4,4,0,0,1,1.57,2,1,1,0,0,0,.78.67A2.32,2.32,0,0,1,16,16.11a1,1,0,0,0,1.1,1.68A4.32,4.32,0,0,0,19,14.17a4.23,4.23,0,0,0-.49-2A4.94,4.94,0,0,0,22,8.5,1,1,0,0,0,21.7,7.57Zm-4.59,2.82a2.61,2.61,0,0,1-.42,0A4.6,4.6,0,0,0,16,10a6,6,0,0,0-1.82-2.28c0-.12,0-.25,0-.37a3,3,0,0,1,1.05-2.28,5,5,0,0,0,4.23,4.23A3,3,0,0,1,17.11,10.39Zm-6,3.94a1,1,0,0,0-1.12,0C9.84,14.41,7.5,16,7.5,18.5a3,3,0,0,0,6,0C13.5,16,11.15,14.4,11.06,14.33ZM10.5,19.5a1,1,0,0,1-1-1,3,3,0,0,1,1-2,3,3,0,0,1,1,2A1,1,0,0,1,10.5,19.5Z'
  }));
};

UilCloudMoonTear.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCloudMoonTear.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCloudMoonTear;