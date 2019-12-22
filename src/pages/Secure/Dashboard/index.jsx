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
import { useStateValue } from '../../../store'

const Component = ({ history }) => {
  const [{user}, dispatch] = useStateValue()
  
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
        <IonFab vertical="top" horizontal="end">
          <IonFabButton onClick={logout}>
            <IonIcon icon={power} />
          </IonFabButton>
        </IonFab>
        <h3>Dashboard Here</h3>
        {JSON.stringify(user)}
      </IonContent>
    </IonPage>
  )
}

export default Component
