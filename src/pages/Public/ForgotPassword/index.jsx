import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonItem,
  IonInput,
  IonButton,
  IonAlert
} from '@ionic/react'
import { AppForm, AppFormInputError, AppLabel } from '../../../components'
import {
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
} from '../../../services/users'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [showAlert, setShowAlert] = useState('')

  const model = {
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório'),
    code: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Mínimo de 4 caracteres')
      .max(4, 'Máximo de 4 caracteres'),
    password: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Mínimo de 4 caracteres')
      .max(6, 'Máximo de 6 caracteres'),
    confirmPassword: yup
      .string()
      .required('Campo obrigatório')
      .min(4, 'Mínimo de 4 caracteres')
      .max(6, 'Máximo de 6 caracteres')
      .oneOf([yup.ref('password'), null], 'Senhas não conferem')
  })

  const handleSuccess = () => setShowAlert('Código enviado com sucesso')
  const handleError = (error) => setShowAlert(error.response.data.message)
  const handleRedirect = () => history.push('/login')
  
  const handleForgotPasswordSendPin = (values, actions) => {
    actions.setSubmitting(true)
    forgotPasswordSendPin(values)
      .then(handleSuccess)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const handleForgotPasswordValidatePin = (values, actions) => {
    actions.setSubmitting(true)
    forgotPasswordSendPin(values)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const handleForgotPassword = (values, actions) => {
    actions.setSubmitting(true)
    forgotPasswordSendPin(values)
      .then(handleRedirect)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <IonItem lines="none">
        <AppLabel title="Name" error={errors.name} />
        <IonInput
          name="name"
          value={values.name}
          onIonInput={handleChange}
        />
        <AppFormInputError
          error={errors.name}
          touched={touched.name}
        />
      </IonItem>
      <IonItem lines="none">
        <AppLabel title="Email" error={errors.email} />
        <IonInput
          name="email"
          value={values.email}
          onIonInput={handleChange}
        />
        <AppFormInputError
          error={errors.email}
          touched={touched.email}
        />
      </IonItem>
      <IonItem lines="none">
        <AppLabel title="Password" error={errors.password} />
        <IonInput
          name="password"
          value={values.password}
          onIonInput={handleChange}
        />
        <AppFormInputError
          error={errors.password}
          touched={touched.password}
        />
      </IonItem>
      <IonItem lines="none">
        <AppLabel title="Confirm Password" error={errors.confirmPassword} />
        <IonInput
          name="confirmPassword"
          value={values.confirmPassword}
          onIonInput={handleChange}
        />
        <AppFormInputError
          error={errors.confirmPassword}
          touched={touched.confirmPassword}
        />
      </IonItem>
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Submit</IonButton>
      <IonButton routerLink="/login">Login</IonButton>
    </form>
  )

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
        <h3>Forgot Password</h3>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <IonAlert
          isOpen={!!showAlert}
          onDidDismiss={setShowAlert}
          onDidPresent={handleRedirect}
          message={'Success'}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
