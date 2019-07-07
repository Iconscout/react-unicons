import React from 'react';
import PropTypes from 'prop-types';

const UilSmileWinkAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M9,11a1,1,0,1,0-1-1A1,1,0,0,0,9,11Zm5.36,3.23a3.76,3.76,0,0,1-4.72,0,1,1,0,0,0-1.28,1.54,5.68,5.68,0,0,0,7.28,0,1,1,0,1,0-1.28-1.54ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM17.62,9.13a3.08,3.08,0,0,0-4.24,0,1,1,0,0,0,1.41,1.41,1,1,0,0,1,1.42,0,1,1,0,0,0,1.41,0A1,1,0,0,0,17.62,9.13Z'
  }));
};

UilSmileWinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSmileWinkAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSmileWinkAlt;