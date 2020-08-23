import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';

const Select = ({ inputRef, options, name, label, error, ...rest }) => {
  const selectClassNames = useMemo(
    () =>
      classNames('input-container__input', {
        'input-container__input--error': error,
      }),
    [error]
  );

  return (
    <>
      <div className="select-container">
        {label && (
          <label className="select-container__label" htmlFor={name}>
            {label}:
          </label>
        )}
        <select
          className={selectClassNames}
          name={name}
          ref={inputRef}
          {...rest}
        >
          <option disabled selected value>
            --
          </option>
          {options.map((value) => (
            <option key={value.id} value={value.id}>
              {value.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  inputRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.any }),
  ]).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  label: PropTypes.string,
  error: PropTypes.string,
};

Select.defaultProps = {
  label: '',
  error: '',
};

export default memo(Select);
