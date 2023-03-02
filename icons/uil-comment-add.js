import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAdd = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M5 8a1 1 0 0 0 2 0V7h1a1 1 0 0 0 0-2H7V4a1 1 0 0 0-2 0v1H4a1 1 0 0 0 0 2h1Zm13-3h-6a1 1 0 0 0 0 2h6a1 1 0 0 1 1 1v9.72l-1.57-1.45a1 1 0 0 0-.68-.27H8a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h8.36l3 2.73A1 1 0 0 0 20 21a1.1 1.1 0 0 0 .4-.08A1 1 0 0 0 21 20V8a3 3 0 0 0-3-3Z'
  }));
};

UilCommentAdd.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAdd.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAdd;