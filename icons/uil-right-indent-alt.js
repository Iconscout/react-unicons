import React from 'react';
import PropTypes from 'prop-types';

const UilRightIndentAlt = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M3.64,9.56A1,1,0,1,0,2.36,11.1l1.08.9-1.08.9a1,1,0,0,0-.13,1.41,1,1,0,0,0,1.41.13l2-1.67a1,1,0,0,0,0-1.54ZM9,5A1,1,0,0,0,8,6V18a1,1,0,0,0,2,0V6A1,1,0,0,0,9,5Zm4,2h8a1,1,0,0,0,0-2H13a1,1,0,0,0,0,2Zm8,10H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0-8H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Zm0,4H13a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z'
  }));
};

UilRightIndentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilRightIndentAlt.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilRightIndentAlt;