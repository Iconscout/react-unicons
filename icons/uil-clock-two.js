import React from 'react';
import PropTypes from 'prop-types';

const UilClockTwo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM14.1,9.63l-1.1.64V7a1,1,0,0,0-2,0v5s0,0,0,.06a1.42,1.42,0,0,0,0,.2,1.27,1.27,0,0,0,.06.18s0,0,0,.06a1.56,1.56,0,0,0,.16.2h0a.92.92,0,0,0,.28.19l.08,0A1,1,0,0,0,12,13h0a1,1,0,0,0,.34-.07l.09,0,.07,0,2.6-1.5a1,1,0,0,0-1-1.74Z'
  }));
};

UilClockTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilClockTwo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilClockTwo;