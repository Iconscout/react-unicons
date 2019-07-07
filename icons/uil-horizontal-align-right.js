import React from 'react';
import PropTypes from 'prop-types';

const UilHorizontalAlignRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2a1,1,0,0,0-1,1V6H9A1,1,0,0,0,8,7v3H3a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1H20v3a1,1,0,0,0,2,0V3A1,1,0,0,0,21,2ZM20,16H4V12H20Zm0-6H10V8H20Z'
  }));
};

UilHorizontalAlignRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilHorizontalAlignRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilHorizontalAlignRight;