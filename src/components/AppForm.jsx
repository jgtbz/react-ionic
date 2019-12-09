import React from 'react'
import { Formik } from 'formik'

const handleChange = ({ setFieldValue, setFieldTouched }) => ({ target }) => {
  const { name, value } = target
  setFieldValue(name, value)
  setFieldTouched(name)
}

const AppForm = ({ model, schema, handleSubmit, Form }) => (
  <Formik
    initialValues={model}
    validationSchema={schema}
    onSubmit={handleSubmit}>
      {props => <Form {...props} handleChange={handleChange(props)} />}
  </Formik>
)

export default AppForm
