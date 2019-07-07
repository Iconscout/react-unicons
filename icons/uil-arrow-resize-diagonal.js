import React from 'react';
import PropTypes from 'prop-types';

const UilArrowResizeDiagonal = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.92,2.62a1,1,0,0,0-.54-.54A1,1,0,0,0,21,2H15a1,1,0,0,0,0,2h3.59L4,18.59V15a1,1,0,0,0-2,0v6a1,1,0,0,0,.08.38,1,1,0,0,0,.54.54A1,1,0,0,0,3,22H9a1,1,0,0,0,0-2H5.41L20,5.41V9a1,1,0,0,0,2,0V3A1,1,0,0,0,21.92,2.62Z'
  }));
};

UilArrowResizeDiagonal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowResizeDiagonal.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowResizeDiagonal;