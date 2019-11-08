import React from 'react'
import { IonApp, IonContent } from '@ionic/react'

import { AppMenu, AppTabs } from '../../components'

const Secure: React.FC = () => (
  <IonApp>
    <IonContent>
      <AppMenu />
      <AppTabs />
    </IonContent>
  </IonApp>
)

export default Secure
