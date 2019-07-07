import React from 'react';
import PropTypes from 'prop-types';

const UilPauseCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,7A1,1,0,0,0,9,8v8a1,1,0,0,0,2,0V8A1,1,0,0,0,10,7Zm2-5A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14,7a1,1,0,0,0-1,1v8a1,1,0,0,0,2,0V8A1,1,0,0,0,14,7Z'
  }));
};

UilPauseCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPauseCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPauseCircle;