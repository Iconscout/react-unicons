import React from 'react';
import PropTypes from 'prop-types';

const UilArrowCircleDown = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.29,15.71a1,1,0,0,0,.33.21,1,1,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42L13,12.59V9a1,1,0,0,0-2,0v3.59l-1.29-1.3a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.42ZM12,22A10,10,0,1,0,2,12,10,10,0,0,0,12,22ZM12,4a8,8,0,1,1-8,8A8,8,0,0,1,12,4Z'
  }));
};

UilArrowCircleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowCircleDown.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowCircleDown;