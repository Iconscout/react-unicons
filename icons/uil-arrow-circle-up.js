import React from 'react';
import PropTypes from 'prop-types';

const UilArrowCircleUp = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12.71,8.29a1,1,0,0,0-.33-.21,1,1,0,0,0-.76,0,1,1,0,0,0-.33.21l-3,3a1,1,0,0,0,1.42,1.42L11,11.41V15a1,1,0,0,0,2,0V11.41l1.29,1.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilArrowCircleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilArrowCircleUp;