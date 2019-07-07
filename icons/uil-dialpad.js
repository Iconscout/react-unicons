import React from 'react';
import PropTypes from 'prop-types';

const UilDialpad = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M7,2.25H3A.76.76,0,0,0,2.25,3V7A.76.76,0,0,0,3,7.75H7A.76.76,0,0,0,7.75,7V3A.76.76,0,0,0,7,2.25Zm-.75,4H3.75V3.75h2.5ZM21,2.25H17a.76.76,0,0,0-.75.75V7a.76.76,0,0,0,.75.75h4A.76.76,0,0,0,21.75,7V3A.76.76,0,0,0,21,2.25Zm-.75,4h-2.5V3.75h2.5ZM14,2.25H10A.76.76,0,0,0,9.25,3V7a.76.76,0,0,0,.75.75h4A.76.76,0,0,0,14.75,7V3A.76.76,0,0,0,14,2.25Zm-.75,4h-2.5V3.75h2.5ZM7,9.25H3a.76.76,0,0,0-.75.75v4a.76.76,0,0,0,.75.75H7A.76.76,0,0,0,7.75,14V10A.76.76,0,0,0,7,9.25Zm-.75,4H3.75v-2.5h2.5Zm7.75-4H10a.76.76,0,0,0-.75.75v4a.76.76,0,0,0,.75.75h4a.76.76,0,0,0,.75-.75V10A.76.76,0,0,0,14,9.25Zm-.75,4h-2.5v-2.5h2.5Zm7.75-4H17a.76.76,0,0,0-.75.75v4a.76.76,0,0,0,.75.75h4a.76.76,0,0,0,.75-.75V10A.76.76,0,0,0,21,9.25Zm-.75,4h-2.5v-2.5h2.5Zm-6.25,3H10a.76.76,0,0,0-.75.75v4a.76.76,0,0,0,.75.75h4a.76.76,0,0,0,.75-.75V17A.76.76,0,0,0,14,16.25Zm-.75,4h-2.5v-2.5h2.5Z'
  }));
};

UilDialpad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilDialpad.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilDialpad;