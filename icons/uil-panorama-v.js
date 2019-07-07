import React from 'react';
import PropTypes from 'prop-types';

const UilPanoramaV = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17.27,12a21.11,21.11,0,0,1,1.64-8.58,1,1,0,0,0-.07-1A1,1,0,0,0,18,2H6a1,1,0,0,0-.84.46,1,1,0,0,0-.07,1A21.11,21.11,0,0,1,6.73,12a21.11,21.11,0,0,1-1.64,8.58,1,1,0,0,0,.07,1A1,1,0,0,0,6,22H18a1,1,0,0,0,.84-.46,1,1,0,0,0,.07-1A21.11,21.11,0,0,1,17.27,12Zm-.75,8h-9a24.77,24.77,0,0,0,1.25-8A24.77,24.77,0,0,0,7.48,4h9a24.77,24.77,0,0,0-1.25,8A24.77,24.77,0,0,0,16.52,20Z'
  }));
};

UilPanoramaV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPanoramaV.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPanoramaV;