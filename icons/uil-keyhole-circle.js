import React from 'react';
import PropTypes from 'prop-types';

const UilKeyholeCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,8a2,2,0,0,0-2,2,2,2,0,0,0,1,1.72V15a1,1,0,0,0,2,0V11.72A2,2,0,0,0,14,10,2,2,0,0,0,12,8Zm0-6A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilKeyholeCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilKeyholeCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilKeyholeCircle;