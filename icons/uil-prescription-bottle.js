import React from 'react';
import PropTypes from 'prop-types';

const UilPrescriptionBottle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,2H5A2,2,0,0,0,3,4V6A2,2,0,0,0,5,8V19a3,3,0,0,0,3,3h8a3,3,0,0,0,3-3V8a2,2,0,0,0,2-2V4A2,2,0,0,0,19,2ZM17,16H11V12h6Zm0-6H10a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h7v1a1,1,0,0,1-1,1H8a1,1,0,0,1-1-1V8H17ZM5,6V4H19V6Z'
  }));
};

UilPrescriptionBottle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPrescriptionBottle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPrescriptionBottle;