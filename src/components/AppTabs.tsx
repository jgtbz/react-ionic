import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react'

import { Home, List, Details } from '../pages'
import { home, list } from 'ionicons/icons'

const Tabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/home" component={Home} exact />
      <Route path="/list" component={List} exact />
      <Route path="/details" component={Details} exact />
      <Route path="/" render={() => <Redirect to="/home" exact /> } />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/home">
        <IonIcon icon={home} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="list" href="/list">
        <IonIcon icon={list} />
        <IonLabel>List</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
)

export default withRouter(Tabs)
