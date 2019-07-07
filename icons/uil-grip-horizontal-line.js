import React from 'react';
import PropTypes from 'prop-types';

const UilGripHorizontalLine = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3,11H21a1,1,0,0,0,0-2H3a1,1,0,0,0,0,2Zm18,2H3a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilGripHorizontalLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilGripHorizontalLine.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilGripHorizontalLine;