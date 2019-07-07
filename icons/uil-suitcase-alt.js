import React from 'react';
import PropTypes from 'prop-types';

const UilSuitcaseAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V13H8v1a1,1,0,0,0,2,0V13h4v1a1,1,0,0,0,2,0V13h4Zm0-7H4V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z'
  }));
};

UilSuitcaseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSuitcaseAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSuitcaseAlt;