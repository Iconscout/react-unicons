import React from 'react';
import PropTypes from 'prop-types';

const UilNA = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,6H18a3,3,0,0,0-3,3v8a1,1,0,0,0,2,0V13h3v4a1,1,0,0,0,2,0V9A3,3,0,0,0,19,6Zm1,5H17V9a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1ZM8,6A1,1,0,0,0,7,7v5.76L3.89,6.55A1,1,0,0,0,2,7V17a1,1,0,0,0,2,0V11.24l3.11,6.21A1,1,0,0,0,8,18a.91.91,0,0,0,.23,0A1,1,0,0,0,9,17V7A1,1,0,0,0,8,6Zm4-2a1,1,0,0,0-1,1V19a1,1,0,0,0,2,0V5A1,1,0,0,0,12,4Z'
  }));
};

UilNA.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilNA.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilNA;