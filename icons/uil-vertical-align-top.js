import React from 'react';
import PropTypes from 'prop-types';

const UilVerticalAlignTop = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,2H3A1,1,0,0,0,3,4H6V21a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V16h3a1,1,0,0,0,1-1V4h3a1,1,0,0,0,0-2ZM12,20H8V4h4Zm4-6H14V4h2Z'
  }));
};

UilVerticalAlignTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVerticalAlignTop.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVerticalAlignTop;