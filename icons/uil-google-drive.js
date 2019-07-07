import React from 'react';
import PropTypes from 'prop-types';

const UilGoogleDrive = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.4231,13.88785,15.33356,3.33792H8.66663l6.09,10.54993ZM8.08917,4.33835,2,14.88736l3.33356,5.77472,6.08911-10.54926Zm1.73273,10.549L6.48877,20.66208H18.66663L22,14.88736Z'
  }));
};

UilGoogleDrive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilGoogleDrive.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilGoogleDrive;