import React from 'react'
import { IonApp, IonContent } from '@ionic/react'
import { AppMenu, AppTabs } from '../../components'

const Component = () => (
  <IonApp>
    <IonContent>
      <AppMenu />
      <AppTabs />
    </IonContent>
  </IonApp>
)

export default Component
