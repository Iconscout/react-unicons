import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltQuestion = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M6.29,10.3a1,1,0,0,0,1.09,1.63,1.19,1.19,0,0,0,.33-.22,1,1,0,0,0,.21-.32A.85.85,0,0,0,8,11a1,1,0,0,0-.29-.7A1,1,0,0,0,6.29,10.3ZM7,5A1,1,0,0,1,7,7,1,1,0,0,0,7,9,3,3,0,1,0,4.4,4.5a1,1,0,0,0,.37,1.37A1,1,0,0,0,6.13,5.5,1,1,0,0,1,7,5ZM19,6H13a1,1,0,0,0,0,2h6a1,1,0,0,1,1,1v9.72l-1.57-1.45a1,1,0,0,0-.68-.27H9a1,1,0,0,1-1-1V15a1,1,0,0,0-2,0v1a3,3,0,0,0,3,3h8.36l3,2.73A1,1,0,0,0,21,22a1.1,1.1,0,0,0,.4-.08A1,1,0,0,0,22,21V9A3,3,0,0,0,19,6Z'
  }));
};

UilCommentAltQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltQuestion.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltQuestion;