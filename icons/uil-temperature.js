import React from 'react';
import PropTypes from 'prop-types';

const UilTemperature = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13,15.28V5.5a1,1,0,0,0-2,0v9.78A2,2,0,0,0,10,17a2,2,0,0,0,4,0A2,2,0,0,0,13,15.28ZM16.5,13V5.5a4.5,4.5,0,0,0-9,0V13a6,6,0,0,0,3.21,9.83A7,7,0,0,0,12,23,6,6,0,0,0,16.5,13Zm-2,7.07a4,4,0,0,1-6.42-2.2,4,4,0,0,1,1.1-3.76,1,1,0,0,0,.3-.71V5.5a2.5,2.5,0,0,1,5,0v7.94a1,1,0,0,0,.3.71,4,4,0,0,1-.28,6Z'
  }));
};

UilTemperature.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTemperature.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTemperature;