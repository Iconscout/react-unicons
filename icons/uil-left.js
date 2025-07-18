import React from 'react';
import PropTypes from 'prop-types';

const UilLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,9.5H7.41l1.3-1.29A1,1,0,0,0,7.29,6.79l-3,3a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L7.41,11.5H17a1,1,0,0,1,1,1v4a1,1,0,0,0,2,0v-4A3,3,0,0,0,17,9.5Z'
  }));
};

UilLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLeft;