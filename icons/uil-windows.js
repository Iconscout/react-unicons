import React from 'react';
import PropTypes from 'prop-types';

const UilWindows = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M22,2L11.2,3.6v8L22,11.5V2z M10.2,12.5L2,12.4l0,6.8l8.1,1.1L10.2,12.5L10.2,12.5z M2,4.8l0,6.8l8.1,0l0-7.9L2,4.8z M11.1,12.5l0,7.9L22,22l0-9.4L11.1,12.5z'
  }));
};

UilWindows.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWindows.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWindows;