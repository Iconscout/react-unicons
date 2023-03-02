import React from 'react';
import PropTypes from 'prop-types';

const UilStoreSlash = (props) => {
  const { color, size, ...otherProps } = props
  return React.createElement('svg', {
    xmlns: 'http://www.w3.org/2000/svg',
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: color,
    ...otherProps
  }, React.createElement('path', {
    d: 'M8.7 4h9.623l1.661 4.154A1.995 1.995 0 0 1 16 8a1 1 0 0 0-2 0 1.826 1.826 0 0 1-.134.709 1 1 0 0 0 .543 1.305.947.947 0 0 0 .174.035A3.988 3.988 0 0 0 18 12v1.3a1 1 0 0 0 2 0v-1.856a3.985 3.985 0 0 0 1.996-3.405c0-.01.003-.018.003-.028L22 8a.949.949 0 0 0-.035-.171.952.952 0 0 0-.036-.2l-2-5A1 1 0 0 0 19 2H8.7a1 1 0 1 0 0 2Zm14.007 17.293-2.933-2.933a.943.943 0 0 0-.154-.154l-9.95-9.95a.973.973 0 0 0-.206-.206L5.182 3.768a.963.963 0 0 0-.128-.128L2.707 1.293a1 1 0 0 0-1.414 1.414l1.964 1.964-1.178 2.94-.007.017a.953.953 0 0 0-.035.189A.948.948 0 0 0 2 8l.001.012.003.024A3.986 3.986 0 0 0 4 11.444V21a1 1 0 0 0 1 1h14a.993.993 0 0 0 .93-.656l1.363 1.363a1 1 0 0 0 1.414-1.414ZM4.016 8.153l.778-1.945L7.67 9.084A1.972 1.972 0 0 1 6 10a1.996 1.996 0 0 1-1.984-1.846ZM9 15v5H6v-8a3.964 3.964 0 0 0 3.102-1.484L12.586 14H10a1 1 0 0 0-1 1Zm4 5h-2v-4h2Zm5 0h-3v-3.586l3 3Z'
  }));
};

UilStoreSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UilStoreSlash.defaultProps = {
  color: 'currentColor',
  size: '24',
};

export default UilStoreSlash;