import React from 'react';
import PropTypes from 'prop-types';

const UilShoppingCart = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,16H7a1,1,0,0,1,0-2H17.44a3,3,0,0,0,2.91-2.27L22,5.24a1,1,0,0,0-.18-.86A1,1,0,0,0,21,4H6.76A3,3,0,0,0,3.94,2H3A1,1,0,0,0,3,4h.94a1,1,0,0,1,1,.76L5,5.24H5L6.73,12A3,3,0,0,0,7,18h.18a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.64,0H21a1,1,0,0,0,0-2ZM19.72,6l-1.31,5.24a1,1,0,0,1-1,.76H8.78L7.28,6ZM10,20a1,1,0,1,1,1-1A1,1,0,0,1,10,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,18,20Z'
  }));
};

UilShoppingCart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilShoppingCart.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilShoppingCart;