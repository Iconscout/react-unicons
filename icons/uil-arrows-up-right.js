import React from 'react';
import PropTypes from 'prop-types';

const UilArrowsUpRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20.92,16.62a1,1,0,0,0-.21-.33l-3-3a1,1,0,0,0-1.42,1.42L17.59,16H9a1,1,0,0,1-1-1V6.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42l-3-3a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3A1,1,0,0,0,4.71,7.71L6,6.41V15a3,3,0,0,0,3,3h8.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3a1,1,0,0,0,.21-.33A1,1,0,0,0,20.92,16.62Z'
  }));
};

UilArrowsUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowsUpRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowsUpRight;