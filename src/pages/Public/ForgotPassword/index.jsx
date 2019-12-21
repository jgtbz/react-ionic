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
import {
  forgotPasswordSendPin,
  forgotPasswordValidatePin,
  forgotPassword
} from '../../../services/auth'
import { errorsMessages } from '../../../support/validators'
import * as yup from 'yup'

const Component = ({ history }) => {
  const [currentStep, setCurrentStep] = useState('sendPin')
  const [alert, setAlert] = useState('')

  const model = {
    email: '',
    code: '',
    password: '',
    confirmPassword: ''
  }

  const emailSchema = yup
    .string()
    .email(errorsMessages.email)
    .required(errorsMessages.required)
  
  const codeSchema = yup
    .string()
    .required(errorsMessages.required)

  const passwordSchema = yup
    .string()
    .required(errorsMessages.required)
    .min(4, errorsMessages.minLength(4))
    .max(6, errorsMessages.maxLength(6))

  const confirmPasswordSchema = yup
    .string()
    .required(errorsMessages.required)
    .min(4, errorsMessages.minLength(4))
    .max(6, errorsMessages.maxLength(6))
    .oneOf([yup.ref('password'), null], errorsMessages.asSamePassword)

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

  const changeCurrentStepToSendPin = changeCurrentStep('sendPin')
  const changeCurrentStepToValidatePin = changeCurrentStep('validatePin')
  const changeCurrentStepToForgotPassword = changeCurrentStep('forgotPassword')

  const cleanAlert = () => setAlert('')

  const handleAlert = ({ message }) => setAlert(message)
  const handleRedirect = () => history.push('/login')
  
  const handleForgotPasswordSendPin = (values) => forgotPasswordSendPin(values)
    .then(handleAlert)
    .then(changeCurrentStepToValidatePin)
    .catch(handleAlert)

  const handleForgotPasswordValidatePin = (values) => forgotPasswordValidatePin(values)
    .then(changeCurrentStepToForgotPassword)
    .catch(handleAlert)

  const handleForgotPassword = (values, { resetForm }) => forgotPassword(values)
    .then(handleAlert)
    .then(handleRedirect)
    .then(changeCurrentStepToSendPin)
    .then(resetForm)
    .catch(handleAlert)

  const steps = {
    sendPin: handleForgotPasswordSendPin,
    validatePin: handleForgotPasswordValidatePin,
    forgotPassword: handleForgotPassword
  }
  const step = steps[currentStep]

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true)
    step(values, actions).finally(() => actions.setSubmitting(false))
  }

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => {
    const emailField = {
      label: 'Email',
      placeholder: 'Entre com o seu email',
      name: 'email',
      value: values.email,
      error: errors.email,
      touched: touched.email,
      Input: IonInput
    }
    const codeField = {
      label: 'Code',
      placeholder: 'Entre com o código',
      name: 'code',
      value: values.code,
      error: errors.code,
      touched: touched.code,
      Input: IonInput
    }
    const passwordField = {
      label: 'Password',
      placeholder: 'Entre com a sua senha',
      name: 'password',
      value: values.password,
      error: errors.password,
      touched: touched.password,
      Input: IonInput
    }
    const confirmPasswordField = {
      label: 'Confirm Password',
      placeholder: 'Confirme a sua senha',
      name: 'confirmPassword',
      value: values.confirmPassword,
      error: errors.confirmPassword,
      touched: touched.confirmPassword,
      Input: IonInput
    }

    const stepsFields = {
      sendPin: [
        emailField
      ],
      validatePin: [
        codeField
      ],
      forgotPassword: [
        passwordField,
        confirmPasswordField
      ]
    }
    const fields = stepsFields[currentStep]

    return (
      <form onSubmit={handleSubmit}>
        {fields.map((field, index) => (
          <AppFormItem
            key={index}
            handleChange={handleChange}
            {...field} />
        ))}
        <IonButton type="submit" disabled={!dirty && isSubmitting}>Enviar</IonButton>
        <IonButton routerLink="/login">Login</IonButton>
      </form>
    )
  }

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
        <h3>Redefina sua senha</h3>
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
