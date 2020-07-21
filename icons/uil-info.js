import React from 'react';
import PropTypes from 'prop-types';

const UilInfo = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,10a1,1,0,0,0-1,1v6a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Zm0-4a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,6Z'
  }));
};

UilInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilInfo.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilInfo;