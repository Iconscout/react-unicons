import React from 'react';
import PropTypes from 'prop-types';

const UilArrowCircleLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.29,11.29a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l3,3a1,1,0,0,0,1.42-1.42L11.41,13H15a1,1,0,0,0,0-2H11.41l1.3-1.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.42,0ZM2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm18,0a8,8,0,1,1-8-8A8,8,0,0,1,20,12Z'
  }));
};

UilArrowCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowCircleLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowCircleLeft;