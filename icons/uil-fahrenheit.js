import React from 'react';
import PropTypes from 'prop-types';

const UilFahrenheit = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,3h-7a3,3,0,0,0-3,3V20a1,1,0,0,0,2,0V13h6a1,1,0,0,0,0-2h-6V6a1,1,0,0,1,1-1h7a1,1,0,0,0,0-2ZM5.5,3a3,3,0,1,0,3,3A3,3,0,0,0,5.5,3Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,5.5,7Z'
  }));
};

UilFahrenheit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilFahrenheit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilFahrenheit;