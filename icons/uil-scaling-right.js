import React from 'react';
import PropTypes from 'prop-types';

const UilScalingRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.92,2.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H17a1,1,0,0,0,0,2h1.59L12,10.59,9.88,8.46A1,1,0,0,0,8.46,9.88L10.59,12,4,18.59V17a1,1,0,0,0-2,0v4a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H7a1,1,0,0,0,0-2H5.41L12,13.41l2.12,2.13a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L13.41,12,20,5.41V7a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z'
  }));
};

UilScalingRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilScalingRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilScalingRight;