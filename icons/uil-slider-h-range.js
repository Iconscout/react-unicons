import React from 'react';
import PropTypes from 'prop-types';

const UilSliderHRange = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,11H19.81573a2.98208,2.98208,0,0,0-5.63146,0H9.81573a2.98208,2.98208,0,0,0-5.63146,0H3a1,1,0,0,0,0,2H4.18433a2.982,2.982,0,0,0,5.6314,0h4.3686a2.982,2.982,0,0,0,5.6314,0H21a1,1,0,0,0,0-2ZM7,13a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,7,13Zm10,0a1,1,0,1,1,1-1A1.0013,1.0013,0,0,1,17,13Z'
  }));
};

UilSliderHRange.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilSliderHRange.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilSliderHRange;