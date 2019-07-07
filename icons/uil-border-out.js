import React from 'react';
import PropTypes from 'prop-types';

const UilBorderOut = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,9a1,1,0,1,0-1-1A1,1,0,0,0,12,9Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,12,13Zm4,0a1,1,0,1,0-1-1A1,1,0,0,0,16,13Zm-4,4a1,1,0,1,0-1-1A1,1,0,0,0,12,17ZM20,3H4A1,1,0,0,0,3,4V20a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V4A1,1,0,0,0,20,3ZM19,19H5V5H19ZM8,13a1,1,0,1,0-1-1A1,1,0,0,0,8,13Z'
  }));
};

UilBorderOut.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBorderOut.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBorderOut;