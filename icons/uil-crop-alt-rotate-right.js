import React from 'react';
import PropTypes from 'prop-types';

const UilCropAltRotateRight = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M16,4h-.59l.3-.29a1,1,0,1,0-1.42-1.42l-2,2a1,1,0,0,0,0,1.42l2,2a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42L15.41,6H16a3,3,0,0,1,3,3v2a1,1,0,0,0,2,0V9A5,5,0,0,0,16,4Zm0,14H15V11a1,1,0,0,0-1-1H7V9A1,1,0,0,0,5,9v1H4a1,1,0,0,0,0,2H5v7a1,1,0,0,0,1,1h7v1a1,1,0,0,0,2,0V20h1a1,1,0,0,0,0-2Zm-3,0H7V12h6Z'
  }));
};

UilCropAltRotateRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCropAltRotateRight.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCropAltRotateRight;