import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltDownload = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M6.12,11.92a.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3A1,1,0,1,0,8.79,7.29L7.5,8.59V3a1,1,0,0,0-2,0V8.59L4.21,7.29A1,1,0,1,0,2.79,8.71l3,3A1,1,0,0,0,6.12,11.92ZM18.5,6h-5a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8.5a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V9A3,3,0,0,0,18.5,6Z'
  }));
};

UilCommentAltDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilCommentAltDownload;