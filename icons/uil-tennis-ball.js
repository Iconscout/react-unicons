import React from 'react';
import PropTypes from 'prop-types';

const UilTennisBall = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,0,0,4.65,18.76l.09.1a10,10,0,0,0,14.52,0l.09-.1A10,10,0,0,0,12,2ZM5.61,16.79a7.93,7.93,0,0,1,0-9.58,6,6,0,0,1,0,9.58ZM12,20a7.91,7.91,0,0,1-5-1.77A8,8,0,0,0,7,5.77a7.95,7.95,0,0,1,10,0,8,8,0,0,0,0,12.46A7.91,7.91,0,0,1,12,20Zm6.39-3.21a6,6,0,0,1,0-9.58,7.93,7.93,0,0,1,0,9.58Z'
  }));
};

UilTennisBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilTennisBall.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilTennisBall;