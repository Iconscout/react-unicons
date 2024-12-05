import React from 'react';
import PropTypes from 'prop-types';

const UilObjectUngroup = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M21,18.28V11.72A2,2,0,1,0,18.28,9H15V5.72A2,2,0,1,0,12.28,3H5.72A2,2,0,1,0,3,5.72v6.56A2,2,0,1,0,5.72,15H9v3.28A2,2,0,1,0,11.72,21h6.56A2,2,0,1,0,21,18.28ZM8,10a2,2,0,0,0,1,1.72V13H5.72A1.91,1.91,0,0,0,5,12.28V5.72A1.91,1.91,0,0,0,5.72,5h6.56a1.91,1.91,0,0,0,.72.72V9H11.72A2,2,0,0,0,8,10Zm5,1v1.28a1.91,1.91,0,0,0-.72.72H11V11.72a1.91,1.91,0,0,0,.72-.72Zm6,7.28a1.91,1.91,0,0,0-.72.72H11.72a1.91,1.91,0,0,0-.72-.72V15h1.28A2,2,0,1,0,15,12.28V11h3.28a1.91,1.91,0,0,0,.72.72Z'
  }));
};

UilObjectUngroup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilObjectUngroup;