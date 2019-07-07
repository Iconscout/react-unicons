import React from 'react';
import PropTypes from 'prop-types';

const UilShuffle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,10A1,1,0,0,0,4,9V5.41L8.56,10A1,1,0,0,0,10,10a1,1,0,0,0,0-1.41L5.41,4H9A1,1,0,0,0,9,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V9A1,1,0,0,0,3,10Zm12.3,4a1,1,0,0,0-1.41,1.41l6.27,6.28a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42ZM9,20H5.41L21.71,3.71a1,1,0,1,0-1.42-1.42L4,18.59V15a1,1,0,0,0-2,0v6a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H9a1,1,0,0,0,0-2Z'
  }));
};

UilShuffle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilShuffle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilShuffle;