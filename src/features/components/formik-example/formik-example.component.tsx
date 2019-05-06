import React from 'react';
import { withFormik, FormikProps, FormikErrors, Form, Field } from 'formik';
import TextField from '@material-ui/core/TextField';

// Shape of form values
interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  message: string;
}

const InnerForm = (props: OtherProps & FormikProps<FormValues>) => {
  const { touched, errors, isSubmitting, message } = props;
  return (
    <Form style={{ color: '#000', padding: 32 }}>
      <h1>{message}</h1>
      <Field type="email" name="email">
        {({ field }: any) => (
          <TextField type="text" {...field} placeholder="First Name" />
        )}
      </Field>
      {touched.email && errors.email && <div>{errors.email}</div>}

      <Field type="password" name="password" />
      {touched.password && errors.password && <div>{errors.password}</div>}

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  );
};

// The type of props MyForm receives
interface MyFormProps {
  initialEmail?: string;
  message: string; // if this passed all the way through you might do this or make a union type
}

const isValidEmail = (email: any) => {
  return email.length > 10;
};

// Wrap our form with the using withFormik HoC
const formOptions = {
  // Transform outer props into form values
  mapPropsToValues: (props: any) => {
    return {
      email: props.initialEmail || '',
      password: ''
    };
  },

  // Add a custom validation function (this can be async too!)
  validate: (values: FormValues) => {
    let errors: FormikErrors<any> = {};
    if (!values.email) {
      errors.email = 'Required';
    } else if (!isValidEmail(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },

  handleSubmit: (values: FormValues, { setSubmitting }: any) => {
    // do submitting things
    setSubmitting(false);
    // console.log(values);
  }
};

const MyForm = withFormik<MyFormProps, FormValues>(formOptions)(InnerForm);

// Use <MyForm /> wherevs
const Basic = () => <MyForm message="Test Formik" />;

export default Basic;
