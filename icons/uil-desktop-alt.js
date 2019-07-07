import React from 'react';
import PropTypes from 'prop-types';

const UilDesktopAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H8v2H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2H16V18h3a3,3,0,0,0,3-3V5A3,3,0,0,0,19,2ZM14,20H10V18h4Zm6-5a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V14H20Zm0-3H4V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1Z'
  }));
};

UilDesktopAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDesktopAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDesktopAlt;