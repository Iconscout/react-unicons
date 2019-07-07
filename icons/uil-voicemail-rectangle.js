import React from 'react';
import PropTypes from 'prop-types';

const UilVoicemailRectangle = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M20,4H4A3,3,0,0,0,1,7V17a3,3,0,0,0,3,3H20a3,3,0,0,0,3-3V7A3,3,0,0,0,20,4Zm1,13a1,1,0,0,1-1,1H4a1,1,0,0,1-1-1V7A1,1,0,0,1,4,6H20a1,1,0,0,1,1,1ZM16,9a3,3,0,0,0-2.82,4H10.82A3,3,0,1,0,8,15h8a3,3,0,0,0,0-6ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z'
  }));
};

UilVoicemailRectangle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilVoicemailRectangle.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilVoicemailRectangle;