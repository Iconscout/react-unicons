import React from 'react';
import PropTypes from 'prop-types';

const UilClockTen = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11,2A10,10,0,1,0,21,12,10,10,0,0,0,11,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,11,20ZM11,6a1,1,0,0,0-1,1v3.27L8.9,9.63a1,1,0,0,0-1,1.74l2.6,1.5.07,0,.09,0A1,1,0,0,0,11,13h0a1,1,0,0,0,.34-.07l.08,0a.92.92,0,0,0,.28-.19l0,0a1.57,1.57,0,0,0,.15-.19s0,0,0-.06a1.27,1.27,0,0,0,.06-.18,1.42,1.42,0,0,0,0-.2s0,0,0-.06V7A1,1,0,0,0,11,6Z'
  }));
};

UilClockTen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockTen.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockTen;