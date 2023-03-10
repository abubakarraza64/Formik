import { Form, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import FormControl from './FormControl';
import './index.css';
const ReuseableForm = () => {
  const initialValue = {
    email: '',
    textarea: '',
    selectOption: '',
    selectRadio: '',
    checkBoxGroup: [],
    date: new Date(),
  };
  const options = [
    { key: 'option1', value: 'option1' },
    { key: 'option2', value: 'option2' },
    { key: 'option3', value: 'option3' },
  ];
  const validationSchema = yup.object({
    email: yup.string().required('!Required'),
    textarea: yup.string().required('!Required'),
    selectOption: yup.string().required('!Required'),
    selectRadio: yup.string().required('!Required'),
    checkBoxGroup: yup.array().required('Required'),
  });
  const onSubmit = (values) => {
    console.log('Values', values);
  };
  return (
    <div>
      <h1 className="header">ReuseableForm</h1>
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <FormControl
                control={'input'}
                type="email"
                label="email"
                name="email"
                placeholder="Email"
              />
              <FormControl
                control={'textarea'}
                type="textarea"
                label="Textarea"
                name="textarea"
                placeholder="Textarea"
              />
              <FormControl
                control={'select'}
                // type="select"
                label="Select Option"
                name="selectOption"
                options={options}
                // placeholder=""
              />
              <FormControl
                control={'radio'}
                // type="select"
                label="Radio Option"
                name="selectRadio"
                options={options}
                // placeholder=""
              />
              <FormControl
                control={'checkbox'}
                // type="select"
                label="CheckBox Group"
                name="checkBoxGroup"
                options={options}
                // placeholder=""
              />
              <FormControl
                control={'date'}
                // type="select"
                label="Date Picker"
                name="date"
                // placeholder=""
              />
              <button
                type="submit"
                onClick={onSubmit}
                style={{ alignSelf: 'center' }}
              >
                Submit
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ReuseableForm;
