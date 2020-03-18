import React from 'react';
import PropTypes from 'prop-types';

const UilBitcoinSign = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,9a4,4,0,0,0-4-4V3a1,1,0,0,0-2,0V5H11V3A1,1,0,0,0,9,3V5H6A1,1,0,0,0,6,7H7V17H6a1,1,0,0,0,0,2H9v2a1,1,0,0,0,2,0V19h2v2a1,1,0,0,0,2,0V19a4,4,0,0,0,2.62-7A4,4,0,0,0,19,9Zm-4,8H9V13h6a2,2,0,0,1,0,4Zm0-6H9V7h6a2,2,0,0,1,0,4Z'
  }));
};

UilBitcoinSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBitcoinSign.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBitcoinSign;