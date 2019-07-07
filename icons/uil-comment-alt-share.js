import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltShare = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M19.5,6.5h-5a1,1,0,0,0,0,2h5a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9.5a1,1,0,0,1-1-1v-2a1,1,0,0,0-2,0v2a3,3,0,0,0,3,3h8.36l3,2.73a1,1,0,0,0,.68.27,1.1,1.1,0,0,0,.4-.08,1,1,0,0,0,.6-.92V9.5A3,3,0,0,0,19.5,6.5Zm-10,5A2,2,0,1,0,8.32,7.89l-1.75-.8,1.91-.88a2,2,0,0,0,1,.29,2,2,0,1,0-2-2l-1.9.87A2,2,0,0,0,4.5,5a2,2,0,0,0,0,4,2,2,0,0,0,.93-.24l2.09,1A2,2,0,0,0,9.5,11.5Z'
  }));
};

UilCommentAltShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltShare.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltShare;