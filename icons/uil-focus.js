import React from 'react';
import PropTypes from 'prop-types';

const UilFocus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,2H3A1,1,0,0,0,2,3V8A1,1,0,0,0,4,8V4H8A1,1,0,0,0,8,2ZM8,20H4V16a1,1,0,0,0-2,0v5a1,1,0,0,0,1,1H8a1,1,0,0,0,0-2ZM21,2H16a1,1,0,0,0,0,2h4V8a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2Zm0,13a1,1,0,0,0-1,1v4H16a1,1,0,0,0,0,2h5a1,1,0,0,0,1-1V16A1,1,0,0,0,21,15Z'
  }));
};

UilFocus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilFocus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilFocus;