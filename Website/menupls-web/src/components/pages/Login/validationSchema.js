import { object, string } from 'yup';

export default object().shape({
  email: string()
    .email('Format email adrese nije valjan')
    .required('Email je obvezan'),
  password: string().required('Lozinka je obvezna'),
});
