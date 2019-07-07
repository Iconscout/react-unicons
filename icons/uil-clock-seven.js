import React from 'react';
import PropTypes from 'prop-types';

const UilClockSeven = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20ZM11,6a1,1,0,0,0-1,1v4.93L8.63,14.3a1,1,0,0,0,1.74,1l1.5-2.6a1,1,0,0,0,.11-.59S12,12,12,12V7A1,1,0,0,0,11,6Z'
  }));
};

UilClockSeven.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockSeven.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockSeven;