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
import { home, power } from 'ionicons/icons'
import { useStore } from '../../../store'

const Component = ({ history }) => {
  const [, dispatch] = useStore()
  
  const logout = () => {
    dispatch({ type: 'setLogout' })
    history.push('/presentation')
  } // refactor

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonFab vertical="top" horizontal="start">
        <IonFabButton onClick={() => history.push('/profile')}>
            <IonIcon icon={home} />
          </IonFabButton>
        </IonFab>
        <IonFab vertical="top" horizontal="end">
          <IonFabButton onClick={logout}>
            <IonIcon icon={power} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default Component
