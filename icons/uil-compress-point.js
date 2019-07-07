import React from 'react';
import PropTypes from 'prop-types';

const UilCompressPoint = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,20.29,15.41,14H17a1,1,0,0,0,0-2H13.41l5.66-5.66a1,1,0,1,0-1.41-1.41L12,10.59V7a1,1,0,0,0-2,0V8.59L3.71,2.29A1,1,0,0,0,2.29,3.71L8.59,10H7a1,1,0,0,0,0,2h3.59L4.93,17.66a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0L12,13.41V17a1,1,0,0,0,2,0V15.41l6.29,6.3a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29Z'
  }));
};

UilCompressPoint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCompressPoint.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCompressPoint;