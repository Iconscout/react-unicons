import React from 'react';
import PropTypes from 'prop-types';

const UilLeftArrowToLeft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,11H9.41l2.3-2.29a1,1,0,1,0-1.42-1.42l-4,4a1,1,0,0,0-.21.33,1,1,0,0,0,0,.76,1,1,0,0,0,.21.33l4,4a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L9.41,13H21a1,1,0,0,0,0-2ZM3,3A1,1,0,0,0,2,4V20a1,1,0,0,0,2,0V4A1,1,0,0,0,3,3Z'
  }));
};

UilLeftArrowToLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilLeftArrowToLeft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilLeftArrowToLeft;