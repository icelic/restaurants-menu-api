import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Input = ({
  id,
  name,
  className,
  error,
  inputRef,
  label,
  ...otherProps
}) => {
  const inputClassNames = useMemo(
    () =>
      classNames(
        'input-container__input',
        {
          'input-container__input--error': error,
        },
        className
      ),
    [className, error]
  );

  return (
    <>
      <div className="input-container">
        {label && (
          <label className="input-container__label" htmlFor={id || name}>
            {label}:
          </label>
        )}
        <input
          id={id || name}
          name={name}
          className={inputClassNames}
          ref={inputRef}
          {...otherProps}
        />
      </div>
      <div className="error-message">{error}</div>
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  id: PropTypes.string,
  className: PropTypes.string,
  error: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  id: null,
  className: '',
  error: '',
  label: '',
};

export default memo(Input);
