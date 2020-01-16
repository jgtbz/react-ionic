import React from 'react'
import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react'
import { logo } from '../../../assets'

const Component = () => {
  return (
    <IonPage>
      <IonContent>
        <IonSlides pager>
          <IonSlide>
            <img src={logo} alt="Ionic + React" />
            <h1>Ionic + React</h1>
          </IonSlide>
          <IonSlide>
            <img src={logo} alt="Ionic + React" />
            <h1>Ionic + React</h1>
            <IonButton shape="round" expand="block" fill="outline" routerLink="/login">Login</IonButton>
            <IonButton shape="round" expand="block" fill="outline" routerLink="/register">Cadastro</IonButton>
          </IonSlide>
        </IonSlides>
      </IonContent>
    </IonPage>
  )
}

export default Component
