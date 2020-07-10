import React, { memo, Children, cloneElement } from 'react';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './index.scss';

const Form = ({
  children,
  defaultValues,
  onSubmit,
  submitBtnLabel,
  formClassName,
  validationSchema,
}) => {
  const { register, handleSubmit, errors } = useForm({
    defaultValues,
    validationSchema,
  });

  const renderChild = (child) =>
    cloneElement(child, {
      inputRef: register,
      error: _get(errors, `${child.props.name}.message`),
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={formClassName}>
      {Children.map(children, renderChild)}
      <div className="form__button-container">
        <button
          className="form__button-container__button"
          disabled={!_isEmpty(errors)}
        >
          {submitBtnLabel}
        </button>
      </div>
    </form>
  );
};

Form.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  submitBtnLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  defaultValues: PropTypes.objectOf(PropTypes.any),
  formClassName: PropTypes.string,
  validationSchema: PropTypes.objectOf(PropTypes.any),
};

Form.defaultProps = {
  defaultValues: {},
  formClassName: '',
  validationSchema: {},
};

export default memo(Form);
