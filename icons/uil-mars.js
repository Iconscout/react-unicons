import React from 'react';
import PropTypes from 'prop-types';

const UilMars = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.42,4.12a1,1,0,0,0-.54-.54,1,1,0,0,0-.38-.08h-4a1,1,0,0,0,0,2h1.59l-2.4,2.4A7,7,0,1,0,16.1,9.31l2.4-2.4V8.5a1,1,0,0,0,2,0v-4A1,1,0,0,0,20.42,4.12ZM14,17A5,5,0,1,1,14,10h0A5,5,0,0,1,14,17Z'
  }));
};

UilMars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMars.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMars;