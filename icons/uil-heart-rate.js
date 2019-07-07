import React from 'react';
import PropTypes from 'prop-types';

const UilHeartRate = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,11H17.06a.78.78,0,0,0-.21,0l-.17,0a1.3,1.3,0,0,0-.15.1,1.67,1.67,0,0,0-.16.12,1,1,0,0,0-.09.13,1.32,1.32,0,0,0-.12.2v0l-1.6,4.41L10.39,4.66a1,1,0,0,0-1.88,0L6.2,11H3a1,1,0,0,0,0,2H6.92L7.15,13l.15,0a.86.86,0,0,0,.16-.1,1.67,1.67,0,0,0,.16-.12l.09-.13a1,1,0,0,0,.12-.2v0L9.45,7.92l4.16,11.42a1,1,0,0,0,.94.66h0a1,1,0,0,0,.94-.66L17.79,13H21a1,1,0,0,0,0-2Z'
  }));
};

UilHeartRate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHeartRate.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHeartRate;