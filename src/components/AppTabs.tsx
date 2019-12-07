import React from 'react'
import { Route, Redirect, withRouter, RouteComponentProps } from 'react-router-dom'
import {
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/react'

import { Dashboard, Page1, Page11, Page2, Page3, Page4 } from '../pages/Secure'
import { home } from 'ionicons/icons'

interface Tab {
  title: string
  tab: string,
  url: string,
  icon: object
}

const tabs: Tab[] = [
  {
    title: 'Page 1',
    tab: 'page1',
    url: '/page1',
    icon: home
  },
  {
    title: 'Page 2',
    tab: 'page2',
    url: '/page2',
    icon: home
  },
  {
    title: 'Page 3',
    tab: 'page3',
    url: '/page3',
    icon: home
  },
  {
    title: 'Page 4',
    tab: 'page4',
    url: '/page4',
    icon: home
  }
]

const Tabs: React.FC<RouteComponentProps> = ({ location }) => {
  const isSelected = (url: string) => url === location.pathname
  return (
    <IonTabs>
      <IonRouterOutlet id="main">
        <Route path="/dashboard" component={Dashboard} exact />
        <Route path="/page1" component={Page1} exact />
        <Route path="/page11" component={Page11} exact />
        <Route path="/page2" component={Page2} exact />
        <Route path="/page3" component={Page3} exact />
        <Route path="/page4" component={Page4} exact />
        <Route path="/" render={() => <Redirect to="/dashboard" exact /> } />
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        {tabs.map((item, index) => (
          <IonTabButton key={index} tab={item.tab} href={item.url} selected={isSelected(item.url)}>
            <IonIcon icon={item.icon} />
            <IonLabel>{item.title}</IonLabel>
          </IonTabButton>
        ))}
      </IonTabBar>
    </IonTabs>
  )
}

export default withRouter(Tabs)
