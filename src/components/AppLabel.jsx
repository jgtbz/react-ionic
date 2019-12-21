import React from 'react'
import { IonLabel } from '@ionic/react'

const Component = ({ title, position = 'stacked', error, touched }) => (
  <IonLabel position={position} color={error && touched ? 'danger' : 'black'}>
    {title}
  </IonLabel>
)

export default Component
