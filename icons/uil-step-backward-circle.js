import React from 'react';
import PropTypes from 'prop-types';

const UilStepBackwardCircle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M15.5,7.38a2,2,0,0,0-2,0l-4,2.31V8a1,1,0,0,0-2,0v8a1,1,0,0,0,2,0V14.31l4,2.31a2,2,0,0,0,2,0,2,2,0,0,0,1-1.73V9.11A2,2,0,0,0,15.5,7.38Zm-1,7.51L9.5,12h0l5-2.89ZM12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z'
  }));
};

UilStepBackwardCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStepBackwardCircle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStepBackwardCircle;