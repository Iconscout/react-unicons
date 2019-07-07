import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltEdit = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M18.5,5.5h-4a1,1,0,0,0,0,2h4a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H8.5a1,1,0,0,1-1-1v-1a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V8.5A3,3,0,0,0,18.5,5.5Zm-9.42,7H11.5a1,1,0,0,0,1-1V9.08a1,1,0,0,0-.29-.71L6.63,2.79a1,1,0,0,0-1.41,0L2.79,5.22a1,1,0,0,0,0,1.41l5.58,5.58A1,1,0,0,0,9.08,12.5ZM5.92,4.91,10.5,9.49v1h-1L4.91,5.92Z'
  }));
};

UilCommentAltEdit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltEdit.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltEdit;