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

const Component = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/presentation" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3>Register</h3>
        <IonItem>
          <IonLabel>Name</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Email</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Password</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Confirm Password</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonButton>Submit</IonButton>
        <IonButton routerLink="/login">Login</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Component
