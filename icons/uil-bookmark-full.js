import React from 'react';
import PropTypes from 'prop-types';

const UilBookmarkFull = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18,2H6A1,1,0,0,0,5,3V21a1,1,0,0,0,1.65.76L12,17.27l5.29,4.44A1,1,0,0,0,18,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,19,21V3A1,1,0,0,0,18,2ZM17,18.86,12.64,15.2a1,1,0,0,0-1.28,0L7,18.86V4H17Z'
  }));
};

UilBookmarkFull.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBookmarkFull.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBookmarkFull;