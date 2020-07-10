import { object, string } from 'yup';

export default object().shape({
  label: string().required('Label is required'),
  location: string()
    .required('Location is required')
    .matches(
      '(\\d+).?(\\d+);(\\d+).?(\\d+)',
      'Location must be in the following format: 123.123;1231.12'
    ),
});
