import React from 'react';
import PropTypes from 'prop-types';

const UilTornado = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M10,21H8a1,1,0,0,0,0,2h2a1,1,0,0,0,0-2Zm1-4H6a1,1,0,0,0,0,2h5a1,1,0,0,0,0-2ZM18,2a1,1,0,0,0-1-1H3A1,1,0,0,0,3,3H17A1,1,0,0,0,18,2Zm3,3H6A1,1,0,0,0,6,7H21a1,1,0,0,0,0-2ZM19,9H10a1,1,0,0,0,0,2h9a1,1,0,0,0,0-2Zm-5,4H8a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z'
  }));
};

UilTornado.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTornado.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTornado;