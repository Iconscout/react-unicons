import React from 'react';
import PropTypes from 'prop-types';

const UilDatabaseAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,17a1,1,0,1,0,1,1A1,1,0,0,0,8,17Zm0-6a1,1,0,1,0,1,1A1,1,0,0,0,8,11Zm8-9H8A4,4,0,0,0,4,6V18a4,4,0,0,0,4,4h8a4,4,0,0,0,4-4V6A4,4,0,0,0,16,2Zm2,16a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V15.44A3.91,3.91,0,0,0,8,16h8a3.91,3.91,0,0,0,2-.56Zm0-6a2,2,0,0,1-2,2H8a2,2,0,0,1-2-2V9.44A3.91,3.91,0,0,0,8,10h8a3.91,3.91,0,0,0,2-.56ZM16,8H8A2,2,0,0,1,8,4h8a2,2,0,0,1,0,4Z'
  }));
};

UilDatabaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDatabaseAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDatabaseAlt;