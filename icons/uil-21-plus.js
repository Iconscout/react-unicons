import React from 'react';
import PropTypes from 'prop-types';

const Uil21Plus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,18a1,1,0,0,0,1-1V7a1,1,0,0,0-2,0V17A1,1,0,0,0,17,18ZM18,5h1V6a1,1,0,0,0,2,0V5h1a1,1,0,0,0,0-2H21V2a1,1,0,0,0-2,0V3H18a1,1,0,0,0,0,2Zm3.6,4a1,1,0,0,0-.78,1.18,9,9,0,1,1-7-7,1,1,0,1,0,.4-2A10.8,10.8,0,0,0,12,1,11,11,0,1,0,23,12a10.8,10.8,0,0,0-.22-2.2A1,1,0,0,0,21.6,9ZM10,13h1a3,3,0,0,0,3-3V9a3,3,0,0,0-3-3H10A3,3,0,0,0,7,9,1,1,0,0,0,9,9a1,1,0,0,1,1-1h1a1,1,0,0,1,1,1v1a1,1,0,0,1-1,1H10a3,3,0,0,0-3,3v3a1,1,0,0,0,1,1h5a1,1,0,0,0,0-2H9V14A1,1,0,0,1,10,13Z'
  }));
};

Uil21Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Uil21Plus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default Uil21Plus;