import React from 'react';
import PropTypes from 'prop-types';

const UilObjectGroup = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,10H14V8a1,1,0,0,0-1-1H8A1,1,0,0,0,7,8v5a1,1,0,0,0,1,1h2v2a1,1,0,0,0,1,1h5a1,1,0,0,0,1-1V11A1,1,0,0,0,16,10Zm-6,1v1H9V9h3v1H11A1,1,0,0,0,10,11Zm5,4H12V12h3Zm6,3.28V5.72A2,2,0,1,0,18.28,3H5.72A2,2,0,1,0,3,5.72V18.28A2,2,0,1,0,5.72,21H18.28A2,2,0,1,0,21,18.28Zm-2,0a1.91,1.91,0,0,0-.72.72H5.72A1.91,1.91,0,0,0,5,18.28V5.72A1.91,1.91,0,0,0,5.72,5H18.28a1.91,1.91,0,0,0,.72.72Z'
  }));
};

UilObjectGroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilObjectGroup.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilObjectGroup;