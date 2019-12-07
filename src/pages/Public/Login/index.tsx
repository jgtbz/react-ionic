import React from 'react'
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
  IonButton
} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'
import { login } from '../../../services/auth'

const Component: React.FC<RouteComponentProps> = () => {
  console.log({ login })
  login({ email: 'chaz_rowe21@yahoo.com', password: '123456' }).then(response => console.log(response))
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
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton>Submit</IonButton>
        <IonButton routerLink="/register">Register</IonButton>
        <IonButton routerLink="/forgot-password">Forgot Password</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Component
