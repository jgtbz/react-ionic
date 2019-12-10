import React from 'react'
import { IonLabel } from '@ionic/react'

const Component = ({ title, position = 'stacked', error }) => (
  <IonLabel position={position} color={!!error ? 'danger' : 'black'}>
    {title}
  </IonLabel>
)

export default Component
