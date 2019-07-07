import React from 'react';
import PropTypes from 'prop-types';

const UilLeftToRightTextDirection = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.42,17.62a1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L18.09,17H3.5a1,1,0,0,0,0,2H18.09l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,21.42,17.62ZM8.5,10v4a1,1,0,0,0,2,0V4h2V14a1,1,0,0,0,2,0V4h1a1,1,0,0,0,0-2h-7a4,4,0,0,0,0,8Zm0-6V8a2,2,0,0,1,0-4Z'
  }));
};

UilLeftToRightTextDirection.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLeftToRightTextDirection.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLeftToRightTextDirection;