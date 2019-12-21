import React from 'react'
import { IonAlert } from '@ionic/react'

const Component = ({ message, onDidDismiss }) => (
  <IonAlert
    isOpen={!!message}
    onDidDismiss={onDidDismiss}
    header={'Atenção'}
    message={message}
    buttons={['OK']}
  />
)

export default Component
