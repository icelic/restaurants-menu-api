import React from 'react';

import { Input, Form } from '../../common';
import validationSchema from './validationSchema';

import './index.scss';

const AdminRestaurantForm = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div className="restaurant-form-container">
      <Form
        onSubmit={onSubmit}
        submitBtnLabel="Save"
        validationSchema={validationSchema}
      >
        <Input name="label" label="Name" />
        <Input name="location" label="Location (lat;lng)" />
        <Input name="imageKey" type="file" label="Image" />
      </Form>
    </div>
  );
};

export default AdminRestaurantForm;
