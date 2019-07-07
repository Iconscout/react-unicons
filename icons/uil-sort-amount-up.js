import React from 'react';
import PropTypes from 'prop-types';

const UilSortAmountUp = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5.71,6.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-2,2A1,1,0,0,0,3.71,9.71L4,9.41V17a1,1,0,0,0,2,0V9.41l.29.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM11,8H21a1,1,0,0,0,0-2H11a1,1,0,0,0,0,2Zm10,8H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Zm0-5H11a1,1,0,0,0,0,2H21a1,1,0,0,0,0-2Z'
  }));
};

UilSortAmountUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSortAmountUp.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSortAmountUp;