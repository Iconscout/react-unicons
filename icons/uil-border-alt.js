import React from 'react';
import PropTypes from 'prop-types';

const UilBorderAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M11.5,18.5a1,1,0,1,0,1,1A1,1,0,0,0,11.5,18.5Zm9-15a1,1,0,0,0-1-1H3.5a1,1,0,0,0-1,1v16a1,1,0,0,0,2,0V4.5h15A1,1,0,0,0,20.5,3.5Zm-5,15a1,1,0,1,0,1,1A1,1,0,0,0,15.5,18.5Zm-8,0a1,1,0,1,0,1,1A1,1,0,0,0,7.5,18.5Zm12-12a1,1,0,1,0,1,1A1,1,0,0,0,19.5,6.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,10.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,14.5Zm0,4a1,1,0,1,0,1,1A1,1,0,0,0,19.5,18.5Z'
  }));
};

UilBorderAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilBorderAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilBorderAlt;