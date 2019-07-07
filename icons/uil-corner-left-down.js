import React from 'react';
import PropTypes from 'prop-types';

const UilCornerLeftDown = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,4.31H11.63a5,5,0,0,0-5,5v7L3.71,13.35a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.63,4.63a1,1,0,0,0,.33.22.94.94,0,0,0,.76,0,1.19,1.19,0,0,0,.33-.22L13,14.76a1,1,0,0,0-1.41-1.41L8.63,16.27v-7a3,3,0,0,1,3-3H21a1,1,0,0,0,0-2Z'
  }));
};

UilCornerLeftDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCornerLeftDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCornerLeftDown;