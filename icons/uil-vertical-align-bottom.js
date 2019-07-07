import React from 'react';
import PropTypes from 'prop-types';

const UilVerticalAlignBottom = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,20H18V9a1,1,0,0,0-1-1H14V3a1,1,0,0,0-1-1H7A1,1,0,0,0,6,3V20H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm-9,0H8V4h4Zm4,0H14V10h2Z'
  }));
};

UilVerticalAlignBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVerticalAlignBottom.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVerticalAlignBottom;