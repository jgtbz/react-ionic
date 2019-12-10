import React, { useState, useEffect } from 'react'
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
import { AppForm } from '../../../components'
import { login } from '../../../services/auth'
import { profile } from '../../../services/users'
import { useAuthentication } from '../../../store'
import * as yup from 'yup'

const Component = ({ history }) => {
  const { token, isLogged, setToken, setUser } = useAuthentication()
  const [showError, setShowError] = useState('')

  useEffect(() => {
    console.log({ isLoggedFromComponent: isLogged })
  }, [token])

  const model = {
    email: 'kelvin_wolff95@yahoo.com',
    password: '123456'
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

  const handleToken = ({ data }) => setToken(data.token)
  const handleUser = () => profile().then(({ data }) => setUser(data.data))
  const handleRedirect = () => history.push('/dashboard')
  const showAlertError = (error) => setShowError(error.response.data.message)

  const handleLogin = (values) => login(values)
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
        <IonLabel position="stacked" color={!!errors.email ? 'danger' : 'black'}>Email</IonLabel>
        <IonInput
          name="email"
          value={values.email}
          onIonInput={handleChange}
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
          onIonInput={handleChange}
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
