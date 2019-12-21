import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonInput,
  IonButton,
} from '@ionic/react'
import {
  AppForm,
  AppFormItem,
  AppAlert
} from '../../../components'
import { login } from '../../../services/auth'
import { profile } from '../../../services/users'
import { useAuthentication } from '../../../store'
import { errorsMessages } from '../../../support/validators'
import * as yup from 'yup'

const Component = ({ history }) => {
  const { setToken, setUser } = useAuthentication()
  const [alert, setAlert] = useState('')

  const model = {
    email: '',
    password: ''
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

  const cleanAlert = () => setAlert('')

  const handleToken = ({ token }) => setToken(token)
  const handleUser = () => profile().then(({ data }) => setUser(data))
  const handleRedirect = () => history.push('/dashboard')
  const handleAlert = ({ message }) => setAlert(message)

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    login(values)
      .then(handleToken)
      .then(handleUser)
      .then(handleRedirect)
      .then(actions.resetForm)
      .catch(handleAlert)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <AppFormItem
        label="Email"
        placeholder="Entre com o seu email"
        name="email"
        value={values.email}
        error={errors.email}
        touched={touched.email}
        handleChange={handleChange}
        Input={IonInput} />
      <AppFormItem
        label="Senha"
        placeholder="Entre com a sua senha"
        name="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        handleChange={handleChange}
        Input={IonInput} />
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Enviar</IonButton>
      <IonButton routerLink="/register">Cadastro</IonButton>
      <IonButton routerLink="/forgot-password">Esqueceu a senha ?</IonButton>
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
        <AppAlert
          message={alert}
          onDidDismiss={cleanAlert} />
      </IonContent>
    </IonPage>
  )
}

export default Component
