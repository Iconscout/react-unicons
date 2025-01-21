import React from 'react';
import PropTypes from 'prop-types';

const UilSquint = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15,14H9a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9.08,12.21l1.5-1.5a1,1,0,0,0,0-1.42l-1.5-1.5A1,1,0,0,0,7.66,9.21l.8.79-.8.79a1,1,0,0,0,0,1.42,1,1,0,0,0,.71.29A1,1,0,0,0,9.08,12.21ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM16.58,7.79a1,1,0,0,0-1.42,0l-1.5,1.5a1,1,0,0,0,0,1.42l1.5,1.5a1,1,0,0,0,.71.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.42L15.79,10l.79-.79A1,1,0,0,0,16.58,7.79Z'
  }));
};

UilSquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilSquint;