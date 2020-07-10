import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Input = ({
  id,
  name,
  type,
  className,
  placeholder,
  disabled,
  error,
  inputRef,
  defaultValue,
  label,
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
          type={type}
          className={inputClassNames}
          placeholder={placeholder}
          disabled={disabled}
          defaultValue={defaultValue}
          ref={inputRef}
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
  type: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
  label: PropTypes.string,
};

Input.defaultProps = {
  id: null,
  type: 'text',
  className: '',
  placeholder: '',
  required: false,
  disabled: false,
  error: '',
  defaultValue: '',
  label: '',
};

export default memo(Input);
