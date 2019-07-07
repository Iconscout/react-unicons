import React from 'react';
import PropTypes from 'prop-types';

const UilWindow = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,5a1,1,0,1,0,1,1A1,1,0,0,0,10,5ZM6,5A1,1,0,1,0,7,6,1,1,0,0,0,6,5Zm8,0a1,1,0,1,0,1,1A1,1,0,0,0,14,5Zm6-4H4A3,3,0,0,0,1,4V20a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V4A3,3,0,0,0,20,1Zm1,19a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V11H21ZM21,9H3V4A1,1,0,0,1,4,3H20a1,1,0,0,1,1,1Z'
  }));
};

UilWindow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindow.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindow;