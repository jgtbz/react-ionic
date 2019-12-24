import React from 'react'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/react'
import { useStateValue } from '../../../store'

const Component = ({ history }) => {
  const [{ user }] = useStateValue()
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>Minha Conta</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <h3>{JSON.stringify(user)}</h3>
        <IonButton onClick={() => history.push('/updatePassword')}>Alterar Senha</IonButton>
      </IonContent>
    </IonPage>
  )
}

export default Component
