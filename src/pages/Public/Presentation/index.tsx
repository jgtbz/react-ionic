import React from 'react'
import {
  IonPage,
  IonContent,
  IonSlides,
  IonSlide,
  IonButton
} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'

const Component: React.FC<RouteComponentProps> = ({ history }) => (
  <IonPage>
    <IonContent>
      <IonSlides>
        <IonSlide>
          <IonButton color="secondary" routerLink="/login" routerDirection="none">Login</IonButton>
        </IonSlide>
        <IonSlide>
          <h1>Slide 2</h1>
        </IonSlide>
        <IonSlide>
          <h1>Slide 3</h1>
        </IonSlide>
      </IonSlides>
    </IonContent>
  </IonPage>
)

export default Component
