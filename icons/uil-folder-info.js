import React from 'react';
import PropTypes from 'prop-types';

const UilFolderInfo = ({ color = 'currentColor', size = '24', ...otherProps }) => {
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M12,13.5a1,1,0,0,0-1,1v2a1,1,0,0,0,2,0v-2A1,1,0,0,0,12,13.5Zm7-8H12.72l-.32-1a3,3,0,0,0-2.84-2H5a3,3,0,0,0-3,3v13a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V8.5A3,3,0,0,0,19,5.5Zm1,13a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5.5a1,1,0,0,1,1-1H9.56a1,1,0,0,1,.95.68l.54,1.64A1,1,0,0,0,12,7.5h7a1,1,0,0,1,1,1Zm-7.29-7.71a1,1,0,0,0-1.09-.21.93.93,0,0,0-.33.21,1.05,1.05,0,0,0-.29.71,1,1,0,0,0,.29.7,1,1,0,0,0,1.42,0,1,1,0,0,0,.29-.7,1,1,0,0,0-.08-.38A.93.93,0,0,0,12.71,10.79Z'
  }));
};

UilFolderInfo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default UilFolderInfo;