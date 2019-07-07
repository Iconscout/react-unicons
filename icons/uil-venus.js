import React from 'react';
import PropTypes from 'prop-types';

const UilVenus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,9a7,7,0,1,0-8,6.92V18H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2H13V15.92A7,7,0,0,0,19,9Zm-7,5a5,5,0,1,1,5-5A5,5,0,0,1,12,14Z'
  }));
};

UilVenus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVenus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVenus;