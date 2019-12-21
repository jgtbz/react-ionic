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
import { login } from '../../../services/auth'
import { profile } from '../../../services/users'
import { useAuthentication } from '../../../store'
import { errorsMessages } from '../../../support/validators'
import * as yup from 'yup'

const Component = ({ history }) => {
  const { setToken, setUser } = useAuthentication()
  const [error, setError] = useState('')

  const model = {
    email: 'kelvin_wolff95@yahoo.com',
    password: '123456'
  }

  const schema = yup.object().shape({
    email: yup
      .string()
      .email(errorsMessages.email)
      .required(errorsMessages.required),
    password: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(6, errorsMessages.minLength(6))
  })

  const handleToken = ({ token }) => setToken(token)
  const handleUser = () => profile().then(({ data }) => setUser(data))
  const handleRedirect = () => history.push('/dashboard')
  const showAlertError = (error) => setError(error.response.data.message)

  const handleLogin = (payload) => login(payload)
    .then(handleToken)
    .then(handleUser)
    .then(handleRedirect)
    .catch(showAlertError)
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    handleLogin(values).finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <IonItem lines="none">
        <AppLabel title="Email" error={errors.email} touched={touched.email} />
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
        <AppLabel title="Password" error={errors.password} touched={touched.password} />
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
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Submit</IonButton>
      <IonButton routerLink="/register">Register</IonButton>
      <IonButton routerLink="/forgot-password">Forgot Password</IonButton>
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
        <h3>Login</h3>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <IonAlert
          isOpen={!!error}
          onDidDismiss={setError}
          message={error}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
