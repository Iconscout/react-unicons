import React from 'react';
import PropTypes from 'prop-types';

const UilCodeBranch = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.91 3.91 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06Zm-10-2a1 1 0 1 1-1 1 1 1 0 0 1 1-1Zm0 16a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10-10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z'
  }));
};

UilCodeBranch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCodeBranch.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCodeBranch;