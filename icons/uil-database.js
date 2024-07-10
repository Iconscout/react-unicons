import React from 'react';
import PropTypes from 'prop-types';

const UilDatabase = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8,16.5a1,1,0,1,0,1,1A1,1,0,0,0,8,16.5ZM12,2C8,2,4,3.37,4,6V18c0,2.63,4,4,8,4s8-1.37,8-4V6C20,3.37,16,2,12,2Zm6,16c0,.71-2.28,2-6,2s-6-1.29-6-2V14.73A13.16,13.16,0,0,0,12,16a13.16,13.16,0,0,0,6-1.27Zm0-6c0,.71-2.28,2-6,2s-6-1.29-6-2V8.73A13.16,13.16,0,0,0,12,10a13.16,13.16,0,0,0,6-1.27ZM12,8C8.28,8,6,6.71,6,6s2.28-2,6-2,6,1.29,6,2S15.72,8,12,8ZM8,10.5a1,1,0,1,0,1,1A1,1,0,0,0,8,10.5Z'
  }));
};

UilDatabase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilDatabase;