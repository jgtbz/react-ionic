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

  const changeCurrentStepToValidatePin = changeCurrentStep('validatePin')
  const changeCurrentStepToForgotPassword = changeCurrentStep('forgotPassword')

  const handleValidatePinSuccess = ({ message }) => setAlert(message)
  const handleError = (error) => setAlert(error.response.data.message)
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

  const Form = ({ handleSubmit, values, errors, touched, isSubmitting, dirty, handleChange }) => {
    const emailField = (
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
    )
    const codeField = (
      <IonItem lines="none">
        <AppLabel title="Code" error={errors.code} touched={touched.code} />
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
    )
    const passwordField = (
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
    )
    const confirmPasswordField = (
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
    )

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
        {fields.map((Field, index) => <Field key={index} />)}
        <IonButton type="submit" disabled={!dirty && isSubmitting}>Submit</IonButton>
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
        <h3>Forgot Password</h3>
        <AppForm
          model={model}
          schema={schema}
          handleSubmit={handleSubmit}
          Form={Form} />
        <IonAlert
          isOpen={!!alert}
          onDidDismiss={setAlert}
          message={alert}
          buttons={['OK']}
        />
      </IonContent>
    </IonPage>
  )
}

export default Component
