import React from 'react';
import PropTypes from 'prop-types';

const UilCommentBlock = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19,14a1,1,0,0,0-1.22.72A7,7,0,0,1,11,20H5.41l.64-.63a1,1,0,0,0,0-1.41A7,7,0,0,1,9.25,6.22a1,1,0,0,0-.5-1.94A9,9,0,0,0,4,18.62L2.29,20.29a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h8a9,9,0,0,0,8.72-6.75A1,1,0,0,0,19,14ZM20.54,3.46A5,5,0,1,0,22,7,5,5,0,0,0,20.54,3.46ZM14,7a3,3,0,0,1,3-3,3,3,0,0,1,1.29.3l-4,4A3,3,0,0,1,14,7Zm5.12,2.12a3.08,3.08,0,0,1-3.4.57l4-4A3,3,0,0,1,20,7,3,3,0,0,1,19.12,9.12Z'
  }));
};

UilCommentBlock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentBlock.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentBlock;