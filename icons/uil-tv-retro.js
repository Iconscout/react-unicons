import React from 'react';
import PropTypes from 'prop-types';

const UilTvRetro = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18,6H14.41l2.3-2.29a1,1,0,1,0-1.42-1.42L12,5.54l-1.17-2a1,1,0,1,0-1.74,1L10,6H6A3,3,0,0,0,3,9v8a3,3,0,0,0,3,3v1a1,1,0,0,0,2,0V20h8v1a1,1,0,0,0,2,0V20a3,3,0,0,0,3-3V9A3,3,0,0,0,18,6Zm1,11a1,1,0,0,1-1,1H6a1,1,0,0,1-1-1V9A1,1,0,0,1,6,8H18a1,1,0,0,1,1,1Z'
  }));
};

UilTvRetro.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTvRetro.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTvRetro;