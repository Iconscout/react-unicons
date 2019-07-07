import React from 'react';
import PropTypes from 'prop-types';

const UilBan = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,0,1-8-8A7.92,7.92,0,0,1,5.69,7.1L16.9,18.31A7.92,7.92,0,0,1,12,20Zm6.31-3.1L7.1,5.69A7.92,7.92,0,0,1,12,4a8,8,0,0,1,8,8A7.92,7.92,0,0,1,18.31,16.9Z'
  }));
};

UilBan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBan.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBan;