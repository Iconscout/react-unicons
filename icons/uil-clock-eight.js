import React from 'react';
import PropTypes from 'prop-types';

const UilClockEight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20ZM11,6a1,1,0,0,0-1,1v4.42L7.9,12.63a1,1,0,0,0,.5,1.87,1,1,0,0,0,.5-.13l2.6-1.5.09-.09.16-.13a.86.86,0,0,0,.1-.16.89.89,0,0,0,.08-.17.65.65,0,0,0,.05-.2S12,12,12,12V7A1,1,0,0,0,11,6Z'
  }));
};

UilClockEight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockEight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockEight;