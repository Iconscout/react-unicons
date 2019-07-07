import React from 'react';
import PropTypes from 'prop-types';

const UilSpaceKey = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,9a1,1,0,0,0-1,1v3H4V10a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V10A1,1,0,0,0,21,9Z'
  }));
};

UilSpaceKey.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSpaceKey.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSpaceKey;