import React from 'react';
import PropTypes from 'prop-types';

const UilMissedCall = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M6,7.49a1,1,0,0,0,1-1V5.9L9.88,8.78a3,3,0,0,0,4.24,0l4.59-4.59a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L12.71,7.36a1,1,0,0,1-1.42,0L8.41,4.49H9a1,1,0,0,0,0-2H6a1,1,0,0,0-.92.61A1.09,1.09,0,0,0,5,3.49v3A1,1,0,0,0,6,7.49Zm15.94,7.36a16.27,16.27,0,0,0-19.88,0,2.69,2.69,0,0,0-1,2,2.66,2.66,0,0,0,.78,2.07L3.6,20.72A2.68,2.68,0,0,0,7.06,21l.47-.32a8.13,8.13,0,0,1,1-.55,1.85,1.85,0,0,0,1-2.3l-.09-.24a10.49,10.49,0,0,1,5.22,0l-.09.24a1.85,1.85,0,0,0,1,2.3,8.13,8.13,0,0,1,1,.55l.47.32a2.58,2.58,0,0,0,1.54.5,2.72,2.72,0,0,0,1.92-.79l1.81-1.82A2.66,2.66,0,0,0,23,16.83,2.69,2.69,0,0,0,21.94,14.85ZM20.8,17.49,19,19.3a.68.68,0,0,1-.86.1c-.19-.14-.38-.27-.59-.4a11.65,11.65,0,0,0-1.09-.61l.4-1.09a1,1,0,0,0-.6-1.28,12.42,12.42,0,0,0-8.5,0,1,1,0,0,0-.6,1.28l.4,1.1a9.8,9.8,0,0,0-1.1.6l-.58.4A.66.66,0,0,1,5,19.3L3.2,17.49A.67.67,0,0,1,3,17a.76.76,0,0,1,.28-.53,14.29,14.29,0,0,1,17.44,0A.76.76,0,0,1,21,17,.67.67,0,0,1,20.8,17.49Z'
  }));
};

UilMissedCall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilMissedCall.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilMissedCall;