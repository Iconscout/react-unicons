import React from 'react';
import PropTypes from 'prop-types';

const UilHorizontalAlignCenter = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,10H19V7a1,1,0,0,0-1-1H13V3a1,1,0,0,0-2,0V6H6A1,1,0,0,0,5,7v3H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h8v3a1,1,0,0,0,2,0V18h8a1,1,0,0,0,1-1V11A1,1,0,0,0,21,10ZM7,8H17v2H7Zm13,8H4V12H20Z'
  }));
};

UilHorizontalAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHorizontalAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHorizontalAlignCenter;