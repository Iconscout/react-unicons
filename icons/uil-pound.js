import React from 'react';
import PropTypes from 'prop-types';

const UilPound = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,20H8a4.92,4.92,0,0,0,1-3V14h6a1,1,0,0,0,0-2H9V8.89a4.89,4.89,0,0,1,9.13-2.44,1,1,0,0,0,1.37.36,1,1,0,0,0,.37-1.36A6.9,6.9,0,0,0,7,8.89V12H4a1,1,0,0,0,0,2H7v3a3,3,0,0,1-3,3,1,1,0,0,0,0,2H20a1,1,0,0,0,0-2Z'
  }));
};

UilPound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPound.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPound;