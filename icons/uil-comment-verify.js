import React from 'react';
import PropTypes from 'prop-types';

const UilCommentVerify = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.29,8.85l-4.73,4.74L8.71,11.73a1,1,0,0,0-1.42,1.42l2.56,2.56a1,1,0,0,0,1.42,0l5.44-5.44a1,1,0,1,0-1.42-1.42ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z'
  }));
};

UilCommentVerify.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilCommentVerify;