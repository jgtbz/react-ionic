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
import { createUsers } from '../../../services/users'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [showSuccess, setShowSuccess] = useState(true)
  const [showError, setShowError] = useState('')

  const model = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Campo obrigatório'),
    email: yup
      .string()
      .email('Email inválido')
      .required('Campo obrigatório'),
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

  const handleSuccess = () => setShowSuccess(true)
  const handleError = (error) => setShowError(error.response.data.message)
  const handleRedirect = () => {
    console.log('sdasdasd')
  }
  
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
        <h3>Register</h3>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <IonAlert
          isOpen={!!showSuccess}
          onDidDismiss={setShowSuccess}
          onDidPresent={handleRedirect}
          message={'Success'}
          buttons={['OK']}
        />
        <IonAlert
          isOpen={!!showError}
          onDidDismiss={setShowError}
          message={showError}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
