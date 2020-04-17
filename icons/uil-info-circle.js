import React from 'react';
import PropTypes from 'prop-types';

const UilInfoCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,16a1,1,0,0,0,1-1V12a1,1,0,0,0-2,0v3A1,1,0,0,0,12,16Zm0-6a1,1,0,1,0-1-1A1,1,0,0,0,12,10Zm0,12A10,10,0,1,0,2,12,10.01114,10.01114,0,0,0,12,22ZM12,4a8,8,0,1,1-8,8A8.00917,8.00917,0,0,1,12,4Z'
  }));
};

UilInfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilInfoCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilInfoCircle;