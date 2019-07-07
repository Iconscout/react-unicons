import React from 'react';
import PropTypes from 'prop-types';

const UilBitcoinAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16.30426,11.24115A3.99779,3.99779,0,0,0,12.9917,5.002v-1a1,1,0,1,0-2,0v1h-2v-1a1,1,0,1,0-2,0v1h-1a1,1,0,0,0,0,2h1v10h-1a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0v-1h2v1a1,1,0,0,0,2,0v-1h2a3.98966,3.98966,0,0,0,1.31256-7.7608ZM8.9917,7.002h4a2,2,0,0,1,0,4h-4Zm6,10h-6v-4h6a2,2,0,1,1,0,4Z'
  }));
};

UilBitcoinAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBitcoinAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBitcoinAlt;