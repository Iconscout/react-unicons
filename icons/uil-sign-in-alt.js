import React from 'react';
import PropTypes from 'prop-types';

const UilSignInAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.5,15.1a1,1,0,0,0-1.34.45A8,8,0,1,1,12,4a7.93,7.93,0,0,1,7.16,4.45,1,1,0,0,0,1.8-.9,10,10,0,1,0,0,8.9A1,1,0,0,0,20.5,15.1ZM21,11H11.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L11.41,13H21a1,1,0,0,0,0-2Z'
  }));
};

UilSignInAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSignInAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSignInAlt;