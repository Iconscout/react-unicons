import React from 'react';
import PropTypes from 'prop-types';

const UilFolderHeart = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,9.84a2.92,2.92,0,0,0-3.43,4.65l2.72,2.72a1,1,0,0,0,1.42,0l2.72-2.72A2.92,2.92,0,0,0,12,9.84Zm2,3.23-2,2-2-2a.92.92,0,0,1,0-1.3.92.92,0,0,1,1.3,0,1,1,0,0,0,1.42,0,.92.92,0,0,1,1.3,1.3ZM19,5.5H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Z'
  }));
};

UilFolderHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilFolderHeart;