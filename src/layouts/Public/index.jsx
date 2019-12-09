import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonApp, IonContent, IonRouterOutlet } from '@ionic/react'

import { Presentation, Login, Register, ForgotPassword } from '../../pages/Public'

const Public = () => (
  <IonApp>
    <IonContent>
      <IonRouterOutlet id="main">
        <Route path="/presentation" component={Presentation} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <Route path="/" render={() => <Redirect to="/presentation" exact /> } />
      </IonRouterOutlet>
    </IonContent>
  </IonApp>
)

export default Public
