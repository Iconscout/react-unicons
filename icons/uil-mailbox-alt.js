import React from 'react';
import PropTypes from 'prop-types';

const UilMailboxAlt = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,13h2a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm8,7H18V9h1a1,1,0,0,0,0-2H17.91A6,6,0,0,0,6.09,7H5A1,1,0,0,0,5,9H6V20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2ZM12,4a4,4,0,0,1,3.86,3H8.14A4,4,0,0,1,12,4Zm4,16H8V18h8Zm0-4H8V9h8Z'
  }));
};

UilMailboxAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilMailboxAlt;