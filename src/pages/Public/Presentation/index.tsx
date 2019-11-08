import React from 'react'
import {
  IonContent,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react'
import { RouteComponentProps, Redirect } from 'react-router-dom'

const Component: React.FC<RouteComponentProps> = ({ history }) => (
  <IonContent>
    <IonSlides>
      <IonSlide>
        <IonButton color="primary" routerLink="/login">Login</IonButton>
      </IonSlide>
      <IonSlide>
        <h1>Slide 2</h1>
      </IonSlide>
      <IonSlide>
        <h1>Slide 3</h1>
      </IonSlide>
    </IonSlides>
  </IonContent>
)

export default Component
