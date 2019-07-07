import React from 'react';
import PropTypes from 'prop-types';

const UilCommentHeart = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,8.35a3.07,3.07,0,0,0-3.54.53,3,3,0,0,0,0,4.24L11.29,16a1,1,0,0,0,1.42,0l2.83-2.83a3,3,0,0,0,0-4.24A3.07,3.07,0,0,0,12,8.35Zm2.12,3.36L12,13.83,9.88,11.71a1,1,0,0,1,0-1.42,1,1,0,0,1,1.41,0,1,1,0,0,0,1.42,0,1,1,0,0,1,1.41,0A1,1,0,0,1,14.12,11.71ZM12,2A10,10,0,0,0,2,12a9.89,9.89,0,0,0,2.26,6.33l-2,2a1,1,0,0,0-.21,1.09A1,1,0,0,0,3,22h9A10,10,0,0,0,12,2Zm0,18H5.41l.93-.93a1,1,0,0,0,0-1.41A8,8,0,1,1,12,20Z'
  }));
};

UilCommentHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentHeart.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentHeart;