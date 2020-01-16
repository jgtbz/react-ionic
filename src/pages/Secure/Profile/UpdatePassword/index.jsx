import React, { useState } from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonInput,
  IonButton
} from '@ionic/react'
import {
  AppForm,
  AppFormItem,
  AppAlert
} from '../../../../components'
import { updatePassword } from '../../../../services/users'
import { errorsMessages } from '../../../../support/validators'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const model = {
    currentPassword: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    currentPassword: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(6, errorsMessages.minLength(6)),
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
      .oneOf([yup.ref('password'), null], errorsMessages.sameAsPassword)
  })

  const cleanAlertSuccess = () => setSuccess('')
  const cleanAlertError = () => setError('')

  const handleAlert = (setState) => ({ message }) => setState(message)
  const handleSuccess = handleAlert(setSuccess)
  const handleError = handleAlert(setError)
  const handleRedirect = () => history.goBack()
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    updatePassword(values)
      .then(handleSuccess)
      .then(actions.resetForm)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <AppFormItem
        label="Senha atual"
        placeholder="Entre com a sua senha atual"
        name="currentPassword"
        type="password"
        value={values.currentPassword}
        error={errors.currentPassword}
        touched={touched.password}
        handleChange={handleChange}
        Input={IonInput} />
      <AppFormItem
        label="Nova senha"
        placeholder="Entre com a sua nova senha"
        name="password"
        type="password"
        value={values.password}
        error={errors.password}
        touched={touched.password}
        handleChange={handleChange}
        Input={IonInput} />
      <AppFormItem
        label="Confirme a senha"
        placeholder="Confirme a sua senha"
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        error={errors.confirmPassword}
        touched={touched.confirmPassword}
        handleChange={handleChange}
        Input={IonInput} />
      <IonButton type="submit" disabled={!dirty && isSubmitting}>Enviar</IonButton>
    </form>
  )

  const alertSuccessButtons = [
    {
      text: 'Ok',
      handler: handleRedirect
    }
  ]

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Alterar senha</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <AppAlert
          message={success}
          buttons={alertSuccessButtons}
          onDidDismiss={cleanAlertSuccess} />
        <AppAlert
          message={error}
          onDidDismiss={cleanAlertError} />
      </IonContent>
    </IonPage>
  )
}

export default Component
