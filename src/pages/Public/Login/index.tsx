import React from 'react'
import {
  IonPage,
  IonContent
} from '@ionic/react'
import { RouteComponentProps } from 'react-router-dom'

const Component: React.FC<RouteComponentProps> = () => {
  return (
    <IonPage>
      <IonContent>
        <h3>Login</h3>
      </IonContent>
    </IonPage>
  )
}

export default Component
