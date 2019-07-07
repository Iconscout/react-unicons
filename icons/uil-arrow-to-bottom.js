import React from 'react';
import PropTypes from 'prop-types';

const UilArrowToBottom = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,20H5a1,1,0,0,0,0,2H19a1,1,0,0,0,0-2Zm-7.71-2.29a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l4-4a1,1,0,0,0-1.42-1.42L13,14.59V3a1,1,0,0,0-2,0V14.59l-2.29-2.3a1,1,0,1,0-1.42,1.42Z'
  }));
};

UilArrowToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowToBottom.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowToBottom;