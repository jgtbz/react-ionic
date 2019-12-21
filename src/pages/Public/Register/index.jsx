import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/react'
import {
  AppForm,
  AppFormItem,
  AppAlert
} from '../../../components'
import { createUsers } from '../../../services/users'
import { errorsMessages } from '../../../support/validators'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [alert, setAlert] = useState('')

  const model = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required(errorsMessages.required),
    email: yup
      .string()
      .email(errorsMessages.email)
      .required(errorsMessages.required),
    password: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(6, errorsMessages.minLength(6)),
    confirmPassword: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(6, errorsMessages.minLength(6))
      .oneOf([yup.ref('password'), null], errorsMessages.asSamePassword)
  })

  const cleanAlert = () => setAlert('')

  const handleAlert = ({ message }) => setAlert(message)
  const handleRedirect = () => history.push('/login')
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    createUsers(values)
      .then(handleAlert)
      .then(actions.resetForm)
      .then(handleRedirect)
      .catch(handleAlert)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <AppFormItem
        label="Nome"
        placeholder="Entre com o seu nome"
        name="name"
        value={values.name}
        error={errors.name}
        touched={touched.name}
        handleChange={handleChange}
        Input={IonInput} />
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
        type="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        handleChange={handleChange}
        Input={IonInput} />
      <AppFormItem
        label="Confirme a senha"
        placeholder="Entre com o sua senha"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        handleChange={handleChange}
        Input={IonInput} />
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Enviar</IonButton>
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
        <h3>Cadastro</h3>
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
