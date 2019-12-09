import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonAlert
} from '@ionic/react'

import { login } from '../../../services/auth'

import { Formik } from 'formik'

import * as yup from 'yup'

const Component = ({ history }) => {
  const model = {
    email: '',
    password: ''
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Mínimo de 4 caracteres')
      .max(6, 'Máximo de 6 caracteres')
  })

  const handleToken = (response) => console.log(response.data.token)
  const handleRedirect = () => history.push('/dashboard')
  const showAlertError = (error) => setShowError(error.response.data.message)

  const handleLogin = (values) => login(values)
    .then(handleToken)
    .then(handleRedirect)
    .catch(showAlertError)

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    handleLogin(values)
      .finally(() => actions.setSubmitting(''))
  }

  const Form = ({ handleSubmit, values, errors, touched, setFieldValue, setFieldTouched, isSubmitting, dirty }) => (
    <form onSubmit={handleSubmit}>
      <IonItem lines="none">
        <IonLabel position="stacked" color={!!errors.email ? 'danger' : 'black'}>Email</IonLabel>
        <IonInput
          name="email"
          value={values.email}
          onIonInput={event => {
            const { name, value } = event.target
            setFieldValue(name, value)
            setFieldTouched(name)
          }}
        />
        {errors.email && touched.email ? (
          <span>{errors.email}</span>
        ) : (
          ''
        )}
      </IonItem>
      <IonItem lines="none">
        <IonLabel position="stacked" color={!!errors.password ? 'danger' : 'black'}>Password</IonLabel>
        <IonInput
          name="password"
          value={values.password}
          onIonInput={event => {
            const { name, value } = event.target
            setFieldValue(name, value)
            setFieldTouched(name)
          }}
        />
        {errors.password && touched.password ? (
          <span>{errors.password}</span>
        ) : (
          ''
        )}
      </IonItem>
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Submit</IonButton>
      <IonButton routerLink="/register">Register</IonButton>
      <IonButton routerLink="/forgot-password">Forgot Password</IonButton>
    </form>
  )

  const [showError, setShowError] = useState('')

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/presentation" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h3>Login</h3>
        <Formik initialValues={model} validationSchema={schema} onSubmit={handleSubmit}>
          {props => <Form {...props} />}
        </Formik>
        <IonAlert
          isOpen={!!showError}
          onDidDismiss={() => setShowError('')}
          header={'Alert'}
          subHeader={'Subtitle'}
          message={showError}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
