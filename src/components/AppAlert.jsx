import React from 'react'
import { IonAlert } from '@ionic/react'

const Component = ({ message, buttons = ['Ok'], onDidDismiss }) => (
  <IonAlert
    isOpen={!!message}
    onDidDismiss={onDidDismiss}
    header={'Atenção'}
    message={message}
    buttons={buttons}
  />
)

export default Component
