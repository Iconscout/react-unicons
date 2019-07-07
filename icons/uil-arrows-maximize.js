import React from 'react';
import PropTypes from 'prop-types';

const UilArrowsMaximize = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,14a1,1,0,0,0-1,1v3.59L5.41,4H9A1,1,0,0,0,9,2H3a1,1,0,0,0-.38.08,1,1,0,0,0-.54.54A1,1,0,0,0,2,3V9A1,1,0,0,0,4,9V5.41L18.59,20H15a1,1,0,0,0,0,2h6a1,1,0,0,0,.38-.08,1,1,0,0,0,.54-.54A1,1,0,0,0,22,21V15A1,1,0,0,0,21,14Z'
  }));
};

UilArrowsMaximize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilArrowsMaximize.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilArrowsMaximize;