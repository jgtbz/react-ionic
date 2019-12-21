import React from 'react'
import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react'

const Component = () => (
  <IonPage>
    <IonContent>
      <IonSlides>
        <IonSlide>
          <h1>Slide 1</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <div>
            <h1>Slide 3</h1>
            <IonButton routerLink="/login">Login</IonButton>
            <IonButton routerLink="/register">Cadastro</IonButton>
          </div>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
)

export default Component
