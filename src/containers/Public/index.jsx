import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { IonContent, IonRouterOutlet } from '@ionic/react'
import {
  Presentation,
  Login,
  Register,
  ForgotPassword
} from '../../pages/Public'

const Component = () => (
  <IonContent>
    <IonRouterOutlet id="main">
      <Route path="/presentation" component={Presentation} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/" render={() => <Redirect to="/presentation" /> } />
    </IonRouterOutlet>
  </IonContent>
)

export default Component
