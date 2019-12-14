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
} from '../../../services/auth'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [currentStep, setCurrentStep] = useState('sendPin')
  const [showAlert, setShowAlert] = useState('')

  const model = {
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  }

  const emailSchema = yup
    .string()
    .email('Email inválido')
    .required('Campo obrigatório')
  
  const codeSchema = yup
    .string()
    .required('Campo obrigatório')

  const passwordSchema = yup
    .string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(6, 'Máximo de 6 caracteres')

  const confirmPasswordSchema = yup
    .string()
    .required('Campo obrigatório')
    .min(4, 'Mínimo de 4 caracteres')
    .max(6, 'Máximo de 6 caracteres')
    .oneOf([yup.ref('password'), null], 'Senhas não conferem')

  const schemaSteps = {
    sendPin: {
      email: emailSchema
    },
    validatePin: {
      code: codeSchema
    },
    forgotPassword: {
      password: passwordSchema,
      confirmPassword: confirmPasswordSchema
    }
  }
  const schemaStep = schemaSteps[currentStep]

  const schema = yup.object().shape(schemaStep)

  const changeCurrentStep = (value) => () => setCurrentStep(value)

  const changeCurrentStepToValidatePin = changeCurrentStep('validatePin')
  const changeCurrentStepToForgotPassword = changeCurrentStep('forgotPassword')

  const handleValidatePinSuccess = () => setShowAlert('Código enviado com sucesso')
  const handleError = (error) => setShowAlert(error.response.data.message)
  const handleRedirect = () => history.push('/login')
  
  const handleForgotPasswordSendPin = (values) => forgotPasswordSendPin(values)
    .then(handleValidatePinSuccess)
    .then(changeCurrentStepToValidatePin)
    .catch(handleError)

  const handleForgotPasswordValidatePin = (values) => forgotPasswordValidatePin(values)
    .then(changeCurrentStepToForgotPassword)
    .catch(handleError)

  const handleForgotPassword = (values) => forgotPassword(values)
    .then(handleRedirect)
    .catch(handleError)

  const steps = {
    sendPin: handleForgotPasswordSendPin,
    validatePin: handleForgotPasswordValidatePin,
    forgotPassword: handleForgotPassword
  }

  const handleSubmit = (values, actions) => {
     const step = steps[currentStep]
     actions.setSubmitting(true)
     step(values).finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => (
    <form onSubmit={handleSubmit}>
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
        <AppLabel title="Code" error={errors.code} />
        <IonInput
          name="code"
          value={values.code}
          onIonInput={handleChange}
        />
        <AppFormInputError
          error={errors.code}
          touched={touched.code}
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
          message={showAlert}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
