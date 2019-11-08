import React from 'react'
import { IonApp } from '@ionic/react'

import { IonReactRouter } from '@ionic/react-router'

import { Public, Secure } from './layouts'

import '@ionic/react/css/core.css'
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'

import './theme/variables.css'

const App: React.FC = () => {
  const token = window.localStorage.getItem('token')

  const Layout = token
    ? Secure
    : Public

  return (
    <IonApp>
      <IonReactRouter>
        <Layout />
      </IonReactRouter>
    </IonApp>
  )
}

export default App
