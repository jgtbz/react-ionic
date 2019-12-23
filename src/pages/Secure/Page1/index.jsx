import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/react'
import { power } from 'ionicons/icons'

const Component = ({ history }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Page 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="end">
          <IonFabButton onClick={() => history.push('/page11')}>
            <IonIcon icon={power} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default Component
