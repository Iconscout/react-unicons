import React from 'react';
import PropTypes from 'prop-types';

const UilMicrosoft = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M2 22h9.5v-9.5H2V22zm0-10.5h9.5V2H2v9.5zM12.5 2v9.5H22V2h-9.5zm0 20H22v-9.5h-9.5V22z'
  }));
};

UilMicrosoft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMicrosoft.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMicrosoft;