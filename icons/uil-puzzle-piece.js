import React from 'react';
import PropTypes from 'prop-types';

const UilPuzzlePiece = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M17,22H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H6a4,4,0,0,1,7.3-2.18A3.86,3.86,0,0,1,14,6h3a1,1,0,0,1,1,1v3a4,4,0,0,1,2.18,7.3A3.86,3.86,0,0,1,18,18h0v3A1,1,0,0,1,17,22ZM5,8A1,1,0,0,0,4,9V19a1,1,0,0,0,1,1H16V16.82a1,1,0,0,1,.42-.82,1,1,0,0,1,.91-.13,1.77,1.77,0,0,0,1.74-.23A2,2,0,0,0,20,14.27a2,2,0,0,0-.48-1.59,1.89,1.89,0,0,0-2.17-.55,1,1,0,0,1-.91-.13,1,1,0,0,1-.42-.82V8H12.82a1,1,0,0,1-1-1.33,1.77,1.77,0,0,0-.23-1.74,1.94,1.94,0,0,0-3-.43A2,2,0,0,0,8,6a1.89,1.89,0,0,0,.13.67A1,1,0,0,1,7.18,8Z'
  }));
};

UilPuzzlePiece.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilPuzzlePiece.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilPuzzlePiece;