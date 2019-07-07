import React from 'react';
import PropTypes from 'prop-types';

const UilAnalysis = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21.71,7.29a1,1,0,0,0-1.42,0L14,13.59,9.71,9.29a1,1,0,0,0-1.42,0l-6,6a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L9,11.41l4.29,4.3a1,1,0,0,0,1.42,0l7-7A1,1,0,0,0,21.71,7.29Z'
  }));
};

UilAnalysis.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilAnalysis.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilAnalysis;