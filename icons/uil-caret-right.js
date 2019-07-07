import React from 'react';
import PropTypes from 'prop-types';

const UilCaretRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.5,11.13,5.5,3.05a1,1,0,0,0-1,0,1,1,0,0,0-.5.87V20.08a1,1,0,0,0,.5.87,1,1,0,0,0,1,0l14-8.08a1,1,0,0,0,0-1.74ZM6,18.35V5.65L17,12Z'
  }));
};

UilCaretRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCaretRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCaretRight;