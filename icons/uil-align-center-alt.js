import React from 'react';
import PropTypes from 'prop-types';

const UilAlignCenterAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5,8H19a1,1,0,0,0,0-2H5A1,1,0,0,0,5,8Zm16,3H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-2,5H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z'
  }));
};

UilAlignCenterAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAlignCenterAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAlignCenterAlt;