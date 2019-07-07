import React from 'react';
import PropTypes from 'prop-types';

const UilVerticalAlignCenter = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,11H18V6a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3v8H3a1,1,0,0,0,0,2H6v8a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V19h3a1,1,0,0,0,1-1V13h3a1,1,0,0,0,0-2Zm-9,9H8V4h4Zm4-3H14V7h2Z'
  }));
};

UilVerticalAlignCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVerticalAlignCenter.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVerticalAlignCenter;