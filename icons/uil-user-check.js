import React from 'react';
import PropTypes from 'prop-types';

const UilUserCheck = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M13.3,12.22A4.92,4.92,0,0,0,15,8.5a5,5,0,0,0-10,0,4.92,4.92,0,0,0,1.7,3.72A8,8,0,0,0,2,19.5a1,1,0,0,0,2,0,6,6,0,0,1,12,0,1,1,0,0,0,2,0A8,8,0,0,0,13.3,12.22ZM10,11.5a3,3,0,1,1,3-3A3,3,0,0,1,10,11.5ZM21.71,9.13a1,1,0,0,0-1.42,0l-2,2-.62-.63a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l1.34,1.34a1,1,0,0,0,1.41,0l2.67-2.67A1,1,0,0,0,21.71,9.13Z'
  }));
};

UilUserCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilUserCheck.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilUserCheck;