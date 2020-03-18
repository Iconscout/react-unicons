import React from 'react';
import PropTypes from 'prop-types';

const UilParkingCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13,7H10A1,1,0,0,0,9,8v8a1,1,0,0,0,2,0V14h2a3,3,0,0,0,3-3V10A3,3,0,0,0,13,7Zm1,4a1,1,0,0,1-1,1H11V9h2a1,1,0,0,1,1,1ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilParkingCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilParkingCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilParkingCircle;