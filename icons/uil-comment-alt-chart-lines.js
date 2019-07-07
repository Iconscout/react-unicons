import React from 'react';
import PropTypes from 'prop-types';

const UilCommentAltChartLines = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,8a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V9A1,1,0,0,0,12,8ZM8,11a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V12A1,1,0,0,0,8,11ZM19,2H5A3,3,0,0,0,2,5V15a3,3,0,0,0,3,3H16.59l3.7,3.71A1,1,0,0,0,21,22a.84.84,0,0,0,.38-.08A1,1,0,0,0,22,21V5A3,3,0,0,0,19,2Zm1,16.59-2.29-2.3A1,1,0,0,0,17,16H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4H19a1,1,0,0,1,1,1ZM16,6a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V7A1,1,0,0,0,16,6Z'
  }));
};

UilCommentAltChartLines.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilCommentAltChartLines.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilCommentAltChartLines;