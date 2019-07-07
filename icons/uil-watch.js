import React from 'react';
import PropTypes from 'prop-types';

const UilWatch = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,6.78V3a1,1,0,0,0-1-1H8A1,1,0,0,0,7,3V6.78A3,3,0,0,0,6,9v6a3,3,0,0,0,1,2.22V21a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V17.22A3,3,0,0,0,18,15V9A3,3,0,0,0,17,6.78ZM9,4h6V6H9Zm6,16H9V18h6Zm1-5a1,1,0,0,1-1,1H9a1,1,0,0,1-1-1V9A1,1,0,0,1,9,8h6a1,1,0,0,1,1,1Z'
  }));
};

UilWatch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilWatch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilWatch;