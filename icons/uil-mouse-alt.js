import React from 'react';
import PropTypes from 'prop-types';

const UilMouseAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,6a1,1,0,0,0-1,1V9a1,1,0,0,0,2,0V7A1,1,0,0,0,12,6Zm0-4A7,7,0,0,0,5,9v6a7,7,0,0,0,14,0V9A7,7,0,0,0,12,2Zm5,13A5,5,0,0,1,7,15V9A5,5,0,0,1,17,9Z'
  }));
};

UilMouseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMouseAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMouseAlt;