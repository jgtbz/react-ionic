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
import {
  AppForm,
  AppFormInputError,
  AppLabel
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
      .max(6, errorsMessages.maxLength(6)),
    confirmPassword: yup
      .string()
      .required(errorsMessages.required)
      .min(4, errorsMessages.minLength(4))
      .max(6, errorsMessages.maxLength(6))
      .oneOf([yup.ref('password'), null], errorsMessages.asSamePassword)
  })

  const handleSuccess = ({ message }) => setAlert(message)
  const handleError = (error) => setAlert(error.response.data.message)
  const handleRedirect = () => history.push('/login')
  
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    createUsers(values)
      .then(handleSuccess)
      .catch(handleError)
      .finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
      <IonItem lines="none">
        <AppLabel title="Name" error={errors.name} touched={touched.name} />
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
      <IonItem lines="none">
        <AppLabel title="Confirm Password" error={errors.confirmPassword} touched={touched.confirmPassword} />
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

  const alertButtons = [
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
            <IonBackButton defaultHref="/presentation" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h3>Register</h3>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <IonAlert
          isOpen={!!alert}
          onDidDismiss={setAlert}
          message={alert}
          buttons={alertButtons}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
