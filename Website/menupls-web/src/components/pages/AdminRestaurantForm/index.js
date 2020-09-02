import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Input, Form, FileInput, Loading, Select } from '../../common';

import validationSchema from './validationSchema';

import './index.scss';

const AdminRestaurantForm = () => {
  const formRef = useRef();

  const [selectedCountyId, setSelectedCountyId] = useState(null);
  const [selectedCityId, setSelectedCityId] = useState(null);
  const [counties, setCounties] = useState([]);
  const [cities, setCities] = useState([]);
  const [restaurantImage, setRestaurantImage] = useState();
  const [menuImages, setMenuImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleOnDropRestaurantImage = useCallback((files) => {
    setRestaurantImage(files[0]);
  }, []);

  const handleOnDropMenuImages = useCallback(setMenuImages, [setMenuImages]);

  const onSubmit = (data) => {
    setLoading(true);

    const formData = new FormData();
    formData.append('label', data.label);
    formData.append('cityId', selectedCityId);
    formData.append('location', data.location);
    formData.append('locationAddress', data.locationAddress);
    formData.append('restaurantImage', restaurantImage);
    formData.append('menuImages', menuImages);

    axios
      .all([
        axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/admin/restaurants`,
          formData,
          {
            headers: {
              'content-type': 'multipart/form-data',
            },
          }
        ),
        axios.post(
          `${process.env.REACT_APP_API_BASE_URL}/api/restaurants`,
          formData,
          {
            headers: {
              'content-type': 'multipart/form-data',
            },
          }
        )
      ])
      .then(() => {
        formRef.current.reset();

        setCities([]);
        // eslint-disable-next-line no-alert
        window.alert('Successfully created!');
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/counties`)
      .then((res) => {
        setCounties(res.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!selectedCountyId) {
      return;
    }

    setLoading(true);

    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/api/counties/${selectedCountyId}/cities`
      )
      .then((res) => {
        setCities(res.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-alert
        window.alert(error);
      })
      .finally(() => setLoading(false));
  }, [selectedCountyId]);

  const onSelect = (event, setMethod) => {
    setMethod(event.target.value);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="restaurant-form-container">
        <Form
          formRef={formRef}
          onSubmit={onSubmit}
          submitBtnLabel="Save"
          validationSchema={validationSchema}
        >
          <Input name="label" label="Name" />
          <Select
            name="countyId"
            label="Županija"
            options={counties}
            onChange={(event) => onSelect(event, setSelectedCountyId)}
          />
          <Select
            name="cityId"
            label="Grad"
            options={cities}
            onChange={(event) => onSelect(event, setSelectedCityId)}
          />
          <Input name="locationAddress" label="Location" />
          <Input name="location" label="Location (lat,lng)" />
          <FileInput
            placeholder="Drag and drop or click here to add restaurant image"
            onDrop={handleOnDropRestaurantImage}
          />
          <FileInput
            multiple
            placeholder="Drag and drop or click here to add restaurant menu images"
            onDrop={handleOnDropMenuImages}
          />
        </Form>
      </div>
    </>
  );
};

export default AdminRestaurantForm;
