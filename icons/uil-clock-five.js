import React from 'react';
import PropTypes from 'prop-types';

const UilClockFive = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20Zm1-8.07V7a1,1,0,0,0-2,0v5s0,.07,0,.11a1,1,0,0,0,.11.59l1.5,2.6a1,1,0,0,0,1.74-1Z'
  }));
};

UilClockFive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockFive.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockFive;