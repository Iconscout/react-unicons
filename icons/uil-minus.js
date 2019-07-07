import React from 'react';
import PropTypes from 'prop-types';

const UilMinus = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,11H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Z'
  }));
};

UilMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMinus.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMinus;